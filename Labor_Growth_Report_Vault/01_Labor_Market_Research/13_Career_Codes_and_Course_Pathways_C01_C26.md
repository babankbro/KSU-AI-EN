# รหัสอาชีพและเส้นทางรายวิชา C01–C26

> ฉบับปรับปรุง: 30 กรกฎาคม 2569  
> ใช้เป็นรายการมาตรฐานร่วมของ Vault และหน้า `curriculum-graph/careers`

## 1. หลักการกำหนดรหัส

- **C01–C17 — กลุ่มอาชีพฐานตลาดแรงงาน:** มีเกณฑ์จำแนกและหลักฐานประกาศงานจาก JobsDB โดยใช้ `classifiedMatches`
- **C18–C26 — อาชีพต่อยอดของหลักสูตร:** แยกจาก C01–C17 เพราะมีบทบาท ผลงานสะสม และเส้นทางวิชาเฉพาะชัดเจน แต่ **ยังไม่นำไปรวมจำนวนงานหรือ Top Skills ของ JobsDB** จนกว่าจะจำแนกข้อมูลรอบใหม่
- ไม่สร้างรหัสใหม่ให้บทบาทที่มีความหมายซ้ำเดิม เช่น ผู้ประกอบการเทคโนโลยียังคงเป็น **C09** และวิศวกรหุ่นยนต์/บูรณาการระบบอุตสาหกรรมยังคงเป็น **C05**
- รหัสอาชีพแสดง “เส้นทางเตรียมความพร้อม” ไม่ได้หมายความว่าผู้สำเร็จการศึกษาจะเริ่มงานในระดับผู้จัดการหรือผู้เชี่ยวชาญอาวุโสทันที

## 2. อาชีพต่อยอด C18–C26

| รหัส | อาชีพภาษาไทย | English title | ต่อยอดจาก | Track |
|---|---|---|---|---|
| C18 | วิศวกรระบบตรวจวัดและควบคุมฟาร์มอัจฉริยะ | Smart Farm Sensing and Control Engineer | C03 | T1 |
| C19 | วิศวกรระบบอัตโนมัติและหุ่นยนต์เพื่อการเกษตร | Agricultural Automation and Robotics Engineer | C03/C05 | T1 |
| C20 | วิศวกรอากาศยานไร้คนขับและภูมิสารสนเทศเพื่อการเกษตร | Agricultural UAV and GeoAI Engineer | C03 | T1 |
| C21 | นักวิเคราะห์ข้อมูลและระบบสนับสนุนการตัดสินใจทางการเกษตร | Agricultural Data and Decision Support Specialist | C03/C15 | T1 |
| C22 | วิศวกรโครงการและติดตั้งระบบอัจฉริยะ | Intelligent Systems Project and Implementation Engineer | C02 | ทุก Track |
| C23 | วิศวกรบูรณาการระบบอัจฉริยะ | Intelligent Systems Integration Engineer | C02/C05 | ทุก Track |
| | *ขอบเขตครอบคลุมบทบาท “ผู้ดูแลระบบในภาพรวมของโรงงาน” (Plant Systems Integrator / OT System Owner) ตามข้อเสนอผู้มีส่วนได้ส่วนเสียรอบที่ 2 · ดู [[../05_TQF2_Academic_Drafts/17_Stakeholder_Feedback_Round2_and_Action_Plan\|ข้อเสนอแนะรอบที่ 2]]* | | | |
| C24 | ที่ปรึกษาโซลูชันปัญญาประดิษฐ์และการเปลี่ยนผ่านสู่ดิจิทัล | AI Solutions and Digital Transformation Consultant | C02/C08 | ทุก Track |
| C25 | นักวิเคราะห์ธุรกิจอัจฉริยะและการตัดสินใจ | Business Intelligence and Decision Analyst | C12/C15 | ทุก Track |
| C26 | นักวิเคราะห์ผลิตภัณฑ์และผู้ประสานงานโครงการปัญญาประดิษฐ์ | AI Product and Project Analyst | C08/C09 | T3 |

