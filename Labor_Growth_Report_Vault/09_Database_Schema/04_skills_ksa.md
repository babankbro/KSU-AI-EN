# ทักษะ ชุดทักษะ และ KSEC

> ชั้นทักษะจากหลักฐานตลาดแรงงาน (HS/SS/EF) ชั้นที่ประเมินได้ (K/S/A) และการเชื่อมลงรายวิชา
>
> **13 ตาราง · 4330 แถว** — ส่งออกเป็น `04_skills_ksa.xlsx` หนึ่งตารางต่อหนึ่งชีต
>
> สร้างอัตโนมัติจากฐานข้อมูลจริงด้วย `npm run db:docs` · ห้ามแก้ด้วยมือ

### `skill_group`

กลุ่มชุดทักษะ G1–G7

**7 แถว**

| คอลัมน์ | ชนิด | บังคับ | ความหมาย |
|---|---|:--:|---|
| `id` | text | ✓ |  |
| `name_th` | text | ✓ |  |
| `color` | text |  |  |

### `skill_set`

ชุดทักษะ EN-AISK01–09 ที่ใช้ออก Skill Transcript

**9 แถว**

| คอลัมน์ | ชนิด | บังคับ | ความหมาย |
|---|---|:--:|---|
| `id` | text | ✓ |  |
| `group_id` | text | ✓ |  → [[#`skill_group`|`skill_group`]] |
| `name_th` | text | ✓ |  |
| `name_en` | text |  |  |
| `kind` | text |  |  |

### `skill`

ทักษะจากหลักฐานตลาดแรงงาน 36 รายการ — Hard 20 · Soft 10 · ฐานวิศวกรรม 6

**36 แถว**

| คอลัมน์ | ชนิด | บังคับ | ความหมาย |
|---|---|:--:|---|
| `id` | text | ✓ |  |
| `family` | skill_family | ✓ | HS ทักษะเทคนิค · SS ทักษะพฤติกรรม · EF ฐานวิศวกรรม |
| `rank_no` | integer |  |  |
| `name_en` | text | ✓ |  |
| `is_core` | boolean | ✓ | อยู่ในแกนบังคับหรือเป็นส่วนขยาย |
| `scope` | text |  |  |
| `market_evidence` | text |  |  |
| `benchmark` | text |  |  |

### `skill_set_skill`

ทักษะอยู่ในชุดทักษะใดบ้าง (หนึ่งทักษะอยู่ได้หลายชุด)

**58 แถว**

> [!important] ทักษะหนึ่งตัวอยู่ได้หลายชุด จึงเป็นตารางเชื่อม ไม่ใช่คีย์นอกเดี่ยวบน `skill`

| คอลัมน์ | ชนิด | บังคับ | ความหมาย |
|---|---|:--:|---|
| `skill_set_id` | text | ✓ |  → [[#`skill_set`|`skill_set`]] |
| `skill_id` | text | ✓ |  → [[#`skill`|`skill`]] |

### `skill_track`

ทักษะเป็นทักษะหลักหรือสนับสนุนของแขนงใด

**108 แถว**

| คอลัมน์ | ชนิด | บังคับ | ความหมาย |
|---|---|:--:|---|
| `skill_id` | text | ✓ |  → [[#`skill`|`skill`]] |
| `track_id` | text | ✓ |  → [[#`track`|`track`]] |
| `role` | track_role | ✓ | core ทักษะหลัก (●) · support ทักษะสนับสนุน (○) |
| `target_depth` | depth_level |  |  |

### `ksa_item`

หน่วยที่ประเมินได้จริง K1–K26 · S1–S20 · E1–E7 · C1–C8

**54 แถว**

| คอลัมน์ | ชนิด | บังคับ | ความหมาย |
|---|---|:--:|---|
| `id` | text | ✓ |  |
| `dimension` | ksa_dimension | ✓ | K ความรู้ · S ทักษะ · E จริยธรรม · C ลักษณะบุคคล |
| `seq` | integer | ✓ |  |
| `name_th` | text | ✓ |  |
| `scope` | text |  |  |
| `covers` | text |  |  |
| `evidence` | text |  | หลักฐานที่ยอมรับได้ ใช้กับมิติจริยธรรมและลักษณะบุคคล ห้ามให้คะแนนจากความประทับใจ |
| `target_depth` | depth_level |  | B1 จำ · B2 เข้าใจ · B3 ประยุกต์ใช้ · B4 วิเคราะห์ · B5 ประเมินค่า · B6 สร้างสรรค์ |
| `skill_kind` | text |  |  |

### `ksa_can_do`

รายการ “ทำอะไรได้บ้าง” ของทักษะแต่ละข้อ

**98 แถว**

| คอลัมน์ | ชนิด | บังคับ | ความหมาย |
|---|---|:--:|---|
| `ksa_id` | text | ✓ |  → [[#`ksa_item`|`ksa_item`]] |
| `seq` | integer | ✓ |  |
| `statement` | text | ✓ |  |

### `ksa_skill`

การจับคู่ KSEC กับทักษะ HS/SS/EF ที่รองรับ

**113 แถว**

| คอลัมน์ | ชนิด | บังคับ | ความหมาย |
|---|---|:--:|---|
| `ksa_id` | text | ✓ |  → [[#`ksa_item`|`ksa_item`]] |
| `skill_id` | text | ✓ |  → [[#`skill`|`skill`]] |

### `ksa_plo`

KSEC แต่ละข้อรับใช้ PLO ใด

**91 แถว**

| คอลัมน์ | ชนิด | บังคับ | ความหมาย |
|---|---|:--:|---|
| `ksa_id` | text | ✓ |  → [[#`ksa_item`|`ksa_item`]] |
| `plo_id` | integer | ✓ |  → [[#`plo`|`plo`]] |

### `clo_ksa`

CLO อ้างรหัส KSA ใด — ชั้นที่ใช้ให้คะแนนจริง

**963 แถว**

| คอลัมน์ | ชนิด | บังคับ | ความหมาย |
|---|---|:--:|---|
| `clo_id` | bigint | ✓ |  → [[#`clo`|`clo`]] |
| `ksa_id` | text | ✓ |  → [[#`ksa_item`|`ksa_item`]] |
| `source` | provenance | ✓ | stated เอกสารระบุตรง · derived คำนวณ · authored ข้อเสนอ |

### `clo_skill_set`

CLO ป้อนเข้าชุดทักษะใด และชุดใดเป็นเจ้าภาพหลัก

**211 แถว**

| คอลัมน์ | ชนิด | บังคับ | ความหมาย |
|---|---|:--:|---|
| `clo_id` | bigint | ✓ |  → [[#`clo`|`clo`]] |
| `skill_set_id` | text | ✓ |  → [[#`skill_set`|`skill_set`]] |
| `is_primary` | boolean | ✓ |  |

### `course_ksa`

KSA ระดับรายวิชา รวมวิชาชีพเลือกที่อนุมานผ่านชุดทักษะ

**2292 แถว**

> [!important] `source` ต้องเป็น `derived` สำหรับวิชาชีพเลือก 54 รายวิชาที่อนุมานผ่านชุดทักษะ ห้ามอ่านเป็นรหัสที่เอกสารระบุ

| คอลัมน์ | ชนิด | บังคับ | ความหมาย |
|---|---|:--:|---|
| `course_code` | text | ✓ |  → [[#`course`|`course`]] |
| `ksa_id` | text | ✓ |  → [[#`ksa_item`|`ksa_item`]] |
| `source` | provenance | ✓ | stated เอกสารระบุตรง · derived อนุมานผ่านชุดทักษะ |

### `course_skill_set`

ชุดทักษะที่รายวิชารับผิดชอบ

**290 แถว**

| คอลัมน์ | ชนิด | บังคับ | ความหมาย |
|---|---|:--:|---|
| `course_code` | text | ✓ |  → [[#`course`|`course`]] |
| `skill_set_id` | text | ✓ |  → [[#`skill_set`|`skill_set`]] |

---

[[00_Database_Home|← สารบัญฐานข้อมูล]] | [[../05_TQF2_Academic_Drafts/21_Curriculum_Database_Design|แบบฐานข้อมูลและความสัมพันธ์]]
