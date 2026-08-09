// จัดอันดับความเข้มข้น/ความจำเป็นของรายวิชาบังคับ (พื้นฐานวิศวกรรม · แกน AI · วิชาชีพบังคับ)
// จากหลักฐานในระบบ: HARD/SOFT skills + Engineering Foundations, Skill Sets (AISK), CLO→PLO, อาชีพ C01–C26,
// ปริมาณงานจริงจาก JobsDB และความเป็นวิชาก่อน (prerequisite centrality)
// รัน: node scripts/rank-course-intensity.mjs
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const SRC = resolve(import.meta.dirname, "../src");
const { COURSES, CAREERS } = await import(`file:///${SRC}/data.js`);
const { HARD_SKILLS, SOFT_SKILLS, ENGINEERING_FOUNDATIONS, SKILL_SETS } = await import(`file:///${SRC}/obeData.js`);
const { CLO_COURSES } = await import(`file:///${SRC}/cloData.js`);
const jobs = JSON.parse(readFileSync(resolve(SRC, "jobsIndex.json"), "utf8"));

const crOf = c => Number(String(c.cr).split("(")[0]) || 0;
const byCode = Object.fromEntries(COURSES.map(c => [c.c, c]));

/* ---------- 1. น้ำหนักตลาดงานรายอาชีพ (classifiedJobs จาก JobsDB) ---------- */
const careerJobs = {};
for (const c of jobs.careers) {
  const n = (c.subcategories || []).reduce((s, x) => s + (x.classifiedJobs || x.classifiedCount || 0), 0);
  careerJobs[c.id] = n;
}
const maxJobs = Math.max(...Object.values(careerJobs));
const medianJobs = (() => {
  const v = Object.values(careerJobs).sort((a, b) => a - b);
  return v[Math.floor(v.length / 2)];
})();
// อาชีพ C18+ ไม่มีข้อมูล JobsDB → ใช้ค่ามัธยฐานเพื่อไม่ให้ถูกตัดทิ้งโดยปริยาย
const jobWeight = id => (careerJobs[id] ?? medianJobs) / maxJobs;

/* ---------- 2. ดัชนีทักษะ → รายวิชา ---------- */
const ALL_SKILLS = [
  ...HARD_SKILLS.map(s => ({ ...s, kind: "H", w: 1.0 })),
  ...SOFT_SKILLS.map(s => ({ ...s, kind: "S", w: 0.6 })),
  ...ENGINEERING_FOUNDATIONS.map(s => ({ ...s, kind: "EF", w: 0.8 }))
];
const skillsOf = code => ALL_SKILLS.filter(s => (s.courses || []).includes(code));
// คะแนนทักษะ: อันดับสูง (rank น้อย) และ core = น้ำหนักมาก
const skillPts = s => {
  const rankPart = s.rank ? Math.max(1, 21 - s.rank) : 12;
  return rankPart * (s.core ? 1.25 : 0.8) * s.w;
};

/* ---------- 3. ชุดทักษะ AISK ที่รายวิชาป้อนเข้า (จาก CLO) ---------- */
const cloOf = code => CLO_COURSES.find(x => x.c === code);
const setsOf = code => [...new Set((cloOf(code)?.sets || []).map(([sid]) => sid))];
const feeders = {};                      // AISK → รายวิชาที่ป้อนเข้า (เฉพาะวิชาบังคับ)
for (const c of COURSES) {
  if (!c.sem || c.g === "ge" || c.g === "elec") continue;
  for (const sid of setsOf(c.c)) (feeders[sid] ||= []).push(c.c);
}

/* ---------- 4. ความลึกของ PLO จาก CLO (M=3 R=2 I=1) ---------- */
const LV = { I: 1, R: 2, M: 3 };
const ploDepth = code => {
  const clo = cloOf(code);
  if (!clo) return { pts: 0, plos: [], top: "" };
  const best = {};
  for (const c of clo.clos || [])
    for (const [p, lv] of c.plo || []) best[p] = Math.max(best[p] || 0, LV[lv] || 0);
  const plos = Object.keys(best).map(Number).sort((a, b) => a - b);
  return { pts: Object.values(best).reduce((a, b) => a + b, 0), plos, top: Object.entries(best).map(([p, v]) => `PLO${p}${"·IRM"[v]}`).join(" ") };
};

/* ---------- 5. ความเป็นวิชาก่อน (นับลูกหลานทั้งสายในวิชาบังคับ) ---------- */
const kids = {};
for (const c of COURSES) {
  for (const h of c.h || []) (kids[h] ||= []).push([c.c, 2]);
  for (const w of c.w || []) (kids[w] ||= []).push([c.c, 1]);
}
const descendants = code => {
  const seen = new Map(); const st = [[code, 1]];
  while (st.length) {
    const [cur, depth] = st.pop();
    for (const [k, wt] of kids[cur] || []) {
      const val = wt / depth;
      if (!seen.has(k) || seen.get(k) < val) { seen.set(k, val); st.push([k, depth + 1]); }
    }
  }
  return [...seen.values()].reduce((a, b) => a + b, 0);
};