## 3. โครงสร้างเส้นทางรายวิชา

ทุกเส้นทางอ่านจากซ้ายไปขวา:

**พื้นฐานวิศวกรรม → แกนปัญญาประดิษฐ์ → แกนบูรณาการ/เฉพาะบริบท → วิชาเลือกสร้างความเชี่ยวชาญ → โครงงานและสหกิจศึกษา**

รายวิชาที่ระบุเป็น “วิชาเลือกแนะนำ” คือชุดวิชาสำหรับสร้างความลึกและ Portfolio ของอาชีพนั้น นักศึกษายังต้องปฏิบัติตามโครงสร้างหน่วยกิตและเงื่อนไขวิชาบังคับก่อนของหลักสูตร

## 4. Track 1 — เกษตรอัจฉริยะ

| รหัสและอาชีพ | พื้นฐานวิศวกรรม | แกน AI | แกนบูรณาการ/เฉพาะบริบท | วิชาเลือกแนะนำ | หลักฐานปลายทาง |
|---|---|---|---|---|---|
| **C03 วิศวกรเกษตรอัจฉริยะและไอโอที** | EN-001-122 Programming; EN-001-125 ไฟฟ้าและอิเล็กทรอนิกส์ | EN-131-205 IoT/Edge; EN-131-204 Data Engineering | EN-132-303 Smart Agriculture; EN-132-201 Sensing & Actuation | EN-135-301 ชลประทาน; EN-135-309 ML เซนเซอร์ฟาร์ม | EN-134-403 ระบบ sensor–edge–cloud–control และ EN-135-402 |
| **C18 วิศวกรระบบตรวจวัดและควบคุมฟาร์มอัจฉริยะ** | EN-001-125; EN-001-129 Workshop 2 | EN-131-205 IoT/Edge | EN-132-201 Sensing & Actuation; EN-132-303 Smart Agriculture | EN-135-301 ชลประทาน; EN-135-309 ML เซนเซอร์ฟาร์ม | ระบบตรวจวัดและควบคุมน้ำ/สภาพแวดล้อมที่ทดสอบหน้างาน |
| **C19 วิศวกรระบบอัตโนมัติและหุ่นยนต์เพื่อการเกษตร** | EN-001-121 CAD; EN-001-125; EN-001-230 Workshop 3 | EN-131-206 Computer Vision; EN-131-205 IoT/Edge | EN-132-201 Sensing & Actuation; EN-132-307 Autonomous Agriculture | EN-135-311 หุ่นยนต์เกษตร | หุ่นยนต์หรือระบบอัตโนมัติที่มี perception, control และ safety test |
| **C20 วิศวกรอากาศยานไร้คนขับและภูมิสารสนเทศเพื่อการเกษตร** | EN-001-126 สถิติ; EN-001-122 Programming | EN-131-206 Computer Vision | EN-132-307 Autonomous Agriculture | EN-135-303 GIS เกษตร; EN-135-312 UAV/Remote Sensing | แผนการบิน ชุดข้อมูลภาพ แผนที่/GeoAI และการประเมินความถูกต้อง |
| **C21 นักวิเคราะห์ข้อมูลและระบบสนับสนุนการตัดสินใจทางการเกษตร** | EN-001-227 เศรษฐศาสตร์วิศวกรรม; EN-001-126 สถิติ | EN-131-203 ML/DL; EN-131-204 Data Engineering | EN-132-202 Decision/Supply Chain; EN-132-303 Smart Agriculture | EN-135-305 พยากรณ์ฟาร์ม; EN-135-313 ห่วงโซ่อุปทานเกษตร | แบบพยากรณ์/สถานการณ์และ dashboard ที่อธิบายข้อเสนอเชิงตัดสินใจ |

## 5. Track 2 — ปัญญาประดิษฐ์ภาคอุตสาหกรรม

