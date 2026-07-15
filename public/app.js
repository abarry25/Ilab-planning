/* ===== Data ===== */
const GROUPS = [{"id":"landscape","name":"Innovation Landscape","tag":"MACRO","color":"#C98A2B","desc":"Ecosystem & external events to plan around, not run solo","audience":"External / ecosystem-wide"},{"id":"membership","name":"Membership Access / Intake","tag":"FUNC","color":"#4A5A73","desc":"Who can join and when the door is open","audience":"Prospective & renewing members"},{"id":"community","name":"Community","tag":"CORE","color":"#2A7F7F","desc":"Foundational programming for members","audience":"All membership"},{"id":"fundamentals","name":"Founder Fundamentals","tag":"CORE","color":"#1E7A5F","desc":"Skill-building sprints, talks, and office hours","audience":"All membership"},{"id":"incubation","name":"Venture Incubation (HiPo)","tag":"CORE","color":"#A63E85","desc":"High-potential team bridge programming","audience":"HiPo teams"},{"id":"acceleration","name":"Venture Acceleration","tag":"CORE","color":"#6B3FA0","desc":"Semester accelerator + LLX cohort flow","audience":"Accelerator cohort"},{"id":"lifelab","name":"Climate","tag":"CORE","color":"#5C7A52","desc":"Climate venture review cycles","audience":"Climate Circle ventures"},
{"id":"lifelab2","name":"Life Lab","tag":"CORE","color":"#8E7C3D","desc":"Structure TBD \u2014 placeholder rows for now","audience":"TBD"},{"id":"partnerships","name":"Partnerships","tag":"SERVICE","color":"#B24C3D","desc":"Harvard, ecosystem, and frontier relationships","audience":"Partners, mentors & faculty"},{"id":"pic","name":"President's Innovation Challenge (PIC)","tag":"SERVICE","color":"#C9A227","desc":"Flagship case competition, program + judging tracks","audience":"PIC applicants & judges"},{"id":"siff","name":"Social Impact Fellowship Fund","tag":"SERVICE","color":"#8C3B4A","desc":"Fellowship application through fiscal close","audience":"SIFF fellows & applicants"},{"id":"network","name":"Network Engagement","tag":"SERVICE","color":"#3B6E91","desc":"Mentors, advisors, and office hours","audience":"Members & mentor network"}];
const DEFAULT_TASKS = [{"id":"landscape-0-0","group":"landscape","sub":null,"label":"Tech Week","owner":"","note":""},{"id":"landscape-0-1","group":"landscape","sub":null,"label":"Tech Crunch Disrupt","owner":"","note":""},{"id":"landscape-0-2","group":"landscape","sub":null,"label":"SXSW","owner":"","note":""},{"id":"landscape-0-3","group":"landscape","sub":null,"label":"Boston Tech Week","owner":"","note":""},{"id":"landscape-0-4","group":"landscape","sub":null,"label":"Techstars Startup Week","owner":"","note":""},{"id":"landscape-0-5","group":"landscape","sub":null,"label":"Harvard New Venture Competition (NVC)","owner":"","note":""},{"id":"landscape-0-6","group":"landscape","sub":null,"label":"Greentown Labs Climatetech Events","owner":"","note":""},{"id":"landscape-0-7","group":"landscape","sub":null,"label":"Tough Tech Week (The Engine)","owner":"","note":""},{"id":"landscape-0-8","group":"landscape","sub":null,"label":"Campaign Windows","owner":"","note":""},{"id":"landscape-0-9","group":"landscape","sub":null,"label":"Climate","owner":"AS","note":""},{"id":"landscape-0-10","group":"landscape","sub":null,"label":"President's Innovation Letter","owner":"AS","note":""},{"id":"landscape-0-11","group":"landscape","sub":null,"label":"App Cycle","owner":"AS","note":""},{"id":"landscape-0-12","group":"landscape","sub":null,"label":"Registration for Open Resources Available","owner":"AS","note":""},{"id":"membership-0-0","group":"membership","sub":null,"label":"Intake Launch","owner":"AB","note":"Opens or re-opens membership applications"},{"id":"membership-0-1","group":"membership","sub":null,"label":"Intake Pauses","owner":"AB","note":"If intake needs to pause"},{"id":"membership-0-2","group":"membership","sub":null,"label":"Intake On-going","owner":"AB","note":"Period of open intake"},{"id":"membership-0-3","group":"membership","sub":null,"label":"Orientation - Virtual","owner":"AB","note":"Virtual on-boarding orientation"},{"id":"membership-0-4","group":"membership","sub":null,"label":"Intake Deadlines + Comms","owner":"AB","note":"Deadlines to drive membership pushes"},{"id":"membership-0-5","group":"membership","sub":null,"label":"Access Exceptions","owner":"","note":"e.g. Rock Summer Fellow space use"},{"id":"community-0-0","group":"community","sub":"Founders & Joiners","label":"Alumni Founder Night*","owner":"AO","note":""},{"id":"community-0-1","group":"community","sub":"Founders & Joiners","label":"Coffee & Connections (~3/4)*","owner":"AO","note":""},{"id":"community-0-2","group":"community","sub":"Founders & Joiners","label":"Founder Circles","owner":"AO","note":""},{"id":"community-0-3","group":"community","sub":"Founders & Joiners","label":"Beta Test Party","owner":"AO","note":""},{"id":"community-0-4","group":"community","sub":"Founders & Joiners","label":"Gong-a-thon","owner":"AO","note":""},{"id":"community-0-5","group":"community","sub":"Founders & Joiners","label":"Venturing @ Harvard","owner":"AO","note":""},{"id":"community-0-6","group":"community","sub":"Founders & Joiners","label":"Meet the i-labs (~3pm)","owner":"AO","note":""},{"id":"community-0-7","group":"community","sub":"Founders & Joiners","label":"Newsletter","owner":"AO","note":""},{"id":"community-0-8","group":"community","sub":"Founders & Joiners","label":"Pizza & Pitch","owner":"AO","note":""},{"id":"community-0-9","group":"community","sub":"Founders & Joiners","label":"Semester Community Kick Off","owner":"AO","note":""},{"id":"fundamentals-0-0","group":"fundamentals","sub":null,"label":"Customer Discovery Sprint","owner":"TS","note":"~3x during the semester"},{"id":"fundamentals-0-1","group":"fundamentals","sub":null,"label":"Customer Validation Primer","owner":"TS","note":"On-going, as activated"},{"id":"fundamentals-0-2","group":"fundamentals","sub":null,"label":"Problem Identification Sprint","owner":"TS","note":"~3x during the semester"},{"id":"fundamentals-0-3","group":"fundamentals","sub":null,"label":"Themed Group Office Hours","owner":"TS","note":"1x weekly, align w/ primer topics"},{"id":"fundamentals-0-4","group":"fundamentals","sub":null,"label":"Hackathons","owner":"TS","note":"1-2x/semester, opportunistic"},{"id":"fundamentals-0-5","group":"fundamentals","sub":null,"label":"Founder Talks","owner":"TS","note":"1-2x/semester, opportunistic"},{"id":"fundamentals-0-6","group":"fundamentals","sub":null,"label":"Open Workshops","owner":"TS","note":"Fills time around the sprints"},{"id":"fundamentals-0-7","group":"fundamentals","sub":null,"label":"Sundai Hackathon","owner":"PG","note":""},{"id":"incubation-0-0","group":"incubation","sub":null,"label":"Application Interview","owner":"TS","note":"1x monthly, 2nd week"},{"id":"incubation-0-1","group":"incubation","sub":null,"label":"Advancement Panel","owner":"TS","note":"1x monthly, 4th week"},{"id":"incubation-0-2","group":"incubation","sub":null,"label":"Advancement Ceremony Lunch","owner":"TS","note":"1x monthly"},{"id":"incubation-0-3","group":"incubation","sub":null,"label":"Accelerator Info Session Lunch","owner":"TS","note":"1x monthly"},{"id":"incubation-0-4","group":"incubation","sub":null,"label":"Investor Office Hours","owner":"TS","note":"1x monthly"},{"id":"incubation-0-5","group":"incubation","sub":null,"label":"Meet the Angels Event","owner":"TS","note":"1x/semester (Fall)"},{"id":"incubation-0-6","group":"incubation","sub":null,"label":"Newsletter","owner":"TS","note":"Last week of month"},{"id":"incubation-0-7","group":"incubation","sub":null,"label":"Coach Orientation / Info Session","owner":"TS","note":"1x/semester, AM"},{"id":"incubation-0-8","group":"incubation","sub":null,"label":"Possible Lunches","owner":"","note":"HiPo + Accelerator"},{"id":"acceleration-0-0","group":"acceleration","sub":null,"label":"Application Closes","owner":"JF + RB","note":""},{"id":"acceleration-0-1","group":"acceleration","sub":null,"label":"Review Period","owner":"JF + RB","note":""},{"id":"acceleration-0-2","group":"acceleration","sub":null,"label":"Interview Period","owner":"JF + RB","note":""},{"id":"acceleration-0-3","group":"acceleration","sub":null,"label":"Selection Week","owner":"JF + RB","note":""},{"id":"acceleration-0-4","group":"acceleration","sub":null,"label":"Virtual Orientation","owner":"JF + RB","note":""},{"id":"acceleration-0-5","group":"acceleration","sub":null,"label":"Virtual Programming","owner":"JF + RB","note":"Workshop, clinic, check-in"},{"id":"acceleration-0-6","group":"acceleration","sub":null,"label":"Full Week Pitches","owner":"JF + RB","note":""},{"id":"acceleration-0-7","group":"acceleration","sub":null,"label":"Board Meetings","owner":"JF + RB","note":""},{"id":"acceleration-0-8","group":"acceleration","sub":null,"label":"LLX In-Person Orientation","owner":"JF + RB","note":""},{"id":"lifelab-0-0","group":"lifelab","sub":null,"label":"Review Period 1 \u2013 App Close","owner":"RE","note":""},{"id":"lifelab-0-1","group":"lifelab","sub":null,"label":"Review Period 1 \u2013 Desk Review","owner":"RE","note":""},{"id":"lifelab-0-2","group":"lifelab","sub":null,"label":"Review Period 1 \u2013 Interviews","owner":"RE","note":""},{"id":"lifelab-0-3","group":"lifelab","sub":null,"label":"Review Period 1 \u2013 Selection","owner":"RE","note":""},{"id":"lifelab-0-4","group":"lifelab","sub":null,"label":"Review Period 2 \u2013 App Close","owner":"RE","note":""},{"id":"lifelab-0-5","group":"lifelab","sub":null,"label":"Review Period 2 \u2013 Desk Review","owner":"RE","note":""},{"id":"lifelab-0-6","group":"lifelab","sub":null,"label":"Review Period 2 \u2013 Interviews","owner":"RE","note":""},{"id":"lifelab-0-7","group":"lifelab","sub":null,"label":"Review Period 2 \u2013 Selection","owner":"RE","note":""},{"id":"lifelab-0-8","group":"lifelab","sub":null,"label":"Climate Circle Orientation","owner":"RE","note":""},{"id":"partnerships-0-0","group":"partnerships","sub":"General","label":"Hosted Harvard Classes","owner":"","note":""},{"id":"partnerships-0-1","group":"partnerships","sub":"General","label":"Rock Center","owner":"","note":""},{"id":"partnerships-0-2","group":"partnerships","sub":"General","label":"Tours","owner":"","note":""},{"id":"partnerships-1-0","group":"partnerships","sub":"Ecosystem Events","label":"CUSI + Startup Boston","owner":"BX","note":"1x/year, outside orgs + school innovation centers"},{"id":"partnerships-1-1","group":"partnerships","sub":"Ecosystem Events","label":"Ecosystem Partner Lunch","owner":"BX","note":"June/July TBD"},{"id":"partnerships-1-2","group":"partnerships","sub":"Ecosystem Events","label":"Faculty Convening","owner":"BX","note":"Early Nov"},{"id":"partnerships-1-3","group":"partnerships","sub":"Ecosystem Events","label":"Mentor Check-in","owner":"BX","note":"1-2x per Fall/Spring"},{"id":"partnerships-2-0","group":"partnerships","sub":"Frontier Events","label":"Tech Week","owner":"","note":""},{"id":"partnerships-2-1","group":"partnerships","sub":"Frontier Events","label":"Climate Action Week","owner":"RE","note":""},{"id":"partnerships-2-2","group":"partnerships","sub":"Frontier Events","label":"B School Disrupt","owner":"JF + RB","note":""},{"id":"partnerships-2-3","group":"partnerships","sub":"Frontier Events","label":"SXSW Side Event","owner":"??","note":""},{"id":"partnerships-2-4","group":"partnerships","sub":"Frontier Events","label":"Startup Career Fair","owner":"???","note":""},{"id":"pic-0-0","group":"pic","sub":"Program","label":"President's Letter","owner":"","note":""},{"id":"pic-0-1","group":"pic","sub":"Program","label":"App Build / Re-Design","owner":"","note":""},{"id":"pic-0-2","group":"pic","sub":"Program","label":"Application Open","owner":"","note":""},{"id":"pic-0-3","group":"pic","sub":"Program","label":"Application Close","owner":"","note":""},{"id":"pic-0-4","group":"pic","sub":"Program","label":"Internal Review","owner":"","note":""},{"id":"pic-0-5","group":"pic","sub":"Program","label":"Semi-Finalist Selected","owner":"","note":""},{"id":"pic-0-6","group":"pic","sub":"Program","label":"Applicants Notified","owner":"","note":""},{"id":"pic-0-7","group":"pic","sub":"Program","label":"Semi-Finalist Orientation","owner":"","note":""},{"id":"pic-0-8","group":"pic","sub":"Program","label":"Semi-Finalist Resubmission Open","owner":"","note":""},{"id":"pic-0-9","group":"pic","sub":"Program","label":"Semi-Finalist Resubmission Closed","owner":"","note":""},{"id":"pic-0-10","group":"pic","sub":"Program","label":"Online Judging","owner":"","note":""},{"id":"pic-0-11","group":"pic","sub":"Program","label":"Finalist Announcement","owner":"","note":""},{"id":"pic-0-12","group":"pic","sub":"Program","label":"Finalist Orientation","owner":"","note":""},{"id":"pic-0-13","group":"pic","sub":"Program","label":"Finalist Prep","owner":"","note":""},{"id":"pic-0-14","group":"pic","sub":"Program","label":"Final Judging","owner":"","note":""},{"id":"pic-0-15","group":"pic","sub":"Program","label":"Ceremony","owner":"","note":""},{"id":"pic-0-16","group":"pic","sub":"Program","label":"Finalist Follow Up","owner":"","note":""},{"id":"pic-0-17","group":"pic","sub":"Program","label":"Post-Mortem for Event","owner":"","note":""},{"id":"pic-0-18","group":"pic","sub":"Program","label":"New AY PIC Planning","owner":"","note":""},{"id":"pic-1-0","group":"pic","sub":"Judging","label":"Recruitment Letter","owner":"","note":""},{"id":"pic-1-1","group":"pic","sub":"Judging","label":"Acceptance Period","owner":"","note":""},{"id":"pic-1-2","group":"pic","sub":"Judging","label":"Final Online Judging List","owner":"","note":""},{"id":"pic-1-3","group":"pic","sub":"Judging","label":"Adding Judges to SMA","owner":"","note":""},{"id":"pic-1-4","group":"pic","sub":"Judging","label":"Matching","owner":"","note":""},{"id":"pic-1-5","group":"pic","sub":"Judging","label":"Creating Groupings","owner":"","note":""},{"id":"pic-1-6","group":"pic","sub":"Judging","label":"Assigning Reviews in SMA","owner":"","note":""},{"id":"pic-1-7","group":"pic","sub":"Judging","label":"Online Judging Orientation","owner":"","note":""},{"id":"pic-1-8","group":"pic","sub":"Judging","label":"Online Judging Period","owner":"","note":""},{"id":"pic-1-9","group":"pic","sub":"Judging","label":"Online Judging Score Tabulation","owner":"","note":""},{"id":"pic-1-10","group":"pic","sub":"Judging","label":"Internal Debrief","owner":"","note":""},{"id":"pic-1-11","group":"pic","sub":"Judging","label":"Finalist Selection","owner":"","note":""},{"id":"pic-1-12","group":"pic","sub":"Judging","label":"Final Judging Recruitment","owner":"","note":""},{"id":"pic-1-13","group":"pic","sub":"Judging","label":"Final Judging Orientation","owner":"","note":""},{"id":"siff-0-0","group":"siff","sub":null,"label":"Application Open","owner":"LK","note":""},{"id":"siff-0-1","group":"siff","sub":null,"label":"Application Closes","owner":"LK","note":""},{"id":"siff-0-2","group":"siff","sub":null,"label":"Selection","owner":"LK","note":""},{"id":"siff-0-3","group":"siff","sub":null,"label":"Interviews","owner":"LK","note":""},{"id":"siff-0-4","group":"siff","sub":null,"label":"Coaching","owner":"LK","note":""},{"id":"siff-0-5","group":"siff","sub":null,"label":"Pitch Day","owner":"LK","note":""},{"id":"siff-0-6","group":"siff","sub":null,"label":"Post-Mortem / Planning","owner":"LK","note":""},{"id":"siff-0-7","group":"siff","sub":null,"label":"Fiscal Planning / Finalization","owner":"LK","note":""},{"id":"siff-0-8","group":"siff","sub":null,"label":"Navab SIFF Reception","owner":"RE","note":""},{"id":"network-0-0","group":"network","sub":null,"label":"Office Hours Launch","owner":"","note":""},{"id":"network-0-1","group":"network","sub":null,"label":"Office Hours Program (Lite)","owner":"BX","note":"Summer"},{"id":"network-0-2","group":"network","sub":null,"label":"Office Hours Pause","owner":"","note":""},{"id":"network-0-3","group":"network","sub":null,"label":"Office Hours Program (Regular)","owner":"BX","note":"Fall/Spring"},{"id":"network-0-4","group":"network","sub":null,"label":"On-boarding New Network Engagement Manager","owner":"","note":""},{"id":"network-0-5","group":"network","sub":null,"label":"Mentor Program \u2014 Continued Program","owner":"","note":""},{"id":"network-0-6","group":"network","sub":null,"label":"Advisor Office Hours","owner":"","note":""}];

