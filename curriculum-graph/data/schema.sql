-- ─────────────────────────────────────────────────────────────────────────────
-- ฐานข้อมูลหลักสูตรวิศวกรรมปัญญาประดิษฐ์และระบบอัจฉริยะ (พ.ศ. 2570)
-- PostgreSQL 14+
--
-- หลักการออกแบบ
--   1. รหัสในเอกสาร (PLO1, K1, E1, C1, HS1, AISK01, EN-714-12002) เป็น natural key ที่นิ่งและมีความหมาย
--      จึงใช้เป็น primary key ตรง ๆ ไม่สร้าง surrogate id ให้ต้องแปลกลับไปมา
--   2. ทุกตารางเชื่อมที่เป็นข้อเสนอหรืออนุมานมา ต้องมีคอลัมน์ provenance เสมอ
--      เพราะวอลต์มีทั้งข้อมูลที่เอกสารระบุตรงและข้อมูลที่คำนวณ/ออกแบบขึ้น
--   3. ระดับพัฒนาการ (I/R/M) และระดับตามแนวทาง Bloom (B1–B6) เก็บเป็น enum ไม่ใช่ text อิสระ
-- ─────────────────────────────────────────────────────────────────────────────

CREATE TYPE irm_level        AS ENUM ('I', 'R', 'M');
CREATE TYPE depth_level      AS ENUM ('B1', 'B2', 'B3', 'B4', 'B5', 'B6');  -- Bloom's Revised Taxonomy
CREATE TYPE ksa_dimension    AS ENUM ('K', 'S', 'E', 'C');   -- ความรู้ · ทักษะ · จริยธรรม · ลักษณะบุคคล (กมอ. 2565)
CREATE TYPE skill_family     AS ENUM ('HS', 'SS', 'EF');
CREATE TYPE plo_role         AS ENUM ('host', 'support');       -- เจ้าภาพหลัก / สนับสนุน
CREATE TYPE track_role       AS ENUM ('core', 'support');       -- ● ทักษะหลัก / ○ ทักษะสนับสนุน
CREATE TYPE prereq_kind      AS ENUM ('hard', 'weak', 'coreq'); -- บังคับก่อน / แนะนำก่อน / เรียนคู่
CREATE TYPE provenance       AS ENUM ('stated', 'derived', 'authored');
COMMENT ON TYPE provenance IS
  'stated = เอกสารระบุตรง · derived = คำนวณจากข้อมูลอื่น · authored = ข้อเสนอที่ยังไม่ผ่านการรับรอง';

-- ═══════════════════════ 1. หลักสูตรและผู้รับผิดชอบ ═══════════════════════

CREATE TABLE programme (
  id                  text PRIMARY KEY,
  name_th             text NOT NULL,
  name_en             text NOT NULL,
  degree_th           text NOT NULL,
  degree_abbr_th      text NOT NULL,
  degree_en           text NOT NULL,
  degree_abbr_en      text NOT NULL,
  total_credits       int  NOT NULL CHECK (total_credits > 0),
  years               int  NOT NULL DEFAULT 4,
  language            text NOT NULL DEFAULT 'ภาษาไทย',
  faculty_office      text,                    -- คณะที่สังกัด
  status              text,                    -- เช่น หลักสูตรใหม่ พ.ศ. 2570
  curriculum_code     text                     -- ยังว่างในเล่ม ต้องกรอกก่อนเสนอสภา
);

CREATE TABLE faculty_member (
  id                  serial PRIMARY KEY,
  programme_id        text NOT NULL REFERENCES programme,
  order_no            int  NOT NULL,
  academic_rank       text NOT NULL,
  rank_abbr           text,
  full_name           text NOT NULL,
  role                text,                    -- ประธานหลักสูตร ฯลฯ
  expertise_field     text,
  is_responsible      boolean NOT NULL DEFAULT true,  -- อาจารย์ผู้รับผิดชอบหลักสูตร
  qualification_match text,                    -- "ตรง" ตามเกณฑ์
  UNIQUE (programme_id, order_no)
);

