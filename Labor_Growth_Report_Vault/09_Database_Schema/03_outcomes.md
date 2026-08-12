# ผลลัพธ์การเรียนรู้

> PLO YLO Sub-YLO และ CLO รายวิชา พร้อมการเชื่อมโยงระหว่างกัน
>
> **7 ตาราง · 1353 แถว** — ส่งออกเป็น `03_outcomes.xlsx` หนึ่งตารางต่อหนึ่งชีต
>
> สร้างอัตโนมัติจากฐานข้อมูลจริงด้วย `npm run db:docs` · ห้ามแก้ด้วยมือ

### `plo`

ผลลัพธ์การเรียนรู้ระดับหลักสูตร 7 ข้อ

**7 แถว**

| คอลัมน์ | ชนิด | บังคับ | ความหมาย |
|---|---|:--:|---|
| `id` | integer | ✓ |  |
| `name_th` | text | ✓ |  |
| `title_full` | text |  |  |
| `abet_so` | text |  |  |
| `bloom_domain` | text |  |  |
| `smart_note` | text |  |  |

### `ylo`

ผลลัพธ์การเรียนรู้รายชั้นปี 4 ระดับ

**4 แถว**

| คอลัมน์ | ชนิด | บังคับ | ความหมาย |
|---|---|:--:|---|
| `id` | integer | ✓ |  |
| `title_th` | text | ✓ |  |
| `title_en` | text |  |  |
| `level_note` | text |  |  |
| `statement` | text |  |  |

### `sub_ylo`

ผลลัพธ์ย่อยรายชั้นปี

**16 แถว**

| คอลัมน์ | ชนิด | บังคับ | ความหมาย |
|---|---|:--:|---|
| `id` | text | ✓ |  |
| `ylo_id` | integer | ✓ |  → [[#`ylo`|`ylo`]] |
| `statement` | text | ✓ |  |

### `clo`

ผลลัพธ์การเรียนรู้รายวิชา

**288 แถว**

> [!important] `UNIQUE (course_code, no)` จับได้ว่ามีรหัสวิชา 3 ตัวถูกใช้กับสองรายวิชาที่ต่างกันในข้อมูลต้นทาง

| คอลัมน์ | ชนิด | บังคับ | ความหมาย |
|---|---|:--:|---|
| `id` | bigint | ✓ |  |
| `course_code` | text | ✓ |  → [[#`course`|`course`]] |
| `no` | integer | ✓ |  |
| `statement` | text | ✓ |  |
| `evidence` | text |  |  |
| `primary_skill_set` | text |  |  → [[#`skill_set`|`skill_set`]] |

### `clo_plo`

CLO ป้อนเข้า PLO ใด ที่ระดับพัฒนาการใด

**426 แถว**

| คอลัมน์ | ชนิด | บังคับ | ความหมาย |
|---|---|:--:|---|
| `clo_id` | bigint | ✓ |  → [[#`clo`|`clo`]] |
| `plo_id` | integer | ✓ |  → [[#`plo`|`plo`]] |
| `level` | irm_level | ✓ | I แนะนำ · R เสริมย้ำ · M ประเมินปลายทาง |

### `clo_sub_ylo`

CLO ป้อนเข้า Sub-YLO ใด

**319 แถว**

| คอลัมน์ | ชนิด | บังคับ | ความหมาย |
|---|---|:--:|---|
| `clo_id` | bigint | ✓ |  → [[#`clo`|`clo`]] |
| `sub_ylo_id` | text | ✓ |  → [[#`sub_ylo`|`sub_ylo`]] |

### `course_plo`

รายวิชารับผิดชอบ PLO ใด ในฐานะเจ้าภาพหลักหรือสนับสนุน

**293 แถว**

| คอลัมน์ | ชนิด | บังคับ | ความหมาย |
|---|---|:--:|---|
| `course_code` | text | ✓ |  → [[#`course`|`course`]] |
| `plo_id` | integer | ✓ |  → [[#`plo`|`plo`]] |
| `role` | plo_role | ✓ | host เจ้าภาพหลัก · support สนับสนุน |

---

[[00_Database_Home|← สารบัญฐานข้อมูล]] | [[../05_TQF2_Academic_Drafts/21_Curriculum_Database_Design|แบบฐานข้อมูลและความสัมพันธ์]]
