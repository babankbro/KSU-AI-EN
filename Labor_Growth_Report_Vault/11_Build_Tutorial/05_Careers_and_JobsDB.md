---
tags: [tutorial, build, jobs]
step: 5/15
---

# ขั้นที่ 5 · อาชีพเป้าหมาย และหลักฐานประกาศงานจริงจาก JobsDB

> **เป้าหมาย: เลิกอ้างว่า "ตลาด AI กำลังโต" ลอย ๆ แล้วเปลี่ยนเป็นหลักฐานที่ตรวจย้อนได้รายประกาศ — ขั้นนี้คือวัตถุดิบของทักษะเป้าหมายในขั้นที่ 6**

## หลังจบขั้นนี้ต้องได้อะไร

| เมนู | เส้นทาง | เนื้อหา |
|---|---|---|
| ตลาดแรงงาน → เส้นทางอาชีพ | `/careers` | อาชีพ C01–C26 แยกตามแขนงและสถานะตลาด |
| ตลาดแรงงาน → Jobs & Skills | `/jobs` | ประกาศงานจริง · Technical/Soft Skills · ตัวกรองรายอาชีพ |

---

## 5.1 · นิยามอาชีพเป้าหมาย

### Prompt A · วอลต์

```text
เขียน 01_Labor_Market_Research/13_Career_Codes_and_Course_Pathways_C01_C26.md

ตารางอาชีพเป้าหมาย คอลัมน์
  รหัส | ชื่อไทย | ชื่ออังกฤษ | แขนงที่สังกัด | สถานะตลาด | หน้าที่หลักโดยย่อ | คำค้นที่ตลาดใช้จริง
ใช้รหัส C01–C26

สถานะตลาด 3 ค่า
  M  Mainstream       มีประกาศรับต่อเนื่อง
  S  Sector Critical  สำคัญเฉพาะอุตสาหกรรม
  F  Future/Emerging  งานอนาคตที่กำลังโต

"คำค้นที่ตลาดใช้จริง" คือชื่อตำแหน่งที่ประกาศงานใช้ ไม่ใช่ชื่อที่เราตั้งเอง
เช่น C01 → "AI Engineer · Machine Learning Engineer · Applied AI Engineer · ML Engineer"
คอลัมน์นี้จะถูกใช้เป็นคำค้นในขั้นตอนดึงข้อมูลโดยตรง

ยังไม่ต้องเขียนคอลัมน์ "รายวิชาที่พาไปถึงอาชีพนี้" — ยังไม่มีรายวิชา
ให้เว้นคอลัมน์ไว้พร้อมหมายเหตุ "รอรายวิชาจากขั้นที่ 10" และบันทึกใน 99_Pending.md
```

---

## 5.2 · ดึงประกาศงานจาก JobsDB

> [!warning] อ่านก่อนเริ่ม
> ขั้นนี้ยิงไปยังบริการภายนอกและใช้เวลานาน **ห้ามรวมเข้ากับ `npm run build`**
> ไม่งั้นตัวเลขในเล่มจะขยับเองทุกครั้งที่ deploy · ให้รันเมื่อ *ตั้งใจจะรีเฟรชหลักฐาน* เท่านั้น

### โครงสร้างข้อมูลที่ต้องได้ — กำหนดก่อนเขียนสคริปต์

```jsonc
// data/jobsdb-careers-raw.json  ← ผลดิบจากการ scrape
{
  "meta": { "scrapedAt": "2026-07-29", "source": "JobsDB Thailand", "queries": 41 },
  "jobs": [{
    "id": "93021513",              // Job ID — กุญแจรวมประกาศซ้ำข้ามคำค้น
    "title": "AI Engineer",
    "company": "…",
    "location": "…",
    "salary": "…",
    "employment": "Full time",
    "listed": "2 days ago",
    "listingDate": "2026-07-27",
    "classification": "Information & Communication Technology",
    "subClassification": "Engineering - Software",
    "summary": "…",               // ข้อความสรุปจากหน้ารายการ
    "url": "https://th.jobsdb.com/job/93021513",
    "careerIds": ["C01"],          // อาชีพที่คำค้นนี้ตั้งใจหา — ยังไม่ใช่ผลจำแนก
    "searchMatches": [             // provenance เท่านั้น ห้ามใช้นับจำนวนงาน
      { "careerId": "C01", "query": "AI Engineer", "rank": 3 }
    ],
    "description": "…",            // เนื้อหาเต็มจากหน้ารายละเอียด
    "detailStatus": "ok",
    "descriptionLength": 4821
  }]
}
```

