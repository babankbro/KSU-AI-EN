---
tags: [tutorial, build]
step: 1/10
---

# ขั้นที่ 1 · โครงวอลต์เปล่า และโครงเว็บเปล่า

> **เป้าหมาย: ได้โครงที่ครบทุกช่องแต่ยังไม่มีเนื้อหา — เพื่อให้เห็นตั้งแต่วันแรกว่าระบบจะมีอะไรบ้าง และไม่ต้องย้ายไฟล์ทีหลัง**

## หลังจบขั้นนี้ต้องได้อะไร

- โฟลเดอร์วอลต์ 10 โฟลเดอร์ พร้อมไฟล์เปล่าที่มีหัวข้อและ frontmatter
- เว็บ React ที่รันได้ มีเมนู 6 กลุ่มครบ ทุกเส้นทางเปิดได้แต่ขึ้นว่า "ยังไม่มีข้อมูล"

---

## Prompt A · สร้างโครงวอลต์

```text
สร้างวอลต์ Obsidian สำหรับหลักสูตรวิศวกรรมปัญญาประดิษฐ์ ที่โฟลเดอร์
Labor_Growth_Report_Vault/ โดยสร้างเฉพาะ "โครง" ยังไม่ต้องมีเนื้อหาจริง

สร้างโฟลเดอร์และไฟล์เปล่าตามนี้ แต่ละไฟล์ให้มี frontmatter (tags) หัวข้อ H1
และ blockquote หนึ่งบรรทัดบอกว่าไฟล์นี้จะเก็บอะไร แล้วปิดท้ายด้วย
"> [!todo] ยังไม่มีข้อมูล"

01_Labor_Market_Research/   01_Executive_Summary, 07_Thailand_Labor_Market,
                            08_Kalasin_Regional_Context, 11_Career_Paths_by_Track,
                            12_Priority_Careers_12, 13_Career_Codes_and_Course_Pathways_C01_C26
02_Current_Curriculum_2570/ 01_Program_Overview, 03_Curriculum_Structure,
                            04_Tracks_and_Learning_Design
03_OBE_PLO_Design_2570/     01_Stakeholder_Needs, 02_Graduate_Attributes, 03_Target_Skills,
                            04_PLOs_7_OBE, 05_Mapping_Tables, 06_OBE_References,
                            07_Curriculum_PLO_Mapping, 08_Study_Plan_and_Dependencies
04_Course_Descriptions_2570/ 01_General_Education, 02_Engineering_Fundamentals, 03_AI_Core,
                            04_Track_Core, 05..07B_Electives_*, 08_Project_and_Seminar,
                            09_Field_Experience, 11_Course_Index,
                            11_Year_Level_Course_Sequence_and_YLO
05_Benchmark_AI_Programs_TH/ 00_Benchmark_Home, 06_Comparison_Analysis, 08_Sources
05_TQF2_Academic_Drafts/    10_Course_Learning_Outcomes_CLO_Mapping,
                            11_Skill_Set_Matrix_and_KSA, 18_KSEC_Codebook
06_Curriculum_Comparison/   00_Curriculum_Comparison_Home
07_JobsDB_Semantic_Career_Analysis/ 02_Data_and_Methodology, 03_Classification_Policy_C01_C17
08_TQF2_Book_Revisions/     01_Academic_Writing_Style_Guide
09_Database_Schema/         00_Database_Home

สร้าง 00_Home.md ที่ลิงก์ไปทุกไฟล์ด้วย wikilink [[โฟลเดอร์/ไฟล์|ชื่อที่อ่านง่าย]]
จัดกลุ่มตามโฟลเดอร์ พร้อมบอกว่าแต่ละกลุ่มมีบทบาทอะไร

อย่าใส่ตัวเลขหรือข้อเท็จจริงใด ๆ ที่ยังไม่มีแหล่งอ้างอิง
```

**ไฟล์ที่ควรเกิด:** โฟลเดอร์ 10 ชุด · ไฟล์ `.md` ประมาณ 35 ไฟล์ · `00_Home.md`

> [!tip] ทำไมต้องสร้างไฟล์เปล่าก่อน
> เพราะ **wikilink ที่ชี้ไปไฟล์ที่ยังไม่มี จะกลายเป็นลิงก์เสีย** และคนอ่านจะไม่รู้ว่าตั้งใจให้มีหรือลืม
> การมีไฟล์เปล่าพร้อมป้าย `[!todo]` ทำให้ Obsidian แสดงกราฟความเชื่อมโยงได้ครบตั้งแต่วันแรก และรู้ทันทีว่าเหลืออะไรต้องเขียน

