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
| **C03 วิศวกรเกษตรอัจฉริยะและไอโอที** | EN-714-11002 Programming; EN-714-11006 ไฟฟ้าและอิเล็กทรอนิกส์ | EN-714-12005 IoT/Edge; EN-714-12004 Data Engineering | EN-714-12011 Smart Agriculture; EN-714-12009 Sensing & Actuation | EN-714-14001 ชลประทาน; EN-714-14009 ML เซนเซอร์ฟาร์ม | EN-714-12019 ระบบ sensor–edge–cloud–control และ EN-714-17002 |
| **C18 วิศวกรระบบตรวจวัดและควบคุมฟาร์มอัจฉริยะ** | EN-714-11006; EN-714-11008 Workshop 2 | EN-714-12005 IoT/Edge | EN-714-12009 Sensing & Actuation; EN-714-12011 Smart Agriculture | EN-714-14001 ชลประทาน; EN-714-14009 ML เซนเซอร์ฟาร์ม | ระบบตรวจวัดและควบคุมน้ำ/สภาพแวดล้อมที่ทดสอบหน้างาน |
| **C19 วิศวกรระบบอัตโนมัติและหุ่นยนต์เพื่อการเกษตร** | EN-714-11001 CAD; EN-714-11006; EN-714-11010 Workshop 3 | EN-714-12006 Computer Vision; EN-714-12005 IoT/Edge | EN-714-12009 Sensing & Actuation; EN-714-12015 Autonomous Agriculture | EN-714-14011 หุ่นยนต์เกษตร | หุ่นยนต์หรือระบบอัตโนมัติที่มี perception, control และ safety test |
| **C20 วิศวกรอากาศยานไร้คนขับและภูมิสารสนเทศเพื่อการเกษตร** | EN-714-11007 สถิติ; EN-714-11002 Programming | EN-714-12006 Computer Vision | EN-714-12015 Autonomous Agriculture | EN-714-14003 GIS เกษตร; EN-714-14012 UAV/Remote Sensing | แผนการบิน ชุดข้อมูลภาพ แผนที่/GeoAI และการประเมินความถูกต้อง |
| **C21 นักวิเคราะห์ข้อมูลและระบบสนับสนุนการตัดสินใจทางการเกษตร** | EN-714-11009 เศรษฐศาสตร์วิศวกรรม; EN-714-11007 สถิติ | EN-714-12003 ML/DL; EN-714-12004 Data Engineering | EN-714-12010 Decision/Supply Chain; EN-714-12011 Smart Agriculture | EN-714-14005 พยากรณ์ฟาร์ม; EN-714-14013 ห่วงโซ่อุปทานเกษตร | แบบพยากรณ์/สถานการณ์และ dashboard ที่อธิบายข้อเสนอเชิงตัดสินใจ |

## 5. Track 2 — ปัญญาประดิษฐ์ภาคอุตสาหกรรม

