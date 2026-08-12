/* สร้างเอกสารพจนานุกรมข้อมูลในวอลต์ จากฐานข้อมูลจริง
   อ่านโครงสร้างจาก catalog ของ PostgreSQL แล้วผนวกคำอธิบายที่เขียนไว้ในไฟล์นี้
   Run: npm run db:docs   (ต้องรัน npm run db:load ก่อน)                               */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const DB = process.env.PGDATABASE || "aise2570";
const OUT = path.join(root, "Labor_Growth_Report_Vault/09_Database_Schema");

/* ── กลุ่มตารางตามไฟล์ Excel ที่ส่งออก ── */
const GROUPS = [
  { file: "01_programme", title: "หลักสูตรและอาจารย์",
    intro: "ข้อมูลระดับหลักสูตรและคณาจารย์ผู้รับผิดชอบ กลุ่มนี้ไม่ขึ้นกับกลุ่มอื่นเลย จึงนำเข้าได้ก่อนเสมอ",
    tables: ["programme", "faculty_member", "faculty_degree", "reference_doc"] },
  { file: "02_curriculum", title: "โครงสร้างและรายวิชา",
    intro: "หมวดวิชา แขนงวิชา รายวิชา ลำดับก่อน–หลัง และแผนการเรียน ขึ้นกับกลุ่ม 01 เท่านั้น",
    tables: ["course_group", "track", "course", "course_prereq", "study_plan", "study_plan_course"] },
  { file: "03_outcomes", title: "ผลลัพธ์การเรียนรู้",
    intro: "PLO YLO Sub-YLO และ CLO รายวิชา พร้อมการเชื่อมโยงระหว่างกัน",
    tables: ["plo", "ylo", "sub_ylo", "clo", "clo_plo", "clo_sub_ylo", "course_plo"] },
  { file: "04_skills_ksa", title: "ทักษะ ชุดทักษะ และ KSA",
    intro: "ชั้นทักษะจากหลักฐานตลาดแรงงาน (HS/SS/EF) ชั้นที่ประเมินได้ (K/S/A) และการเชื่อมลงรายวิชา",
    tables: ["skill_group", "skill_set", "skill", "skill_set_skill", "skill_track",
             "ksa_item", "ksa_can_do", "ksa_skill", "ksa_plo",
             "clo_ksa", "clo_skill_set", "course_ksa", "course_skill_set"] },
  { file: "05_obe_sources", title: "ที่มาของหลักสูตร",
    intro: "ผู้มีส่วนได้ส่วนเสีย ความต้องการ และคุณลักษณะบัณฑิต — ต้นทางของกระบวนการ OBE",
    tables: ["stakeholder", "need", "stakeholder_need", "need_skill_set",
             "graduate_attribute", "ga_plo"] },
  { file: "06_careers", title: "อาชีพและตลาดแรงงาน",
    intro: "อาชีพเป้าหมายและหลักฐานประกาศงานจริง กลุ่มนี้แยกออกได้ทั้งก้อนถ้าไม่ต้องการข้อมูลตลาด",
    tables: ["career", "career_subgroup", "career_course",
             "job_posting", "job_career_match", "job_skill"] },
  { file: "07_pedagogy", title: "การสอนและการประเมิน",
    intro: "กลยุทธ์การสอน วิธีประเมินราย PLO และกลยุทธ์รายข้อ KSA พร้อมรายวิชาแกน",
    tables: ["teaching_strategy", "strategy_plo", "plo_assessment",
             "ksa_pedagogy", "ksa_anchor_course"] },
  { file: "08_checks", title: "มุมมองตรวจความสอดคล้อง",
    intro: "มุมมองที่ต้องคืนค่าว่างเสมอ ถ้ามีแถวแปลว่าข้อมูลหลักสูตรยังไม่สอดคล้อง",
    tables: ["vw_plo_coverage", "vw_skill_ksa_gap", "vw_skill_set_without_attitude", "vw_ksa_orphan"] }
];