const GROUP_BY_ID = {};
GROUPS.forEach(g => GROUP_BY_ID[g.id] = g);
const DEFAULT_TASK_BY_ID = {};
DEFAULT_TASKS.forEach(t => DEFAULT_TASK_BY_ID[t.id] = t);

// TASKS / TASKS_BY_GROUP are derived from STATE.tasksList and rebuilt
// whenever the task list changes (rename doesn't change these, add/remove does).
let TASKS = [];
let TASKS_BY_GROUP = {};
function rebuildIndex() {
  TASKS = STATE.tasksList;
  TASKS_BY_GROUP = {};
  GROUPS.forEach(g => TASKS_BY_GROUP[g.id] = []);
  TASKS.forEach(t => { if (TASKS_BY_GROUP[t.group]) TASKS_BY_GROUP[t.group].push(t); });
}
function subBlocksForGroup(groupId) {
  const items = TASKS_BY_GROUP[groupId] || [];
  const blocks = [];
  let cur = null;
  items.forEach(t => {
    const subKey = t.sub || null;
    if (!cur || cur.sub !== subKey) { cur = { sub: subKey, tasks: [] }; blocks.push(cur); }
    cur.tasks.push(t);
  });
  return blocks;
}
function seedDefaultTasksList() {
  return DEFAULT_TASKS.map(t => ({ id: t.id, group: t.group, sub: t.sub || null, label: t.label }));
}

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const WEEKDAY_LETTERS = ["S","M","T","W","T","F","S"];

