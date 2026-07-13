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
      updated_by TEXT,
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    )
  `);
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
      sql: "SELECT data, updated_by, updated_at FROM boards WHERE term_key = ?",
      args: [req.params.termKey]
    });
    if (!result.rows.length) {
      return res.status(404).json({ error: "not_found" });
    }
    const row = result.rows[0];
    res.json({
      data: JSON.parse(row.data),
      updatedBy: row.updated_by,
      updatedAt: row.updated_at
    });
  } catch (err) {
    console.error("GET /api/board failed", err);
    res.status(500).json({ error: "server_error" });
  }
});

app.put("/api/board/:termKey", async (req, res) => {
  const { data, updatedBy } = req.body || {};
  if (!data) return res.status(400).json({ error: "missing_data" });
  try {
    await db.execute({
      sql: `
        INSERT INTO boards (term_key, data, updated_by, updated_at)
        VALUES (?, ?, ?, datetime('now'))
        ON CONFLICT(term_key) DO UPDATE SET
          data = excluded.data,
          updated_by = excluded.updated_by,
          updated_at = excluded.updated_at
      `,
      args: [req.params.termKey, JSON.stringify(data), updatedBy || null]
    });
    res.json({ ok: true });
  } catch (err) {
    console.error("PUT /api/board failed", err);
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