CREATE TABLE faculty_degree (
  faculty_id          int  NOT NULL REFERENCES faculty_member ON DELETE CASCADE,
  level               text NOT NULL CHECK (level IN ('เอก', 'โท', 'ตรี')),
  abbr                text NOT NULL,           -- ปร.ด. / วศ.ม. / วท.บ.
  major               text NOT NULL,
  institution         text NOT NULL,
  year_be             int  NOT NULL,
  PRIMARY KEY (faculty_id, level)
);

-- ═══════════════════════ 2. โครงสร้างหลักสูตรและรายวิชา ═══════════════════════

CREATE TABLE course_group (
  id                  text PRIMARY KEY,        -- ge, eng, ai, track, elec, proj, field, free
  no                  text NOT NULL,           -- 1, 2.1, 2.2 …
  name_th             text NOT NULL,
  code_prefix         text,
  credits             int  NOT NULL,
  course_count        int,
  is_elective_pool    boolean NOT NULL DEFAULT false,
  pick_count          int,                     -- ถ้าเป็นคลังให้เลือก ต้องเลือกกี่วิชา
  note                text,
  CHECK (NOT is_elective_pool OR pick_count IS NOT NULL)
);
COMMENT ON COLUMN course_group.pick_count IS
  'วิชาชีพเลือกมี 57 รายวิชาแต่เลือก 5 — ทุกการนับ CLO/PLO ต้องแยกคลังออกจากที่เรียนจริง';

CREATE TABLE track (
  id                  text PRIMARY KEY,        -- T1, T2, T3
  name_th             text NOT NULL,
  name_en             text NOT NULL
);

CREATE TABLE course (
  code                text PRIMARY KEY,        -- EN-714-12002
  programme_id        text NOT NULL REFERENCES programme,
  group_id            text NOT NULL REFERENCES course_group,
  short_name          text,
  name_th             text NOT NULL,
  name_en             text,
  credit_text         text NOT NULL,           -- "3(2-2-5)" เก็บรูปเดิมไว้แสดงผล
  credits             int  NOT NULL,           -- แยกตัวเลขไว้คำนวณ
  lecture_hours       int,
  lab_hours           int,
  self_hours          int,
  study_year          int,
  semester            int,
  pending_semester    boolean NOT NULL DEFAULT false,
  description_th      text,
  description_en      text
);

CREATE TABLE course_prereq (
  course_code         text NOT NULL REFERENCES course ON DELETE CASCADE,
  prereq_code         text NOT NULL REFERENCES course ON DELETE CASCADE,
  kind                prereq_kind NOT NULL,
  PRIMARY KEY (course_code, prereq_code),
  CHECK (course_code <> prereq_code)
);

CREATE TABLE study_plan (
  id                  text PRIMARY KEY,        -- A = แผนปกติ, B = บูรณาการกับการทำงาน
  name_th             text NOT NULL,
  note                text
);

CREATE TABLE study_plan_course (
  plan_id             text NOT NULL REFERENCES study_plan,
  course_code         text NOT NULL REFERENCES course,
  semester            int  NOT NULL CHECK (semester BETWEEN 1 AND 8),
  PRIMARY KEY (plan_id, course_code)
);
COMMENT ON TABLE study_plan_course IS
  'แผน ก และ ข ใช้รายวิชาต่างกันบางตัว เช่น EN-714-12019 กับ EN-714-12020 จึงต้องแยกตาราง';

-- ═══════════════════════ 3. ผลลัพธ์การเรียนรู้ ═══════════════════════

CREATE TABLE plo (
  id                  int  PRIMARY KEY CHECK (id BETWEEN 1 AND 7),
  name_th             text NOT NULL,
  title_full          text,
  abet_so             text,                    -- SO(1)–SO(7)
  bloom_domain        text,
  smart_note          text
);

CREATE TABLE ylo (
  id                  int  PRIMARY KEY CHECK (id BETWEEN 1 AND 4),
  title_th            text NOT NULL,
  title_en            text,
  level_note          text,
  statement           text
);

CREATE TABLE sub_ylo (
  id                  text PRIMARY KEY,        -- YLO1.1
  ylo_id              int  NOT NULL REFERENCES ylo,
  statement           text NOT NULL
);