---

## Prompt B · สร้างโครงเว็บ

```text
สร้างเว็บ React + Vite + React Router ที่โฟลเดอร์ curriculum-graph/
แยกจากวอลต์ ไม่ปนกับไฟล์ .md

1. ตั้งโปรเจกต์ Vite (react) · ติดตั้ง react-router-dom · ไม่ใช้ UI library
2. สร้าง src/navConfig.js เป็นแหล่งข้อมูลเมนูแหล่งเดียว ใช้ทั้ง top nav และ sidebar
   โครงสร้าง: NAV_GROUPS = [{ id, label, hint, items: [{ to, label, desc, sections? }] }]
   โดย group ที่เป็นลิงก์เดี่ยวให้ใส่ solo: true
   กลุ่มเมนู 6 กลุ่ม
     home     "หน้าแรก"            → /
     curriculum "หลักสูตร"          → /structure /courses /plan /graph /faculty
     outcomes "ผลลัพธ์การเรียนรู้"  → /obe /plo /ylo /clo
     teaching "การเรียนการสอน"      → /teaching /assessment /ksa-pedagogy
     market   "ตลาดแรงงาน"          → /careers /jobs
     refs     "ข้อมูลอ้างอิง"       → /refs
3. สร้าง src/App.jsx ที่มี <Routes> ครบทุกเส้นทางข้างบน รวม
   /structure/:id /plo/:id /ylo/:id /courses/:code และ * → NotFound
4. สร้าง src/SiteNav.jsx และ src/Sidebar.jsx ที่ render จาก navConfig เท่านั้น
   ห้าม hardcode รายการเมนูซ้ำในสองไฟล์
5. ทุกหน้าใน src/pages/ ให้เป็น placeholder ที่แสดงชื่อหน้าและข้อความ
   "ยังไม่มีข้อมูล — ดูขั้นที่ N ของคู่มือ"
6. สร้าง src/pages/ui.jsx ที่ export <PageHead title subtitle/> และ <Section id title/>
   ให้ทุกหน้าใช้ร่วมกัน
7. ฟอนต์ IBM Plex Sans Thai และ IBM Plex Mono จาก Google Fonts ใน index.html
   กำหนดผ่านตัวแปร --font-sans / --font-mono ใน src/styles.css
8. สร้าง vercel.json ที่ตั้ง rewrites ทุก path → /index.html

อย่าใส่ข้อมูลหลักสูตรจริงใด ๆ ในขั้นนี้
```

**ไฟล์เว็บที่ควรเกิด**

| ไฟล์ | หน้าที่ |
|---|---|
| `src/navConfig.js` | โครงเมนู — แหล่งเดียวที่ top nav และ sidebar ใช้ร่วมกัน |
| `src/App.jsx` | เส้นทางทั้งหมดและ layout |
| `src/SiteNav.jsx` · `src/Sidebar.jsx` | เมนูบนและเมนูข้าง |
| `src/pages/*.jsx` | 18 หน้า placeholder |
| `src/pages/ui.jsx` | คอมโพเนนต์ร่วม |
| `src/styles.css` · `index.html` | ตัวแปรสีและฟอนต์ |
| `vercel.json` | rewrites สำหรับ client-side routing |

> [!warning] `vercel.json` ต้องมีตั้งแต่ขั้นนี้
> ถ้าไม่ตั้ง rewrites การเปิด `/plo/3` ตรง ๆ หรือกด refresh จะได้ **404** ทันทีที่ deploy
> และถ้าเว็บอยู่ในโฟลเดอร์ย่อยของ repo ต้องตั้ง **Root Directory = `curriculum-graph`** บน Vercel ด้วย

## เกณฑ์ตรวจรับขั้นที่ 1

- [ ] `npm run dev` ขึ้นโดยไม่มี error
- [ ] คลิกครบทุกเมนู ทุกเส้นทางเปิดได้ ไม่มีหน้า 404 ที่ไม่ได้ตั้งใจ
- [ ] แก้ `navConfig.js` แล้วเมนูบนและเมนูข้างเปลี่ยนพร้อมกัน
- [ ] เปิดวอลต์ใน Obsidian แล้ว `00_Home` ไม่มีลิงก์เสีย

---

[[00_Tutorial_Home|สารบัญ]] · [[02_Stakeholders_and_Needs|ขั้นที่ 2 ➡]]
