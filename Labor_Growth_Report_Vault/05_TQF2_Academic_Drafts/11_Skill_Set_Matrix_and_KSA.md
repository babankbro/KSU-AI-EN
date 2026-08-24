# ตารางสรุปชุดทักษะและการวิเคราะห์ KSA — หลักสูตรวิศวกรรมปัญญาประดิษฐ์และระบบอัจฉริยะ

> [!warning] สถานะการปรับให้ตรงกับหลักสูตร 125 หน่วยกิต
> ส่วน B ของเอกสารนี้คือคำตอบของ **หมวดที่ 4 หัวข้อ 4.7** รหัสรายวิชาปรับเป็นชุดปัจจุบันแล้ว
> ยังเหลือรายวิชาที่ต้องแทรกเข้าตารางทักษะย่อยด้วยมือ ได้แก่ **EN-714-12016 ปฏิบัติการวิศวกรรมเชิงบูรณาการ 5** **EN-714-12017 สัมมนา** และ **EN-714-12020 โครงงานบูรณาการกับสถานประกอบการ (แผน ข)** เพราะคอลัมน์เครื่องมือและวิธีประเมินเป็นข้อมูลที่กำหนดโดยคณะกรรมการหลักสูตร ไม่สามารถสร้างอัตโนมัติได้
> ความครอบคลุมของ **วิชาชีพเลือกทั้ง 57 รายวิชา** อยู่ที่ [[../08_TQF2_Book_Revisions/17_Section4_7_Skill_Set_Coverage|ภาคผนวกความครอบคลุมชุดทักษะ]] ซึ่งสร้างจากข้อมูลรายวิชาโดยอัตโนมัติ

> AI Engineering & Intelligent Systems — Skill Set Matrix + Knowledge/Skill/Attitude Analysis
> ต่อยอดจาก [[03_Target_Skills|ทักษะเป้าหมาย H/S]] · [[04_PLOs_7_OBE|PLO 7 ข้อ]] · [[10_Course_Learning_Outcomes_CLO_Mapping|CLO Mapping]] · [[../03_OBE_PLO_Design_2570/07_Curriculum_PLO_Mapping|Curriculum–PLO Mapping]]

เอกสารนี้แบ่งเป็น 5 ส่วน:
- **ส่วน A — วิเคราะห์ KSA รายข้อ PLO:** แยกแยะแต่ละ PLO ออกเป็น **ความรู้ (Knowledge)** ที่ควรมีพร้อมคำสำคัญ/หัวข้อ · **ทักษะ (Skill)** ที่ควรมีพร้อมทักษะย่อย เครื่องมือ และ **Skill Set/กลุ่มที่ผูก** · **ทัศนคติ (Attitude)** · แล้วกระจายลงรายวิชาและลิงก์ CLO
- **ส่วน B — Skill Set Matrix:** ชุดทักษะสำหรับ **Skill Transcript** (รหัส EN-AISK01–09) จัดเป็น **7 กลุ่มทักษะ (G1–G7)** พร้อมระดับความเชี่ยวชาญ CLO ที่เกี่ยวข้อง และวิธีวัดผล
- **ส่วน C — การเทียบเคียงมาตรฐานสากล:** IMDA/AI Verify/Career Maps · CS2023/ISO 42001/NIST AI RMF · การประยุกต์เฉพาะโดเมน
- **ส่วน D — การตรวจสอบความสอดคล้อง (Skill Alignment):** ทักษะ → Skill Set → CLO → YLO → PLO ครบวงจร
- **ส่วน E — Needs Alignment:** ความต้องการผู้มีส่วนได้ส่วนเสีย → Skill Set → หลักฐานรายวิชา

> [!abstract] เอกลักษณ์วิศวกรรมของหลักสูตร
> ชุดทักษะออกแบบให้สะท้อน 2 เสาเอกลักษณ์ — **EN-AISK02 Smart Agriculture Engineering** และ **EN-AISK03 Smart Industry (AI Industrial Engineering & Automation)** — ซึ่งทำหน้าที่ **"สร้างและประกอบโครงสร้างพื้นฐาน กลไก และเครื่องจักร" (G2)** ทำงานร่วมกับ **G3: AISK04 ระบบตรวจวัด/Edge/CPS และ AISK05 การรับรู้/พยากรณ์/ตัดสินใจ** บนฐาน **"แกนวิศวกรรม AI — การเรียนรู้ ตัดสินใจ ข้อมูล ซอฟต์แวร์" (G1: AISK01)** และส่งมอบระบบผ่าน **AISK09 Requirements, Architecture, Integration & Delivery (G7)**