const TERMS = [
  {
    id: "fall2026", label: "Fall 2026", start: "2026-08-03", end: "2026-12-19",
    key: "ilab-plan-fall2026-v1", deadline: "Draft due Mon, Aug 4",
    milestones: [
      { date: "2026-08-04", label: "Planning drafts due", kind: "deadline" },
      { date: "2026-09-02", label: "Fall term begins", kind: "term" },
      { date: "2026-09-07", label: "Labor Day", kind: "holiday" },
      { date: "2026-10-12", label: "Indigenous Peoples' Day", kind: "holiday" },
      { date: "2026-11-11", label: "Veterans Day", kind: "holiday" },
      { date: "2026-11-26", label: "Thanksgiving", kind: "holiday" },
      { date: "2026-12-10", label: "Finals begin", kind: "term" },
      { date: "2026-12-19", label: "Finals end", kind: "term" }
    ]
  },
  {
    id: "spring2027", label: "Spring 2027", start: "2027-01-25", end: "2027-05-15",
    key: "ilab-plan-spring2027-v1", deadline: "No deadline yet — plan anytime",
    milestones: [
      { date: "2027-01-18", label: "MLK Day", kind: "holiday" },
      { date: "2027-01-25", label: "Spring term begins", kind: "term" },
      { date: "2027-02-15", label: "Presidents' Day", kind: "holiday" },
      { date: "2027-03-13", label: "Spring recess begins", kind: "term" },
      { date: "2027-04-28", label: "Last day of classes", kind: "term" },
      { date: "2027-05-06", label: "Finals begin", kind: "term" },
      { date: "2027-05-15", label: "Finals end", kind: "term" },
      { date: "2027-05-27", label: "Commencement", kind: "deadline" }
    ]
  }
];

