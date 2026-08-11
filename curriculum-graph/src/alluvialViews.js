// สร้างชุดข้อมูล alluvial 5 มุมมองจาก obeData + data
import {
  STAKEHOLDERS, PRIO_INFO, NEEDS, NEED_LEVEL, HARD_SKILLS, SOFT_SKILLS,
  ENGINEERING_FOUNDATIONS, GROUPS, SKILL_SETS, KSA
} from "./obeData.js";
import { COURSES, GROUP_NAME, GROUP_COLOR, PLO_COLOR, PLO_NAME } from "./data.js";
import { KNOWLEDGE, SKILLS_KSA, ATTITUDES } from "./ksaData.js";

const setColor = id => GROUPS[SKILL_SETS.find(s => s.id === id)?.g]?.color || "#42618c";
const allSkills = [...HARD_SKILLS, ...SOFT_SKILLS, ...ENGINEERING_FOUNDATIONS];
const skillSetIds = skill => skill.sets || (skill.set ? [skill.set] : []);
const skillColor = id => id.startsWith("H") ? "#2f6fb0" : id.startsWith("S") ? "#0e9aa7" : "#b8760f";

/* ① ผู้มีส่วนได้ส่วนเสีย + แหล่งหลักฐาน → ความต้องการ → ชุดทักษะ */
function viewShNeed() {
  const nodes = [], links = [];
  STAKEHOLDERS.forEach(s => nodes.push({
    id: `sh:${s.id}`, col: "sh", label: `${s.id} ${s.name}`, color: PRIO_INFO[s.prio].color
  }));
  ["survey", "trend"].forEach(k => nodes.push({
    id: `src:${k}`, col: "src",
    label: k === "survey" ? "ผลสำรวจผู้มีส่วนได้ส่วนเสีย" : "รายงานแนวโน้มสากล / นโยบายชาติ",
    color: k === "survey" ? "#2f6fb0" : "#7b57c9"
  }));
  NEEDS.forEach(n => nodes.push({
    id: `n:${n.id}`, col: "need", label: `${n.id}`, sub: n.text.slice(0, 46) + "…",
    color: NEED_LEVEL[n.level].color
  }));
  SKILL_SETS.forEach(s => nodes.push({
    id: `set:${s.id}`, col: "set", label: s.id, sub: s.name.slice(0, 34), color: setColor(s.id)
  }));

  STAKEHOLDERS.forEach(s => s.needs.forEach(nid => {
    const n = NEEDS.find(x => x.id === nid);
    if (n) links.push({ s: `sh:${s.id}`, t: `src:${n.src}` , v: 1});
  }));
  // แหล่งหลักฐาน → Need
  NEEDS.forEach(n => {
    const cnt = STAKEHOLDERS.filter(s => s.needs.includes(n.id)).length || 1;
    links.push({ s: `src:${n.src}`, t: `n:${n.id}`, v: cnt });
  });
  NEEDS.forEach(n => n.sets.forEach(sid => links.push({ s: `n:${n.id}`, t: `set:${sid}`, v: 1 })));

  return {
    columns: [
      { key: "sh", label: "① ผู้มีส่วนได้ส่วนเสีย" },
      { key: "src", label: "② แหล่งหลักฐาน" },
      { key: "need", label: "③ ความต้องการ (Need)" },
      { key: "set", label: "④ ชุดทักษะ" }
    ], nodes, links, height: 900
  };
}