**สัญกรณ์ระดับความลึก (จาก [[03_Target_Skills#3.3 ระดับความลึกของทักษะ|§3.3]]):** L1 เข้าใจ · L2 ประยุกต์ · L3 บูรณาการ · L4 นำไปใช้และประเมิน

---

# ส่วน A — วิเคราะห์ KSA รายข้อ PLO (Knowledge · Skill · Attitude)

## PLO1 — การแก้ปัญหาทางวิศวกรรม *(ความรู้ · Analyze)*

**🧠 Knowledge — ความรู้และหัวข้อที่ควรรู้ (Keywords)**
> คณิตศาสตร์วิศวกรรม (พีชคณิตเชิงเส้น · แคลคูลัส · ความน่าจะเป็น) · สถิติและการอนุมาน · Linear Algebra for AI · Optimization/Gradient Descent · ฟิสิกส์วิศวกรรม (กลศาสตร์ · เทอร์โมฟลูอิด · วัสดุ) · การเขียนโปรแกรมเชิงคำนวณ · การนิยามปัญหา (Problem Formulation) · Engineering Modeling · การวิเคราะห์ Trade-off

**🛠️ Skill — ทักษะและทักษะย่อย + เครื่องมือ**
- **H1 · AI/ML & Applied Mathematics** (L3) → คำนวณ/ประยุกต์คณิตศาสตร์กับโจทย์ AI · *เครื่องมือ: Python, NumPy, SymPy* → **AISK01 (G1 แกนวิศวกรรม AI)**
- **S1 · Analytical & Systems Thinking** (L3) → สร้าง problem model · causal/system map · เปรียบเทียบทางเลือก → **AISK08 (G6)**
- **S2 · Creative Problem-Solving & Engineering Judgment** (L2–L3) → กำหนดปัญหา · เลือกแนวทางภายใต้ข้อจำกัด → **AISK08 (G6)**
- **ฐานวิศวกรรมกายภาพ** (กลศาสตร์/วัสดุ/ความร้อน-ของไหล) (L2–L3) → วิเคราะห์ระบบกายภาพของฟาร์ม/โรงงาน → **AISK02 (G2 เกษตร) · AISK03 (G2 อุตสาหกรรม)**

**❤️ Attitude — ทัศนคติ**
> ยึดหลักฐานและเหตุผลเชิงปริมาณ (evidence-based) · ความละเอียดรอบคอบและความถูกต้องเชิงวิศวกรรม (rigor) · ไม่ด่วนสรุป ตรวจสอบสมมติฐานก่อนตัดสินใจ

**📚 กระจายลงรายวิชา + CLO**
| รายวิชา | CLO ที่ตอบ PLO1 | ระดับ |
|---|---|:--:|
| EN-714-11007 สถิติ | CLO1 (ทฤษฎีความน่าจะเป็น) | I |
| EN-714-12002 คณิต AI | CLO1, CLO2 (พีชคณิตเชิงเส้น/แคลคูลัส) | I |
| EN-714-11002 โปรแกรมพื้นฐาน | CLO1 (เขียนโปรแกรมแก้ปัญหา) | I |
| EN-714-11005/125/121 (ปี2) | CLO วิเคราะห์ระบบกายภาพ/ต้นทุน | R |
| EN-714-12003 ML/DL | CLO1 (เลือกอัลกอริทึม) | R |
| EN-714-12012 Automation | CLO1 (วิเคราะห์ระบบควบคุม) | R |
| EN-714-12019 Capstone · EN-714-17002 สหกิจ | CLO1 (แก้ปัญหาจริง) | **M** |

---

## PLO2 — การออกแบบระบบปัญญาประดิษฐ์และระบบควบคุม *(ทักษะ · Create)*

**🧠 Knowledge (Keywords)**
> System Architecture · Requirement Engineering · Design under Constraints (เศรษฐกิจ/สังคม/สิ่งแวดล้อม) · Sustainable Design · CAD/การเขียนแบบ · สถาปัตยกรรม IoT–Edge–Cloud · ML System Design · Software Architecture/Microservices · Digital Twin · Design Trade-off & Safety Factor

**🛠️ Skill + Sub-skill + เครื่องมือ**
- **H2 · Programming & AI Software Engineering** (L3) → พัฒนาซอฟต์แวร์ AI ที่ทดสอบได้ · *Git, API, FastAPI, pytest* → **AISK01 (G1)**
- **H4 · MLOps, Cloud & AI Infrastructure** (L2–L3) → Deploy/Container/Scale · *Docker, Kubernetes, AWS/Azure/GCP* → **AISK01 (G1) · AISK04 (G3 Edge–Cloud)**
- **ฐานวิศวกรรมกายภาพ + กลไกฟาร์ม** (L2–L3, T1) → โครงสร้าง/เครื่องจักร/ชลประทาน · *CAD, Workshop* → **AISK02 (G2 เกษตร)**
- **H5 · Industrial Automation & Digital Twin** (L2–L3, T2 เน้น) → PLC/SCADA/Robotics/Simulation → **AISK03 (G2 อุตสาหกรรม)**
- **H9 · IoT, Embedded & Edge AI** (L2–L3) → Sensor/MCU/MQTT/TinyML/Cyber-Physical → **AISK04 (G3 ระบบอัจฉริยะฟาร์ม–โรงงาน)**
- **H20 · Enterprise Solution Architecture & Integration** (L2–L3) → Requirements/API/Integration/Digital Services → **AISK09 (G7)**
- **S2 · Engineering Judgment** (L3) → เลือกแบบภายใต้ข้อจำกัด → **AISK08 (G6)**
- **S9 · Stakeholder, Requirements & Change Facilitation** (L2–L3) → ยืนยัน requirement/acceptance criteria และจัดการการเปลี่ยนผ่าน → **AISK09 (G7)**

> **แกนการออกแบบของ PLO2:** "สร้างและประกอบโครงสร้างพื้นฐาน + กลไก/เครื่องจักร" = **G2 (AISK02 เกษตร · AISK03 อุตสาหกรรม)** ทำงานร่วมกับ **G3 (AISK04 ระบบตรวจวัด/Edge/CPS · AISK05 การรับรู้/พยากรณ์/ตัดสินใจ)** บนฐาน **G1 (AISK01)**

**❤️ Attitude**
> คำนึงถึงผู้ใช้และความยั่งยืน (sustainability & user-centered) · ยอมรับข้อจำกัดจริงและออกแบบให้ดูแลรักษาได้ · ความรับผิดชอบต่อคุณภาพและความปลอดภัยของระบบ

**📚 กระจายลงรายวิชา + CLO**
| รายวิชา | CLO ที่ตอบ PLO2 | ระดับ |
|---|---|:--:|
| EN-714-11001 เขียนแบบ | CLO2, CLO3 | I |
| EN-714-11002 โปรแกรม | CLO3 | I |
| EN-714-12005 IoT/Edge | CLO2 | R |
| EN-714-12007 Cloud/MLOps · EN-714-12004 Data Eng · EN-714-12008 HW/Network | CLO ออกแบบ/พัฒนาระบบย่อย | R |
| EN-714-12011/305/306/307/308/309 (แขนง) | CLO ออกแบบระบบเฉพาะโดเมน | **M** |
| EN-714-12019 Capstone · EN-714-17002 สหกิจ | CLO1 | **M** |

---

## PLO3 — การสื่อสารสารสนเทศทางเทคนิค *(ทักษะ · Apply)*

**🧠 Knowledge (Keywords)**
> Technical Writing (ไทย/อังกฤษ) · Data Storytelling · Data Visualization · Dashboard Design · การนำเสนอเชิงเทคนิค · Report Structure (IMRaD) · Audience Adaptation (วิศวกร/ผู้บริหาร/เกษตรกร/ชุมชน) · Technical English

**🛠️ Skill + Sub-skill + เครื่องมือ**
- **S4 · Professional Communication, Technical English & Data Storytelling** (L3) → รายงาน · การนำเสนอ · การตอบคำถาม · *เครื่องมือ: Power BI/Tableau, Matplotlib, Canva/Slides, LaTeX/Word* → **AISK08 (G6)**
- **H3 · Data Analytics & Visualization** (L2–L3, ส่วน Visualization) → สร้าง Dashboard สื่อสารผล → **AISK01 (G1) · AISK05 (G3 สื่อสารผลเชิงโดเมน)**
- **S9 · Stakeholder & Requirements Facilitation** (L2–L3) → ปรับสารและข้อกำหนดให้ผู้ใช้/ผู้บริหาร/ทีมเทคนิคเข้าใจตรงกัน → **AISK09 (G7)**

**❤️ Attitude**
> ยึดผู้รับสารเป็นศูนย์กลาง (clarity over jargon) · ความซื่อตรงในการนำเสนอข้อมูล (ไม่บิดเบือน) · เปิดรับคำถามและข้อโต้แย้ง

**📚 กระจายลงรายวิชา + CLO**
| รายวิชา | CLO ที่ตอบ PLO3 | ระดับ |
|---|---|:--:|
| GE-010-001/002 ภาษาอังกฤษ | CLO (สื่อสารพื้นฐาน) | I |
| EN-714-12006 CV · EN-714-12004 Data Eng | CLO3 (รายงาน/Dashboard) | R |
| EN-714-12009/303/306 | CLO นำเสนอผล/Dashboard | R |
| EN-714-12017/302 สัมมนา | CLO1 (นำเสนอ ไทย–อังกฤษ) | R |
| EN-714-12018 เตรียมโครงงาน | CLO2 (ข้อเสนอโครงงาน) | R |
| EN-714-17001 เตรียมสหกิจ | CLO1 (Resume/สัมภาษณ์) | **M** |
| EN-714-12019 Capstone · EN-714-17002 สหกิจ | CLO นำเสนอ/สอบปากเปล่า | **M** |

---

## PLO4 — จริยธรรมและธรรมาภิบาลปัญญาประดิษฐ์ *(จริยธรรม · Evaluate)*

**🧠 Knowledge (Keywords)**
> Responsible AI · AI Ethics · AI Governance · PDPA/Data Privacy · Cybersecurity พื้นฐาน · Bias/Fairness · Explainability · Regulatory Compliance · จรรยาบรรณวิศวกร (สภาวิศวกร) · Safety Standard · Environmental/Social Impact Assessment · กฎหมายโดรน/การกำกับ

**🛠️ Skill + Sub-skill + เครื่องมือ**
- **H7 · AI Security, Privacy, Safety & Responsible AI** (L2–L3) → Threat Modeling · Guardrails · Privacy-by-design · *เครื่องมือ: AI Verify Toolkit, PDPA checklist, Model Card, Risk Register* → **AISK07 (G5)**
- **S7 · Curiosity & AI Literacy** (L2) → เข้าใจข้อจำกัด AI และตรวจสอบผลลัพธ์อย่างมีวิจารณญาณ → **AISK07 (G5) · AISK06 (G4)**

**❤️ Attitude** *(แกนหลักของ PLO นี้)*
> ความซื่อสัตย์ทางวิชาการและวิชาชีพ · ความรับผิดชอบต่อสังคม/สิ่งแวดล้อม · ตระหนักผลกระทบของ AI ต่อผู้คน · เคารพความเป็นส่วนตัวของข้อมูล · กล้ายืนหยัดในสิ่งที่ถูกต้อง (professional integrity)

**📚 กระจายลงรายวิชา + CLO**
| รายวิชา | CLO ที่ตอบ PLO4 | ระดับ |
|---|---|:--:|
| GE-010-004 คุณค่ามหาวิทยาลัย · GE-010-003 ดิจิทัล | CLO (จริยธรรม/พลเมืองดิจิทัล) | I |
| EN-714-12001 Intro AI | CLO2 (Responsible AI) | I |
| EN-714-12005 IoT · EN-714-12007 Cloud · EN-714-12008 HW | CLO ความปลอดภัย/ความเป็นส่วนตัว | R |
| EN-714-12015 UAV | CLO3 (กฎหมาย/ความปลอดภัย) | R |
| EN-714-12017/302 สัมมนา | CLO2 (จริยธรรม/ผลกระทบ) | R |
| EN-714-17001 เตรียมสหกิจ | CLO2 (จรรยาบรรณ) | **M** |
| EN-714-12019 · EN-714-17002 | CLO (จริยธรรมในงานจริง) | **M** |

> [!tip] ข้อเสนอเสริมความหนักแน่น (จาก doc 07 หมายเหตุ #2)
> พิจารณาเปิดวิชาแกน **"AI Ethics & Governance"** เพื่อยก PLO4 ให้มี Mastery ชัดในแกนบังคับ ไม่พึ่งเฉพาะสหกิจ/สัมมนา

---

## PLO5 — การทำงานเป็นทีมและการบริหารโครงการ *(ลักษณะบุคคล · Organize)*

**🧠 Knowledge (Keywords)**
> Team Roles · Team Charter · Project Planning · Conflict Management · Psychological Safety · Agile/Scrum เบื้องต้น · Peer Assessment · Cross-functional Collaboration · Leadership Styles

**🛠️ Skill + Sub-skill + เครื่องมือ**
- **S5 · Teamwork, Collaboration & Leadership** (L3–L4) → กำหนดเป้าหมาย · แบ่งงาน · จัดการความขัดแย้ง · *เครื่องมือ: Git/GitHub (collaboration), Trello/Jira, Team Charter template* → **AISK08 (G6)**
- **S2 · Engineering Judgment** (L2) ในบทบาททีม → **AISK08 (G6)**
- **S10 · Agile Delivery, Quality, Safety & Accountability** (L2–L3) → Definition of Done · review · retrospective · quality/safety evidence → **AISK09 (G7)**

**❤️ Attitude**
> รับผิดชอบต่อผลลัพธ์ร่วม · รับฟังและเคารพความเห็นต่าง · ความน่าเชื่อถือ/ตรงต่อเวลา (accountability) · ภาวะผู้นำเชิงบริการ (servant leadership)

**📚 กระจายลงรายวิชา + CLO**
| รายวิชา | CLO ที่ตอบ PLO5 | ระดับ |
|---|---|:--:|
| EN-714-11004/129/230 ปฏิบัติการ 1–3 | CLO ทำงานเป็นทีม | I → R |
| GE-020-009 ผู้นำศตวรรษที่ 21 | CLO1, CLO2 | R |
| EN-714-12003 ML/DL | CLO3 (โครงงานกลุ่ม) | R |
| EN-714-12011/307/308/309 (แขนง) | CLO ปฏิบัติการ/ทีม | **M** |
| EN-714-12019 Capstone | CLO3 (ภาวะผู้นำโครงงาน) | **M** |
| EN-714-17001/402 สหกิจ | CLO (ทีม/360° feedback) | **M** |

---

## PLO6 — การทดลองและประเมินสมรรถนะระบบ *(ทักษะ · Evaluate)*

**🧠 Knowledge (Keywords)**
> Design of Experiments (DOE) · Hypothesis Testing · Data Collection & Cleaning · Feature Engineering · Model Evaluation Metrics · Data Pipeline/ETL · Big Data (Spark/Kafka) · Time-Series/Forecasting · Data Quality & Governance · Data-Centric AI/Annotation · การตีความผลเชิงวิศวกรรม

**🛠️ Skill + Sub-skill + เครื่องมือ**
- **H3 · Data Engineering, Analytics & Visualization** (L3) → Pipeline · วิเคราะห์ · Dashboard · *SQL, Pandas, Spark, Airflow* → **AISK01 (G1)**
- **H1 · Model Evaluation** (L3) → ประเมินสมรรถนะโมเดล · *scikit-learn, MLflow* → **AISK01 (G1)**
- **H14 · Data-Centric AI** (L2) → คุณภาพข้อมูล/Annotation → **AISK01 (G1)**
- **H11 · Time-Series & Predictive Analytics** (L3, T1/T2) → พยากรณ์ผลผลิต/อุปสงค์/การบำรุงรักษา → **AISK05 (G3) · AISK03 (G2 อุตสาหกรรม)**
- **H17 · Smart Manufacturing/Process/Quality** (L2–L3, T2) → วิเคราะห์ OEE, process capability, quality และ MES data → **AISK03 (G2)**
- **H18 · Maintenance/Reliability/Asset Intelligence** (L2–L3, T2) → RCA/FMEA/CMMS/condition monitoring → **AISK03 (G2)**
- **H19 · Decision Intelligence/BI/DSS** (L2–L3) → Forecast, scenario, optimization และ decision model → **AISK05 (G3)**
- **H8 · Computer Vision & Remote Sensing** (L2–L3) → วิเคราะห์ภาพ/สำรวจระยะไกล → **AISK05 (G3 ความเข้าใจของเครื่อง)**
- **S1 · Analytical Thinking** (L3) → ตรวจสอบความน่าเชื่อถือของผล → **AISK08 (G6)**

**❤️ Attitude**
> ความเที่ยงตรงและทำซ้ำได้ (reproducibility) · สงสัยข้อมูลที่ผิดปกติ · ไม่ cherry-pick ผลลัพธ์ · เคารพความไม่แน่นอน (uncertainty)

**📚 กระจายลงรายวิชา + CLO**
| รายวิชา | CLO ที่ตอบ PLO6 | ระดับ |
|---|---|:--:|
| EN-714-11007 สถิติ | CLO2, CLO3 (วิเคราะห์/DOE) | I |
| EN-714-12002 คณิต AI | CLO3 | I |
| EN-714-12003 ML/DL | CLO2 (ประเมินโมเดล) | R |
| EN-714-12006 CV · EN-714-12004 Data Eng | CLO วิเคราะห์/ประมวลผล | R |
| EN-714-12010/304/305/306 (แขนง) | CLO ทดลอง/พยากรณ์จากข้อมูล | **M** |
| EN-714-12019 · EN-714-17002 | CLO2/CLO3 (ทดลอง/ประเมินผล) | **M** |

---

## PLO7 — การเรียนรู้ตลอดชีวิตและนวัตกรรมยั่งยืน *(ลักษณะบุคคล · Self-directed/Create)*

**🧠 Knowledge (Keywords)**
> Self-directed Learning · Technology Watch/Trend Scanning · Emerging AI (GenAI/Agentic AI) · Business Model Canvas · Value Proposition · Feasibility/ROI · IP/ทรัพย์สินทางปัญญา · Go-to-Market · Innovation Management · Learning Portfolio

**🛠️ Skill + Sub-skill + เครื่องมือ**
- **S6 · Product, Entrepreneurial & Project Management Mindset** (L2–L3) → user discovery · value proposition · feasibility/ROI · roadmap · *เครื่องมือ: BMC, Lean Canvas, Gantt* → **AISK08 (G6)**
- **S3 · Adaptability, Resilience & Lifelong Learning** (L3) → learning plan · technology review · reflective portfolio → **AISK08 (G6)**
- **H6 · Generative AI/Agentic** (L2–L3, T3) → ต่อยอดเทคโนโลยีอุบัติใหม่ → **AISK06 (G4)**
- **S9 · Stakeholder & Change Facilitation** (L2–L3) → ทดสอบคุณค่ากับผู้ใช้และวางแผน adoption → **AISK09 (G7)**

**❤️ Attitude**
> ความอยากรู้อยากเห็น (curiosity) · เปิดรับการเปลี่ยนแปลงและความล้มเหลว (growth mindset) · ริเริ่ม/ลงมือ (proactive/entrepreneurial) · เรียนรู้ด้วยตนเองอย่างต่อเนื่อง

**📚 กระจายลงรายวิชา + CLO**
| รายวิชา | CLO ที่ตอบ PLO7 | ระดับ |
|---|---|:--:|
| GE-010-005 ชีวิตออกแบบได้ · GE-020-008 ธุรกิจดิจิทัล | CLO (วางแผนตนเอง/ผู้ประกอบการ) | I → R |
| EN-714-12001 Intro AI | CLO3 (ติดตามแนวโน้ม) | I |
| EN-714-12007 Cloud/MLOps | CLO3 (เรียนรู้เครื่องมือใหม่) | R |
| EN-714-12009 ผลิตภัณฑ์/ธุรกิจ AI | CLO2 (feasibility/go-to-market) | R |
| EN-714-12010/308/309 | CLO ประเมินคุณค่า/เทคโนโลยีใหม่ | R |
| EN-714-12018 เตรียมโครงงาน | CLO3 (วางแผนเรียนรู้) | R |
| EN-714-17001/402 สหกิจ | CLO (พัฒนาตนเอง/ผู้ประกอบการ) | **M** |

---

# ส่วน B — ตารางสรุปชุดทักษะสำหรับ Skill Transcript (Skill Set Matrix)

> ชุดทักษะ (Skill Set) ที่ผู้เรียนจะได้รับการพัฒนาตลอดหลักสูตร แต่ละชุดกำหนดรหัส กลุ่มทักษะ ประเภท ทักษะย่อยพร้อมระดับความเชี่ยวชาญ CLO ที่เกี่ยวข้อง และวิธีวัดผล — เพื่อออก **Skill Transcript** ได้อย่างมีมาตรฐาน
> **ประเภท:** Hard = ทักษะเทคนิค · Soft = ทักษะพฤติกรรม · Hybrid = ความรู้+ทัศนคติผสาน

### นิยามกลุ่มทักษะ (Skill Groups) 7 กลุ่ม

| รหัสกลุ่ม | ชื่อกลุ่มทักษะ (ไทย / อังกฤษ) | สาระแกน | Skill Set ในกลุ่ม |
|---|---|---|---|
| **G1** | แกนวิศวกรรมปัญญาประดิษฐ์<br>*(AI Core Engineering — Learning, Decision, Data & Software)* | สอน/ฝึกโมเดลให้เรียนรู้และตัดสินใจ ("AI Teaching") + ซอฟต์แวร์/MLOps + ข้อมูล | **AISK01** |
| **G2** | วิศวกรรมโดเมนอัจฉริยะ: การสร้างและประกอบโครงสร้างพื้นฐาน กลไก และเครื่องจักร<br>*(Smart Domain Engineering: Build & Construct Infrastructure, Mechanics & Machines)* | สร้าง/ประกอบโครงสร้างพื้นฐานกายภาพ · กลไก/เครื่องจักร · ระบบอัตโนมัติ ตามโดเมน | **AISK02 (เกษตร), AISK03 (อุตสาหกรรม)** |
| **G3** | ระบบตรวจวัด การรับรู้ และการตัดสินใจอัจฉริยะ<br>*(Sensing, Perception & Decision Intelligence)* | IoT/Edge/CPS · การรับรู้/มองเห็น · การพยากรณ์ · ระบบสนับสนุนการตัดสินใจ | **AISK04, AISK05** |
| **G4** | ปัญญาประดิษฐ์เชิงสร้าง ระบบเอเจนต์ และการทำงานร่วมกับ AI<br>*(Generative, Agentic & Human–AI Systems)* | GenAI/LLM/Agentic · การใช้เครื่องมือ AI อย่างตรวจสอบได้ · นวัตกรรมอุบัติใหม่ | **AISK06** |
| **G5** | ธรรมาภิบาล ความมั่นคงปลอดภัย และการรับรองระบบ<br>*(Responsible AI, Security & Assurance)* | จริยธรรม ความมั่นคงปลอดภัย มาตรฐาน หลักฐานธรรมาภิบาล และการรับรองระบบ | **AISK07** |
| **G6** | การสื่อสาร ทีม ภาวะผู้นำ และผู้ประกอบการ<br>*(Communication, Teamwork & Entrepreneurship)* | การคิดวิเคราะห์ การสื่อสาร ทีม ภาวะผู้นำ การเรียนรู้ และผู้ประกอบการ | **AISK08** |
| **G7** | ข้อกำหนด สถาปัตยกรรม การบูรณาการ และการส่งมอบ<br>*(Requirements, Architecture, Integration & Delivery)* | Requirements, architecture, integration, quality, change, acceptance และ operational handover | **AISK09** |

> [!abstract] เอกลักษณ์วิศวกรรม 2 เสาของหลักสูตร (Two Engineering Identities)
> ทั้งสองเสายืนบนแกนร่วม **G1 (การเรียนรู้/ตัดสินใจของเครื่อง — "AI Teaching")** + **G2 (สร้างและประกอบโครงสร้างพื้นฐาน กลไก เครื่องจักร)** + **G3 (ระบบตรวจวัด การรับรู้ การพยากรณ์ และการตัดสินใจอัจฉริยะ)**
> - **① Smart Agriculture Engineering (T1)** → **AISK02** (H16: Precision Agriculture/โครงสร้างพื้นฐาน/กลไกฟาร์ม) + **AISK04** (ระบบอัจฉริยะฟาร์ม) + **AISK05** (การรับรู้/พยากรณ์) บนฐาน **AISK01**
> - **② AI Industrial Engineering & Automation (T2)** → **AISK03** (H17–H18: ระบบอัตโนมัติ/กระบวนการ/คุณภาพ/บำรุงรักษา) + **AISK04** (ระบบอัจฉริยะโรงงาน) + **AISK05** บนฐาน **AISK01**
> - **③ Enterprise/Innovative AI (T3)** → **AISK06** (Generative/Agentic/Human–AI) + **AISK05** (Decision Intelligence) + **AISK09** (Solution Architecture/Integration/Delivery) + **AISK08** บนฐาน **AISK01**

## EN-AISK01 · แกนวิศวกรรมปัญญาประดิษฐ์: การเรียนรู้ การตัดสินใจ ข้อมูล และซอฟต์แวร์<br>*(AI Core Engineering Stack — Learning, Decision, Data & Software)*
**กลุ่ม:** **G1 · แกนวิศวกรรมปัญญาประดิษฐ์ (AI Core Engineering)** · **ประเภท:** Hard Skill · **ผูกทักษะแกน:** H1, H2, H3, H4 (+H12, H14) · **เทียบเคียง:** ACM/IEEE-CS/AAAI **CS2023** · NUS 3 เสาหลัก · AI Singapore **AIAP** (Software+Data เป็นฐานบังคับ)

| # | ทักษะย่อย (Sub-skill) | ระดับเป้าหมาย | CLO ที่เกี่ยวข้อง | เครื่องมือ |
|---|---|---|---|---|
| 1 | คณิตศาสตร์ประยุกต์สำหรับ AI (Applied Math) | L3 บูรณาการ | EN-714-12002 (CLO1,2,3) · EN-714-11007 (CLO1) | Python, NumPy, SymPy |
| 2 | การพัฒนาและฝึกสอนโมเดล ML/DL — **"AI Teaching"** *(Subsymbolic)* | L4 นำไปใช้/ประเมิน | EN-714-12003 (CLO1,2) · EN-714-12019 (CLO1) | scikit-learn, PyTorch, TensorFlow |
| 3 | การให้เหตุผลและการตัดสินใจ *(Symbolic/Neurosymbolic: Search, Planning, KR, Bayesian Reasoning)* | L2–L3 | EN-714-12001 (CLO1) · EN-714-12014 (CLO1) | Search/Planning, Bayesian Networks, Knowledge Graph |
| 4 | การประเมินและอธิบายผลโมเดล (Evaluation/XAI) | L3 บูรณาการ | EN-714-12003 (CLO2,3) · EN-714-11007 (CLO2,3) | MLflow, SHAP |
| 5 | วิศวกรรมซอฟต์แวร์ AI และ Full-stack AI Solutioning | L3 บูรณาการ | EN-714-11002 (CLO1,3) · EN-714-12013 (CLO1) · EN-714-12019 (CLO1) | Python, Git, FastAPI, pytest, Streamlit/Gradio |
| 6 | MLOps, Cloud และโครงสร้างพื้นฐาน AI (Container/GPU/Scale) | L2–L3 | EN-714-12007 (CLO1,2) · EN-714-12008 (CLO1,2) · EN-714-12013 (CLO2) | Docker, Kubernetes, AWS/Azure/GCP, CI/CD |
| 7 | วิศวกรรมข้อมูลและการวิเคราะห์ (Pipeline/Big Data/Analytics/Data-Centric AI) | L3 บูรณาการ | EN-714-12004 (CLO1,2,3) · EN-714-11007 (CLO2) | SQL, Airflow, Spark, Power BI, Label Studio |

**วิธีวัดและประเมินผล:** โครงงานพัฒนาโมเดล (Model Project) · โครงงาน Data Pipeline/Dashboard · การสาธิตการ Deploy แบบเบ็ดเสร็จ (End-to-end Demo) · รายงานผลการทดลอง (Lab Report) · การสอบป้องกันโครงงาน (Capstone Defense)

> [!info] เทียบเคียงมาตรฐานสากล (CS2023 / NUS / AIAP)
> AISK01 เป็น **"แกนกลางที่นักศึกษาทุก Track ต้องมี"** รวม 4 เสาความสามารถของ AI Engineer: **การเรียนรู้และตัดสินใจ (H1)** · **ซอฟต์แวร์ (H2)** · **ข้อมูล (H3)** · **การนำขึ้นใช้งานจริง (H4)** — ตรงกับปรัชญา AI Singapore AIAP ที่กำหนด Software + Data Engineering เป็นความสามารถภาคบังคับก่อนพัฒนาอัลกอริทึมขั้นสูง และครบทั้งสาย Symbolic/Subsymbolic ตาม CS2023

## EN-AISK02 · วิศวกรรมเกษตรอัจฉริยะ<br>*(Smart Agriculture Engineering — Farm Infrastructure, Mechanics & Machines)*
**กลุ่ม:** **G2 · วิศวกรรมโดเมนอัจฉริยะ: สร้างและประกอบโครงสร้างพื้นฐาน กลไก และเครื่องจักร** · **ประเภท:** Hard Skill · **ผูกทักษะแกน:** H9, H15, **H16**, ฐานวิศวกรรมกายภาพ *(แกนของ **T1**)*

| # | ทักษะย่อย | ระดับเป้าหมาย | CLO ที่เกี่ยวข้อง | เครื่องมือ |
|---|---|---|---|---|
| 1 | โครงสร้างพื้นฐานและกลไกทางการเกษตร (Farm Structures & Agricultural Mechanics) | L2–L3 | EN-714-11003 (CLO1,2,3) · EN-714-11001 (CLO1,2) | CAD, Statics/Strength Analysis |
| 2 | **การสร้างและประกอบชิ้นงาน/ระบบฟาร์ม** (Build & Construct — Workshop Practice) | L3 บูรณาการ | EN-714-11004 (CLO1) · EN-714-11008 (CLO1) · EN-714-11010 (CLO1) | เครื่องมือช่าง, งานเชื่อม/บัดกรี, ไมโครคอนโทรลเลอร์ |
| 3 | ระบบฟาร์มอัจฉริยะและเกษตรแม่นยำ (Smart Farm & Precision Agriculture) | L3–L4 *(T1)* | EN-714-12011 (CLO1,2,3) | Sensor Network, Irrigation Control, Farm Dashboard |
| 4 | ระบบพลังงาน ความร้อน–ของไหล และความยั่งยืนในฟาร์ม (Green/Sustainable) | L2–L3 | EN-714-11005 (CLO1,2,3) · EN-714-12011 (CLO1) | Thermo-fluid Analysis, Energy Audit |
| 5 | ห่วงโซ่เกษตร–อาหารอัจฉริยะ: พยากรณ์ผลผลิต/ราคา การตรวจสอบย้อนกลับ และ decision support | L3 *(T1)* | EN-714-12010/304 · EN-714-12019 | GIS/UAV data, Time-Series, Traceability, Farm DSS |

**วิธีวัดและประเมินผล:** โครงงานสร้าง/ประกอบระบบฟาร์มอัจฉริยะ (Build Project) · ปฏิบัติการภาคสนามและ Workshop 1–3 · การประเมินผลสหกิจในสถานประกอบการเกษตร

## EN-AISK03 · วิศวกรรมอุตสาหกรรมอัจฉริยะและระบบอัตโนมัติ<br>*(Smart Industry — AI Industrial Engineering & Automation)*
**กลุ่ม:** **G2 · วิศวกรรมโดเมนอัจฉริยะ: สร้างและประกอบโครงสร้างพื้นฐาน กลไก และเครื่องจักร** · **ประเภท:** Hard Skill · **ผูกทักษะแกน:** H5, H11, H13, **H17, H18** *(แกนของ **T2**)*

| # | ทักษะย่อย | ระดับเป้าหมาย | CLO ที่เกี่ยวข้อง | เครื่องมือ |
|---|---|---|---|---|
| 1 | ระบบควบคุมอัตโนมัติ PLC/SCADA และเครือข่ายอุตสาหกรรม | L3–L4 *(T2)* | EN-714-12012 (CLO1,2) · EN-714-11010 (CLO1) | PLC (Ladder/FBD/ST), SCADA/HMI, Industrial Protocols |
| 2 | หุ่นยนต์อุตสาหกรรมและหุ่นยนต์ร่วมปฏิบัติงาน (Robotics & Cobots) · **ระบบอัตโนมัติเพื่อทดแทนแรงงานที่ขาดแคลนและการทำงานร่วมมนุษย์–เครื่องจักรอย่างปลอดภัย** *(ตอบ N14)* | L2–L3 | EN-714-12012 (CLO2,3) | ROS, Robot Arm, Motion Control, Safety/Ergonomics |
| 3 | Smart Factory, MES/ERP, Digital Twin และ OT/IT integration | L3 บูรณาการ | EN-714-12012 (CLO1,2,3) | MES/ERP, Simulation, Digital Twin Platform |
| 4 | Process/Production Optimization, Lean, Six Sigma, Quality/SPC และ OEE | L3–L4 *(T2)* | EN-714-12010/306/307 · EN-714-11009 | SPC, OEE, Optimization Solver, Lean/Six Sigma |
| 5 | Maintenance, Reliability และ Asset Intelligence | L3–L4 *(T2)* | EN-714-12012 · EN-714-12019 | RCA, FMEA/FMECA, CMMS/EAM, Condition Monitoring, RUL |

**วิธีวัดและประเมินผล:** โครงงานระบบอัตโนมัติ/สายการผลิต (Automation Project) · การวิเคราะห์กรณีศึกษาอุตสาหกรรม (Industry Case Study) · รายงานศึกษาดูงาน · การประเมินผลสหกิจในโรงงาน

## EN-AISK04 · ระบบตรวจวัด การประมวลผลที่ขอบเครือข่าย และระบบไซเบอร์กายภาพ<br>*(Sensing, Edge & Cyber-Physical Systems)*
**กลุ่ม:** **G3 · ระบบตรวจวัด การรับรู้ และการตัดสินใจอัจฉริยะ** · **ประเภท:** Hard Skill · **ผูกทักษะแกน:** H9, H5 *(บูรณาการ)*, H4 *(Edge–Cloud)* *(แกนร่วมของ **T1 + T2**)*

| # | ทักษะย่อย | ระดับเป้าหมาย | CLO ที่เกี่ยวข้อง | เครื่องมือ |
|---|---|---|---|---|
| 1 | IoT เครือข่ายเซนเซอร์ และการรับสัญญาณเรียลไทม์ | L3 บูรณาการ *(T1 → L4)* | EN-714-12005 (CLO1,2) · EN-714-11006 (CLO2,3) | Arduino/RPi, MQTT, LoRa |
| 2 | Edge AI / TinyML และการประมวลผลที่ขอบเครือข่าย | L2–L3 | EN-714-12005 (CLO2) · EN-714-12008 (CLO1) | TinyML, Edge Device, Model Quantization |
| 3 | **ระบบไซเบอร์-กายภาพและการบูรณาการ OT/IT** (Cyber-Physical Systems) | L3 บูรณาการ | EN-714-11010 (CLO1) · EN-714-12012 (CLO1) · EN-714-12012 (CLO2) | PLC↔Edge AI Integration, SCADA Gateway |
| 4 | ความปลอดภัยและการจัดการอุปกรณ์ Edge–Cloud | L2 ประยุกต์ | EN-714-12005 (CLO3) · EN-714-12008 (CLO3) | Device Management, Edge Security |

**วิธีวัดและประเมินผล:** โครงงานบูรณาการระบบ (System Integration Project — ปฏิบัติการ 3) · การสาธิตระบบ IoT–Edge–Cloud ในฟาร์ม/โรงงาน · การประเมินผลสหกิจศึกษา

## EN-AISK05 · การรับรู้ การพยากรณ์ และการตัดสินใจด้วยปัญญาประดิษฐ์<br>*(AI Perception, Prediction & Decision Intelligence)*
**กลุ่ม:** **G3 · ระบบตรวจวัด การรับรู้ และการตัดสินใจอัจฉริยะ** · **ประเภท:** Hard Skill · **ผูกทักษะแกน:** H8, H11, H13, H16–H19 *(ครอบคลุม **T1 + T2 + T3**)*

| # | ทักษะย่อย | ระดับเป้าหมาย | CLO ที่เกี่ยวข้อง | เครื่องมือ |
|---|---|---|---|---|
| 1 | **การรับรู้/มองเห็นของเครื่อง**: CV เพื่อการเกษตรและการตรวจสอบคุณภาพ *(โรคพืช/คัดเกรด/Quality Inspection)* | L3 บูรณาการ *(T1,T2 → L4)* | EN-714-12006 (CLO1,2) | OpenCV, YOLO, CNN |
| 2 | UAV, Remote Sensing และ GeoAI | L2–L3 | EN-714-12015 (CLO1,2) | QGIS, NDVI/NDWI, Drone SDK |
| 3 | การพยากรณ์และวิเคราะห์เชิงทำนาย *(ผลผลิต · อุปสงค์ · การบำรุงรักษา)* | L3 บูรณาการ | EN-714-12010 (CLO1) · EN-714-12011 (CLO2) · EN-714-12012 (CLO2) | Time-Series, Forecasting Models |
| 4 | **AI สำหรับองค์กรและธุรกิจ** *(DSS, Fraud Detection, Customer/Supply Analytics)* | L2–L3 *(T3)* | EN-714-12010 (CLO2,3) · EN-714-12009 (CLO1) | BI/DSS, Anomaly Detection |
| 5 | Decision Intelligence สำหรับเกษตร/การผลิต/องค์กร: scenario, simulation, optimization และ explainable recommendation | L2–L3 | EN-714-12010/304/306 · EN-714-12019 | Power BI, Solver, Simulation, Decision Model |
| 6 | การสื่อสารผลการวิเคราะห์เชิงโดเมน | L2–L3 | EN-714-12006 (CLO3) · EN-714-12012 (CLO3) | Dashboard, รายงานเชิงภาพ |

**วิธีวัดและประเมินผล:** โครงงาน CV/พยากรณ์ตามโดเมน · การทดสอบภาคปฏิบัติการบินโดรน (Drone Flight Practical Test) · Dashboard และรายงานการวิเคราะห์เชิงตัดสินใจ

## EN-AISK06 · ปัญญาประดิษฐ์เชิงสร้าง ระบบเอเจนต์ และการทำงานร่วมระหว่างมนุษย์กับปัญญาประดิษฐ์<br>*(Generative, Agentic & Human–AI Systems)*
**กลุ่ม:** **G4 · ปัญญาประดิษฐ์เชิงสร้าง ระบบเอเจนต์ และการทำงานร่วมกับ AI** · **ประเภท:** Hard + Hybrid Skill · **ผูกทักษะแกน:** H6, H10, S7 *(แกนของ T3 และใช้ร่วมทุก Track)* · **เทียบเคียง:** IMDA GenAI TSC#2–#6, #9

| # | ทักษะย่อย | ระดับเป้าหมาย | CLO ที่เกี่ยวข้อง | เครื่องมือ |
|---|---|---|---|---|
| 1 | Prompt/Context Engineering และ RAG *(IMDA TSC#3, #6)* | L2–L3 | EN-714-12001 (CLO1) · EN-714-12014 (CLO1) | LLM APIs, Vector DB, LangChain |
| 2 | AI Agents, Agentic & Compound AI Workflows | L3 บูรณาการ | EN-714-12014 (CLO1,2) | LangChain/LangGraph, Tool Use, API Orchestration |
| 3 | การคัดเลือกและประเมินโมเดล GenAI เชิงพาณิชย์ *(IMDA TSC#4, #5)* | L2–L3 | EN-714-12014 (CLO1,2) | Open-source vs Proprietary (Llama/GPT), BLEU, LLM-as-judge, MLflow |
| 4 | LLM Red-teaming และการประเมิน Hallucination/Safety *(IMDA TSC#9)* | L3 บูรณาการ | EN-714-12014 (CLO2) · EN-714-12019 (CLO4) | **Project Moonshot**, Guardrails, Adversarial Prompt Test |
| 5 | การประมวลผลภาษาไทย (Thai NLP) | L2 ประยุกต์ | EN-714-12014 (CLO1) | AI for Thai, HuggingFace |
| 6 | การใช้เครื่องมือปัญญาประดิษฐ์และการทำงานร่วมระหว่างมนุษย์กับปัญญาประดิษฐ์อย่างตรวจสอบได้ | L2–L3 | EN-714-11002 (CLO2) · EN-714-12013 (CLO2) · EN-714-12017/302 | AI Coding Tools, Prompt Log, Human Review |

**วิธีวัดและประเมินผล:** โครงงานพัฒนาระบบเอเจนต์ (Agent Project) · การสาธิตระบบ (Demo) · **รายงานการคัดเลือก/ประเมินโมเดลและผล LLM Red-teaming (Baseline Safety Report)** · การประเมินผลสหกิจ (T3)

> [!info] เทียบเคียงมาตรฐานสิงคโปร์ (IMDA / Project Moonshot)
> ต่อยอดจากทักษะย่อย 1–2 (Prompt/RAG/Agentic) ให้ครอบคลุม **การเลือกโมเดล Open-source vs Proprietary** (ต้นทุน/ความเร็ว/ความปลอดภัย เช่น Llama เทียบ GPT-4) และ **การทดสอบความปลอดภัย LLM** ตามความเสี่ยง 5 ประการของ Project Moonshot (Hallucination · Bias · Undesirable Content · Data Leakage · Adversarial Prompt) — ยกระดับบัณฑิตจากผู้เรียกใช้ API สู่สถาปนิกระบบที่รับประกันความปลอดภัยก่อน Deploy

## EN-AISK07 · ปัญญาประดิษฐ์ที่รับผิดชอบ ความมั่นคงปลอดภัย ธรรมาภิบาล และการรับรองระบบ<br>*(Responsible AI, Security, Governance & Assurance)*
**กลุ่ม:** **G5 · ธรรมาภิบาล ความมั่นคงปลอดภัย และการรับรองระบบ** · **ประเภท:** Hybrid *(ความรู้ + ทักษะ + ทัศนคติ)* · **ผูกทักษะแกน:** H7 · **เทียบเคียง:** AI Verify (11 หลักการ) · IMDA GenAI TSC#8, #9 · **ISO/IEC 42001 · NIST AI RMF · EU AI Act** · ACM/IEEE/IFIP/ABET Cybersecurity

| # | ทักษะย่อย | ระดับเป้าหมาย | CLO ที่เกี่ยวข้อง | เครื่องมือ |
|---|---|---|---|---|
| 1 | ความปลอดภัยของ AI และความเป็นส่วนตัว *(AI Security: Data Poisoning, Model Inversion, Adversarial, PDPA)* | L2–L3 | EN-714-12005 (CLO3) · EN-714-12008 (CLO2) · EN-714-12014 (CLO2) | Threat Modeling, PDPA Checklist, Adversarial Test |
| 2 | Responsible AI / ธรรมาภิบาล *(AI Verify 11 หลักการ + ISO/IEC 42001, NIST AI RMF, EU AI Act)* | L2–L3 | EN-714-12001 (CLO2) · EN-714-12017 (CLO2) · EN-714-12018 (CLO2) · EN-714-12015 (CLO3) | **AI Verify Toolkit**, Model Card, ISO 42001/NIST AI RMF |
| 3 | การจัดทำหลักฐานเชิงประจักษ์ทางธรรมาภิบาล (Audit & Compliance Evidence) | L3 บูรณาการ | EN-714-12018 (CLO2) · EN-714-12019 (CLO4) | Model Card · Fairness Evaluation Report · Robustness Log *(Outcome/Process/Evidence)* |
| 4 | การรับรองความปลอดภัย ความน่าเชื่อถือ และความสอดคล้องของระบบ | L3 บูรณาการ | EN-714-11010 (CLO2) · EN-714-12019 (CLO2) | Risk Register, Assurance Case, Verification Evidence |
| 5 | จรรยาบรรณวิชาชีพในสถานการณ์จริง | L3 (Mastery ที่สหกิจ) | EN-714-17001 (CLO2) · EN-714-17002 (CLO4) | Case Study, Employer Rubric |

**วิธีวัดและประเมินผล:** การวิเคราะห์กรณีศึกษา (Case Study) · **การจัดทำ Model Card / Fairness Evaluation Report / Robustness Log ตามกรอบ AI Verify** · การประเมินจากสถานประกอบการ (Employer Evaluation from Co-op)

> [!info] เทียบเคียงมาตรฐานสิงคโปร์ (AI Verify — IMDA)
> เปลี่ยนการสอนจริยธรรมจาก "กรณีศึกษาเชิงปรัชญา" ให้เป็น **กระบวนการวิศวกรรมที่วัดผลได้** โดยใช้โครงสร้าง **Outcome → Process → Evidence** ของ AI Verify กับหลักการ 11 ประการ (Transparency · Explainability · Repeatability · Safety · Security · Robustness · Fairness · Data Governance · Accountability · Human Oversight · Societal/Environmental Well-being) — ทำให้ทัศนคติ (Attitude) ของ PLO4 กลายเป็นทักษะแข็ง (Hard Skill) ที่ประเมินใน Skill Transcript ได้จริง

## EN-AISK08 · การสื่อสาร การทำงานเป็นทีม ภาวะผู้นำ และความเป็นผู้ประกอบการ<br>*(Communication, Teamwork, Leadership & Entrepreneurship)*
**กลุ่ม:** **G6 · การสื่อสาร ทีม ภาวะผู้นำ และผู้ประกอบการ** · **ประเภท:** Soft Skill · **ผูกทักษะแกน:** S1–S6, S8

| # | ทักษะย่อย | ระดับเป้าหมาย | CLO ที่เกี่ยวข้อง | เครื่องมือ |
|---|---|---|---|---|
| 1 | การคิดวิเคราะห์เชิงระบบ (Analytical/Systems Thinking) | L3 | EN-714-12018 (CLO1) · แทรกทุกโครงงาน | System Map, Root-cause |
| 2 | สื่อสารเชิงวิชาชีพและภาษาอังกฤษเทคนิค | L3–L4 | EN-714-12017/302 (CLO1) · EN-714-17001 (CLO1) · EN-714-12019 (CLO4) | Slides, รายงาน, Technical English |
| 3 | ทำงานเป็นทีมและภาวะผู้นำ | L4 นำไปใช้ | EN-714-12019 (CLO3) · EN-714-17002 (CLO2) · EN-714-11004/129/230 | Git, Team Charter, 360° Feedback |
| 4 | ผู้ประกอบการและการบริหารโครงการ (Entrepreneurial/PM) | L2–L3 | EN-714-12009 (CLO1,2) · EN-714-17002 · YLO4.4 | BMC, Lean Canvas, Gantt |
| 5 | การเรียนรู้ตลอดชีวิตและการปรับตัว | L3 | EN-714-12007 (CLO3) · EN-714-12018 (CLO3) | Learning Portfolio |
| 6 | กลยุทธ์การแปลงโฉมดิจิทัลและการคิดเชิง Compound AI *(T3)* · **การออกแบบที่ครอบคลุมและเข้าถึงได้ (Inclusive & Accessible Design)** *(ตอบ N17)* | L2–L3 | EN-714-12009 (CLO2) · EN-714-12019 (CLO1) | Digital Transformation Canvas, System-of-Systems View, Inclusive Design Checklist |

**วิธีวัดและประเมินผล:** การประเมินการทำงานกลุ่มในโครงงาน (Group Project Assessment) · การนำเสนอในสัมมนา (Seminar Presentation) · การประเมิน 360° จากสหกิจ · แผนธุรกิจ/Value Proposition · Learning Portfolio

> [!info] เทียบเคียงมาตรฐานสิงคโปร์ (NUS BAIS / Compound AI)
> เสริม **Digital Transformation Strategy** และกรอบคิด **Compound AI Systems** (มองระบบเป็นนิเวศของเครื่องมือหลายชนิดทำงานร่วมกัน ไม่ใช่โมเดลเดี่ยว) เพื่อเสริมจุดแข็งบัณฑิตแขนง T3 ในการวิเคราะห์ช่องว่างธุรกิจ–เทคโนโลยีและบริหารนวัตกรรมให้คุ้มค่าการลงทุน (ROI)

## EN-AISK09 · ข้อกำหนด สถาปัตยกรรม การบูรณาการ และการส่งมอบระบบ<br>*(Requirements, Architecture, Integration & System Delivery)*

**กลุ่ม:** **G7 · ข้อกำหนด สถาปัตยกรรม การบูรณาการ และการส่งมอบ** · **ประเภท:** Hard + Hybrid Skill · **ผูกทักษะ:** H20, S9, S10 *(เน้น T3 และใช้ข้าม Track)* · **หลักฐานตลาด:** C02, C06, C07, C11

| # | ทักษะย่อย | ระดับเป้าหมาย | CLO ที่เกี่ยวข้อง | เครื่องมือ/หลักฐาน |
|---|---|---|---|---|
| 1 | Requirements Engineering, stakeholder mapping และ acceptance criteria | L3 | EN-714-12009 · EN-714-12018/404 | Interview, Context Map, Backlog, Acceptance Criteria |
| 2 | Solution Architecture, API และ System Integration | L3–L4 *(T3)* | EN-714-12013/309 · EN-714-12019 | C4/UML, API Contract, Integration Test |
| 3 | สถาปัตยกรรมบริการดิจิทัล: Cloud/SaaS, IAM, ITSM, backup/DR และ e-Service | L2–L3 | EN-714-12007/208 · EN-714-12013 | Cloud Architecture, IAM Matrix, Service Catalog, DR Plan |
| 4 | การทวนสอบ คุณภาพ ความปลอดภัย ความมั่นคงปลอดภัย และสมรรถนะบริการ | L3 | EN-714-11010 · EN-714-12007 · EN-714-12019 | SLA/SLO, Risk Register, Test Report, Monitoring Dashboard |
| 5 | การนำระบบไปใช้ การจัดการการเปลี่ยนแปลง และการยอมรับของผู้ใช้ | L3 | EN-714-12009 · EN-714-12018/404 | Change Plan, User Acceptance Test, Adoption Evidence |
| 6 | การส่งมอบเพื่อดำเนินงานและการปรับปรุงบริการอย่างต่อเนื่อง | L3 | EN-714-17001/402 · EN-714-12019 | Runbook, Handover Evidence, Incident Review |

**วิธีวัดและประเมินผล:** Solution Architecture Portfolio · Requirements/Acceptance Package · Integration/UAT Demo · Service Runbook · Change/Adoption Plan · การประเมินจากสถานประกอบการ

> [!note] ขอบเขต
> AISK09 ไม่แทน AISK01 หรือ AISK05: AISK01 วัดความสามารถสร้าง AI/data/software stack และ AISK05 วัดการรับรู้ พยากรณ์ และตัดสินใจ ส่วน AISK09 วัดการแปลงความสามารถเหล่านั้นเป็นระบบที่มีข้อกำหนดชัดเจน เชื่อมต่อระบบเดิม ผ่านการยอมรับ และส่งมอบให้ดำเนินงานต่อได้

---

## สรุปการเชื่อมโยง Skill Set ↔ PLO ↔ Track

| Skill Set | กลุ่ม | ทักษะ/ฐานทักษะ | PLO หลัก | PLO สนับสนุนเมื่อมีหลักฐาน | T1 | T2 | T3 |
|---|:---:|---|---|---|:---:|:---:|:---:|
| **AISK01** AI Core Engineering Stack | G1 | H1–H4, H12, H14 | PLO1, PLO2, PLO6 | PLO3, PLO4 | ● | ● | ● |
| **AISK02** Smart Agriculture Engineering | G2 | H9, H15, H16; EF1–EF5 | PLO1, PLO2 | PLO4, PLO6 | **●** | ○ | ○ |
| **AISK03** Smart Industry and Automation | G2 | H5, H11, H13, H17, H18; EF1–EF6 | PLO1, PLO2, PLO6 | PLO4, PLO5 | ○ | **●** | ○ |
| **AISK04** Sensing, Edge and Cyber-Physical Systems | G3 | H4, H5, H9; EF4–EF5 | PLO2, PLO6 | PLO1, PLO4 | ● | ● | ○ |
| **AISK05** AI Perception, Prediction and Decision Intelligence | G3 | H8, H11, H13, H16–H19 | PLO2, PLO6 | PLO1, PLO3 | ● | ● | ● |
| **AISK06** Generative, Agentic and Human–AI Systems | G4 | H6, H10, S7 | PLO2, PLO7 | PLO4 | ○ | ○ | **●** |
| **AISK07** Responsible AI, Security, Governance and Assurance | G5 | H7; EF6 | PLO4 | PLO2, PLO6 | ● | ● | ● |
| **AISK08** Communication, Teamwork, Leadership and Entrepreneurship | G6 | S1–S6, S8 | PLO3, PLO5, PLO7 | PLO1, PLO2 | ● | ● | ● |
| **AISK09** Requirements, Architecture, Integration and Delivery | G7 | H20, S9, S10; EF1, EF6 | PLO2, PLO3, PLO5 | PLO4, PLO6, PLO7 | ○ | ○ | **●** |

**การอ่านตาราง:** คอลัมน์ **PLO หลัก** ใช้กำหนดความรับผิดชอบขั้นต่ำของชุดทักษะ ส่วน **PLO สนับสนุน** จะนับเฉพาะเมื่อ CLO และหลักฐานประเมินวัดพฤติกรรมของ PLO นั้นโดยตรง การแยกสองคอลัมน์แก้ความคลาดเคลื่อนเดิมที่นำผลรวมของทุก sub-skill ไปแสดงเป็น PLO หลักของทั้ง Skill Set

**การอ่านภาระรายวิชา:** AISK ตัวแรกในช่อง H/S–AISK ของ CLO คือ **เจ้าภาพหลัก**; AISK ถัดไปเป็นผู้สนับสนุน การรายงาน Skill Set Feed จึงแยกจำนวนวิชา/CLO เจ้าภาพออกจากความสัมพันธ์สนับสนุน เพื่อไม่ให้นับรายวิชาบูรณาการซ้ำเต็มจำนวน

> [!success] ครบทั้ง KSA และ Constructive Alignment
> - **Knowledge** = หัวข้อ/keywords ต่อ PLO (ส่วน A) → สอนในวิชาแกน
> - **Skill** = 9 Skill Set + ทักษะย่อย + เครื่องมือ (ส่วน B) → ประเมินเป็น Skill Transcript
> - **Attitude** = ทัศนคติต่อ PLO (ส่วน A) → ปลูกฝังผ่านสัมมนา/ปฏิบัติการ/สหกิจ
> - ทุก Skill Set ลิงก์ CLO จริงจาก [[10_Course_Learning_Outcomes_CLO_Mapping]] และวิธีวัดผลชัดเจน

# ส่วน C — การเทียบเคียงมาตรฐานสากล (สิงคโปร์ IMDA / AI Verify / Career Maps)

> เทียบเคียงชุดทักษะ EN-AISK01–09 และ PLO 7 ข้อ กับกรอบมาตรฐานของสิงคโปร์ (ผู้นำเศรษฐกิจดิจิทัลของภูมิภาค) เพื่อยืนยันความครบถ้วนและความเป็นสากล · แหล่งอ้างอิง: IMDA SFw for ICT (GenAI), AI Verify Foundation, Consolidated ICT Career Maps

## C.1 IMDA GenAI TSC (9 ทักษะ) ↔ Skill Set ของหลักสูตร

สิงคโปร์แบ่งคนทำงาน AI เป็น **AI Users** (ใช้ AI เพิ่มประสิทธิภาพ) และ **AI Practitioners** (สร้าง/พัฒนา/ deploy ระบบ) — บัณฑิตหลักสูตรนี้เป็น **AI Practitioners** เป็นหลัก และมีพื้นฐาน AI User literacy ผ่าน S7

| IMDA GenAI TSC | กลุ่ม | ครอบคลุมโดย | สถานะ |
|---|---|---|:--:|
| #1 Generative AI Principles & Applications | Fundamentals | AISK06 (ย่อย 1) · EN-714-12001 | ✅ |
| #2 Prompt Design *(AI Users)* | Fundamentals | S7 (AI Literacy) · EN-714-12001 | ✅ |
| #3 Prompt Engineering *(Practitioners)* | Fundamentals | AISK06 (ย่อย 1) | ✅ |
| #4 Generative AI Model Selection | Product Dev Lifecycle | **AISK06 (ย่อย 3 — เพิ่มใหม่)** | ✅ ปรับปรุง |
| #5 Generative AI Model Evaluation | Product Dev Lifecycle | **AISK06 (ย่อย 3 — เพิ่มใหม่)** | ✅ ปรับปรุง |
| #6 GenAI Application Dev & Deployment | Product Dev Lifecycle | AISK06 (ย่อย 2) · AISK01 (ย่อย 5 Full-stack) | ✅ ปรับปรุง |
| #7 GenAI Model Development & Fine-tuning | Model Development | AISK01 (ย่อย 2) · AISK06 | ◐ ระดับเลือก/ลึก T3 |
| #8 Responsible AI & GenAI Practices | Ethics & Governance | **AISK07 (ย่อย 2,3 — เพิ่มใหม่)** | ✅ ปรับปรุง |
| #9 Security & Ethics (Red-teaming) | Ethics & Governance | **AISK06 (ย่อย 4) · AISK07 (ย่อย 1,3)** | ✅ ปรับปรุง |

> TSC#7 (Fine-tuning ขั้นสูง/RLHF) กำหนดเป็นความลึกระดับเลือก (T3/วิชาเลือกชีพ) ไม่บังคับทุกคน สอดคล้องเกณฑ์แกน L2–L3 ของหลักสูตร

## C.2 AI Verify — 11 หลักการธรรมาภิบาล ↔ PLO4 / AISK07

| หลักการ AI Verify | เชื่อมโยง PLO/ทักษะ | หลักฐาน (Evidence) ที่นักศึกษาผลิต |
|---|---|---|
| 1 Transparency · 2 Explainability | PLO4 · AISK07 · AISK01(XAI) | Model Card, XAI Report (SHAP) |
| 3 Repeatability/Reproducibility | PLO6 · AISK01 | Audit Trail, Experiment Log |
| 4 Safety · 6 Robustness | PLO4 · AISK06(ย่อย4) | Robustness Log, Red-teaming Report |
| 5 Security | PLO4 · AISK07(ย่อย1) | Threat Model, PDPA Checklist |
| 7 Fairness | PLO4 · AISK07 | Fairness Evaluation Report |
| 8 Data Governance | PLO4/PLO6 · AISK01 (ย่อย 7) | Data Lineage, Governance Doc |
| 9 Accountability · 10 Human Oversight | PLO4/PLO5 · AISK07/08 | RACI, Human-in-the-loop Design |
| 11 Societal & Environmental Well-being | PLO4/PLO7 · AISK07 · H15 | Impact Assessment, Energy Footprint |

## C.3 Career Maps (สิงคโปร์) ↔ เส้นทางอาชีพ/Track ของหลักสูตร

สิงคโปร์จัด ICT เป็น 8 Tracks / 33 Sub-tracks / 123 job roles — กลุ่ม **Data & AI** เทียบกับ Track ของเราได้ดังนี้

| Sub-track / Role (สิงคโปร์) | Skill Set หลัก | Track หลักสูตร |
|---|---|---|
| AI/ML Engineer → Senior AI/ML Engineer | AISK01 | ทุก Track |
| Data Engineer → Senior → Data Architect | AISK01 (ย่อย 7) | ทุก Track (เน้น T3) |
| Data Scientist / AI Scientist | AISK01, AISK05 | ทุก Track |
| ML Ops / AI Infrastructure | AISK01 (ย่อย 6), AISK04 | T3 |
| Computer Vision / Perception Engineer | AISK05 *(Applied AI/Machine Understanding)* | T1, T2 |
| GenAI Engineer / AI Applied Researcher | AISK06 | T3 |
| **Agricultural Machinery / Smart Farm Engineer** | **AISK02** + AISK04 | **T1** |
| **Automation / Robotics / OT Engineer** | **AISK03** + AISK04 | **T2** |
| Smart Factory / Process & Production Engineer | **AISK03** + AISK04/05 | **T2** |
| Predictive Maintenance / Reliability Engineer | **AISK03** + AISK05 | **T2** |
| Decision Support / Operations Analytics Specialist | **AISK05** + AISK01 | T2, T3 |
| Enterprise Solution / Digital Technology Specialist | **AISK09** + AISK01/07 | T3 / ข้าม Track |
| Business Analyst / AI Translator, Chief AI Officer | AISK08 + **AISK09** | ทุก Track (ผู้นำ) |

> โครงสร้าง 3 Tracks + 9 Skill Set ครอบคลุมเส้นทางอาชีพเดิม C01–C12 และ role clusters เพิ่มเติม C13–C17 โดย AISK02/AISK03 รักษาจุดต่างด้านวิศวกรรมกายภาพเฉพาะโดเมน AISK05 รับผิดชอบ Decision Intelligence/DSS และ AISK09 รับผิดชอบการส่งมอบ Enterprise Solution กับ Digital Services

## C.4 มาตรฐานหลักสูตรและธรรมาภิบาลสากล ↔ องค์ประกอบหลักสูตร

| มาตรฐานสากล | ขอบเขต | เชื่อมโยง |
|---|---|---|
| **CS2023** (ACM/IEEE-CS/AAAI) | Knowledge Areas ด้าน AI/คอมพิวเตอร์ (Math Foundations, Symbolic+Subsymbolic AI, ML, SW Eng, Data) | **AISK01** · AISK05 (Perception) · PLO1/PLO2 |
| **ISO/IEC 42001** | ระบบจัดการปัญญาประดิษฐ์ (AI Management System) | AISK07 · PLO4 |
| **NIST AI RMF** | กรอบบริหารความเสี่ยง AI (Govern/Map/Measure/Manage) | AISK07 · PLO4 |
| **EU AI Act / OECD / G7** | การกำกับ AI ตามระดับความเสี่ยง | AISK07 · PLO4 |
| **AI Verify + Project Moonshot** | การทดสอบธรรมาภิบาล + LLM Red-teaming | AISK06/AISK07 · PLO4 |
| **ACM/IEEE/IFIP/ABET Cybersecurity** | AI Security Specialization (Data Poisoning, Model Inversion, Penetration Testing) | AISK07 · PLO4 |

## C.5 การประยุกต์ AI เฉพาะโดเมน ↔ Track ของหลักสูตร

| โดเมน (จากเอกสารสากล) | องค์ความรู้/เทคนิคเด่น | Track | Skill Set |
|---|---|:--:|---|
| **Agriculture 5.0 / Smart Farm** | IoT, Precision Ag, Digital Life Cycle of Crops, Photogrammetry, UAV, CV (YOLO/CNN), GANs/Diffusion เพื่อ Data Augmentation | **T1** | **AISK02**, AISK04, AISK05, AISK01 |
| **Smart Factory / Industrial AI** | Cyber-Physical Systems, Automated Quality Control, Predictive Maintenance, Robotics/Cobots, Reinforcement Learning | **T2** | **AISK03**, AISK04, AISK05, AISK01 |
| **Enterprise / FinTech AI** | BAIS, Full-stack AI, DSS, Integration, Digital Services, Fraud Detection, GenAI CX/Robo-advisors | **T3** | **AISK09**, AISK05, AISK06, AISK08, AISK01 |
| **Medical & Healthcare AI** *(โดเมนใหม่ — นอก 3 Track)* | Bioinformatics, Medical Image Analysis (MRI/CT), Bayesian Networks, Genomics, Drug Discovery | — | *(Watchlist: วิชาเลือก/Micro-credential อนาคต)* |

> [!tip] ข้อสังเกตเชิงกลยุทธ์
> โดเมน **Healthcare/Bioinformatics** เป็นตลาดที่โตสูงแต่ยังไม่อยู่ใน 3 Track ปัจจุบัน — เสนอเป็น **Watchlist** สำหรับวิชาเลือกชีพ/Micro-credential หรือ Track ที่ 4 ในอนาคต (ต้องใช้ Bayesian/Probabilistic Reasoning + CV + Responsible AI/PDPA ซึ่งมีในแกนอยู่แล้ว)

---

# ส่วน D — การตรวจสอบความสอดคล้องของทักษะข้ามเอกสาร (Skill Alignment Verification)

> ตรวจสอบว่า **ทุกทักษะ (H/S) → Skill Set → CLO → YLO → PLO** เชื่อมโยงกันครบและ "รองรับด้วย PLO" ทุกจุด · อ้างอิง [[03_Target_Skills]] · [[../03_OBE_PLO_Design_2570/07_Curriculum_PLO_Mapping]] · [[10_Course_Learning_Outcomes_CLO_Mapping]]

## D.1 เมทริกซ์ตรวจสอบ: ทักษะแกน H/S → Skill Set → PLO

| ทักษะแกน | Skill Set | PLO ที่รองรับ | รายวิชาหลัก | สถานะ |
|---|---|---|---|:--:|
| H1 AI/ML & Math | **AISK01** (G1 ย่อย 1–4) | PLO1, PLO6 | 131-102, 131-206, 131-101 | ✅ +Symbolic/CS2023 |
| H2 Programming & SW Eng | **AISK01** (G1 ย่อย 5) | PLO2, PLO1 | 001-126, 132-308 | ✅ +Full-stack |
| H3 Data Eng & Analytics | **AISK01** (G1 ย่อย 7) | PLO6, PLO2, PLO3 | 131-207, 132-303 | ✅ |
| H4 MLOps & Cloud | **AISK01** (G1 ย่อย 6) · AISK04 (Edge–Cloud) | PLO2, PLO4 | 131-205, 131-208 | ✅ |
| H5 Automation & Digital Twin | **AISK03** (G2 อุตสาหกรรม) · AISK04 (บูรณาการ) | PLO2, PLO1 | 132-307, 132-306 | ✅ |
| H6 GenAI, LLM & Agentic | AISK06 (G4) | PLO2, PLO7 | 131-101, 132-309 | ✅ เสริม TSC#4/5/9 |
| H7 Security & Responsible AI | AISK07 (G5) | PLO4 | 131-204/208, 134-201/302 | ✅ +AI Verify/ISO 42001/NIST |
| H8 Computer Vision & Remote Sensing | **AISK05** (G3 ความเข้าใจของเครื่อง) | PLO2, PLO6 | 131-203, 132-305 | ✅ |
| H9 IoT, Edge & Sensor | **AISK04** (G3) · AISK02 (ประยุกต์ฟาร์ม) | PLO2, PLO1 | 131-204, 001-127 | ✅ |
| ฐานวิศวกรรมกายภาพ *(กลศาสตร์/วัสดุ/ความร้อน-ของไหล/เขียนแบบ/Workshop)* | **AISK02** (G2 เกษตร) · AISK03 (G2 อุตสาหกรรม) | PLO2, PLO1 | 001-123/124/125, 001-128/129/230 | ✅ **ใหม่ — แกน Build & Construct** |
| H11 Time-Series & Forecasting | **AISK05** · AISK03 | PLO6, PLO2 | 001-122, 132-303/304/306 | ✅ baseline ในแกน; ลึกตาม Track |
| H12 Big Data & Streaming | **AISK01** (ย่อย 7) | PLO2, PLO6 | 131-207 | ◐ baseline; distributed/streaming L4 ใช้วิชาเลือก |
| H13 RL, Optimization & OR | **AISK03** · AISK09 | PLO1, PLO2 | 131-102, 132-303/306 | ✅ optimization/OR ในแกน; RL ลึกใช้วิชาเลือก |
| H14 Data-Centric AI | **AISK01** (ย่อย 7) | PLO6 | 001-122, 131-203/205/206/207 | ◐ ปิดเมื่อใช้ dataset/lineage/label-quality rubric |
| H15 Green/Sustainable AI | **AISK02** · AISK07/08 | PLO2, PLO4 | 001-121/123/230, 131-205, 132-302/304/306 | ◐ ปิดเมื่อใช้ BCG/carbon rubric ทุก Track |
| H10 NLP / Thai NLP | AISK06 (ย่อย 5) | PLO2, PLO7 | 131-101, 132-309 | ◐ baseline; Thai NLP L4 ใช้วิชาเลือก |
| H16 Smart/Precision Agriculture & Agri-food | **AISK02** · AISK05 | PLO1, PLO2, PLO6 | 132-303/304/305 | ✅ baseline ในแกน; ลึก T1 |
| H17 Smart Manufacturing/Process/Quality/MES | **AISK03** · AISK04/05 | PLO1, PLO2, PLO6 | 001-123/127/129, 132-306/307/201 | ✅ baseline ในแกน; ลึก T2 |
| H18 Maintenance/Reliability/Asset Intelligence | **AISK03** · AISK05 | PLO1, PLO2, PLO6 | 132-306, 134-404 | ◐ baseline; C16/L4 ใช้ Advanced Maintenance elective |
| H19 Decision Intelligence/BI/DSS | **AISK05** | PLO1, PLO2, PLO3, PLO6 | 001-121, 131-207, 132-303/304/306 | ✅ ในแกนร่วม |
| H20 Enterprise Architecture/Integration/Digital Services | **AISK09** | PLO2, PLO3, PLO4, PLO7 | 001-124/230, 131-205/208, 132-302/308/309 | ◐ architecture/integration ในแกน; ITSM/IAM/DR/e-Service L4 ใช้วิชาเลือก |
| EF1 Drawing/CAD/Layout/P&ID | AISK02/03/09 | PLO2; สนับสนุน PLO3 | 001-124, 132-307 | ✅ |
| EF2 Mechanics/Materials/Fabrication | AISK02/03 | PLO1, PLO2; สนับสนุน PLO4 | 001-125/128 | ✅ |
| EF3 Thermal-Fluid/Energy/Process | AISK02/03 | PLO1, PLO2; สนับสนุน PLO4/PLO6 | 001-123, 132-306 | ✅ |
| EF4 Electrical/Instrumentation/Calibration | AISK03/04 | PLO1, PLO2, PLO6; สนับสนุน PLO4 | 001-127, 132-201 | ✅ |
| EF5 Actuation/Fluid Power/Control | AISK03/04 | PLO2; สนับสนุน PLO4/PLO6 | 001-129, 132-201 | ◐ ปิดระดับบูรณาการ; ความลึก component design ใช้ Lab/วิชาเลือก |
| EF6 Safety/Standards/Commissioning/Handover | AISK07/08/09 | PLO2, PLO4; สนับสนุน PLO3/PLO5/PLO6 | 001-128/129/230, 132-307/201, 134-404/135-402 | ◐ ต้องมี rubric และผู้ทวนสอบ |
| S1 Analytical/Systems | AISK08 | PLO1, PLO6 | 134-303 + ทุกโครงงาน | ✅ |
| S2 Problem-Solving/Judgment | AISK08 | PLO1, PLO2 | ทุกโครงงาน | ✅ |
| S3 Adaptability/Lifelong | AISK08 | PLO7 | 131-205, 134-303 | ✅ |
| S4 Communication/English | AISK08 | PLO3 | 134-201/302, 135-401 | ✅ |
| S5 Teamwork/Leadership | AISK08 | PLO5 | 001-128/129/230, 134-404 | ✅ |
| S6 Product/Entrepreneurial/PM | AISK08 | PLO7 | 132-302, 135-402 | ✅ |
| S7 AI Literacy/Human–AI | AISK06/07 | PLO4, PLO7 | 131-101 | ✅ AI User TSC#2 |
| S8 Empathy/Stakeholder | AISK08 | PLO3, PLO5 | 135-401, 132-302 | ✅ |
| S9 Stakeholder/Requirements/Change | **AISK09** | PLO2, PLO3, PLO5, PLO7 | 132-302, 134-303/404, 135-402 | ◐ สอดแทรก Project/Co-op |
| S10 Agile/Quality/Safety/Accountability | **AISK09** | PLO2, PLO4, PLO5 | 001-128/129/230, 134-404, 135-402 | ◐ สอดแทรก Workshop/Project |

**ผลตรวจสอบ:** H1–H20, S1–S10 และ EF1–EF6 มี Skill Set, PLO, CLO เจ้าภาพ และหลักฐานปลายทางครบ จึงไม่มีทักษะลอย อย่างไรก็ตาม H7/H14/H15/EF5/EF6 ยังขึ้นกับ rubric และทรัพยากร ส่วน H10/H12/H18/H20 ต้องใช้วิชาเลือกสร้างความลึก L4 ตาม Track

> [!note] การเปลี่ยนแปลงจากการ Regroup
> **AISK01** รวมทักษะแกนเทคโนโลยี 4 ด้าน (H1 เรียนรู้/ตัดสินใจ · H2 ซอฟต์แวร์ · H3 ข้อมูล · H4 MLOps) เป็น "แกนกลางบังคับทุก Track" · **AISK02/AISK03** เกิดใหม่เป็นชุด **เฉพาะโดเมน** ที่รับ **ฐานวิศวกรรมกายภาพ** (เดิมกระจายอยู่ในรายวิชาแต่ไม่มีชุดทักษะรองรับ = ปิดช่องว่างสำคัญ) · **AISK04/AISK05** เป็นชั้นระบบอัจฉริยะ/ความเข้าใจของเครื่อง ที่เชื่อมฟาร์ม–โรงงาน–องค์กร

## D.2 ความครบถ้วนราย PLO (ทุก PLO มีทักษะ + CLO + Skill Set รองรับ)

| PLO | ทักษะแกนหลัก | Skill Set | ระดับปลายทาง | ช่องว่าง/การแก้ |
|---|---|---|:--:|---|
| PLO1 | H1, H2, S1–S2, H13, H16–H19, EF2–EF4 | AISK01 · AISK02/03/05/08/09 | M (Capstone/สหกิจ) | ตรวจให้ CLO มี problem model/root cause ไม่ใช่เพียงสร้างชิ้นงาน |
| PLO2 | H2, H4, H5, H8, H9, H16–H20, S9–S10 + ฐานกายภาพ | AISK01 · **AISK02/03** · AISK04/05 · **AISK09** | M | เพิ่ม requirement/solution/industrial decision evidence |
| PLO3 | S4, S9, H3/H19 (Viz/DSS) | AISK08 · AISK05 · **AISK09** | M | เพิ่ม communication/acceptance กับ stakeholder |
| **PLO4** | H7, H15, H20, S7, S10, EF2–EF6 | AISK07 · AISK02/03 · **AISK09** | M | ต้องมี governance + law/standard + safety/impact evidence |
| PLO5 | S5, S9, S10 | AISK08 · **AISK09** | M | เพิ่ม change facilitation และ accountability |
| PLO6 | H1, H3, H8, H11, H17–H19 | AISK01 · **AISK03/05/09** | M | เพิ่ม process/maintenance/decision analytics |
| PLO7 | S3, S6–S7, S9, H6, H10, H20 | AISK06/08/**09** | M | ต้องมี learning evidence หรือ innovation/value evidence; handover อย่างเดียวไม่พอ |

> [!success] ผลการตรวจสอบ Skill Alignment (ทุกเอกสารรองรับด้วย PLO)
> - **ทักษะ (03) ↔ Skill Set (11) ↔ CLO (10) ↔ YLO (09) ↔ PLO (04) ↔ รายวิชา (07):** เชื่อมโยงครบวงจร ไม่มี orphan skill
> - **PLO4 (จริยธรรม)** เดิมเป็นจุดอ่อน (Mastery พึ่งสหกิจ) — การเสริมกรอบ **AI Verify** ทำให้ประเมิน Mastery ในแกนบังคับได้ และเปลี่ยน Attitude เป็น Hard Skill ที่วัดได้
> - **PLO7/PLO2 (GenAI)** ยกระดับด้วย IMDA TSC#4/5/9 (Model Selection/Evaluation/Red-teaming) — ทันสมัยระดับสากล
> - ทุก PLO มีจุด **M (Mastery)** ที่ Capstone (134-404) และสหกิจ (135-402) แต่การประกาศว่าปิด Gap ต้องรอ rubric, Lab, basket rule และหลักฐานรายบุคคล

## D.3 ผลทวนสอบระดับ Sub-skill

| Skill Set/ทักษะย่อย | PLO หลัก | PLO สนับสนุนเมื่อมีหลักฐาน | เหตุผลการจัด |
|---|---|---|---|
| AISK01 #1–3 Applied Math, ML/DL, Reasoning | PLO1 | PLO6 | ใช้ความรู้กำหนดและแก้ปัญหา; นับ PLO6 เมื่อมี experiment/evaluation |
| AISK01 #4 Model Evaluation/XAI | PLO6 | PLO3, PLO4 | สื่อสาร/ความรับผิดชอบเมื่อตีความข้อจำกัดและผลกระทบ |
| AISK01 #5–6 Software/MLOps/Infrastructure | PLO2 | PLO4, PLO6 | เป็นการออกแบบระบบ; นับ PLO6 เมื่อทดลอง performance/reliability |
| AISK01 #7 Data Engineering/Analytics | PLO2, PLO6 | PLO3, PLO4 | pipeline/data experiment เป็นหลัก; governance/dashboard เป็นหลักฐานเสริม |
| AISK02 #1–4 Farm structure/build/system/energy | PLO1, PLO2 | PLO4, PLO6 | ฐานวิศวกรรมและการออกแบบฟาร์ม; impact/experiment ต้องมีหลักฐาน |
| AISK02 #5 Agri-food forecast/traceability/DSS | PLO2, PLO6 | PLO3, PLO7 | ระบบตัดสินใจและข้อมูล; value/innovation เมื่อมี business/BCG case |
| AISK03 #1–3 Automation/robotics/smart factory | PLO2 | PLO4, PLO5, PLO6 | system design เป็นหลัก; safety/team/test เป็นหลักฐานสนับสนุน |
| AISK03 #4–5 Optimization/quality/maintenance | PLO1, PLO6 | PLO2, PLO4 | วิเคราะห์และทดลองปรับปรุง; PLO2 เมื่อออกแบบ intervention |
| AISK04 #1–3 IoT/Edge/CPS integration | PLO2 | PLO1, PLO6 | เน้น architecture/integration; problem/test evidence เป็นส่วนสนับสนุน |
| AISK04 #4 Edge–Cloud safety/device management | PLO4 | PLO2, PLO6 | security/reliability responsibility เป็นแกน |
| AISK05 #1–5 Vision/GeoAI/Predictive/DSS | PLO2, PLO6 | PLO1, PLO4 | applied model/system + experiment; problem/impact ตามโจทย์ |
| AISK05 #6 Domain communication | PLO3 | PLO6 | การสื่อสารเป็นหลักและต้องอิงผลวิเคราะห์ที่ตรวจสอบได้ |
| AISK06 #1–3 RAG/Agent/Model selection | PLO2 | PLO6, PLO7 | ออกแบบระบบ; evaluation และ technology learning เป็นหลักฐานเพิ่ม |
| AISK06 #4 Red-teaming/Safety | PLO4, PLO6 | PLO2 | ประเมินความปลอดภัยและตีความผล |
| AISK06 #5 Thai NLP | PLO2, PLO7 | PLO6 | ประยุกต์เทคโนโลยี/ความรู้ใหม่; evaluation เมื่อมีชุดทดสอบ |
| AISK06 #6 Human–AI collaboration | PLO7 | PLO2, PLO4 | เรียนรู้และใช้เครื่องมือ AI ใหม่อย่างตรวจสอบได้ โปร่งใส และมีการทบทวนโดยมนุษย์ |
| AISK07 #1–5 Security/Governance/Audit/Assurance/Ethics | PLO4 | PLO2, PLO6 | ความรับผิดชอบเป็นแกน; privacy-by-design และหลักฐานรับรองระบบสนับสนุน |
| AISK08 #1 Analytical/Systems Thinking | PLO1 | PLO6 | problem model เป็นหลัก; data evidence สนับสนุน |
| AISK08 #2 Communication | PLO3 | — | มีผู้รับสารและ communication artifact โดยตรง |
| AISK08 #3 Team/Leadership | PLO5 | — | ต้องมีบทบาท การวางแผน ความเสี่ยง/ข้อขัดแย้ง และ contribution |
| AISK08 #4–6 Entrepreneur/Learning/Transformation | PLO7 | PLO1, PLO2, PLO4 | learning/innovation/value เป็นหลัก |
| AISK09 #1–2 Requirements/Architecture/Integration | PLO2 | PLO1, PLO3 | requirements และ solution design เป็นหลัก |
| AISK09 #3 Digital Service Architecture | PLO2 | PLO4, PLO7 | service architecture เป็นหลัก; compliance/new-service value สนับสนุน |
| AISK09 #4 Verification/Quality/Safety/Service Performance | PLO4, PLO6 | PLO2 | ความรับผิดชอบ คุณภาพ และการทดลองสมรรถนะของระบบ |
| AISK09 #5 Change/Adoption/Acceptance | PLO3, PLO5 | PLO2, PLO7 | stakeholder adoption และ team delivery เป็นหลัก |
| AISK09 #6 Operational Handover/Improvement | PLO3, PLO5 | PLO2, PLO6 | ส่งมอบหลักฐานการปฏิบัติการและใช้ผลเหตุการณ์ปรับปรุงบริการ |

> [!note] ข้อค้นพบจากการทวนสอบ
> ความไม่สอดคล้องเดิมไม่ได้เกิดจากการขาด Skill Set แต่เกิดจากการนำ PLO สนับสนุนของ sub-skill บางข้อไปสรุปเป็น PLO หลักของทั้ง AISK จึงแก้ด้วยการแยก **PLO หลัก/สนับสนุน** และปรับ CLO ให้มีหลักฐานตรงตามนิยาม

---

# ส่วน E — การเชื่อมโยงกับความต้องการของผู้มีส่วนได้ส่วนเสีย (Needs Alignment)

> ตรวจสอบว่าชุดทักษะ **EN-AISK01–09** ตอบ **ความต้องการ N1–N18** จาก [[../03_OBE_PLO_Design_2570/01_Stakeholder_Needs|การสังเคราะห์ความต้องการของผู้มีส่วนได้ส่วนเสีย (SH1–SH8)]] ครบถ้วนหรือไม่ · N1–N11 = จากผลสำรวจโดยตรง (55 ราย) · N12–N18 = เชิงแนวโน้มจากมาตรฐานสากล/นโยบายชาติ

## E.1 ความต้องการจากผลสำรวจโดยตรง (N1–N11) ↔ Skill Set

| Need | สาระสำคัญ | หลักฐานเชิงปริมาณ | Skill Set ที่ตอบ | ระดับการตอบ |
|---|---|---|---|:--:|
| **N1** | บูรณาการวิศวกรรมแกนหลัก (ไฟฟ้า/กลศาสตร์/ควบคุม) เข้ากับ AI ได้จริง | **Pain point อันดับ 1 (13/27)** · ทักษะวิศวกรรมแกน 4.22/5 | **AISK02 (G2 เกษตร) · AISK03 (G2 อุตสาหกรรม) · AISK04 (G3)** บนฐาน AISK01 (G1) | ⭐ **ตอบตรงที่สุด** |
| **N2** | วิศวกรรมข้อมูลครบวงจร → ML/DL/CV | ข้อมูลไร้ระเบียบ (9/27) · AI เชิงลึก 4.19 | **AISK01 (ย่อย 2, 7)** · AISK05 (ย่อย 1) | ✅ ครบ |
| **N3** | Deploy/Scale ภายใต้งบจำกัด · ผู้ใช้ดูแลเองได้ | งบโครงสร้างพื้นฐานสูง (10/27) · ใช้จริงไม่ได้ (2/27) | **AISK01 (ย่อย 6)** · AISK04 (Edge–Cloud) · AISK02 (ย่อย 4) · **AISK09 (ย่อย 4–6)** | ✅ ครบ |
| **N4** | จริยธรรม AI · ไซเบอร์ · ตรวจสอบผลก่อนใช้ | **คะแนนสูงสุด 4.26/5** · ขาดความรู้จริยธรรม (6/27) | **AISK07 (G5 ทั้งชุด)** · AISK06 (ย่อย 4 Red-teaming) | ⭐ ยกระดับด้วย AI Verify |
| **N5** | สมรรถนะเฉพาะ Track | PLC/SCADA+หุ่นยนต์ 12/27 · พยากรณ์ผลผลิต 11/27 · GenAI/LLM 11/27 | T1 → **AISK02 + AISK05** · T2 → **AISK03 + AISK04/05** · T3 → **AISK06 + AISK09** | ⭐ ตรงราย Track |
| **N6** | Hands-on: อุปกรณ์จริง · Workshop · โจทย์จริง · สหกิจ | **อุปกรณ์จริง 4.87/5 (สูงสุด)** · Workshop 4.74 · โครงงาน/สหกิจ 4.57 | **AISK02 (ย่อย 2 Build & Construct)** · AISK03 (ย่อย 1) · AISK04 (ย่อย 3) · Capstone/สหกิจ | ⭐ **ตอบตรงที่สุด** |
| **N7** | ภาษาอังกฤษเทคนิค · สื่อสาร · ทำงานเป็นทีม | ประเด็นที่ถูกกล่าวถึงมากสุดทุกกลุ่ม · Soft Skills 4.04 | **AISK08 (G6 ย่อย 2, 3)** | ✅ ครบ |
| **N8** | ความคิดเชิงผู้ประกอบการ · แปลง AI เป็นผลิตภัณฑ์ | ผู้เรียน 10/23 ต้องการเป็นนวัตกร/สตาร์ทอัพ | **AISK08 (G6 ย่อย 4, 6–8)** · AISK05 · **AISK09 (solution/adoption)** | ✅ ครบ |
| **N9** | เทคโนโลยีอุบัติใหม่ (GenAI, Agentic, Prompt) · เรียนรู้ตลอดชีวิต | คำตอบปลายเปิดผู้เรียน+คณาจารย์ | **AISK06 (G4 ทั้งชุด)** · AISK08 (ย่อย 5) | ⭐ ยกระดับด้วย IMDA TSC |
| **N10** | คิดวิเคราะห์/วิพากษ์ · ใช้ AI อย่างมีวิจารณญาณ | คณาจารย์ + ผู้ใช้บัณฑิต | **AISK08 (ย่อย 1)** · AISK06 (S7 Human–AI) | ✅ ครบ |
| **N11** | ตอบโจทย์การจ้างงานภาคอีสานและชุมชน | ผู้ปกครอง + ผู้ใช้บัณฑิตภาคเกษตรในพื้นที่ | **AISK02 (G2 เกษตร)** · AISK05 · AISK08 (S8 Stakeholder-centric) | ✅ ครบ |

## E.2 ความต้องการเชิงแนวโน้ม (N12–N18) ↔ Skill Set

| Need | สาระสำคัญ | Skill Set ที่ตอบ | ระดับการตอบ |
|---|---|---|:--:|
| **N12** | Sustainable/Green AI · ประสิทธิภาพพลังงาน · เกษตรคาร์บอนต่ำ | **AISK02 (ย่อย 4)** *(H15)* · AISK01 (ย่อย 6 Model Efficiency) | ✅ ครบ |
| **N13** | Systems Thinking · ระบบครบวงจร (เซนเซอร์–ข้อมูล–โมเดล–ควบคุม–ธุรกิจ) | **AISK04 (G3 ย่อย 3)** · AISK08 (ย่อย 1) · **AISK09 (architecture/integration)** | ⭐ ตอบตรง |
| **N14** | รองรับสังคมสูงวัย · แรงงานเกษตรขาดแคลน · ระบบอัตโนมัติทดแทน | **AISK03 (ย่อย 2 — เพิ่ม Human–Robot Collaboration & Ergonomics)** · AISK02 (ย่อย 3 ฟาร์มอัตโนมัติ) | ✅ **ปรับแล้ว** |
| **N15** | Thai NLP / Sovereign AI | **AISK06 (ย่อย 5)** *(H10)* | ✅ ครบ |
| **N16** | ธรรมาภิบาล AI · การปฏิบัติตามกฎหมาย (PDPA/ร่าง กม. AI) | **AISK07 (ย่อย 2, 3)** *(AI Verify + ISO 42001 + NIST AI RMF)* | ⭐ ยกระดับสูงสุด |
| **N17** | Inclusive AI · การเข้าถึงดิจิทัล | **AISK08 (ย่อย 6 — เพิ่ม Inclusive & Accessible Design)** · AISK05 · AISK02 (ผู้ใช้ดูแลเองได้) · S8 | ✅ **ปรับแล้ว** |
| **N18** | Domain Expertise เชิงลึก (เกษตร T1 · การผลิต T2 · ธุรกิจ T3) | **AISK02 (H16 เกษตร) · AISK03 (H17/H18 อุตสาหกรรม) · AISK05 (H19 การตัดสินใจ) · AISK09 (H20 โซลูชันองค์กร)** | ⭐ **ตอบตรงที่สุด** |

## E.3 ข้อค้นพบสำคัญจากการวิเคราะห์

> [!success] การ Regroup เป็นชุดเฉพาะโดเมนตอบ Pain Point อันดับ 1 โดยตรง
> **N1** ("ขาดวิศวกรที่เข้าใจทั้งงานโครงสร้างวิศวกรรมและโมเดล AI ควบคู่กัน" — **13/27 = Pain point อันดับ 1 ของผู้ใช้บัณฑิต**) และ **N18** (ตลาดให้ผลตอบแทนผู้เชี่ยวชาญเฉพาะทางสูงกว่า Generalist **30–50%** และงาน AI ~75% ต้องการ Domain Expert)
> → ทั้งสอง Need ตอบด้วยโครงสร้างใหม่ที่แยก **AISK02 (วิศวกรรมเกษตรอัจฉริยะ)** และ **AISK03 (วิศวกรรมอุตสาหกรรมอัจฉริยะ)** ออกเป็นชุดทักษะเฉพาะโดเมนใน **G2 (สร้างและประกอบโครงสร้างพื้นฐาน กลไก เครื่องจักร)** ทำงานคู่กับ **G1 (AISK01 — การเรียนรู้และตัดสินใจของเครื่อง)**
> **นี่คือจุดต่างเชิงยุทธศาสตร์จากหลักสูตร Computing/AI ทั่วไป** ที่มีเพียง G1 แต่ไม่มี G2

> [!success] Need ที่มีคะแนนสูงสุดได้รับการตอบเต็มที่
> - **N6 อุปกรณ์จริง/Workshop (4.87 — สูงสุดในบรรดาความคาดหวังผู้เรียน)** → **AISK02 ย่อย 2 "การสร้างและประกอบชิ้นงาน/ระบบฟาร์ม"** + Workshop 1–3 + AISK03 ย่อย 1 + AISK04 ย่อย 3
> - **N4 จริยธรรมและความปลอดภัย (4.26 — สูงสุดในบรรดาทักษะที่ผู้ใช้บัณฑิตให้ความสำคัญ)** → **AISK07** ที่ยกระดับด้วย AI Verify 11 หลักการ + ISO/IEC 42001 + NIST AI RMF ทำให้ประเมินเป็น Hard Skill ได้จริง

> [!done] ช่องว่างที่ปรับแก้แล้ว (2026-07-25)
> เดิม **N14** และ **N17** ตอบเพียงทางอ้อม จึงปรับทักษะย่อยให้ระบุชัดเจน:
> 1. ✅ **AISK03 ย่อย 2** เพิ่ม *"ระบบอัตโนมัติเพื่อทดแทนแรงงานที่ขาดแคลนและการทำงานร่วมมนุษย์–เครื่องจักรอย่างปลอดภัย (Human–Robot Collaboration & Ergonomics)"* → **ตอบ N14 โดยตรง**
> 2. ✅ **AISK08 ย่อย 6** เพิ่ม *"การออกแบบที่ครอบคลุมและเข้าถึงได้ (Inclusive & Accessible Design)"* → **ตอบ N17 โดยตรง**
>
> **ข้อเสนอที่ยังรอการตัดสินใจของคณะกรรมการ:**
> 3. ⏳ **N18 Domain Expertise** — เสนอกำหนดให้วิชาเลือกชีพ (EN-135) อย่างน้อย **2 จาก 5 วิชา** ต้องเป็น **วิชาโดเมนเชิงลึก** (เกษตรศาสตร์ / กระบวนการผลิต–ลีน / ธุรกิจ–การเงิน) ไม่ใช่วิชาเทคนิค AI ล้วน เพื่อรักษาความได้เปรียบด้าน Domain Expertise ที่ตลาดให้ผลตอบแทนสูงกว่า Generalist 30–50%

## E.4 สรุปความครอบคลุม Needs

| ระดับการตอบ | จำนวน | Needs |
|---|:--:|---|
| ⭐ **ตอบตรงและเป็นจุดแข็ง** | **8** | N1, N4, N5, N6, N9, N13, N16, N18 |
| ✅ **ตอบครบถ้วน** | **10** | N2, N3, N7, N8, N10, N11, N12, N15, **N14**, **N17** *(ปรับแล้ว)* |
| ◐ ตอบทางอ้อม | **0** | — |
| | **รวม 18** | |

**สรุป:** หลังเพิ่ม H16–H20, S9–S10 และ AISK09 แล้ว ชุดทักษะ EN-AISK01–09 **ครอบคลุมครบทั้ง 18 Needs และ C01–C17** โดยไม่มี Need หรือทักษะใหม่ที่ขาดชุดรองรับ · เหลือข้อเสนอเชิงโครงสร้างเรื่องสัดส่วนวิชาโดเมนเชิงลึก (§E.3 ข้อ 3) ที่รอการตัดสินใจของคณะกรรมการ

## E.6 ความสอดคล้องกับพันธกิจมหาวิทยาลัย (KSU Soft Skills 5C+ / Skill-based Transcript)

> รวมจากเล่มหลักสูตรฉบับ OBE v4 (หมวดปรัชญา/พันธกิจ) ซึ่ง **ยังไม่ได้บันทึกไว้ใน Vault** — นำมาผนวกเพื่อความครบถ้วนของการสอบย้อนกลับ

**พันธกิจข้อ 1 ของมหาวิทยาลัยกาฬสินธุ์** ระบุให้ *"ผลิตบัณฑิตที่มีสมรรถนะสูงด้านนวัตกรรม ทักษะอาชีพและความเป็นผู้ประกอบการ พร้อมทักษะแห่งอนาคต **(KSU Soft Skills 5C+ / Skill-based transcript)** ตอบสนองตลาดแรงงาน"*

| องค์ประกอบระดับมหาวิทยาลัย | การตอบสนองของหลักสูตร |
|---|---|
| **Skill-based Transcript** (พันธกิจข้อ 1) | **ชุดทักษะ EN-AISK01–09 พร้อมระดับ L1–L4 และวิธีวัดผล** ในเอกสารนี้ = กลไกที่ทำให้ออก Skill Transcript ได้จริงในระดับหลักสูตร |
| **KSU Soft Skills 5C+** | ครอบคลุมด้วย **AISK08 (G6)** *(S1–S6, S8)*, **AISK06 (G4)** *(S7 AI Literacy/Human–AI)* และ **AISK09 (G7)** *(S9–S10)* |
| **ค่านิยม CHANGE** *(Collaboration · High Performance · Agility · Networking · Good Governance · Excellence)* | Collaboration/Networking → AISK08 ย่อย 3 · Agility → AISK08 ย่อย 5 · Good Governance → **AISK07** · High Performance/Excellence → เกณฑ์ระดับ L3–L4 ของทุกชุด |
| **ปรัชญาการศึกษา** *"ประสบการณ์สร้างการเรียนรู้สู่มืออาชีพ"* | ทุกชุดทักษะประเมินผ่าน **Workshop · Project · สหกิจ** (ไม่ใช่ข้อสอบอย่างเดียว) — สอดรับ **N6 (4.87/5)** |
| **อัตลักษณ์บัณฑิต** *"มุ่งมั่นสร้างสรรค์ เชี่ยวชาญวิชาชีพ"* | มุ่งมั่นสร้างสรรค์ → AISK06/AISK08 · เชี่ยวชาญวิชาชีพ → **AISK02/AISK03 (Domain Expertise)** |

> [!important] ข้อเสนอเพื่อความสมบูรณ์
> ควรขอ **นิยาม 5C อย่างเป็นทางการ** จากมหาวิทยาลัย แล้วทำตาราง mapping `5C ↔ S1–S10 ↔ AISK07/AISK08/AISK09` เพื่อให้ Skill Transcript ระดับหลักสูตรออกได้ตรงกับแบบฟอร์มกลางของมหาวิทยาลัย — ปัจจุบันเล่มหลักสูตรอ้างถึง "5C+" แต่ไม่ได้ระบุรายการ 5 ตัวไว้

## E.5 การสอบย้อนกลับครบวงจร (Full Traceability)

```text
SH1–SH8 (ผู้มีส่วนได้ส่วนเสีย)
   ↓
N1–N18 (ความต้องการ)
   ↓
H1–H20 / S1–S10 (ทักษะเป้าหมาย)
   ↓
EN-AISK01–09 · G1–G7 (ชุดทักษะ + KSA)
   ↓
CLO รายวิชา → YLO รายปี → PLO1–7
   ↓
Skill Transcript + หลักฐานการประเมิน
```

> [!note] การทวนสอบ
> เส้นทางนี้ทำให้ตอบคำถามผู้ประเมิน (SH8/AUN-QA/TABEE) ได้ว่า *"ทักษะนี้มาจากความต้องการข้อไหน ของใคร มีหลักฐานอะไร และวัดผลที่รายวิชาใด"* — ดูรายละเอียด KSA รายวิชาใน [[10_Course_Learning_Outcomes_CLO_Mapping]]

---

## หมายเหตุการนำไปใช้

0. **ประวัติการปรับปรุงหลัก:**
   - *รอบ 1 (IMDA/สิงคโปร์):* เสริม EN-AISK06 (Model Selection/Evaluation + LLM Red-teaming ตาม IMDA TSC#4/5/9 + Project Moonshot), EN-AISK07 (AI Verify 11 หลักการ + Audit Evidence), EN-AISK02 (Full-stack), EN-AISK08 (Digital Transformation/Compound AI)
   - *รอบ 2 (Global Standards/Domains):* เสริม EN-AISK01 (Symbolic/Neurosymbolic AI ตาม CS2023), EN-AISK07 (ISO/IEC 42001, NIST AI RMF, EU AI Act + AI Security specialization), เพิ่มส่วน **C.4 มาตรฐานสากล** และ **C.5 การประยุกต์เฉพาะโดเมน ↔ Track** (Agriculture 5.0/Smart Factory/FinTech + Healthcare watchlist)
   - *รอบ 3 (Regroup ตามเอกลักษณ์วิศวกรรม):* จัดกลุ่มใหม่เป็น **G1–G6** และปรับ AISK01–05 — **AISK01** รวมเป็น *AI Core Engineering Stack* (H1–H4) · **AISK02** *Smart Agriculture Engineering* · **AISK03** *Smart Industry* (ทั้งคู่รับ **ฐานวิศวกรรมกายภาพ** ที่เดิมไม่มีชุดทักษะรองรับ) · **AISK04** *Intelligence System for Smart Farm and Factories* · **AISK05** *Applied AI in Agriculture, Industry and Enterprise* (ขยายคลุม T3)
   - *รอบ 4 (เชื่อมโยง Needs):* เพิ่ม **ส่วน E — Needs Alignment** ตรวจสอบ N1–N18 ↔ Skill Set ครบทุกข้อ · ปรับ **AISK03 ย่อย 2** (Human–Robot Collaboration & Ergonomics → N14) และ **AISK08 ย่อย 6** (Inclusive & Accessible Design → N17) ให้ตอบ Need โดยตรง
   - *รอบ 5 (JobsDB C01–C17, 2026-07-29):* ขยาย Master Catalog เป็น **H1–H20/S1–S10**, เพิ่ม H16 Precision Agriculture, H17 Smart Manufacturing/Quality/MES, H18 Maintenance/Reliability, H19 Decision Intelligence/DSS, H20 Enterprise Architecture/Digital Services, S9 Stakeholder/Change และ S10 Agile/Quality/Safety/Accountability พร้อมเพิ่ม **AISK09 (G7)** เพื่อปิดช่องว่างงาน solution/integration
   - *รอบ 6 (ปรับสมดุล Skill Set Feed):* กำหนด AISK ตัวแรกของแต่ละ CLO เป็นเจ้าภาพหลัก แยกผู้สนับสนุนออกจากภาระเต็ม ย้าย H19/Decision Intelligence ไป AISK05, ย้าย S7/Human–AI ไป AISK06 และรวม H20/S9/S10 ด้านข้อกำหนด–บูรณาการ–ส่งมอบไว้ที่ AISK09 ทำให้ภาระเจ้าภาพอยู่ในช่วง 5–11 รายวิชาและ 8–16 CLO ต่อชุด
   - *แหล่งอ้างอิง:* IMDA SFw for ICT, AI Verify Foundation, ICT Career Maps, ACM/IEEE-CS/AAAI CS2023, ISO/IEC 42001, NIST AI RMF, NUS BComp(AI)/BAIS, WEF Future of Jobs 2025, [[../03_OBE_PLO_Design_2570/01_Stakeholder_Needs|Stakeholder Needs N1–N18]], [[../07_JobsDB_Semantic_Career_Analysis/00_Home|JobsDB C01–C17]]
1. **ระดับความเชี่ยวชาญเป้าหมาย** ใช้ L1–L4 ตาม [[03_Target_Skills#3.3 ระดับความลึกของทักษะ]] — นักศึกษาต้องได้ทักษะแกนอย่างน้อย L2–L3 และทักษะเฉพาะ Track ที่เลือกถึง L4 ผ่าน Workshop/Project/สหกิจ
2. **Skill Transcript** ออกให้เมื่อผ่านเกณฑ์การประเมินของแต่ละทักษะย่อย (Assessment ในตาราง) — ผูกกับ **Year Gates** ใน [[09_Yearly_Learning_Outcomes#7 กติกาการทวนสอบ]]
3. **วิชาเลือกชีพ (EN-135)** เพิ่มความลึกของ Skill Set ตาม Track ให้ถึง L4 — เติม CLO เฉพาะรายวิชาเมื่อยืนยันคลังวิชา
4. **เครื่องมือ (Tools)** เป็นตัวอย่างมาตรฐานอุตสาหกรรม ปรับตามความพร้อมห้องปฏิบัติการและแนวโน้มตลาด (ทบทวนปีละครั้งร่วมกับ Advisory Board)

[[10_Course_Learning_Outcomes_CLO_Mapping|← CLO Mapping]] | [[03_Target_Skills|ทักษะเป้าหมาย H/S]] | [[00_TQF2_Drafts_Home|หน้าหลัก TQF2]]