/* ── คำอธิบายตาราง ── */
const TBL = {
  programme: "หลักสูตร — มีแถวเดียว เก็บชื่อไทย/อังกฤษ ชื่อปริญญา และหน่วยกิตรวม",
  faculty_member: "อาจารย์ผู้รับผิดชอบหลักสูตรและอาจารย์ประจำหลักสูตร",
  faculty_degree: "คุณวุฒิของอาจารย์แยกตามระดับ เอก/โท/ตรี",
  reference_doc: "เอกสารอ้างอิงที่ใช้ออกแบบหลักสูตร แยกตามประเภท",
  course_group: "หมวดและกลุ่มวิชาตามโครงสร้างหลักสูตร",
  track: "แขนงวิชา 3 แขนงที่ผู้เรียนเลือก",
  course: "รายวิชาทั้งหมดในหลักสูตร",
  course_prereq: "ความสัมพันธ์ก่อน–หลังระหว่างรายวิชา",
  study_plan: "แผนการเรียน แผน ก ปกติ และแผน ข บูรณาการกับการทำงาน",
  study_plan_course: "รายวิชาที่แต่ละแผนเรียนในภาคใด",
  plo: "ผลลัพธ์การเรียนรู้ระดับหลักสูตร 7 ข้อ",
  ylo: "ผลลัพธ์การเรียนรู้รายชั้นปี 4 ระดับ",
  sub_ylo: "ผลลัพธ์ย่อยรายชั้นปี",
  clo: "ผลลัพธ์การเรียนรู้รายวิชา",
  clo_plo: "CLO ป้อนเข้า PLO ใด ที่ระดับพัฒนาการใด",
  clo_sub_ylo: "CLO ป้อนเข้า Sub-YLO ใด",
  course_plo: "รายวิชารับผิดชอบ PLO ใด ในฐานะเจ้าภาพหลักหรือสนับสนุน",
  skill_group: "กลุ่มชุดทักษะ G1–G7",
  skill_set: "ชุดทักษะ EN-AISK01–09 ที่ใช้ออก Skill Transcript",
  skill: "ทักษะจากหลักฐานตลาดแรงงาน 36 รายการ — Hard 20 · Soft 10 · ฐานวิศวกรรม 6",
  skill_set_skill: "ทักษะอยู่ในชุดทักษะใดบ้าง (หนึ่งทักษะอยู่ได้หลายชุด)",
  skill_track: "ทักษะเป็นทักษะหลักหรือสนับสนุนของแขนงใด",
  ksa_item: "หน่วยที่ประเมินได้จริง K1–K26 · S1–S20 · A1–A8",
  ksa_can_do: "รายการ “ทำอะไรได้บ้าง” ของทักษะแต่ละข้อ",
  ksa_skill: "การจับคู่ KSA กับทักษะ HS/SS/EF ที่รองรับ",
  ksa_plo: "KSA แต่ละข้อรับใช้ PLO ใด",
  clo_ksa: "CLO อ้างรหัส KSA ใด — ชั้นที่ใช้ให้คะแนนจริง",
  clo_skill_set: "CLO ป้อนเข้าชุดทักษะใด และชุดใดเป็นเจ้าภาพหลัก",
  course_ksa: "KSA ระดับรายวิชา รวมวิชาชีพเลือกที่อนุมานผ่านชุดทักษะ",
  course_skill_set: "ชุดทักษะที่รายวิชารับผิดชอบ",
  stakeholder: "ผู้มีส่วนได้ส่วนเสีย SH1–SH8 พร้อมขนาดกลุ่มตัวอย่าง",
  need: "ความต้องการ N1–N18 จากผลสำรวจและแนวโน้ม",
  stakeholder_need: "ผู้มีส่วนได้ส่วนเสียกลุ่มใดต้องการอะไร",
  need_skill_set: "ความต้องการแต่ละข้อตอบด้วยชุดทักษะใด",
  graduate_attribute: "คุณลักษณะบัณฑิต GA1–GA5 เทียบ Washington Accord และ ABET",
  ga_plo: "คุณลักษณะบัณฑิตเชื่อมกับ PLO ใด",
  career: "อาชีพเป้าหมาย C01–C26",
  career_subgroup: "กลุ่มย่อยของอาชีพ",
  career_course: "รายวิชาที่นำไปสู่อาชีพนั้น",
  job_posting: "ประกาศงานจริงที่เก็บมาเป็นหลักฐานตลาดแรงงาน",
  job_career_match: "ผลจำแนกประกาศงานเข้ากลุ่มอาชีพ",
  job_skill: "ทักษะที่พบในประกาศงาน (ป้ายดิบ ยังไม่ normalise)",
  teaching_strategy: "กลยุทธ์การจัดการเรียนการสอน 5 รูปแบบ",
  strategy_plo: "กลยุทธ์แต่ละรูปแบบพา PLO ไปถึงระดับใด",
  plo_assessment: "วิธีประเมิน หลักฐาน จุดประเมิน และผู้ประเมินราย PLO",
  ksa_pedagogy: "กลยุทธ์การสอนและวิธีประเมินรายข้อ KSA",
  ksa_anchor_course: "รายวิชาแกนของแต่ละ KSA สูงสุด 2 รายวิชา",
  vw_plo_coverage: "ความครอบคลุม PLO แยกวิชาบังคับออกจากคลังวิชาชีพเลือก",
  vw_skill_ksa_gap: "ทักษะที่ยังไม่มี K หรือ S รองรับ",
  vw_skill_set_without_attitude: "ชุดทักษะที่ไม่มีมิติทัศนคติเลย",
  vw_ksa_orphan: "KSA ที่ไม่มีรายวิชาบังคับใดอ้างถึง"
};