### Prompt · สคริปต์ scrape

```text
สร้าง 2 ไฟล์ใน curriculum-graph/scripts/

1. career-job-config.mjs
   export const CAREER_QUERIES = { C01: ["AI Engineer", "Machine Learning Engineer", ...], ... }
   คำค้นให้เอามาจากคอลัมน์ "คำค้นที่ตลาดใช้จริง" ในเอกสารวอลต์ ห้ามคิดเอง
   ทำเฉพาะอาชีพที่มีตลาดจริง (สถานะ M หรือ S) — อาชีพสถานะ F ให้ข้ามไปก่อน

2. scrape-jobsdb-careers.mjs   (npm run jobs:scrape-all)
   - วนคำค้นทุกตัวของทุกอาชีพ เก็บหน้ารายการก่อน แล้วค่อยตามไปเก็บหน้ารายละเอียด
   - รวมประกาศซ้ำข้ามคำค้นด้วย Job ID เป็นกุญแจ ไม่ใช่ด้วย URL หรือชื่อตำแหน่ง
   - ทุกครั้งที่พบประกาศเดิมจากคำค้นอื่น ให้ push เข้า searchMatches ไม่ใช่สร้างรายการใหม่
   - เขียนผลตามโครงสร้างข้างบนลง data/jobsdb-careers-raw.json

   ข้อกำหนดด้านการทำงาน
   - checkpoint/resume: บันทึกความคืบหน้าทุก 50 ประกาศ เพื่อรันต่อได้เมื่อขาดกลางคัน
   - หน่วงเวลาระหว่างคำขอแบบสุ่ม 1–3 วินาที และ retry แบบ exponential backoff
   - เคารพ robots.txt และ rate limit ของเว็บไซต์ · ตั้ง User-Agent ที่ระบุตัวตนได้
   - ถ้าหน้ารายละเอียดโหลดไม่สำเร็จ ให้ตั้ง detailStatus เป็น "failed" แล้วไปต่อ
     ห้ามทิ้งทั้งประกาศ เพราะข้อมูลจากหน้ารายการยังใช้ได้
   - พิมพ์สรุปตอนจบ: จำนวนคำค้น จำนวนประกาศทั้งหมด จำนวนที่ซ้ำและถูกรวม
     จำนวนที่ดึงรายละเอียดสำเร็จ/ล้มเหลว

   ห้ามเก็บข้อมูลส่วนบุคคลของผู้ประกาศหรือผู้สมัคร เก็บเฉพาะข้อมูลตำแหน่งงาน
```

---

## 5.3 · สกัดทักษะจากประกาศแต่ละงาน

### โครงสร้างผลลัพธ์ที่ต้องได้

```jsonc
// src/jobsData.json  ← เพิ่มฟิลด์ทับลงบนข้อมูลดิบ
{
  "jobs": [{
    "id": "93021513",
    "normalizedTitle": "AI Engineer",       // ชื่อตำแหน่งที่ normalise แล้ว
    "seniority": "Mid",                     // Intern|Junior|Mid|Senior|Lead/Manager|Unspecified
    "summaryTh": "…",                       // สรุปไทย ไม่เกิน 240 ตัวอักษร
    "education": "ปริญญาตรีวิศวกรรมศาสตร์หรือวิทยาการคอมพิวเตอร์",
    "minExperienceYears": 3,                // null ได้ถ้าไม่ระบุ
    "skills": [{
      "name": "PyTorch",
      "category": "AI/ML",                  // Programming|AI/ML|Framework|Data|
                                            // Cloud/DevOps|Software|Professional|Domain
      "required": true,                     // false เฉพาะที่ประกาศระบุว่าเป็นตัวเลือก
      "confidence": 0.95
    }],
    "skillMethod": "gemini + canonical-taxonomy"
  }]
}
```