| รหัสและอาชีพ | พื้นฐานวิศวกรรม | แกน AI | แกนบูรณาการ/เฉพาะบริบท | วิชาเลือกแนะนำ | หลักฐานปลายทาง |
|---|---|---|---|---|---|
| **C04 วิศวกรระบบควบคุมและอัตโนมัติ** | EN-714-11001 CAD; EN-714-11006; EN-714-11010 Workshop 3 | EN-714-12005 IoT/Edge; EN-714-12008 AI Infrastructure | EN-714-12012 Industrial Robotics; EN-714-12009 Sensing & Actuation | EN-714-14016 Advanced Process Control/DCS | PLC/HMI/SCADA/DCS พร้อม loop test, alarm และ acceptance test |
| **C05 วิศวกรหุ่นยนต์และบูรณาการระบบ** | EN-714-11001; EN-714-11003; EN-714-11010 | EN-714-12006 Computer Vision; EN-714-12005 IoT/Edge | EN-714-12012 Industrial Robotics; EN-714-12009 Sensing & Actuation | EN-714-14027 Motion/Cobot Cell; EN-714-14026 ขนถ่ายวัสดุ | Cobot cell พร้อม motion tuning, risk assessment, integration และ acceptance test |
| **C13 วิศวกรโรงงานอัจฉริยะด้วยปัญญาประดิษฐ์** | EN-714-11006; EN-714-11010 | EN-714-12005 IoT/Edge; EN-714-12004 Data Engineering | EN-714-12012 Smart Manufacturing; EN-714-12012; EN-714-12009 | EN-714-14016 Advanced Control; EN-714-14027 Motion/Cobot Cell | OT–IT/IIoT–MES/DCS architecture พร้อม KPI การผลิต |
| **C14 วิศวกรปัญญาประดิษฐ์ด้านกระบวนการและการผลิต** | EN-714-11009; EN-714-11007; EN-714-11005 ความร้อนและของไหล | EN-714-12003 ML/DL; EN-714-12004 Data Engineering | EN-714-12010 Decision/Supply Chain; EN-714-12012 Smart Manufacturing | EN-714-14019 Advanced OR; EN-714-14020 กระบวนการเกษตรแปรรูป; EN-714-14028 Lean Six Sigma | DMAIC/optimization studio ที่วัด KPI ผลผลิต คุณภาพ พลังงานหรือต้นทุนก่อน–หลัง |
| **C16 วิศวกรซ่อมบำรุงด้วยปัญญาประดิษฐ์** | EN-714-11007; EN-714-11006; EN-714-11008 | EN-714-12006/204/206 | EN-714-12012 Smart Manufacturing; EN-714-12009 Sensing & Actuation | EN-714-14016 Advanced Control; EN-714-14017 Predictive Maintenance | Condition monitoring, failure prediction และ maintenance recommendation |
| **C17 วิศวกรปัญญาประดิษฐ์อุตสาหกรรม** | EN-714-11007; EN-714-11006; EN-714-11010 | EN-714-12006/204/206/207 | EN-714-12010; EN-714-12012; EN-714-12012; EN-714-12009 | EN-714-14019 Advanced OR; EN-714-14027 Motion/Cobot Cell; EN-714-14028 Lean Six Sigma; EN-714-14029 Machine Vision | ระบบ AI อุตสาหกรรมแบบครบวงจรที่วัด KPI ก่อน–หลัง |

## 6. Track 3 — นวัตกรรมปัญญาประดิษฐ์ระดับองค์กร

| รหัสและอาชีพ | พื้นฐานวิศวกรรม | แกน AI | แกนบูรณาการ/เฉพาะบริบท | วิชาเลือกแนะนำ | หลักฐานปลายทาง |
|---|---|---|---|---|---|
| **C01 วิศวกร AI/ML** | EN-714-11007; EN-714-11002 | EN-714-12002 คณิตศาสตร์ AI; EN-714-12003 ML/DL; EN-714-12007 Cloud/MLOps; EN-714-12004 Data Engineering | EN-714-12013 Software & AI Engineering; EN-714-12014 Agentic AI | EN-714-14036; EN-714-14037; EN-714-14039 | End-to-end ML service พร้อม evaluation, API, deployment และ monitoring |
| **C06 วิศวกรซอฟต์แวร์และแอปพลิเคชัน AI** | EN-714-11002 | EN-714-12007 Cloud/MLOps; EN-714-12004 Data Engineering | EN-714-12013 Software & AI Engineering; EN-714-12014 Agentic AI | EN-714-14037 Advanced LLM; EN-714-14038 AI Reliability/Safety; EN-714-14039 Enterprise AI Architecture | AI application พร้อม evaluation, integration, security, reliability และ observability |
| **C07 วิศวกรข้อมูล** | EN-714-11007; EN-714-11002 | EN-714-12004 Data Engineering; EN-714-12007 Cloud/MLOps | EN-714-12013 Software & AI Engineering | EN-714-14036 Advanced Data Engineering; EN-714-14039 Enterprise AI Architecture | ETL/ELT pipeline พร้อม data quality, lineage, orchestration และ enterprise integration |
| **C08 นักออกแบบและสร้างนวัตกรรม AI** | EN-714-11009; EN-714-11002 | EN-714-12001 Intro AI; EN-714-12003 ML/DL | EN-714-12009 AI BI/Product; EN-714-12013; EN-714-12014 | EN-714-14040 UX/UI; EN-714-14045 AI Venture; EN-714-14048 AI Product Management | Product discovery, prototype, experiment, adoption และ value/KPI validation |
| **C09 ผู้ประกอบการเทคโนโลยีและ AI** | EN-714-11009; GE-001-13003 ธุรกิจดิจิทัล | EN-714-12001 Intro AI | EN-714-12009 AI BI/Product; EN-714-12010 Decision/Supply Chain | EN-714-14045; EN-714-14047; EN-714-14048 | Problem–solution fit, prototype, business model และ go-to-market evidence |
| **C26 นักวิเคราะห์ผลิตภัณฑ์และผู้ประสานงานโครงการ AI** | EN-714-11009; EN-714-11002 | EN-714-12001; EN-714-12004 | EN-714-12009 AI BI/Product; EN-714-12013 Software & AI Engineering | EN-714-14040 UX/UI; EN-714-14046 Project Management; EN-714-14048 AI Product Management | Product brief, roadmap, backlog, experiment, metrics, risk register และ delivery review |

