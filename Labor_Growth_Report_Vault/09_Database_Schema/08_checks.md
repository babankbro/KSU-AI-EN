# มุมมองตรวจความสอดคล้อง

> มุมมองที่ต้องคืนค่าว่างเสมอ ถ้ามีแถวแปลว่าข้อมูลหลักสูตรยังไม่สอดคล้อง
>
> **4 ตาราง · 0 แถว** — ส่งออกเป็น `08_checks.xlsx` หนึ่งตารางต่อหนึ่งชีต
>
> สร้างอัตโนมัติจากฐานข้อมูลจริงด้วย `npm run db:docs` · ห้ามแก้ด้วยมือ

### `vw_plo_coverage`

ความครอบคลุม PLO แยกวิชาบังคับออกจากคลังวิชาชีพเลือก

**0 แถว**

| คอลัมน์ | ชนิด | บังคับ | ความหมาย |
|---|---|:--:|---|
| `plo_id` | integer |  |  |
| `required_courses` | bigint |  |  |
| `required_clos` | bigint |  |  |
| `elective_courses` | bigint |  |  |
| `required_top_level` | irm_level |  |  |

### `vw_skill_ksa_gap`

ทักษะที่ยังไม่มี K หรือ S รองรับ

**0 แถว**

| คอลัมน์ | ชนิด | บังคับ | ความหมาย |
|---|---|:--:|---|
| `skill_id` | text |  |  |
| `family` | skill_family |  |  |
| `k_count` | bigint |  |  |
| `s_count` | bigint |  |  |
| `a_count` | bigint |  |  |

### `vw_skill_set_without_behaviour`

ชุดทักษะที่ไม่มีมิติจริยธรรมหรือลักษณะบุคคลเลย

**0 แถว**

| คอลัมน์ | ชนิด | บังคับ | ความหมาย |
|---|---|:--:|---|
| `id` | text |  |  |
| `name_th` | text |  |  |

### `vw_ksa_orphan`

KSA ที่ไม่มีรายวิชาบังคับใดอ้างถึง

**0 แถว**

| คอลัมน์ | ชนิด | บังคับ | ความหมาย |
|---|---|:--:|---|
| `id` | text |  |  |
| `dimension` | ksa_dimension |  |  |
| `name_th` | text |  |  |

---

[[00_Database_Home|← สารบัญฐานข้อมูล]] | [[../05_TQF2_Academic_Drafts/21_Curriculum_Database_Design|แบบฐานข้อมูลและความสัมพันธ์]]