### Prompt · สคริปต์สกัดทักษะ

```text
สร้าง scripts/extract-career-job-skills-gemini.mjs   (npm run jobs:gemini-all)

อ่าน data/jobsdb-careers-raw.json แล้วส่งประกาศเข้าโมเดลเป็น batch
พร้อม responseJsonSchema ที่บังคับโครงผลลัพธ์ตามโครงสร้างข้างบน

prompt ที่ส่งไปให้โมเดล ใช้ข้อความนี้ตรง ๆ
---
Extract labor-market requirements from Thai/English job advertisements.
Return only facts supported by each advertisement. Normalize technology names.
Write summaryTh in Thai, maximum 240 characters.
Set required=false only for explicitly optional skills.
Do not infer sensitive personal attributes.
Return one result for every supplied job ID.

JOBS:
<JSON array ของ { id, title, description }  โดยตัด description ที่ 10,000 ตัวอักษร>
---

การตั้งค่าที่ต้องใช้
  responseMimeType   "application/json"
  responseJsonSchema กำหนด enum ของ seniority และ category ให้ครบ
                     และ required ทุกฟิลด์ เพื่อไม่ให้โมเดลข้ามช่อง
  temperature        0.1
  maxOutputTokens    8192
  retry              exponential backoff สูงสุด 6 ครั้ง สำหรับ HTTP 429 และ 5xx
                     และ retry อีกชุดเมื่อ JSON parse ไม่ผ่าน

เหตุผลของแต่ละบรรทัดใน prompt — อธิบายไว้ในโค้ดด้วย
  "Return only facts supported by each advertisement"
      กันโมเดลเติมทักษะที่ประกาศไม่ได้เขียน เพราะเดาจากชื่อตำแหน่ง
  "Normalize technology names"
      รวม "Pytorch" "PyTorch" "pytorch" ให้เป็นตัวเดียว ไม่งั้นนับซ้ำ
  "Set required=false only for explicitly optional skills"
      ค่าเริ่มต้นคือ required เพื่อไม่ให้ทักษะจริงถูกลดชั้นเป็นตัวเลือก
  "Do not infer sensitive personal attributes"
      กันการอนุมานอายุ เพศ สัญชาติ จากข้อความประกาศ
  "Return one result for every supplied job ID"
      ทำให้ตรวจได้ว่าผลลัพธ์ครบ ถ้าขาดให้ retry เฉพาะ id ที่หาย

หลังได้ผลแล้ว ให้ผ่าน canonical taxonomy อีกชั้น
  สร้าง scripts/skill-taxonomy.mjs เก็บตารางรวมชื่อพ้อง
  เช่น "ML" → "Machine Learning" · "GCP" → "Google Cloud"
  แล้วสร้าง scripts/normalize-job-skills.mjs (npm run jobs:normalize) ที่ใช้ตารางนี้
  เหตุผล: โมเดล normalise ได้ระดับหนึ่ง แต่ไม่คงเส้นคงวาข้าม batch
  ตารางชื่อพ้องที่คนดูแลเองจึงจำเป็น

พิมพ์สรุป: จำนวนประกาศที่สกัดสำเร็จ · จำนวนทักษะที่พบทั้งหมด ·
           จำนวนชื่อทักษะไม่ซ้ำก่อนและหลัง normalise
```

---

## 5.4 · จำแนกประกาศเข้ากลุ่มอาชีพ

### Prompt · สคริปต์จำแนก