CREATE TABLE clo (
  id                  bigserial PRIMARY KEY,
  course_code         text NOT NULL REFERENCES course ON DELETE CASCADE,
  no                  int  NOT NULL,
  statement           text NOT NULL,
  evidence            text,                    -- หลักฐานการประเมินที่ระบุไว้
  primary_skill_set   text,   -- FK เพิ่มท้ายไฟล์ เพราะ skill_set ประกาศทีหลัง
  UNIQUE (course_code, no)
);

CREATE TABLE clo_plo (
  clo_id              bigint NOT NULL REFERENCES clo ON DELETE CASCADE,
  plo_id              int    NOT NULL REFERENCES plo,
  level               irm_level NOT NULL,
  PRIMARY KEY (clo_id, plo_id)
);

CREATE TABLE clo_sub_ylo (
  clo_id              bigint NOT NULL REFERENCES clo ON DELETE CASCADE,
  sub_ylo_id          text   NOT NULL REFERENCES sub_ylo,
  PRIMARY KEY (clo_id, sub_ylo_id)
);

CREATE TABLE course_plo (
  course_code         text NOT NULL REFERENCES course ON DELETE CASCADE,
  plo_id              int  NOT NULL REFERENCES plo,
  role                plo_role NOT NULL,
  PRIMARY KEY (course_code, plo_id)
);

-- ═══════════════════════ 4. ทักษะ ชุดทักษะ และ KSA ═══════════════════════

CREATE TABLE skill_group (
  id                  text PRIMARY KEY,        -- G1–G7
  name_th             text NOT NULL,
  color               text
);

CREATE TABLE skill_set (
  id                  text PRIMARY KEY,        -- AISK01–AISK09
  group_id            text NOT NULL REFERENCES skill_group,
  name_th             text NOT NULL,
  name_en             text,
  kind                text                     -- Hard / Soft / Hybrid
);

CREATE TABLE skill (
  id                  text PRIMARY KEY,        -- HS1–HS20, SS1–SS10, EF1–EF6
  family              skill_family NOT NULL,
  rank_no             int,
  name_en             text NOT NULL,
  is_core             boolean NOT NULL DEFAULT false,
  scope               text,
  market_evidence     text,
  benchmark           text,
  CHECK (id ~ '^(HS|SS|EF)[0-9]{1,2}$')
);

-- ทักษะหนึ่งตัวอยู่ได้หลายชุดทักษะ จึงต้องเป็นตารางเชื่อม ไม่ใช่คีย์นอกเดี่ยว
CREATE TABLE skill_set_skill (
  skill_set_id        text NOT NULL REFERENCES skill_set ON DELETE CASCADE,
  skill_id            text NOT NULL REFERENCES skill,
  PRIMARY KEY (skill_set_id, skill_id)
);

CREATE TABLE skill_track (
  skill_id            text NOT NULL REFERENCES skill ON DELETE CASCADE,
  track_id            text NOT NULL REFERENCES track,
  role                track_role NOT NULL,
  target_depth        depth_level,
  PRIMARY KEY (skill_id, track_id)
);

CREATE TABLE ksa_item (
  id                  text PRIMARY KEY,        -- K1–K26, S1–S20, A1–A8
  dimension           ksa_dimension NOT NULL,
  seq                 int  NOT NULL,
  name_th             text NOT NULL,
  scope               text,                    -- ขอบเขต (K)
  covers              text,                    -- พฤติกรรมที่ครอบคลุม (A)
  evidence            text,                    -- หลักฐานที่ยอมรับได้ (A)
  target_depth        depth_level,             -- ระดับเป้าหมาย (S)
  skill_kind          text,                    -- Hard / Soft / ฐานวิศวกรรม (S)
  UNIQUE (dimension, seq)
);

CREATE TABLE ksa_can_do (                      -- รายการ "ทำอะไรได้บ้าง" ของมิติ S
  ksa_id              text NOT NULL REFERENCES ksa_item ON DELETE CASCADE,
  seq                 int  NOT NULL,
  statement           text NOT NULL,
  PRIMARY KEY (ksa_id, seq)
);

