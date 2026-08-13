---
tags: [presentation, build, prompt]
page: 20/20
---

# หน้า 20 · Prompt ที่ใช้สร้างข้อมูล และเงื่อนไขที่ทำให้ทำซ้ำได้

> **มีเพียง 2 จุดเดียวในทั้งโครงการที่ใช้โมเดลภาษาสร้างข้อมูล และทั้งสองจุดถูกล็อกด้วย JSON Schema + temperature ต่ำ เพื่อให้รันซ้ำแล้วได้ผลเดิม**

## จุดที่ใช้โมเดลภาษา และจุดที่ไม่ใช้

| ส่วนของข้อมูล | ใช้โมเดลภาษาไหม |
|---|---|
| โครงสร้างหลักสูตร · รายวิชา · หน่วยกิต · PLO · YLO · CLO · KSA | ❌ **คนเขียนทั้งหมด** ในวอลต์ |
| ตารางหมวด 4.4–4.7 · พจนานุกรมข้อมูล · Data Lineage | ❌ สคริปต์สร้างจากข้อมูล |
| **สกัดทักษะและสรุปย่อจากประกาศงาน** | ✅ Gemini · `jobs:gemini-all` |
| **จำแนกประกาศงานเข้ากลุ่มอาชีพ C01–C17** | ✅ Gemini · `jobs:classify-all` |

## Prompt ① — สกัดข้อมูลจากประกาศงาน

```text
Extract labor-market requirements from Thai/English job advertisements.
Return only facts supported by each advertisement. Normalize technology names.
Write summaryTh in Thai, maximum 240 characters. Set required=false only for explicitly optional skills.
Do not infer sensitive personal attributes. Return one result for every supplied job ID.

JOBS:
<JSON: id, title, description (ตัดที่ 10,000 ตัวอักษร)>
```

| การตั้งค่า | ค่า | เหตุผล |
|---|---|---|
| `responseMimeType` | `application/json` | บังคับผลลัพธ์เป็นโครงสร้าง |
| `responseJsonSchema` | กำหนดไว้ในสคริปต์ | โมเดลผิดรูปไม่ได้ |
| `temperature` | **0.1** | ให้ผลเสถียร |
| retry | exponential backoff สูงสุด 6 ครั้ง | ทนต่อ 429/5xx |

## Prompt ② — จำแนกอาชีพ (จุดที่ออกแบบละเอียดที่สุด)

```text
Classify each job advertisement independently into the career catalog.
The search queries that found a job are deliberately omitted because they are not semantic evidence.
Use only the title, classification, description, extracted summary, and supported skills.
Keep each reason under 180 characters and cite the decisive duty/domain evidence.
Return one result for every supplied job ID.

POLICY:
<เกณฑ์จำแนกรายอาชีพ — definition / positive / exclude>

CAREER CATALOG:
<JSON: รายการอาชีพ C01–C17>

JOBS:
<JSON: id, title, classification, subClassification, summary, skills, description (ตัดที่ 5,500 ตัวอักษร)>
```

| การตั้งค่า | ค่า |
|---|---|
| `temperature` | **0** — ต้องการผลเดิมทุกครั้ง |
| จำนวนกลุ่มสูงสุดต่อประกาศ | 3 |
| ความยาวเหตุผล | ไม่เกิน 180 ตัวอักษร |

### ตัวอย่างเกณฑ์ในส่วน POLICY

| อาชีพ | definition | exclude (สำคัญที่สุด) |
|---|---|---|
| `C01` AI/ML Engineer | สร้าง ฝึก ประเมิน หรือนำโมเดลขึ้นใช้งานเป็นหน้าที่หลัก | งานที่แค่ *ใช้* เครื่องมือ AI, RPA, dashboard หรือบริหารโครงการ AI โดยไม่ทำโมเดล |
| `C04` Automation & Control | ระบบอัตโนมัติและการควบคุมในภาคอุตสาหกรรม | RPA, Power Automate, Selenium, workflow อัตโนมัติเชิงธุรกิจ |
| `C07` Data Engineer | สร้างและดูแล data pipeline, warehouse, platform | งานวิเคราะห์/ทำ dashboard อย่างเดียวที่ไม่มีงาน pipeline |

> [!important] เทคนิคสำคัญ 4 ข้อที่ทำให้ผลเชื่อถือได้
> 1. **ตัดคำค้นออกจาก prompt โดยตั้งใจ** และเขียนบอกโมเดลด้วยว่าตัดออกเพราะไม่ใช่หลักฐานเชิงความหมาย
> 2. **ทุกอาชีพมีช่อง `exclude`** — บอกว่าอะไร *ไม่ใช่* สำคัญกว่าบอกว่าอะไรใช่ เพราะกันการจำแนกเกินจริง
> 3. **บังคับให้อ้างหลักฐาน** — ต้องเขียนเหตุผลชี้ที่หน้าที่งานหรือโดเมนที่ชี้ขาด
> 4. **temperature 0 + JSON Schema** — ทำให้เป็นการวัด ไม่ใช่การเดา

> [!tip] เล่าอย่างไร (≈2.5 นาที)
> 1. เปิดด้วยการตีกรอบให้แคบ — *"คำถามที่ควรถามคือ ตรงไหนบ้างที่ AI สร้างข้อมูล คำตอบคือสองจุด และไม่มีจุดไหนแตะโครงสร้างหลักสูตรเลย"*
> 2. ยืนยันว่าเนื้อหาหลักสูตรเป็นงานคน — *"PLO CLO KSA ทั้งหมดคนเขียนและกรรมการรับรอง"*
> 3. เล่า prompt ที่สอง แล้วเน้นเรื่องตัดคำค้น — *"ถ้าเราส่งคำค้นไปด้วย โมเดลจะเห็นคำว่า AI Engineer แล้วตอบตามคำนั้น เราจึงตัดออกและบอกเหตุผลไว้ใน prompt เลย"*
> 4. ปิดที่ความทำซ้ำได้ — *"temperature เป็นศูนย์ ผลลัพธ์ถูกล็อกด้วย schema ใครรันซ้ำก็ได้ผลเดิม และตรวจย้อนรายประกาศได้"*

> [!question] คำถามที่มักถูกถาม
> **ถาม:** ถ้าโมเดลจำแนกผิดจะรู้ได้อย่างไร
> **ตอบ:** ทุกผลจำแนกเก็บ **เหตุผลที่อ้างหลักฐาน** ไว้รายประกาศ จึงสุ่มตรวจได้ และมีเอกสารกรณีตรวจสอบตัวอย่างไว้แล้วที่ [[../07_JobsDB_Semantic_Career_Analysis/07_Audit_Case_93021513|กรณีตรวจสอบ JobsDB #93021513]]

**ต้นทาง:** `scripts/extract-career-job-skills-gemini.mjs` · `scripts/classify-career-matches-gemini.mjs` · `scripts/career-classification-guide.mjs` · [[../07_JobsDB_Semantic_Career_Analysis/08_Reproducibility_and_Update_Workflow|การทำซ้ำและขั้นตอนอัปเดต]]

---

[[19_Build_Order|⬅ หน้า 19]] · [[00_Presentation_Home|สารบัญ]] · ภาคผนวก ➡ [[21_Toolchain_and_Workflow]]
