# ตารางสรุปชุดทักษะและการวิเคราะห์ KSA — หลักสูตรวิศวกรรมปัญญาประดิษฐ์และระบบอัจฉริยะ

> AI Engineering & Intelligent Systems — Skill Set Matrix + Knowledge/Skill/Attitude Analysis
> ต่อยอดจาก [[03_Target_Skills|ทักษะเป้าหมาย H/S]] · [[04_PLOs_7_OBE|PLO 7 ข้อ]] · [[10_Course_Learning_Outcomes_CLO_Mapping|CLO Mapping]] · [[../03_OBE_PLO_Design_2570/07_Curriculum_PLO_Mapping|Curriculum–PLO Mapping]]

เอกสารนี้แบ่งเป็น 4 ส่วน:
- **ส่วน A — วิเคราะห์ KSA รายข้อ PLO:** แยกแยะแต่ละ PLO ออกเป็น **ความรู้ (Knowledge)** ที่ควรมีพร้อมคำสำคัญ/หัวข้อ · **ทักษะ (Skill)** ที่ควรมีพร้อมทักษะย่อย เครื่องมือ และ **Skill Set/กลุ่มที่ผูก** · **ทัศนคติ (Attitude)** · แล้วกระจายลงรายวิชาและลิงก์ CLO
- **ส่วน B — Skill Set Matrix:** ชุดทักษะสำหรับ **Skill Transcript** (รหัส EN-AISK01–08) จัดเป็น **6 กลุ่มทักษะ (G1–G6)** พร้อมระดับความเชี่ยวชาญ CLO ที่เกี่ยวข้อง และวิธีวัดผล
- **ส่วน C — การเทียบเคียงมาตรฐานสากล:** IMDA/AI Verify/Career Maps · CS2023/ISO 42001/NIST AI RMF · การประยุกต์เฉพาะโดเมน
- **ส่วน D — การตรวจสอบความสอดคล้อง (Skill Alignment):** ทักษะ → Skill Set → CLO → YLO → PLO ครบวงจร

> [!abstract] เอกลักษณ์วิศวกรรมของหลักสูตร
> ชุดทักษะออกแบบให้สะท้อน 2 เสาเอกลักษณ์ — **EN-AISK02 Smart Agriculture Engineering** และ **EN-AISK03 Smart Industry (AI Industrial Engineering & Automation)** — ซึ่งทำหน้าที่ **"สร้างและประกอบโครงสร้างพื้นฐาน กลไก และเครื่องจักร" (G2)** ทำงานร่วมกับ **"ระบบอัจฉริยะและความเข้าใจของเครื่อง" (G3: AISK04 ฟาร์ม–โรงงาน · AISK05 การประยุกต์ AI)** บนฐาน **"แกนวิศวกรรม AI — การเรียนรู้ ตัดสินใจ ข้อมูล ซอฟต์แวร์" (G1: AISK01)**

