import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { PageHead, Section, PloChip } from "./ui.jsx";
import { KSEC_PEDAGOGY } from "../ksecPedagogyData.js";

const DIMS = [
  { id: "K", label: "🧠 Knowledge", cls: "k" },
  { id: "S", label: "🛠️ Skill", cls: "s" },
  { id: "E", label: "⚖️ Ethics", cls: "a" },
  { id: "C", label: "❤️ Character", cls: "c" }
];

export default function KsecPedagogy() {
  const [dim, setDim] = useState("K");
  const [q, setQ] = useState("");

  const rows = useMemo(() => {
    const t = q.trim().toLowerCase();
    return KSEC_PEDAGOGY.filter(r => r.dim === dim)
      .filter(r => !t || r.id.toLowerCase().includes(t) || r.name.toLowerCase().includes(t)
        || r.anchors.some(a => a.c.toLowerCase().includes(t) || a.t.toLowerCase().includes(t)));
  }, [dim, q]);

  const anchorTop = useMemo(() => {
    const m = {};
    KSEC_PEDAGOGY.forEach(r => r.anchors.forEach(a => {
      (m[a.c] = m[a.c] || { c: a.c, t: a.t, ids: [] }).ids.push(r.id);
    }));
    return Object.values(m).sort((a, b) => b.ids.length - a.ids.length).slice(0, 8);
  }, []);

  const tailored = KSEC_PEDAGOGY.filter(r => r.tailored).length;

  return (
    <main>
      <PageHead
        eyebrow="กลยุทธ์การสอนรายข้อ KSEC · KSEC Pedagogy"
        title="กลยุทธ์การสอนและวิธีประเมินรายข้อ KSEC"
        lead="กำหนดวิธีสอน วิธีประเมิน หลักฐาน และรายวิชาแกนให้ครบทั้ง 61 รหัส (K26 · S20 · E7 · C8) เพื่อให้ผู้รับผิดชอบรายวิชานำไปเขียน มคอ.3 ได้ทันที"
        crumbs={[{ label: "กลยุทธ์การสอนรายข้อ KSEC" }]} />

      <div className="wrap">
        <div className="note kp-warn">
          <b>แยกให้ชัดว่าส่วนใดมาจากข้อมูล ส่วนใดเป็นข้อเสนอ</b> — คอลัมน์ <b>รายวิชาแกน</b> คำนวณจาก CLO
          ที่อ้างรหัสนั้นจริง โดยตัดวิชาโครงงานและสหกิจออกเพราะอ้างรหัสเกือบทุกตัว ส่วน <b>กลยุทธ์การสอนและวิธีประเมิน</b>
          เป็นข้อเสนอที่ผู้จัดทำออกแบบขึ้น <b>ยังไม่ผ่านการรับรองจากคณะกรรมการหลักสูตร</b> — ปรับเฉพาะราย {tailored} รหัส
          ที่เหลือใช้รูปแบบตามมิติ
        </div>

        <Section id="table" title="ตารางกลยุทธ์และการประเมิน">
          <div className="kp-bar">
            {DIMS.map(d => {
              const n = KSEC_PEDAGOGY.filter(r => r.dim === d.id).length;
              return (
                <button key={d.id} className={`kp-tab ${d.cls}${dim === d.id ? " on" : ""}`}
                  onClick={() => setDim(d.id)}>{d.label} <b>{n}</b></button>
              );
            })}
            <input className="kp-search" type="search" value={q} placeholder="ค้นหารหัส หัวข้อ หรือรายวิชา…"
              onChange={e => setQ(e.target.value)} />
          </div>

          <div className="obe-tablewrap">
            <table className="tbl kp-table">
              <thead>
                <tr>
                  <th>รหัส</th><th>หัวข้อ</th><th>กลยุทธ์การสอน</th>
                  <th>วิธีประเมิน</th><th>หลักฐาน</th><th>รายวิชาแกน</th><th className="c">PLO</th>
                </tr>
              </thead>
              <tbody>
                {rows.map(r => (
                  <tr key={r.id}>
                    <td><span className={`ksachip ${r.dim === "K" ? "" : ""}`}>{r.id}</span></td>
                    <td><b>{r.name}</b></td>
                    <td className="small">
                      <b className="kp-teach">{r.teach}</b>
                      {r.tailored && <span className="kp-flag" title="ออกแบบเฉพาะรหัสนี้">เฉพาะราย</span>}
                      <div className="kp-how">{r.how}</div>
                    </td>
                    <td className="small">{r.assess}</td>
                    <td className="small kp-artifact">{r.artifact}</td>
                    <td className="small">
                      {r.anchors.map(a => (
                        <Link key={a.c} to={`/courses/${a.c}`} className="kp-anchor" title={a.t}>
                          <b>{a.c}</b><span>{a.t}</span>
                        </Link>
                      ))}
                      {!r.anchors.length && <span className="mut">—</span>}
                    </td>
                    <td className="c">{r.plo.map(p => <PloChip key={p} n={p} small />)}</td>
                  </tr>
                ))}
                {!rows.length && <tr><td colSpan={7} className="mut">ไม่พบรหัสที่ตรงกับคำค้น</td></tr>}
              </tbody>
            </table>
          </div>
        </Section>

        <Section id="anchors" title="รายวิชาแกนที่ถูกอ้างถึงมากที่สุด"
          sub="จุดที่ควรลงทุนด้านเกณฑ์ประเมินและทรัพยากรก่อน">
          <div className="kp-anchorgrid">
            {anchorTop.map(a => (
              <div className="kp-anchorbox" key={a.c}>
                <div className="kp-anchorhead">
                  <Link to={`/courses/${a.c}`}><b>{a.c}</b></Link>
                  <span className="kp-anchorn">{a.ids.length} รหัส</span>
                </div>
                <div className="kp-anchort">{a.t}</div>
                <div className="kp-anchorids">
                  {a.ids.map(id => <span className="ksachip" key={id}>{id}</span>)}
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </main>
  );
}
