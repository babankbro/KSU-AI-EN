/* สร้างดัชนีสายที่มาของข้อมูล: ตารางในฐานข้อมูล -> ไฟล์ข้อมูลของเว็บ -> เอกสารในวอลต์
   ตรวจว่าไฟล์ปลายทางมีอยู่จริงทุกรายการ ถ้าไม่มีจะแจ้งเตือน
   Run: npm run db:lineage                                                              */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const VAULT = "Labor_Growth_Report_Vault";
const DB = process.env.PGDATABASE || "aise2570";
const OUT = path.join(root, VAULT, "09_Database_Schema/09_Data_Lineage.md");

/* ── ไฟล์ข้อมูลของเว็บ: สร้างอัตโนมัติ หรือ ซิงก์ด้วยมือ ── */
const MODULES = {
  "ksecData.js": { kind: "generated", by: "build-ksec-data.mjs",
    docs: ["05_TQF2_Academic_Drafts/18_KSEC_Codebook.md"] },
  "courseKsecData.js": { kind: "generated", by: "build-course-ksec.mjs",
    docs: ["05_TQF2_Academic_Drafts/10_Course_Learning_Outcomes_CLO_Mapping.md",
           "08_TQF2_Book_Revisions/17_Section4_7_Skill_Set_Coverage.md",
           "05_TQF2_Academic_Drafts/18_KSEC_Codebook.md"] },
  "teachingData.js": { kind: "generated", by: "build-plo-teaching.mjs",
    docs: ["08_TQF2_Book_Revisions/09_Section5_Revised.md",
           "08_TQF2_Book_Revisions/12_Section6_Revised.md"] },
  "ksecPedagogyData.js": { kind: "generated", by: "build-ksec-pedagogy.mjs",
    docs: ["05_TQF2_Academic_Drafts/20_KSEC_Teaching_and_Assessment.md"] },
  "cloRevisionData.js": { kind: "generated", by: "sync-curriculum-revision.mjs",
    docs: ["05_TQF2_Academic_Drafts/10_Course_Learning_Outcomes_CLO_Mapping.md"] },
  "data.js": { kind: "synced",
    docs: ["04_Course_Descriptions_2570/11_Course_Index.md",
           "02_Current_Curriculum_2570/03_Curriculum_Structure.md",
           "03_OBE_PLO_Design_2570/04_PLOs_7_OBE.md",
           "05_TQF2_Academic_Drafts/09_Yearly_Learning_Outcomes.md",
           "01_Labor_Market_Research/13_Career_Codes_and_Course_Pathways_C01_C26.md"] },
  "obeData.js": { kind: "synced",
    docs: ["03_OBE_PLO_Design_2570/01_Stakeholder_Needs.md",
           "03_OBE_PLO_Design_2570/02_Graduate_Attributes.md",
           "03_OBE_PLO_Design_2570/03_Target_Skills.md",
           "05_TQF2_Academic_Drafts/11_Skill_Set_Matrix_and_KSA.md"] },
  "cloData.js": { kind: "synced",
    docs: ["05_TQF2_Academic_Drafts/10_Course_Learning_Outcomes_CLO_Mapping.md",
           "05_TQF2_Academic_Drafts/11_Skill_Set_Matrix_and_KSA.md"] },
  "facultyData.js": { kind: "synced",
    docs: ["08_TQF2_Book_Revisions/19_Approved_Book_Identity_and_Structure.md"] },
  "refData.js": { kind: "synced",
    docs: ["03_OBE_PLO_Design_2570/06_OBE_References.md",
           "07_JobsDB_Semantic_Career_Analysis/00_Home.md"] },
  "jobsData.json": { kind: "raw", note: "ผลดึงและจำแนกประกาศงานจาก JobsDB ไม่ได้มาจากเอกสารในวอลต์",
    docs: ["07_JobsDB_Semantic_Career_Analysis/00_Home.md",
           "07_JobsDB_Semantic_Career_Analysis/09_Career_Top_Skills_Summary.md"] }
};