| รหัสและอาชีพ | พื้นฐานวิศวกรรม | แกน AI | แกนบูรณาการ/เฉพาะบริบท | วิชาเลือกแนะนำ | หลักฐานปลายทาง |
|---|---|---|---|---|---|
| **C04 วิศวกรระบบควบคุมและอัตโนมัติ** | EN-001-121 CAD; EN-001-125; EN-001-230 Workshop 3 | EN-131-205 IoT/Edge; EN-131-208 AI Infrastructure | EN-132-304 Industrial Robotics; EN-132-201 Sensing & Actuation | EN-135-316 Advanced Process Control/DCS | PLC/HMI/SCADA/DCS พร้อม loop test, alarm และ acceptance test |
| **C05 วิศวกรหุ่นยนต์และบูรณาการระบบ** | EN-001-121; EN-001-123; EN-001-230 | EN-131-206 Computer Vision; EN-131-205 IoT/Edge | EN-132-304 Industrial Robotics; EN-132-201 Sensing & Actuation | EN-135-327 Motion/Cobot Cell; EN-135-326 ขนถ่ายวัสดุ | Cobot cell พร้อม motion tuning, risk assessment, integration และ acceptance test |
| **C13 วิศวกรโรงงานอัจฉริยะด้วยปัญญาประดิษฐ์** | EN-001-125; EN-001-230 | EN-131-205 IoT/Edge; EN-131-204 Data Engineering | EN-132-304 Smart Manufacturing; EN-132-304; EN-132-201 | EN-135-316 Advanced Control; EN-135-327 Motion/Cobot Cell | OT–IT/IIoT–MES/DCS architecture พร้อม KPI การผลิต |
| **C14 วิศวกรปัญญาประดิษฐ์ด้านกระบวนการและการผลิต** | EN-001-227; EN-001-126; EN-001-124 ความร้อนและของไหล | EN-131-203 ML/DL; EN-131-204 Data Engineering | EN-132-202 Decision/Supply Chain; EN-132-304 Smart Manufacturing | EN-135-319 Advanced OR; EN-135-320 กระบวนการเกษตรแปรรูป; EN-135-328 Lean Six Sigma | DMAIC/optimization studio ที่วัด KPI ผลผลิต คุณภาพ พลังงานหรือต้นทุนก่อน–หลัง |
| **C16 วิศวกรซ่อมบำรุงด้วยปัญญาประดิษฐ์** | EN-001-126; EN-001-125; EN-001-129 | EN-131-206/204/206 | EN-132-304 Smart Manufacturing; EN-132-201 Sensing & Actuation | EN-135-316 Advanced Control; EN-135-317 Predictive Maintenance | Condition monitoring, failure prediction และ maintenance recommendation |
| **C17 วิศวกรปัญญาประดิษฐ์อุตสาหกรรม** | EN-001-126; EN-001-125; EN-001-230 | EN-131-206/204/206/207 | EN-132-202; EN-132-304; EN-132-304; EN-132-201 | EN-135-319 Advanced OR; EN-135-327 Motion/Cobot Cell; EN-135-328 Lean Six Sigma; EN-135-329 Machine Vision | ระบบ AI อุตสาหกรรมแบบครบวงจรที่วัด KPI ก่อน–หลัง |

## 6. Track 3 — นวัตกรรมปัญญาประดิษฐ์ระดับองค์กร