-- ชั้น alignment: ทักษะจากหลักฐานตลาด -> หน่วยที่ประเมินได้
CREATE TABLE ksa_skill (
  ksa_id              text NOT NULL REFERENCES ksa_item ON DELETE CASCADE,
  skill_id            text NOT NULL REFERENCES skill,
  PRIMARY KEY (ksa_id, skill_id)
);
COMMENT ON TABLE ksa_skill IS
  'ทุก HS/SS/EF ต้องมีอย่างน้อยหนึ่ง K และหนึ่ง S — ตรวจด้วย vw_skill_ksa_gap';

CREATE TABLE ksa_plo (
  ksa_id              text NOT NULL REFERENCES ksa_item ON DELETE CASCADE,
  plo_id              int  NOT NULL REFERENCES plo,
  PRIMARY KEY (ksa_id, plo_id)
);

CREATE TABLE clo_ksa (
  clo_id              bigint NOT NULL REFERENCES clo ON DELETE CASCADE,
  ksa_id              text   NOT NULL REFERENCES ksa_item,
  source              provenance NOT NULL DEFAULT 'stated',
  PRIMARY KEY (clo_id, ksa_id)
);

CREATE TABLE clo_skill_set (
  clo_id              bigint NOT NULL REFERENCES clo ON DELETE CASCADE,
  skill_set_id        text   NOT NULL REFERENCES skill_set,
  is_primary          boolean NOT NULL DEFAULT false,
  PRIMARY KEY (clo_id, skill_set_id)
);

-- วิชาชีพเลือกยังไม่มี CLO จึงผูก KSA ที่ระดับรายวิชาและต้องติดป้ายว่าอนุมานมา
CREATE TABLE course_ksa (
  course_code         text NOT NULL REFERENCES course ON DELETE CASCADE,
  ksa_id              text NOT NULL REFERENCES ksa_item,
  source              provenance NOT NULL,
  PRIMARY KEY (course_code, ksa_id)
);

CREATE TABLE course_skill_set (
  course_code         text NOT NULL REFERENCES course ON DELETE CASCADE,
  skill_set_id        text NOT NULL REFERENCES skill_set,
  PRIMARY KEY (course_code, skill_set_id)
);

-- ═══════════════════════ 5. ที่มาของหลักสูตร (OBE upstream) ═══════════════════════

CREATE TABLE stakeholder (
  id                  text PRIMARY KEY,        -- SH1–SH8
  name_th             text NOT NULL,
  sample_size         int,
  priority            text,                    -- HPHI ฯลฯ
  expectation         text
);

CREATE TABLE need (
  id                  text PRIMARY KEY,        -- N1–N18
  source_kind         text NOT NULL,           -- survey / trend
  statement           text NOT NULL,
  evidence            text
);

CREATE TABLE stakeholder_need (
  stakeholder_id      text NOT NULL REFERENCES stakeholder ON DELETE CASCADE,
  need_id             text NOT NULL REFERENCES need,
  PRIMARY KEY (stakeholder_id, need_id)
);

CREATE TABLE need_skill_set (
  need_id             text NOT NULL REFERENCES need ON DELETE CASCADE,
  skill_set_id        text NOT NULL REFERENCES skill_set,
  PRIMARY KEY (need_id, skill_set_id)
);

CREATE TABLE graduate_attribute (
  id                  text PRIMARY KEY,        -- GA1–GA5
  name_th             text NOT NULL,
  washington_accord   text,
  abet_so             text
);

CREATE TABLE ga_plo (
  ga_id               text NOT NULL REFERENCES graduate_attribute ON DELETE CASCADE,
  plo_id              int  NOT NULL REFERENCES plo,
  PRIMARY KEY (ga_id, plo_id)
);

-- ═══════════════════════ 6. อาชีพและหลักฐานตลาดแรงงาน ═══════════════════════

CREATE TABLE career (
  id                  text PRIMARY KEY,        -- C01–C26
  track_id            text REFERENCES track,
  status              text,                    -- M = Market Core, S = Sector Critical, F = Future
  name_th             text NOT NULL,
  name_en             text,
  rationale           text
);