/* ── หมายเหตุสำคัญเฉพาะตาราง ── */
const NOTE = {
  course_group: "`is_elective_pool` แยกคลังวิชาเลือกออกจากวิชาที่เรียนจริง คลังมี 57 รายวิชาแต่ผู้เรียนเลือก 5 การนับรวมจะทำให้ตัวเลขเฟ้อ",
  study_plan_course: "แผน ก และ ข ใช้รายวิชาต่างกัน เช่น EN-134-403 กับ EN-134-404 จึงต้องแยกตารางแทนการเก็บภาคเรียนไว้ใน `course`",
  clo: "`UNIQUE (course_code, no)` จับได้ว่ามีรหัสวิชา 3 ตัวถูกใช้กับสองรายวิชาที่ต่างกันในข้อมูลต้นทาง",
  course_ksa: "`source` ต้องเป็น `derived` สำหรับวิชาชีพเลือก 54 รายวิชาที่อนุมานผ่านชุดทักษะ ห้ามอ่านเป็นรหัสที่เอกสารระบุ",
  ksa_pedagogy: "`source` เป็น `authored` ทุกแถว — เป็นข้อเสนอที่ยังไม่ผ่านการรับรองจากคณะกรรมการหลักสูตร",
  ksa_anchor_course: "`source` เป็น `derived` — คำนวณจาก CLO โดยตัดวิชาโครงงานและสหกิจออก",
  career_subgroup: "รหัสรูปแบบ `C01-S01` หน้าตาเหมือนรหัสทักษะ `S1` ระวังตอนเขียน regex",
  skill_set_skill: "ทักษะหนึ่งตัวอยู่ได้หลายชุด จึงเป็นตารางเชื่อม ไม่ใช่คีย์นอกเดี่ยวบน `skill`"
};