| รหัสและอาชีพ | พื้นฐานวิศวกรรม | แกน AI | แกนบูรณาการ/เฉพาะบริบท | วิชาเลือกแนะนำ | หลักฐานปลายทาง |
|---|---|---|---|---|---|
| **C01 วิศวกร AI/ML** | EN-001-126; EN-001-122 | EN-131-102 คณิตศาสตร์ AI; EN-131-203 ML/DL; EN-131-207 Cloud/MLOps; EN-131-204 Data Engineering | EN-132-305 Software & AI Engineering; EN-132-306 Agentic AI | EN-135-334; EN-135-335; EN-135-337 | End-to-end ML service พร้อม evaluation, API, deployment และ monitoring |
| **C06 วิศวกรซอฟต์แวร์และแอปพลิเคชัน AI** | EN-001-122 | EN-131-207 Cloud/MLOps; EN-131-204 Data Engineering | EN-132-305 Software & AI Engineering; EN-132-306 Agentic AI | EN-135-335 Advanced LLM; EN-135-336 AI Reliability/Safety; EN-135-337 Enterprise AI Architecture | AI application พร้อม evaluation, integration, security, reliability และ observability |
| **C07 วิศวกรข้อมูล** | EN-001-126; EN-001-122 | EN-131-204 Data Engineering; EN-131-207 Cloud/MLOps | EN-132-305 Software & AI Engineering | EN-135-334 Advanced Data Engineering; EN-135-337 Enterprise AI Architecture | ETL/ELT pipeline พร้อม data quality, lineage, orchestration และ enterprise integration |
| **C08 นักออกแบบและสร้างนวัตกรรม AI** | EN-001-227; EN-001-122 | EN-131-101 Intro AI; EN-131-203 ML/DL | EN-132-201 AI BI/Product; EN-132-305; EN-132-306 | EN-135-338 UX/UI; EN-135-343 AI Venture; EN-135-346 AI Product Management | Product discovery, prototype, experiment, adoption และ value/KPI validation |
| **C09 ผู้ประกอบการเทคโนโลยีและ AI** | EN-001-227; GE-020-008 ธุรกิจดิจิทัล | EN-131-101 Intro AI | EN-132-201 AI BI/Product; EN-132-202 Decision/Supply Chain | EN-135-343; EN-135-345; EN-135-346 | Problem–solution fit, prototype, business model และ go-to-market evidence |
| **C26 นักวิเคราะห์ผลิตภัณฑ์และผู้ประสานงานโครงการ AI** | EN-001-227; EN-001-122 | EN-131-101; EN-131-204 | EN-132-201 AI BI/Product; EN-132-305 Software & AI Engineering | EN-135-338 UX/UI; EN-135-344 Project Management; EN-135-346 AI Product Management | Product brief, roadmap, backlog, experiment, metrics, risk register และ delivery review |

## 7. อาชีพข้ามทุก Track