let currentTermIdx = 0;
let viewMode = "day"; // "day" | "week"
let STATE = { tasksList: [], tasks: {}, collapsed: {}, selected: {}, exportRows: [] };
let saveTimer = null;
let saving = false;
let undoTimer = null;
let saveState = "saved"; // "saved" | "dirty" | "saving" | "error"

function currentTerm() { return TERMS[currentTermIdx]; }

/* ===== Date helpers ===== */
function parseISO(s) {
  const [y, m, d] = s.split("-").map(Number);
  return new Date(y, m - 1, d);
}
function addDays(d, n) {
  const r = new Date(d);
  r.setDate(r.getDate() + n);
  return r;
}
function fmtShort(d) {
  return MONTHS[d.getMonth()] + " " + d.getDate();
}
function deriveTerm(term) {
  if (term._derived) return term._derived;
  const start = parseISO(term.start);
  const end = parseISO(term.end);
  const dayCount = Math.round((end - start) / 86400000) + 1;
  const weekGroups = [];
  for (let d = 0; d < dayCount; d += 7) {
    const grp = [];
    for (let k = 0; k < 7 && d + k < dayCount; k++) grp.push(d + k);
    weekGroups.push(grp);
  }
  term._derived = { start, dayCount, weekGroups };
  return term._derived;
}
function dateForDay(term, i) { return addDays(deriveTerm(term).start, i); }
function dayIndexForDate(term, iso) {
  const d = deriveTerm(term);
  const diff = Math.round((parseISO(iso) - d.start) / 86400000);
  return (diff >= 0 && diff < d.dayCount) ? diff : null;
}
function weekIndexForDay(term, dayIdx) { return Math.floor(dayIdx / 7); }
function colCount(term) {
  const d = deriveTerm(term);
  return viewMode === "day" ? d.dayCount : d.weekGroups.length;
}
function colStartDate(term, colIdx) {
  const d = deriveTerm(term);
  return viewMode === "day" ? dateForDay(term, colIdx) : dateForDay(term, d.weekGroups[colIdx][0]);
}
function colIndexForDayIndex(term, dayIdx) {
  return viewMode === "day" ? dayIdx : weekIndexForDay(term, dayIdx);
}

/* ===== State ===== */
// Migrations for tasks whose home group changed after the board was first
// seeded — reassigns group/sub on the SAME task id, so all saved marks,
// owner initials, and notes carry over untouched.
const GROUP_MIGRATIONS = [
  { fromGroup: "community", fromSub: "Founder Fundamentals", toGroup: "fundamentals", toSub: null }
];
function migrateGroupStructure() {
  STATE.tasksList.forEach(t => {
    GROUP_MIGRATIONS.forEach(m => {
      if (t.group === m.fromGroup && (t.sub || null) === (m.fromSub || null)) {
        t.group = m.toGroup;
        t.sub = m.toSub;
      }
    });
  });
}

const NEW_TASKS_TO_INJECT = [
  { id: "lifelab2-0", group: "lifelab2", sub: null, label: "Selection Committee" },
  { id: "lifelab2-1", group: "lifelab2", sub: null, label: "Community Day" }
];
function injectNewTasks() {
  NEW_TASKS_TO_INJECT.forEach(nt => {
    if (!STATE.tasksList.some(t => t.id === nt.id)) {
      STATE.tasksList.push({ id: nt.id, group: nt.group, sub: nt.sub, label: nt.label });
    }
  });
}
function ensureState(term) {
  const dayCount = deriveTerm(term).dayCount;
  if (!Array.isArray(STATE.tasksList) || !STATE.tasksList.length) {
    STATE.tasksList = seedDefaultTasksList();
  }
  migrateGroupStructure();
   injectNewTasks();          // <-- add this line
  if (!STATE.selected) STATE.selected = {};
  if (!Array.isArray(STATE.exportRows)) STATE.exportRows = [];
  STATE.tasksList.forEach(t => {
    if (!STATE.tasks[t.id]) {
      const seed = DEFAULT_TASK_BY_ID[t.id];
      STATE.tasks[t.id] = { active: new Array(dayCount).fill(false), owner: seed ? seed.owner : "", note: seed ? seed.note : "" };
    }
    const cur = STATE.tasks[t.id];
    if (!Array.isArray(cur.active)) cur.active = new Array(dayCount).fill(false);
    while (cur.active.length < dayCount) cur.active.push(false);
  });
}

async function loadTermState(term) {
  STATE = { tasksList: seedDefaultTasksList(), tasks: {}, collapsed: {}, selected: {}, exportRows: [] };
  lastMeta = null;
  try {
    const res = await fetch("/api/board/" + encodeURIComponent(term.key));
    if (res.ok) {
      const json = await res.json();
      const parsed = json.data;
      if (parsed && Array.isArray(parsed.tasksList)) {
        STATE = parsed;
      } else if (parsed && parsed.tasks) {
        STATE.tasks = parsed.tasks;
        STATE.collapsed = parsed.collapsed || {};
      }
      lastMeta = { updatedBy: json.updatedBy, updatedAt: json.updatedAt };
    }
    // 404 means nothing saved yet for this term — keep the defaults
  } catch (e) {
    console.error("Failed to load board", e);
  }
  ensureState(term);
  rebuildIndex();
}

