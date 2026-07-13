-- Run this once against your Turso database, or let the server create it
-- automatically on first boot (server.js runs the same statement on startup).

CREATE TABLE IF NOT EXISTS boards (
  term_key   TEXT PRIMARY KEY,   -- e.g. "ilab-plan-fall2026-v1"
  data       TEXT NOT NULL,      -- full board state as JSON (tasks, dates, notes, export rows...)
  updated_by TEXT,               -- optional initials/name of whoever last saved
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);
