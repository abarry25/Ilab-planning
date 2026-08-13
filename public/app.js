/* ===== Data ===== */
const GROUPS = [{"id":"landscape","name":"Innovation Landscape","tag":"MACRO","color":"#C98A2B","desc":"Ecosystem & external events to plan around, not run solo","audience":"External / ecosystem-wide"},{"id":"membership","name":"Membership Access / Intake","tag":"FUNC","color":"#4A5A73","desc":"Who can join and when the door is open","audience":"Prospective & renewing members"},{"id":"community","name":"Community","tag":"CORE","color":"#2A7F7F","desc":"Foundational programming for members","audience":"All membership"},{"id":"fundamentals","name":"Founder Fundamentals","tag":"CORE","color":"#1E7A5F","desc":"Skill-building sprints, talks, and office hours","audience":"All membership"},{"id":"incubation","name":"Venture Incubation (HiPo)","tag":"CORE","color":"#A63E85","desc":"High-potential team bridge programming","audience":"HiPo teams"},{"id":"acceleration","name":"Venture Acceleration","tag":"CORE","color":"#6B3FA0","desc":"Semester accelerator + LLX cohort flow","audience":"Accelerator cohort"},{"id":"lifelab","name":"Life Lab \u2014 Climate Circle","tag":"CORE","color":"#5C7A52","desc":"Climate venture review cycles","audience":"Climate Circle ventures"},{"id":"partnerships","name":"Partnerships","tag":"SERVICE","color":"#B24C3D","desc":"Harvard, ecosystem, and frontier relationships","audience":"Partners, mentors & faculty"},{"id":"pic","name":"President's Innovation Challenge (PIC)","tag":"SERVICE","color":"#C9A227","desc":"Flagship case competition, program + judging tracks","audience":"PIC applicants & judges"},{"id":"siff","name":"Social Impact Fellowship Fund","tag":"SERVICE","color":"#8C3B4A","desc":"Fellowship application through fiscal close","audience":"SIFF fellows & applicants"},{"id":"network","name":"Network Engagement","tag":"SERVICE","color":"#3B6E91","desc":"Mentors, advisors, and office hours","audience":"Members & mentor network"}];
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
const MONTHS_LONG = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const WEEKDAY_LETTERS = ["S","M","T","W","T","F","S"];

/* ===== The planning year =====
   One continuous timeline — Aug 1 through Jul 31 of the following year — is the
   single source of truth in memory. Every mark, note, and per-date detail is
   indexed by its offset from Aug 1 ("year index"), so a date means the same
   thing no matter which tab you're looking through.

   On disk it still lives as three separate board records (one per term), the
   way it always has. SEGMENTS below is the map between the two: each segment
   owns a contiguous slice of the year, they tile it exactly with no gaps and no
   overlap, and saving slices the year back apart along those lines. That keeps
   the existing version-checked, per-term save/history machinery intact. */
const YEAR = { startIso: "2026-08-01", endIso: "2027-07-31", label: "AY26–27 (Aug 2026 – Jul 2027)" };

const SEGMENTS = [
  {
    id: "fall2026", label: "Fall 2026", key: "ilab-plan-fall2026-v1",
    startIso: "2026-08-01", endIso: "2026-12-31", yearTerm: "2026 Fall",
    // Where this record's index 0 used to sit before the year view existed.
    // Boards saved back then have no dayZero stamp, so we assume this.
    legacyStartIso: "2026-08-03",
    deadline: "Fall plan — in flight"
  },
  {
    id: "spring2027", label: "Spring 2027", key: "ilab-plan-spring2027-v1",
    startIso: "2027-01-01", endIso: "2027-05-31", yearTerm: "2027 Spring",
    legacyStartIso: "2027-01-25",
    deadline: "Spring plan — open"
  },
  {
    id: "summer2027", label: "Summer 2027", key: "ilab-plan-summer2027-v1",
    startIso: "2027-06-01", endIso: "2027-07-31", yearTerm: "2027 Summer",
    legacyStartIso: "2027-06-01",
    deadline: "Summer plan — open"
  }
];

// Registrar milestones for the whole year, placed by absolute date.
const MILESTONES = [
  { date: "2026-09-02", label: "Fall term begins", kind: "term" },
  { date: "2026-09-07", label: "Labor Day", kind: "holiday" },
  { date: "2026-10-12", label: "Indigenous Peoples' Day", kind: "holiday" },
  { date: "2026-11-11", label: "Veterans Day", kind: "holiday" },
  { date: "2026-11-26", label: "Thanksgiving", kind: "holiday" },
  { date: "2026-12-10", label: "Fall finals begin", kind: "term" },
  { date: "2026-12-19", label: "Fall finals end", kind: "term" },
  { date: "2027-01-18", label: "MLK Day", kind: "holiday" },
  { date: "2027-01-25", label: "Spring term begins", kind: "term" },
  { date: "2027-02-15", label: "Presidents' Day", kind: "holiday" },
  { date: "2027-03-13", label: "Spring recess begins", kind: "term" },
  { date: "2027-04-28", label: "Last day of classes", kind: "term" },
  { date: "2027-05-06", label: "Spring finals begin", kind: "term" },
  { date: "2027-05-15", label: "Spring finals end", kind: "term" },
  { date: "2027-05-27", label: "Commencement", kind: "deadline" },
  { date: "2027-07-05", label: "Independence Day (observed)", kind: "holiday" }
];

let currentViewIdx = 0;   // index into VIEWS
let viewMode = "day";     // "day" | "week"
// STATE holds the whole year. active[] and cellDetails{} are keyed by year index.
let STATE = { tasksList: [], tasks: {}, collapsed: {}, selected: {}, exportRows: [], fieldDefaults: {}, optionSets: null };
let saveTimer = null;
let saving = false;
let undoTimer = null;
let saveState = "saved"; // "saved" | "dirty" | "saving" | "error"

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
function pad2(n) { return String(n).padStart(2, "0"); }
function isoForDate(d) {
  return d.getFullYear() + "-" + pad2(d.getMonth() + 1) + "-" + pad2(d.getDate());
}
function daysBetween(isoA, isoB) {
  return Math.round((parseISO(isoB) - parseISO(isoA)) / 86400000);
}

const YEAR_START = parseISO(YEAR.startIso);
const YEAR_DAYS = daysBetween(YEAR.startIso, YEAR.endIso) + 1;

// year index <-> date
function dateForYearIdx(yi) { return addDays(YEAR_START, yi); }
function isoForYearIdx(yi) { return isoForDate(dateForYearIdx(yi)); }
function yearIdxForIso(iso) {
  const n = daysBetween(YEAR.startIso, iso);
  return (n >= 0 && n < YEAR_DAYS) ? n : null;
}

// Each segment's slice of the year, computed once from its date bounds.
SEGMENTS.forEach(seg => {
  seg.offset = daysBetween(YEAR.startIso, seg.startIso);
  seg.days = daysBetween(seg.startIso, seg.endIso) + 1;
});
function segmentForYearIdx(yi) {
  return SEGMENTS.find(s => yi >= s.offset && yi < s.offset + s.days) || null;
}
function segmentById(id) { return SEGMENTS.find(s => s.id === id) || null; }

/* ===== Views: which slice of the year is on screen =====
   "Full calendar" is the default and shows all 365 days. The term tabs are
   windows onto the very same data — switching tabs scrolls the lens, it does
   not load a different board. */
const VIEWS = [{ id: "year", label: "Full calendar", offset: 0, days: YEAR_DAYS, yearTerm: null, deadline: YEAR.label }]
  .concat(SEGMENTS.map(s => ({
    id: s.id, label: s.label, offset: s.offset, days: s.days,
    yearTerm: s.yearTerm, deadline: s.deadline, segmentId: s.id
  })));

function currentView() { return VIEWS[currentViewIdx]; }
function viewIdxById(id) { const i = VIEWS.findIndex(v => v.id === id); return i === -1 ? 0 : i; }