/* ===== Add / remove rows ===== */
function addTask(groupId, subKey) {
  const term = currentTerm();
  const id = groupId + "-custom-" + Math.random().toString(36).slice(2, 8);
  const newTask = { id, group: groupId, sub: subKey || null, label: "New item" };
  let lastMatchIdx = -1, lastGroupIdx = -1;
  STATE.tasksList.forEach((t, i) => {
    if (t.group === groupId) {
      lastGroupIdx = i;
      if ((t.sub || null) === (subKey || null)) lastMatchIdx = i;
    }
  });
  const insertAt = (lastMatchIdx !== -1 ? lastMatchIdx : lastGroupIdx) + 1;
  STATE.tasksList.splice(insertAt, 0, newTask);
  STATE.tasks[id] = { active: new Array(deriveTerm(term).dayCount).fill(false), owner: "", note: "" };
  rebuildIndex();
  queueSave();
  renderBoard();
  requestAnimationFrame(() => {
    const el = document.querySelector(`[data-task-id="${id}"] .task-name-input`);
    if (el) { el.focus(); el.select(); }
  });
}

function removeTask(id) {
  const idx = STATE.tasksList.findIndex(t => t.id === id);
  if (idx === -1) return;
  const removedTask = STATE.tasksList[idx];
  const removedState = STATE.tasks[id];
  STATE.tasksList.splice(idx, 1);
  delete STATE.tasks[id];
  rebuildIndex();
  queueSave();
  renderBoard();
  showUndoToast(removedTask.label, () => {
    STATE.tasksList.splice(idx, 0, removedTask);
    STATE.tasks[removedTask.id] = removedState;
    rebuildIndex();
    queueSave();
    renderBoard();
  });
}

function showUndoToast(label, onUndo) {
  clearTimeout(undoTimer);
  const toast = document.getElementById("undoToast");
  toast.innerHTML = `Removed “${label}” <button type="button" class="undo-btn">Undo</button>`;
  toast.classList.add("show");
  toast.querySelector(".undo-btn").addEventListener("click", () => {
    onUndo();
    toast.classList.remove("show");
    clearTimeout(undoTimer);
  });
  undoTimer = setTimeout(() => toast.classList.remove("show"), 6000);
}

function loadViewPref() {
  const v = localStorage.getItem("ilab-view-pref");
  if (v === "day" || v === "week") viewMode = v;
}
function saveViewPref() {
  localStorage.setItem("ilab-view-pref", viewMode);
}

function getEditorName() {
  return localStorage.getItem("ilab-editor-name") || "";
}
function ensureEditorName() {
  let name = getEditorName();
  if (!name) {
    name = (window.prompt("Quick — what are your initials or name? (shown next to your saves so people know who edited what)") || "").trim();
    if (name) localStorage.setItem("ilab-editor-name", name);
  }
  return name;
}

function setSaveStatus(text, isError) {
  const el = document.getElementById("saveStatus");
  if (!el) return;
  el.textContent = text;
  el.classList.toggle("save-error", !!isError);
}

const FLOATING_LABELS = {
  saved: "All changes saved",
  dirty: "Save edits",
  saving: "Saving…",
  error: "Save failed — click to retry"
};
function setFloatingSave(state) {
  saveState = state;
  const btn = document.getElementById("floatingSaveBtn");
  if (!btn) return;
  btn.classList.remove("fs-saved", "fs-dirty", "fs-saving", "fs-error");
  btn.classList.add("fs-" + state);
  btn.textContent = FLOATING_LABELS[state] || FLOATING_LABELS.saved;
  btn.disabled = state === "saving";
}

function queueSave() {
  setSaveStatus("Saving…", false);
  setFloatingSave("dirty");
  clearTimeout(saveTimer);
  saveTimer = setTimeout(doSave, 500);
}
async function doSave() {
  if (saving) { clearTimeout(saveTimer); saveTimer = setTimeout(doSave, 300); return; }
  saving = true;
  setFloatingSave("saving");
  const editor = getEditorName();
  try {
    const res = await fetch("/api/board/" + encodeURIComponent(currentTerm().key), {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: STATE, updatedBy: editor || null })
    });
    if (!res.ok) throw new Error("save failed: " + res.status);
    lastMeta = { updatedBy: editor, updatedAt: new Date().toISOString() };
    setSaveStatus(`Saved${editor ? " by " + editor : ""} · shared with everyone viewing ${currentTerm().label}`, false);
    setFloatingSave("saved");
  } catch (e) {
    setSaveStatus("Couldn't save — check your connection", true);
    setFloatingSave("error");
  } finally {
    saving = false;
  }
}
function forceSaveNow() {
  clearTimeout(saveTimer);
  doSave();
}
window.addEventListener("beforeunload", (e) => {
  if (saveState === "dirty" || saveState === "saving") {
    e.preventDefault();
    e.returnValue = "";
  }
});

/* ===== Rendering ===== */
function groupActiveCount(groupId) {
  let count = 0;
  TASKS_BY_GROUP[groupId].forEach(t => {
    const st = STATE.tasks[t.id];
    if (st && st.active.some(Boolean)) count++;
  });
  return count;
}

function renderMilestoneRow() {
  const term = currentTerm();
  const row = document.getElementById("milestoneRow");
  row.innerHTML = "";
  const track = document.createElement("div");
  track.className = "week-track";
  track.style.gridTemplateColumns = `repeat(${colCount(term)}, var(--cell-w))`;
  track.style.height = "1px";
  row.appendChild(track);

  // month tags (day view only)
  if (viewMode === "day") {
    const d = deriveTerm(term);
    for (let i = 0; i < d.dayCount; i++) {
      const dt = dateForDay(term, i);
      if (dt.getDate() === 1 || i === 0) {
        const tag = document.createElement("div");
        tag.className = "pin pin-month";
        tag.style.left = `calc(${i} * var(--cell-w) + var(--cell-w) / 2)`;
        tag.innerHTML = `<span class="pin-label">${MONTHS[dt.getMonth()]}</span>`;
        track.appendChild(tag);
      }
    }
  }

  term.milestones.forEach(m => {
    const dayIdx = dayIndexForDate(term, m.date);
    if (dayIdx === null) return;
    const col = colIndexForDayIndex(term, dayIdx);
    const pin = document.createElement("div");
    pin.className = "pin pin-" + m.kind;
    pin.style.left = `calc(${col} * var(--cell-w) + var(--cell-w) / 2)`;
    pin.title = m.label + " — " + m.date;
    pin.innerHTML = `<span class="pin-dot"></span><span class="pin-label">${m.label}</span>`;
    track.appendChild(pin);
  });
}

function renderWeekHeader() {
  const term = currentTerm();
  const row = document.getElementById("weekHeaderRow");
  row.innerHTML = "";

  const namesSpacer = document.getElementById("namesSpacer");
  if (namesSpacer) namesSpacer.textContent = term.label + " · " + (viewMode === "day" ? "days" : "weeks");

  const track = document.createElement("div");
  track.className = "week-track";
  const n = colCount(term);
  track.style.gridTemplateColumns = `repeat(${n}, var(--cell-w))`;

  if (viewMode === "day") {
    for (let i = 0; i < n; i++) {
      const dt = dateForDay(term, i);
      const dow = dt.getDay();
      const cell = document.createElement("div");
      cell.className = "day-head-cell" + (dow === 0 || dow === 6 ? " weekend" : "") + (dt.getDate() === 1 ? " month-start" : "");
      cell.title = fmtShort(dt);
      cell.innerHTML = `<span class="dh-dow">${WEEKDAY_LETTERS[dow]}</span><span class="dh-num">${dt.getDate()}</span>`;
      track.appendChild(cell);
    }
  } else {
    for (let i = 0; i < n; i++) {
      const cell = document.createElement("div");
      cell.className = "week-head-cell";
      cell.innerHTML = `<span>${fmtShort(colStartDate(term, i))}</span>`;
      track.appendChild(cell);
    }
  }
  row.appendChild(track);
}

