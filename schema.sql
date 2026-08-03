-- Run this once against your Turso database, or let the server create it
-- automatically on first boot (server.js runs the same statement on startup).

CREATE TABLE IF NOT EXISTS boards (
  term_key   TEXT PRIMARY KEY,   -- e.g. "ilab-plan-fall2026-v1"
  data       TEXT NOT NULL,      -- full board state as JSON (tasks, dates, notes, export rows...)
  version    INTEGER NOT NULL DEFAULT 1,  -- bumped on every save; used to detect "someone else saved first"
  updated_by TEXT,               -- optional initials/name of whoever last saved
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- Every successful save also writes a snapshot here. This is the safety net:
-- if a bad save or a conflict ever slips through, nothing is unrecoverable —
-- you can look up or restore an earlier version instead of losing the work.
CREATE TABLE IF NOT EXISTS board_history (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  term_key   TEXT NOT NULL,
  data       TEXT NOT NULL,
  version    INTEGER NOT NULL,
  updated_by TEXT,
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS idx_board_history_term ON board_history(term_key, id);
