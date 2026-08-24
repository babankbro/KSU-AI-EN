import { KSEC_BY_ID } from "./ksecData.js";
// ทะเบียนคำอธิบายรหัสย่อทั้งหมดของเว็บ — ใช้โดย CodeTip.jsx เพื่อแสดงป๊อปอัปเมื่อชี้ที่รหัส
// ครอบคลุม: PLO1–7 · YLO1–4 และ Sub-YLO · AISK01–09 · N1–N18 · SH1–SH8 · GA1–GA5
//            HS1–HS20 · SS1–SS10 · EF1–EF6 · B1–B6 · ระดับ I/R/M · รหัสรายวิชา · อาชีพ C01–C26
// รูปแบบผลลัพธ์: { id, kind, accent, title, en, body, rows:[[label,value]], plo:[], sets:[], to }

import {
  PLO_DETAIL, PLO_COLOR, YLO_DETAIL, COURSES, GROUP_NAME,
  CAREERS, CAREER_STATUS, TRACK_NAME
} from "./data.js";
import {
  STAKEHOLDERS, PRIO_INFO, NEEDS, NEED_LEVEL, HARD_SKILLS, SOFT_SKILLS,
  ENGINEERING_FOUNDATIONS, LEVELS, GROUPS, SKILL_SETS, GA
} from "./obeData.js";
import { LEVEL_NAME } from "./cloData.js";

const skillById = id => [...HARD_SKILLS, ...SOFT_SKILLS, ...ENGINEERING_FOUNDATIONS].find(s => s.id === id);

/* รูปแบบรหัสที่รู้จัก — ดึงเฉพาะส่วนที่เป็นรหัสออกจากข้อความของป้าย */
const PATTERN = new RegExp(
  "^(" +
  "PLO[1-7]|" +
  "YLO[1-4]\\.[1-9]|YLO[1-4]|" +
  "AISK0[1-9]|EN-AISK0[1-9]|" +
  "N1[0-8]|N[1-9]|" +
  "SH[1-8]|GA[1-5]|" +
  "HS20|HS1[0-9]|HS[1-9]|SS10|SS[1-9]|EF[1-6]|B[1-6]|" +
  "K2[0-6]|K1[0-9]|K[1-9]|S20|S1[0-9]|S[1-9]|E[1-7]|C[1-8]|" +
  "C[0-1][0-9]|" +
  "[A-Z]{2}-\\d{3}-\\d{5}|" +
  "[IRM]" +
  ")$"
);

export function normalizeCode(text) {
  const t = (text || "").trim().replace(/\s+/g, "");
  const m = t.match(PATTERN);
  return m ? m[1].replace(/^EN-AISK/, "AISK") : null;
}