function taskRowMarkup(t) {
  const term = currentTerm();
  const st = STATE.tasks[t.id];
  const activeN = st.active.filter(Boolean).length;
  const isSelected = !!STATE.selected[t.id];

  const left = document.createElement("div");
  left.className = "task-meta" + (isSelected ? " row-selected" : "");
  left.dataset.taskId = t.id;

  const right = document.createElement("div");
  right.className = "task-cells" + (isSelected ? " row-selected" : "");
  right.dataset.taskId = t.id;

  const check = document.createElement("input");
  check.type = "checkbox";
  check.className = "task-check";
  check.title = "Select for ClickUp export";
  check.checked = isSelected;
  check.addEventListener("change", () => {
    STATE.selected[t.id] = check.checked;
    left.classList.toggle("row-selected", check.checked);
    right.classList.toggle("row-selected", check.checked);
    queueSave();
  });
  left.appendChild(check);

  const del = document.createElement("button");
  del.type = "button";
  del.className = "task-del";
  del.title = "Remove this row";
  del.innerHTML = "×";
  del.addEventListener("click", () => removeTask(t.id));
  left.appendChild(del);

  const label = document.createElement("div");
  label.className = "task-label";
  const nameInput = document.createElement("input");
  nameInput.className = "task-name-input";
  nameInput.value = t.label;
  nameInput.spellcheck = false;
  nameInput.addEventListener("change", () => {
    t.label = nameInput.value.trim() || t.label;
    nameInput.value = t.label;
    queueSave();
  });
  label.appendChild(nameInput);
  const rowCount = document.createElement("span");
  rowCount.className = "row-count";
  rowCount.textContent = activeN > 0 ? activeN + "d" : "";
  label.appendChild(rowCount);
  left.appendChild(label);

  const owner = document.createElement("input");
  owner.className = "task-owner";
  owner.value = st.owner;
  owner.placeholder = "who";
  owner.maxLength = 12;
  owner.addEventListener("change", () => { st.owner = owner.value; queueSave(); });
  left.appendChild(owner);

  const note = document.createElement("input");
  note.className = "task-note";
  note.value = st.note;
  note.placeholder = "what / cadence / notes…";
  note.addEventListener("change", () => { st.note = note.value; queueSave(); });
  left.appendChild(note);

  const track = document.createElement("div");
  track.className = "week-track cell-track";
  const n = colCount(term);
  track.style.gridTemplateColumns = `repeat(${n}, var(--cell-w))`;
  const color = GROUP_BY_ID[t.group].color;

  if (viewMode === "day") {
    for (let i = 0; i < n; i++) {
      const dt = dateForDay(term, i);
      const dow = dt.getDay();
      const cell = document.createElement("button");
      cell.type = "button";
      cell.className = "week-cell day-cell" + (dow === 0 || dow === 6 ? " weekend" : "") + (dt.getDate() === 1 ? " month-start" : "");
      cell.setAttribute("aria-pressed", st.active[i] ? "true" : "false");
      cell.title = fmtShort(dt);
      if (st.active[i]) cell.style.background = color;
      cell.addEventListener("click", () => {
        st.active[i] = !st.active[i];
        cell.setAttribute("aria-pressed", st.active[i] ? "true" : "false");
        cell.style.background = st.active[i] ? color : "";
        updateGroupCount(t.group);
        updateRowCount(t.id, st);
        queueSave();
      });
      track.appendChild(cell);
    }
  } else {
    const d = deriveTerm(term);
    d.weekGroups.forEach((grp) => {
      const cell = document.createElement("button");
      cell.type = "button";
      const activeInWeek = grp.filter(di => st.active[di]).length;
      const full = activeInWeek === grp.length && grp.length > 0;
      const partial = activeInWeek > 0 && !full;
      cell.className = "week-cell";
      cell.setAttribute("aria-pressed", full ? "true" : "false");
      cell.title = fmtShort(dateForDay(term, grp[0])) + " – " + fmtShort(dateForDay(term, grp[grp.length - 1]));
      if (full) cell.style.background = color;
      else if (partial) cell.style.background = `linear-gradient(90deg, ${color} 50%, transparent 50%)`;
      cell.addEventListener("click", () => {
        const turnOn = activeInWeek < grp.length;
        grp.forEach(di => { st.active[di] = turnOn; });
        updateGroupCount(t.group);
        queueSave();
        renderBoard();
      });
      track.appendChild(cell);
    });
  }
  right.appendChild(track);

  return { left, right };
}

function updateRowCount(taskId, st) {
  const el = document.querySelector(`#namesBoard [data-task-id="${taskId}"] .row-count`);
  if (el) {
    const activeN = st.active.filter(Boolean).length;
    el.textContent = activeN > 0 ? activeN + "d" : "";
  }
}
function updateGroupCount(groupId) {
  const el = document.querySelector(`.group-count[data-group="${groupId}"]`);
  if (el) {
    const n = groupActiveCount(groupId);
    const total = TASKS_BY_GROUP[groupId].length;
    el.textContent = `${n} / ${total} planned`;
  }
}

function toggleGroupCollapse(groupId) {
  STATE.collapsed[groupId] = !STATE.collapsed[groupId];
  queueSave();
  renderBoard();
}

function syncRowHeights() {
  const namesRoot = document.getElementById("namesBoard");
  const cellsRoot = document.getElementById("board");
  const leftRows = namesRoot.children;
  const rightRows = cellsRoot.children;
  const n = Math.min(leftRows.length, rightRows.length);
  for (let i = 0; i < n; i++) {
    rightRows[i].style.minHeight = leftRows[i].offsetHeight + "px";
  }
}

function syncHeaderScroll() {
  const boardScroll = document.getElementById("boardScroll");
  const headerViewport = document.getElementById("headerTrackViewport");
  if (!boardScroll || !headerViewport) return;
  headerViewport.scrollLeft = boardScroll.scrollLeft;
}

