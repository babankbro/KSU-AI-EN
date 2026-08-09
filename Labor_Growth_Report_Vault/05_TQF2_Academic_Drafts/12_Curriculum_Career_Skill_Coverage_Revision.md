# วิเคราะห์ Coverage รายวิชาและข้อเสนอปรับหลักสูตรตาม C01–C17

> หลักสูตรวิศวกรรมปัญญาประดิษฐ์และระบบอัจฉริยะ พ.ศ. 2570  
> วิเคราะห์จากรายวิชาปัจจุบัน, Master Catalog H1–H20/S1–S10 และ JobsDB `classifiedMatches` C01–C17  
> วันที่วิเคราะห์: 29 กรกฎาคม 2569 / 2026-07-29

> [!update] แนวทางปรับเล็กน้อยล่าสุด
> ข้อเสนอ 4+4 ในเอกสารนี้เป็นฐานการวิเคราะห์เดิม แนวทางล่าสุดใช้ **Core Track ร่วม 9 วิชา/27 นก. + วิชาเลือกชีพ 5 วิชา/15 นก.** ทำให้ยอดรวมชั่วคราวเป็น 133 หน่วยกิตจนกว่าจะปรับลด 3 หน่วยกิตจากหมวดอื่น ดูการประเมิน Gap Closure ล่าสุดที่ [[15_Current_vs_Proposed_Courses_Groups_2_1_to_2_3]]