/* ---------- 6. รวมคะแนน ---------- */
const GROUPS = { eng: "2.1 พื้นฐานและปฏิบัติการทางวิศวกรรม", ai: "2.2 แกน AI และระบบอัจฉริยะ", track: "2.3 วิชาชีพบังคับ (Core Track)", proj: "2.5 โครงงาน", field: "2.6 ประสบการณ์ภาคสนาม" };
const rows = COURSES
  .filter(c => c.sem && GROUPS[c.g])
  .map(c => {
    const sk = skillsOf(c.c);
    const skillRaw = sk.reduce((a, s) => a + skillPts(s), 0);
    const car = CAREERS.filter(x => (x.courses || []).includes(c.c));
    const carRaw = car.reduce((a, x) => a + 1 + 2 * jobWeight(x.id), 0);
    const pd = ploDepth(c.c);
    const sets = setsOf(c.c);
    const soleSets = sets.filter(s => (feeders[s] || []).length === 1);
    const desc = descendants(c.c);
    return {
      code: c.c, name: c.t, short: c.s, g: c.g, sem: c.sem, cr: crOf(c),
      skills: sk.map(s => s.id), skillRaw,
      careers: car.map(x => x.id), carRaw,
      ploTop: pd.top, ploRaw: pd.pts, nPlo: pd.plos.length,
      sets, soleSets, desc
    };
  });

const norm = (key) => { const m = Math.max(...rows.map(r => r[key])) || 1; return r => (r[key] / m) * 100; };
const nSkill = norm("skillRaw"), nCar = norm("carRaw"), nPlo = norm("ploRaw"), nDesc = norm("desc");
for (const r of rows) {
  r.sSkill = nSkill(r); r.sCar = nCar(r); r.sPlo = nPlo(r); r.sDesc = nDesc(r);
  r.sSole = Math.min(100, r.soleSets.length * 50);
  r.score = 0.34 * r.sSkill + 0.24 * r.sCar + 0.18 * r.sPlo + 0.14 * r.sDesc + 0.10 * r.sSole;
}

/* ---------- 7. ความซ้ำซ้อนระหว่างวิชา (สำหรับข้อเสนอควบรวม) ---------- */
const sig = r => new Set([...r.skills.map(x => "K" + x), ...r.sets.map(x => "T" + x), ...r.careers.map(x => "C" + x)]);
const jac = (a, b) => { const A = sig(a), B = sig(b); const i = [...A].filter(x => B.has(x)).length; const u = new Set([...A, ...B]).size; return u ? i / u : 0; };
const pairs = [];
for (let i = 0; i < rows.length; i++) for (let j = i + 1; j < rows.length; j++) {
  const v = jac(rows[i], rows[j]);
  if (v >= 0.34) pairs.push({ a: rows[i], b: rows[j], v });
}
pairs.sort((x, y) => y.v - x.v);

/* ---------- 8. รายงาน ---------- */
const f = n => n.toFixed(1).padStart(5);
const out = [];
out.push(`JobsDB: อาชีพที่มีงานมากสุด ${maxJobs} · มัธยฐาน ${medianJobs}`);
for (const g of ["eng", "ai", "track", "proj", "field"]) {
  const list = rows.filter(r => r.g === g).sort((a, b) => b.score - a.score);
  if (!list.length) continue;
  out.push(`\n${"=".repeat(110)}\n${GROUPS[g]}  (${list.length} วิชา · ${list.reduce((a, r) => a + r.cr, 0)} นก.)\n${"=".repeat(110)}`);
  out.push("อันดับ รหัส         นก ภาค  รวม | ทักษะ  อาชีพ  PLO  ต่อยอด สายเดียว | ทักษะที่รองรับ / อาชีพ");
  list.forEach((r, i) => {
    out.push(`${String(i + 1).padStart(3)}  ${r.code} ${String(r.cr).padStart(2)}  ${String(r.sem).padStart(2)} ${f(r.score)} |${f(r.sSkill)}${f(r.sCar)}${f(r.sPlo)}${f(r.sDesc)}${f(r.sSole)} | ${r.short}`);
    out.push(`     ${r.name}`);
    out.push(`     skills: ${r.skills.join(",") || "—"} | AISK: ${r.sets.join(",") || "—"}${r.soleSets.length ? ` (ป้อนเดี่ยว: ${r.soleSets.join(",")})` : ""} | careers: ${r.careers.join(",") || "—"} | ${r.ploTop}`);
  });
}
out.push(`\n${"=".repeat(110)}\nคู่วิชาที่ทับซ้อนสูง (Jaccard ของ ทักษะ+AISK+อาชีพ ≥ 0.34)\n${"=".repeat(110)}`);
for (const p of pairs.slice(0, 20))
  out.push(`${p.v.toFixed(2)}  ${p.a.code} ${p.a.short} (${p.a.cr} นก. ภาค ${p.a.sem})  ↔  ${p.b.code} ${p.b.short} (${p.b.cr} นก. ภาค ${p.b.sem})`);

out.push(`\n${"=".repeat(110)}\nชุดทักษะ AISK: จำนวนวิชาบังคับที่ป้อนเข้า\n${"=".repeat(110)}`);
for (const s of SKILL_SETS)
  out.push(`${s.id} ${(feeders[s.id] || []).length.toString().padStart(2)} วิชา : ${(feeders[s.id] || []).join(", ") || "— ไม่มีวิชาบังคับป้อนเข้า —"}`);

console.log(out.join("\n"));