// Column <-> year index for whatever view is on screen.
function yearIdxForCol(colIdx) {
  const v = currentView();
  return viewMode === "day" ? v.offset + colIdx : deriveView().weekGroups[colIdx][0];
}
function colCount() {
  const d = deriveView();
  return viewMode === "day" ? d.days : d.weekGroups.length;
}
// Week columns are aligned to real calendar weeks (Sun–Sat) and clipped to the
// view, so a "week" on screen is the week a person actually has in their head.
// Groups hold YEAR indices, which is what every state lookup expects.
function deriveView() {
  const v = currentView();
  if (v._derived) return v._derived;
  const weekGroups = [];
  let cur = null;
  for (let k = 0; k < v.days; k++) {
    const yi = v.offset + k;
    const dow = dateForYearIdx(yi).getDay();
    if (!cur || dow === 0) { cur = []; weekGroups.push(cur); }
    cur.push(yi);
  }
  v._derived = { offset: v.offset, days: v.days, weekGroups };
  return v._derived;
}
function dateForCol(colIdx) { return dateForYearIdx(yearIdxForCol(colIdx)); }
function colForYearIdx(yi) {
  const v = currentView();
  if (yi < v.offset || yi >= v.offset + v.days) return null;
  if (viewMode === "day") return yi - v.offset;
  const groups = deriveView().weekGroups;
  for (let i = 0; i < groups.length; i++) if (groups[i].includes(yi)) return i;
  return null;
}
function yearIdxsForCol(colIdx) {
  return viewMode === "day" ? [yearIdxForCol(colIdx)] : deriveView().weekGroups[colIdx].slice();
}
function milestonesInView() {
  return MILESTONES.filter(m => {
    const yi = yearIdxForIso(m.date);
    return yi !== null && colForYearIdx(yi) !== null;
  });
}
function yearTermForYearIdx(yi) {
  const seg = segmentForYearIdx(yi);
  return seg ? seg.yearTerm : "";
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

function emptyState() {
  return {
    tasksList: [], tasks: {}, collapsed: {}, selected: {}, exportRows: [],
    fieldDefaults: {}, optionSets: null
  };
}

function ensureState() {
  if (!Array.isArray(STATE.tasksList) || !STATE.tasksList.length) {
    STATE.tasksList = seedDefaultTasksList();
  }
  migrateGroupStructure();
  if (!STATE.selected) STATE.selected = {};
  if (!STATE.collapsed) STATE.collapsed = {};
  if (!Array.isArray(STATE.exportRows)) STATE.exportRows = [];
  if (!STATE.fieldDefaults || typeof STATE.fieldDefaults !== "object") STATE.fieldDefaults = {};
  STATE.optionSets = normalizeOptionSets(STATE.optionSets);
  STATE.tasksList.forEach(t => {
    if (!STATE.tasks[t.id]) {
      const seed = DEFAULT_TASK_BY_ID[t.id];
      STATE.tasks[t.id] = {
        active: new Array(YEAR_DAYS).fill(false),
        owner: seed ? seed.owner : "", note: seed ? seed.note : "",
        cellDetails: {}, fields: {}
      };
    }
    const cur = STATE.tasks[t.id];
    if (!Array.isArray(cur.active)) cur.active = new Array(YEAR_DAYS).fill(false);
    while (cur.active.length < YEAR_DAYS) cur.active.push(false);
    if (cur.active.length > YEAR_DAYS) cur.active.length = YEAR_DAYS;
    if (!cur.cellDetails || typeof cur.cellDetails !== "object") cur.cellDetails = {};
    if (!cur.fields || typeof cur.fields !== "object") cur.fields = {};
  });
}

/* ===== Persistence: one year in memory, three records on disk =====

   Each term record keeps its own row in the database, its own version number,
   and its own history — none of that changes. What changes is that a record's
   day-index 0 is now pinned to its term window (Fall = Aug 1) instead of the
   old academic start date (Fall = Aug 3).

   Boards saved before this change carry no `dayZero`, so we assume the legacy
   start date and shift every mark, and every per-date detail, by the
   difference. The shift is computed from real dates, never hard-coded, and the
   result is stamped with `dayZero` so it can never be applied twice. Nothing is
   deleted or overwritten in place: the old value is read, remapped in memory,
   and only written back on the next save — which the server still snapshots to
   board_history first. */

let SEGMENT_META = {};   // segId -> { version, updatedBy, updatedAt, loaded, missing, failed }
let loadFailed = false;  // any segment failing to load blocks saving entirely
let migrationNotes = []; // human-readable record of what got shifted, for the banner

// Re-index one saved record's day-keyed data from `fromStartIso` onto the year
// timeline. Returns { active (year-length), cellDetails (year-keyed), dropped }.
function remapSegmentDays(seg, savedActive, savedDetails, fromStartIso) {
  const shift = daysBetween(YEAR.startIso, fromStartIso); // year index of that record's index 0
  const active = new Array(YEAR_DAYS).fill(false);
  const cellDetails = {};
  let dropped = 0;
  (savedActive || []).forEach((on, localIdx) => {
    if (!on) return;
    const yi = shift + localIdx;
    if (yi >= 0 && yi < YEAR_DAYS) active[yi] = true; else dropped++;
  });
  Object.keys(savedDetails || {}).forEach(k => {
    const localIdx = Number(k);
    if (!Number.isFinite(localIdx)) return;
    const yi = shift + localIdx;
    if (yi >= 0 && yi < YEAR_DAYS) cellDetails[yi] = savedDetails[k]; else dropped++;
  });
  return { active, cellDetails, dropped };
}

// Merge one loaded segment's contents into the in-memory year.
function absorbSegment(seg, parsed) {
  if (!parsed || typeof parsed !== "object") return;
  const fromStartIso = parsed.dayZero || seg.legacyStartIso;
  const needsShift = fromStartIso !== seg.startIso;
  let shiftedMarks = 0;

  // Row list: union across segments, keyed by task id. First segment to
  // introduce a row defines its position; later segments only add what's new.
  if (Array.isArray(parsed.tasksList)) {
    const have = new Set(STATE.tasksList.map(t => t.id));
    parsed.tasksList.forEach(t => {
      if (!have.has(t.id)) { STATE.tasksList.push({ id: t.id, group: t.group, sub: t.sub || null, label: t.label }); have.add(t.id); }
    });
  }

  Object.keys(parsed.tasks || {}).forEach(taskId => {
    const src = parsed.tasks[taskId];
    if (!src) return;
    const { active, cellDetails, dropped } = remapSegmentDays(
      seg, src.active, src.cellDetails, fromStartIso
    );
    shiftedMarks += active.filter(Boolean).length;
    if (dropped) migrationNotes.push(`${dropped} mark(s) on ${taskId} fell outside the year and were left out`);

    if (!STATE.tasks[taskId]) {
      STATE.tasks[taskId] = { active: new Array(YEAR_DAYS).fill(false), owner: "", note: "", cellDetails: {}, fields: {} };
    }
    const dst = STATE.tasks[taskId];
    // Only take marks that fall inside THIS segment's window — a record has no
    // business asserting anything about days it doesn't own.
    for (let yi = seg.offset; yi < seg.offset + seg.days; yi++) {
      if (active[yi]) dst.active[yi] = true;
      if (cellDetails[yi]) dst.cellDetails[yi] = cellDetails[yi];
    }
    // Task-level metadata is year-wide; first non-empty value wins so a filled
    // Fall board isn't blanked by an untouched Spring one.
    if (!dst.owner && src.owner) dst.owner = src.owner;
    if (!dst.note && src.note) dst.note = src.note;
    if (src.fields && Object.keys(src.fields).length && !Object.keys(dst.fields || {}).length) {
      dst.fields = JSON.parse(JSON.stringify(src.fields));
    }
  });

  if (needsShift && shiftedMarks) {
    migrationNotes.push(`${seg.label}: ${shiftedMarks} marked day(s) re-aligned from ${fromStartIso} to ${seg.startIso}`);
  }

  // Year-wide settings: whichever segment has them wins (they get written to
  // all three on the next save, so they converge).
  if (parsed.collapsed && !Object.keys(STATE.collapsed).length) STATE.collapsed = parsed.collapsed;
  if (parsed.selected) Object.keys(parsed.selected).forEach(k => { if (parsed.selected[k]) STATE.selected[k] = true; });
  if (parsed.fieldDefaults && !Object.keys(STATE.fieldDefaults).length) STATE.fieldDefaults = parsed.fieldDefaults;
  if (parsed.optionSets && !STATE.optionSets) STATE.optionSets = parsed.optionSets;

  // Export rows carry absolute ISO dates already, so they need no remapping.
  if (Array.isArray(parsed.exportRows)) {
    const have = new Set(STATE.exportRows.map(r => r.id));
    parsed.exportRows.forEach(r => { if (!have.has(r.id)) { STATE.exportRows.push(r); have.add(r.id); } });
  }
}

async function loadYear() {
  STATE = emptyState();
  SEGMENT_META = {};
  loadFailed = false;
  migrationNotes = [];

  for (const seg of SEGMENTS) {
    const meta = { version: null, updatedBy: null, updatedAt: null, loaded: false, missing: false, failed: false };
    SEGMENT_META[seg.id] = meta;
    try {
      const res = await fetch("/api/board/" + encodeURIComponent(seg.key));
      if (res.status === 404) {
        // Nothing saved for this term yet — a genuinely empty board, not a failure.
        meta.missing = true;
        meta.loaded = true;
        continue;
      }
      if (!res.ok) throw new Error("HTTP " + res.status);
      const json = await res.json();
      meta.version = json.version;
      meta.updatedBy = json.updatedBy;
      meta.updatedAt = json.updatedAt;
      meta.loaded = true;
      absorbSegment(seg, json.data);
    } catch (e) {
      // A load failure must never look like an empty board — that's how work
      // gets silently overwritten. Flag it and block saving.
      console.error("Failed to load " + seg.key, e);
      meta.failed = true;
      loadFailed = true;
    }
  }

  if (!STATE.tasksList.length) STATE.tasksList = seedDefaultTasksList();
  ensureState();
  rebuildIndex();
  if (loadFailed) blockSavingForReload();
  else if (migrationNotes.length) showMigrationBanner();
}

// Cut the in-memory year back into per-term records for saving.
function segmentPayload(seg) {
  const tasks = {};
  STATE.tasksList.forEach(t => {
    const st = STATE.tasks[t.id];
    if (!st) return;
    const active = st.active.slice(seg.offset, seg.offset + seg.days);
    const cellDetails = {};
    Object.keys(st.cellDetails || {}).forEach(k => {
      const yi = Number(k);
      if (yi >= seg.offset && yi < seg.offset + seg.days) cellDetails[yi - seg.offset] = st.cellDetails[k];
    });
    tasks[t.id] = { active, owner: st.owner || "", note: st.note || "", cellDetails, fields: st.fields || {} };
  });
  return {
    dayZero: seg.startIso,          // self-describing: never re-shift this record
    yearKey: YEAR.startIso,
    tasksList: STATE.tasksList,
    tasks,
    collapsed: STATE.collapsed,
    selected: STATE.selected,
    fieldDefaults: STATE.fieldDefaults,
    optionSets: STATE.optionSets,
    // Export rows live on the term whose window their date falls in.
    exportRows: STATE.exportRows.filter(r => {
      const yi = yearIdxForIso(r.date);
      return yi !== null && yi >= seg.offset && yi < seg.offset + seg.days;
    })
  };
}

/* ===== Add / remove rows ===== */
function addTask(groupId, subKey) {
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
  STATE.tasks[id] = { active: new Array(YEAR_DAYS).fill(false), owner: "", note: "", cellDetails: {}, fields: {} };
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
  // Days is the default zoom — the day grid is the thing people plan against.
  const v = localStorage.getItem("ilab-view-pref");
  viewMode = (v === "day" || v === "week") ? v : "day";
  const saved = localStorage.getItem("ilab-window-pref");
  currentViewIdx = saved ? viewIdxById(saved) : 0;
}
function saveViewPref() {
  localStorage.setItem("ilab-view-pref", viewMode);
  localStorage.setItem("ilab-window-pref", currentView().id);
}

/* ===== Resizable name / panel columns ===== */
const COL_DEFAULTS = { nameW: 200, metaW: 500 };
const COL_BOUNDS = { nameW: [120, 480], metaW: [360, 900] };
let nameColWidth = COL_DEFAULTS.nameW;
let metaPanelWidth = COL_DEFAULTS.metaW;

function clampNum(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }

function loadColumnWidths() {
  const nw = parseInt(localStorage.getItem("ilab-name-col-w"), 10);
  const mw = parseInt(localStorage.getItem("ilab-meta-panel-w"), 10);
  if (!isNaN(nw)) nameColWidth = clampNum(nw, COL_BOUNDS.nameW[0], COL_BOUNDS.nameW[1]);
  if (!isNaN(mw)) metaPanelWidth = clampNum(mw, COL_BOUNDS.metaW[0], COL_BOUNDS.metaW[1]);
  applyColumnWidths();
}
function applyColumnWidths() {
  document.documentElement.style.setProperty("--name-w", nameColWidth + "px");
  document.documentElement.style.setProperty("--meta-w", metaPanelWidth + "px");
}

function setupColumnResizer(handleId, storageKey, bounds, getVal, setVal) {
  const handle = document.getElementById(handleId);
  if (!handle) return;
  let startX = 0, startVal = 0;

  function onMove(e) {
    const next = clampNum(startVal + (e.clientX - startX), bounds[0], bounds[1]);
    setVal(next);
    applyColumnWidths();
  }
  function onUp() {
    handle.classList.remove("dragging");
    document.removeEventListener("mousemove", onMove);
    document.removeEventListener("mouseup", onUp);
    localStorage.setItem(storageKey, String(getVal()));
    syncRowHeights();
  }
  handle.addEventListener("mousedown", (e) => {
    e.preventDefault();
    startX = e.clientX;
    startVal = getVal();
    handle.classList.add("dragging");
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
  });
  handle.addEventListener("dblclick", () => {
    const def = handleId === "nameColResizer" ? COL_DEFAULTS.nameW : COL_DEFAULTS.metaW;
    setVal(def);
    applyColumnWidths();
    localStorage.setItem(storageKey, String(getVal()));
    syncRowHeights();
  });
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
  if (loadFailed) { setSaveStatus("Not saving — reload first", true); return; }
  setSaveStatus("Saving…", false);
  setFloatingSave("dirty");
  clearTimeout(saveTimer);
  saveTimer = setTimeout(doSave, 500);
}

// Saves each term record separately, sending the version we loaded so the
// server can refuse a blind overwrite if someone else saved in between.
// A conflict on any one segment stops the whole save and asks for a reload —
// half-applying a year's worth of edits would be worse than not saving.
async function doSave() {
  if (loadFailed) { setSaveStatus("Not saving — reload first", true); return; }
  if (saving) { clearTimeout(saveTimer); saveTimer = setTimeout(doSave, 300); return; }
  saving = true;
  setFloatingSave("saving");
  const editor = getEditorName();
  try {
    for (const seg of SEGMENTS) {
      const meta = SEGMENT_META[seg.id] || {};
      const body = { data: segmentPayload(seg), updatedBy: editor || null };
      // Only assert a version for records we actually read a version from.
      if (typeof meta.version === "number") body.version = meta.version;
      const res = await fetch("/api/board/" + encodeURIComponent(seg.key), {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      if (res.status === 409) {
        const info = await res.json().catch(() => ({}));
        saving = false;
        setFloatingSave("error");
        blockSavingForConflict(seg, info);
        return;
      }
      if (!res.ok) throw new Error("save failed on " + seg.key + ": " + res.status);
      const json = await res.json().catch(() => ({}));
      if (typeof json.version === "number") meta.version = json.version;
      meta.updatedBy = editor;
      meta.updatedAt = new Date().toISOString();
      SEGMENT_META[seg.id] = meta;
    }
    lastMeta = { updatedBy: editor, updatedAt: new Date().toISOString() };
    setSaveStatus(`Saved${editor ? " by " + editor : ""} · shared with everyone viewing this board`, false);
    setFloatingSave("saved");
  } catch (e) {
    console.error(e);
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

/* ===== Reload guards =====
   Two situations must never end in a silent overwrite: a board we couldn't
   read, and a board someone else has saved since we read it. In both cases
   saving is disabled outright and the person is told to reload, rather than
   letting an edit land on top of work we can't see. */
function showTopBanner(kind, html) {
  let el = document.getElementById("topBanner");
  if (!el) {
    el = document.createElement("div");
    el.id = "topBanner";
    const wrap = document.querySelector(".wrap");
    wrap.insertBefore(el, wrap.firstChild.nextSibling);
  }
  el.className = "top-banner top-banner-" + kind;
  el.innerHTML = html;
  const btn = el.querySelector(".top-banner-reload");
  if (btn) btn.addEventListener("click", () => location.reload());
  const dismiss = el.querySelector(".top-banner-dismiss");
  if (dismiss) dismiss.addEventListener("click", () => el.remove());
}

function blockSavingForReload() {
  loadFailed = true;
  clearTimeout(saveTimer);
  const failed = SEGMENTS.filter(s => (SEGMENT_META[s.id] || {}).failed).map(s => s.label).join(", ");
  setSaveStatus("Couldn't load " + failed + " — saving is off", true);
  setFloatingSave("error");
  showTopBanner("error",
    `<b>Couldn't load ${failed}.</b> Saving is switched off so nothing you do here can overwrite
     work that's already saved. Reload to try again — if it keeps failing, the board is still safe in the database.
     <button type="button" class="btn top-banner-reload">Reload</button>`);
}

function blockSavingForConflict(seg, info) {
  loadFailed = true;
  clearTimeout(saveTimer);
  const who = info.currentUpdatedBy ? " by " + info.currentUpdatedBy : "";
  const when = info.currentUpdatedAt ? " at " + info.currentUpdatedAt : "";
  setSaveStatus("Someone else saved " + seg.label + " — reload before continuing", true);
  showTopBanner("error",
    `<b>${seg.label} was saved${who}${when} since you loaded this page.</b>
     Your change was <i>not</i> saved, so their work is intact. Reload to pick up their version,
     then re-make your edit. <button type="button" class="btn top-banner-reload">Reload</button>`);
}

function showMigrationBanner() {
  const lines = migrationNotes.slice(0, 6).map(n => "<li>" + n + "</li>").join("");
  const more = migrationNotes.length > 6 ? `<li>…and ${migrationNotes.length - 6} more</li>` : "";
  showTopBanner("info",
    `<b>Existing marks were re-aligned to the new full-year calendar.</b>
     Term boards used to start on the first day of classes; they now start on the first day of the month,
     so saved days were shifted to keep them on the same real dates.
     <ul>${lines}${more}</ul>
     Nothing has been written yet — this shift saves on your next edit, and every prior version is still
     in Version history if anything looks off.
     <button type="button" class="btn top-banner-dismiss">Got it</button>`);
}

window.addEventListener("beforeunload", (e) => {
  if (saveState === "dirty" || saveState === "saving") {
    e.preventDefault();
    e.returnValue = "";
  }
});

/* ===== Cell details (time & location for a specific marked day) ===== */
function getCellDetails(taskId, dayIdx) {
  const st = STATE.tasks[taskId];
  if (!st || !st.cellDetails) return null;
  return st.cellDetails[dayIdx] || null;
}
function setCellDetails(taskId, dayIdx, details) {
  const st = STATE.tasks[taskId];
  if (!st) return;
  if (!st.cellDetails) st.cellDetails = {};
  const existing = st.cellDetails[dayIdx] || {};
  // Per-date export field overrides live alongside time/location and must
  // survive an edit (or a clear) of the time/location part.
  const keepFields = details && details.fields ? details.fields : (existing.fields || {});
  const hasFields = keepFields && Object.keys(keepFields).length;
  const hasContent = details && (details.start || details.end || details.location || details.comment);
  if (hasContent || hasFields) {
    st.cellDetails[dayIdx] = {
      start: details ? (details.start || "") : "",
      end: details ? (details.end || "") : "",
      location: details ? (details.location || "") : "",
      comment: details ? (details.comment || "") : "",
      fields: keepFields || {}
    };
  } else {
    delete st.cellDetails[dayIdx];
  }
}
function parseTimeStr(s) {
  if (!s) return null;
  const m = /^(\d{1,2}):(\d{2})$/.exec(s.trim());
  if (!m) return null;
  const h = Number(m[1]), min = Number(m[2]);
  if (h < 0 || h > 23 || min < 0 || min > 59) return null;
  return { h, m: min };
}
function addOneHourClamped(h, m) {
  return h < 23 ? { h: h + 1, m } : { h: 23, m: 59 };
}
function fmtTime12(h, m) {
  const h12 = ((h + 11) % 12) + 1;
  const ampm = h < 12 ? "AM" : "PM";
  return `${h12}:${pad2(m)} ${ampm}`;
}
function summarizeCellDetails(det) {
  if (!det) return "";
  const parts = [];
  if (det.start) {
    const sp = parseTimeStr(det.start);
    let timeStr = sp ? fmtTime12(sp.h, sp.m) : det.start;
    if (det.end) {
      const ep = parseTimeStr(det.end);
      timeStr += "–" + (ep ? fmtTime12(ep.h, ep.m) : det.end);
    }
    parts.push(timeStr);
  }
  if (det.location) parts.push(det.location);
  if (det.comment) parts.push(det.comment);
  return parts.join(" · ");
}


/* ===== Event editor ========================================================
   An "event" is one row on one specific date — exactly one line in the ClickUp
   export. This is where all of its fields are set. Opening it is the default
   click action on a day cell, because looking at and adjusting a single
   occurrence is what people actually do most of the time.

   Fast bulk marking is preserved by dragging across cells to paint a run, and
   by modifier-clicking a cell to toggle it without opening anything. ========= */

let evCtx = null;          // { taskId, yearIdx, draft }
let evPrevFocus = null;

// Fields offered per event. Task name is included because a single occurrence
// often needs its own title; dates and Year & Term are derived, so they're
// shown in the "Exports as" preview instead of being typed here.
const EVENT_FIELD_KEYS = ["taskName", "assignees", "list", "programOffering", "subtype",
                          "status", "format", "location", "includeWeb", "flags",
                          "zoomLink", "regLink", "preview", "description"];

function eventEditorEls() {
  return {
    root: document.getElementById("eventEditor"),
    backdrop: document.getElementById("eventEditorBackdrop"),
    swatch: document.getElementById("eventEditorSwatch"),
    title: document.getElementById("eventEditorTitle"),
    sub: document.getElementById("eventEditorSub"),
    start: document.getElementById("evStartTime"),
    end: document.getElementById("evEndTime"),
    comment: document.getElementById("evComment"),
    fields: document.getElementById("evFields"),
    whenPreview: document.getElementById("evWhenPreview"),
    exportPreview: document.getElementById("evExportPreview")
  };
}

function openEventEditor(taskId, yearIdx) {
  const task = TASKS.find(t => t.id === taskId);
  const st = STATE.tasks[taskId];
  if (!task || !st) return;
  const g = GROUP_BY_ID[task.group];
  const els = eventEditorEls();
  const det = getCellDetails(taskId, yearIdx) || {};

  // Everything is edited on a draft and only committed on Save, so Cancel is
  // a real cancel rather than a partial write.
  evCtx = {
    taskId, yearIdx,
    draft: {
      start: det.start || "",
      end: det.end || "",
      comment: det.comment || "",
      fields: JSON.parse(JSON.stringify(det.fields || {}))
    }
  };

  els.swatch.style.background = g.color;
  els.title.textContent = task.label;
  els.sub.innerHTML = `${fmtLongFull(isoForYearIdx(yearIdx))} · <b>${g.name}</b>${task.sub ? " · " + task.sub : ""}`;
  els.start.value = evCtx.draft.start;
  els.end.value = evCtx.draft.end;
  els.comment.value = evCtx.draft.comment;
  els.comment.oninput = () => { evCtx.draft.comment = els.comment.value; renderEventPreview(); };
  els.start.oninput = () => { evCtx.draft.start = els.start.value; renderEventPreview(); };
  els.end.oninput = () => { evCtx.draft.end = els.end.value; renderEventPreview(); };

  renderEventFields();
  renderEventPreview();

  evPrevFocus = document.activeElement;
  els.backdrop.classList.remove("hidden");
  els.root.classList.remove("hidden");
  document.addEventListener("keydown", handleEventEditorKeys);
  setTimeout(() => els.start.focus(), 0);
}

function closeEventEditor() {
  const els = eventEditorEls();
  els.root.classList.add("hidden");
  els.backdrop.classList.add("hidden");
  document.removeEventListener("keydown", handleEventEditorKeys);
  evCtx = null;
  if (evPrevFocus && evPrevFocus.focus) evPrevFocus.focus();
  evPrevFocus = null;
}
function handleEventEditorKeys(e) {
  if (e.key === "Escape") { e.preventDefault(); closeEventEditor(); }
  if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) { e.preventDefault(); saveEventEditor(); }
}

// What this field would resolve to if the event itself said nothing.
function inheritedValue(taskId, key) {
  const task = TASKS.find(t => t.id === taskId);
  const fromRow = rowOverride(taskId, key);
  if (fromRow) return { value: unsentinel(fromRow), from: "row" };
  const fromBucket = task ? bucketDefault(task.group, key) : "";
  if (fromBucket) return { value: unsentinel(fromBucket), from: "bucket" };
  return { value: "", from: "none" };
}

function renderEventFields() {
  if (!evCtx) return;
  const { taskId } = evCtx;
  const task = TASKS.find(t => t.id === taskId);
  const st = STATE.tasks[taskId];
  const host = eventEditorEls().fields;
  host.innerHTML = "";

  EVENT_FIELD_KEYS.forEach(key => {
    const f = EXPORT_FIELD_BY_KEY[key];
    const own = evCtx.draft.fields[key] || "";
    const inh = inheritedValue(taskId, key);

    const cell = document.createElement("label");
    cell.className = "event-field";

    const lab = document.createElement("span");
    lab.className = "event-field-label";
    lab.textContent = f.header;
    if (own) {
      const badge = document.createElement("i");
      badge.className = "inherit-dot inherit-date";
      badge.title = "Set on this event only";
      lab.appendChild(badge);
    } else if (inh.from !== "none") {
      const hint = document.createElement("span");
      hint.className = "inherit-hint";
      hint.textContent = inh.value + " (" + (inh.from === "row" ? "row" : "bucket") + ")";
      lab.appendChild(hint);
    }
    cell.appendChild(lab);

    // Derived fallbacks, so the placeholder tells the truth when nothing is set.
    let placeholder = inh.value;
    if (!placeholder) {
      if (key === "taskName" || key === "preview") placeholder = task.label;
      else if (key === "assignees") placeholder = emailsForOwnerString(st.owner);
      else if (key === "description") placeholder = st.note || "";
    }

    cell.appendChild(fieldEditor(f.options, own, val => {
      if (val) evCtx.draft.fields[key] = val;
      else delete evCtx.draft.fields[key];
      renderEventFields();
      renderEventPreview();
    }, 190, placeholder));
    host.appendChild(cell);
  });
}

// Resolve the event against a temporary copy of state so the preview reflects
// unsaved edits without touching the board.
function previewResolved() {
  if (!evCtx) return {};
  const { taskId, yearIdx, draft } = evCtx;
  const st = STATE.tasks[taskId];
  const backup = st.cellDetails[yearIdx];
  st.cellDetails[yearIdx] = {
    start: draft.start, end: draft.end,
    location: backup ? backup.location || "" : "",
    comment: draft.comment, fields: draft.fields
  };
  const out = {};
  EXPORT_FIELDS.forEach(f => { out[f.key] = resolveField(taskId, yearIdx, f.key); });
  if (backup === undefined) delete st.cellDetails[yearIdx]; else st.cellDetails[yearIdx] = backup;
  return out;
}

function renderEventPreview() {
  if (!evCtx) return;
  const els = eventEditorEls();
  const r = previewResolved();
  els.whenPreview.textContent = r.startDate + "  →  " + r.endDate +
    (evCtx.draft.start ? "" : "  (default 10–11am — set a start time to change it)");
  els.exportPreview.innerHTML = "";
  EXPORT_FIELDS.forEach(f => {
    const row = document.createElement("div");
    row.className = "event-preview-row" + (r[f.key] ? "" : " is-empty");
    const k = document.createElement("span");
    k.className = "event-preview-key";
    k.textContent = f.header;
    const v = document.createElement("span");
    v.className = "event-preview-val";
    v.textContent = r[f.key] || "—";
    row.appendChild(k); row.appendChild(v);
    els.exportPreview.appendChild(row);
  });
}

function saveEventEditor() {
  if (!evCtx) return;
  const { taskId, yearIdx, draft } = evCtx;
  if (draft.start && parseTimeStr(draft.start) === null) { setSaveStatus("Start time looks invalid", true); return; }
  if (draft.end && parseTimeStr(draft.end) === null) { setSaveStatus("End time looks invalid", true); return; }

  const st = STATE.tasks[taskId];
  const existing = st.cellDetails[yearIdx] || {};
  setCellDetails(taskId, yearIdx, {
    start: draft.start,
    end: draft.end,
    location: draft.fields.location ? "" : (existing.location || ""),
    comment: draft.comment,
    fields: draft.fields
  });
  syncExportRowsForCell(taskId, yearIdx);
  queueSave();
  const n = Object.keys(draft.fields).length;
  setSaveStatus(n ? `Saved this event · ${n} field${n === 1 ? "" : "s"} set on the date` : "Saved this event", false);
  closeEventEditor();
  renderBoard();
}

function removeEventDate() {
  if (!evCtx) return;
  const { taskId, yearIdx } = evCtx;
  const st = STATE.tasks[taskId];
  st.active[yearIdx] = false;
  if (st.cellDetails) delete st.cellDetails[yearIdx];
  const iso = isoForYearIdx(yearIdx);
  STATE.exportRows = STATE.exportRows.filter(r => !(r.taskId === taskId && r.date === iso));
  queueSave();
  closeEventEditor();
  renderAll();
  setSaveStatus("Unmarked that date", false);
}

/* ---- Click behaviour on day cells ----
   A plain click opens the event (marking the day first if it wasn't marked).
   Dragging paints a run of days without opening anything, and holding
   Alt/Shift/Cmd toggles a single day the old way. */
let paintCtx = null;   // { taskId, turnOn, moved, startYearIdx }

function beginPaint(taskId, yearIdx, turnOn) {
  paintCtx = { taskId, turnOn, moved: false, startYearIdx: yearIdx };
  document.body.classList.add("is-painting");
}
function paintCell(taskId, yearIdx) {
  if (!paintCtx || paintCtx.taskId !== taskId) return;
  if (yearIdx === paintCtx.startYearIdx) return;
  const st = STATE.tasks[taskId];
  // The first movement is what turns a click into a drag — at that moment the
  // cell the drag started on has to be committed too, or it gets skipped.
  if (!paintCtx.moved) {
    st.active[paintCtx.startYearIdx] = paintCtx.turnOn;
    paintCtx.moved = true;
  }
  if (st.active[yearIdx] !== paintCtx.turnOn) st.active[yearIdx] = paintCtx.turnOn;
}
function endPaint() {
  document.body.classList.remove("is-painting");
  if (!paintCtx) return;
  const ctx = paintCtx;
  paintCtx = null;
  if (ctx.moved) {
    const t = TASKS.find(x => x.id === ctx.taskId);
    updateGroupCount(t.group);
    updateRowCount(ctx.taskId, STATE.tasks[ctx.taskId]);
    refreshRollups(t.group);
    queueSave();
    renderBoard();
  }
  return ctx;
}
document.addEventListener("mouseup", () => { if (paintCtx) endPaint(); });

/* ===== Rendering ===== */
function groupActiveCount(groupId) {
  const v = currentView();
  let count = 0;
  TASKS_BY_GROUP[groupId].forEach(t => {
    const st = STATE.tasks[t.id];
    if (!st) return;
    for (let yi = v.offset; yi < v.offset + v.days; yi++) {
      if (st.active[yi]) { count++; return; }
    }
  });
  return count;
}

/* ===== Rollups: one summary strip per bucket, and per sub-bucket =====
   A rollup answers a single question for a set of rows: on each day of the
   term, how many of those rows have something marked? That per-day count is
   drawn as a slim strip on the group (and sub-group) header row, so a bucket
   tells you which days it touches even when it's collapsed — you can read
   "when is Venture Incubation happening at all" without expanding it. */

const ROLLUP_BUSY_THRESHOLD = 3; // 3+ items landing on one day gets a pile-up dot

function tasksForScope(groupId, sub) {
  const all = TASKS_BY_GROUP[groupId] || [];
  if (!sub) return all;
  return all.filter(t => (t.sub || "") === sub);
}

// Per-day count of how many rows in `tasks` are marked active.
function rollupCounts(tasks) {
  // Counts are keyed by YEAR index so they stay valid across view switches.
  const counts = new Array(YEAR_DAYS).fill(0);
  tasks.forEach(t => {
    const st = STATE.tasks[t.id];
    if (!st || !Array.isArray(st.active)) return;
    for (let yi = 0; yi < YEAR_DAYS; yi++) if (st.active[yi]) counts[yi]++;
  });
  return counts;
}

// How many distinct days this set of rows touches — the headline number for
// "how much of the term does this bucket occupy?"
// Distinct days touched, counted only within the view that's on screen — the
// chip should describe what you're looking at, not the whole year.
function rollupDayTotal(tasks) {
  const counts = rollupCounts(tasks);
  const v = currentView();
  let n = 0;
  for (let yi = v.offset; yi < v.offset + v.days; yi++) if (counts[yi] > 0) n++;
  return n;
}

function rollupTasksOnDay(tasks, yearIdx) {
  return tasks.filter(t => {
    const st = STATE.tasks[t.id];
    return st && st.active[yearIdx];
  });
}

function rollupCellTitle(tasks, dayIdxs, counts) {
  const days = dayIdxs.filter(i => counts[i] > 0);
  const names = [];
  days.forEach(i => rollupTasksOnDay(tasks, i).forEach(t => {
    if (!names.includes(t.label)) names.push(t.label);
  }));
  const when = dayIdxs.length === 1
    ? fmtShort(dateForYearIdx(dayIdxs[0]))
    : fmtShort(dateForYearIdx(dayIdxs[0])) + " – " + fmtShort(dateForYearIdx(dayIdxs[dayIdxs.length - 1]));
  if (!names.length) return when + " — nothing marked";
  const shown = names.slice(0, 6).join(", ") + (names.length > 6 ? ", +" + (names.length - 6) + " more" : "");
  const dayNote = dayIdxs.length > 1 ? " across " + days.length + " day" + (days.length === 1 ? "" : "s") : "";
  return when + " — " + names.length + " item" + (names.length === 1 ? "" : "s") + dayNote +
    ": " + shown + " · click to list them";
}

// Draws (or redraws) the rollup strip inside a header's timeline-side element.
// `host` carries data-rollup-group / data-rollup-sub so it can be refreshed in
// place when someone toggles a single day, without re-rendering the whole board.
function renderRollupStrip(host) {
  const groupId = host.dataset.rollupGroup;
  const sub = host.dataset.rollupSub || "";
  const g = GROUP_BY_ID[groupId];
  if (!g) return;
  const tasks = tasksForScope(groupId, sub);
  const counts = rollupCounts(tasks);

  host.innerHTML = "";
  const track = document.createElement("div");
  track.className = "rollup-track" + (sub ? " rollup-track-sub" : "");
  const n = colCount();
  track.style.gridTemplateColumns = `repeat(${n}, var(--cell-w))`;

  const makeCell = (dayIdxs) => {
    const marked = dayIdxs.filter(i => counts[i] > 0);
    const itemCount = new Set();
    marked.forEach(i => rollupTasksOnDay(tasks, i).forEach(t => itemCount.add(t.id)));
    const cell = document.createElement("button");
    cell.type = "button";
    cell.className = "rollup-cell";
    if (viewMode === "day") {
      const dt = dateForYearIdx(dayIdxs[0]);
      const dow = dt.getDay();
      if (dow === 0 || dow === 6) cell.classList.add("weekend");
      if (dt.getDate() === 1) cell.classList.add("month-start");
    }
    if (marked.length) {
      cell.classList.add("is-on");
      cell.style.background = g.color;
      if (itemCount.size >= ROLLUP_BUSY_THRESHOLD) cell.classList.add("is-busy");
      cell.addEventListener("click", () => openRollupPanel(groupId, sub, dayIdxs));
    } else {
      cell.classList.add("is-off");
      cell.disabled = true;
    }
    cell.title = rollupCellTitle(tasks, dayIdxs, counts);
    return cell;
  };

  for (let i = 0; i < n; i++) track.appendChild(makeCell(yearIdxsForCol(i)));
  host.appendChild(track);
}

// Rebuild just the strips affected by a single day toggle, so clicking cells
// stays snappy and doesn't blow away focus elsewhere on the board.
function refreshRollups(groupId) {
  document.querySelectorAll(`[data-rollup-group="${groupId}"]`).forEach(renderRollupStrip);
  document.querySelectorAll(`.scope-days[data-scope-group="${groupId}"]`).forEach(el => {
    const sub = el.dataset.scopeSub || "";
    const z = rollupDayTotal(tasksForScope(groupId, sub));
    el.textContent = z ? z + (z === 1 ? " day" : " days") : "";
  });
}
function refreshAllRollups() {
  document.querySelectorAll("[data-rollup-group]").forEach(renderRollupStrip);
}

/* ===== Rollup detail panel (read-only) =====
   Clicking a filled cell in a rollup strip lists what's actually behind it.
   Deliberately read-only: this is the "zoom in from the summary" view, and
   nothing here can flip a mark by accident. */
function openRollupPanel(groupId, sub, dayIdxs) {
  const g = GROUP_BY_ID[groupId];
  const tasks = tasksForScope(groupId, sub);
  const panel = document.getElementById("rollupPanel");
  const swatch = document.getElementById("rollupPanelSwatch");
  const title = document.getElementById("rollupPanelTitle");
  const count = document.getElementById("rollupPanelCount");
  const list = document.getElementById("rollupPanelList");
  if (!panel) return;

  swatch.style.background = g.color;
  const scopeName = g.name + (sub ? " · " + sub : "");
  const dayLabel = dayIdxs.length === 1
    ? fmtLong(isoForYearIdx(dayIdxs[0]))
    : fmtShort(dateForYearIdx(dayIdxs[0])) + " – " + fmtShort(dateForYearIdx(dayIdxs[dayIdxs.length - 1]));
  title.textContent = scopeName + " — " + dayLabel;

  list.innerHTML = "";
  let total = 0;
  const daysWithItems = dayIdxs.filter(i => rollupTasksOnDay(tasks, i).length);

  daysWithItems.forEach(dayIdx => {
    const rows = rollupTasksOnDay(tasks, dayIdx);
    total += rows.length;
    const section = document.createElement("div");
    section.className = "day-search-day";

    if (dayIdxs.length > 1) {
      const head = document.createElement("div");
      head.className = "day-search-day-header";
      const dateEl = document.createElement("span");
      dateEl.className = "day-search-day-date";
      dateEl.textContent = fmtLong(isoForYearIdx(dayIdx));
      const cnt = document.createElement("span");
      cnt.className = "day-search-day-count";
      cnt.textContent = rows.length + " item" + (rows.length === 1 ? "" : "s");
      head.appendChild(dateEl);
      head.appendChild(cnt);
      section.appendChild(head);
    }

    rows.forEach(t => {
      const st = STATE.tasks[t.id];
      const det = getCellDetails(t.id, dayIdx);
      const row = document.createElement("div");
      row.className = "day-search-item";

      const dot = document.createElement("span");
      dot.className = "day-search-dot";
      dot.style.background = g.color;
      row.appendChild(dot);

      const name = document.createElement("button");
      name.type = "button";
      name.className = "day-search-name day-search-open";
      name.textContent = t.label;
      name.title = "Open this event";
      name.addEventListener("click", () => openEventEditor(t.id, dayIdx));
      row.appendChild(name);

      if (t.sub && !sub) {
        const subEl = document.createElement("span");
        subEl.className = "day-search-sub";
        subEl.textContent = "(" + t.sub + ")";
        row.appendChild(subEl);
      }

      const meta = document.createElement("span");
      meta.className = "day-search-meta";
      const bits = [];
      if (det) { const s = summarizeCellDetails(det); if (s) bits.push(s); }
      if (st && st.owner) bits.push(st.owner);
      if (st && st.note) bits.push(st.note);
      meta.textContent = bits.join(" · ");
      row.appendChild(meta);

      section.appendChild(row);
    });

    list.appendChild(section);
  });

  if (!total) {
    const empty = document.createElement("div");
    empty.className = "day-search-empty";
    empty.textContent = "Nothing marked here.";
    list.appendChild(empty);
  }

  count.textContent = total + " item" + (total === 1 ? "" : "s") +
    (dayIdxs.length > 1 ? " across " + daysWithItems.length + " day" + (daysWithItems.length === 1 ? "" : "s") : "") +
    " · " + yearTermForYearIdx(dayIdxs[0]);

  panel.classList.remove("hidden");
  panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function closeRollupPanel() {
  const panel = document.getElementById("rollupPanel");
  if (panel) panel.classList.add("hidden");
}

function renderMilestoneRow() {
  const row = document.getElementById("milestoneRow");
  row.innerHTML = "";
  const track = document.createElement("div");
  track.className = "week-track";
  track.style.gridTemplateColumns = `repeat(${colCount()}, var(--cell-w))`;
  track.style.height = "1px";
  row.appendChild(track);

  // Month tags. In day view a tag sits on the 1st of each month; across a full
  // year that's the main way to keep your bearings while scrolling.
  const n = colCount();
  for (let i = 0; i < n; i++) {
    const dt = dateForCol(i);
    const isFirstCol = i === 0;
    const startsMonth = viewMode === "day"
      ? dt.getDate() === 1
      : yearIdxsForCol(i).some(yi => dateForYearIdx(yi).getDate() === 1);
    if (startsMonth || isFirstCol) {
      const monthDt = viewMode === "day" ? dt
        : dateForYearIdx(yearIdxsForCol(i).find(yi => dateForYearIdx(yi).getDate() === 1) ?? yearIdxsForCol(i)[0]);
      const tag = document.createElement("div");
      tag.className = "pin pin-month";
      tag.style.left = `calc(${i} * var(--cell-w) + var(--cell-w) / 2)`;
      const showYear = monthDt.getMonth() === 0 || isFirstCol;
      tag.innerHTML = `<span class="pin-label">${MONTHS[monthDt.getMonth()]}${showYear ? " " + monthDt.getFullYear() : ""}</span>`;
      track.appendChild(tag);
    }
  }

  milestonesInView().forEach(m => {
    const col = colForYearIdx(yearIdxForIso(m.date));
    if (col === null) return;
    const pin = document.createElement("div");
    pin.className = "pin pin-" + m.kind;
    pin.style.left = `calc(${col} * var(--cell-w) + var(--cell-w) / 2)`;
    pin.title = m.label + " — " + m.date;
    pin.innerHTML = `<span class="pin-dot"></span><span class="pin-label">${m.label}</span>`;
    track.appendChild(pin);
  });
}

function renderWeekHeader() {
  const v = currentView();
  const row = document.getElementById("weekHeaderRow");
  row.innerHTML = "";

  const namesSpacer = document.getElementById("namesSpacer");
  if (namesSpacer) namesSpacer.textContent = v.label + " · " + (viewMode === "day" ? "days" : "weeks");

  const track = document.createElement("div");
  track.className = "week-track";
  const n = colCount();
  track.style.gridTemplateColumns = `repeat(${n}, var(--cell-w))`;

  if (viewMode === "day") {
    for (let i = 0; i < n; i++) {
      const dt = dateForCol(i);
      const dow = dt.getDay();
      const cell = document.createElement("div");
      cell.className = "day-head-cell" + (dow === 0 || dow === 6 ? " weekend" : "") + (dt.getDate() === 1 ? " month-start" : "");
      cell.title = fmtLong(isoForDate(dt));
      cell.innerHTML = `<span class="dh-dow">${WEEKDAY_LETTERS[dow]}</span><span class="dh-num">${dt.getDate()}</span>`;
      track.appendChild(cell);
    }
  } else {
    for (let i = 0; i < n; i++) {
      const grp = yearIdxsForCol(i);
      const first = dateForYearIdx(grp[0]);
      const last = dateForYearIdx(grp[grp.length - 1]);
      const cell = document.createElement("div");
      cell.className = "week-head-cell" + (first.getDate() <= 7 ? " month-start" : "");
      cell.title = fmtShort(first) + " – " + fmtShort(last);
      cell.innerHTML = `<span>${fmtShort(first)}</span>`;
      track.appendChild(cell);
    }
  }
  row.appendChild(track);
}

function taskRowMarkup(t) {
  const v = currentView();
  const st = STATE.tasks[t.id];
  // The "Nd" chip counts days inside the current view, not the whole year.
  let activeN = 0;
  for (let yi = v.offset; yi < v.offset + v.days; yi++) if (st.active[yi]) activeN++;
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

  const gear = document.createElement("button");
  gear.type = "button";
  gear.className = "task-fields" + (openRowFieldsId === t.id ? " is-open" : "");
  const overrideCount = Object.keys((STATE.tasks[t.id].fields) || {}).length;
  gear.title = overrideCount
    ? overrideCount + " field" + (overrideCount === 1 ? "" : "s") + " set on this row"
    : "Event fields for this row (inherits from " + GROUP_BY_ID[t.group].name + ")";
  gear.textContent = "⚙";
  if (overrideCount) gear.classList.add("has-overrides");
  gear.addEventListener("click", () => openRowFields(t.id));
  left.appendChild(gear);

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
  const n = colCount();
  track.style.gridTemplateColumns = `repeat(${n}, var(--cell-w))`;
  const color = GROUP_BY_ID[t.group].color;

  if (viewMode === "day") {
    for (let i = 0; i < n; i++) {
      const yi = yearIdxForCol(i);
      const dt = dateForYearIdx(yi);
      const dow = dt.getDay();
      const cell = document.createElement("button");
      cell.type = "button";
      cell.className = "week-cell day-cell" + (dow === 0 || dow === 6 ? " weekend" : "") + (dt.getDate() === 1 ? " month-start" : "");
      cell.setAttribute("aria-pressed", st.active[yi] ? "true" : "false");
      const det0 = getCellDetails(t.id, yi);
      cell.title = fmtShort(dt) + (det0 ? " — " + summarizeCellDetails(det0) : "") + " · right-click for time, location & event fields";
      if (det0) cell.classList.add("has-details");
      if (st.active[yi]) cell.style.background = color;
      const toggleOnly = () => {
        st.active[yi] = !st.active[yi];
        cell.setAttribute("aria-pressed", st.active[yi] ? "true" : "false");
        cell.style.background = st.active[yi] ? color : "";
        cell.classList.toggle("has-details", !!getCellDetails(t.id, yi));
        updateGroupCount(t.group);
        updateRowCount(t.id, st);
        refreshRollups(t.group);
        queueSave();
      };
      // Drag across cells to paint a run of days; a plain click (no drag)
      // opens the event instead.
      cell.addEventListener("mousedown", (e) => {
        if (e.button !== 0) return;
        if (e.altKey || e.shiftKey || e.metaKey || e.ctrlKey) return;
        beginPaint(t.id, yi, !st.active[yi]);
      });
      cell.addEventListener("mouseenter", () => {
        if (paintCtx && paintCtx.taskId === t.id) {
          paintCell(t.id, yi);
          cell.setAttribute("aria-pressed", st.active[yi] ? "true" : "false");
          cell.style.background = st.active[yi] ? color : "";
        }
      });
      cell.addEventListener("click", (e) => {
        // Modifier-click = the old fast toggle, no dialog.
        if (e.altKey || e.shiftKey || e.metaKey || e.ctrlKey) { toggleOnly(); return; }
        const ctx = endPaint();
        if (ctx && ctx.moved) return;             // that was a drag, not a click
        if (!st.active[yi]) {                      // clicking an empty day creates the event
          st.active[yi] = true;
          cell.setAttribute("aria-pressed", "true");
          cell.style.background = color;
          updateGroupCount(t.group);
          updateRowCount(t.id, st);
          refreshRollups(t.group);
          queueSave();
        }
        openEventEditor(t.id, yi);
      });
      cell.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        if (st.active[yi]) openEventEditor(t.id, yi);
      });
      track.appendChild(cell);
    }
  } else {
    for (let i = 0; i < n; i++) {
      const grp = yearIdxsForCol(i);
      const cell = document.createElement("button");
      cell.type = "button";
      const activeInWeek = grp.filter(yi => st.active[yi]).length;
      const full = activeInWeek === grp.length && grp.length > 0;
      const partial = activeInWeek > 0 && !full;
      cell.className = "week-cell";
      cell.setAttribute("aria-pressed", full ? "true" : "false");
      cell.title = fmtShort(dateForYearIdx(grp[0])) + " – " + fmtShort(dateForYearIdx(grp[grp.length - 1]))
        + (activeInWeek ? " · " + activeInWeek + " day" + (activeInWeek === 1 ? "" : "s") + " marked" : "");
      if (full) cell.style.background = color;
      else if (partial) cell.style.background = `linear-gradient(90deg, ${color} 50%, transparent 50%)`;
      cell.addEventListener("click", () => {
        const turnOn = activeInWeek < grp.length;
        grp.forEach(yi => { st.active[yi] = turnOn; });
        updateGroupCount(t.group);
        queueSave();
        renderBoard();
      });
      track.appendChild(cell);
    }
  }
  right.appendChild(track);

  return { left, right };
}

function updateRowCount(taskId, st) {
  const el = document.querySelector(`#namesBoard [data-task-id="${taskId}"] .row-count`);
  if (el) {
    const v = currentView();
    let activeN = 0;
    for (let yi = v.offset; yi < v.offset + v.days; yi++) if (st.active[yi]) activeN++;
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
  const trackWidthCss = `calc(${colCount()} * var(--cell-w))`;

  GROUPS.forEach(g => {
    const collapsed = !!STATE.collapsed[g.id];

    const gDays = rollupDayTotal(TASKS_BY_GROUP[g.id] || []);

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
          <span class="group-count" data-group="${g.id}">${groupActiveCount(g.id)} / ${TASKS_BY_GROUP[g.id].length} planned</span>
          <span class="scope-days" data-scope-group="${g.id}" data-scope-sub="">${gDays ? gDays + (gDays === 1 ? " day" : " days") : ""}</span>
          <span class="group-desc" title="${g.desc}">${g.desc}</span>
        </div>
      </div>
    `;
    leftHeader.querySelector(".collapse-btn").addEventListener("click", () => toggleGroupCollapse(g.id));
    namesRoot.appendChild(leftHeader);

    const rightHeader = document.createElement("div");
    rightHeader.className = "group-header-shadow";
    rightHeader.style.width = trackWidthCss;
    rightHeader.dataset.rollupGroup = g.id;
    rightHeader.dataset.rollupSub = "";
    cellsRoot.appendChild(rightHeader);
    renderRollupStrip(rightHeader);

    if (!collapsed) {
      const blocks = subBlocksForGroup(g.id);
      const bodyBlocks = blocks.length ? blocks : [{ sub: null, tasks: [] }];
      bodyBlocks.forEach(block => {
        if (block.sub) {
          const subDays = rollupDayTotal(block.tasks);
          const subHead = document.createElement("div");
          subHead.className = "sub-header";
          subHead.style.setProperty("--gcolor", g.color);
          const subName = document.createElement("span");
          subName.className = "sub-header-name";
          subName.textContent = block.sub;
          subHead.appendChild(subName);
          const subDaysEl = document.createElement("span");
          subDaysEl.className = "scope-days";
          subDaysEl.dataset.scopeGroup = g.id;
          subDaysEl.dataset.scopeSub = block.sub;
          subDaysEl.textContent = subDays ? subDays + (subDays === 1 ? " day" : " days") : "";
          subHead.appendChild(subDaysEl);
          namesRoot.appendChild(subHead);

          const subHeadShadow = document.createElement("div");
          subHeadShadow.className = "sub-header-shadow";
          subHeadShadow.style.width = trackWidthCss;
          subHeadShadow.dataset.rollupGroup = g.id;
          subHeadShadow.dataset.rollupSub = block.sub;
          cellsRoot.appendChild(subHeadShadow);
          renderRollupStrip(subHeadShadow);
        }
        block.tasks.forEach(t => {
          const { left, right } = taskRowMarkup(t);
          namesRoot.appendChild(left);
          cellsRoot.appendChild(right);
          if (openRowFieldsId === t.id) {
            namesRoot.appendChild(rowFieldsMarkup(t));
            const shadow = document.createElement("div");
            shadow.className = "row-fields-shadow";
            shadow.style.width = trackWidthCss;
            cellsRoot.appendChild(shadow);
          }
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
  buildMonthJump();
  positionTodayLine();
}

/* ===== Navigation: view rail, month jump, sticky month, today line =========
   A full year in day view is roughly eight thousand pixels wide, so the point
   of all of this is that you always know where you are and can get somewhere
   else in one action. ====================================================== */

function setViewMode(mode) {
  if (mode !== "day" && mode !== "week") return;
  if (viewMode === mode) return;
  // Keep the same date under the eye when the zoom changes.
  const anchor = firstVisibleYearIdx();
  viewMode = mode;
  saveViewPref();
  renderAll();
  if (anchor !== null) scrollToYearIdx(anchor, "auto");
}

function updateViewToggle() {
  document.querySelectorAll(".rail-zoom-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.mode === viewMode);
  });
}

function updateTermTabs() {
  document.querySelectorAll(".term-tab").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.term === currentView().id);
  });
}

// Which year index is at the left edge of the scroll viewport right now.
function firstVisibleYearIdx() {
  const boardScroll = document.getElementById("boardScroll");
  if (!boardScroll) return null;
  const cellW = viewMode === "day" ? 22 : 46;
  const col = Math.round(boardScroll.scrollLeft / cellW);
  const groups = deriveView().weekGroups;
  if (viewMode === "day") {
    const v = currentView();
    return Math.min(v.offset + v.days - 1, v.offset + Math.max(0, col));
  }
  const g = groups[Math.min(groups.length - 1, Math.max(0, col))];
  return g ? g[0] : null;
}

// Months that actually appear in the view on screen.
function monthsInView() {
  const v = currentView();
  const out = [];
  let last = null;
  for (let k = 0; k < v.days; k++) {
    const d = dateForYearIdx(v.offset + k);
    const key = d.getFullYear() + "-" + d.getMonth();
    if (key !== last) {
      last = key;
      out.push({ key, month: d.getMonth(), year: d.getFullYear(), yearIdx: v.offset + k });
    }
  }
  return out;
}

function buildMonthJump() {
  const host = document.getElementById("monthJump");
  if (!host) return;
  host.innerHTML = "";
  monthsInView().forEach(m => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "rail-month";
    b.dataset.monthKey = m.key;
    b.innerHTML = `<span class="rail-month-name">${MONTHS[m.month]}</span>` +
      (m.month === 0 || m.yearIdx === currentView().offset
        ? `<span class="rail-month-year">'${String(m.year).slice(2)}</span>` : "");
    b.title = MONTHS_LONG[m.month] + " " + m.year;
    b.addEventListener("click", () => scrollToYearIdx(m.yearIdx, "smooth", "start"));
    host.appendChild(b);
  });
  updateStickyMonth();
}

// Pin the month you're looking at, and light up its button in the rail.
function updateStickyMonth() {
  const label = document.getElementById("stickyMonth");
  const yi = firstVisibleYearIdx();
  if (!label || yi === null) return;
  const d = dateForYearIdx(yi);
  label.textContent = MONTHS_LONG[d.getMonth()] + " " + d.getFullYear();
  const key = d.getFullYear() + "-" + d.getMonth();
  document.querySelectorAll(".rail-month").forEach(b => {
    b.classList.toggle("active", b.dataset.monthKey === key);
  });
  positionTodayLine();
}

// A vertical rule on today's column, so "now" is findable at a glance.
function positionTodayLine() {
  const line = document.getElementById("todayLine");
  if (!line) return;
  const yi = yearIdxForIso(isoForDate(new Date()));
  const col = yi === null ? null : colForYearIdx(yi);
  if (col === null) { line.classList.add("hidden"); return; }
  line.classList.remove("hidden");
  const cellW = viewMode === "day" ? 22 : 46;
  line.style.left = (col * cellW + (viewMode === "day" ? cellW / 2 : 1)) + "px";
}

function scrollToYearIdx(yi, behavior, align) {
  const boardScroll = document.getElementById("boardScroll");
  if (!boardScroll) return;
  const col = colForYearIdx(yi);
  if (col === null) return;
  const cellW = viewMode === "day" ? 22 : 46;
  const targetLeft = align === "start"
    ? Math.max(0, col * cellW - 2)
    : Math.max(0, col * cellW - boardScroll.clientWidth / 2);
  boardScroll.scrollTo({ left: targetLeft, behavior: behavior || "smooth" });
  setTimeout(updateStickyMonth, 60);
}
function flashDayColumn(yi) { scrollToYearIdx(yi); }

// Today lives in exactly one view; if it isn't in the one you're on, say so
// rather than scrolling to nothing.
function scrollToToday() {
  const yi = yearIdxForIso(isoForDate(new Date()));
  if (yi === null) { setSaveStatus("Today is outside " + YEAR.label, false); return; }
  if (colForYearIdx(yi) === null) {
    const seg = segmentForYearIdx(yi);
    if (seg) { currentViewIdx = viewIdxById(seg.id); saveViewPref(); renderAll(); }
  }
  scrollToYearIdx(yi);
}

function toggleDaySearchBar() {
  const bar = document.getElementById("daySearchBar");
  if (!bar) return;
  const nowHidden = bar.classList.toggle("hidden");
  document.getElementById("findBtn").classList.toggle("active", !nowHidden);
  if (!nowHidden) document.getElementById("daySearchInput").focus();
}

function updateDeadlineChip() {
  document.getElementById("deadlineChip").textContent = currentView().deadline;
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
  const v = currentView();
  const lines = [];
  lines.push("i-lab " + v.label + " Planning — draft");
  lines.push("Generated " + new Date().toLocaleDateString());
  lines.push("");
  GROUPS.forEach(g => {
    const items = TASKS_BY_GROUP[g.id].filter(t => {
      const st = STATE.tasks[t.id];
      for (let yi = v.offset; yi < v.offset + v.days; yi++) if (st.active[yi]) return true;
      return !!(st.note || st.owner);
    });
    if (!items.length) return;
    lines.push(g.name.toUpperCase());
    let lastSub = undefined;
    items.forEach(t => {
      if (t.sub !== lastSub) { lastSub = t.sub; if (t.sub) lines.push("  " + t.sub + ":"); }
      const st = STATE.tasks[t.id];
      const activeDays = st.active
        .map((on, yi) => on ? yi : -1)
        .filter(yi => yi >= v.offset && yi < v.offset + v.days);
      let rangeStr = "(no days marked yet)";
      if (activeDays.length) {
        const first = dateForYearIdx(activeDays[0]);
        const last = dateForYearIdx(activeDays[activeDays.length - 1]);
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

/* ===== Day search (single day or a date range) ===== */
const WEEKDAYS_LONG = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const MAX_SEARCH_RANGE_DAYS = 62; // generous upper bound, mainly to stop fat-finger year-long ranges

function segmentLabelForIso(iso) {
  const yi = yearIdxForIso(iso);
  if (yi === null) return null;
  const seg = segmentForYearIdx(yi);
  return seg ? seg.label : null;
}

function fmtLong(iso) {
  const d = parseISO(iso);
  return WEEKDAYS_LONG[d.getDay()] + ", " + MONTHS[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
}
function fmtLongFull(iso) {
  const d = parseISO(iso);
  return WEEKDAYS_LONG[d.getDay()] + ", " + MONTHS_LONG[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
}

// Gathers everything marked active for one calendar date, switching the
// loaded term if the date falls in a different one than what's currently
// on screen. Returns null term (with empty arrays) if the date is outside
// both Fall 2026 and Spring 2027 entirely.
// The whole year is loaded at once now, so looking up a date is a plain lookup —
// no board switching, and dates in the old Dec/Jan gap are searchable too.
function gatherDayBundle(iso) {
  const yi = yearIdxForIso(iso);
  if (yi === null) return { iso, term: null, results: [], milestones: [] };
  const seg = segmentForYearIdx(yi);
  const results = [];
  TASKS.forEach(t => {
    const st = STATE.tasks[t.id];
    if (st && st.active[yi]) {
      results.push({ task: t, state: st, group: GROUP_BY_ID[t.group], details: getCellDetails(t.id, yi) });
    }
  });
  const milestones = MILESTONES.filter(m => m.date === iso);
  return { iso, term: seg, dayIdx: yi, results, milestones };
}

function searchDay() {
  const startInput = document.getElementById("daySearchInput");
  const endInput = document.getElementById("daySearchEndInput");
  let startIso = startInput.value;
  let endIso = endInput.value || startIso;
  if (!startIso) {
    setSaveStatus("Pick a start date first", true);
    return;
  }
  if (endIso < startIso) {
    [startIso, endIso] = [endIso, startIso];
    startInput.value = startIso;
    endInput.value = endIso;
  }
  const rangeLen = Math.round((parseISO(endIso) - parseISO(startIso)) / 86400000) + 1;
  if (rangeLen > MAX_SEARCH_RANGE_DAYS) {
    setSaveStatus(`Pick a range of ${MAX_SEARCH_RANGE_DAYS} days or fewer`, true);
    return;
  }

  const dayBundles = [];
  for (let i = 0; i < rangeLen; i++) {
    const iso = isoForDate(addDays(parseISO(startIso), i));
    dayBundles.push(gatherDayBundle(iso));
  }

  renderDaySearchResults(startIso, endIso, dayBundles);
  if (dayBundles.length === 1 && dayBundles[0].term) flashDayColumn(dayBundles[0].dayIdx);
}

function renderDaySearchResults(startIso, endIso, dayBundles) {
  const panel = document.getElementById("daySearchPanel");
  const title = document.getElementById("daySearchTitle");
  const count = document.getElementById("daySearchCount");
  const list = document.getElementById("daySearchList");
  panel.classList.remove("hidden");
  list.innerHTML = "";

  const isRange = startIso !== endIso;
  title.textContent = isRange ? fmtLong(startIso) + "  →  " + fmtLong(endIso) : fmtLong(startIso);

  let totalItems = 0;
  dayBundles.forEach(b => { totalItems += b.results.length + b.milestones.length; });
  const termsInvolved = Array.from(new Set(dayBundles.filter(b => b.term).map(b => b.term.label)));
  count.textContent = totalItems + " item" + (totalItems === 1 ? "" : "s") +
    (isRange ? " across " + dayBundles.length + " days" : "") +
    (termsInvolved.length ? " · " + termsInvolved.join(" + ") : "");

  dayBundles.forEach(b => {
    const daySection = document.createElement("div");
    daySection.className = "day-search-day";

    if (isRange) {
      const dayTotal = b.results.length + b.milestones.length;
      const dayHeader = document.createElement("div");
      dayHeader.className = "day-search-day-header";
      dayHeader.innerHTML = `<span class="day-search-day-date">${fmtLong(b.iso)}</span>` +
        `<span class="day-search-day-count">${dayTotal ? dayTotal + " item" + (dayTotal > 1 ? "s" : "") : "—"}</span>`;
      daySection.appendChild(dayHeader);
    }

    if (!b.term) {
      const empty = document.createElement("div");
      empty.className = "day-search-empty";
      empty.textContent = "Outside " + YEAR.label + " — nothing to show.";
      daySection.appendChild(empty);
      list.appendChild(daySection);
      return;
    }

    if (!b.results.length && !b.milestones.length) {
      const empty = document.createElement("div");
      empty.className = "day-search-empty";
      empty.textContent = "Nothing marked for this day.";
      daySection.appendChild(empty);
      list.appendChild(daySection);
      return;
    }

    b.milestones.forEach(m => {
      const row = document.createElement("div");
      row.className = "day-search-item day-search-milestone";
      row.innerHTML = `<span class="day-search-dot" style="background:#B24C3D"></span>
        <span class="day-search-name">${m.label}</span>
        <span class="day-search-tag">MILESTONE</span>
        <span class="day-search-meta">FAS Registrar calendar</span>`;
      daySection.appendChild(row);
    });

    b.results.forEach(r => {
      const row = document.createElement("div");
      row.className = "day-search-item";
      const subStr = r.task.sub ? ` <span class="day-search-sub">(${r.task.sub})</span>` : "";
      const detailStr = r.details ? summarizeCellDetails(r.details) : "";
      const ownerStr = r.state.owner ? " · " + r.state.owner : "";
      const noteStr = r.state.note ? " — " + r.state.note : "";

      const dot = document.createElement("span");
      dot.className = "day-search-dot";
      dot.style.background = r.group.color;
      row.appendChild(dot);

      // The name is the way into this specific occurrence's fields.
      const open = document.createElement("button");
      open.type = "button";
      open.className = "day-search-name day-search-open";
      open.innerHTML = r.task.label + subStr;
      open.title = "Open this event";
      open.addEventListener("click", () => openEventEditor(r.task.id, b.dayIdx));
      row.appendChild(open);

      const rest = document.createElement("span");
      rest.className = "day-search-rest";
      rest.innerHTML = `<span class="day-search-tag">${r.group.tag}</span>
        <span class="day-search-meta">${detailStr ? detailStr + " · " : ""}${r.group.name}${ownerStr}${noteStr}</span>`;
      row.appendChild(rest);
      daySection.appendChild(row);
    });

    list.appendChild(daySection);
  });
}

function closeDaySearch() {
  document.getElementById("daySearchPanel").classList.add("hidden");
}


/* ===== ClickUp export =====================================================
   The column list, order, and header text below match the reconciled CSV that
   ClickUp actually accepted, so a downloaded file can be imported without
   rearranging anything.

   Every field resolves through a three-step cascade:

       bucket default  ->  row override  ->  single-date override

   The idea is that you set "Venture Incubation events are In-Person, list
   Venture Incubation, status Planning" once on the bucket, and then only touch
   the exceptions. A blank at a narrower level means "inherit"; it does not mean
   "blank". To force an actual blank, the narrower level stores "—" (see
   BLANK_SENTINEL) — otherwise there'd be no way to clear an inherited value.
   ========================================================================= */

const BLANK_SENTINEL = "—";

const EXPORT_FIELDS = [
  { key: "taskName",        header: "Task Name",                           width: 200, auto: true },
  { key: "assignees",       header: "Assignees",                           width: 210, options: "assignees", multi: true },
  { key: "includeWeb",      header: "Include_on_website (clickup)",        width: 120, options: "includeWeb" },
  { key: "startDate",       header: "Start Dates",                         width: 150, auto: true },
  { key: "endDate",         header: "End Dates",                           width: 150, auto: true },
  { key: "preview",         header: "Preview summary",                     width: 210 },
  { key: "description",     header: "Event Description",                   width: 230 },
  { key: "format",          header: "Event Format",                        width: 115, options: "format" },
  { key: "location",        header: "Event Location",                      width: 160, options: "location" },
  { key: "zoomLink",        header: "Zoom link",                           width: 165 },
  { key: "list",            header: "List (must match new clickup lists)", width: 185, options: "list" },
  { key: "programOffering", header: "Program Offering",                    width: 155, options: "programOffering" },
  { key: "subtype",         header: "Offerings Subtype",                   width: 165, options: "subtype" },
  { key: "status",          header: "Status",                              width: 135, options: "status" },
  { key: "flags",           header: "Workflow Flags",                      width: 145, options: "flags" },
  { key: "regLink",         header: "Registration Link",                   width: 175 },
  { key: "yearTerm",        header: "Year & Term",                         width: 115, auto: true }
];
const EXPORT_FIELD_BY_KEY = {};
EXPORT_FIELDS.forEach(f => EXPORT_FIELD_BY_KEY[f.key] = f);

// Fields worth setting per bucket. Task name / dates / year & term are derived
// from the row and the date, so they're not offered as bucket defaults.
const BUCKET_FIELD_KEYS = ["assignees", "includeWeb", "format", "location", "zoomLink",
                           "list", "programOffering", "subtype", "status", "flags", "regLink", "preview"];

/* Option lists, de-duplicated from the reconciled CSV. These are seeds only —
   they're copied into the board on first load and edited in the app after that,
   so a new ClickUp list never needs a code change. */
const DEFAULT_OPTION_SETS = {
  includeWeb: ["Yes", "No"],
  format: ["In-Person", "Virtual", "Hybrid"],
  location: ["i-lab Main Space", "Classroom (68)", "Lobby (77-291)", "External Venue (not i-lab)", "Virtual/Online", "TBD"],
  list: ["Community", "Founder Fundamentals", "Venture Incubation", "Venture Acceleration",
         "Climate + Social Impact", "Membership", "PIC", "Key Dates", "Event Request Queue (Other Events)"],
  programOffering: ["Community", "Founder Fundamentals", "Venture Incubation", "Venture Acceleration",
                    "Climate", "Social Impact", "Membership", "PIC", "Partnerships", "Network Engagement",
                    "Academic Classes", "Other Events"],
  subtype: ["Climate Circle", "Social Impact Fellowship Fund"],
  status: ["Idea", "Planning", "Ready for Marketing"],
  flags: ["Field Data Missing", "Not confirmed", "Date/ Time TBD", "Event needs more info"],
  assignees: []   // filled from ROSTER below
};

/* Roster derived from the Assignees column of the reconciled CSV, so the owner
   initials already on the board can be turned into the email addresses ClickUp
   expects. Note the PG collision: Peter Gladstone and Phillip Green share
   initials, so "PG" is mapped to the one that appears far more often and
   flagged in the roster editor rather than guessed silently. */
const ROSTER = [
  { initials: "AB", email: "alexa_barry@harvard.edu",         name: "Alexa Barry" },
  { initials: "AS", email: "alexandra_stephens@harvard.edu",  name: "Alexandra Stephens" },
  { initials: "BX", email: "becca_xiong@harvard.edu",         name: "Becca Xiong" },
  { initials: "CA", email: "caroline_arzoo@harvard.edu",      name: "Caroline Arzoo" },
  { initials: "CC", email: "cassie_coravos@harvard.edu",      name: "Cassie Coravos" },
  { initials: "JF", email: "joanna_furgiuele@harvard.edu",    name: "Joanna Furgiuele" },
  { initials: "JM", email: "joy_massicotte@harvard.edu",      name: "Joy Massicotte" },
  { initials: "JP", email: "julien_pham@harvard.edu",         name: "Julien Pham" },
  { initials: "LK", email: "lauren_koppelson@harvard.edu",    name: "Lauren Koppelson" },
  { initials: "PG", email: "phillip_green@harvard.edu",       name: "Phillip Green", note: "PG is ambiguous — Peter Gladstone shares these initials" },
  { initials: "PGL", email: "peter_gladstone@harvard.edu",    name: "Peter Gladstone" },
  { initials: "RB", email: "rym_baouendi@harvard.edu",        name: "Rym Baouendi" },
  { initials: "RE", email: "rebekah_emanuel@harvard.edu",     name: "Rebekah Emanuel" },
  { initials: "SS", email: "shuntaro_shirota@harvard.edu",    name: "Shuntaro Shirota" },
  { initials: "TS", email: "tom_samph@harvard.edu",           name: "Tom Samph" },
  { initials: "VL", email: "vivian_liusomers@harvard.edu",    name: "Vivian Liusomers" }
];
DEFAULT_OPTION_SETS.assignees = ROSTER.map(p => p.email);
const ROSTER_BY_INITIALS = {};
ROSTER.forEach(p => { if (!ROSTER_BY_INITIALS[p.initials]) ROSTER_BY_INITIALS[p.initials] = p; });

// "JF + RB" / "TS" / "AB, CC" -> matching emails, in the order written.
function emailsForOwnerString(owner) {
  if (!owner) return "";
  const tokens = owner.split(/[+,/&]| and /i).map(t => t.trim()).filter(Boolean);
  const out = [];
  tokens.forEach(tok => {
    const key = tok.toUpperCase().replace(/[^A-Z]/g, "");
    const hit = ROSTER_BY_INITIALS[key];
    if (hit && !out.includes(hit.email)) out.push(hit.email);
  });
  return out.join(", ");
}

function normalizeOptionSets(saved) {
  const out = {};
  Object.keys(DEFAULT_OPTION_SETS).forEach(k => {
    const fromSaved = saved && Array.isArray(saved[k]) ? saved[k] : null;
    out[k] = fromSaved ? fromSaved.slice() : DEFAULT_OPTION_SETS[k].slice();
  });
  return out;
}
function optionsFor(setName) {
  const sets = STATE.optionSets || DEFAULT_OPTION_SETS;
  return sets[setName] || [];
}

/* ---- Bucket defaults ----
   Pre-seeded from the List / Program Offering / Subtype combinations actually
   used in the reconciled CSV, so the common case is already right on day one. */
const SEED_BUCKET_DEFAULTS = {
  landscape:    { list: "Key Dates", programOffering: "Other Events", status: "Planning", includeWeb: "No" },
  membership:   { list: "Key Dates", programOffering: "Membership", status: "Planning", includeWeb: "No" },
  community:    { list: "Community", programOffering: "Community", status: "Planning", includeWeb: "Yes", format: "In-Person" },
  fundamentals: { list: "Founder Fundamentals", programOffering: "Founder Fundamentals", status: "Planning", includeWeb: "Yes" },
  incubation:   { list: "Venture Incubation", programOffering: "Venture Incubation", status: "Planning", includeWeb: "No" },
  acceleration: { list: "Venture Acceleration", programOffering: "Venture Acceleration", status: "Planning", includeWeb: "No" },
  lifelab:      { list: "Climate + Social Impact", programOffering: "Climate", subtype: "Climate Circle", status: "Planning", includeWeb: "No" },
  partnerships: { list: "Event Request Queue (Other Events)", programOffering: "Partnerships", status: "Planning", includeWeb: "No" },
  pic:          { list: "Key Dates", programOffering: "PIC", status: "Planning", includeWeb: "No" },
  siff:         { list: "Key Dates", programOffering: "Social Impact", subtype: "Social Impact Fellowship Fund", status: "Planning", includeWeb: "No" },
  network:      { list: "Event Request Queue (Other Events)", programOffering: "Network Engagement", status: "Planning", includeWeb: "No" }
};
function seedBucketDefaultsIfEmpty() {
  if (STATE.fieldDefaults && Object.keys(STATE.fieldDefaults).length) return false;
  STATE.fieldDefaults = JSON.parse(JSON.stringify(SEED_BUCKET_DEFAULTS));
  return true;
}
function bucketDefault(groupId, key) {
  const d = STATE.fieldDefaults[groupId];
  return d && d[key] ? d[key] : "";
}
function setBucketDefault(groupId, key, val) {
  if (!STATE.fieldDefaults[groupId]) STATE.fieldDefaults[groupId] = {};
  if (val) STATE.fieldDefaults[groupId][key] = val;
  else delete STATE.fieldDefaults[groupId][key];
}
function rowOverride(taskId, key) {
  const st = STATE.tasks[taskId];
  return st && st.fields && st.fields[key] ? st.fields[key] : "";
}
function setRowOverride(taskId, key, val) {
  const st = STATE.tasks[taskId];
  if (!st) return;
  if (!st.fields) st.fields = {};
  if (val) st.fields[key] = val; else delete st.fields[key];
}
function dateOverride(taskId, yearIdx, key) {
  const det = getCellDetails(taskId, yearIdx);
  return det && det.fields && det.fields[key] ? det.fields[key] : "";
}
function setDateOverride(taskId, yearIdx, key, val) {
  const st = STATE.tasks[taskId];
  if (!st) return;
  if (!st.cellDetails) st.cellDetails = {};
  const det = st.cellDetails[yearIdx] || { start: "", end: "", location: "", comment: "", fields: {} };
  if (!det.fields) det.fields = {};
  if (val) det.fields[key] = val; else delete det.fields[key];
  st.cellDetails[yearIdx] = det;
  pruneCellDetails(taskId, yearIdx);
}
function pruneCellDetails(taskId, yearIdx) {
  const st = STATE.tasks[taskId];
  const det = st && st.cellDetails ? st.cellDetails[yearIdx] : null;
  if (!det) return;
  const hasFields = det.fields && Object.keys(det.fields).length;
  if (!det.start && !det.end && !det.location && !det.comment && !hasFields) delete st.cellDetails[yearIdx];
}

// Which level a value came from — drives the little inheritance dots in the UI.
function fieldSource(taskId, yearIdx, key) {
  if (dateOverride(taskId, yearIdx, key)) return "date";
  if (rowOverride(taskId, key)) return "row";
  const task = TASKS.find(t => t.id === taskId);
  if (task && bucketDefault(task.group, key)) return "bucket";
  return "none";
}

function unsentinel(v) { return v === BLANK_SENTINEL ? "" : v; }

/* The one function that decides what actually lands in the CSV. */
function resolveField(taskId, yearIdx, key) {
  const task = TASKS.find(t => t.id === taskId);
  const st = STATE.tasks[taskId];
  if (!task || !st) return "";
  const det = getCellDetails(taskId, yearIdx);
  const d = dateForYearIdx(yearIdx);

  const cascade = () => {
    const fromDate = dateOverride(taskId, yearIdx, key);
    if (fromDate) return unsentinel(fromDate);
    const fromRow = rowOverride(taskId, key);
    if (fromRow) return unsentinel(fromRow);
    return unsentinel(bucketDefault(task.group, key));
  };

  switch (key) {
    case "taskName":
      return cascade() || task.label;
    case "yearTerm":
      return cascade() || yearTermForYearIdx(yearIdx);
    case "startDate": {
      const explicit = cascade();
      if (explicit) return explicit;
      let h = 10, m = 0;
      if (det && det.start) { const p = parseTimeStr(det.start); if (p) { h = p.h; m = p.m; } }
      return fmtDateTime(d, h, m);
    }
    case "endDate": {
      const explicit = cascade();
      if (explicit) return explicit;
      let sh = 10, sm = 0;
      if (det && det.start) { const p = parseTimeStr(det.start); if (p) { sh = p.h; sm = p.m; } }
      let eh, em;
      if (det && det.end) {
        const p = parseTimeStr(det.end);
        if (p) { eh = p.h; em = p.m; }
      }
      if (eh === undefined) { const def = addOneHourClamped(sh, sm); eh = def.h; em = def.m; }
      return fmtDateTime(d, eh, em);
    }
    case "location": {
      // A location typed into the date popover is the most specific thing there is.
      if (det && det.location) return det.location;
      return cascade();
    }
    case "preview":
      return cascade() || task.label;
    case "description": {
      const explicit = dateOverride(taskId, yearIdx, key) || rowOverride(taskId, key);
      if (explicit) return unsentinel(explicit);
      // Otherwise build it from what's already on the board: the row's notes
      // plus anything specific typed for this date.
      const bits = [st.note, det && det.comment].filter(Boolean);
      return bits.join(" — ") || unsentinel(bucketDefault(task.group, key));
    }
    case "assignees":
      return cascade() || emailsForOwnerString(st.owner);
    default:
      return cascade();
  }
}

function fmtDateTime(d, hour, minute) {
  const h12 = ((hour + 11) % 12) + 1;
  const ampm = hour < 12 ? "AM" : "PM";
  return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()} ${h12}:${pad2(minute)} ${ampm}`;
}
function exportRowKey(taskId, iso) { return taskId + "__" + iso; }

// Build a fresh export row for one task on one date, fully resolved.
function buildExportRow(taskId, yearIdx) {
  const row = { id: "exp-" + Math.random().toString(36).slice(2, 9), taskId, date: isoForYearIdx(yearIdx), yearIdx };
  EXPORT_FIELDS.forEach(f => { row[f.key] = resolveField(taskId, yearIdx, f.key); });
  return row;
}

// Re-resolve rows already in the table after their date's details change.
function syncExportRowsForCell(taskId, yearIdx) {
  const iso = isoForYearIdx(yearIdx);
  let touched = false;
  STATE.exportRows.forEach(r => {
    if (r.taskId === taskId && r.date === iso) {
      EXPORT_FIELDS.forEach(f => { if (!r._edited || !r._edited[f.key]) r[f.key] = resolveField(taskId, yearIdx, f.key); });
      touched = true;
    }
  });
  if (touched) renderExportPanel();
}

function buildExportRows() {
  const v = currentView();
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
    // Only dates inside the view you're looking at — the Fall tab exports Fall.
    for (let yi = v.offset; yi < v.offset + v.days; yi++) {
      if (!st.active[yi]) continue;
      const key = exportRowKey(taskId, isoForYearIdx(yi));
      if (existingKeys.has(key)) continue;
      existingKeys.add(key);
      STATE.exportRows.push(buildExportRow(taskId, yi));
      added++;
    }
  });
  queueSave();
  renderExportPanel();
  setSaveStatus(added
    ? `Added ${added} row${added > 1 ? "s" : ""} from ${v.label}`
    : "Those dates are already in the export", false);
  document.getElementById("exportPanel").scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ---- Sorting & filtering (view-only; never reorders the stored rows) ---- */
let exportSort = { key: null, dir: 1 };
let exportFilters = {};

function exportVisibleRows() {
  let rows = STATE.exportRows.slice();
  Object.keys(exportFilters).forEach(key => {
    const needle = (exportFilters[key] || "").trim().toLowerCase();
    if (!needle) return;
    rows = rows.filter(r => String(r[key] == null ? "" : r[key]).toLowerCase().includes(needle));
  });
  if (exportSort.key) {
    const k = exportSort.key;
    rows.sort((a, b) => {
      let av = a[k] == null ? "" : String(a[k]);
      let bv = b[k] == null ? "" : String(b[k]);
      // Date columns sort chronologically, not alphabetically ("10/1" before "9/1").
      if (k === "startDate" || k === "endDate") {
        const ad = Date.parse(av), bd = Date.parse(bv);
        if (!isNaN(ad) && !isNaN(bd)) return (ad - bd) * exportSort.dir;
      }
      return av.localeCompare(bv, undefined, { numeric: true, sensitivity: "base" }) * exportSort.dir;
    });
  }
  return rows;
}

function toggleExportSort(key) {
  if (exportSort.key === key) {
    if (exportSort.dir === 1) exportSort.dir = -1;
    else exportSort = { key: null, dir: 1 };   // third click clears
  } else {
    exportSort = { key, dir: 1 };
  }
  renderExportPanel();
}
function clearExportFilters() {
  exportFilters = {};
  renderExportPanel();
}

function renderExportHead() {
  const headRow = document.getElementById("exportHeadRow");
  const filterRow = document.getElementById("exportFilterRow");
  headRow.innerHTML = "";
  filterRow.innerHTML = "";

  headRow.appendChild(document.createElement("th"));
  const fth = document.createElement("th");
  const clearBtn = document.createElement("button");
  clearBtn.type = "button";
  clearBtn.className = "export-filter-clear";
  clearBtn.textContent = "⌫";
  clearBtn.title = "Clear all filters";
  clearBtn.addEventListener("click", clearExportFilters);
  fth.appendChild(clearBtn);
  filterRow.appendChild(fth);

  EXPORT_FIELDS.forEach(f => {
    const th = document.createElement("th");
    th.className = "export-th sortable" + (exportSort.key === f.key ? " sorted" : "");
    th.style.minWidth = f.width + "px";
    const caret = exportSort.key === f.key ? (exportSort.dir === 1 ? " ▲" : " ▼") : "";
    th.textContent = f.header + caret;
    th.title = "Click to sort by " + f.header;
    th.addEventListener("click", () => toggleExportSort(f.key));
    headRow.appendChild(th);

    const ftd = document.createElement("th");
    ftd.className = "export-filter-cell";
    if (f.options) {
      // Offer the values actually present in the table, plus the option list.
      const present = Array.from(new Set(STATE.exportRows.map(r => r[f.key]).filter(Boolean)));
      const all = Array.from(new Set(optionsFor(f.options).concat(present)));
      const sel = document.createElement("select");
      sel.className = "export-filter-select";
      const optAll = document.createElement("option");
      optAll.value = ""; optAll.textContent = "All";
      sel.appendChild(optAll);
      all.forEach(v => {
        const o = document.createElement("option");
        o.value = v; o.textContent = v;
        if (exportFilters[f.key] === v) o.selected = true;
        sel.appendChild(o);
      });
      sel.addEventListener("change", () => { exportFilters[f.key] = sel.value; renderExportPanel(); });
      ftd.appendChild(sel);
    } else {
      const inp = document.createElement("input");
      inp.className = "export-filter-input";
      inp.placeholder = "filter…";
      inp.value = exportFilters[f.key] || "";
      inp.addEventListener("input", () => { exportFilters[f.key] = inp.value; scheduleFilterRerender(); });
      ftd.appendChild(inp);
    }
    filterRow.appendChild(ftd);
  });
}

// Debounced so typing in a filter box doesn't rebuild 200 rows per keystroke.
let filterRerenderTimer = null;
function scheduleFilterRerender() {
  clearTimeout(filterRerenderTimer);
  filterRerenderTimer = setTimeout(() => renderExportBody(), 140);
}

function markEdited(r, key) {
  if (!r._edited) r._edited = {};
  r._edited[key] = true;
}

function renderExportBody() {
  const body = document.getElementById("exportTableBody");
  const countEl = document.getElementById("exportCount");
  const rows = exportVisibleRows();
  const total = STATE.exportRows.length;
  countEl.textContent = rows.length === total
    ? total + " row" + (total === 1 ? "" : "s")
    : rows.length + " of " + total + " rows shown";
  const dl = document.getElementById("downloadCsvBtn");
  if (dl) dl.textContent = rows.length === total ? "Download CSV" : `Download CSV (${rows.length} filtered)`;

  body.innerHTML = "";
  rows.forEach(r => {
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

    EXPORT_FIELDS.forEach(f => {
      const td = document.createElement("td");
      if (f.options && !f.multi) {
        const sel = document.createElement("select");
        sel.style.minWidth = Math.min(f.width, 170) + "px";
        const blank = document.createElement("option");
        blank.value = ""; blank.textContent = "—";
        sel.appendChild(blank);
        const present = r[f.key] && !optionsFor(f.options).includes(r[f.key]) ? [r[f.key]] : [];
        optionsFor(f.options).concat(present).forEach(opt => {
          const o = document.createElement("option");
          o.value = opt; o.textContent = opt;
          if (r[f.key] === opt) o.selected = true;
          sel.appendChild(o);
        });
        sel.addEventListener("change", () => { r[f.key] = sel.value; markEdited(r, f.key); queueSave(); });
        td.appendChild(sel);
      } else {
        const inp = document.createElement("input");
        inp.value = r[f.key] || "";
        inp.style.width = f.width + "px";
        if (f.multi) inp.title = "Comma-separated emails";
        inp.addEventListener("change", () => { r[f.key] = inp.value; markEdited(r, f.key); queueSave(); });
        td.appendChild(inp);
      }
      tr.appendChild(td);
    });
    body.appendChild(tr);
  });
}

function renderExportPanel() {
  const panel = document.getElementById("exportPanel");
  if (!STATE.exportRows.length) {
    panel.classList.add("hidden");
    return;
  }
  panel.classList.remove("hidden");
  renderExportHead();
  renderExportBody();
}

function csvEscape(v) {
  const s = String(v == null ? "" : v);
  if (/[",\n]/.test(s)) return '"' + s.replace(/"/g, '""') + '"';
  return s;
}
// Exports exactly what's on screen — filters included — with the CSV's own
// header row, so the file can go straight into ClickUp.
function exportCsvText() {
  const lines = [EXPORT_FIELDS.map(f => csvEscape(f.header)).join(",")];
  exportVisibleRows().forEach(r => {
    lines.push(EXPORT_FIELDS.map(f => csvEscape(r[f.key])).join(","));
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
    a.download = currentView().id + "-clickup-export.csv";
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
  exportFilters = {};
  exportSort = { key: null, dir: 1 };
  queueSave();
  renderExportPanel();
}
// Re-resolve every non-hand-edited cell from the current cascade. Useful after
// changing bucket defaults with rows already built.
function refreshExportFromCascade() {
  let n = 0;
  STATE.exportRows.forEach(r => {
    const yi = yearIdxForIso(r.date);
    if (yi === null) return;
    EXPORT_FIELDS.forEach(f => {
      if (r._edited && r._edited[f.key]) return;
      const next = resolveField(r.taskId, yi, f.key);
      if (next !== r[f.key]) { r[f.key] = next; n++; }
    });
  });
  queueSave();
  renderExportPanel();
  setSaveStatus(n ? `Refreshed ${n} field${n === 1 ? "" : "s"} from bucket/row defaults` : "Nothing to refresh", false);
}

/* ===== Event fields: bucket defaults, row overrides, date overrides =========
   One panel, three tabs. This is where the cascade is actually filled in — the
   export table is downstream of it, not the place you're meant to type. */

let settingsTab = "buckets";   // "buckets" | "options" | "roster"
let settingsGroupId = null;    // which bucket is open on the Buckets tab

function openSettings(tab) {
  if (tab) settingsTab = tab;
  if (!settingsGroupId) settingsGroupId = GROUPS[0].id;
  document.getElementById("settingsPanel").classList.remove("hidden");
  renderSettings();
  document.getElementById("settingsPanel").scrollIntoView({ behavior: "smooth", block: "start" });
}
function closeSettings() {
  document.getElementById("settingsPanel").classList.add("hidden");
}

function fieldEditor(setName, value, onChange, widthPx, placeholder) {
  // Constrained fields get a dropdown; everything else a plain text box.
  if (setName) {
    const wrap = document.createElement("div");
    wrap.className = "field-editor-wrap";
    const sel = document.createElement("select");
    sel.style.minWidth = (widthPx || 170) + "px";
    const blank = document.createElement("option");
    blank.value = "";
    blank.textContent = placeholder ? "— inherit (" + placeholder + ") —" : "— inherit —";
    sel.appendChild(blank);
    const opts = optionsFor(setName).slice();
    if (value && !opts.includes(value) && value !== BLANK_SENTINEL) opts.push(value);
    opts.forEach(o => {
      const el = document.createElement("option");
      el.value = o; el.textContent = o;
      if (value === o) el.selected = true;
      sel.appendChild(el);
    });
    const forceBlank = document.createElement("option");
    forceBlank.value = BLANK_SENTINEL;
    forceBlank.textContent = "(force blank)";
    if (value === BLANK_SENTINEL) forceBlank.selected = true;
    sel.appendChild(forceBlank);
    sel.addEventListener("change", () => onChange(sel.value));
    wrap.appendChild(sel);
    return wrap;
  }
  const inp = document.createElement("input");
  inp.className = "field-editor-input";
  inp.value = value === BLANK_SENTINEL ? "" : (value || "");
  inp.placeholder = placeholder ? "inherits: " + placeholder : "— inherit —";
  inp.style.width = (widthPx || 220) + "px";
  inp.addEventListener("change", () => onChange(inp.value));
  return inp;
}

function renderSettings() {
  const panel = document.getElementById("settingsPanel");
  if (panel.classList.contains("hidden")) return;
  document.querySelectorAll(".settings-tab").forEach(b => {
    b.classList.toggle("active", b.dataset.tab === settingsTab);
  });
  const body = document.getElementById("settingsBody");
  body.innerHTML = "";
  if (settingsTab === "buckets") renderBucketDefaults(body);
  else if (settingsTab === "options") renderOptionSets(body);
  else renderRoster(body);
}

function renderBucketDefaults(body) {
  const intro = document.createElement("p");
  intro.className = "settings-intro";
  intro.innerHTML = "Set the values that are true for <b>most</b> events in a bucket. " +
    "Every row in that bucket inherits them, and any row or any single date can override. " +
    "Rows show <span class='inherit-dot inherit-bucket'></span> bucket, " +
    "<span class='inherit-dot inherit-row'></span> row, " +
    "<span class='inherit-dot inherit-date'></span> this-date-only.";
  body.appendChild(intro);

  const picker = document.createElement("div");
  picker.className = "bucket-picker";
  GROUPS.forEach(g => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "bucket-pick" + (g.id === settingsGroupId ? " active" : "");
    b.style.setProperty("--gcolor", g.color);
    const filled = BUCKET_FIELD_KEYS.filter(k => bucketDefault(g.id, k)).length;
    b.innerHTML = `<span class="bucket-pick-tab" style="background:${g.color}"></span>` +
      `<span class="bucket-pick-name">${g.name}</span>` +
      `<span class="bucket-pick-count">${filled}/${BUCKET_FIELD_KEYS.length}</span>`;
    b.addEventListener("click", () => { settingsGroupId = g.id; renderSettings(); });
    picker.appendChild(b);
  });
  body.appendChild(picker);

  const g = GROUP_BY_ID[settingsGroupId];
  const grid = document.createElement("div");
  grid.className = "settings-grid";
  BUCKET_FIELD_KEYS.forEach(key => {
    const f = EXPORT_FIELD_BY_KEY[key];
    const row = document.createElement("label");
    row.className = "settings-row";
    const lab = document.createElement("span");
    lab.className = "settings-label";
    lab.textContent = f.header;
    row.appendChild(lab);
    row.appendChild(fieldEditor(f.options, bucketDefault(g.id, key), val => {
      setBucketDefault(g.id, key, val);
      queueSave();
      renderSettings();
      renderBoard();
    }, 200));
    grid.appendChild(row);
  });
  body.appendChild(grid);

  const foot = document.createElement("div");
  foot.className = "settings-foot";
  const applyBtn = document.createElement("button");
  applyBtn.type = "button";
  applyBtn.className = "btn btn-accent";
  applyBtn.textContent = "Re-apply defaults to existing export rows";
  applyBtn.title = "Updates every export cell you haven't hand-edited";
  applyBtn.addEventListener("click", refreshExportFromCascade);
  foot.appendChild(applyBtn);
  const note = document.createElement("span");
  note.className = "settings-note";
  note.textContent = "Cells you typed into by hand are left alone.";
  foot.appendChild(note);
  body.appendChild(foot);
}

function renderOptionSets(body) {
  const intro = document.createElement("p");
  intro.className = "settings-intro";
  intro.innerHTML = "These are the dropdown choices. Edit them here when ClickUp's lists change — " +
    "one value per line. Removing a value doesn't erase it from rows that already use it.";
  body.appendChild(intro);

  const sets = [
    ["list", "List (must match new clickup lists)"],
    ["programOffering", "Program Offering"],
    ["subtype", "Offerings Subtype"],
    ["status", "Status"],
    ["format", "Event Format"],
    ["location", "Event Location"],
    ["flags", "Workflow Flags"],
    ["includeWeb", "Include_on_website (clickup)"]
  ];
  const grid = document.createElement("div");
  grid.className = "settings-grid settings-grid-wide";
  sets.forEach(([setName, label]) => {
    const box = document.createElement("div");
    box.className = "option-set";
    const lab = document.createElement("div");
    lab.className = "settings-label";
    lab.textContent = label;
    box.appendChild(lab);
    const ta = document.createElement("textarea");
    ta.className = "option-set-text";
    ta.rows = Math.min(10, Math.max(3, optionsFor(setName).length + 1));
    ta.value = optionsFor(setName).join("\n");
    ta.addEventListener("change", () => {
      const vals = ta.value.split("\n").map(v => v.trim()).filter(Boolean);
      STATE.optionSets[setName] = vals;
      queueSave();
      renderExportPanel();
      renderSettings();
    });
    box.appendChild(ta);
    grid.appendChild(box);
  });
  body.appendChild(grid);
}

function renderRoster(body) {
  const intro = document.createElement("p");
  intro.className = "settings-intro";
  intro.innerHTML = "Owner initials on the board are turned into these email addresses for the " +
    "<b>Assignees</b> column. A row's <i>who</i> box can hold several people — <code>JF + RB</code> " +
    "becomes both emails.";
  body.appendChild(intro);

  const dupes = {};
  ROSTER.forEach(p => { dupes[p.initials] = (dupes[p.initials] || 0) + 1; });

  const table = document.createElement("table");
  table.className = "roster-table";
  table.innerHTML = "<thead><tr><th>Initials</th><th>Name</th><th>Email</th></tr></thead>";
  const tb = document.createElement("tbody");
  ROSTER.forEach(p => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td><code>${p.initials}</code></td><td>${p.name}</td><td>${p.email}</td>`;
    if (p.note) {
      tr.classList.add("roster-warn");
      tr.title = p.note;
      tr.querySelector("td").innerHTML += ' <span class="roster-flag" title="' + p.note + '">!</span>';
    }
    tb.appendChild(tr);
  });
  table.appendChild(tb);
  body.appendChild(table);

  // Anything on the board whose initials we can't resolve — worth surfacing,
  // because it silently produces an empty Assignees cell in the CSV.
  const unresolved = [];
  STATE.tasksList.forEach(t => {
    const st = STATE.tasks[t.id];
    if (!st || !st.owner) return;
    if (!emailsForOwnerString(st.owner)) unresolved.push(`${t.label} (“${st.owner}”)`);
  });
  if (unresolved.length) {
    const warn = document.createElement("div");
    warn.className = "settings-warn";
    warn.innerHTML = "<b>No email match for these owners</b> — their Assignees cell will export blank:<ul>" +
      unresolved.slice(0, 12).map(u => "<li>" + u + "</li>").join("") +
      (unresolved.length > 12 ? `<li>…and ${unresolved.length - 12} more</li>` : "") + "</ul>";
    body.appendChild(warn);
  }
}

/* ---- Per-row field editing, reached from the row's ⚙ button ---- */
let openRowFieldsId = null;
function openRowFields(taskId) {
  openRowFieldsId = openRowFieldsId === taskId ? null : taskId;
  renderBoard();
}
function rowFieldsMarkup(t) {
  const g = GROUP_BY_ID[t.group];
  const wrap = document.createElement("div");
  wrap.className = "row-fields";
  wrap.style.setProperty("--gcolor", g.color);
  const head = document.createElement("div");
  head.className = "row-fields-head";
  head.innerHTML = `<b>${t.label}</b> — event fields. Blank means “inherit from ${g.name}”.`;
  wrap.appendChild(head);
  const grid = document.createElement("div");
  grid.className = "row-fields-grid";
  BUCKET_FIELD_KEYS.concat(["description"]).forEach(key => {
    const f = EXPORT_FIELD_BY_KEY[key];
    const cell = document.createElement("label");
    cell.className = "row-fields-cell";
    const lab = document.createElement("span");
    lab.className = "settings-label";
    const inherited = bucketDefault(t.group, key);
    lab.innerHTML = f.header + (inherited && !rowOverride(t.id, key)
      ? ` <span class="inherit-hint">${inherited}</span>` : "");
    cell.appendChild(lab);
    cell.appendChild(fieldEditor(f.options, rowOverride(t.id, key), val => {
      setRowOverride(t.id, key, val);
      queueSave();
      renderBoard();
    }, 180));
    grid.appendChild(cell);
  });
  wrap.appendChild(grid);
  return wrap;
}

function announceLoadStatus() {
  if (loadFailed) return; // the reload banner already says what's wrong
  // Report the most recent save across the three term records.
  let newest = null;
  SEGMENTS.forEach(seg => {
    const m = SEGMENT_META[seg.id];
    if (m && m.updatedAt && (!newest || m.updatedAt > newest.updatedAt)) newest = m;
  });
  const missing = SEGMENTS.filter(s => (SEGMENT_META[s.id] || {}).missing).map(s => s.label);
  const tail = missing.length ? " · no saves yet for " + missing.join(", ") : "";
  if (newest) {
    const when = new Date(newest.updatedAt).toLocaleString();
    setSaveStatus(`Loaded ${YEAR.label}· last saved${newest.updatedBy ? " by " + newest.updatedBy : ""} on ${when}${tail}`, false);
  } else {
    setSaveStatus("Loaded — nothing saved yet for " + YEAR.label, false);
  }
}

function switchView(idx) {
  if (idx === currentViewIdx) return;
  // Hold the date you were looking at, so switching tabs doesn't lose your place.
  const anchor = firstVisibleYearIdx();
  currentViewIdx = idx;
  saveViewPref();
  closeRollupPanel();
  renderAll();
  const v = currentView();
  const keep = anchor !== null && anchor >= v.offset && anchor < v.offset + v.days;
  scrollToYearIdx(keep ? anchor : v.offset, "auto", "start");
}

function toggleView() { setViewMode(viewMode === "day" ? "week" : "day"); }

async function init() {
  loadViewPref();
  loadColumnWidths();
  ensureEditorName();
  buildLegend();

  setupColumnResizer("nameColResizer", "ilab-name-col-w", COL_BOUNDS.nameW, () => nameColWidth, (v) => { nameColWidth = v; });
  setupColumnResizer("metaPanelResizer", "ilab-meta-panel-w", COL_BOUNDS.metaW, () => metaPanelWidth, (v) => { metaPanelWidth = v; });

  const boardScrollEl = document.getElementById("boardScroll");
  if (boardScrollEl) boardScrollEl.addEventListener("scroll", syncHeaderScroll);

  const tabsWrap = document.getElementById("termTabs");
  VIEWS.forEach((view, idx) => {
    const btn = document.createElement("button");
    btn.className = "term-tab" + (view.id === "year" ? " term-tab-year" : "");
    btn.dataset.term = view.id;
    const days = view.days;
    btn.innerHTML = `<span class="term-tab-label">${view.label}</span>` +
      `<span class="term-tab-meta">${days} days</span>`;
    btn.title = view.label + " · " + view.deadline;
    btn.addEventListener("click", () => switchView(idx));
    tabsWrap.appendChild(btn);
  });

  await loadYear();
  if (seedBucketDefaultsIfEmpty() && !loadFailed) queueSave();
  renderAll();
  scrollToToday();

  document.getElementById("expandAllBtn").addEventListener("click", () => expandAll(true));
  document.getElementById("collapseAllBtn").addEventListener("click", () => expandAll(false));
  document.getElementById("copyBtn").addEventListener("click", copyPlanAsText);
  document.getElementById("exportBtn").addEventListener("click", buildExportRows);
  document.getElementById("downloadCsvBtn").addEventListener("click", downloadExportCsv);
  document.getElementById("copyCsvBtn").addEventListener("click", copyExportCsv);
  document.getElementById("clearExportBtn").addEventListener("click", clearExportRows);
  document.getElementById("floatingSaveBtn").addEventListener("click", forceSaveNow);
  document.getElementById("daySearchBtn").addEventListener("click", searchDay);
  ["daySearchInput", "daySearchEndInput"].forEach(id => {
    document.getElementById(id).addEventListener("keydown", (e) => {
      if (e.key === "Enter") searchDay();
    });
  });
  document.getElementById("daySearchTodayBtn").addEventListener("click", () => {
    const iso = isoForDate(new Date());
    document.getElementById("daySearchInput").value = iso;
    document.getElementById("daySearchEndInput").value = iso;
    searchDay();
  });
  document.getElementById("daySearchWeekBtn").addEventListener("click", () => {
    const now = new Date();
    const sunday = addDays(now, -now.getDay());
    const saturday = addDays(sunday, 6);
    document.getElementById("daySearchInput").value = isoForDate(sunday);
    document.getElementById("daySearchEndInput").value = isoForDate(saturday);
    searchDay();
  });
  document.getElementById("daySearchNext7Btn").addEventListener("click", () => {
    const now = new Date();
    document.getElementById("daySearchInput").value = isoForDate(now);
    document.getElementById("daySearchEndInput").value = isoForDate(addDays(now, 6));
    searchDay();
  });
  document.getElementById("closeDaySearchBtn").addEventListener("click", closeDaySearch);
  document.getElementById("todayBtn").addEventListener("click", scrollToToday);
  document.getElementById("settingsBtn").addEventListener("click", () => openSettings());
  document.getElementById("closeSettingsBtn").addEventListener("click", closeSettings);
  document.querySelectorAll(".settings-tab").forEach(btn => {
    btn.addEventListener("click", () => { settingsTab = btn.dataset.tab; renderSettings(); });
  });
  const closeRollupBtn = document.getElementById("closeRollupBtn");
  if (closeRollupBtn) closeRollupBtn.addEventListener("click", closeRollupPanel);
  document.getElementById("evSave").addEventListener("click", saveEventEditor);
  document.getElementById("evCancel").addEventListener("click", closeEventEditor);
  document.getElementById("eventEditorClose").addEventListener("click", closeEventEditor);
  document.getElementById("evRemove").addEventListener("click", removeEventDate);
  document.getElementById("eventEditorBackdrop").addEventListener("click", closeEventEditor);
  document.getElementById("findBtn").addEventListener("click", toggleDaySearchBar);
  document.querySelectorAll(".rail-zoom-btn").forEach(btn => {
    btn.addEventListener("click", () => setViewMode(btn.dataset.mode));
  });
  buildMonthJump();
  boardScrollEl.addEventListener("scroll", updateStickyMonth);
  setFloatingSave("saved");
  announceLoadStatus();

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => syncRowHeights());
  }
  window.addEventListener("resize", () => syncRowHeights());
}

init();
