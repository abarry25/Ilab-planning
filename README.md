# i-lab Fall/Spring Planning Timeline — deployment guide

This is the same planning board you've been using in Claude, now as a small
standalone web app: an Express server backed by a Turso (hosted SQLite)
database, deployable on Render. Anyone with the URL can view and edit it —
no Claude account needed.

## How it's put together

- `server.js` — the whole backend. Two real endpoints:
  - `GET /api/board/:termKey` — load a term's board
  - `PUT /api/board/:termKey` — save a term's board
  It also serves the frontend files in `public/` and creates the database
  table automatically on first startup.
- `public/index.html`, `public/styles.css`, `public/app.js` — the frontend
  you already know (day/week toggle, term tabs, editable rows, ClickUp
  export). `app.js` now talks to `/api/board/...` with `fetch()` instead of
  Claude's artifact storage.
- Each term (`Fall 2026`, `Spring 2027`) is one row in the `boards` table,
  stored as a JSON blob — same shape the app already used internally, so
  nothing about how the board behaves had to change, just where it saves to.

**What's different from the Claude version:** saves are now attributed —
the first time someone opens the app in their browser, it asks for their
initials/name (stored locally in their browser) and tags every save with
it, so the "Saved" status line shows who last touched the board and when.

## Step 1 — Create the Turso database

1. Install the Turso CLI and sign in (see https://docs.turso.tech/quickstart
   if you don't have this already — it's a one-line install).
2. Create the database:
   ```
   turso db create ilab-planning
   ```
3. Get the connection URL:
   ```
   turso db show ilab-planning --url
   ```
   This is your `TURSO_DATABASE_URL` — looks like
   `libsql://ilab-planning-yourorg.turso.io`.
4. Create an auth token:
   ```
   turso db tokens create ilab-planning
   ```
   This is your `TURSO_AUTH_TOKEN`. Save both somewhere safe — you'll paste
   them into Render in Step 3.

You don't need to run `schema.sql` by hand — the server creates the
`boards` table itself the first time it starts. It's included in this repo
for reference, or in case you ever want to inspect/migrate the database
directly with `turso db shell ilab-planning`.

## Step 2 — Push this to a Git repo

Render deploys from a Git repository (GitHub, GitLab, or a public Git URL).
From inside this folder:

```
git init
git add .
git commit -m "i-lab planning app"
```

Push it to a new GitHub repo (create one first on github.com, then):

```
git remote add origin https://github.com/YOUR-USERNAME/ilab-planning.git
git branch -M main
git push -u origin main
```

## Step 3 — Deploy on Render

1. Go to https://render.com and sign in (or create an account).
2. Click **New +** → **Web Service**.
3. Connect the GitHub repo you just pushed.
4. Fill in:
   - **Name**: `ilab-planning` (or whatever you like — this becomes part
     of the default URL, e.g. `ilab-planning.onrender.com`)
   - **Region**: whichever is closest to your team
   - **Branch**: `main`
   - **Runtime**: Node
   - **Build command**: `npm install`
   - **Start command**: `npm start`
   - **Instance type**: Free is fine to start; upgrade later if it needs to
     stay warm (the free tier spins down after inactivity and takes a few
     seconds to wake back up on the next visit).
5. Under **Environment Variables**, add:
   - `TURSO_DATABASE_URL` → from Step 1
   - `TURSO_AUTH_TOKEN` → from Step 1
   - (optional) `BASIC_AUTH_USER` / `BASIC_AUTH_PASS` — see the security
     note below
6. Click **Create Web Service**. Render will install dependencies, start
   the server, and give you a live URL in a couple of minutes.
7. Open that URL — you should see the same board you've been using, now
   loading from Turso instead of Claude's storage.

## Security note

As written, anyone with the URL can view and edit the board — there's no
login. For an internal tool that's often fine, but two easy options if you
want more control:

- **Basic auth (built in)**: set `BASIC_AUTH_USER` and `BASIC_AUTH_PASS` in
  Render's environment variables. The app will then require that
  username/password before showing anything. Good enough for "keep this
  off Google" but shares one login across everyone.
- **Render's own access controls**: Render supports restricting a service
  to specific IPs or putting it behind Render's private networking if your
  team is on a shared VPN — see Render's docs for your plan.

If you want individual logins per person later (rather than one shared
password), that's a bigger step up — happy to help design that when you're
ready for it.

## A known limitation worth knowing about

Saves are "last write wins" — there's no conflict resolution if two people
edit the same term within moments of each other. In practice, most edits
are people filling in their own rows, so collisions should be rare. If this
becomes a real problem once more people are using it, the fix is either
optimistic locking (reject a save if the data changed since you loaded it)
or splitting the single JSON blob into real per-row database records — both
doable later without a full rewrite.

## Local development

```
cp .env.example .env
# fill in .env with your Turso credentials
npm install
npm start
```

Then open http://localhost:3000.