/* ── คำอธิบายคอลัมน์เฉพาะที่ไม่ชัดในตัวเอง ── */
const COL = {
  "course.credit_text": "รูปเดิม เช่น 3(2-2-5) เก็บไว้แสดงผล",
  "course.credits": "จำนวนหน่วยกิตแยกเป็นตัวเลขไว้คำนวณ",
  "course.pending_semester": "ยังไม่ยืนยันภาคการศึกษา",
  "course_group.pick_count": "ถ้าเป็นคลังให้เลือก ต้องเลือกกี่รายวิชา",
  "clo_plo.level": "I แนะนำ · R เสริมย้ำ · M ประเมินปลายทาง",
  "course_plo.role": "host เจ้าภาพหลัก · support สนับสนุน",
  "skill_track.role": "core ทักษะหลัก (●) · support ทักษะสนับสนุน (○)",
  "course_prereq.kind": "hard บังคับก่อน · weak แนะนำก่อน · coreq เรียนคู่",
  "ksa_item.dimension": "K ความรู้ · S ทักษะ · A ทัศนคติ",
  "ksa_item.evidence": "หลักฐานที่ยอมรับได้ ใช้กับมิติทัศนคติ ห้ามให้คะแนนจากความประทับใจ",
  "ksa_item.target_depth": "L1 เข้าใจ · L2 ประยุกต์ · L3 บูรณาการ · L4 นำไปใช้และประเมิน",
  "skill.family": "HS ทักษะเทคนิค · SS ทักษะพฤติกรรม · EF ฐานวิศวกรรม",
  "skill.is_core": "อยู่ในแกนบังคับหรือเป็นส่วนขยาย",
  "clo_ksa.source": "stated เอกสารระบุตรง · derived คำนวณ · authored ข้อเสนอ",
  "course_ksa.source": "stated เอกสารระบุตรง · derived อนุมานผ่านชุดทักษะ",
  "ksa_pedagogy.is_tailored": "true = ออกแบบเฉพาะรหัสนี้ · false = ใช้รูปแบบตามมิติ",
  "job_skill.skill_label": "ป้ายดิบจากประกาศงาน ยังไม่จับคู่กับรหัสทักษะของหลักสูตร"
};

const psql = a => execFileSync("psql", ["-v", "ON_ERROR_STOP=1", "-d", DB, ...a],
  { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });

const meta = JSON.parse(psql(["-tAc", `
  SELECT coalesce(json_agg(row_to_json(t) ORDER BY t.tbl), '[]'::json)::text FROM (
    SELECT c.relname AS tbl, c.relkind AS kind,
      coalesce((SELECT n_live_tup FROM pg_stat_user_tables s WHERE s.relname=c.relname), 0) AS rows,
      (SELECT json_agg(json_build_object('col', a.attname, 'type', format_type(a.atttypid, a.atttypmod),
              'notnull', a.attnotnull) ORDER BY a.attnum)
       FROM pg_attribute a WHERE a.attrelid=c.oid AND a.attnum>0 AND NOT a.attisdropped) AS cols,
      (SELECT json_agg(DISTINCT jsonb_build_object('col', ka.attname, 'ref', rc.relname))
       FROM pg_constraint con JOIN pg_class rc ON rc.oid=con.confrelid
       JOIN pg_attribute ka ON ka.attrelid=con.conrelid AND ka.attnum=ANY(con.conkey)
       WHERE con.conrelid=c.oid AND con.contype='f') AS fks
    FROM pg_class c JOIN pg_namespace n ON n.oid=c.relnamespace
    WHERE n.nspname='public' AND c.relkind IN ('r','v')
  ) t`]));

const by = Object.fromEntries(meta.map(t => [t.tbl, t]));
const missingDesc = meta.filter(t => !TBL[t.tbl]).map(t => t.tbl);
if (missingDesc.length) console.log(`  !! ยังไม่มีคำอธิบาย: ${missingDesc.join(", ")}`);

fs.mkdirSync(OUT, { recursive: true });

function tableDoc(t) {
  const x = by[t];
  if (!x) return null;
  const fk = Object.fromEntries((x.fks || []).map(f => [f.col, f.ref]));
  const rows = (x.cols || []).map(c => {
    const ref = fk[c.col] ? ` → [[#\`${fk[c.col]}\`|\`${fk[c.col]}\`]]` : "";
    return `| \`${c.col}\` | ${c.type} | ${c.notnull ? "✓" : ""} | ${COL[`${t}.${c.col}`] || ""}${ref} |`;
  }).join("\n");
  return `### \`${t}\`

${TBL[t] || ""}

**${x.rows} แถว**${NOTE[t] ? `\n\n> [!important] ${NOTE[t]}` : ""}

| คอลัมน์ | ชนิด | บังคับ | ความหมาย |
|---|---|:--:|---|
${rows}
`;
}