| รหัสและอาชีพ | พื้นฐานวิศวกรรม | แกน AI | แกนบูรณาการ | วิชาเลือกแนะนำ | หลักฐานปลายทาง |
|---|---|---|---|---|---|
| **C02 วิศวกรประยุกต์และโซลูชัน AI** | EN-001-122; EN-001-230 | EN-131-207; EN-131-204 | EN-132-201; EN-132-305; EN-132-306 | EN-135-336/334/341 หรือวิชาเลือกโดเมน | Requirement, architecture, prototype, integration และ acceptance test |
| **C10 นักวิจัย AI และระบบอัจฉริยะ** | EN-001-126; EN-001-122 | EN-131-102; EN-131-203 และแกน AI ตามหัวข้อ | Core Track ตามโดเมนวิจัย | วิชาเลือกเชิงลึกตามหัวข้อ | EN-134-201/302/303/404 พร้อมโจทย์วิจัย การทดลอง และผลที่ทำซ้ำได้ |
| **C11 นักเทคโนโลยีดิจิทัลภาครัฐ** | EN-001-227; EN-001-122 | EN-131-207; EN-131-208 | EN-132-201; EN-132-202; EN-132-305 | EN-135-348 AI Governance and Risk | Digital service พร้อม risk classification, governance, security, procurement และ service handover |
| **C12 นักวิทยาศาสตร์ข้อมูล/นักวิเคราะห์ข้อมูล** | EN-001-126; EN-001-122 | EN-131-102; EN-131-203; EN-131-204 | EN-132-202 Decision/Supply Chain | EN-135-319 Advanced OR; EN-135-334 | Data analysis/model/optimization พร้อมการตีความและข้อเสนอ |
| **C15 ผู้เชี่ยวชาญระบบสนับสนุนการตัดสินใจ** | EN-001-227; EN-001-126 | EN-131-203; EN-131-204 | EN-132-201; EN-132-202 | EN-135-319 Advanced OR; EN-135-334 | Forecast, scenario, simulation/optimization และ decision interface |
| **C22 วิศวกรโครงการและติดตั้งระบบอัจฉริยะ** | EN-001-227; EN-001-122; Workshop ตามโดเมน | EN-131-101; EN-131-207 | EN-132-201; EN-132-305 | EN-135-344 และวิชาเลือกโดเมน | EN-134-302/404 + EN-135-402 พร้อมแผนโครงการ ความเสี่ยง UAT และส่งมอบ |
| **C23 วิศวกรบูรณาการระบบอัจฉริยะ** | EN-001-122; EN-001-125; EN-001-230 | EN-131-205; EN-131-207; EN-131-208 | EN-132-305; EN-132-201 และ Core Track โดเมน | EN-135-336 และวิชาเลือก integration ของโดเมน | ระบบ data–device–control–API–AI พร้อม integration/acceptance test |
| **C24 ที่ปรึกษาโซลูชัน AI และการเปลี่ยนผ่านสู่ดิจิทัล** | EN-001-227; EN-001-122 | EN-131-101; EN-131-204 | EN-132-201; EN-132-202; EN-132-305 | EN-135-343; EN-135-345 | Current-state/gap analysis, roadmap, business case และ solution proposal |
| **C25 นักวิเคราะห์ธุรกิจอัจฉริยะและการตัดสินใจ** | EN-001-227; EN-001-126; EN-001-122 | EN-131-203; EN-131-204 | EN-132-202 Decision/Supply Chain | EN-135-319 Advanced OR; EN-135-334 Advanced Data Engineering | KPI model, semantic data, forecast/optimization และ executive recommendation |

## 8. การใช้เส้นทางในหลักสูตร

1. สิ้นปีที่ 2 ให้นักศึกษาเลือกอาชีพเป้าหมายอย่างน้อย 1 รหัสหลัก และ 1 รหัสสำรอง
2. ใช้เส้นทางรายวิชาเพื่อเลือกวิชาเลือกชีพ 5 วิชา หัวข้อสัมมนา โครงงาน และสถานประกอบการสหกิจศึกษาให้สอดคล้องกัน
3. ทุกอาชีพต้องมี Portfolio ที่แสดง requirement, architecture, การทดลองหรือการทดสอบ, ผลลัพธ์ที่วัดได้ และบทบาทของนักศึกษา
4. C10 และ C16 ต้องเลือกวิชาเชิงลึกและหัวข้อโครงงานเฉพาะทางเพื่อให้ถึงระดับพร้อมปฏิบัติงาน
5. C22, C24 และ C26 เป็นเส้นทางเริ่มต้นระดับ Engineer/Analyst/Coordinator; ระดับ Project Manager, Consultant Lead หรือ Product Manager ต้องอาศัยประสบการณ์ทำงานเพิ่มเติม

## 9. เอกสารเชื่อมโยง

- [[11_Career_Paths_by_Track|อาชีพและการเติบโตตาม Track]]
- [[12_Priority_Careers_12|12 อาชีพเป้าหมายเดิม]]
- [[../07_JobsDB_Semantic_Career_Analysis/03_Classification_Policy_C01_C17|เกณฑ์จำแนกตลาดแรงงาน C01–C17]]
- [[../04_Course_Descriptions_2570/11_Year_Level_Course_Sequence_and_YLO|ลำดับรายวิชาและ YLO]]
- [[../05_TQF2_Academic_Drafts/15_Current_vs_Proposed_Courses_Groups_2_1_to_2_3|รายวิชาใหม่และการปิด Gap]]

[[01_Executive_Summary|← สรุปผู้บริหาร]] | [[00_Home|กลับหน้าหลัก Vault]]
