# หลักสูตรและอาจารย์

> ข้อมูลระดับหลักสูตรและคณาจารย์ผู้รับผิดชอบ กลุ่มนี้ไม่ขึ้นกับกลุ่มอื่นเลย จึงนำเข้าได้ก่อนเสมอ
>
> **4 ตาราง · 51 แถว** — ส่งออกเป็น `01_programme.xlsx` หนึ่งตารางต่อหนึ่งชีต
>
> สร้างอัตโนมัติจากฐานข้อมูลจริงด้วย `npm run db:docs` · ห้ามแก้ด้วยมือ

### `programme`

หลักสูตร — มีแถวเดียว เก็บชื่อไทย/อังกฤษ ชื่อปริญญา และหน่วยกิตรวม

**1 แถว**

| คอลัมน์ | ชนิด | บังคับ | ความหมาย |
|---|---|:--:|---|
| `id` | text | ✓ |  |
| `name_th` | text | ✓ |  |
| `name_en` | text | ✓ |  |
| `degree_th` | text | ✓ |  |
| `degree_abbr_th` | text | ✓ |  |
| `degree_en` | text | ✓ |  |
| `degree_abbr_en` | text | ✓ |  |
| `total_credits` | integer | ✓ |  |
| `years` | integer | ✓ |  |
| `language` | text | ✓ |  |
| `faculty_office` | text |  |  |
| `status` | text |  |  |
| `curriculum_code` | text |  |  |

### `faculty_member`

อาจารย์ผู้รับผิดชอบหลักสูตรและอาจารย์ประจำหลักสูตร

**5 แถว**

| คอลัมน์ | ชนิด | บังคับ | ความหมาย |
|---|---|:--:|---|
| `id` | integer | ✓ |  |
| `programme_id` | text | ✓ |  → [[#`programme`|`programme`]] |
| `order_no` | integer | ✓ |  |
| `academic_rank` | text | ✓ |  |
| `rank_abbr` | text |  |  |
| `full_name` | text | ✓ |  |
| `role` | text |  |  |
| `expertise_field` | text |  |  |
| `is_responsible` | boolean | ✓ |  |
| `qualification_match` | text |  |  |

### `faculty_degree`

คุณวุฒิของอาจารย์แยกตามระดับ เอก/โท/ตรี

**15 แถว**

| คอลัมน์ | ชนิด | บังคับ | ความหมาย |
|---|---|:--:|---|
| `faculty_id` | integer | ✓ |  → [[#`faculty_member`|`faculty_member`]] |
| `level` | text | ✓ |  |
| `abbr` | text | ✓ |  |
| `major` | text | ✓ |  |
| `institution` | text | ✓ |  |
| `year_be` | integer | ✓ |  |

### `reference_doc`

เอกสารอ้างอิงที่ใช้ออกแบบหลักสูตร แยกตามประเภท

**30 แถว**

| คอลัมน์ | ชนิด | บังคับ | ความหมาย |
|---|---|:--:|---|
| `id` | integer | ✓ |  |
| `category` | text | ✓ |  |
| `name` | text | ✓ |  |
| `organisation` | text |  |  |
| `url` | text |  |  |
| `used_for` | text |  |  |
| `reviewed_on` | date |  |  |

---

[[00_Database_Home|← สารบัญฐานข้อมูล]] | [[../05_TQF2_Academic_Drafts/21_Curriculum_Database_Design|แบบฐานข้อมูลและความสัมพันธ์]]