let files = 0;
for (const g of GROUPS) {
  const body = g.tables.map(tableDoc).filter(Boolean).join("\n");
  if (!body) continue;
  const total = g.tables.reduce((s, t) => s + (by[t]?.rows || 0), 0);
  fs.writeFileSync(path.join(OUT, `${g.file}.md`),
`# ${g.title}

> ${g.intro}
>
> **${g.tables.length} ตาราง · ${total} แถว** — ส่งออกเป็น \`${g.file}.xlsx\` หนึ่งตารางต่อหนึ่งชีต
>
> สร้างอัตโนมัติจากฐานข้อมูลจริงด้วย \`npm run db:docs\` · ห้ามแก้ด้วยมือ

${body}
---

[[00_Database_Home|← สารบัญฐานข้อมูล]] | [[../05_TQF2_Academic_Drafts/21_Curriculum_Database_Design|แบบฐานข้อมูลและความสัมพันธ์]]
`, "utf8");
  files++;
}

/* สารบัญ */
const totalRows = meta.filter(t => t.kind === "r").reduce((s, t) => s + t.rows, 0);
fs.writeFileSync(path.join(OUT, "00_Database_Home.md"),
`# ฐานข้อมูลหลักสูตร — พจนานุกรมข้อมูล

> รายชื่อตารางทั้งหมดพร้อมคำอธิบายและโครงสร้างคอลัมน์ สร้างจากฐานข้อมูลจริง
>
> **${meta.filter(t => t.kind === "r").length} ตาราง · ${meta.filter(t => t.kind === "v").length} มุมมอง · ${totalRows} แถว**

## คำสั่งที่เกี่ยวข้อง

| คำสั่ง | ทำอะไร |
|---|---|
| \`npm run build:db\` | สร้าง \`data/seed.sql\` จากข้อมูลในวอลต์ |
| \`npm run db:load\` | สร้างฐานข้อมูลใหม่จาก \`schema.sql\` + \`seed.sql\` และตรวจความสอดคล้อง |
| \`npm run db:export\` | ส่งออกเป็น Excel 8 ไฟล์ · หนึ่งตารางต่อหนึ่งชีต |
| \`npm run db:docs\` | สร้างเอกสารในโฟลเดอร์นี้ใหม่จากฐานข้อมูล |

> [!warning] ฐานข้อมูลเป็นผลลัพธ์ ไม่ใช่ต้นทาง
> ห้ามแก้ข้อมูลในฐานข้อมูลโดยตรง ให้แก้ที่วอลต์แล้วสร้างใหม่ ไม่งั้นเอกสารกับฐานข้อมูลจะหลุดจากกัน

## กลุ่มตาราง

| ไฟล์ | กลุ่ม | ตาราง | แถว |
|---|---|--:|--:|
${GROUPS.map(g => {
  const n = g.tables.filter(t => by[t]).length;
  const r = g.tables.reduce((s, t) => s + (by[t]?.rows || 0), 0);
  return `| [[${g.file}]] | ${g.title} | ${n} | ${r} |`;
}).join("\n")}

## ตารางทั้งหมดเรียงตามชื่อ

| ตาราง | คำอธิบาย | แถว |
|---|---|--:|
${meta.filter(t => t.kind === "r").map(t => `| \`${t.tbl}\` | ${TBL[t.tbl] || ""} | ${t.rows} |`).join("\n")}

## มุมมองตรวจความสอดคล้อง

| มุมมอง | ตรวจอะไร | ค่าที่ถูกต้อง |
|---|---|---|
${meta.filter(t => t.kind === "v").map(t =>
  `| \`${t.tbl}\` | ${TBL[t.tbl] || ""} | ${t.tbl === "vw_plo_coverage" ? "ทุก PLO ต้องได้ M จากวิชาบังคับ" : "ต้องว่าง"} |`).join("\n")}

---

[[../05_TQF2_Academic_Drafts/21_Curriculum_Database_Design|แบบฐานข้อมูลและความสัมพันธ์]] | [[../00_Home|หน้าหลักวอลต์]]
`, "utf8");

console.log(`09_Database_Schema: ${files + 1} ไฟล์ · ${meta.length} ตาราง/มุมมอง`);