export function lookup(raw) {
  const id = normalizeCode(raw);
  if (!id) return null;

  /* ── PLO ── */
  if (/^PLO[1-7]$/.test(id)) {
    const n = Number(id.slice(3));
    const p = PLO_DETAIL[n];
    if (!p) return null;
    return {
      id, kind: "PLO", accent: PLO_COLOR[n], to: `/plo/${n}`,
      title: p.title, en: `${p.en} · ABET ${p.so}`, body: p.text,
      rows: [
        ["ด้านหลัก / ด้านรอง", `${p.main} · ${p.side}`],
        ["ระดับความสามารถ", p.level],
        ["ประเภท", p.type],
        ["หลักฐานการประเมิน", p.evidence]
      ]
    };
  }

  /* ── Sub-YLO ── */
  if (/^YLO[1-4]\.[1-9]$/.test(id)) {
    const y = Number(id[3]);
    const sub = (YLO_DETAIL[y]?.sub || []).find(s => s[0] === id);
    if (!sub) return null;
    return {
      id, kind: "Sub-YLO", accent: `var(--y${y})`, to: `/ylo/${y}`,
      title: `ผลลัพธ์ย่อยของชั้นปีที่ ${y}`, en: YLO_DETAIL[y].en,
      body: sub[1], plo: sub[2] || []
    };
  }

  /* ── YLO ── */
  if (/^YLO[1-4]$/.test(id)) {
    const y = Number(id[3]);
    const v = YLO_DETAIL[y];
    if (!v) return null;
    return {
      id, kind: "YLO", accent: `var(--y${y})`, to: `/ylo/${y}`,
      title: v.title, en: v.en, body: v.text,
      rows: [["ระดับพัฒนาการ", v.level], ["PLO ที่เน้น", v.plo], ["หลักฐาน", v.evidence]]
    };
  }

  /* ── ชุดทักษะ AISK ── */
  if (/^AISK0[1-9]$/.test(id)) {
    const s = SKILL_SETS.find(x => x.id === id);
    if (!s) return null;
    const g = GROUPS[s.g];
    return {
      id: `EN-${id}`, kind: "ชุดทักษะ", accent: g ? g.color : "var(--navy)", to: "/obe#set",
      title: s.name, en: s.en,
      body: "ชุดทักษะผูกกับ KSEC เท่านั้น · ทักษะ HS/SS/EF เป็นชั้น alignment ที่อยู่เบื้องหลัง",
      rows: [
        ["ประเภท", `${s.type} Skill`],
        ["KSEC ที่ผูก", (s.ksa || []).join(", ")],
        ["ทักษะที่ Alignment ถึง", (s.skills || []).join(", ")],
        ["ทักษะย่อย", s.sub ? `${s.sub.length} ข้อ` : "—"],
        ["รายวิชาที่ป้อนเข้า", `${(s.courses || []).length} วิชา`],
        ["วิธีวัดผล", s.assess]
      ],
      plo: s.plo || []
    };
  }

  /* ── ความต้องการ N ── */
  if (/^N\d{1,2}$/.test(id)) {
    const n = NEEDS.find(x => x.id === id);
    if (!n) return null;
    const lv = NEED_LEVEL[n.level];
    return {
      id, kind: "ความต้องการผู้มีส่วนได้ส่วนเสีย", accent: lv ? lv.color : "var(--navy)", to: "/obe#needs",
      title: n.text, en: "", body: "",
      rows: [
        ["ที่มา", n.src === "survey" ? "ผลสำรวจผู้มีส่วนได้ส่วนเสีย" : "เชิงแนวโน้มสากล/นโยบายชาติ"],
        ["หลักฐานสนับสนุน", n.evidence],
        ["ระดับการตอบ", lv ? lv.label : "—"]
      ],
      sets: n.sets || [], plo: n.plo || []
    };
  }

  /* ── ผู้มีส่วนได้ส่วนเสีย SH ── */
  if (/^SH[1-8]$/.test(id)) {
    const s = STAKEHOLDERS.find(x => x.id === id);
    if (!s) return null;
    const p = PRIO_INFO[s.prio];
    return {
      id, kind: "ผู้มีส่วนได้ส่วนเสีย", accent: p ? p.color : "var(--navy)", to: "/obe#sh",
      title: s.name, en: "", body: s.expect,
      rows: [
        ["ลำดับความสำคัญ", p ? `${s.prio} · ${p.label} (${p.desc})` : s.prio],
        ["ความต้องการที่เกี่ยวข้อง", (s.needs || []).join(", ")]
      ]
    };
  }

  /* ── ลักษณะบัณฑิต GA ── */
  if (/^GA[1-5]$/.test(id)) {
    const g = GA.find(x => x.id === id);
    if (!g) return null;
    return {
      id, kind: "ลักษณะบัณฑิต", accent: "var(--navy2)", to: "/obe#ga",
      title: g.name, en: "", body: "",
      rows: [
        ["ทักษะที่เกี่ยวข้อง", g.skills],
        ["Washington Accord (TABEE)", g.wa],
        ["ABET SO", g.abet]
      ],
      plo: g.plo || []
    };
  }

  /* ── KSEC รายข้อ (K/S/E/C) ── */
  if (/^[KSEC][1-9]\d?$/.test(id) && KSEC_BY_ID[id]) {
    const r = KSEC_BY_ID[id];
    const KIND = { K: "ความรู้ (Knowledge)", S: "ทักษะ (Skill)", E: "จริยธรรม (Ethics)", C: "ลักษณะบุคคล (Character)" };
    const kind = KIND[id[0]];
    const rows = [];
    if (r.scope) rows.push(["ขอบเขต", r.scope]);
    if (r.covers) rows.push(["ครอบคลุมพฤติกรรม", r.covers]);
    if (r.can?.length) rows.push(["ทำอะไรได้บ้าง", r.can.join(" · ")]);
    if (r.level) rows.push(["ระดับเป้าหมาย", r.level]);
    if (r.skills?.length) rows.push(["ทักษะย่อยที่ผูก", r.skills.join(", ")]);
    if (r.evidence) rows.push(["หลักฐานที่ยอมรับได้", r.evidence]);
    return {
      id, kind, accent: "var(--navy)", to: "/obe#clo",
      title: r.name, en: "", body: "", rows,
      sets: r.aisk || [], plo: r.plo || []
    };
  }

  /* ── ทักษะเป้าหมาย HS/SS ── */
  if (/^(HS|SS)\d{1,2}$/.test(id)) {
    const s = skillById(id);
    if (!s) return null;
    const st = SKILL_SETS.find(x => x.id === s.set);
    const g = st ? GROUPS[st.g] : null;
    const tr = s.track
      ? Object.entries(s.track).map(([t, m]) => `${t} ${m}`).join(" · ")
      : "";
    return {
      id, kind: id.startsWith("HS") ? "ทักษะเชิงเทคนิค (Hard Skill)" : "ทักษะเชิงพฤติกรรม (Soft Skill)",
      accent: g ? g.color : "var(--navy)", to: "/obe#skill",
      title: s.name, en: "", body: s.scope || "",
      rows: [
        ["สถานะ", s.core ? "ทักษะแกนบังคับ" : "ทักษะส่วนขยาย (เลือก/ลึกตาม Track)"],
        ["แขนงที่ใช้", tr],
        ["ระดับเป้าหมาย", s.level],
        ["หลักฐานตลาด", s.market],
        ["เทียบเคียงมาตรฐาน", s.bench],
        ["พฤติกรรมที่คาดหวัง", s.act],
        ["ผูกกับทักษะแกน", s.link],
        ["ชุดทักษะที่ผูก", st ? `${st.id} · ${st.name}` : s.set]
      ],
      sets: [s.set], plo: s.plo || []
    };
  }

  /* ── ฐานทักษะวิศวกรรม EF1–EF6 ── */
  if (/^EF[1-6]$/.test(id)) {
    const s = skillById(id);
    if (!s) return null;
    const tr = Object.entries(s.track || {}).map(([t, m]) => `${t} ${m}`).join(" · ");
    return {
      id, kind: "ฐานทักษะวิศวกรรมประกอบ (Engineering Foundation)",
      accent: "#b8760f", to: "/obe#skill",
      title: s.name, en: "", body: s.scope,
      rows: [
        ["บทบาท", "ฐานประกอบจากข้อเสนอผู้ทรงคุณวุฒิ ไม่เพิ่มจำนวน HS1–HS20"],
        ["แขนงที่ใช้", tr],
        ["ระดับเป้าหมาย", s.level],
        ["ที่มา/เหตุผล", s.market],
        ["ชุดทักษะที่ผูก", (s.sets || []).join(" · ")]
      ],
      sets: s.sets || [], plo: s.plo || []
    };
  }

  /* ── ระดับตามแนวทาง Bloom B1–B6 ── */
  if (/^B[1-6]$/.test(id)) {
    const l = LEVELS.find(x => x.id === id);
    if (!l) return null;
    return {
      id, kind: "ระดับตามแนวทาง Bloom", accent: "var(--navy2)",
      title: l.th, en: l.label,
      body: "ระดับตาม Bloom's Revised Taxonomy — B1 จำ · B2 เข้าใจ · B3 ประยุกต์ใช้ · B4 วิเคราะห์ · B5 ประเมินค่า · B6 สร้างสรรค์ · มิติความรู้ประเมินที่ B1–B2 มิติทักษะประเมินที่ B3–B6"
    };
  }

  /* ── ระดับพัฒนาการ I/R/M ── */
  if (/^[IRM]$/.test(id)) {
    return {
      id, kind: "ระดับพัฒนาการของผลลัพธ์การเรียนรู้",
      accent: { I: "#2f6fb0", R: "#dd8a1e", M: "#2f9e6b" }[id],
      title: LEVEL_NAME[id], en: "",
      body: id === "I" ? "แนะนำและเริ่มพัฒนา โดยหลักอยู่ชั้นปีที่ 1"
        : id === "R" ? "เสริมย้ำและประยุกต์ใช้ โดยหลักอยู่ชั้นปีที่ 2–3"
          : "ประเมินระดับปลายทางแบบบูรณาการ โดยหลักอยู่โครงงานและสหกิจศึกษาปีที่ 3–4"
    };
  }

  /* ── อาชีพเป้าหมายและอาชีพต่อยอด C01–C26 ── */
  if (/^C\d{2}$/.test(id)) {
    const c = CAREERS.find(x => x.id === id);
    if (!c) return null;
    const st = CAREER_STATUS[c.st];
    return {
      id, kind: "อาชีพเป้าหมาย", accent: st ? st.color : "var(--navy)", to: "/careers",
      title: c.th, en: c.en, body: c.why,
      rows: [
        ["สถานะในตลาด", st ? st.label : c.st],
        ["แขนงวิชา", TRACK_NAME[c.track]],
        ["คำค้นตำแหน่งงาน", c.kw]
      ]
    };
  }

  /* ── รหัสรายวิชา ── */
  if (/^[A-Z]{2}-\d{3}-\d{5}$/.test(id)) {
    const c = COURSES.find(x => x.c === id);
    if (!c) return null;
    const d = c.d || "";
    return {
      id, kind: "รายวิชา", accent: "var(--navy)", to: `/courses/${id}`,
      title: c.t, en: c.e,
      body: d.length > 220 ? `${d.slice(0, 220)}…` : d,
      rows: [
        ["หน่วยกิต", c.cr],
        ["กลุ่มวิชา", GROUP_NAME[c.g] + (c.tr ? ` · ${TRACK_NAME[c.tr]}` : "")],
        ["แผนการเรียน", c.sem ? `ชั้นปีที่ ${c.y} · ภาคการศึกษาที่ ${c.sem}` : "วิชาเลือก (ไม่ผูกภาคเรียน)"]
      ],
      plo: c.p || []
    };
  }

  return null;
}
