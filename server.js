import express from "express";
import { createClient } from "@libsql/client";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const {
  TURSO_DATABASE_URL,
  TURSO_AUTH_TOKEN,
  BASIC_AUTH_USER,
  BASIC_AUTH_PASS,
  PORT = 3000
} = process.env;

if (!TURSO_DATABASE_URL || !TURSO_AUTH_TOKEN) {
  console.error("Missing TURSO_DATABASE_URL or TURSO_AUTH_TOKEN environment variables.");
  process.exit(1);
}

const db = createClient({
  url: TURSO_DATABASE_URL,
  authToken: TURSO_AUTH_TOKEN
});

async function ensureSchema() {
  await db.execute(`
    CREATE TABLE IF NOT EXISTS boards (
      term_key TEXT PRIMARY KEY,
      data TEXT NOT NULL,
      version INTEGER NOT NULL DEFAULT 1,
      updated_by TEXT,
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    )
  `);
  // Migration for databases created before the "version" column existed.
  // ALTER TABLE ADD COLUMN fails if the column is already there, so we
  // just swallow that specific case.
  try {
    await db.execute(`ALTER TABLE boards ADD COLUMN version INTEGER NOT NULL DEFAULT 1`);
  } catch (e) {
    // already has the column — fine
  }
  await db.execute(`
    CREATE TABLE IF NOT EXISTS board_history (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      term_key TEXT NOT NULL,
      data TEXT NOT NULL,
      version INTEGER NOT NULL,
      updated_by TEXT,
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    )
  `);
  await db.execute(`CREATE INDEX IF NOT EXISTS idx_board_history_term ON board_history(term_key, id)`);
}

const app = express();
app.use(express.json({ limit: "5mb" }));

// Optional basic-auth gate — set BASIC_AUTH_USER + BASIC_AUTH_PASS in Render's
// environment variables to require a login before anyone can view or edit the
// board. Leave both unset to keep the app open to anyone with the URL.
if (BASIC_AUTH_USER && BASIC_AUTH_PASS) {
  app.use((req, res, next) => {
    const header = req.headers.authorization || "";
    const [scheme, encoded] = header.split(" ");
    if (scheme === "Basic" && encoded) {
      const [user, pass] = Buffer.from(encoded, "base64").toString().split(":");
      if (user === BASIC_AUTH_USER && pass === BASIC_AUTH_PASS) return next();
    }
    res.set("WWW-Authenticate", 'Basic realm="i-lab planning"');
    res.status(401).send("Authentication required.");
  });
}

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/health", (req, res) => res.json({ ok: true }));

app.get("/api/board/:termKey", async (req, res) => {
  try {
    const result = await db.execute({
      sql: "SELECT data, version, updated_by, updated_at FROM boards WHERE term_key = ?",
      args: [req.params.termKey]
    });
    if (!result.rows.length) {
      return res.status(404).json({ error: "not_found" });
    }
    const row = result.rows[0];
    res.json({
      data: JSON.parse(row.data),
      version: row.version,
      updatedBy: row.updated_by,
      updatedAt: row.updated_at
    });
  } catch (err) {
    console.error("GET /api/board failed", err);
    res.status(500).json({ error: "server_error" });
  }
});

app.put("/api/board/:termKey", async (req, res) => {
  const { data, updatedBy, version } = req.body || {};
  if (!data) return res.status(400).json({ error: "missing_data" });
  try {
    const current = await db.execute({
      sql: "SELECT version, updated_by, updated_at FROM boards WHERE term_key = ?",
      args: [req.params.termKey]
    });
    const currentVersion = current.rows.length ? current.rows[0].version : 0;

    // If the client told us what version it loaded, and that no longer
    // matches what's in the database, someone else saved in the meantime.
    // Refuse the blind overwrite instead of silently discarding their work.
    if (current.rows.length && typeof version === "number" && version !== currentVersion) {
      return res.status(409).json({
        error: "version_conflict",
        message: "This board was saved by someone else since you last loaded it.",
        currentVersion,
        currentUpdatedBy: current.rows[0].updated_by,
        currentUpdatedAt: current.rows[0].updated_at
      });
    }

    const newVersion = currentVersion + 1;
    await db.execute({
      sql: `
        INSERT INTO boards (term_key, data, version, updated_by, updated_at)
        VALUES (?, ?, ?, ?, datetime('now'))
        ON CONFLICT(term_key) DO UPDATE SET
          data = excluded.data,
          version = excluded.version,
          updated_by = excluded.updated_by,
          updated_at = excluded.updated_at
      `,
      args: [req.params.termKey, JSON.stringify(data), newVersion, updatedBy || null]
    });

    // Snapshot every save. Cheap insurance: if anything ever goes wrong,
    // there's always a prior version to recover from.
    await db.execute({
      sql: `INSERT INTO board_history (term_key, data, version, updated_by) VALUES (?, ?, ?, ?)`,
      args: [req.params.termKey, JSON.stringify(data), newVersion, updatedBy || null]
    });

    res.json({ ok: true, version: newVersion });
  } catch (err) {
    console.error("PUT /api/board failed", err);
    res.status(500).json({ error: "server_error" });
  }
});

// Recovery endpoints — list recent snapshots for a term, and restore one.
app.get("/api/board/:termKey/history", async (req, res) => {
  try {
    const result = await db.execute({
      sql: "SELECT id, version, updated_by, updated_at FROM board_history WHERE term_key = ? ORDER BY id DESC LIMIT 50",
      args: [req.params.termKey]
    });
    res.json({ history: result.rows });
  } catch (err) {
    console.error("GET /api/board/:termKey/history failed", err);
    res.status(500).json({ error: "server_error" });
  }
});

app.post("/api/board/:termKey/restore/:historyId", async (req, res) => {
  try {
    const snap = await db.execute({
      sql: "SELECT data FROM board_history WHERE id = ? AND term_key = ?",
      args: [req.params.historyId, req.params.termKey]
    });
    if (!snap.rows.length) return res.status(404).json({ error: "not_found" });

    const current = await db.execute({
      sql: "SELECT version FROM boards WHERE term_key = ?",
      args: [req.params.termKey]
    });
    const newVersion = (current.rows.length ? current.rows[0].version : 0) + 1;
    const restoredData = snap.rows[0].data;

    await db.execute({
      sql: `
        INSERT INTO boards (term_key, data, version, updated_by, updated_at)
        VALUES (?, ?, ?, ?, datetime('now'))
        ON CONFLICT(term_key) DO UPDATE SET
          data = excluded.data,
          version = excluded.version,
          updated_by = excluded.updated_by,
          updated_at = excluded.updated_at
      `,
      args: [req.params.termKey, restoredData, newVersion, "restore"]
    });
    await db.execute({
      sql: `INSERT INTO board_history (term_key, data, version, updated_by) VALUES (?, ?, ?, ?)`,
      args: [req.params.termKey, restoredData, newVersion, "restore"]
    });

    res.json({ ok: true, version: newVersion, data: JSON.parse(restoredData) });
  } catch (err) {
    console.error("POST /api/board/:termKey/restore failed", err);
    res.status(500).json({ error: "server_error" });
  }
});

// Anything else falls back to the app shell (single-page app).
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

ensureSchema()
  .then(() => {
    app.listen(PORT, () => console.log(`i-lab planning server listening on port ${PORT}`));
  })
  .catch(err => {
    console.error("Failed to set up database schema", err);
    process.exit(1);
  });
