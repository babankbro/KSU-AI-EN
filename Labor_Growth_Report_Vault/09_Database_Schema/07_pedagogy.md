# การสอนและการประเมิน

> กลยุทธ์การสอน วิธีประเมินราย PLO และกลยุทธ์รายข้อ KSA พร้อมรายวิชาแกน
>
> **5 ตาราง · 186 แถว** — ส่งออกเป็น `07_pedagogy.xlsx` หนึ่งตารางต่อหนึ่งชีต
>
> สร้างอัตโนมัติจากฐานข้อมูลจริงด้วย `npm run db:docs` · ห้ามแก้ด้วยมือ

### `teaching_strategy`

กลยุทธ์การจัดการเรียนการสอน 5 รูปแบบ

**5 แถว**

| คอลัมน์ | ชนิด | บังคับ | ความหมาย |
|---|---|:--:|---|
| `id` | integer | ✓ |  |
| `name_th` | text | ✓ |  |
| `name_en` | text |  |  |
| `how` | text |  |  |
| `tools` | text |  |  |

### `strategy_plo`

กลยุทธ์แต่ละรูปแบบพา PLO ไปถึงระดับใด

**15 แถว**

| คอลัมน์ | ชนิด | บังคับ | ความหมาย |
|---|---|:--:|---|
| `strategy_id` | integer | ✓ |  → [[#`teaching_strategy`|`teaching_strategy`]] |
| `plo_id` | integer | ✓ |  → [[#`plo`|`plo`]] |
| `level_from` | irm_level |  |  |
| `level_to` | irm_level |  |  |

### `plo_assessment`

วิธีประเมิน หลักฐาน จุดประเมิน และผู้ประเมินราย PLO

**7 แถว**

| คอลัมน์ | ชนิด | บังคับ | ความหมาย |
|---|---|:--:|---|
| `plo_id` | integer | ✓ |  → [[#`plo`|`plo`]] |
| `method` | text | ✓ |  |
| `evidence` | text | ✓ |  |
| `mastery_point` | text |  |  |
| `assessor` | text |  |  |

### `ksa_pedagogy`

กลยุทธ์การสอนและวิธีประเมินรายข้อ KSA

**54 แถว**

> [!important] `source` เป็น `authored` ทุกแถว — เป็นข้อเสนอที่ยังไม่ผ่านการรับรองจากคณะกรรมการหลักสูตร

| คอลัมน์ | ชนิด | บังคับ | ความหมาย |
|---|---|:--:|---|
| `ksa_id` | text | ✓ |  → [[#`ksa_item`|`ksa_item`]] |
| `teaching_strategy` | text | ✓ |  |
| `how` | text | ✓ |  |
| `assessment_method` | text | ✓ |  |
| `artifact` | text | ✓ |  |
| `is_tailored` | boolean | ✓ | true = ออกแบบเฉพาะรหัสนี้ · false = ใช้รูปแบบตามมิติ |
| `source` | provenance | ✓ |  |

### `ksa_anchor_course`

รายวิชาแกนของแต่ละ KSA สูงสุด 2 รายวิชา

**105 แถว**

> [!important] `source` เป็น `derived` — คำนวณจาก CLO โดยตัดวิชาโครงงานและสหกิจออก

| คอลัมน์ | ชนิด | บังคับ | ความหมาย |
|---|---|:--:|---|
| `ksa_id` | text | ✓ |  → [[#`ksa_item`|`ksa_item`]] |
| `course_code` | text | ✓ |  → [[#`course`|`course`]] |
| `rank_no` | integer | ✓ |  |
| `source` | provenance | ✓ |  |

---

[[00_Database_Home|← สารบัญฐานข้อมูล]] | [[../05_TQF2_Academic_Drafts/21_Curriculum_Database_Design|แบบฐานข้อมูลและความสัมพันธ์]]