**สัญกรณ์ระดับความลึก (จาก [[03_Target_Skills#3.3 ระดับความลึกของทักษะ|§3.3]]):** L1 เข้าใจ · L2 ประยุกต์ · L3 บูรณาการ · L4 นำไปใช้และประเมิน

---

# ส่วน A — วิเคราะห์ KSA รายข้อ PLO (Knowledge · Skill · Attitude)

## PLO1 — การแก้ปัญหาเชิงวิศวกรรม *(ความรู้ · Analyze)*

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
| EN-001-022 สถิติ | CLO1 (ทฤษฎีความน่าจะเป็น) | I |
| EN-131-102 คณิต AI | CLO1, CLO2 (พีชคณิตเชิงเส้น/แคลคูลัส) | I |
| EN-001-026 โปรแกรมพื้นฐาน | CLO1 (เขียนโปรแกรมแก้ปัญหา) | I |
| EN-001-023/025/021 (ปี2) | CLO วิเคราะห์ระบบกายภาพ/ต้นทุน | R |
| EN-131-106 ML/DL | CLO1 (เลือกอัลกอริทึม) | R |
| EN-132-106 Automation | CLO1 (วิเคราะห์ระบบควบคุม) | R |
| EN-134-104 Capstone · EN-135-402 สหกิจ | CLO1 (แก้ปัญหาจริง) | **M** |

---

## PLO2 — การออกแบบระบบภายใต้ข้อจำกัด *(ทักษะ · Create)*

**🧠 Knowledge (Keywords)**
> System Architecture · Requirement Engineering · Design under Constraints (เศรษฐกิจ/สังคม/สิ่งแวดล้อม) · Sustainable Design · CAD/การเขียนแบบ · สถาปัตยกรรม IoT–Edge–Cloud · ML System Design · Software Architecture/Microservices · Digital Twin · Design Trade-off & Safety Factor

**🛠️ Skill + Sub-skill + เครื่องมือ**
- **H2 · Programming & AI Software Engineering** (L3) → พัฒนาซอฟต์แวร์ AI ที่ทดสอบได้ · *Git, API, FastAPI, pytest* → **AISK01 (G1)**
- **H4 · MLOps, Cloud & AI Infrastructure** (L2–L3) → Deploy/Container/Scale · *Docker, Kubernetes, AWS/Azure/GCP* → **AISK01 (G1) · AISK04 (G3 Edge–Cloud)**
- **ฐานวิศวกรรมกายภาพ + กลไกฟาร์ม** (L2–L3, T1) → โครงสร้าง/เครื่องจักร/ชลประทาน · *CAD, Workshop* → **AISK02 (G2 เกษตร)**
- **H5 · Industrial Automation & Digital Twin** (L2–L3, T2 เน้น) → PLC/SCADA/Robotics/Simulation → **AISK03 (G2 อุตสาหกรรม)**
- **H9 · IoT, Embedded & Edge AI** (L2–L3) → Sensor/MCU/MQTT/TinyML/Cyber-Physical → **AISK04 (G3 ระบบอัจฉริยะฟาร์ม–โรงงาน)**
- **S2 · Engineering Judgment** (L3) → เลือกแบบภายใต้ข้อจำกัด → **AISK08 (G6)**

> **แกนการออกแบบของ PLO2:** "สร้างและประกอบโครงสร้างพื้นฐาน + กลไก/เครื่องจักร" = **G2 (AISK02 เกษตร · AISK03 อุตสาหกรรม)** ทำงานร่วมกับ "ระบบอัจฉริยะและความเข้าใจของเครื่อง" = **G3 (AISK04 · AISK05)** บนฐาน **G1 (AISK01)**

**❤️ Attitude**
> คำนึงถึงผู้ใช้และความยั่งยืน (sustainability & user-centered) · ยอมรับข้อจำกัดจริงและออกแบบให้ดูแลรักษาได้ · ความรับผิดชอบต่อคุณภาพและความปลอดภัยของระบบ

**📚 กระจายลงรายวิชา + CLO**
| รายวิชา | CLO ที่ตอบ PLO2 | ระดับ |
|---|---|:--:|
| EN-001-024 เขียนแบบ | CLO2, CLO3 | I |
| EN-001-026 โปรแกรม | CLO3 | I |
| EN-131-104 IoT/Edge | CLO2 | R |
| EN-131-105 Cloud/MLOps · EN-131-107 Data Eng · EN-131-108 HW/Network | CLO ออกแบบ/พัฒนาระบบย่อย | R |
| EN-132-103/104/105/106/107/108 (แขนง) | CLO ออกแบบระบบเฉพาะโดเมน | **M** |
| EN-134-104 Capstone · EN-135-402 สหกิจ | CLO1 | **M** |

---

## PLO3 — การสื่อสารเชิงวิชาชีพ *(ทักษะ · Apply)*

**🧠 Knowledge (Keywords)**
> Technical Writing (ไทย/อังกฤษ) · Data Storytelling · Data Visualization · Dashboard Design · การนำเสนอเชิงเทคนิค · Report Structure (IMRaD) · Audience Adaptation (วิศวกร/ผู้บริหาร/เกษตรกร/ชุมชน) · Technical English

**🛠️ Skill + Sub-skill + เครื่องมือ**
- **S4 · Professional Communication, Technical English & Data Storytelling** (L3) → รายงาน · การนำเสนอ · การตอบคำถาม · *เครื่องมือ: Power BI/Tableau, Matplotlib, Canva/Slides, LaTeX/Word* → **AISK08 (G6)**
- **H3 · Data Analytics & Visualization** (L2–L3, ส่วน Visualization) → สร้าง Dashboard สื่อสารผล → **AISK01 (G1) · AISK05 (G3 สื่อสารผลเชิงโดเมน)**

**❤️ Attitude**
> ยึดผู้รับสารเป็นศูนย์กลาง (clarity over jargon) · ความซื่อตรงในการนำเสนอข้อมูล (ไม่บิดเบือน) · เปิดรับคำถามและข้อโต้แย้ง

**📚 กระจายลงรายวิชา + CLO**
| รายวิชา | CLO ที่ตอบ PLO3 | ระดับ |
|---|---|:--:|
| GE-010-001/002 ภาษาอังกฤษ | CLO (สื่อสารพื้นฐาน) | I |
| EN-131-103 CV · EN-131-107 Data Eng | CLO3 (รายงาน/Dashboard) | R |
| EN-132-101/102/105 | CLO นำเสนอผล/Dashboard | R |
| EN-134-101/102 สัมมนา | CLO1 (นำเสนอ ไทย–อังกฤษ) | R |
| EN-134-103 เตรียมโครงงาน | CLO2 (ข้อเสนอโครงงาน) | R |
| EN-135-401 เตรียมสหกิจ | CLO1 (Resume/สัมภาษณ์) | **M** |
| EN-134-104 Capstone · EN-135-402 สหกิจ | CLO นำเสนอ/สอบปากเปล่า | **M** |

---

## PLO4 — จริยธรรมและความรับผิดชอบวิชาชีพ *(จริยธรรม · Evaluate)*

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
| EN-131-101 Intro AI | CLO2 (Responsible AI) | I |
| EN-131-104 IoT · EN-131-105 Cloud · EN-131-108 HW | CLO ความปลอดภัย/ความเป็นส่วนตัว | R |
| EN-132-104 UAV | CLO3 (กฎหมาย/ความปลอดภัย) | R |
| EN-134-101/102 สัมมนา | CLO2 (จริยธรรม/ผลกระทบ) | R |
| EN-135-401 เตรียมสหกิจ | CLO2 (จรรยาบรรณ) | **M** |
| EN-134-104 · EN-135-402 | CLO (จริยธรรมในงานจริง) | **M** |

> [!tip] ข้อเสนอเสริมความหนักแน่น (จาก doc 07 หมายเหตุ #2)
> พิจารณาเปิดวิชาแกน **"AI Ethics & Governance"** เพื่อยก PLO4 ให้มี Mastery ชัดในแกนบังคับ ไม่พึ่งเฉพาะสหกิจ/สัมมนา

---

## PLO5 — การทำงานเป็นทีมและภาวะผู้นำ *(ลักษณะบุคคล · Organize)*

**🧠 Knowledge (Keywords)**
> Team Roles · Team Charter · Project Planning · Conflict Management · Psychological Safety · Agile/Scrum เบื้องต้น · Peer Assessment · Cross-functional Collaboration · Leadership Styles

**🛠️ Skill + Sub-skill + เครื่องมือ**
- **S5 · Teamwork, Collaboration & Leadership** (L3–L4) → กำหนดเป้าหมาย · แบ่งงาน · จัดการความขัดแย้ง · *เครื่องมือ: Git/GitHub (collaboration), Trello/Jira, Team Charter template* → **AISK08 (G6)**
- **S2 · Engineering Judgment** (L2) ในบทบาททีม → **AISK08 (G6)**

**❤️ Attitude**
> รับผิดชอบต่อผลลัพธ์ร่วม · รับฟังและเคารพความเห็นต่าง · ความน่าเชื่อถือ/ตรงต่อเวลา (accountability) · ภาวะผู้นำเชิงบริการ (servant leadership)

**📚 กระจายลงรายวิชา + CLO**
| รายวิชา | CLO ที่ตอบ PLO5 | ระดับ |
|---|---|:--:|
| EN-001-028/029/030 ปฏิบัติการ I–III | CLO ทำงานเป็นทีม | I → R |
| GE-020-009 ผู้นำศตวรรษที่ 21 | CLO1, CLO2 | R |
| EN-131-106 ML/DL | CLO3 (โครงงานกลุ่ม) | R |
| EN-132-103/106/107/108 (แขนง) | CLO ปฏิบัติการ/ทีม | **M** |
| EN-134-104 Capstone | CLO3 (ภาวะผู้นำโครงงาน) | **M** |
| EN-135-401/402 สหกิจ | CLO (ทีม/360° feedback) | **M** |

---

## PLO6 — การทดลองและวิเคราะห์ข้อมูล *(ทักษะ · Evaluate)*

**🧠 Knowledge (Keywords)**
> Design of Experiments (DOE) · Hypothesis Testing · Data Collection & Cleaning · Feature Engineering · Model Evaluation Metrics · Data Pipeline/ETL · Big Data (Spark/Kafka) · Time-Series/Forecasting · Data Quality & Governance · Data-Centric AI/Annotation · การตีความผลเชิงวิศวกรรม

**🛠️ Skill + Sub-skill + เครื่องมือ**
- **H3 · Data Engineering, Analytics & Visualization** (L3) → Pipeline · วิเคราะห์ · Dashboard · *SQL, Pandas, Spark, Airflow* → **AISK01 (G1)**
- **H1 · Model Evaluation** (L3) → ประเมินสมรรถนะโมเดล · *scikit-learn, MLflow* → **AISK01 (G1)**
- **H14 · Data-Centric AI** (L2) → คุณภาพข้อมูล/Annotation → **AISK01 (G1)**
- **H11 · Time-Series & Predictive Analytics** (L3, T1/T2) → พยากรณ์ผลผลิต/อุปสงค์/การบำรุงรักษา → **AISK05 (G3) · AISK03 (G2 อุตสาหกรรม)**
- **H8 · Computer Vision & Remote Sensing** (L2–L3) → วิเคราะห์ภาพ/สำรวจระยะไกล → **AISK05 (G3 ความเข้าใจของเครื่อง)**
- **S1 · Analytical Thinking** (L3) → ตรวจสอบความน่าเชื่อถือของผล → **AISK08 (G6)**

**❤️ Attitude**
> ความเที่ยงตรงและทำซ้ำได้ (reproducibility) · สงสัยข้อมูลที่ผิดปกติ · ไม่ cherry-pick ผลลัพธ์ · เคารพความไม่แน่นอน (uncertainty)

**📚 กระจายลงรายวิชา + CLO**
| รายวิชา | CLO ที่ตอบ PLO6 | ระดับ |
|---|---|:--:|
| EN-001-022 สถิติ | CLO2, CLO3 (วิเคราะห์/DOE) | I |
| EN-131-102 คณิต AI | CLO3 | I |
| EN-131-106 ML/DL | CLO2 (ประเมินโมเดล) | R |
| EN-131-103 CV · EN-131-107 Data Eng | CLO วิเคราะห์/ประมวลผล | R |
| EN-132-102/103/104/105 (แขนง) | CLO ทดลอง/พยากรณ์จากข้อมูล | **M** |
| EN-134-104 · EN-135-402 | CLO2/CLO3 (ทดลอง/ประเมินผล) | **M** |

---

## PLO7 — การเรียนรู้ตลอดชีวิตและความเป็นผู้ประกอบการ *(ลักษณะบุคคล · Self-directed/Create)*

**🧠 Knowledge (Keywords)**
> Self-directed Learning · Technology Watch/Trend Scanning · Emerging AI (GenAI/Agentic AI) · Business Model Canvas · Value Proposition · Feasibility/ROI · IP/ทรัพย์สินทางปัญญา · Go-to-Market · Innovation Management · Learning Portfolio

**🛠️ Skill + Sub-skill + เครื่องมือ**
- **S6 · Product, Entrepreneurial & Project Management Mindset** (L2–L3) → user discovery · value proposition · feasibility/ROI · roadmap · *เครื่องมือ: BMC, Lean Canvas, Gantt* → **AISK08 (G6)**
- **S3 · Adaptability, Resilience & Lifelong Learning** (L3) → learning plan · technology review · reflective portfolio → **AISK08 (G6)**
- **H6 · Generative AI/Agentic** (L2–L3, T3) → ต่อยอดเทคโนโลยีอุบัติใหม่ → **AISK06 (G4)**

**❤️ Attitude**
> ความอยากรู้อยากเห็น (curiosity) · เปิดรับการเปลี่ยนแปลงและความล้มเหลว (growth mindset) · ริเริ่ม/ลงมือ (proactive/entrepreneurial) · เรียนรู้ด้วยตนเองอย่างต่อเนื่อง

**📚 กระจายลงรายวิชา + CLO**
| รายวิชา | CLO ที่ตอบ PLO7 | ระดับ |
|---|---|:--:|
| GE-010-005 ชีวิตออกแบบได้ · GE-020-008 ธุรกิจดิจิทัล | CLO (วางแผนตนเอง/ผู้ประกอบการ) | I → R |
| EN-131-101 Intro AI | CLO3 (ติดตามแนวโน้ม) | I |
| EN-131-105 Cloud/MLOps | CLO3 (เรียนรู้เครื่องมือใหม่) | R |
| EN-132-101 ผลิตภัณฑ์/ธุรกิจ AI | CLO2 (feasibility/go-to-market) | R |
| EN-132-102/107/108 | CLO ประเมินคุณค่า/เทคโนโลยีใหม่ | R |
| EN-134-103 เตรียมโครงงาน | CLO3 (วางแผนเรียนรู้) | R |
| EN-135-401/402 สหกิจ | CLO (พัฒนาตนเอง/ผู้ประกอบการ) | **M** |

---

# ส่วน B — ตารางสรุปชุดทักษะสำหรับ Skill Transcript (Skill Set Matrix)

> ชุดทักษะ (Skill Set) ที่ผู้เรียนจะได้รับการพัฒนาตลอดหลักสูตร แต่ละชุดกำหนดรหัส กลุ่มทักษะ ประเภท ทักษะย่อยพร้อมระดับความเชี่ยวชาญ CLO ที่เกี่ยวข้อง และวิธีวัดผล — เพื่อออก **Skill Transcript** ได้อย่างมีมาตรฐาน
> **ประเภท:** Hard = ทักษะเทคนิค · Soft = ทักษะพฤติกรรม · Hybrid = ความรู้+ทัศนคติผสาน

### นิยามกลุ่มทักษะ (Skill Groups) 6 กลุ่ม

| รหัสกลุ่ม | ชื่อกลุ่มทักษะ (ไทย / อังกฤษ) | สาระแกน | Skill Set ในกลุ่ม |
|---|---|---|---|
| **G1** | แกนวิศวกรรมปัญญาประดิษฐ์<br>*(AI Core Engineering — Learning, Decision, Data & Software)* | สอน/ฝึกโมเดลให้เรียนรู้และตัดสินใจ ("AI Teaching") + ซอฟต์แวร์/MLOps + ข้อมูล | **AISK01** |
| **G2** | วิศวกรรมโดเมนอัจฉริยะ: การสร้างและประกอบโครงสร้างพื้นฐาน กลไก และเครื่องจักร<br>*(Smart Domain Engineering: Build & Construct Infrastructure, Mechanics & Machines)* | สร้าง/ประกอบโครงสร้างพื้นฐานกายภาพ · กลไก/เครื่องจักร · ระบบอัตโนมัติ ตามโดเมน | **AISK02 (เกษตร), AISK03 (อุตสาหกรรม)** |
| **G3** | ระบบอัจฉริยะและความเข้าใจของเครื่องจักร<br>*(Intelligent Systems & Machine Understanding)* | ระบบไซเบอร์-กายภาพ/IoT/Edge ที่เชื่อมฟาร์ม–โรงงาน · การรับรู้/มองเห็น/พยากรณ์ของเครื่อง | **AISK04, AISK05** |
| **G4** | ปัญญาประดิษฐ์เชิงสร้างและนวัตกรรม<br>*(Generative AI & Innovation)* | GenAI/LLM/Agentic + นวัตกรรมอุบัติใหม่ | **AISK06** |
| **G5** | ธรรมาภิบาลและความรับผิดชอบ AI<br>*(Responsible AI & Governance)* | ความปลอดภัย จริยธรรม มาตรฐานสากล | **AISK07** |
| **G6** | วิชาชีพ ผู้นำ และผู้ประกอบการ<br>*(Professional, Leadership & Entrepreneurship)* | สื่อสาร ทีม ผู้นำ ผู้ประกอบการ | **AISK08** |

> [!abstract] เอกลักษณ์วิศวกรรม 2 เสาของหลักสูตร (Two Engineering Identities)
> ทั้งสองเสายืนบนแกนร่วม **G1 (การเรียนรู้/ตัดสินใจของเครื่อง — "AI Teaching")** + **G2 (สร้างและประกอบโครงสร้างพื้นฐาน กลไก เครื่องจักร)** + **G3 (ระบบอัจฉริยะและความเข้าใจของเครื่อง)**
> - **① Smart Agriculture Engineering (T1)** → **AISK02** (โครงสร้างพื้นฐาน/กลไกฟาร์ม) + **AISK04** (ระบบอัจฉริยะฟาร์ม) + **AISK05** (การรับรู้/พยากรณ์) บนฐาน **AISK01**
> - **② AI Industrial Engineering & Automation (T2)** → **AISK03** (ระบบอัตโนมัติ/หุ่นยนต์/Digital Twin) + **AISK04** (ระบบอัจฉริยะโรงงาน) + **AISK05** บนฐาน **AISK01** *(decision & AI teaching)*
> - **③ Enterprise/Innovative AI (T3)** → **AISK06** (GenAI/Agentic) + **AISK05** (Applied AI ภาคองค์กร) + **AISK08** บนฐาน **AISK01**

## EN-AISK01 · แกนวิศวกรรมปัญญาประดิษฐ์: การเรียนรู้ การตัดสินใจ ข้อมูล และซอฟต์แวร์<br>*(AI Core Engineering Stack — Learning, Decision, Data & Software)*
**กลุ่ม:** **G1 · แกนวิศวกรรมปัญญาประดิษฐ์ (AI Core Engineering)** · **ประเภท:** Hard Skill · **ผูกทักษะแกน:** H1, H2, H3, H4 (+H12, H14) · **เทียบเคียง:** ACM/IEEE-CS/AAAI **CS2023** · NUS 3 เสาหลัก · AI Singapore **AIAP** (Software+Data เป็นฐานบังคับ)

| # | ทักษะย่อย (Sub-skill) | ระดับเป้าหมาย | CLO ที่เกี่ยวข้อง | เครื่องมือ |
|---|---|---|---|---|
| 1 | คณิตศาสตร์ประยุกต์สำหรับ AI (Applied Math) | L3 บูรณาการ | EN-131-102 (CLO1,2,3) · EN-001-022 (CLO1) | Python, NumPy, SymPy |
| 2 | การพัฒนาและฝึกสอนโมเดล ML/DL — **"AI Teaching"** *(Subsymbolic)* | L4 นำไปใช้/ประเมิน | EN-131-106 (CLO1,2) · EN-134-104 (CLO1) | scikit-learn, PyTorch, TensorFlow |
| 3 | การให้เหตุผลและการตัดสินใจ *(Symbolic/Neurosymbolic: Search, Planning, KR, Bayesian Reasoning)* | L2–L3 | EN-131-101 (CLO1) · EN-132-108 (CLO1) | Search/Planning, Bayesian Networks, Knowledge Graph |
| 4 | การประเมินและอธิบายผลโมเดล (Evaluation/XAI) | L3 บูรณาการ | EN-131-106 (CLO2) · EN-001-022 (CLO3) | MLflow, SHAP |
| 5 | วิศวกรรมซอฟต์แวร์ AI และ Full-stack AI Solutioning | L3 บูรณาการ | EN-001-026 (CLO1,3) · EN-132-107 (CLO1) · EN-134-104 (CLO1) | Python, Git, FastAPI, pytest, Streamlit/Gradio |
| 6 | MLOps, Cloud และโครงสร้างพื้นฐาน AI (Container/GPU/Scale) | L2–L3 | EN-131-105 (CLO1,2) · EN-131-108 (CLO1,2) · EN-132-107 (CLO2) | Docker, Kubernetes, AWS/Azure/GCP, CI/CD |
| 7 | วิศวกรรมข้อมูลและการวิเคราะห์ (Pipeline/Big Data/Analytics/Data-Centric AI) | L3 บูรณาการ | EN-131-107 (CLO1,2,3) · EN-001-022 (CLO2) | SQL, Airflow, Spark, Power BI, Label Studio |

**วิธีวัดและประเมินผล:** โครงงานพัฒนาโมเดล (Model Project) · โครงงาน Data Pipeline/Dashboard · การสาธิตการ Deploy แบบเบ็ดเสร็จ (End-to-end Demo) · รายงานผลการทดลอง (Lab Report) · การสอบป้องกันโครงงาน (Capstone Defense)

> [!info] เทียบเคียงมาตรฐานสากล (CS2023 / NUS / AIAP)
> AISK01 เป็น **"แกนกลางที่นักศึกษาทุก Track ต้องมี"** รวม 4 เสาความสามารถของ AI Engineer: **การเรียนรู้และตัดสินใจ (H1)** · **ซอฟต์แวร์ (H2)** · **ข้อมูล (H3)** · **การนำขึ้นใช้งานจริง (H4)** — ตรงกับปรัชญา AI Singapore AIAP ที่กำหนด Software + Data Engineering เป็นความสามารถภาคบังคับก่อนพัฒนาอัลกอริทึมขั้นสูง และครบทั้งสาย Symbolic/Subsymbolic ตาม CS2023

## EN-AISK02 · วิศวกรรมเกษตรอัจฉริยะ<br>*(Smart Agriculture Engineering — Farm Infrastructure, Mechanics & Machines)*
**กลุ่ม:** **G2 · วิศวกรรมโดเมนอัจฉริยะ: สร้างและประกอบโครงสร้างพื้นฐาน กลไก และเครื่องจักร** · **ประเภท:** Hard Skill · **ผูกทักษะแกน:** H9 *(เกษตร)*, H15, ฐานวิศวกรรมกายภาพ *(แกนของ **T1**)*

| # | ทักษะย่อย | ระดับเป้าหมาย | CLO ที่เกี่ยวข้อง | เครื่องมือ |
|---|---|---|---|---|
| 1 | โครงสร้างพื้นฐานและกลไกทางการเกษตร (Farm Structures & Agricultural Mechanics) | L2–L3 | EN-001-025 (CLO1,2,3) · EN-001-024 (CLO1,2) | CAD, Statics/Strength Analysis |
| 2 | **การสร้างและประกอบชิ้นงาน/ระบบฟาร์ม** (Build & Construct — Workshop Practice) | L3 บูรณาการ | EN-001-028 (CLO1) · EN-001-029 (CLO1) · EN-001-030 (CLO1) | เครื่องมือช่าง, งานเชื่อม/บัดกรี, ไมโครคอนโทรลเลอร์ |
| 3 | ระบบฟาร์มอัจฉริยะและเกษตรแม่นยำ (Smart Farm & Precision Agriculture) | L3–L4 *(T1)* | EN-132-103 (CLO1,2,3) | Sensor Network, Irrigation Control, Farm Dashboard |
| 4 | ระบบพลังงาน ความร้อน–ของไหล และความยั่งยืนในฟาร์ม (Green/Sustainable) | L2–L3 | EN-001-023 (CLO1,2,3) · EN-132-103 (CLO1) | Thermo-fluid Analysis, Energy Audit |

**วิธีวัดและประเมินผล:** โครงงานสร้าง/ประกอบระบบฟาร์มอัจฉริยะ (Build Project) · ปฏิบัติการภาคสนามและ Workshop I–III · การประเมินผลสหกิจในสถานประกอบการเกษตร

## EN-AISK03 · วิศวกรรมอุตสาหกรรมอัจฉริยะและระบบอัตโนมัติ<br>*(Smart Industry — AI Industrial Engineering & Automation)*
**กลุ่ม:** **G2 · วิศวกรรมโดเมนอัจฉริยะ: สร้างและประกอบโครงสร้างพื้นฐาน กลไก และเครื่องจักร** · **ประเภท:** Hard Skill · **ผูกทักษะแกน:** H5, H13, H11 *(อุตสาหกรรม)* *(แกนของ **T2**)*

| # | ทักษะย่อย | ระดับเป้าหมาย | CLO ที่เกี่ยวข้อง | เครื่องมือ |
|---|---|---|---|---|
| 1 | ระบบควบคุมอัตโนมัติ PLC/SCADA และเครือข่ายอุตสาหกรรม | L3–L4 *(T2)* | EN-132-106 (CLO1,2) · EN-001-030 (CLO1) | PLC (Ladder/FBD/ST), SCADA/HMI, Industrial Protocols |
| 2 | หุ่นยนต์อุตสาหกรรมและหุ่นยนต์ร่วมปฏิบัติงาน (Robotics & Cobots) · **ระบบอัตโนมัติเพื่อทดแทนแรงงานที่ขาดแคลนและการทำงานร่วมมนุษย์–เครื่องจักรอย่างปลอดภัย** *(ตอบ N14)* | L2–L3 | EN-132-106 (CLO2,3) | ROS, Robot Arm, Motion Control, Safety/Ergonomics |
| 3 | โรงงานอัจฉริยะ Digital Twin และการบำรุงรักษาเชิงพยากรณ์ | L3 บูรณาการ | EN-132-105 (CLO1,2,3) | Simulation, Digital Twin Platform |
| 4 | การเพิ่มประสิทธิภาพการผลิตและห่วงโซ่อุปทาน (Optimization/RL/OR) | L2–L3 | EN-132-102 (CLO1,2) · EN-001-021 (CLO1,2) | Optimization Solver, RL, Cost/ROI Model |

**วิธีวัดและประเมินผล:** โครงงานระบบอัตโนมัติ/สายการผลิต (Automation Project) · การวิเคราะห์กรณีศึกษาอุตสาหกรรม (Industry Case Study) · รายงานศึกษาดูงาน · การประเมินผลสหกิจในโรงงาน

## EN-AISK04 · ระบบอัจฉริยะสำหรับฟาร์มและโรงงาน<br>*(Intelligence System for Smart Farm and Factories)*
**กลุ่ม:** **G3 · ระบบอัจฉริยะและความเข้าใจของเครื่องจักร** · **ประเภท:** Hard Skill · **ผูกทักษะแกน:** H9, H5 *(บูรณาการ)*, H4 *(Edge–Cloud)* *(แกนร่วมของ **T1 + T2**)*

| # | ทักษะย่อย | ระดับเป้าหมาย | CLO ที่เกี่ยวข้อง | เครื่องมือ |
|---|---|---|---|---|
| 1 | IoT เครือข่ายเซนเซอร์ และการรับสัญญาณเรียลไทม์ | L3 บูรณาการ *(T1 → L4)* | EN-131-104 (CLO1,2) · EN-001-027 (CLO2,3) | Arduino/RPi, MQTT, LoRa |
| 2 | Edge AI / TinyML และการประมวลผลที่ขอบเครือข่าย | L2–L3 | EN-131-104 (CLO2) · EN-131-108 (CLO1) | TinyML, Edge Device, Model Quantization |
| 3 | **ระบบไซเบอร์-กายภาพและการบูรณาการ OT/IT** (Cyber-Physical Systems) | L3 บูรณาการ | EN-001-030 (CLO1) · EN-132-105 (CLO1) · EN-132-106 (CLO2) | PLC↔Edge AI Integration, SCADA Gateway |
| 4 | ความปลอดภัยและการจัดการอุปกรณ์ Edge–Cloud | L2 ประยุกต์ | EN-131-104 (CLO3) · EN-131-108 (CLO3) | Device Management, Edge Security |

**วิธีวัดและประเมินผล:** โครงงานบูรณาการระบบ (System Integration Project — ปฏิบัติการ III) · การสาธิตระบบ IoT–Edge–Cloud ในฟาร์ม/โรงงาน · การประเมินผลสหกิจศึกษา

## EN-AISK05 · การประยุกต์ปัญญาประดิษฐ์ในเกษตร อุตสาหกรรม และองค์กร<br>*(Applied AI in Agriculture, Industry and Enterprise)*
**กลุ่ม:** **G3 · ระบบอัจฉริยะและความเข้าใจของเครื่องจักร** · **ประเภท:** Hard Skill · **ผูกทักษะแกน:** H8, H11 *(+ Applied Enterprise AI)* *(ครอบคลุม **T1 + T2 + T3**)*

| # | ทักษะย่อย | ระดับเป้าหมาย | CLO ที่เกี่ยวข้อง | เครื่องมือ |
|---|---|---|---|---|
| 1 | **การรับรู้/มองเห็นของเครื่อง**: CV เพื่อการเกษตรและการตรวจสอบคุณภาพ *(โรคพืช/คัดเกรด/Quality Inspection)* | L3 บูรณาการ *(T1,T2 → L4)* | EN-131-103 (CLO1,2) | OpenCV, YOLO, CNN |
| 2 | UAV, Remote Sensing และ GeoAI | L2–L3 | EN-132-104 (CLO1,2) | QGIS, NDVI/NDWI, Drone SDK |
| 3 | การพยากรณ์และวิเคราะห์เชิงทำนาย *(ผลผลิต · อุปสงค์ · การบำรุงรักษา)* | L3 บูรณาการ | EN-132-102 (CLO1) · EN-132-103 (CLO2) · EN-132-105 (CLO2) | Time-Series, Forecasting Models |
| 4 | **AI สำหรับองค์กรและธุรกิจ** *(DSS, Fraud Detection, Customer/Supply Analytics)* | L2–L3 *(T3)* | EN-132-102 (CLO2,3) · EN-132-101 (CLO1) | BI/DSS, Anomaly Detection |
| 5 | การสื่อสารผลการวิเคราะห์เชิงโดเมน | L2–L3 | EN-131-103 (CLO3) · EN-132-105 (CLO3) | Dashboard, รายงานเชิงภาพ |

**วิธีวัดและประเมินผล:** โครงงาน CV/พยากรณ์ตามโดเมน · การทดสอบภาคปฏิบัติการบินโดรน (Drone Flight Practical Test) · Dashboard และรายงานการวิเคราะห์เชิงตัดสินใจ

## EN-AISK06 · Generative AI, LLM และระบบเอเจนต์ (Generative AI, LLM & Agentic Systems)
**กลุ่ม:** **G4 · ปัญญาประดิษฐ์เชิงสร้างและนวัตกรรม (Generative AI & Innovation)** · **ประเภท:** Hard Skill · **ผูกทักษะแกน:** H6, H10 *(แกนของ T3)* · **เทียบเคียง:** IMDA GenAI TSC#3–#6, #9

| # | ทักษะย่อย | ระดับเป้าหมาย | CLO ที่เกี่ยวข้อง | เครื่องมือ |
|---|---|---|---|---|
| 1 | Prompt/Context Engineering และ RAG *(IMDA TSC#3, #6)* | L2–L3 | EN-131-101 (CLO1) · EN-132-108 (CLO1) | LLM APIs, Vector DB, LangChain |
| 2 | AI Agents, Agentic & Compound AI Workflows | L3 บูรณาการ | EN-132-108 (CLO1,2) | LangChain/LangGraph, Tool Use, API Orchestration |
| 3 | การคัดเลือกและประเมินโมเดล GenAI เชิงพาณิชย์ *(IMDA TSC#4, #5)* | L2–L3 | EN-132-108 (CLO1) | Open-source vs Proprietary (Llama/GPT), BLEU, LLM-as-judge, MLflow |
| 4 | LLM Red-teaming และการประเมิน Hallucination/Safety *(IMDA TSC#9)* | L3 บูรณาการ | EN-132-108 (CLO2) · EN-134-104 (CLO4) | **Project Moonshot**, Guardrails, Adversarial Prompt Test |
| 5 | การประมวลผลภาษาไทย (Thai NLP) | L2 ประยุกต์ | EN-132-108 (CLO1) | AI for Thai, HuggingFace |

**วิธีวัดและประเมินผล:** โครงงานพัฒนาระบบเอเจนต์ (Agent Project) · การสาธิตระบบ (Demo) · **รายงานการคัดเลือก/ประเมินโมเดลและผล LLM Red-teaming (Baseline Safety Report)** · การประเมินผลสหกิจ (T3)

> [!info] เทียบเคียงมาตรฐานสิงคโปร์ (IMDA / Project Moonshot)
> ต่อยอดจากทักษะย่อย 1–2 (Prompt/RAG/Agentic) ให้ครอบคลุม **การเลือกโมเดล Open-source vs Proprietary** (ต้นทุน/ความเร็ว/ความปลอดภัย เช่น Llama เทียบ GPT-4) และ **การทดสอบความปลอดภัย LLM** ตามความเสี่ยง 5 ประการของ Project Moonshot (Hallucination · Bias · Undesirable Content · Data Leakage · Adversarial Prompt) — ยกระดับบัณฑิตจากผู้เรียกใช้ API สู่สถาปนิกระบบที่รับประกันความปลอดภัยก่อน Deploy

## EN-AISK07 · AI ที่รับผิดชอบ ความปลอดภัย และธรรมาภิบาล (Responsible AI, Security & Governance)
**กลุ่ม:** **G5 · ธรรมาภิบาลและความรับผิดชอบ AI (Responsible AI & Governance)** · **ประเภท:** Hybrid *(ความรู้ + ทัศนคติ)* · **ผูกทักษะแกน:** H7, S7 · **เทียบเคียง:** AI Verify (11 หลักการ) · IMDA GenAI TSC#8, #9 · **ISO/IEC 42001 · NIST AI RMF · EU AI Act** · ACM/IEEE/IFIP/ABET Cybersecurity

| # | ทักษะย่อย | ระดับเป้าหมาย | CLO ที่เกี่ยวข้อง | เครื่องมือ |
|---|---|---|---|---|
| 1 | ความปลอดภัยของ AI และความเป็นส่วนตัว *(AI Security: Data Poisoning, Model Inversion, Adversarial, PDPA)* | L2–L3 | EN-131-104 (CLO3) · EN-131-108 (CLO3) · EN-131-105 (CLO2) | Threat Modeling, PDPA Checklist, Adversarial Test |
| 2 | Responsible AI / ธรรมาภิบาล *(AI Verify 11 หลักการ + ISO/IEC 42001, NIST AI RMF, EU AI Act)* | L2–L3 | EN-131-101 (CLO2) · EN-134-101 (CLO2) · EN-134-102 (CLO2) · EN-132-104 (CLO3) | **AI Verify Toolkit**, Model Card, ISO 42001/NIST AI RMF |
| 3 | การจัดทำหลักฐานเชิงประจักษ์ทางธรรมาภิบาล (Audit & Compliance Evidence) | L3 บูรณาการ | EN-134-102 (CLO2) · EN-134-104 (CLO4) | Model Card · Fairness Evaluation Report · Robustness Log *(Outcome/Process/Evidence)* |
| 4 | จรรยาบรรณวิชาชีพในสถานการณ์จริง | L3 (Mastery ที่สหกิจ) | EN-135-401 (CLO2) · EN-135-402 (CLO4) | Case Study, Employer Rubric |

**วิธีวัดและประเมินผล:** การวิเคราะห์กรณีศึกษา (Case Study) · **การจัดทำ Model Card / Fairness Evaluation Report / Robustness Log ตามกรอบ AI Verify** · การประเมินจากสถานประกอบการ (Employer Evaluation from Co-op)

> [!info] เทียบเคียงมาตรฐานสิงคโปร์ (AI Verify — IMDA)
> เปลี่ยนการสอนจริยธรรมจาก "กรณีศึกษาเชิงปรัชญา" ให้เป็น **กระบวนการวิศวกรรมที่วัดผลได้** โดยใช้โครงสร้าง **Outcome → Process → Evidence** ของ AI Verify กับหลักการ 11 ประการ (Transparency · Explainability · Repeatability · Safety · Security · Robustness · Fairness · Data Governance · Accountability · Human Oversight · Societal/Environmental Well-being) — ทำให้ทัศนคติ (Attitude) ของ PLO4 กลายเป็นทักษะแข็ง (Hard Skill) ที่ประเมินใน Skill Transcript ได้จริง

## EN-AISK08 · การปฏิบัติวิชาชีพและความเป็นผู้ประกอบการ (Professional & Entrepreneurial Practice)
**กลุ่ม:** **G6 · วิชาชีพ ผู้นำ และผู้ประกอบการ (Professional, Leadership & Entrepreneurship)** · **ประเภท:** Soft Skill · **ผูกทักษะแกน:** S1–S6, S8

| # | ทักษะย่อย | ระดับเป้าหมาย | CLO ที่เกี่ยวข้อง | เครื่องมือ |
|---|---|---|---|---|
| 1 | การคิดวิเคราะห์เชิงระบบ (Analytical/Systems Thinking) | L3 | EN-134-103 (CLO1) · แทรกทุกโครงงาน | System Map, Root-cause |
| 2 | การสื่อสารเชิงวิชาชีพและภาษาอังกฤษเทคนิค | L3–L4 | EN-134-101/102 (CLO1) · EN-135-401 (CLO1) · EN-134-104 (CLO4) | Slides, รายงาน, Technical English |
| 3 | การทำงานเป็นทีมและภาวะผู้นำ | L4 นำไปใช้ | EN-134-104 (CLO3) · EN-135-402 (CLO2) · EN-001-028/029/030 | Git, Team Charter, 360° Feedback |
| 4 | ผู้ประกอบการและการบริหารโครงการ (Entrepreneurial/PM) | L2–L3 | EN-132-101 (CLO1,2) · EN-135-402 · YLO4.4 | BMC, Lean Canvas, Gantt |
| 5 | การเรียนรู้ตลอดชีวิตและการปรับตัว | L3 | EN-131-105 (CLO3) · EN-134-103 (CLO3) | Learning Portfolio |
| 6 | กลยุทธ์การแปลงโฉมดิจิทัลและการคิดเชิง Compound AI *(T3)* · **การออกแบบที่ครอบคลุมและเข้าถึงได้ (Inclusive & Accessible Design)** *(ตอบ N17)* | L2–L3 | EN-132-101 (CLO2) · EN-134-104 (CLO1) | Digital Transformation Canvas, System-of-Systems View, Inclusive Design Checklist |

**วิธีวัดและประเมินผล:** การประเมินการทำงานกลุ่มในโครงงาน (Group Project Assessment) · การนำเสนอในสัมมนา (Seminar Presentation) · การประเมิน 360° จากสหกิจ · แผนธุรกิจ/Value Proposition · Learning Portfolio

> [!info] เทียบเคียงมาตรฐานสิงคโปร์ (NUS BAIS / Compound AI)
> เสริม **Digital Transformation Strategy** และกรอบคิด **Compound AI Systems** (มองระบบเป็นนิเวศของเครื่องมือหลายชนิดทำงานร่วมกัน ไม่ใช่โมเดลเดี่ยว) เพื่อเสริมจุดแข็งบัณฑิตแขนง T3 ในการวิเคราะห์ช่องว่างธุรกิจ–เทคโนโลยีและบริหารนวัตกรรมให้คุ้มค่าการลงทุน (ROI)

---

## สรุปการเชื่อมโยง Skill Set ↔ PLO ↔ Track

| Skill Set                                                                               | กลุ่ม | ทักษะแกน                    | PLO หลัก         | T1 เกษตร | T2 อุตสาหกรรม | T3 องค์กร |
| --------------------------------------------------------------------------------------- | :---: | --------------------------- | ---------------- | :------: | :-----------: | :-------: |
| **AISK01** AI Core Engineering Stack *(Learning · Decision · Data · Software)*          |  G1   | H1, H2, H3, H4, H12, H14    | PLO1, PLO2, PLO6 |    ●     |       ●       |     ●     |
| **AISK02** Smart Agriculture Engineering *(Farm Infrastructure · Mechanics · Machines)* |  G2   | H9, H15 + ฐานวิศวกรรมกายภาพ | PLO2, PLO1       |  **●**   |       ○       |     ○     |
| **AISK03** Smart Industry *(AI Industrial Engineering & Automation)*                    |  G2   | H5, H13, H11                | PLO2, PLO1       |    ○     |     **●**     |     ○     |
| **AISK04** Intelligence System for Smart Farm and Factories                             |  G3   | H9, H5, H4                  | PLO2             |    ●     |       ●       |     ○     |
| **AISK05** Applied AI in Agriculture, Industry and Enterprise                           |  G3   | H8, H11                     | PLO2, PLO6       |    ●     |       ●       |     ●     |
| **AISK06** GenAI, LLM & Agentic Systems                                                 |  G4   | H6, H10                     | PLO2, PLO7       |    ○     |       ○       |   **●**   |
| **AISK07** Responsible AI, Security & Governance                                        |  G5   | H7, S7                      | PLO4             |    ●     |       ●       |     ●     |
| **AISK08** Professional & Entrepreneurial Practice                                      |  G6   | S1–S6, S8                   | PLO3, PLO5, PLO7 |    ●     |       ●       |     ●     |

**การอ่านตาราง:** **AISK01** เป็นแกนกลางบังคับของทุก Track · **AISK02/AISK03** เป็นชุด**เฉพาะโดเมน** (เกษตร/อุตสาหกรรม) ที่ทำหน้าที่ "สร้างและประกอบโครงสร้างพื้นฐาน กลไก และเครื่องจักร" · **AISK04/AISK05** เป็นชั้น**ระบบอัจฉริยะและความเข้าใจของเครื่อง** ที่เชื่อมฟาร์มและโรงงานเข้าด้วยกัน (AISK05 ขยายครอบคลุมภาคองค์กร T3 ด้วย)

> [!success] ครบทั้ง KSA และ Constructive Alignment
> - **Knowledge** = หัวข้อ/keywords ต่อ PLO (ส่วน A) → สอนในวิชาแกน
> - **Skill** = 8 Skill Set + ทักษะย่อย + เครื่องมือ (ส่วน B) → ประเมินเป็น Skill Transcript
> - **Attitude** = ทัศนคติต่อ PLO (ส่วน A) → ปลูกฝังผ่านสัมมนา/ปฏิบัติการ/สหกิจ
> - ทุก Skill Set ลิงก์ CLO จริงจาก [[10_Course_Learning_Outcomes_CLO_Mapping]] และวิธีวัดผลชัดเจน

# ส่วน C — การเทียบเคียงมาตรฐานสากล (สิงคโปร์ IMDA / AI Verify / Career Maps)

> เทียบเคียงชุดทักษะ EN-AISK01–08 และ PLO 7 ข้อ กับกรอบมาตรฐานของสิงคโปร์ (ผู้นำเศรษฐกิจดิจิทัลของภูมิภาค) เพื่อยืนยันความครบถ้วนและความเป็นสากล · แหล่งอ้างอิง: IMDA SFw for ICT (GenAI), AI Verify Foundation, Consolidated ICT Career Maps

## C.1 IMDA GenAI TSC (9 ทักษะ) ↔ Skill Set ของหลักสูตร

สิงคโปร์แบ่งคนทำงาน AI เป็น **AI Users** (ใช้ AI เพิ่มประสิทธิภาพ) และ **AI Practitioners** (สร้าง/พัฒนา/ deploy ระบบ) — บัณฑิตหลักสูตรนี้เป็น **AI Practitioners** เป็นหลัก และมีพื้นฐาน AI User literacy ผ่าน S7

| IMDA GenAI TSC | กลุ่ม | ครอบคลุมโดย | สถานะ |
|---|---|---|:--:|
| #1 Generative AI Principles & Applications | Fundamentals | AISK06 (ย่อย 1) · EN-131-101 | ✅ |
| #2 Prompt Design *(AI Users)* | Fundamentals | S7 (AI Literacy) · EN-131-101 | ✅ |
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
| Business Analyst / AI Translator, Chief AI Officer | AISK08 | ทุก Track (ผู้นำ) |

> ยืนยันว่าโครงสร้าง 3 Tracks + 8 Skill Set ของหลักสูตรครอบคลุมเส้นทางอาชีพหลักในกลุ่ม Data & AI ตามมาตรฐานสากล และสอดคล้อง 3 เสาหลักของ NUS BComp(AI): Reasoning & Decision Making (**AISK01** ย่อย 3 · AISK06) · Learning (**AISK01** ย่อย 2) · Perception & Language (**AISK05** · AISK06) — โดยเพิ่มมิติที่หลักสูตรไทยเด่นกว่าคือ **วิศวกรรมกายภาพเฉพาะโดเมน (AISK02 เกษตร · AISK03 อุตสาหกรรม)** ซึ่งตอบอาชีพสายเครื่องจักร/ระบบอัตโนมัติที่หลักสูตร Computing ทั่วไปไม่ครอบคลุม

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
| **Enterprise / FinTech AI** | BAIS, Full-stack AI, Algorithmic Trading, Fraud Detection, Alternative/Unstructured Data, GenAI CX/Robo-advisors | **T3** | **AISK05 (ย่อย 4)**, AISK06, AISK08, AISK01 |
| **Medical & Healthcare AI** *(โดเมนใหม่ — นอก 3 Track)* | Bioinformatics, Medical Image Analysis (MRI/CT), Bayesian Networks, Genomics, Drug Discovery | — | *(Watchlist: วิชาเลือก/Micro-credential อนาคต)* |

> [!tip] ข้อสังเกตเชิงกลยุทธ์
> โดเมน **Healthcare/Bioinformatics** เป็นตลาดที่โตสูงแต่ยังไม่อยู่ใน 3 Track ปัจจุบัน — เสนอเป็น **Watchlist** สำหรับวิชาเลือกชีพ/Micro-credential หรือ Track ที่ 4 ในอนาคต (ต้องใช้ Bayesian/Probabilistic Reasoning + CV + Responsible AI/PDPA ซึ่งมีในแกนอยู่แล้ว)

---

# ส่วน D — การตรวจสอบความสอดคล้องของทักษะข้ามเอกสาร (Skill Alignment Verification)

> ตรวจสอบว่า **ทุกทักษะ (H/S) → Skill Set → CLO → YLO → PLO** เชื่อมโยงกันครบและ "รองรับด้วย PLO" ทุกจุด · อ้างอิง [[03_Target_Skills]] · [[../03_OBE_PLO_Design_2570/07_Curriculum_PLO_Mapping]] · [[10_Course_Learning_Outcomes_CLO_Mapping]]

## D.1 เมทริกซ์ตรวจสอบ: ทักษะแกน H/S → Skill Set → PLO

| ทักษะแกน | Skill Set | PLO ที่รองรับ | รายวิชาหลัก | สถานะ |
|---|---|---|---|:--:|
| H1 AI/ML & Math | **AISK01** (G1 ย่อย 1–4) | PLO1, PLO6 | 131-102, 131-106, 131-101 | ✅ +Symbolic/CS2023 |
| H2 Programming & SW Eng | **AISK01** (G1 ย่อย 5) | PLO2, PLO1 | 001-026, 132-107 | ✅ +Full-stack |
| H3 Data Eng & Analytics | **AISK01** (G1 ย่อย 7) | PLO6, PLO2, PLO3 | 131-107, 132-102 | ✅ |
| H4 MLOps & Cloud | **AISK01** (G1 ย่อย 6) · AISK04 (Edge–Cloud) | PLO2, PLO4 | 131-105, 131-108 | ✅ |
| H5 Automation & Digital Twin | **AISK03** (G2 อุตสาหกรรม) · AISK04 (บูรณาการ) | PLO2, PLO1 | 132-106, 132-105 | ✅ |
| H6 GenAI, LLM & Agentic | AISK06 (G4) | PLO2, PLO7 | 131-101, 132-108 | ✅ เสริม TSC#4/5/9 |
| H7 Security & Responsible AI | AISK07 (G5) | PLO4 | 131-104/108, 134-101/102 | ✅ +AI Verify/ISO 42001/NIST |
| H8 Computer Vision & Remote Sensing | **AISK05** (G3 ความเข้าใจของเครื่อง) | PLO2, PLO6 | 131-103, 132-104 | ✅ |
| H9 IoT, Edge & Sensor | **AISK04** (G3) · AISK02 (ประยุกต์ฟาร์ม) | PLO2, PLO1 | 131-104, 001-027 | ✅ |
| ฐานวิศวกรรมกายภาพ *(กลศาสตร์/วัสดุ/ความร้อน-ของไหล/เขียนแบบ/Workshop)* | **AISK02** (G2 เกษตร) · AISK03 (G2 อุตสาหกรรม) | PLO2, PLO1 | 001-023/024/025, 001-028/029/030 | ✅ **ใหม่ — แกน Build & Construct** |
| H11 Time-Series & Forecasting | **AISK05** (G3) · AISK03 (Predictive Maintenance) | PLO6, PLO2 | 132-102/103/105 | ◐ เลือก/ลึกตาม Track |
| H12 Big Data & Streaming · H14 Data-Centric AI | **AISK01** (G1 ย่อย 7) | PLO6 | 131-107 | ◐ เลือก |
| H13 RL, Optimization & OR | **AISK03** (G2 ย่อย 4) | PLO1, PLO2 | 132-102, 132-106 | ◐ เลือก (T2) |
| H15 Green/Sustainable AI | **AISK02** (G2 ย่อย 4) | PLO4, PLO2 | 001-023, 132-103 | ◐ เลือก (T1) |
| H10 NLP / Thai NLP | AISK06 (G4 ย่อย 5) | PLO2, PLO7 | 132-108 | ◐ เลือก (T3) |
| S1 Analytical/Systems | AISK08 | PLO1, PLO6 | 134-103 + ทุกโครงงาน | ✅ |
| S2 Problem-Solving/Judgment | AISK08 | PLO1, PLO2 | ทุกโครงงาน | ✅ |
| S3 Adaptability/Lifelong | AISK08 | PLO7 | 131-105, 134-103 | ✅ |
| S4 Communication/English | AISK08 | PLO3 | 134-101/102, 135-401 | ✅ |
| S5 Teamwork/Leadership | AISK08 | PLO5 | 001-028/029/030, 134-104 | ✅ |
| S6 Product/Entrepreneurial/PM | AISK08 | PLO7 | 132-101, 135-402 | ✅ |
| S7 AI Literacy/Human–AI | AISK06/07 | PLO4, PLO7 | 131-101 | ✅ AI User TSC#2 |
| S8 Empathy/Stakeholder | AISK08 | PLO3, PLO5 | 135-401, 132-101 | ✅ |

**ผลตรวจสอบ:** ทักษะแกน 15 ข้อ (H1–H9, S1–S6) + ส่วนขยาย (H10–H15, S7–S8) + **ฐานวิศวกรรมกายภาพ** ผูกกับ Skill Set ครบ และ **รองรับด้วย PLO ทุกข้อ** — ไม่มีทักษะลอย (orphan skill) และไม่มี PLO ที่ขาดทักษะรองรับ

> [!note] การเปลี่ยนแปลงจากการ Regroup
> **AISK01** รวมทักษะแกนเทคโนโลยี 4 ด้าน (H1 เรียนรู้/ตัดสินใจ · H2 ซอฟต์แวร์ · H3 ข้อมูล · H4 MLOps) เป็น "แกนกลางบังคับทุก Track" · **AISK02/AISK03** เกิดใหม่เป็นชุด **เฉพาะโดเมน** ที่รับ **ฐานวิศวกรรมกายภาพ** (เดิมกระจายอยู่ในรายวิชาแต่ไม่มีชุดทักษะรองรับ = ปิดช่องว่างสำคัญ) · **AISK04/AISK05** เป็นชั้นระบบอัจฉริยะ/ความเข้าใจของเครื่อง ที่เชื่อมฟาร์ม–โรงงาน–องค์กร

## D.2 ความครบถ้วนราย PLO (ทุก PLO มีทักษะ + CLO + Skill Set รองรับ)

| PLO | ทักษะแกนหลัก | Skill Set | ระดับปลายทาง | ช่องว่าง/การแก้ |
|---|---|---|:--:|---|
| PLO1 | H1, H2, S1 + ฐานวิศวกรรมกายภาพ | AISK01 · AISK02/03 | M (Capstone/สหกิจ) | — |
| PLO2 | H2, H4, H5, H8, H9 + ฐานกายภาพ | AISK01 · **AISK02/03** · AISK04/05 | M | — |
| PLO3 | S4, H3 (Viz) | AISK08 · AISK05 (สื่อสารเชิงโดเมน) | M | — |
| **PLO4** | H7, S7, H15 | AISK07 · AISK02 (ความยั่งยืน) | M | ✅ เสริม AI Verify + ISO 42001/NIST AI RMF → Mastery ในแกน (เดิมพึ่งสหกิจ) · เสนอวิชา "AI Ethics & Governance" |
| PLO5 | S5 | AISK08 | M | — |
| PLO6 | H1, H3, H8, H11 | AISK01 · **AISK05** | M | — |
| PLO7 | S3, S6, H6 | AISK06/08 | M | — |

> [!success] ผลการตรวจสอบ Skill Alignment (ทุกเอกสารรองรับด้วย PLO)
> - **ทักษะ (03) ↔ Skill Set (11) ↔ CLO (10) ↔ PLO (04) ↔ รายวิชา (07):** เชื่อมโยงครบวงจร ไม่มีจุดขาด
> - **PLO4 (จริยธรรม)** เดิมเป็นจุดอ่อน (Mastery พึ่งสหกิจ) — การเสริมกรอบ **AI Verify** ทำให้ประเมิน Mastery ในแกนบังคับได้ และเปลี่ยน Attitude เป็น Hard Skill ที่วัดได้
> - **PLO7/PLO2 (GenAI)** ยกระดับด้วย IMDA TSC#4/5/9 (Model Selection/Evaluation/Red-teaming) — ทันสมัยระดับสากล
> - ทุก PLO บรรลุระดับ **M (Mastery)** ที่ Capstone (134-104) และสหกิจ (135-402)

---

# ส่วน E — การเชื่อมโยงกับความต้องการของผู้มีส่วนได้ส่วนเสีย (Needs Alignment)

> ตรวจสอบว่าชุดทักษะ **EN-AISK01–08** ตอบ **ความต้องการ N1–N18** จาก [[../03_OBE_PLO_Design_2570/01_Stakeholder_Needs|การสังเคราะห์ความต้องการของผู้มีส่วนได้ส่วนเสีย (SH1–SH8)]] ครบถ้วนหรือไม่ · N1–N11 = จากผลสำรวจโดยตรง (55 ราย) · N12–N18 = เชิงแนวโน้มจากมาตรฐานสากล/นโยบายชาติ

## E.1 ความต้องการจากผลสำรวจโดยตรง (N1–N11) ↔ Skill Set

| Need | สาระสำคัญ | หลักฐานเชิงปริมาณ | Skill Set ที่ตอบ | ระดับการตอบ |
|---|---|---|---|:--:|
| **N1** | บูรณาการวิศวกรรมแกนหลัก (ไฟฟ้า/กลศาสตร์/ควบคุม) เข้ากับ AI ได้จริง | **Pain point อันดับ 1 (13/27)** · ทักษะวิศวกรรมแกน 4.22/5 | **AISK02 (G2 เกษตร) · AISK03 (G2 อุตสาหกรรม) · AISK04 (G3)** บนฐาน AISK01 (G1) | ⭐ **ตอบตรงที่สุด** |
| **N2** | วิศวกรรมข้อมูลครบวงจร → ML/DL/CV | ข้อมูลไร้ระเบียบ (9/27) · AI เชิงลึก 4.19 | **AISK01 (ย่อย 2, 7)** · AISK05 (ย่อย 1) | ✅ ครบ |
| **N3** | Deploy/Scale ภายใต้งบจำกัด · ผู้ใช้ดูแลเองได้ | งบโครงสร้างพื้นฐานสูง (10/27) · ใช้จริงไม่ได้ (2/27) | **AISK01 (ย่อย 6)** · AISK04 (Edge–Cloud) · AISK02 (ย่อย 4 ประหยัดพลังงาน) | ✅ ครบ |
| **N4** | จริยธรรม AI · ไซเบอร์ · ตรวจสอบผลก่อนใช้ | **คะแนนสูงสุด 4.26/5** · ขาดความรู้จริยธรรม (6/27) | **AISK07 (G5 ทั้งชุด)** · AISK06 (ย่อย 4 Red-teaming) | ⭐ ยกระดับด้วย AI Verify |
| **N5** | สมรรถนะเฉพาะ Track | PLC/SCADA+หุ่นยนต์ 12/27 · พยากรณ์ผลผลิต 11/27 · GenAI/LLM 11/27 | T1 → **AISK02 + AISK05** · T2 → **AISK03 + AISK04** · T3 → **AISK06** | ⭐ ตรงราย Track |
| **N6** | Hands-on: อุปกรณ์จริง · Workshop · โจทย์จริง · สหกิจ | **อุปกรณ์จริง 4.87/5 (สูงสุด)** · Workshop 4.74 · โครงงาน/สหกิจ 4.57 | **AISK02 (ย่อย 2 Build & Construct)** · AISK03 (ย่อย 1) · AISK04 (ย่อย 3) · Capstone/สหกิจ | ⭐ **ตอบตรงที่สุด** |
| **N7** | ภาษาอังกฤษเทคนิค · สื่อสาร · ทำงานเป็นทีม | ประเด็นที่ถูกกล่าวถึงมากสุดทุกกลุ่ม · Soft Skills 4.04 | **AISK08 (G6 ย่อย 2, 3)** | ✅ ครบ |
| **N8** | ความคิดเชิงผู้ประกอบการ · แปลง AI เป็นผลิตภัณฑ์ | ผู้เรียน 10/23 ต้องการเป็นนวัตกร/สตาร์ทอัพ | **AISK08 (G6 ย่อย 4, 6)** · AISK05 (ย่อย 4) | ✅ ครบ |
| **N9** | เทคโนโลยีอุบัติใหม่ (GenAI, Agentic, Prompt) · เรียนรู้ตลอดชีวิต | คำตอบปลายเปิดผู้เรียน+คณาจารย์ | **AISK06 (G4 ทั้งชุด)** · AISK08 (ย่อย 5) | ⭐ ยกระดับด้วย IMDA TSC |
| **N10** | คิดวิเคราะห์/วิพากษ์ · ใช้ AI อย่างมีวิจารณญาณ | คณาจารย์ + ผู้ใช้บัณฑิต | **AISK08 (ย่อย 1)** · AISK07 (S7 AI Literacy) | ✅ ครบ |
| **N11** | ตอบโจทย์การจ้างงานภาคอีสานและชุมชน | ผู้ปกครอง + ผู้ใช้บัณฑิตภาคเกษตรในพื้นที่ | **AISK02 (G2 เกษตร)** · AISK05 · AISK08 (S8 Stakeholder-centric) | ✅ ครบ |

## E.2 ความต้องการเชิงแนวโน้ม (N12–N18) ↔ Skill Set

| Need | สาระสำคัญ | Skill Set ที่ตอบ | ระดับการตอบ |
|---|---|---|:--:|
| **N12** | Sustainable/Green AI · ประสิทธิภาพพลังงาน · เกษตรคาร์บอนต่ำ | **AISK02 (ย่อย 4)** *(H15)* · AISK01 (ย่อย 6 Model Efficiency) | ✅ ครบ |
| **N13** | Systems Thinking · ระบบครบวงจร (เซนเซอร์–ข้อมูล–โมเดล–ควบคุม–ธุรกิจ) | **AISK04 (G3 ย่อย 3 Cyber-Physical)** · AISK08 (ย่อย 1) | ⭐ ตอบตรง |
| **N14** | รองรับสังคมสูงวัย · แรงงานเกษตรขาดแคลน · ระบบอัตโนมัติทดแทน | **AISK03 (ย่อย 2 — เพิ่ม Human–Robot Collaboration & Ergonomics)** · AISK02 (ย่อย 3 ฟาร์มอัตโนมัติ) | ✅ **ปรับแล้ว** |
| **N15** | Thai NLP / Sovereign AI | **AISK06 (ย่อย 5)** *(H10)* | ✅ ครบ |
| **N16** | ธรรมาภิบาล AI · การปฏิบัติตามกฎหมาย (PDPA/ร่าง กม. AI) | **AISK07 (ย่อย 2, 3)** *(AI Verify + ISO 42001 + NIST AI RMF)* | ⭐ ยกระดับสูงสุด |
| **N17** | Inclusive AI · การเข้าถึงดิจิทัล | **AISK08 (ย่อย 6 — เพิ่ม Inclusive & Accessible Design)** · AISK05 · AISK02 (ผู้ใช้ดูแลเองได้) · S8 | ✅ **ปรับแล้ว** |
| **N18** | Domain Expertise เชิงลึก (เกษตร T1 · การผลิต T2 · ธุรกิจ T3) | **AISK02 (G2 เกษตร) · AISK03 (G2 อุตสาหกรรม) · AISK05 (ย่อย 4 องค์กร)** | ⭐ **ตอบตรงที่สุด** |

## E.3 ข้อค้นพบสำคัญจากการวิเคราะห์

> [!success] การ Regroup เป็นชุดเฉพาะโดเมนตอบ Pain Point อันดับ 1 โดยตรง
> **N1** ("ขาดวิศวกรที่เข้าใจทั้งงานโครงสร้างวิศวกรรมและโมเดล AI ควบคู่กัน" — **13/27 = Pain point อันดับ 1 ของผู้ใช้บัณฑิต**) และ **N18** (ตลาดให้ผลตอบแทนผู้เชี่ยวชาญเฉพาะทางสูงกว่า Generalist **30–50%** และงาน AI ~75% ต้องการ Domain Expert)
> → ทั้งสอง Need ตอบด้วยโครงสร้างใหม่ที่แยก **AISK02 (วิศวกรรมเกษตรอัจฉริยะ)** และ **AISK03 (วิศวกรรมอุตสาหกรรมอัจฉริยะ)** ออกเป็นชุดทักษะเฉพาะโดเมนใน **G2 (สร้างและประกอบโครงสร้างพื้นฐาน กลไก เครื่องจักร)** ทำงานคู่กับ **G1 (AISK01 — การเรียนรู้และตัดสินใจของเครื่อง)**
> **นี่คือจุดต่างเชิงยุทธศาสตร์จากหลักสูตร Computing/AI ทั่วไป** ที่มีเพียง G1 แต่ไม่มี G2

> [!success] Need ที่มีคะแนนสูงสุดได้รับการตอบเต็มที่
> - **N6 อุปกรณ์จริง/Workshop (4.87 — สูงสุดในบรรดาความคาดหวังผู้เรียน)** → **AISK02 ย่อย 2 "การสร้างและประกอบชิ้นงาน/ระบบฟาร์ม"** + Workshop I–III + AISK03 ย่อย 1 + AISK04 ย่อย 3
> - **N4 จริยธรรมและความปลอดภัย (4.26 — สูงสุดในบรรดาทักษะที่ผู้ใช้บัณฑิตให้ความสำคัญ)** → **AISK07** ที่ยกระดับด้วย AI Verify 11 หลักการ + ISO/IEC 42001 + NIST AI RMF ทำให้ประเมินเป็น Hard Skill ได้จริง

> [!done] ช่องว่างที่ปรับแก้แล้ว (2026-07-25)
> เดิม **N14** และ **N17** ตอบเพียงทางอ้อม จึงปรับทักษะย่อยให้ระบุชัดเจน:
> 1. ✅ **AISK03 ย่อย 2** เพิ่ม *"ระบบอัตโนมัติเพื่อทดแทนแรงงานที่ขาดแคลนและการทำงานร่วมมนุษย์–เครื่องจักรอย่างปลอดภัย (Human–Robot Collaboration & Ergonomics)"* → **ตอบ N14 โดยตรง**
> 2. ✅ **AISK08 ย่อย 6** เพิ่ม *"การออกแบบที่ครอบคลุมและเข้าถึงได้ (Inclusive & Accessible Design)"* → **ตอบ N17 โดยตรง**
>
> **ข้อเสนอที่ยังรอการตัดสินใจของคณะกรรมการ:**
> 3. ⏳ **N18 Domain Expertise** — เสนอกำหนดให้วิชาเลือกชีพ (EN-133) อย่างน้อย **2 จาก 5 วิชา** ต้องเป็น **วิชาโดเมนเชิงลึก** (เกษตรศาสตร์ / กระบวนการผลิต–ลีน / ธุรกิจ–การเงิน) ไม่ใช่วิชาเทคนิค AI ล้วน เพื่อรักษาความได้เปรียบด้าน Domain Expertise ที่ตลาดให้ผลตอบแทนสูงกว่า Generalist 30–50%

## E.4 สรุปความครอบคลุม Needs

| ระดับการตอบ | จำนวน | Needs |
|---|:--:|---|
| ⭐ **ตอบตรงและเป็นจุดแข็ง** | **8** | N1, N4, N5, N6, N9, N13, N16, N18 |
| ✅ **ตอบครบถ้วน** | **10** | N2, N3, N7, N8, N10, N11, N12, N15, **N14**, **N17** *(ปรับแล้ว)* |
| ◐ ตอบทางอ้อม | **0** | — |
| | **รวม 18** | |

**สรุป:** หลังปรับทักษะย่อยของ AISK03 และ AISK08 แล้ว ชุดทักษะ EN-AISK01–08 **ครอบคลุมครบทั้ง 18 Needs** โดยไม่มี Need ที่ตอบเพียงทางอ้อมและไม่มี Need ที่ขาดการตอบ (no orphan need) · เหลือเพียงข้อเสนอเชิงโครงสร้างเรื่องสัดส่วนวิชาโดเมนเชิงลึก (§E.3 ข้อ 3) ที่รอการตัดสินใจของคณะกรรมการ

## E.6 ความสอดคล้องกับพันธกิจมหาวิทยาลัย (KSU Soft Skills 5C+ / Skill-based Transcript)

> รวมจากเล่มหลักสูตรฉบับ OBE v4 (หมวดปรัชญา/พันธกิจ) ซึ่ง **ยังไม่ได้บันทึกไว้ใน Vault** — นำมาผนวกเพื่อความครบถ้วนของการสอบย้อนกลับ

**พันธกิจข้อ 1 ของมหาวิทยาลัยกาฬสินธุ์** ระบุให้ *"ผลิตบัณฑิตที่มีสมรรถนะสูงด้านนวัตกรรม ทักษะอาชีพและความเป็นผู้ประกอบการ พร้อมทักษะแห่งอนาคต **(KSU Soft Skills 5C+ / Skill-based transcript)** ตอบสนองตลาดแรงงาน"*

| องค์ประกอบระดับมหาวิทยาลัย | การตอบสนองของหลักสูตร |
|---|---|
| **Skill-based Transcript** (พันธกิจข้อ 1) | **ชุดทักษะ EN-AISK01–08 พร้อมระดับ L1–L4 และวิธีวัดผล** ในเอกสารนี้ = กลไกที่ทำให้ออก Skill Transcript ได้จริงในระดับหลักสูตร |
| **KSU Soft Skills 5C+** | ครอบคลุมด้วย **AISK08 (G6)** *(S1–S6, S8: คิดวิเคราะห์ · สื่อสาร · ทีม/ผู้นำ · ผู้ประกอบการ · เรียนรู้ตลอดชีวิต · เข้าใจผู้มีส่วนได้ส่วนเสีย)* และ **AISK07 (G5)** *(S7 AI Literacy)* |
| **ค่านิยม CHANGE** *(Collaboration · High Performance · Agility · Networking · Good Governance · Excellence)* | Collaboration/Networking → AISK08 ย่อย 3 · Agility → AISK08 ย่อย 5 · Good Governance → **AISK07** · High Performance/Excellence → เกณฑ์ระดับ L3–L4 ของทุกชุด |
| **ปรัชญาการศึกษา** *"ประสบการณ์สร้างการเรียนรู้สู่มืออาชีพ"* | ทุกชุดทักษะประเมินผ่าน **Workshop · Project · สหกิจ** (ไม่ใช่ข้อสอบอย่างเดียว) — สอดรับ **N6 (4.87/5)** |
| **อัตลักษณ์บัณฑิต** *"มุ่งมั่นสร้างสรรค์ เชี่ยวชาญวิชาชีพ"* | มุ่งมั่นสร้างสรรค์ → AISK06/AISK08 · เชี่ยวชาญวิชาชีพ → **AISK02/AISK03 (Domain Expertise)** |

> [!important] ข้อเสนอเพื่อความสมบูรณ์
> ควรขอ **นิยาม 5C อย่างเป็นทางการ** จากมหาวิทยาลัย แล้วทำตาราง mapping `5C ↔ S1–S8 ↔ AISK08` เพื่อให้ Skill Transcript ระดับหลักสูตรออกได้ตรงกับแบบฟอร์มกลางของมหาวิทยาลัย — ปัจจุบันเล่มหลักสูตรอ้างถึง "5C+" แต่ไม่ได้ระบุรายการ 5 ตัวไว้

## E.5 การสอบย้อนกลับครบวงจร (Full Traceability)

```text
SH1–SH8 (ผู้มีส่วนได้ส่วนเสีย)
   ↓
N1–N18 (ความต้องการ)
   ↓
H1–H15 / S1–S8 (ทักษะเป้าหมาย)
   ↓
EN-AISK01–08 · G1–G6 (ชุดทักษะ + KSA)
   ↓
CLO รายวิชา → YLO รายปี → PLO1–7
   ↓
Skill Transcript + หลักฐานการประเมิน
```

> [!note] การทวนสอบ
> เส้นทางนี้ทำให้ตอบคำถามผู้ประเมิน (SH8/AUN-QA/TABEE) ได้ว่า *"ทักษะนี้มาจากความต้องการข้อไหน ของใคร มีหลักฐานอะไร และวัดผลที่รายวิชาใด"* — ดูรายละเอียด KSA รายวิชาใน [[10_Course_Learning_Outcomes_CLO_Mapping]]

---

## หมายเหตุการนำไปใช้

0. **การปรับปรุงตามมาตรฐานสากล (2026-07-25):**
   - *รอบ 1 (IMDA/สิงคโปร์):* เสริม EN-AISK06 (Model Selection/Evaluation + LLM Red-teaming ตาม IMDA TSC#4/5/9 + Project Moonshot), EN-AISK07 (AI Verify 11 หลักการ + Audit Evidence), EN-AISK02 (Full-stack), EN-AISK08 (Digital Transformation/Compound AI)
   - *รอบ 2 (Global Standards/Domains):* เสริม EN-AISK01 (Symbolic/Neurosymbolic AI ตาม CS2023), EN-AISK07 (ISO/IEC 42001, NIST AI RMF, EU AI Act + AI Security specialization), เพิ่มส่วน **C.4 มาตรฐานสากล** และ **C.5 การประยุกต์เฉพาะโดเมน ↔ Track** (Agriculture 5.0/Smart Factory/FinTech + Healthcare watchlist)
   - *รอบ 3 (Regroup ตามเอกลักษณ์วิศวกรรม):* จัดกลุ่มใหม่เป็น **G1–G6** และปรับ AISK01–05 — **AISK01** รวมเป็น *AI Core Engineering Stack* (H1–H4) · **AISK02** *Smart Agriculture Engineering* · **AISK03** *Smart Industry* (ทั้งคู่รับ **ฐานวิศวกรรมกายภาพ** ที่เดิมไม่มีชุดทักษะรองรับ) · **AISK04** *Intelligence System for Smart Farm and Factories* · **AISK05** *Applied AI in Agriculture, Industry and Enterprise* (ขยายคลุม T3)
   - *รอบ 4 (เชื่อมโยง Needs):* เพิ่ม **ส่วน E — Needs Alignment** ตรวจสอบ N1–N18 ↔ Skill Set ครบทุกข้อ · ปรับ **AISK03 ย่อย 2** (Human–Robot Collaboration & Ergonomics → N14) และ **AISK08 ย่อย 6** (Inclusive & Accessible Design → N17) ให้ตอบ Need โดยตรง
   - *แหล่งอ้างอิง:* IMDA SFw for ICT, AI Verify Foundation, ICT Career Maps, ACM/IEEE-CS/AAAI CS2023, ISO/IEC 42001, NIST AI RMF, NUS BComp(AI)/BAIS, WEF Future of Jobs 2025, [[../03_OBE_PLO_Design_2570/01_Stakeholder_Needs|Stakeholder Needs N1–N18]]
1. **ระดับความเชี่ยวชาญเป้าหมาย** ใช้ L1–L4 ตาม [[03_Target_Skills#3.3 ระดับความลึกของทักษะ]] — นักศึกษาต้องได้ทักษะแกนอย่างน้อย L2–L3 และทักษะเฉพาะ Track ที่เลือกถึง L4 ผ่าน Workshop/Project/สหกิจ
2. **Skill Transcript** ออกให้เมื่อผ่านเกณฑ์การประเมินของแต่ละทักษะย่อย (Assessment ในตาราง) — เสนอผูกกับ **Year Gates** ใน [[../04_Course_Descriptions_2570/11_Year_Level_Course_Sequence_and_YLO#7-จุดตรวจประเมิน-ylo-year-gates]]
3. **วิชาเลือกชีพ (EN-133)** เพิ่มความลึกของ Skill Set ตาม Track ให้ถึง L4 — เติม CLO เฉพาะรายวิชาเมื่อยืนยันคลังวิชา
4. **เครื่องมือ (Tools)** เป็นตัวอย่างมาตรฐานอุตสาหกรรม ปรับตามความพร้อมห้องปฏิบัติการและแนวโน้มตลาด (ทบทวนปีละครั้งร่วมกับ Advisory Board)

[[10_Course_Learning_Outcomes_CLO_Mapping|← CLO Mapping]] | [[03_Target_Skills|ทักษะเป้าหมาย H/S]] | [[00_TQF2_Drafts_Home|หน้าหลัก TQF2]]
