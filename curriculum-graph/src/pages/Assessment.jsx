import { useState } from "react";
import { Link } from "react-router-dom";
import { PageHead, Section, PloChip, IRM } from "./ui.jsx";
import { PLO_TEACHING } from "../teachingData.js";

const KsecChips = ({ list, kind }) => list.length
  ? <span className={`ksachips ${kind}`}>{list.map(r => <span className="ksachip" key={r.id}>{r.id}</span>)}</span>
  : <span className="mut">—</span>;

export default function Assessment() {
  const [open, setOpen] = useState(1);

  return (
    <main>
      <PageHead
        eyebrow="การวัดและประเมินผล · Assessment"
        title="การวัดและประเมินผลรายข้อ PLO"
        lead="วิธีประเมิน หลักฐานที่ยอมรับได้ จุดประเมินขั้นบรรลุผล และผู้ประเมินของแต่ละ PLO พร้อมรหัส KSEC และรายวิชาบังคับที่รับผิดชอบ"
        crumbs={[{ label: "การวัดและประเมินผล" }]} />

      <div className="wrap">
        <Section id="summary" title="ตารางสรุปการประเมินทั้ง 7 PLO">
          <div className="obe-tablewrap">
            <table className="tbl">
              <thead>
                <tr>
                  <th>PLO</th><th>วิธีการประเมิน</th><th>รูปแบบการประเมิน</th>
                  <th>น้ำหนักคะแนน</th><th>ระยะเวลาประเมิน</th><th>ผู้ประเมิน</th><th>เกณฑ์ผ่าน</th>
                </tr>
              </thead>
              <tbody>
                {PLO_TEACHING.map(p => (
                  <tr key={p.plo}>
                    <td><PloChip n={p.plo} /><br /><small className="mut">{p.name}</small></td>
                    <td className="small">{p.assess.method}</td>
                    <td className="small">{p.assess.form}</td>
                    <td className="small">{p.assess.weight}</td>
                    <td className="small">{p.assess.mastery}</td>
                    <td className="small">{p.assess.assessor}</td>
                    <td className="small">{p.assess.pass}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="obe-note">
            ระยะเวลาประเมินคือภาคการศึกษาที่ใช้ตัดสินว่าผู้เรียนถึงระดับ Mastery — ทุก PLO ไปจบที่โครงงานและสหกิจศึกษา ·
            น้ำหนักคะแนนเป็นสัดส่วนของหลักฐานแต่ละกลุ่มที่ใช้ตัดสิน PLO นั้น รวมร้อยละ 100 ต่อหนึ่ง PLO ไม่ใช่สัดส่วนคะแนนในรายวิชา
          </p>
          <h3 className="skill-h">หลักฐานการประเมินที่ยอมรับได้</h3>
          <div className="obe-tablewrap">
            <table className="tbl">
              <thead><tr><th>PLO</th><th>หลักฐานการประเมินที่ยอมรับได้</th></tr></thead>
              <tbody>
                {PLO_TEACHING.map(p => (
                  <tr key={p.plo}>
                    <td><PloChip n={p.plo} /></td>
                    <td className="small">{p.assess.evidence}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section id="perplo" title="รายละเอียดรายข้อ PLO"
          sub="กดที่หัวข้อเพื่อขยาย — แสดงการประเมิน รหัส KSEC และรายวิชาบังคับที่ป้อนเข้า">
          <div className="asm-list">
            {PLO_TEACHING.map(p => {
              const on = open === p.plo;
              return (
                <article className={"asm-item" + (on ? " open" : "")} key={p.plo}>
                  <button className="asm-head" aria-expanded={on}
                    onClick={() => setOpen(on ? null : p.plo)}>
                    <PloChip n={p.plo} />
                    <b>{p.name}</b>
                    <span className="asm-meta">
                      <i>ปลายทาง</i> <IRM v={p.top} />
                      <i>{p.courses} วิชาบังคับ · {p.clos} CLO</i>
                    </span>
                    <span className="asm-caret" aria-hidden="true">{on ? "▴" : "▾"}</span>
                  </button>

                  {on && (
                    <div className="asm-body">
                      <div className="asm-grid">
                        <div><h4>วิธีการประเมินหลัก</h4><p>{p.assess.method}</p></div>
                        <div><h4>หลักฐานการประเมิน</h4><p>{p.assess.evidence}</p></div>
                        <div><h4>จุดประเมินขั้นบรรลุผล</h4><p>{p.assess.mastery}</p></div>
                        <div><h4>ผู้ประเมิน</h4><p>{p.assess.assessor}</p></div>
                      </div>

                      <h4 className="asm-h">กลยุทธ์การสอนที่รับผิดชอบ</h4>
                      <div className="asm-strats">
                        {p.strategies.map(s => (
                          <span className="asm-strat" key={s.name}>
                            {s.name.replace(/^\d+\.\s*/, "").replace(/·?\s*\([^)]+\)\s*$/, "").trim()}
                            {s.level && <i>{s.level}</i>}
                          </span>
                        ))}
                      </div>

                      <h4 className="asm-h">รหัส KSEC ที่ PLO นี้แบกรับ</h4>
                      <table className="tbl asm-ksa">
                        <tbody>
                          <tr><td className="asm-dim">🧠 Knowledge</td><td><KsecChips list={p.K} kind="k" /></td></tr>
                          <tr><td className="asm-dim">🛠️ Skill</td><td><KsecChips list={p.S} kind="s" /></td></tr>
                          <tr><td className="asm-dim">⚖️ Ethics</td><td><KsecChips list={p.E} kind="a" /></td></tr>
                          <tr><td className="asm-dim">❤️ Character</td><td><KsecChips list={p.C} kind="c" /></td></tr>
                        </tbody>
                      </table>

                      {[...p.E, ...p.C].length > 0 && (
                        <>
                          <h4 className="asm-h">หลักฐานที่ยอมรับได้ของจริยธรรมและลักษณะบุคคล</h4>
                          <ul className="asm-evid">
                            {[...p.E, ...p.C].map(a => (
                              <li key={a.id}><span className="ksachip">{a.id}</span> {a.evidence}</li>
                            ))}
                          </ul>
                        </>
                      )}

                      <h4 className="asm-h">
                        รายวิชาบังคับที่ป้อนเข้า
                        {p.electiveCourses > 0 &&
                          <small className="mut"> · วิชาชีพเลือกเสริมอีก {p.electiveCourses} รายวิชา (ไม่นับในการตัดสิน)</small>}
                      </h4>
                      <div className="clo-chips">
                        {p.rows.map(r => (
                          <Link key={r.c} to={`/courses/${r.c}`} className={`clo-cchip lv-${r.lv}`}
                            title={`${r.c} · CLO${r.clos.join(", CLO")} · ระดับ ${r.lv}`}>
                            {r.c}<i>{r.clos.join(",")}</i>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </Section>
      </div>
    </main>
  );
}
