/* สร้างฐานข้อมูลใหม่จาก schema.sql + seed.sql
   ฐานข้อมูลเป็นผลลัพธ์ ไม่ใช่ต้นทาง — สร้างใหม่ได้เสมอโดยไม่เสียข้อมูล
   Run: npm run db:load            (ใช้ชื่อฐานจาก PGDATABASE หรือค่าเริ่มต้น aise2570)
        npm run db:load -- --drop  (ลบฐานเดิมทิ้งก่อนสร้างใหม่)                        */
import { execFileSync } from "node:child_process";
import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DB = process.env.PGDATABASE || "aise2570";
const drop = process.argv.includes("--drop");
const psql = (db, args) => execFileSync("psql", ["-v", "ON_ERROR_STOP=1", "-q", "-d", db, ...args],
  { encoding: "utf8", stdio: ["pipe", "pipe", "pipe"] });

for (const f of ["data/schema.sql", "data/seed.sql"]) {
  if (!fs.existsSync(path.join(root, f))) {
    console.error(`ไม่พบ ${f} — รัน npm run build:db ก่อน`);
    process.exit(1);
  }
}

const exists = psql("postgres", ["-tAc", `SELECT 1 FROM pg_database WHERE datname='${DB}'`]).trim() === "1";
if (exists && !drop) {
  console.error(`ฐานข้อมูล "${DB}" มีอยู่แล้ว — ใช้ --drop เพื่อลบและสร้างใหม่ หรือกำหนด PGDATABASE เป็นชื่ออื่น`);
  process.exit(1);
}
if (exists) {
  psql("postgres", ["-c", `DROP DATABASE "${DB}"`]);
  console.log(`ลบฐานข้อมูลเดิม "${DB}"`);
}
psql("postgres", ["-c", `CREATE DATABASE "${DB}"`]);
psql(DB, ["-f", path.join(root, "data/schema.sql")]);
psql(DB, ["-f", path.join(root, "data/seed.sql")]);

const rows = psql(DB, ["-tAc", `
  SELECT string_agg(t || '=' || c, ' · ' ORDER BY t) FROM (
    SELECT relname t, n_live_tup c FROM pg_stat_user_tables WHERE n_live_tup > 0
  ) x`]).trim();
const total = psql(DB, ["-tAc",
  "SELECT coalesce(sum(n_live_tup),0) FROM pg_stat_user_tables"]).trim();

console.log(`สร้างฐานข้อมูล "${DB}" สำเร็จ · ${total} แถว`);

/* มุมมองตรวจความสอดคล้องต้องว่างทั้งหมด ไม่งั้นถือว่าข้อมูลไม่ผ่าน */
const checks = ["vw_skill_ksa_gap", "vw_skill_set_without_attitude", "vw_ksa_orphan"];
let bad = 0;
for (const v of checks) {
  const c = +psql(DB, ["-tAc", `SELECT count(*) FROM ${v}`]).trim();
  console.log(`  ${c === 0 ? "ผ่าน" : "ไม่ผ่าน"}  ${v}: ${c}`);
  if (c) bad++;
}
if (bad) {
  console.error(`\nมี ${bad} มุมมองที่ไม่ผ่าน — ข้อมูลยังไม่สอดคล้อง`);
  process.exit(1);
}