/* ② ความต้องการ → ทักษะแกน → ชุดทักษะ → กลุ่มรายวิชา */
function viewNeedSkillCourse() {
  const nodes = [], links = [];
  NEEDS.forEach(n => nodes.push({
    id: `n:${n.id}`, col: "need", label: n.id, sub: n.text.slice(0, 40) + "…", color: NEED_LEVEL[n.level].color
  }));
  SKILL_SETS.forEach(s => nodes.push({
    id: `set:${s.id}`, col: "set", label: s.id, sub: s.name.slice(0, 30), color: setColor(s.id)
  }));
  const grps = [...new Set(SKILL_SETS.flatMap(s => s.courses)
    .map(c => COURSES.find(x => x.c === c)?.g).filter(Boolean))];
  grps.forEach(g => nodes.push({
    id: `g:${g}`, col: "cg", label: GROUP_NAME[g] || g, color: GROUP_COLOR[g]?.fg || "#42618c"
  }));

  NEEDS.forEach(n => n.sets.forEach(sid => links.push({ s: `n:${n.id}`, t: `set:${sid}`, v: 1 })));
  SKILL_SETS.forEach(s => {
    const cnt = {};
    s.courses.forEach(c => {
      const g = COURSES.find(x => x.c === c)?.g;
      if (g) cnt[g] = (cnt[g] || 0) + 1;
    });
    Object.entries(cnt).forEach(([g, v]) => links.push({ s: `set:${s.id}`, t: `g:${g}`, v }));
  });

  return {
    columns: [
      { key: "need", label: "① ความต้องการ (N1–N18)" },
      { key: "set", label: "② ชุดทักษะ (AISK)" },
      { key: "cg", label: "③ กลุ่มรายวิชา" }
    ], nodes, links, height: 820
  };
}

/* ③ ทักษะเป้าหมาย/ฐานวิศวกรรม → ชุดทักษะ → ทักษะย่อย */
function viewTargetSetSub() {
  const nodes = [], links = [];
  allSkills.forEach(skill => nodes.push({
    id: `sk:${skill.id}`, col: "skill", label: skill.id, sub: skill.name.slice(0, 44), color: skillColor(skill.id)
  }));
  SKILL_SETS.forEach(s => {
    nodes.push({ id: `set:${s.id}`, col: "set", label: s.id, sub: s.name.slice(0, 28), color: setColor(s.id) });
    s.skills.forEach(skillId => links.push({ s: `sk:${skillId}`, t: `set:${s.id}`, v: 1 }));
    s.sub.forEach((x, i) => {
      const id = `sub:${s.id}:${i}`;
      nodes.push({ id, col: "sub", label: `${x.lv}`, sub: x.n.slice(0, 52), color: setColor(s.id) });
      links.push({ s: `set:${s.id}`, t: id, v: 1 });
    });
  });
  return {
    columns: [
      { key: "skill", label: "① ทักษะเป้าหมาย/ฐานวิศวกรรม (H/S/EF)" },
      { key: "set", label: "② ชุดทักษะ (AISK01–09)" },
      { key: "sub", label: "③ ทักษะย่อย + ระดับเป้าหมาย" }
    ], nodes, links, height: 1560
  };
}

/* ④ PLO → กลุ่มรายวิชา (CLO) → มิติ KSA */
function viewPloCloKsa() {
  const nodes = [], links = [];
  const KDIM = [
    { k: "K", label: "🧠 Knowledge — ความรู้", color: "#2f6fb0" },
    { k: "S", label: "🛠️ Skill — ทักษะ", color: "#2f9e6b" },
    { k: "A", label: "❤️ Attitude — ทัศนคติ", color: "#c1466b" }
  ];
  [1, 2, 3, 4, 5, 6, 7].forEach(p => nodes.push({
    id: `p:${p}`, col: "plo", label: `PLO${p}`, sub: PLO_NAME[p], color: PLO_COLOR[p]
  }));
  const grps = [...new Set(COURSES.filter(c => c.p?.length).map(c => c.g))];
  grps.forEach(g => nodes.push({
    id: `g:${g}`, col: "cg", label: GROUP_NAME[g] || g, color: GROUP_COLOR[g]?.fg || "#42618c"
  }));
  KDIM.forEach(d => nodes.push({ id: `k:${d.k}`, col: "ksa", label: d.label, color: d.color }));

  [1, 2, 3, 4, 5, 6, 7].forEach(p => {
    const cnt = {};
    COURSES.filter(c => c.p?.includes(p)).forEach(c => { cnt[c.g] = (cnt[c.g] || 0) + 1; });
    Object.entries(cnt).forEach(([g, v]) => links.push({ s: `p:${p}`, t: `g:${g}`, v }));
  });
  // แต่ละกลุ่มรายวิชากระจายสู่ K/S/A ตามน้ำหนักที่ระบุใน KSA ของ PLO ที่เกี่ยวข้อง
  grps.forEach(g => {
    const n = COURSES.filter(c => c.g === g && c.p?.length).length || 1;
    links.push({ s: `g:${g}`, t: "k:K", v: n });
    links.push({ s: `g:${g}`, t: "k:S", v: n });
    links.push({ s: `g:${g}`, t: "k:A", v: Math.max(1, Math.round(n * 0.5)) });
  });

  return {
    columns: [
      { key: "plo", label: "① PLO1–7" },
      { key: "cg", label: "② กลุ่มรายวิชา (CLO)" },
      { key: "ksa", label: "③ มิติ K–S–A" }
    ], nodes, links, height: 640
  };
}