function renderBoard() {
  const namesRoot = document.getElementById("namesBoard");
  const cellsRoot = document.getElementById("board");
  namesRoot.innerHTML = "";
  cellsRoot.innerHTML = "";
  const trackWidthCss = `calc(${colCount(currentTerm())} * var(--cell-w))`;

  GROUPS.forEach(g => {
    const collapsed = !!STATE.collapsed[g.id];

    const leftHeader = document.createElement("div");
    leftHeader.className = "group-header";
    leftHeader.style.setProperty("--gcolor", g.color);
    leftHeader.innerHTML = `
      <span class="group-tab" style="background:${g.color}"></span>
      <button type="button" class="collapse-btn${collapsed ? " is-collapsed" : ""}" aria-label="Toggle group">▾</button>
      <div class="group-header-text">
        <div class="ghr-line1">
          <span class="group-tag">${g.tag}</span>
          <span class="group-name">${g.name}</span>
        </div>
        <div class="ghr-line2">
          <span class="group-count" data-group="${g.id}">${groupActiveCount(g.id)} / ${TASKS_BY_GROUP[g.id].length}</span>
          <span class="group-desc" title="${g.desc}">${g.desc}</span>
        </div>
      </div>
    `;
    leftHeader.querySelector(".collapse-btn").addEventListener("click", () => toggleGroupCollapse(g.id));
    namesRoot.appendChild(leftHeader);

    const rightHeader = document.createElement("div");
    rightHeader.className = "group-header-shadow";
    rightHeader.style.width = trackWidthCss;
    cellsRoot.appendChild(rightHeader);

    if (!collapsed) {
      const blocks = subBlocksForGroup(g.id);
      const bodyBlocks = blocks.length ? blocks : [{ sub: null, tasks: [] }];
      bodyBlocks.forEach(block => {
        if (block.sub) {
          const subHead = document.createElement("div");
          subHead.className = "sub-header";
          subHead.style.setProperty("--gcolor", g.color);
          subHead.textContent = block.sub;
          namesRoot.appendChild(subHead);

          const subHeadShadow = document.createElement("div");
          subHeadShadow.className = "sub-header-shadow";
          subHeadShadow.style.width = trackWidthCss;
          cellsRoot.appendChild(subHeadShadow);
        }
        block.tasks.forEach(t => {
          const { left, right } = taskRowMarkup(t);
          namesRoot.appendChild(left);
          cellsRoot.appendChild(right);
        });

        const addRow = document.createElement("button");
        addRow.type = "button";
        addRow.className = "add-row-btn";
        addRow.style.setProperty("--gcolor", g.color);
        addRow.textContent = "+ Add row" + (block.sub ? " to " + block.sub : "");
        addRow.addEventListener("click", () => addTask(g.id, block.sub));
        namesRoot.appendChild(addRow);

        const addRowShadow = document.createElement("div");
        addRowShadow.className = "add-row-btn-shadow";
        addRowShadow.style.width = trackWidthCss;
        cellsRoot.appendChild(addRowShadow);
      });
    }
  });

  syncRowHeights();
}

function renderAll() {
  document.documentElement.style.setProperty("--cell-w", viewMode === "day" ? "22px" : "46px");
  renderMilestoneRow();
  renderWeekHeader();
  renderBoard();
  renderExportPanel();
  updateTermTabs();
  updateViewToggle();
  updateDeadlineChip();
}

function updateTermTabs() {
  document.querySelectorAll(".term-tab").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.term === currentTerm().id);
  });
}
function updateViewToggle() {
  const btn = document.getElementById("viewToggleBtn");
  btn.textContent = viewMode === "day" ? "Collapse to weeks" : "Expand to days";
}
function updateDeadlineChip() {
  document.getElementById("deadlineChip").textContent = currentTerm().deadline;
}

function expandAll(state) {
  GROUPS.forEach(g => { STATE.collapsed[g.id] = !state; });
  queueSave();
  renderBoard();
}

function buildLegend() {
  const legend = document.getElementById("legend");
  legend.innerHTML = "";
  GROUPS.forEach(g => {
    const chip = document.createElement("div");
    chip.className = "legend-chip";
    chip.innerHTML = `<span class="legend-dot" style="background:${g.color}"></span>${g.name}`;
    legend.appendChild(chip);
  });
}

function copyPlanAsText() {
  const term = currentTerm();
  const lines = [];
  lines.push("i-lab " + term.label + " Planning — draft");
  lines.push("Generated " + new Date().toLocaleDateString());
  lines.push("");
  GROUPS.forEach(g => {
    const items = TASKS_BY_GROUP[g.id].filter(t => STATE.tasks[t.id].active.some(Boolean) || STATE.tasks[t.id].note || STATE.tasks[t.id].owner);
    if (!items.length) return;
    lines.push(g.name.toUpperCase());
    let lastSub = undefined;
    items.forEach(t => {
      if (t.sub !== lastSub) { lastSub = t.sub; if (t.sub) lines.push("  " + t.sub + ":"); }
      const st = STATE.tasks[t.id];
      const activeDays = st.active.map((v, i) => v ? i : -1).filter(i => i >= 0);
      let rangeStr = "(no days marked yet)";
      if (activeDays.length) {
        const first = dateForDay(term, activeDays[0]);
        const last = dateForDay(term, activeDays[activeDays.length - 1]);
        rangeStr = fmtShort(first) + " – " + fmtShort(last) + " (" + activeDays.length + " day" + (activeDays.length > 1 ? "s" : "") + ")";
      }
      const ownerStr = st.owner ? " [" + st.owner + "]" : "";
      const noteStr = st.note ? " — " + st.note : "";
      lines.push("    - " + t.label + ownerStr + ": " + rangeStr + noteStr);
    });
    lines.push("");
  });
  const text = lines.join("\n");
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      setSaveStatus("Plan copied to clipboard", false);
    }).catch(() => {
      setSaveStatus("Couldn't copy — try selecting manually", true);
    });
  }
}