/* ── ตาราง -> โมดูล + ฟิลด์ต้นทาง ── */
const TABLES = {
  programme:          ["data.js", "TOTAL_CREDITS + ค่าคงที่ในสคริปต์ ETL"],
  faculty_member:     ["facultyData.js", "FACULTY"],
  faculty_degree:     ["facultyData.js", "FACULTY[].degrees"],
  reference_doc:      ["refData.js", "STANDARDS, BIB"],
  course_group:       ["data.js", "STRUCTURE"],
  track:              ["data.js", "TRACK_NAME"],
  course:             ["data.js", "COURSES"],
  course_prereq:      ["data.js", "COURSES[].h / .w / .co"],
  study_plan:         ["data.js", "PLANS"],
  study_plan_course:  ["data.js", "coursesOfPlan()"],
  plo:                ["data.js", "PLO_NAME, PLO_DETAIL"],
  ylo:                ["data.js", "YLO_DETAIL"],
  sub_ylo:            ["data.js", "YLO_DETAIL[].sub"],
  clo:                ["cloData.js", "CLO_LIST[].clos"],
  clo_plo:            ["cloData.js", "CLO_LIST[].clos[].plo"],
  clo_sub_ylo:        ["cloData.js", "CLO_LIST[].clos[].ylo"],
  course_plo:         ["data.js", "COURSES[].p"],
  skill_group:        ["obeData.js", "GROUPS"],
  skill_set:          ["obeData.js", "SKILL_SETS"],
  skill:              ["obeData.js", "HARD_SKILLS, SOFT_SKILLS, ENGINEERING_FOUNDATIONS"],
  skill_set_skill:    ["obeData.js", "SKILL_SETS[].skills + SKILL[].set"],
  skill_track:        ["obeData.js", "SKILL[].track"],
  ksa_item:           ["ksecData.js", "KNOWLEDGE, SKILLS_KSEC, ETHICS, CHARACTER"],
  ksa_can_do:         ["ksecData.js", "SKILLS_KSEC[].can"],
  ksa_skill:          ["ksecData.js", "KSA[].skills"],
  ksa_plo:            ["ksecData.js", "KSA[].plo"],
  clo_ksa:            ["courseKsecData.js", "COURSE_KSEC[].clos"],
  clo_skill_set:      ["cloData.js", "CLO_LIST[].clos[].sets"],
  course_ksa:         ["courseKsecData.js", "COURSE_KSEC"],
  course_skill_set:   ["courseKsecData.js", "COURSE_KSEC[].aisk"],
  stakeholder:        ["obeData.js", "STAKEHOLDERS"],
  need:               ["obeData.js", "NEEDS"],
  stakeholder_need:   ["obeData.js", "STAKEHOLDERS[].needs"],
  need_skill_set:     ["obeData.js", "NEEDS[].sets"],
  graduate_attribute: ["obeData.js", "GA"],
  ga_plo:             ["obeData.js", "GA[].plo"],
  career:             ["data.js", "CAREERS"],
  career_course:      ["data.js", "CAREERS[].courses"],
  career_subgroup:    ["jobsData.json", "jobs[].searchMatches / classifiedMatches"],
  job_posting:        ["jobsData.json", "jobs[]"],
  job_career_match:   ["jobsData.json", "jobs[].classifiedMatches"],
  job_skill:          ["jobsData.json", "jobs[].skills"],
  teaching_strategy:  ["teachingData.js", "STRATEGIES"],
  strategy_plo:       ["teachingData.js", "STRATEGIES[].plos"],
  plo_assessment:     ["teachingData.js", "ASSESSMENT"],
  ksa_pedagogy:       ["ksecPedagogyData.js", "KSEC_PEDAGOGY"],
  ksa_anchor_course:  ["ksecPedagogyData.js", "KSEC_PEDAGOGY[].anchors"]
};

const KIND = {
  generated: { label: "สร้างอัตโนมัติ", note: "แก้ที่เอกสารในวอลต์แล้วรันสคริปต์ ห้ามแก้ไฟล์ .js" },
  synced:    { label: "ซิงก์ด้วยมือ",   note: "ต้องแก้ทั้งเอกสารและไฟล์ .js ให้ตรงกันเอง" },
  raw:       { label: "ข้อมูลดิบ",       note: "ผลดึงจากภายนอก ไม่ได้แก้ด้วยมือ" }
};

/* ── ตรวจว่าไฟล์ปลายทางมีจริง ── */
const missingDocs = new Set(), missingMods = new Set();
for (const [m, info] of Object.entries(MODULES)) {
  const p = path.join(root, "curriculum-graph/src", m);
  if (!fs.existsSync(p)) missingMods.add(m);
  info.docs.forEach(d => { if (!fs.existsSync(path.join(root, VAULT, d))) missingDocs.add(d); });
}
if (missingMods.size) console.log(`  !! ไม่พบไฟล์ข้อมูล: ${[...missingMods].join(", ")}`);
if (missingDocs.size) console.log(`  !! ไม่พบเอกสารในวอลต์: ${[...missingDocs].join(", ")}`);

/* ── จำนวนแถวจริงจากฐานข้อมูล ── */
let rows = {};
try {
  const j = execFileSync("psql", ["-tAc",
    `SELECT coalesce(json_object_agg(relname, n_live_tup), '{}'::json)::text FROM pg_stat_user_tables`,
    "-d", DB], { encoding: "utf8" });
  rows = JSON.parse(j);
} catch { console.log("  !! อ่านจำนวนแถวจากฐานข้อมูลไม่ได้ — แสดงเป็น —"); }

const link = d => `[[../${d.replace(/\.md$/, "")}\\|${d.split("/").pop().replace(/\.md$/, "")}]]`;
const tblRows = Object.entries(TABLES).map(([t, [mod, field]]) => {
  const m = MODULES[mod];
  return `| \`${t}\` | ${rows[t] ?? "—"} | \`${mod}\` | \`${field}\` | ${KIND[m.kind].label} | ${m.docs.map(link).join("<br>")} |`;
}).join("\n");