CREATE TABLE career_course (
  career_id           text NOT NULL REFERENCES career ON DELETE CASCADE,
  course_code         text NOT NULL REFERENCES course,
  PRIMARY KEY (career_id, course_code)
);

CREATE TABLE career_subgroup (
  id                  text PRIMARY KEY,        -- C01-S01
  career_id           text NOT NULL REFERENCES career ON DELETE CASCADE,
  name_th             text
);
COMMENT ON TABLE career_subgroup IS
  'รหัสรูปแบบ C01-S01 — อย่าสับสนกับรหัสทักษะ S1 ตอนทำ migration หรือ regex';

CREATE TABLE job_posting (
  id                  bigserial PRIMARY KEY,
  external_id         text UNIQUE,
  source              text NOT NULL DEFAULT 'JobsDB',
  title               text,
  company             text,
  posted_on           date,
  raw                 jsonb
);

CREATE TABLE job_career_match (
  job_id              bigint NOT NULL REFERENCES job_posting ON DELETE CASCADE,
  career_id           text   NOT NULL REFERENCES career,
  subgroup_id         text   REFERENCES career_subgroup,
  match_role          text,                    -- Primary / Secondary
  confidence          numeric(4,3),
  PRIMARY KEY (job_id, career_id)
);

CREATE TABLE job_skill (
  job_id              bigint NOT NULL REFERENCES job_posting ON DELETE CASCADE,
  skill_label         text   NOT NULL,         -- ป้ายดิบจากประกาศงาน ยังไม่ normalise
  category            text,                    -- Hard / Soft
  PRIMARY KEY (job_id, skill_label)
);

-- ═══════════════════════ 7. การสอนและการประเมิน ═══════════════════════

CREATE TABLE teaching_strategy (
  id                  int  PRIMARY KEY,        -- 1–5
  name_th             text NOT NULL,
  name_en             text,
  how                 text,
  tools               text
);

CREATE TABLE strategy_plo (
  strategy_id         int  NOT NULL REFERENCES teaching_strategy ON DELETE CASCADE,
  plo_id              int  NOT NULL REFERENCES plo,
  level_from          irm_level,
  level_to            irm_level,
  PRIMARY KEY (strategy_id, plo_id)
);

CREATE TABLE plo_assessment (
  plo_id              int  PRIMARY KEY REFERENCES plo,
  method              text NOT NULL,
  evidence            text NOT NULL,
  mastery_point       text,                    -- รายวิชาที่ใช้ตัดสิน Mastery
  assessor            text
);

CREATE TABLE ksa_pedagogy (
  ksa_id              text PRIMARY KEY REFERENCES ksa_item ON DELETE CASCADE,
  teaching_strategy   text NOT NULL,
  how                 text NOT NULL,
  assessment_method   text NOT NULL,
  artifact            text NOT NULL,
  is_tailored         boolean NOT NULL DEFAULT false,
  source              provenance NOT NULL DEFAULT 'authored'
);
COMMENT ON TABLE ksa_pedagogy IS
  'ข้อเสนอที่ผู้จัดทำออกแบบ ยังไม่ผ่านการรับรอง — source ต้องเป็น authored จนกว่าคณะกรรมการจะรับรอง';

CREATE TABLE ksa_anchor_course (
  ksa_id              text NOT NULL REFERENCES ksa_item ON DELETE CASCADE,
  course_code         text NOT NULL REFERENCES course,
  rank_no             int  NOT NULL CHECK (rank_no BETWEEN 1 AND 2),
  source              provenance NOT NULL DEFAULT 'derived',
  PRIMARY KEY (ksa_id, course_code)
);

-- ═══════════════════════ 8. เอกสารอ้างอิง ═══════════════════════

CREATE TABLE reference_doc (
  id                  serial PRIMARY KEY,
  category            text NOT NULL,           -- เกณฑ์รับรอง / มาตรฐาน AI / กรอบสมรรถนะ / ตลาดแรงงาน
  name                text NOT NULL,
  organisation        text,
  url                 text,
  used_for            text,
  reviewed_on         date
);