## 7. อาชีพข้ามทุก Track

| รหัสและอาชีพ | พื้นฐานวิศวกรรม | แกน AI | แกนบูรณาการ | วิชาเลือกแนะนำ | หลักฐานปลายทาง |
|---|---|---|---|---|---|
| **C02 วิศวกรประยุกต์และโซลูชัน AI** | EN-714-11002; EN-714-11010 | EN-714-12007; EN-714-12004 | EN-714-12009; EN-714-12013; EN-714-12014 | EN-714-14038/334/341 หรือวิชาเลือกโดเมน | Requirement, architecture, prototype, integration และ acceptance test |
| **C10 นักวิจัย AI และระบบอัจฉริยะ** | EN-714-11007; EN-714-11002 | EN-714-12002; EN-714-12003 และแกน AI ตามหัวข้อ | Core Track ตามโดเมนวิจัย | วิชาเลือกเชิงลึกตามหัวข้อ | EN-714-12017/302/303/404 พร้อมโจทย์วิจัย การทดลอง และผลที่ทำซ้ำได้ |
| **C11 นักเทคโนโลยีดิจิทัลภาครัฐ** | EN-714-11009; EN-714-11002 | EN-714-12007; EN-714-12008 | EN-714-12009; EN-714-12010; EN-714-12013 | EN-714-14050 AI Governance and Risk | Digital service พร้อม risk classification, governance, security, procurement และ service handover |
| **C12 นักวิทยาศาสตร์ข้อมูล/นักวิเคราะห์ข้อมูล** | EN-714-11007; EN-714-11002 | EN-714-12002; EN-714-12003; EN-714-12004 | EN-714-12010 Decision/Supply Chain | EN-714-14019 Advanced OR; EN-714-14036 | Data analysis/model/optimization พร้อมการตีความและข้อเสนอ |
| **C15 ผู้เชี่ยวชาญระบบสนับสนุนการตัดสินใจ** | EN-714-11009; EN-714-11007 | EN-714-12003; EN-714-12004 | EN-714-12009; EN-714-12010 | EN-714-14019 Advanced OR; EN-714-14036 | Forecast, scenario, simulation/optimization และ decision interface |
| **C22 วิศวกรโครงการและติดตั้งระบบอัจฉริยะ** | EN-714-11009; EN-714-11002; Workshop ตามโดเมน | EN-714-12001; EN-714-12007 | EN-714-12009; EN-714-12013 | EN-714-14046 และวิชาเลือกโดเมน | EN-714-12018/404 + EN-714-17002 พร้อมแผนโครงการ ความเสี่ยง UAT และส่งมอบ |
| **C23 วิศวกรบูรณาการระบบอัจฉริยะ** | EN-714-11002; EN-714-11006; EN-714-11010 | EN-714-12005; EN-714-12007; EN-714-12008 | EN-714-12013; EN-714-12009 และ Core Track โดเมน | EN-714-14038 และวิชาเลือก integration ของโดเมน | ระบบ data–device–control–API–AI พร้อม integration/acceptance test |
| **C24 ที่ปรึกษาโซลูชัน AI และการเปลี่ยนผ่านสู่ดิจิทัล** | EN-714-11009; EN-714-11002 | EN-714-12001; EN-714-12004 | EN-714-12009; EN-714-12010; EN-714-12013 | EN-714-14045; EN-714-14047 | Current-state/gap analysis, roadmap, business case และ solution proposal |
| **C25 นักวิเคราะห์ธุรกิจอัจฉริยะและการตัดสินใจ** | EN-714-11009; EN-714-11007; EN-714-11002 | EN-714-12003; EN-714-12004 | EN-714-12010 Decision/Supply Chain | EN-714-14019 Advanced OR; EN-714-14036 Advanced Data Engineering | KPI model, semantic data, forecast/optimization และ executive recommendation |

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
