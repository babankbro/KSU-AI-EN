# อาชีพและตลาดแรงงาน

> อาชีพเป้าหมายและหลักฐานประกาศงานจริง กลุ่มนี้แยกออกได้ทั้งก้อนถ้าไม่ต้องการข้อมูลตลาด
>
> **6 ตาราง · 45257 แถว** — ส่งออกเป็น `06_careers.xlsx` หนึ่งตารางต่อหนึ่งชีต
>
> สร้างอัตโนมัติจากฐานข้อมูลจริงด้วย `npm run db:docs` · ห้ามแก้ด้วยมือ

### `career`

อาชีพเป้าหมาย C01–C26

**26 แถว**

| คอลัมน์ | ชนิด | บังคับ | ความหมาย |
|---|---|:--:|---|
| `id` | text | ✓ |  |
| `track_id` | text |  |  → [[#`track`|`track`]] |
| `status` | text |  |  |
| `name_th` | text | ✓ |  |
| `name_en` | text |  |  |
| `rationale` | text |  |  |

### `career_subgroup`

กลุ่มย่อยของอาชีพ

**68 แถว**

> [!important] รหัสรูปแบบ `C01-S01` หน้าตาเหมือนรหัสทักษะ `S1` ระวังตอนเขียน regex

| คอลัมน์ | ชนิด | บังคับ | ความหมาย |
|---|---|:--:|---|
| `id` | text | ✓ |  |
| `career_id` | text | ✓ |  → [[#`career`|`career`]] |
| `name_th` | text |  |  |

### `career_course`

รายวิชาที่นำไปสู่อาชีพนั้น

**148 แถว**

| คอลัมน์ | ชนิด | บังคับ | ความหมาย |
|---|---|:--:|---|
| `career_id` | text | ✓ |  → [[#`career`|`career`]] |
| `course_code` | text | ✓ |  → [[#`course`|`course`]] |

### `job_posting`

ประกาศงานจริงที่เก็บมาเป็นหลักฐานตลาดแรงงาน

**7424 แถว**

| คอลัมน์ | ชนิด | บังคับ | ความหมาย |
|---|---|:--:|---|
| `id` | bigint | ✓ |  |
| `external_id` | text |  |  |
| `source` | text | ✓ |  |
| `title` | text |  |  |
| `company` | text |  |  |
| `posted_on` | date |  |  |
| `raw` | jsonb |  |  |

### `job_career_match`

ผลจำแนกประกาศงานเข้ากลุ่มอาชีพ

**5377 แถว**

| คอลัมน์ | ชนิด | บังคับ | ความหมาย |
|---|---|:--:|---|
| `job_id` | bigint | ✓ |  → [[#`job_posting`|`job_posting`]] |
| `career_id` | text | ✓ |  → [[#`career`|`career`]] |
| `subgroup_id` | text |  |  → [[#`career_subgroup`|`career_subgroup`]] |
| `match_role` | text |  |  |
| `confidence` | numeric(4,3) |  |  |

### `job_skill`

ทักษะที่พบในประกาศงาน (ป้ายดิบ ยังไม่ normalise)

**32214 แถว**

| คอลัมน์ | ชนิด | บังคับ | ความหมาย |
|---|---|:--:|---|
| `job_id` | bigint | ✓ |  → [[#`job_posting`|`job_posting`]] |
| `skill_label` | text | ✓ | ป้ายดิบจากประกาศงาน ยังไม่จับคู่กับรหัสทักษะของหลักสูตร |
| `category` | text |  |  |

---

[[00_Database_Home|← สารบัญฐานข้อมูล]] | [[../05_TQF2_Academic_Drafts/21_Curriculum_Database_Design|แบบฐานข้อมูลและความสัมพันธ์]]
