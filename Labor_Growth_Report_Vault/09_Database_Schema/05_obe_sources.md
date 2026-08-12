# ที่มาของหลักสูตร

> ผู้มีส่วนได้ส่วนเสีย ความต้องการ และคุณลักษณะบัณฑิต — ต้นทางของกระบวนการ OBE
>
> **6 ตาราง · 148 แถว** — ส่งออกเป็น `05_obe_sources.xlsx` หนึ่งตารางต่อหนึ่งชีต
>
> สร้างอัตโนมัติจากฐานข้อมูลจริงด้วย `npm run db:docs` · ห้ามแก้ด้วยมือ

### `stakeholder`

ผู้มีส่วนได้ส่วนเสีย SH1–SH8 พร้อมขนาดกลุ่มตัวอย่าง

**8 แถว**

| คอลัมน์ | ชนิด | บังคับ | ความหมาย |
|---|---|:--:|---|
| `id` | text | ✓ |  |
| `name_th` | text | ✓ |  |
| `sample_size` | integer |  |  |
| `priority` | text |  |  |
| `expectation` | text |  |  |

### `need`

ความต้องการ N1–N18 จากผลสำรวจและแนวโน้ม

**18 แถว**

| คอลัมน์ | ชนิด | บังคับ | ความหมาย |
|---|---|:--:|---|
| `id` | text | ✓ |  |
| `source_kind` | text | ✓ |  |
| `statement` | text | ✓ |  |
| `evidence` | text |  |  |

### `stakeholder_need`

ผู้มีส่วนได้ส่วนเสียกลุ่มใดต้องการอะไร

**62 แถว**

| คอลัมน์ | ชนิด | บังคับ | ความหมาย |
|---|---|:--:|---|
| `stakeholder_id` | text | ✓ |  → [[#`stakeholder`|`stakeholder`]] |
| `need_id` | text | ✓ |  → [[#`need`|`need`]] |

### `need_skill_set`

ความต้องการแต่ละข้อตอบด้วยชุดทักษะใด

**43 แถว**

| คอลัมน์ | ชนิด | บังคับ | ความหมาย |
|---|---|:--:|---|
| `need_id` | text | ✓ |  → [[#`need`|`need`]] |
| `skill_set_id` | text | ✓ |  → [[#`skill_set`|`skill_set`]] |

### `graduate_attribute`

คุณลักษณะบัณฑิต GA1–GA5 เทียบ Washington Accord และ ABET

**5 แถว**

| คอลัมน์ | ชนิด | บังคับ | ความหมาย |
|---|---|:--:|---|
| `id` | text | ✓ |  |
| `name_th` | text | ✓ |  |
| `washington_accord` | text |  |  |
| `abet_so` | text |  |  |

### `ga_plo`

คุณลักษณะบัณฑิตเชื่อมกับ PLO ใด

**12 แถว**

| คอลัมน์ | ชนิด | บังคับ | ความหมาย |
|---|---|:--:|---|
| `ga_id` | text | ✓ |  → [[#`graduate_attribute`|`graduate_attribute`]] |
| `plo_id` | integer | ✓ |  → [[#`plo`|`plo`]] |

---

[[00_Database_Home|← สารบัญฐานข้อมูล]] | [[../05_TQF2_Academic_Drafts/21_Curriculum_Database_Design|แบบฐานข้อมูลและความสัมพันธ์]]
