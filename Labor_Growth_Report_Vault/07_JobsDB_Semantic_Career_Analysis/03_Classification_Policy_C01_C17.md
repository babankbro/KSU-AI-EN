# เกณฑ์จำแนกอาชีพ C01–C17

## หลักร่วม

การจำแนกยึด **หน้าที่และผลลัพธ์ของงาน** มากกว่าชื่อตำแหน่ง ต้องมีหลักฐานจากเนื้องานจริง และไม่ใช้คำค้นเป็นตัวตัดสิน

| รหัส | กลุ่มอาชีพ | หลักฐานที่ต้องการ |
|---|---|---|
| C01 | AI/ML Engineer | สร้าง ฝึก ประเมิน หรือ deploy โมเดล ML/AI เป็นแกนหลัก |
| C02 | AI Application and Solutions | ออกแบบ/ประยุกต์ AI solution เพื่อแก้ปัญหาธุรกิจหรือองค์กร |
| C03 | Smart Agriculture and IoT | มีทั้งบริบทเกษตร และ smart/IoT/data/control ที่ใช้ในเกษตร |
| C04 | Automation and Control Engineer | ระบบควบคุมอุตสาหกรรม PLC/SCADA/DCS/instrumentation/automation |
| C05 | Robotics and System Integration | หุ่นยนต์กายภาพ mechatronics robot cell หรือ system integration |
| C06 | AI Software and Application | พัฒนาซอฟต์แวร์ แอป backend/frontend/API ที่มี AI หรือเป็นฐานส่งมอบ AI |
| C07 | Data Engineer | data pipeline, ETL/ELT, data platform, warehouse/lake และ data quality |
| C08 | AI Innovator | product innovation, prototype, UX/market discovery และ AI product |
| C09 | Tech/AI Entrepreneur | ownership ด้าน venture, commercialization, business model หรือ startup |
| C10 | AI Researcher | วิจัยเชิงวิทยาศาสตร์ AI/ML ทดลอง สร้างองค์ความรู้ หรือ publication |
| C11 | Government/IT Specialist | IT operation, digital government, infrastructure, security หรือ procurement ภาครัฐ/องค์กร |
| C12 | Data Scientist and Analyst | วิเคราะห์ข้อมูล BI/statistics/visualization/predictive insight |
| C13 | AI Smart Factory | smart factory, IIoT, MES, connected production และ factory integration |
| C14 | AI Process and Production | production/process engineering, optimization, quality, Lean และ manufacturing |
| C15 | Decision Support Systems | optimization, simulation, OR, forecasting, scenario หรือระบบสนับสนุนการตัดสินใจ |
| C16 | AI Maintenance | maintenance, reliability, predictive maintenance, CMMS, FMEA หรือ asset health |
| C17 | AI Industrial Engineer | industrial engineering ที่ผสาน AI/data/automation เพื่อเพิ่มประสิทธิภาพ |

## Domain gates ที่ต้องผ่าน

### C03 Smart Agriculture and IoT

ต้องมีหลักฐานสองด้านพร้อมกัน:

1. โดเมนเกษตร อาหาร ฟาร์ม พืช ปศุสัตว์ หรือ precision agriculture
2. IoT, sensors, automation, control, data analytics หรือระบบอัจฉริยะ

งาน IoT ทั่วไปที่ไม่มีบริบทเกษตรไม่เข้า C03

### C04 Automation and Control

รับเฉพาะ automation/control ในระบบกายภาพหรืออุตสาหกรรม เช่น PLC, SCADA, DCS, instrumentation, drives, machine control งาน RPA, Power Automate หรือ workflow automation ทางธุรกิจไม่เข้า C04

### C05 Robotics

ต้องมี physical robotics, robot cell, mechatronics, motion, manipulator, AMR/AGV หรือ integration ของเครื่องจักร การใช้คำว่า bot/automation ในซอฟต์แวร์ไม่เพียงพอ

### C09 Entrepreneurship

ต้องมีความรับผิดชอบด้าน venture ownership, commercialization, business model, fundraising, go-to-market หรือสร้างธุรกิจ ไม่จัด consultant/product role ทั่วไปเป็น entrepreneur โดยอัตโนมัติ

### C10 AI Researcher

ต้องเป็น scientific AI/ML research, research engineering, experiment, novel method หรือ publication งาน market research และ user research ไม่เข้า C10

### C13, C14, C16 และ C17

ต้องมีบริบทโรงงาน การผลิต เครื่องจักร สินทรัพย์อุตสาหกรรม หรือ industrial operations อย่างชัดเจน:

- C13 เน้น connected/smart factory architecture
- C14 เน้นกระบวนการและผลผลิต
- C16 เน้นความพร้อมใช้และการบำรุงรักษา
- C17 เน้น industrial engineering ผสาน AI/data เพื่อปรับปรุงระบบ

### C15 Decision Support Systems

ต้องมี DSS, optimization, operations research, simulation, scenario planning, forecasting เพื่อการตัดสินใจ หรือ decision intelligence การทำ dashboard/BI เพียงอย่างเดียวอยู่ C12

## กฎแยกกลุ่มที่มักทับซ้อน

| สถานการณ์ | แนวทาง |
|---|---|
| สร้างโมเดล AI เป็นแกน | C01 Primary |
| นำ AI/RPA ไปแก้โจทย์องค์กร | C02 |
| พัฒนาระบบซอฟต์แวร์/API เป็นแกน | C06 |
| สร้าง data pipelines/platform | C07 |
| วิเคราะห์และสื่อสาร insight | C12 |
| AI product discovery/prototyping | C08 |
| production optimization/quality | C14 |
| connected factory/IIoT/MES | C13 |
| maintenance/reliability | C16 |
| AI-enabled industrial engineering | C17 |

งานเดียวสามารถมี Primary หนึ่งกลุ่มและ Secondary ไม่เกินสองกลุ่มเมื่อมีหน้าที่แยกกันชัด เช่น AI Solutions เป็น Primary และ Software Development เป็น Secondary

## กลุ่มย่อย

แต่ละ relation เลือกกลุ่มย่อยที่เหมาะที่สุดเพียงหนึ่งกลุ่มภายใน C เพื่อป้องกันการนับซ้ำภายในอาชีพเดียว ดูผลและจำนวนที่ [[04_Career_and_Subgroup_Results|ผลรายอาชีพและกลุ่มย่อย]]
