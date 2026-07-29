# การทำซ้ำและขั้นตอนอัปเดต

## แหล่งข้อมูลในโครงการ

| ไฟล์/ส่วน | หน้าที่ |
|---|---|
| `curriculum-graph/data/jobsdb-careers-raw.json` | ผลเก็บ JobsDB และ search provenance |
| `curriculum-graph/src/jobsData.json` | ข้อมูลที่หน้าเว็บใช้ รวม `classifiedMatches` |
| `.env.local` | เก็บ `GEMINI_API_KEY` เฉพาะเครื่องและถูก ignore จาก Git |
| หน้า Careers / Jobs and Skills | แสดงจำนวนงาน กลุ่มย่อย รายละเอียดงาน และ Skills |

> [!warning] Secret management
> ห้ามบันทึก Gemini API key ลง Vault, source file, commit หรือเอกสารรายงาน หาก key เคยถูกเปิดเผยในข้อความหรือ log ควร rotate key ใน Google AI Studio/Google Cloud แล้วแทนที่เฉพาะใน `.env.local`

## ขั้นตอนอัปเดตข้อมูลรอบใหม่

1. **กำหนดเวอร์ชัน**
   - วันที่ snapshot
   - query set version
   - classification policy version
   - model และ prompt version

2. **เก็บข้อมูล**
   - ดึงทุกหน้าที่ผลค้นหาแสดง
   - เก็บ Job ID, title, company, location, description และ URL
   - รวมรายการด้วย Job ID
   - เก็บทุก query relation เป็น `searchMatches`

3. **ตรวจข้อมูลดิบ**
   - จำนวน rows ต่อ query
   - Job ID ว่าง/ซ้ำ
   - URL และวันที่ประกาศ
   - งานที่รายละเอียดไม่ครบ

4. **จำแนกราย Job**
   - ไม่ส่ง search query เป็นหลักฐานตัดสิน
   - ใช้ title, classification, description, summary และ supported skills
   - ใช้กฎใน [[03_Classification_Policy_C01_C17|Classification Policy]]
   - Primary ไม่เกิน 1 และ Secondary ไม่เกิน 2
   - บันทึก subgroup, confidence และ reason

5. **คำนวณ Skills**
   - รับเฉพาะ Job ที่มี `classifiedMatches` ของ C/subgroup ที่เลือก
   - นับหนึ่งครั้งต่อ Job/C/Skill
   - ทดสอบ regex ที่เป็น token สั้นหรือคำกำกวม

6. **ตรวจผล**
   - processed = raw jobs
   - Primary/Secondary ไม่เกินข้อกำหนด
   - confidence ไม่ต่ำกว่า threshold
   - จำนวนในหน้าเว็บตรงกับ JSON
   - เปลี่ยน C/subgroup แล้วรายละเอียดงานและ Skills ต้องเปลี่ยนตาม
   - ตรวจ audit cases ที่บันทึกไว้

7. **สร้างและทดสอบหน้าเว็บ**
   - build ต้องผ่าน
   - ทดสอบ dropdown C และ subgroup
   - ทดสอบ search และ skill filter
   - ตรวจข้อความ snapshot และจำนวน accepted jobs/relations

8. **อัปเดต Vault**
   - เปลี่ยนวันที่ snapshot
   - อัปเดตตาราง C01–C17 และ subgroup
   - อัปเดต Skills หลังแก้ taxonomy
   - บันทึก policy/model version และข้อจำกัดใหม่

## Checklist ก่อนเผยแพร่

- [ ] `.env.local` และ secrets ไม่อยู่ใน Git
- [ ] `searchMatches` ไม่ถูกใช้คำนวณหน้าเว็บ
- [ ] `classifiedMatches` เป็นฐานเดียวของ counts และ Skills
- [ ] อธิบาย Job IDs และ relations แยกกัน
- [ ] ตรวจงาน confidence ต่ำแบบ stratified sample
- [ ] ตรวจ domain gates C03, C04, C05, C13–C17
- [ ] ทดสอบ C11 Procurement regex ใหม่
- [ ] ตรวจ duplicate content clusters
- [ ] build และ UI test ผ่าน
- [ ] บันทึกวันที่ snapshot และเวอร์ชัน

## Baseline รอบปัจจุบัน

| Metric | Baseline 2026-07-28 |
|---|---:|
| Raw unique jobs | 7,424 |
| Search relations | 19,866 |
| Accepted jobs | 3,278 |
| Rejected jobs | 4,146 |
| Classified relations | 5,377 |
| Primary | 3,278 |
| Secondary | 2,099 |

หากรอบใหม่เปลี่ยนอย่างมาก ควรแยกว่าเกิดจากตลาดแรงงานเปลี่ยน, query coverage เปลี่ยน, policy เปลี่ยน หรือ model/prompt เปลี่ยนก่อนสรุปแนวโน้ม

---

กลับไป [[00_Home|หน้าหลักชุดวิเคราะห์ JobsDB]]