const modRows = Object.entries(MODULES).map(([m, info]) => {
  const used = Object.values(TABLES).filter(([x]) => x === m).length;
  return `| \`${m}\` | ${KIND[info.kind].label} | ${info.by ? `\`${info.by}\`` : "—"} | ${used} | ${info.docs.map(link).join("<br>")} |`;
}).join("\n");

const doc = `# ดัชนีสายที่มาของข้อมูล (Data Lineage)

> ตอบคำถามเดียว: **ข้อมูลในตารางนี้มาจากไฟล์ไหนในวอลต์**
>
> วอลต์มีเอกสารหลายสิบไฟล์และบางไฟล์ยาวหลายร้อยบรรทัด ดัชนีนี้ลัดให้ไปถึงต้นทางได้โดยไม่ต้องไล่อ่าน
>
> **สร้างอัตโนมัติ** จาก \`curriculum-graph/scripts/build-db-lineage.mjs\` · สั่งสร้างใหม่ด้วย \`npm run db:lineage\`

## สายข้อมูลโดยรวม

\`\`\`mermaid
flowchart LR
    V["เอกสารในวอลต์<br/>(.md)"] -->|"สคริปต์ build-*"| G["ไฟล์ที่สร้างอัตโนมัติ<br/>ksecData · courseKsecData<br/>teachingData · ksecPedagogyData"]
    V -.->|"ซิงก์ด้วยมือ"| S["ไฟล์ที่ดูแลเอง<br/>data · obeData · cloData<br/>facultyData · refData"]
    J["JobsDB<br/>(ข้อมูลดิบภายนอก)"] --> R["jobsData.json"]
    G --> DB[("ฐานข้อมูล<br/>47 ตาราง")]
    S --> DB
    R --> DB
    DB --> X["Excel 8 ไฟล์"]
    DB --> D["พจนานุกรมข้อมูล"]
    G --> W["เว็บ curriculum-graph"]
    S --> W
\`\`\`

> [!important] ทิศทางเดียว
> เอกสารในวอลต์คือต้นทางเสมอ ฐานข้อมูลกับ Excel เป็นปลายทาง
> แก้ที่ปลายทางแล้วข้อมูลจะหายในการสร้างรอบถัดไป

## ประเภทของแหล่งข้อมูล

| ประเภท | ความหมาย | วิธีแก้ข้อมูล |
|---|---|---|
${Object.entries(KIND).map(([, v]) => `| **${v.label}** | ${v.note.split(" ห้าม")[0].split(" ต้อง")[0]} | ${v.note} |`).join("\n")}

## ตารางฐานข้อมูล → ต้นทาง

| ตาราง | แถว | ไฟล์ข้อมูล | ฟิลด์ต้นทาง | ประเภท | เอกสารในวอลต์ |
|---|--:|---|---|---|---|
${tblRows}

## ไฟล์ข้อมูล → เอกสารในวอลต์

| ไฟล์ | ประเภท | สคริปต์ที่สร้าง | ใช้กี่ตาราง | เอกสารต้นทาง |
|---|---|---|--:|---|
${modRows}

## ลำดับการสร้างใหม่ทั้งสาย

\`\`\`bash
npm run build:ksa      # เอกสารในวอลต์ -> ไฟล์ที่สร้างอัตโนมัติ 4 ตัว
npm run build:db       # ไฟล์ข้อมูลทั้งหมด -> data/seed.sql
npm run db:load --drop # schema + seed -> ฐานข้อมูล พร้อมตรวจความสอดคล้อง
npm run db:export      # ฐานข้อมูล -> Excel 8 ไฟล์
npm run db:docs        # ฐานข้อมูล -> พจนานุกรมข้อมูลในวอลต์
npm run db:lineage     # -> ไฟล์นี้
\`\`\`

> [!warning] ไฟล์ที่ต้องซิงก์ด้วยมือคือจุดเสี่ยง
> \`data.js\` \`obeData.js\` \`cloData.js\` \`facultyData.js\` \`refData.js\` ไม่มีสคริปต์สร้างให้
> ถ้าแก้เอกสารในวอลต์แล้วลืมแก้ไฟล์เหล่านี้ เว็บกับฐานข้อมูลจะยังใช้ข้อมูลเก่าโดยไม่มีอะไรเตือน
> — ต่างจากไฟล์ที่สร้างอัตโนมัติซึ่งจะอัปเดตเองทุกครั้งที่รัน \`npm run build:ksa\`

---

[[00_Database_Home\\|← สารบัญฐานข้อมูล]] | [[../05_TQF2_Academic_Drafts/21_Curriculum_Database_Design\\|แบบฐานข้อมูลและความสัมพันธ์]]
`;

fs.writeFileSync(OUT, doc, "utf8");
const nDocs = new Set(Object.values(MODULES).flatMap(m => m.docs)).size;
console.log(`09_Data_Lineage.md: ${Object.keys(TABLES).length} ตาราง · ${Object.keys(MODULES).length} ไฟล์ข้อมูล · ${nDocs} เอกสารในวอลต์`);
