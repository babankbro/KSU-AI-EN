import { useState } from "react";
import { Link } from "react-router-dom";
import { COURSES, byOrderNo, SEM_TOTALS, SEM_TITLE, SEM_EXTRA, YEAR_CREDITS, YEAR_COLOR, YLO_DETAIL, TOTAL_CREDITS, PLANS } from "../data.js";
import { PageHead, Section, PloChip } from "./ui.jsx";
import PlanBoard from "../PlanBoard.jsx";

export default function Plan() {
  const [plan, setPlan] = useState("A");
  return (
    <main>
      <PageHead
        eyebrow="แผนการศึกษา · Study Plan"
        title="แผนการเรียนตลอดหลักสูตร 8 ภาคการศึกษา"
        lead="แผนการเรียน 125 หน่วยกิต กระจายเป็น 38–38–31–18 หน่วยกิต ภาค 1–4 ที่ 19 หน่วยกิตเท่ากัน โดยย้ายวิชาเลือกเสรีมาไว้ภาค 3 และ 4 ส่วนภาค 7 เป็นภาคโครงงานและวิชาเลือกชีพ 12 หน่วยกิต และภาค 8 สงวนไว้ให้สหกิจศึกษาเต็มเวลา"
        crumbs={[{ label: "แผนการเรียน" }]} />

      <div className="wrap">
        <Section title="สรุปหน่วยกิตตามชั้นปี">
          <div className="yearbar">
            {[1, 2, 3, 4].map(y => (
              <Link to={`/ylo/${y}`} className={`yb y${y}`} key={y} style={{ "--yc": YEAR_COLOR[y].fg }}>
                <b>{YEAR_CREDITS[y]}</b>
                <span>ชั้นปีที่ {y}</span>
                <small>YLO{y} · {YLO_DETAIL[y].title}</small>
              </Link>
            ))}
            <div className="yb total"><b>{TOTAL_CREDITS}</b><span>รวมทั้งหลักสูตร</span><small>8 ภาคการศึกษา</small></div>
          </div>
        </Section>

        <Section title="หลักการจัดลำดับและสมดุลภาระการเรียน" sub="วางพื้นฐานก่อนวิชาบูรณาการ และเก็บภาคสุดท้ายสำหรับสหกิจเต็มเวลา">
          <div className="note">
            รหัสรายวิชาใช้หลักเลขตัวที่สามตรงกับชั้นปีที่เปิดสอน (ปี 1 = 1xx · ปี 2 = 2xx · ปี 3 = 3xx · ปี 4 = 4xx)
            ยกเว้นวิชาชีพเลือกที่คงรหัส EN-135-3xx ทั้งกลุ่ม และกลุ่มประสบการณ์ภาคสนามที่คงรหัส EN-135-4xx ทั้งกลุ่ม ·
            ภาระหน่วยกิตรายภาคคือ 19 · 19 · 19 · 19 · 17 · 14 · 12 · 6 โดยภาค 6 และ 7 ต่ำกว่า 15 หน่วยกิตอย่างมีเจตนา
            เพราะเป็นช่วงโครงงานและการติดต่อสถานประกอบการ และภาค 8 สงวนไว้ให้สหกิจศึกษา 6 หน่วยกิต · GE กระจายจากภาษาอังกฤษ/อัตลักษณ์ในปี 1
            ไปสู่การออกแบบชีวิต จริยธรรม–เศรษฐศาสตร์ ธุรกิจดิจิทัล และภาวะผู้นำ ให้ครบ 24 หน่วยกิตภายในสิ้นปี 2 ·
            EN-131-101 และ EN-131-102 วางในปี 1 เพื่อให้ EN-131-206 การเรียนรู้ของเครื่องในภาค 3 มีคณิตศาสตร์ครบเป็นวิชาก่อน
            แทนการเรียนคู่ขนาน · EN-132-201 วางในภาค 4 เพื่อเป็นฐานของระบบเกษตร ระบบอัตโนมัติ และการผลิตอัจฉริยะในปี 3 ·
            EN-134-301 สัมมนา 1 วางในภาค 4 และ EN-134-302 สัมมนา 2 ในภาค 5 เพื่อให้ผู้เรียนเริ่มฝึกสืบค้นและนำเสนอเชิงวิชาการตั้งแต่ปี 2 ·
            EN-135-401 เตรียมความพร้อมสหกิจศึกษาย้ายมาอยู่ภาค 5 เพื่อให้ผู้เรียนติดต่อและได้รับการตอบรับจากสถานประกอบการ
            ทันก่อนตัดสินใจเลือกแผนการเรียนเมื่อสิ้นภาค 6 และใช้โจทย์เดียวกันกับโครงงานในภาค 7
          </div>
        </Section>

        <Section title="ภาพรวมแผนการเรียนทั้งหลักสูตรในภาพเดียว"
          sub="เรียงชั้นปีที่ 1 → 4 · แต่ละปีแยกเป็น 2 ภาคการศึกษาตามลำดับ · เลือกแผนการเรียนได้ที่ปุ่มด้านล่าง">
          <div className="plantabs">
            {["A", "B"].map(k => (
              <button key={k} className={`plantab${plan === k ? " on" : ""}`} onClick={() => setPlan(k)}>
                <b>{PLANS[k].name}</b><span>{PLANS[k].sub}</span>
              </button>
            ))}
          </div>
          <PlanBoard plan={plan} />
        </Section>

        {[1, 2, 3, 4].map(y => (
          <Section key={y} title={`ชั้นปีที่ ${y}`} sub={`${YEAR_CREDITS[y]} หน่วยกิต · YLO${y} ${YLO_DETAIL[y].title}`}>
            <div className="semgrid2">
              {[y * 2 - 1, y * 2].map(s => {
                const list = COURSES.filter(c => c.sem === s && (!c.plan || c.plan === plan)).sort(byOrderNo);
                const extra = s === 7 ? PLANS[plan].extra7 : (SEM_EXTRA[s] || []);
                return (
                  <div className={`semcard y${y}`} key={s} style={{ "--yc": YEAR_COLOR[y].fg }}>
                    <div className="sem-h">
                      <b>ภาคการศึกษาที่ {s}</b>
                      <span className="sem-cr">{SEM_TOTALS[s]} นก.</span>
                    </div>
                    <div className="sem-sub">{SEM_TITLE[s]}</div>
                    <table className="semtbl">
                      <tbody>
                        {list.map(c => (
                          <tr key={c.c}>
                            <td className="c"><Link className="lnk" to={`/courses/${c.c}`}>{c.c}</Link></td>
                            <td>{c.t}<div className="plorow">{c.p.map(p => <PloChip key={p} n={p} small />)}</div></td>
                            <td className="k">{c.cr.split("(")[0]}</td>
                          </tr>
                        ))}
                        {extra.map((e, i) => (
                          <tr className="ghost" key={i}>
                            <td className="c">— —</td><td>{e.s}</td><td className="k">{e.k}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );
              })}
            </div>
          </Section>
        ))}

        <div className="note">
          <b>ภาคเรียนที่ 8 เป็นสหกิจศึกษาอย่างเดียว</b> (ไม่น้อยกว่า 16 สัปดาห์) — นักศึกษาต้องผ่านวิชาแกนตามแขนงและ
          โครงงานของแผนที่เลือก (<Link className="lnk" to={`/courses/${plan === "A" ? "EN-134-403" : "EN-134-404"}`}>{plan === "A" ? "EN-134-403" : "EN-134-404"}</Link>) รวมทั้ง
          <Link className="lnk" to="/courses/EN-135-401"> EN-135-401 เตรียมความพร้อมสหกิจศึกษา</Link> ก่อนออกปฏิบัติงาน
        </div>
        <p className="hint"><Link to="/graph">ดูลำดับก่อน–หลังของรายวิชาเป็นกราฟ →</Link></p>
      </div>
    </main>
  );
}