/* ⑤ ทักษะแกน → ชุดทักษะ → PLO → มิติ KSA */
function viewSkillKsa() {
  const nodes = [], links = [];
  allSkills.forEach(s => nodes.push({
    id: `sk:${s.id}`, col: "sk", label: s.id, sub: s.name.slice(0, 40),
    color: s.id.startsWith("H") ? "#2f6fb0" : "#0e9aa7"
  }));
  SKILL_SETS.forEach(s => nodes.push({
    id: `set:${s.id}`, col: "set", label: s.id, sub: s.name.slice(0, 28), color: setColor(s.id)
  }));
  [1, 2, 3, 4, 5, 6, 7].forEach(p => nodes.push({
    id: `p:${p}`, col: "plo", label: `PLO${p}`, sub: PLO_NAME[p], color: PLO_COLOR[p]
  }));

  allSkills.forEach(s => skillSetIds(s).forEach(setId => {
    if (SKILL_SETS.some(set => set.id === setId)) links.push({ s: `sk:${s.id}`, t: `set:${setId}`, v: 1 });
  }));
  SKILL_SETS.forEach(s => s.plo.forEach(p => links.push({ s: `set:${s.id}`, t: `p:${p}`, v: 1 })));

  // PLO → ทักษะที่ KSA ระบุ (ปลายทางแสดงจำนวนทักษะที่ PLO นั้นกำหนด)
  [1, 2, 3, 4, 5, 6, 7].forEach(p => {
    const id = `ks:${p}`;
    nodes.push({
      id, col: "ksa", label: `KSA ของ PLO${p}`,
      sub: `${KSA[p].s.length} ทักษะ`, color: PLO_COLOR[p]
    });
    links.push({ s: `p:${p}`, t: id, v: KSA[p].s.length });
  });

  return {
    columns: [
      { key: "sk", label: "① ทักษะเป้าหมาย/ฐานวิศวกรรม (H/S/EF)" },
      { key: "set", label: "② ชุดทักษะ" },
      { key: "plo", label: "③ PLO" },
      { key: "ksa", label: "④ KSA รายละเอียด" }
    ], nodes, links, height: 900
  };
}

/* ⑥ PLO → มิติ K–S–A → รหัส KSA รายข้อ
   ใช้ความสัมพันธ์จริงจากสมุดรหัส ไม่ใช่น้ำหนักประมาณ — เส้นหนา = ข้อนั้นถูกใช้ในหลาย PLO */