```text
สร้าง 2 ไฟล์

1. career-classification-guide.mjs
   เกณฑ์รายอาชีพ แต่ละอาชีพต้องมีครบ 3 ช่อง
     definition  หน้าที่หลักที่ทำให้นับเป็นอาชีพนี้
     positive    คำหรือหน้าที่ที่เป็นสัญญาณบวก
     exclude     สิ่งที่ "ไม่ใช่" อาชีพนี้แม้จะดูคล้าย  ← สำคัญที่สุด
   ตัวอย่างที่ใช้จริง
     C01 definition "Build, train, evaluate, deploy, or monitor AI/ML models as a core engineering duty."
         exclude    "roles that only use AI tools, RPA, dashboards, or manage AI projects without model engineering"
     C04 definition "Engineer industrial automation and control systems."
         exclude    "RPA, Power Automate, Selenium, business workflow automation"
     C07 definition "Build and operate data pipelines, warehouses, lakes, and data infrastructure."
         exclude    "analysis/dashboard-only roles without pipeline or platform engineering"

2. classify-career-matches-gemini.mjs   (npm run jobs:classify-all)
   prompt ที่ส่งไปให้โมเดล ใช้ข้อความนี้ตรง ๆ
   ---
   Classify each job advertisement independently into the career catalog.
   The search queries that found a job are deliberately omitted because they are not
   semantic evidence.
   Use only the title, classification, description, extracted summary, and supported skills.
   Keep each reason under 180 characters and cite the decisive duty/domain evidence.
   Return one result for every supplied job ID.

   POLICY:
   <เกณฑ์จาก career-classification-guide.mjs>

   CAREER CATALOG:
   <JSON รายการ C01–C17 พร้อม definition>

   JOBS:
   <JSON ของ { id, title, classification, subClassification, summary, skills,
               description ตัดที่ 5,500 ตัวอักษร }>
   ---
   ตั้งค่า temperature = 0 · หนึ่งประกาศเข้าได้สูงสุด 3 กลุ่ม
   เก็บผลเป็น classifiedMatches = [{ careerId, reason, confidence }]
   และ primaryCareerId = กลุ่มที่ confidence สูงสุด
```

> [!important] เทคนิคที่ทำให้ผลเชื่อถือได้ — ต้องอธิบายให้ผู้ฟังเสมอ
> 1. **ตัดคำค้นออกจาก prompt โดยตั้งใจ** และเขียนบอกโมเดลด้วยว่าตัดเพราะไม่ใช่หลักฐานเชิงความหมาย — ถ้าส่งคำค้นไปด้วย โมเดลจะเห็นคำว่า "AI Engineer" แล้วตอบตามคำนั้นแทนที่จะอ่านเนื้อหาจริง
> 2. **ทุกอาชีพมีช่อง `exclude`** — บอกว่าอะไร *ไม่ใช่* สำคัญกว่าบอกว่าอะไรใช่ เพราะกันการจำแนกเกินจริง
> 3. **บังคับให้อ้างหลักฐาน** ไม่เกิน 180 ตัวอักษร ชี้ที่หน้าที่งานหรือโดเมนที่ชี้ขาด จึงสุ่มตรวจได้
> 4. **temperature 0 + JSON Schema** ทำให้เป็นการวัด ไม่ใช่การเดา รันซ้ำได้ผลเดิม

> [!danger] หลักการนับที่ต้องพูดให้ชัดทุกครั้ง
> `searchMatches` = มาจากคำค้นอะไร ใช้เป็น provenance เท่านั้น **ห้ามใช้นับจำนวนงาน**
> `classifiedMatches` = ผ่านการจำแนกตามเนื้อหาแล้ว **ใช้เป็นฐานเดียว** ของจำนวนงานและ Skills ทั้งหมด
> ถ้าค้นคำว่า "AI Engineer" แล้วนับผลลัพธ์ทั้งหมดว่าเป็นงาน AI Engineer นั่นคือการนับคำค้น ไม่ใช่การนับงาน

---

## 5.5 · แยกไฟล์และสร้างหน้าเว็บ

