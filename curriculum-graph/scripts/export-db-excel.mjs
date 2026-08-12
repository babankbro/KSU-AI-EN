/* ส่งออกข้อมูลจากฐานข้อมูลเป็นไฟล์ Excel
   แยกไฟล์ตามกลุ่มเรื่องที่ไม่ขึ้นต่อกัน · หนึ่งตาราง = หนึ่งชีต
   Run: npm run db:export            (อ่านจากฐาน PGDATABASE หรือ aise2570)
        npm run db:export -- --out ../exports                                          */
import { execFileSync } from "node:child_process";
import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";
import ExcelJS from "exceljs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DB = process.env.PGDATABASE || "aise2570";
const outArg = process.argv.indexOf("--out");
const OUT = path.resolve(root, outArg > -1 ? process.argv[outArg + 1] : "data/exports");

/* กลุ่มไฟล์: แต่ละกลุ่มอ่านเข้าใจได้ด้วยตัวเอง ไม่ต้องเปิดไฟล์อื่นประกอบ */
const WORKBOOKS = [
  { file: "01_programme",   title: "หลักสูตรและอาจารย์",
    tables: ["programme", "faculty_member", "faculty_degree", "reference_doc"] },
  { file: "02_curriculum",  title: "โครงสร้างและรายวิชา",
    tables: ["course_group", "track", "course", "course_prereq", "study_plan", "study_plan_course"] },
  { file: "03_outcomes",    title: "ผลลัพธ์การเรียนรู้",
    tables: ["plo", "ylo", "sub_ylo", "clo", "clo_plo", "clo_sub_ylo", "course_plo"] },
  { file: "04_skills_ksa",  title: "ทักษะ ชุดทักษะ และ KSA",
    tables: ["skill_group", "skill_set", "skill", "skill_set_skill", "skill_track",
             "ksa_item", "ksa_can_do", "ksa_skill", "ksa_plo",
             "clo_ksa", "clo_skill_set", "course_ksa", "course_skill_set"] },
  { file: "05_obe_sources", title: "ที่มาของหลักสูตร",
    tables: ["stakeholder", "need", "stakeholder_need", "need_skill_set",
             "graduate_attribute", "ga_plo"] },
  { file: "06_careers",     title: "อาชีพและตลาดแรงงาน",
    tables: ["career", "career_subgroup", "career_course",
             "job_posting", "job_career_match", "job_skill"] },
  { file: "07_pedagogy",    title: "การสอนและการประเมิน",
    tables: ["teaching_strategy", "strategy_plo", "plo_assessment",
             "ksa_pedagogy", "ksa_anchor_course"] },
  { file: "08_checks",      title: "มุมมองตรวจความสอดคล้อง",
    tables: ["vw_plo_coverage", "vw_skill_ksa_gap", "vw_skill_set_without_attitude", "vw_ksa_orphan"] }
];

const psql = args => execFileSync("psql", ["-v", "ON_ERROR_STOP=1", "-d", DB, ...args], { encoding: "utf8" });

/* ดึงข้อมูลเป็น JSON ทีละตาราง — ปลอดภัยกว่า CSV เพราะข้อความไทยมีคอมมาและขึ้นบรรทัดใหม่ */
function fetchTable(name) {
  const cols = psql(["-tAc", `
    SELECT string_agg(column_name, ',' ORDER BY ordinal_position)
    FROM information_schema.columns WHERE table_schema='public' AND table_name='${name}'`]).trim();
  if (!cols) return null;
  const json = psql(["-tAc",
    `SELECT coalesce(json_agg(t ORDER BY 1), '[]'::json)::text FROM (SELECT * FROM ${name}) t`]);
  return { columns: cols.split(","), rows: JSON.parse(json) };
}

fs.mkdirSync(OUT, { recursive: true });
let files = 0, sheets = 0, totalRows = 0;
const missing = [];

for (const wb of WORKBOOKS) {
  const book = new ExcelJS.Workbook();
  book.creator = "curriculum-graph · npm run db:export";
  book.created = new Date();
  let used = 0;

  for (const t of wb.tables) {
    const data = fetchTable(t);
    if (!data) { missing.push(t); continue; }
    const ws = book.addWorksheet(t.replace(/^vw_/, ""), { views: [{ state: "frozen", ySplit: 1 }] });
    ws.columns = data.columns.map(c => ({ header: c, key: c, width: Math.min(Math.max(c.length + 4, 12), 60) }));
    data.rows.forEach(r => ws.addRow(data.columns.map(c => {
      const v = r[c];
      return v === null || v === undefined ? "" : (typeof v === "object" ? JSON.stringify(v) : v);
    })));
    ws.getRow(1).font = { bold: true };
    ws.getRow(1).fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FF1E3A67" } };
    ws.getRow(1).font = { bold: true, color: { argb: "FFFFFFFF" } };
    ws.autoFilter = { from: { row: 1, column: 1 }, to: { row: 1, column: data.columns.length } };
    used++; sheets++; totalRows += data.rows.length;
  }

  if (!used) continue;
  const target = path.join(OUT, `${wb.file}.xlsx`);
  await book.xlsx.writeFile(target);
  files++;
  console.log(`  ${wb.file}.xlsx — ${wb.title} · ${used} ชีต`);
}

if (missing.length) console.log(`  !! ไม่พบตาราง: ${missing.join(", ")}`);
console.log(`\nส่งออก ${files} ไฟล์ · ${sheets} ชีต · ${totalRows} แถว → ${path.relative(root, OUT)}`);
