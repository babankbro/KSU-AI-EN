# โครงสร้างและรายวิชา

> หมวดวิชา แขนงวิชา รายวิชา ลำดับก่อน–หลัง และแผนการเรียน ขึ้นกับกลุ่ม 01 เท่านั้น
>
> **6 ตาราง · 258 แถว** — ส่งออกเป็น `02_curriculum.xlsx` หนึ่งตารางต่อหนึ่งชีต
>
> สร้างอัตโนมัติจากฐานข้อมูลจริงด้วย `npm run db:docs` · ห้ามแก้ด้วยมือ

### `course_group`

หมวดและกลุ่มวิชาตามโครงสร้างหลักสูตร

**8 แถว**

> [!important] `is_elective_pool` แยกคลังวิชาเลือกออกจากวิชาที่เรียนจริง คลังมี 57 รายวิชาแต่ผู้เรียนเลือก 5 การนับรวมจะทำให้ตัวเลขเฟ้อ

| คอลัมน์ | ชนิด | บังคับ | ความหมาย |
|---|---|:--:|---|
| `id` | text | ✓ |  |
| `no` | text | ✓ |  |
| `name_th` | text | ✓ |  |
| `code_prefix` | text |  |  |
| `credits` | integer | ✓ |  |
| `course_count` | integer |  |  |
| `is_elective_pool` | boolean | ✓ |  |
| `pick_count` | integer |  | ถ้าเป็นคลังให้เลือก ต้องเลือกกี่รายวิชา |
| `note` | text |  |  |

### `track`

แขนงวิชา 3 แขนงที่ผู้เรียนเลือก

**3 แถว**

| คอลัมน์ | ชนิด | บังคับ | ความหมาย |
|---|---|:--:|---|
| `id` | text | ✓ |  |
| `name_th` | text | ✓ |  |
| `name_en` | text | ✓ |  |

### `course`

รายวิชาทั้งหมดในหลักสูตร

**97 แถว**

| คอลัมน์ | ชนิด | บังคับ | ความหมาย |
|---|---|:--:|---|
| `code` | text | ✓ |  |
| `programme_id` | text | ✓ |  → [[#`programme`|`programme`]] |
| `group_id` | text | ✓ |  → [[#`course_group`|`course_group`]] |
| `short_name` | text |  |  |
| `name_th` | text | ✓ |  |
| `name_en` | text |  |  |
| `credit_text` | text | ✓ | รูปเดิม เช่น 3(2-2-5) เก็บไว้แสดงผล |
| `credits` | integer | ✓ | จำนวนหน่วยกิตแยกเป็นตัวเลขไว้คำนวณ |
| `lecture_hours` | integer |  |  |
| `lab_hours` | integer |  |  |
| `self_hours` | integer |  |  |
| `study_year` | integer |  |  |
| `semester` | integer |  |  |
| `pending_semester` | boolean | ✓ | ยังไม่ยืนยันภาคการศึกษา |
| `description_th` | text |  |  |
| `description_en` | text |  |  |

### `course_prereq`

ความสัมพันธ์ก่อน–หลังระหว่างรายวิชา

**70 แถว**

| คอลัมน์ | ชนิด | บังคับ | ความหมาย |
|---|---|:--:|---|
| `course_code` | text | ✓ |  → [[#`course`|`course`]] |
| `prereq_code` | text | ✓ |  → [[#`course`|`course`]] |
| `kind` | prereq_kind | ✓ | hard บังคับก่อน · weak แนะนำก่อน · coreq เรียนคู่ |

### `study_plan`

แผนการเรียน แผน ก ปกติ และแผน ข บูรณาการกับการทำงาน

**2 แถว**

| คอลัมน์ | ชนิด | บังคับ | ความหมาย |
|---|---|:--:|---|
| `id` | text | ✓ |  |
| `name_th` | text | ✓ |  |
| `note` | text |  |  |

### `study_plan_course`

รายวิชาที่แต่ละแผนเรียนในภาคใด

**78 แถว**

> [!important] แผน ก และ ข ใช้รายวิชาต่างกัน เช่น EN-714-12019 กับ EN-714-12020 จึงต้องแยกตารางแทนการเก็บภาคเรียนไว้ใน `course`

| คอลัมน์ | ชนิด | บังคับ | ความหมาย |
|---|---|:--:|---|
| `plan_id` | text | ✓ |  → [[#`study_plan`|`study_plan`]] |
| `course_code` | text | ✓ |  → [[#`course`|`course`]] |
| `semester` | integer | ✓ |  |

---

[[00_Database_Home|← สารบัญฐานข้อมูล]] | [[../05_TQF2_Academic_Drafts/21_Curriculum_Database_Design|แบบฐานข้อมูลและความสัมพันธ์]]