```text
1. scripts/build-jobs-runtime-data.mjs   (npm run jobs:build-runtime)
   แยก snapshot ก้อนใหญ่เป็นไฟล์ย่อยเพื่อให้เว็บโหลดเร็ว
     src/jobsIndex.json                  สถิติ จำนวนงาน Top Skills สำหรับ first render
     src/jobsRuntime/scope/<career>.json รายการงานรายอาชีพ โหลดเมื่อเลือกอาชีพ
     src/jobsRuntime/detail/<shard>.json รายละเอียดเต็ม โหลดเมื่อกดขยาย
   ตั้งให้ prebuild เรียกสคริปต์นี้อัตโนมัติ
   src/jobsData.json ต้องไม่ถูก import เข้า bundle โดยตรง

2. เพิ่มใน src/data.js
   CAREERS = [{ id, track, st, th, en, why, kw, courses: [] }]  // courses เว้นว่างไว้ก่อน
   CAREER_STATUS = { M: {...}, S: {...}, F: {...} }

3. หน้า pages/CareerGraph.jsx (/careers)
   - การ์ดอาชีพแยกตามแขนง ระบายสีตามสถานะตลาด M/S/F
   - แต่ละการ์ดแสดงหน้าที่หลัก คำค้นที่ตลาดใช้ และจำนวนประกาศที่จำแนกเข้าอาชีพนั้น
   - ส่วน "รายวิชาที่พาไปถึง" ให้แสดงป้าย "รอเชื่อมรายวิชา — ขั้นที่ 10"
   - กราฟ dagre จะเพิ่มในขั้นที่ 10 เมื่อมีรายวิชาแล้ว

4. หน้า pages/AiEngineerJobs.jsx (/jobs)
   - แถบสถิติจาก jobsIndex.json: จำนวนประกาศ จำนวนที่จำแนกได้ ช่วงเวลาที่เก็บ
   - Technical Skills 20 อันดับ และ Soft Skills 10 อันดับ พร้อมจำนวนประกาศที่พบ
   - ตัวกรองตามอาชีพ · โหลด scope แบบ lazy เมื่อผู้ใช้เลือก
   - ทุกแถวแสดง "เหตุผลการจำแนก" ที่โมเดลให้ไว้ เพื่อให้สุ่มตรวจได้
   - แสดงวันที่ของ snapshot บนหน้าเสมอ
```

## การเชื่อมโยงวอลต์ ↔ เว็บ

| หน้าเว็บ | ไฟล์ข้อมูล | ต้นทางในวอลต์ |
|---|---|---|
| `/careers` | `CAREERS` | [[../01_Labor_Market_Research/13_Career_Codes_and_Course_Pathways_C01_C26\|13_Career_Codes]] |
| `/jobs` | `jobsIndex.json` · `jobsRuntime/` | [[../07_JobsDB_Semantic_Career_Analysis/02_Data_and_Methodology\|02_Data_and_Methodology]] |
| เกณฑ์จำแนก | `career-classification-guide.mjs` | [[../07_JobsDB_Semantic_Career_Analysis/03_Classification_Policy_C01_C17\|03_Classification_Policy]] |

## เกณฑ์ตรวจรับ

- [ ] ประกาศที่เจอจากหลายคำค้นถูกรวมเป็นรายการเดียว มี `searchMatches` หลายรายการ
- [ ] ตัวเลขบนหน้าเว็บทุกตัวมาจาก `classifiedMatches` ไม่มีตัวไหนมาจาก `searchMatches`
- [ ] ทุกผลจำแนกมีเหตุผลที่อ้างหลักฐาน สุ่มตรวจ 10 รายการแล้วถูกต้อง
- [ ] รันสคริปต์จำแนกซ้ำแล้วได้ผลเดิม
- [ ] หน้า `/jobs` โหลดครั้งแรกไม่ดึงไฟล์ snapshot ก้อนใหญ่

---

[[04_PLO|⬅ ขั้นที่ 4]] · [[00_Tutorial_Home|สารบัญ]] · [[06_Target_Skills|ขั้นที่ 6 ➡]]