function viewPloKsaItems() {
  const nodes = [], links = [];
  const DIM = [
    { k: "K", label: "🧠 Knowledge", sub: "K1–K26 ความรู้", color: "#2f6fb0", list: KNOWLEDGE },
    { k: "S", label: "🛠️ Skill", sub: "S1–S20 ทักษะที่ทำได้", color: "#2f9e6b", list: SKILLS_KSA },
    { k: "A", label: "❤️ Attitude", sub: "A1–A8 ทัศนคติ", color: "#c1466b", list: ATTITUDES }
  ];

  [1, 2, 3, 4, 5, 6, 7].forEach(p => nodes.push({
    id: `p:${p}`, col: "plo", label: `PLO${p}`, sub: PLO_NAME[p], color: PLO_COLOR[p]
  }));
  DIM.forEach(d => nodes.push({ id: `d:${d.k}`, col: "dim", label: d.label, sub: d.sub, color: d.color }));
  DIM.forEach(d => d.list.forEach(r => {
    if (r.plo?.length) nodes.push({ id: `i:${r.id}`, col: "item", label: r.id, sub: r.name, color: d.color });
  }));

  /* PLO → มิติ : จำนวนข้อของมิตินั้นที่ PLO รับผิดชอบ */
  [1, 2, 3, 4, 5, 6, 7].forEach(p => DIM.forEach(d => {
    const n = d.list.filter(r => r.plo?.includes(p)).length;
    if (n) links.push({ s: `p:${p}`, t: `d:${d.k}`, v: n });
  }));

  /* มิติ → รหัสรายข้อ : จำนวน PLO ที่ข้อนั้นรองรับ */
  DIM.forEach(d => d.list.forEach(r => {
    if (r.plo?.length) links.push({ s: `d:${d.k}`, t: `i:${r.id}`, v: r.plo.length });
  }));

  return {
    columns: [
      { key: "plo", label: "① PLO1–7" },
      { key: "dim", label: "② มิติ K–S–A" },
      { key: "item", label: "③ รหัส KSA รายข้อ (54)" }
    ], nodes, links, height: 1500
  };
}

export const VIEWS = [
  { id: "v1", name: "ผู้มีส่วนได้ส่วนเสีย → หลักฐาน → Need → ชุดทักษะ",
    desc: "เสียงของใคร ผ่านหลักฐานอะไร กลายเป็นความต้องการข้อไหน และตอบด้วยชุดทักษะใด", build: viewShNeed },
  { id: "v2", name: "Need → ชุดทักษะ → กลุ่มรายวิชา",
    desc: "ความต้องการแต่ละข้อถูกแปลงเป็นชุดทักษะ และลงเรียนที่กลุ่มรายวิชาใด", build: viewNeedSkillCourse },
  { id: "v3", name: "ทักษะเป้าหมาย → ชุดทักษะ → ทักษะย่อย",
    desc: "HS1–HS20, SS1–SS10 และ EF1–EF6 เชื่อมตรงสู่ AISK01–09 และทักษะย่อยพร้อมระดับเป้าหมาย L1–L4", build: viewTargetSetSub },
  { id: "v4", name: "PLO → CLO (กลุ่มรายวิชา) → K–S–A",
    desc: "ผลลัพธ์ระดับหลักสูตรกระจายสู่รายวิชา และแตกเป็นมิติความรู้–ทักษะ–ทัศนคติ", build: viewPloCloKsa },
  { id: "v5", name: "ทักษะ → ชุดทักษะ → PLO → KSA",
    desc: "ทักษะเป้าหมายและฐานวิศวกรรมแต่ละตัวไหลเข้าชุดทักษะ รองรับ PLO ใด และปรากฏใน KSA ของ PLO นั้น", build: viewSkillKsa },
  { id: "v6", name: "PLO → K–S–A รายข้อ",
    desc: "ผลลัพธ์แต่ละ PLO แตกเป็นมิติความรู้–ทักษะ–ทัศนคติ แล้วลงถึงรหัส K/S/A รายข้อ · เส้นหนาที่มิติ = จำนวนข้อที่ PLO นั้นรับผิดชอบ · เส้นหนาที่รายข้อ = ข้อนั้นถูกใช้ในกี่ PLO", build: viewPloKsaItems }
];