-- FK ที่ต้องรอจนกว่าตารางปลายทางจะถูกประกาศ
ALTER TABLE clo ADD CONSTRAINT clo_primary_skill_set_fkey
  FOREIGN KEY (primary_skill_set) REFERENCES skill_set;

-- ═══════════════════════ 9. ดัชนีและมุมมองตรวจสอบความสอดคล้อง ═══════════════════════

CREATE INDEX ON clo (course_code);
CREATE INDEX ON clo_plo (plo_id);
CREATE INDEX ON clo_ksa (ksa_id);
CREATE INDEX ON course (group_id);
CREATE INDEX ON course (study_year, semester);
CREATE INDEX ON job_career_match (career_id);
CREATE INDEX ON course_ksa (ksa_id);

-- ทักษะที่ยังไม่มี K หรือ S รองรับ — ต้องว่างเสมอ
CREATE VIEW vw_skill_ksa_gap AS
SELECT s.id AS skill_id, s.family,
       count(*) FILTER (WHERE k.dimension = 'K') AS k_count,
       count(*) FILTER (WHERE k.dimension = 'S') AS s_count,
       count(*) FILTER (WHERE k.dimension = 'E') AS e_count,
       count(*) FILTER (WHERE k.dimension = 'C') AS c_count
FROM skill s
LEFT JOIN ksa_skill ks ON ks.skill_id = s.id
LEFT JOIN ksa_item  k  ON k.id = ks.ksa_id
GROUP BY s.id, s.family
HAVING count(*) FILTER (WHERE k.dimension = 'K') = 0
    OR count(*) FILTER (WHERE k.dimension = 'S') = 0;

-- ชุดทักษะที่ไม่มีมิติทัศนคติเลย — Skill Transcript จะไม่มีอะไรให้ประเมินเชิงพฤติกรรม
CREATE VIEW vw_skill_set_without_behaviour AS
SELECT ss.id, ss.name_th
FROM skill_set ss
WHERE NOT EXISTS (
  SELECT 1 FROM skill_set_skill sss
  JOIN ksa_skill ks ON ks.skill_id = sss.skill_id
  JOIN ksa_item  k  ON k.id = ks.ksa_id AND k.dimension IN ('E', 'C')
  WHERE sss.skill_set_id = ss.id
);

-- ความครอบคลุม PLO โดยแยกวิชาบังคับออกจากคลังวิชาชีพเลือกเสมอ
CREATE VIEW vw_plo_coverage AS
SELECT p.id AS plo_id,
       count(DISTINCT c.code) FILTER (WHERE NOT g.is_elective_pool) AS required_courses,
       count(*)               FILTER (WHERE NOT g.is_elective_pool) AS required_clos,
       count(DISTINCT c.code) FILTER (WHERE g.is_elective_pool)     AS elective_courses,
       max(cp.level)          FILTER (WHERE NOT g.is_elective_pool) AS required_top_level
FROM plo p
LEFT JOIN clo_plo cp   ON cp.plo_id = p.id
LEFT JOIN clo         ON clo.id = cp.clo_id
LEFT JOIN course c     ON c.code = clo.course_code
LEFT JOIN course_group g ON g.id = c.group_id
GROUP BY p.id;
COMMENT ON VIEW vw_plo_coverage IS
  'ต้องอ่าน required_* เท่านั้นในการตัดสินการบรรลุ — คลังวิชาเลือก 57 วิชาแต่ผู้เรียนเลือก 5';

-- KSA ที่ไม่มีรายวิชาบังคับใดอ้างถึง — ควรว่าง
CREATE VIEW vw_ksa_orphan AS
SELECT k.id, k.dimension, k.name_th
FROM ksa_item k
WHERE NOT EXISTS (
  SELECT 1 FROM clo_ksa ck
  JOIN clo ON clo.id = ck.clo_id
  JOIN course c ON c.code = clo.course_code
  JOIN course_group g ON g.id = c.group_id
  WHERE ck.ksa_id = k.id AND NOT g.is_elective_pool
);