> [!warning] สถานะการใช้งาน
> รายการวิชา 4+4 ใน §5–§8 เก็บไว้เป็นประวัติการวิเคราะห์และ **ไม่ใช่โครงสร้างปัจจุบัน** การตัดสินใจด้าน Coverage ให้ใช้ [[15_Current_vs_Proposed_Courses_Groups_2_1_to_2_3#8 Gap Closure ต่อ Skill Set EN-AISK01–09|เอกสาร 15 §8–§12]], [[10_Course_Learning_Outcomes_CLO_Mapping#7 ผลทวนสอบ Skills/Sub-skills ↔ PLO และ Gap ใหม่|CLO Mapping §7]] และ [[11_Skill_Set_Matrix_and_KSA#ส่วน D — การตรวจสอบความสอดคล้องของทักษะข้ามเอกสาร (Skill Alignment Verification)|Skill Matrix ส่วน D]] เป็นฉบับหลัก

### สรุปผลทวนสอบล่าสุด

| ระดับการตอบ | Skills/Sub-skills | หมายเหตุ |
|---|---|---|
| ปิดในแกนร่วม | H1–H6, H8–H9, H11, H13, H16–H17, H19; S1–S2, S4–S6, S8; EF1–EF4 | มี Course Description, CLO, PLO และหลักฐานปลายทาง |
| ปิดแบบมีเงื่อนไข | H7, H14, H15; S3, S7, S9, S10; EF5–EF6 | ต้องมี common rubric หลักฐานรายบุคคล Lab และผู้ทวนสอบ |
| ปิด baseline/เพิ่มความลึกด้วยวิชาเลือก | H10, H12, H18, H20 | Thai NLP, Advanced Data, Maintenance/Reliability, Enterprise/Governance |
| กลไกบริหารที่ยังต้องดำเนินการ | Track PI, law/standard watch, industry partnership, placement evidence | ไม่ใช่ช่องว่างที่ปิดได้ด้วยการเพิ่มหัวข้อรายวิชา |

## 1. สรุปผู้บริหาร

หลักสูตรปัจจุบันมีฐานทาง AI, Data, IoT, Automation และโดเมนเกษตรอุตสาหกรรมที่แข็งแรง แต่มีปัญหาเชิงโครงสร้าง 4 ประการ:

1. **กว้างแต่ไม่รับประกันความลึกตามอาชีพ**  
   หมวด EN-132 ใช้ชื่อ “บังคับตามแขนง” แต่เอกสารปัจจุบันรวม 8 วิชาเป็น 24 หน่วยกิต จึงไม่ชัดว่านักศึกษาทุกคนเรียนทั้ง 8 วิชา หรือแต่ละ Track เรียนคนละชุด

2. **วิชาเลือกมาก แต่เลือกอย่างไรก็ได้**  
   มีรายการวิชาเลือก 48 วิชา แต่เรียนเพียง 5 วิชา/15 หน่วยกิต หากไม่มี basket rule ผู้เรียนอาจจบโดยขาด Skill สำคัญของอาชีพที่เลือก

3. **มีความซ้ำระหว่างวิชาแกนกับวิชาเลือก**  
   เช่น Smart Farm/Precision Agriculture, UAV/Remote Sensing, Product Design, GenAI, Software/Cloud และวิชาเกษตรที่วิเคราะห์ข้อมูลคล้ายกันหลายวิชา

4. **Skills ใหม่จาก C13–C17 ยังอยู่แบบกระจาย**  
   H17 Smart Manufacturing/Quality/MES, H18 Maintenance/Reliability, H19 DSS/Decision Intelligence และ H20 Enterprise Digital Services ยังไม่มีเส้นทางบังคับที่ชัดในทุก Track ที่เกี่ยวข้อง

> [!recommendation] ข้อเสนอหลัก
> คงโครงสร้างรวม **130 หน่วยกิต** แต่ปรับหมวด EN-132 จำนวน 24 หน่วยกิตเป็น  
> **แกนร่วมข้าม Track 4 วิชา (12 นก.) + วิชาบังคับเฉพาะ Track 4 วิชา (12 นก.)**  
> และปรับวิชาเลือก 15 หน่วยกิตเป็น **3 วิชาความลึก Track + 1 วิชาข้าม Track + 1 วิชา Emerging/Research/Venture**

## 2. โครงสร้างเดิมและสถานะ Coverage

| ส่วนหลักสูตรเดิม | นก. | จุดแข็ง | ข้อจำกัด |
|---|---:|---|---|
| Engineering Fundamentals + Workshop | 24 | ฐานกายภาพ โปรแกรม ไฟฟ้า CAD และ hands-on | Programming เพียงวิชาเดียว; SQL/Git/testing ควรเริ่มเร็วขึ้น |
| AI Core EN-131 | 24 | ครบ ML/DL, CV, IoT, Cloud/MLOps, Data Engineering, Infrastructure | BI/DSS, service reliability, IAM/DR และ enterprise operations ยังไม่ชัด |
| Track Core EN-132 | 24 | มีเกษตร โรงงาน software และ agentic AI | สถานะ “เรียนร่วม/เลือกตาม Track” ไม่ชัด; ความลึกต่อ Track ไม่สมดุล |
| Electives | 15 | Pool ใหญ่และมี domain expertise สูง | 48 วิชาแต่เลือก 5; ซ้ำกันมากและไม่มี pathway guarantee |
| Project/Seminar | 6 | รองรับ integration และ PLO1–7 | ต้องบังคับ requirement, acceptance, quality และ handover evidence |
| Co-op | 7 | Mastery จากงานจริง | ต้องกำหนด rubric S9/S10 และ Skill Transcript ตามอาชีพ |

## 3. ความครอบคลุม H1–H20 ในรายวิชาปัจจุบัน

สัญลักษณ์: **แข็งแรง** = มีวิชาแกน/บังคับและปฏิบัติ · **ปานกลาง** = มีแต่กระจายหรือขึ้นกับวิชาเลือก · **อ่อน** = ไม่มีเจ้าภาพชัด

| Skill | Coverage เดิม | หลักฐานรายวิชาเดิม | Gap และการปรับที่เสนอ |
|---|:---:|---|---|
| H1 AI/ML & Mathematics | แข็งแรง | 131-102, 131-206, 001-122 | คงเดิม; เพิ่ม experiment/reproducibility ในโครงงาน |
| H2 Programming & AI Software | แข็งแรง | 001-126, 132-308 | เพิ่ม data structures, Git, automated testing, SQL/API ตั้งแต่ปี 1–2 |
| H3 Data Engineering/Analytics/Viz | แข็งแรง | 131-207, 132-303 | เพิ่ม semantic model, BI/DSS และ data quality gate |
| H4 MLOps/Cloud/Infrastructure | แข็งแรง | 131-205/208, 132-308 | เพิ่ม observability, IAM, backup/DR, SLO และ runbook |
| H5 Automation/Robotics/Digital Twin | แข็งแรง | 132-306/307, 135-316/327 | แยก control/robotics ออกจาก process/quality ให้ชัด |
| H6 GenAI/LLM/Agentic | แข็งแรง | 132-309, 135-332 | ลดความซ้ำ; ให้ 132-309 เป็นฐาน และ elective เป็น advanced LLM |
| H7 Security/Responsible AI | ปานกลาง | 131-101/204/205/208, 135-345 | รวม AI QA + Security + Governance เป็นวิชาบังคับ T3 หรือ cross-track |
| H8 CV/Remote Sensing/Multimodal | แข็งแรง | 131-203, 132-305, 135-308/329 | คงแกน; elective ต้องเป็น advanced domain application |
| H9 IoT/Embedded/Edge/Sensors | แข็งแรง | 001-127/129, 131-204, 132-304/307 | คงเดิม; เพิ่ม device management และ industrial protocol |
| H10 NLP/Thai NLP | อ่อน–ปานกลาง | 132-309, 135-332 | เพิ่ม elective Thai NLP/Sovereign AI โดยตรง |
| H11 Time-Series/Predictive | แข็งแรง | 132-303/304/306, 135-305/317 | ลดวิชาเกษตรที่ซ้ำ และใช้หนึ่งวิชา Farm Data Intelligence |
| H12 Big Data/Streaming | แข็งแรง | 131-207, 135-331 | แยกระดับพื้นฐานกับ advanced streaming/platform ให้ชัด |
| H13 RL/Optimization/OR | ปานกลาง | 132-303, 135-319/328 | ทำ Decision Intelligence & Optimization เป็นแกนร่วม EN-132 |
| H14 Data-Centric AI/Annotation | ปานกลาง | 131-207, project | เพิ่ม dataset specification, labeling QA และ data lineage ใน AI Core/Capstone |
| H15 Sustainable/Green AI | ปานกลาง | 001-123, 131-205, 135-315/330 | กำหนด energy/cost/carbon metric ใน Project และวิชา Track |
| H16 Precision Agriculture/Agri-food | แข็งแรงแต่ซ้ำ | 132-304/305, 135-301/302/305/309/310/312 | คง 132-304/305 เป็น Track required; ควบรวม electives ที่ซ้ำ |
| H17 Smart Manufacturing/Quality/MES | ปานกลาง | 132-306/307, 135-320/328/329 | ขยาย 132-306 ให้มี MES, OEE, SPC, Lean/Six Sigma |
| H18 Maintenance/Reliability/Asset | ปานกลาง | 132-306, 135-317 | เลื่อน 135-317 เป็น Track required และเพิ่ม RCA/FMEA/CMMS/EAM/RUL |
| H19 BI/DSS/Decision Intelligence | ปานกลาง | 131-207, 132-303, 135-319 | ทำ 132-303 เป็นแกน Decision Intelligence; 135-319 เป็น advanced DSS/OR |
| H20 Architecture/Integration/Digital Services | ปานกลาง–อ่อน | 132-302/308, 131-205/208, 135-334 | เพิ่ม Enterprise Architecture, IAM, ITSM, DR, UAT, change และ handover |

## 4. Coverage อาชีพ C01–C17: เดิมเทียบข้อเสนอ

| อาชีพ | เดิม | ช่องว่างเดิม | หลังปรับ |
|---|:---:|---|:---:|
| C01 AI/ML Engineer | แข็งแรง | Research/MLOps production depth ขึ้นกับ elective | แข็งแรง |
| C02 AI Application/Solutions | ปานกลาง | Requirements, architecture, UAT, adoption ไม่เป็นเจ้าภาพชัด | แข็งแรง |
| C03 Smart Agriculture & IoT | แข็งแรงแต่ซ้ำ | หลายวิชาซ้ำ Precision Ag/UAV/Farm Analytics | แข็งแรงและกระชับ |
| C04 Automation & Control | แข็งแรง | Instrumentation/DCS เป็น elective | แข็งแรงตาม T2 |
| C05 Robotics/System Integration | ปานกลาง–แข็งแรง | Robotics depth และ integration test ขึ้นกับ elective | แข็งแรงตาม T2/T1 |
| C06 AI Software/Application | ปานกลาง | Backend/API มี แต่ frontend/testing/service operations ยังบาง | แข็งแรงตาม T3 |
| C07 Data Engineer | แข็งแรง | Advanced platform/cloud architecture เป็น elective | แข็งแรงตาม T3 |
| C08 AI Innovator | ปานกลาง | Product discovery ซ้ำหลายวิชา แต่ delivery/adoption ไม่ครบ | แข็งแรงตาม T3 |
| C09 Technology/AI Entrepreneur | ปานกลาง | Venture validation/fundraising เป็น elective | แข็งแรงเมื่อเลือก Venture Studio |
| C10 AI Researcher | ปานกลาง | ไม่มีวิชา AI research/reproducible experimentation โดยตรง | แข็งแรงเมื่อเลือก Research elective |
| C11 Government/Digital Technology | อ่อน | ITSM, IAM, backup/DR, e-Service, procurement/vendor ไม่ชัด | ปานกลาง–แข็งแรงตาม T3 |
| C12 Data Scientist/Analyst | ปานกลาง–แข็งแรง | BI/Excel/DSS ไม่ใช่แกนชัด | แข็งแรง |
| C13 AI Smart Factory | ปานกลาง | MES/ERP/IIoT/quality กระจาย | แข็งแรงตาม T2 |
| C14 AI Process/Production | ปานกลาง | Process Engineering, Lean, Six Sigma, OEE ยังบาง | แข็งแรงตาม T2 |
| C15 DSS Specialist | ปานกลาง | อยู่ใน elective 135-319 เป็นหลัก | แข็งแรงด้วยแกน 132-303 |
| C16 AI Maintenance | ปานกลาง | Reliability/CMMS/FMEA ไม่ครบ | แข็งแรงตาม T2 |
| C17 AI Industrial Engineer | ปานกลาง | Industrial data + process/decision integration ไม่เป็น pathway | แข็งแรงตาม T2 |

> [!note]
> “แข็งแรงหลังปรับ” หมายถึงผู้เรียนที่เลือก Track/pathway ตามกติกา ไม่ได้หมายความว่านักศึกษาทุกคนต้องเชี่ยวชาญทั้ง 17 อาชีพ

## 5. โครงสร้างเสนอใหม่ โดยคง 130 หน่วยกิต

### 5.1 เปรียบเทียบโครงสร้าง

| หมวด | เดิม | เสนอใหม่ | ผลต่าง |
|---|---:|---:|---:|
| ศึกษาทั่วไป | 24 | 24 | 0 |
| Engineering Fundamentals/Workshop | 24 | 24 | 0 |
| AI Core EN-131 | 24 | 24 | 0 |
| EN-132 จำนวน 24 นก. | 8 วิชาที่สถานะไม่ชัด | แกนร่วม 4 + บังคับ Track 4 | 0 |
| Electives | 15 เลือกอิสระจาก 45 | 15 ตาม basket rule | 0 |
| Project/Seminar | 6 | 6 | 0 |
| Co-op | 7 | 7 | 0 |
| Free Elective | 6 | 6 | 0 |
| **รวม** | **130** | **130** | **0** |

### 5.2 แกนร่วมข้าม Track 4 วิชา / 12 หน่วยกิต

> รายละเอียดชื่อไทย–อังกฤษ ขอบเขต ผลงานบังคับ ลำดับเรียน และพื้นฐานเฉพาะแต่ละ Track ดู [[13_Common_Core_and_Track_Foundation_4plus4|ข้อเสนอ Common Core และ Track Foundation แบบ 4+4]]

| รหัสเดิม   | ชื่อเดิม                                | ชื่อ/ขอบเขตเสนอใหม่                                                                                                                                 | Skills/Careers                     |
| ---------- | --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| EN-132-201 | AI Business and Product Design          | **AI Product, Requirements and Solution Design** — problem discovery, requirements, architecture concept, prototype, feasibility, acceptance/change | H20, S6, S8–S10 · C02/C08/C09      |
| EN-132-203 | AI for Production and Supply Chain      | **Decision Intelligence and Operations Analytics** — BI/DSS, forecasting, scenario, simulation, optimization/OR, decision communication             | H3, H11, H13, H19 · C12/C15/C17    |
| EN-132-301 | Software Development and AI Engineering | **AI Software, Solution Architecture and Integration** — backend/API, full-stack, integration, testing, CI/CD, observability, handover              | H2, H4, H20, S10 · C02/C06/C07/C11 |
| EN-132-304 | Agentic AI Systems                      | **Generative and Agentic AI Systems** — LLM/RAG/agents/tool use, evaluation, security, cost/latency                                                 | H6, H7, H10, H20 · C01/C02/C06     |

### 5.3 วิชาบังคับเฉพาะ Track 4 วิชา / 12 หน่วยกิต

#### T1 เกษตรอัจฉริยะ

| สถานะ          | รายวิชาเสนอ                                                 | แหล่งจากวิชาเดิม          | Skill หลัก        |
| -------------- | ----------------------------------------------------------- | ------------------------- | ----------------- |
| คง/ปรับ        | Smart Farming and Precision Agriculture                     | 132-304                   | H9, H11, H16      |
| คง/ปรับ        | UAV, Remote Sensing and GeoAI for Agriculture               | 132-305                   | H8, H16           |
| เลื่อนจากเลือก | Agricultural Robotics and Automation Studio                 | 135-311                   | H5, H9, H16       |
| ควบรวม         | Agri-food Data, Traceability and Farm Decision Intelligence | 135-305 + 109 + 110 + 113 | H3, H11, H16, H19 |

#### T2 ปัญญาประดิษฐ์ภาคอุตสาหกรรม

| สถานะ          | รายวิชาเสนอ                                                       | แหล่งจากวิชาเดิม          | Skill หลัก    |
| -------------- | ----------------------------------------------------------------- | ------------------------- | ------------- |
| ปรับมาก        | Smart Manufacturing, MES, Digital Twin and Quality                | 132-306                   | H5, H17, H19  |
| คง/ปรับ        | Industrial Automation, Control and Robotics                       | 132-307                   | H5, H9, H17   |
| เลื่อนจากเลือก | Maintenance, Reliability and Asset Intelligence                   | 135-317                   | H11, H18      |
| ยกระดับแยกเจ้าภาพ | Advanced Operations Research and Industrial Optimization + Lean and AI-Enabled Process Improvement | 135-319 + 135-328 | H13, H17, H19 |

#### T3 นวัตกรรมปัญญาประดิษฐ์ระดับองค์กร

| สถานะ | รายวิชาเสนอ | แหล่งจากวิชาเดิม | Skill หลัก |
|---|---|---|---|
| เลื่อนจากเลือก | Advanced Data Engineering and Analytics Platforms | 135-331 | H3, H12, H14 |
| ควบรวม/ขยาย | Cloud-native Enterprise Architecture and Digital Services | 135-334 + H20 ใหม่ | H4, H20 |
| ควบรวม | AI Quality, Security and Governance Engineering | 135-333 + 135-345 | H7, S10 |
| ควบรวม | AI Product Delivery, UX and Change Management | 135-335 + 135-341 + 135-343 | H20, S6, S8–S10 |

## 6. การปรับ AI Core และ Engineering Foundation โดยไม่เพิ่มวิชา

| รายวิชาเดิม | ปรับเนื้อหาที่เสนอ | เหตุผลจากตลาด |
|---|---|---|
| EN-001-128 Programming Fundamentals | เพิ่ม data structures, Git, testing, SQL/API basics | Python/SQL/API/testing เป็นฐาน C01/C06/C07 |
| EN-131-101 Introduction to AI | เพิ่ม research literacy, AI limitations, governance baseline | รองรับ C10 และ Responsible AI |
| EN-131-207 Cloud and MLOps | เพิ่ม observability, SLO, service reliability, cost, runbook | Cloud/CI-CD/operations เด่นใน C01/C06/C07 |
| EN-131-203 Data Engineering | เพิ่ม data modeling, BI semantic layer, data quality/lineage | C07/C12/C15 |
| EN-131-208 AI Infrastructure and Networks | เพิ่ม IAM, backup/DR, enterprise security และ IT service concepts | ปิด gap C11/H20 |

## 7. วิชาเลือกเสนอใหม่: Active Pool 24 วิชา

ให้เปิด Active Pool 8 วิชาต่อ Track และทบทวนทุกปี แทนการเปิดทั้ง 48 วิชาพร้อมกัน ส่วนวิชาที่พักไว้เก็บเป็น rotating special topics เมื่อมีอาจารย์และทรัพยากรพร้อม

### 7.1 T1 Smart Agriculture — 8 วิชา

| วิชาเสนอ | ดำเนินการจากของเดิม |
|---|---|
| Smart Irrigation and Water Intelligence | คง 135-301 แต่ตัดเนื้อหา Precision Ag ที่ซ้ำกับ Track Core |
| Advanced GIS and Spatial AI for Agriculture | คง/ยกระดับ 135-303; ไม่ซ้ำการบิน UAV |
| Postharvest Quality, Storage and Traceability | คง/ขยาย 135-304 |
| Controlled Environment and Vertical Farming | คง 135-306 |
| Smart Livestock and Animal Analytics | คง 135-307 |
| Smart Agricultural Supply Chain and Market Intelligence | คง 135-313 |
| AI in Agricultural Biotechnology | คง 135-314 |
| Climate Risk and Sustainable Agriculture with AI | คง 135-315 |

วิชาที่ควบรวม/ยุติความซ้ำ:

- 135-302 → รวมใน 132-304
- 135-305/309/310 → รวมเป็น Track-required Agri-food Data and Decision Intelligence
- 135-312 UAV → รวมใน 132-305
- ตรวจและแก้ชื่อ/รหัส 135-312–315 ใน Course Index ให้ตรงกับไฟล์คำอธิบาย

### 7.2 T2 Industrial AI — 9 วิชา

| วิชาเสนอ | ดำเนินการจากของเดิม |
|---|---|
| Advanced Process Control and Distributed Control Systems | ยกระดับ 135-316 ต่อจาก EN-132-303/201 |
| Smart Warehouse, AGV and Material Handling | รวม 135-318 + 135-326 |
| Advanced Operations Research and Industrial Optimization | เปลี่ยน 135-319 เพื่อลดความซ้ำกับ EN-132-203 |
| Agro-industrial Process, Food Quality and Safety | ปรับ 135-320 |
| Rice–Sugar–Cassava Industrial AI Studio | รวม 135-321/322/323 เป็น rotating case studio |
| Motion Control and Collaborative Robot Cell Engineering | ยกระดับ 135-327 ต่อจาก EN-132-303 |
| Lean and AI-Enabled Process Improvement | เปลี่ยน 135-328 ต่อจาก EN-132-303 |
| Industrial Computer Vision and Automated Quality | คง/เพิ่ม SPC integration ใน 135-329 |
| Smart Energy, Thermal Process and Sustainable Factory | รวม 135-325 + 135-330 |

วิชาที่ควบรวม/ย้าย:

- 135-317 → เลื่อนเป็น Track required H18
- 135-328 → คงเป็นวิชาเลือกเชิงลึกด้าน Lean Six Sigma, OEE และ Process Improvement
- 135-324 → รวมกับ Smart Warehouse/Postharvest ตามเจ้าภาพ Track

### 7.3 T3 Enterprise AI Innovation — ปรับความลึกของวิชาเลือก

| รหัส | รายวิชาปรับใหม่ | ความซ้ำเดิม | ความลึกและช่องว่างที่ปิด |
|---|---|---|---|
| EN-135-335 | Advanced Large Language Models | Generative AI, RAG และผู้ช่วยเสมือนซ้ำ EN-132-304 | การปรับตัวแบบแบบประหยัดพารามิเตอร์ การบีบอัด การประเมิน และการเพิ่มประสิทธิภาพการอนุมาน |
| EN-135-336 | AI Reliability and Safety | การทดสอบหน่วย/ระบบและ QA ซ้ำ EN-132-301 | uncertainty, calibration, OOD, adversarial robustness, red teaming, safety case และ model drift |
| EN-135-337 | Enterprise AI Architecture | microservices, container และ cloud deployment ซ้ำ EN-132-301/EN-131-207 | การบูรณาการ ERP/CRM/legacy, event-driven architecture, zero trust, HA/DR, FinOps และ architecture decisions |
| EN-135-343 | AI Venture Creation | discovery, business model และ MVP ซ้ำ EN-132-201 | commercialization, pricing, unit economics, B2B sales, procurement, licensing, fundraising และ scaling |
| EN-135-346 | AI Product Management | design thinking และ product design ซ้ำ EN-132-201 | roadmap, backlog, product/model metrics, A/B testing, adoption, lifecycle และ evidence-based product decisions |
| EN-135-348 | AI Governance and Risk | จริยธรรมและกฎหมายเบื้องต้นซ้ำแกน AI และ PLO4 | AI inventory, risk tiering, impact assessment, third-party risk, audit evidence, monitoring และ incident governance |

รายวิชาที่ยังคงไว้เพราะเป็นความเชี่ยวชาญเฉพาะทางและไม่ซ้ำวิชาแกนโดยตรง:

- EN-135-334 Advanced Data Engineering and Data Pipelines
- EN-135-338 UX/UI Design for Intelligent Systems
- EN-135-339/340 Healthcare AI and Medical Image Analysis
- EN-135-341/342 Financial AI and Predictive Finance
- EN-135-344 Intelligent Software Project Management
- EN-135-345 Business Development and Digital Marketing with AI
- EN-135-347 Virtual Reality Technology and Artificial Intelligence

ข้อเสนอระยะถัดไป: หากต้องลดจำนวนวิชาเลือก ให้รวม EN-135-339/337 เป็น Healthcare AI Studio และ EN-135-341/339 เป็น Financial Decision AI Studio โดยไม่ลดความลึกของผลงานปฏิบัติ

## 8. Basket Rule สำหรับวิชาเลือก 15 หน่วยกิต

นักศึกษาเลือก 5 วิชาตามกติกา:

| Basket | จำนวน | วัตถุประสงค์ |
|---|---:|---|
| A: Career Depth ใน Track ตนเอง | 3 วิชา | ทำให้ถึง L4 ในอาชีพเป้าหมาย |
| B: Cross-track/System Integration | 1 วิชา | ป้องกันความเชี่ยวชาญแยกส่วน |
| C: Emerging/Research/Venture/Governance | 1 วิชา | รองรับ C09/C10 และเทคโนโลยีใหม่ |

ตัวอย่าง pathway:

| เป้าหมายอาชีพ | Track | Elective package แนะนำ |
|---|---|---|
| C03 Smart Agriculture/IoT | T1 | Irrigation + Spatial AI + Climate/Supply Chain |
| C04/C05 Automation/Robotics | T2 | Instrumentation + Robotics/Drives + Warehouse/AGV |
| C13/C14/C17 Smart Factory/Industrial AI | T2 | DSS/OR + Industrial CV/Quality + Process Studio |
| C16 Maintenance/Reliability | T2 | Instrumentation + Smart Energy/Thermal + Research/Analytics |
| C01/C06/C07 AI Software/Data | T3 | Advanced LLM + Research/Data pathway + Enterprise cross-track |
| C08/C09 AI Product/Entrepreneur | T3 | Venture Studio + Business Growth + UX/Product cross-track |
| C10 AI Researcher | ทุก Track | AI Research + domain elective + Advanced LLM/Spatial/Industrial CV |
| C11 Digital Technology Specialist | T3 | Enterprise Architecture required + Governance + cross-track DSS |
| C12/C15 Data/DSS | T3/T2 | Research/Analytics + DSS/OR + domain decision elective |

## 9. เปรียบเทียบรายวิชาเดิมกับการตัดสินใจเสนอ

| การตัดสินใจ | รายวิชาเดิม | เหตุผล |
|---|---|---|
| **คง** | AI Math, ML/DL, CV, IoT/Edge, Data Engineering, Cloud/MLOps | เป็นแกนตลาด C01/C06/C07/C12 |
| **ปรับชื่อ/ขอบเขต** | 132-302, 132-303, 132-306, 132-308 | เพิ่ม requirements, DSS, MES/quality, architecture/integration |
| **เลื่อนเป็น Track required** | 135-311, 135-317, 135-331, 135-333/345, 135-334 | เป็น Skill สำคัญที่ pathway ต้องรับประกัน |
| **ควบรวม** | 135-305/309/310, 118/126, 121/122/123, 125/130, 136/137, 138/139, 135/141/143 | ลดเนื้อหาซ้ำและลดภาระ staffing/lab |
| **รวมเข้าวิชาแกน** | 135-302 → 132-304; 135-312 → 132-305 | ซ้ำกับวิชาบังคับโดยตรง |
| **เพิ่มใหม่** | Thai NLP; AI Research; Enterprise Digital Services content | ปิด H10, C10 และ C11/H20 |
| **Rotating/Watchlist** | Biotechnology, Healthcare, Finance, XR และ domain studio | เปิดตามอาจารย์/พันธมิตร/ทรัพยากร ไม่ใช้รับประกันแกน |

## 10. สิ่งที่ต้องตัดสินใจก่อนแก้เล่มหลักสูตรจริง

1. ยืนยันว่า EN-132 จะใช้โครงสร้าง **4 common + 4 track-required**
2. ยืนยัน active elective pool และ basket rule
3. กำหนดรหัสวิชาใหม่ โดยแยก prefix elective ออกจาก EN-135-401/402
4. แก้ Course Index ให้ตรงกับไฟล์คำอธิบาย โดยเฉพาะ EN-135-312–315
5. จัดทำคำอธิบายไทย–อังกฤษและ CLO ใหม่สำหรับวิชาที่ควบรวม/เลื่อน
6. จัดทำ prerequisite map และตรวจภาระหน่วยกิตรายภาค
7. กำหนดอาจารย์/ห้องปฏิบัติการเจ้าภาพของ Track-required ทุกวิชา
8. ทำ Curriculum Mapping ใหม่หลังคณะกรรมการอนุมัติรายชื่อวิชา
9. กำหนด Skill Transcript rubric โดย H16–H20 ถึง L4 ตาม Track และ S9/S10 เป็นหลักฐานบังคับทุกคน

## 11. ลำดับการดำเนินงานที่แนะนำ

| ระยะ | งาน | ผลลัพธ์ |
|---|---|---|
| 1 | คณะกรรมการอนุมัติโครงสร้าง 4+4 และ basket rule | โครงสร้างนิ่ง |
| 2 | ยืนยันรายชื่อวิชาควบรวม/เลื่อน/ยกเลิก | Course inventory ใหม่ |
| 3 | เขียนคำอธิบายและ CLO ของ 12 Track-required + 24 active electives | Course specification |
| 4 | ทำ prerequisite, study plan และ workload | แผน 8 ภาค |
| 5 | ทำ PLO/CLO/H-S/AISK mapping และ Rubric ใหม่ | Constructive alignment |
| 6 | ตรวจด้วย advisory board/ผู้ใช้บัณฑิต | External validation |

> [!warning] สถานะข้อเสนอ
> เอกสารนี้เป็นข้อเสนอเชิงวิเคราะห์ ไม่ได้เปลี่ยนรายวิชาทางการหรือหน่วยกิตที่อนุมัติ การควบรวม เลื่อน หรือยกเลิกรายวิชาต้องผ่านมติคณะกรรมการหลักสูตรและตรวจทรัพยากรผู้สอน/ห้องปฏิบัติการก่อน

---

เอกสารประกอบ: [[../03_OBE_PLO_Design_2570/03_Target_Skills|Target Skills]] · [[11_Skill_Set_Matrix_and_KSA|Skill Set Matrix/KSA]] · [[../03_OBE_PLO_Design_2570/07_Curriculum_PLO_Mapping|Curriculum–PLO Mapping]] · [[10_Course_Learning_Outcomes_CLO_Mapping|CLO Mapping]] · [[../07_JobsDB_Semantic_Career_Analysis/09_Career_Top_Skills_Summary|JobsDB Career Top Skills]]