/* ===== ClickUp export ===== */
function pad2(n) { return String(n).padStart(2, "0"); }
function fmtDateTime(d, hour, minute) {
  const h12 = ((hour + 11) % 12) + 1;
  const ampm = hour < 12 ? "AM" : "PM";
  return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()} ${h12}:${pad2(minute)} ${ampm}`;
}
function exportRowKey(taskId, iso) { return taskId + "__" + iso; }

function buildExportRows() {
  const term = currentTerm();
  const selectedIds = Object.keys(STATE.selected).filter(id => STATE.selected[id]);
  if (!selectedIds.length) {
    setSaveStatus("Check at least one row first", true);
    return;
  }
  const existingKeys = new Set(STATE.exportRows.map(r => exportRowKey(r.taskId, r.date)));
  let added = 0;
  selectedIds.forEach(taskId => {
    const task = TASKS.find(t => t.id === taskId);
    const st = STATE.tasks[taskId];
    if (!task || !st) return;
    const group = GROUP_BY_ID[task.group];
    st.active.forEach((isActive, i) => {
      if (!isActive) return;
      const d = dateForDay(term, i);
      const iso = d.getFullYear() + "-" + pad2(d.getMonth() + 1) + "-" + pad2(d.getDate());
      const key = exportRowKey(taskId, iso);
      if (existingKeys.has(key)) return;
      existingKeys.add(key);
      STATE.exportRows.push({
        id: "exp-" + Math.random().toString(36).slice(2, 9),
        taskId, date: iso,
        taskName: task.label + " – " + fmtShort(d),
        assignee: st.owner || "",
        start: fmtDateTime(d, 10, 0),
        end: fmtDateTime(d, 11, 0),
        summary: task.label,
        description: st.note || "",
        format: "",
        location: "",
        zoomLink: "",
        audience: group.audience || "",
        list: group.name
      });
      added++;
    });
  });
  queueSave();
  renderExportPanel();
  setSaveStatus(added ? `Added ${added} row${added > 1 ? "s" : ""} to the export` : "Those dates are already in the export", false);
  document.getElementById("exportPanel").scrollIntoView({ behavior: "smooth", block: "start" });
}

const EXPORT_COLUMNS = [
  { key: "taskName", label: "Task name", width: 190 },
  { key: "assignee", label: "Assignee", width: 90 },
  { key: "start", label: "Start date w/ time", width: 150 },
  { key: "end", label: "End date w/ time", width: 150 },
  { key: "summary", label: "Preview summary", width: 160 },
  { key: "description", label: "Description", width: 200 },
  { key: "format", label: "Format", width: 100, select: ["", "In-person", "Virtual", "Hybrid"] },
  { key: "location", label: "Location", width: 140 },
  { key: "zoomLink", label: "Zoom link", width: 160 },
  { key: "audience", label: "Audience", width: 160 },
  { key: "list", label: "List", width: 140 }
];

function renderExportPanel() {
  const panel = document.getElementById("exportPanel");
  const body = document.getElementById("exportTableBody");
  const countEl = document.getElementById("exportCount");
  if (!STATE.exportRows.length) {
    panel.classList.add("hidden");
    return;
  }
  panel.classList.remove("hidden");
  countEl.textContent = STATE.exportRows.length + " row" + (STATE.exportRows.length > 1 ? "s" : "");
  body.innerHTML = "";
  STATE.exportRows.forEach(r => {
    const tr = document.createElement("tr");
    const delTd = document.createElement("td");
    const delBtn = document.createElement("button");
    delBtn.type = "button";
    delBtn.className = "export-del";
    delBtn.innerHTML = "×";
    delBtn.title = "Remove this row";
    delBtn.addEventListener("click", () => {
      STATE.exportRows = STATE.exportRows.filter(x => x.id !== r.id);
      queueSave();
      renderExportPanel();
    });
    delTd.appendChild(delBtn);
    tr.appendChild(delTd);
    EXPORT_COLUMNS.forEach(col => {
      const td = document.createElement("td");
      if (col.select) {
        const sel = document.createElement("select");
        col.select.forEach(opt => {
          const o = document.createElement("option");
          o.value = opt; o.textContent = opt || "—";
          if (r[col.key] === opt) o.selected = true;
          sel.appendChild(o);
        });
        sel.addEventListener("change", () => { r[col.key] = sel.value; queueSave(); });
        td.appendChild(sel);
      } else {
        const inp = document.createElement("input");
        inp.value = r[col.key] || "";
        inp.style.width = col.width + "px";
        inp.addEventListener("change", () => { r[col.key] = inp.value; queueSave(); });
        td.appendChild(inp);
      }
      tr.appendChild(td);
    });
    body.appendChild(tr);
  });
}

function csvEscape(v) {
  const s = String(v == null ? "" : v);
  if (/[",\n]/.test(s)) return '"' + s.replace(/"/g, '""') + '"';
  return s;
}
function exportCsvText() {
  const headers = EXPORT_COLUMNS.map(c => c.label);
  const lines = [headers.map(csvEscape).join(",")];
  STATE.exportRows.forEach(r => {
    lines.push(EXPORT_COLUMNS.map(c => csvEscape(r[c.key])).join(","));
  });
  return lines.join("\n");
}
function downloadExportCsv() {
  try {
    const csv = exportCsvText();
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = currentTerm().id + "-clickup-export.csv";
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 2000);
    setSaveStatus("CSV downloaded", false);
  } catch (e) {
    setSaveStatus("Download blocked — try Copy CSV instead", true);
  }
}
function copyExportCsv() {
  const csv = exportCsvText();
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(csv).then(() => {
      setSaveStatus("CSV copied to clipboard", false);
    }).catch(() => setSaveStatus("Couldn't copy — try Download instead", true));
  }
}
function clearExportRows() {
  STATE.exportRows = [];
  queueSave();
  renderExportPanel();
}

function announceLoadStatus() {
  if (lastMeta && lastMeta.updatedAt) {
    const when = new Date(lastMeta.updatedAt).toLocaleString();
    setSaveStatus(`Loaded · last saved${lastMeta.updatedBy ? " by " + lastMeta.updatedBy : ""} on ${when}`, false);
  } else {
    setSaveStatus("Loaded — no saves yet for " + currentTerm().label, false);
  }
}

async function switchTerm(idx) {
  if (idx === currentTermIdx) return;
  currentTermIdx = idx;
  setSaveStatus("Loading " + currentTerm().label + "…", false);
  await loadTermState(currentTerm());
  renderAll();
  setFloatingSave("saved");
  announceLoadStatus();
}

async function toggleView() {
  viewMode = viewMode === "day" ? "week" : "day";
  saveViewPref();
  renderAll();
}

async function init() {
  loadViewPref();
  ensureEditorName();
  buildLegend();

  const boardScrollEl = document.getElementById("boardScroll");
  if (boardScrollEl) boardScrollEl.addEventListener("scroll", syncHeaderScroll);

  const tabsWrap = document.getElementById("termTabs");
  TERMS.forEach((term, idx) => {
    const btn = document.createElement("button");
    btn.className = "term-tab";
    btn.dataset.term = term.id;
    btn.textContent = term.label;
    btn.addEventListener("click", () => switchTerm(idx));
    tabsWrap.appendChild(btn);
  });

  await loadTermState(currentTerm());
  renderAll();

  document.getElementById("expandAllBtn").addEventListener("click", () => expandAll(true));
  document.getElementById("collapseAllBtn").addEventListener("click", () => expandAll(false));
  document.getElementById("copyBtn").addEventListener("click", copyPlanAsText);
  document.getElementById("viewToggleBtn").addEventListener("click", toggleView);
  document.getElementById("exportBtn").addEventListener("click", buildExportRows);
  document.getElementById("downloadCsvBtn").addEventListener("click", downloadExportCsv);
  document.getElementById("copyCsvBtn").addEventListener("click", copyExportCsv);
  document.getElementById("clearExportBtn").addEventListener("click", clearExportRows);
  document.getElementById("floatingSaveBtn").addEventListener("click", forceSaveNow);
  setFloatingSave("saved");
  announceLoadStatus();

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => syncRowHeights());
  }
  window.addEventListener("resize", () => syncRowHeights());
}

init();
