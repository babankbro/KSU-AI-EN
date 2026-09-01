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
            รหัสรายวิชาใช้ระบบของมหาวิทยาลัยตามประกาศ เรื่อง ระบบการกำหนดรหัสวิชา (30 เมษายน 2569) — EN-714-1⟨หมวด⟩⟨ลำดับ⟩
            โดยหมวดคือ 1 แกน/พื้นฐาน · 2 ชีพบังคับ · 4 วิชาเลือก · 6 ฝึกปฏิบัติในสถานประกอบการ · 7 สหกิจศึกษา
            และเลขลำดับ 3 หลักนับใหม่ในแต่ละหมวดตามลำดับการเรียนก่อน–หลัง · <b>รหัสไม่บอกชั้นปี</b> ให้อ่านชั้นปีจากแผนการเรียนหน้านี้ ·
            ภาระหน่วยกิตรายภาคคือ 19 · 19 · 19 · 19 · 17 · 14 · 12 · 6 โดยภาค 6 และ 7 ต่ำกว่า 15 หน่วยกิตอย่างมีเจตนา
            เพราะเป็นช่วงโครงงานและการติดต่อสถานประกอบการ และภาค 8 สงวนไว้ให้สหกิจศึกษา 6 หน่วยกิต · GE กระจายจากภาษาอังกฤษ/อัตลักษณ์ในปี 1
            ไปสู่การออกแบบชีวิต จริยธรรม–เศรษฐศาสตร์ ธุรกิจดิจิทัล และภาวะผู้นำ ให้ครบ 24 หน่วยกิตภายในสิ้นปี 2 ·
            EN-714-12001 และ EN-714-12002 วางในปี 1 เพื่อให้ EN-714-12003 การเรียนรู้ของเครื่องในภาค 3 มีคณิตศาสตร์ครบเป็นวิชาก่อน
            แทนการเรียนคู่ขนาน · EN-714-12005 ระบบตรวจวัด ขับเคลื่อน และอินเทอร์เน็ตของสรรพสิ่งอัจฉริยะ วางในภาค 3 เพื่อเป็นฐานของระบบฟาร์มอัจฉริยะ
            ระบบอัตโนมัติ และการผลิตอัจฉริยะในปี 3 · EN-714-12017 สัมมนา วางในภาค 5 และ EN-714-12018 การเตรียมความพร้อมโครงงาน ในภาค 6
            เพื่อให้ผู้เรียนฝึกสืบค้นและนำเสนอเชิงวิชาการก่อนกำหนดโจทย์โครงงาน ·
            EN-714-17001 เตรียมความพร้อมสหกิจศึกษาย้ายมาอยู่ภาค 5 เพื่อให้ผู้เรียนติดต่อและได้รับการตอบรับจากสถานประกอบการ
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
          โครงงานของแผนที่เลือก (<Link className="lnk" to={`/courses/${plan === "A" ? "EN-714-12019" : "EN-714-12020"}`}>{plan === "A" ? "EN-714-12019" : "EN-714-12020"}</Link>) รวมทั้ง
          <Link className="lnk" to="/courses/EN-714-17001"> EN-714-17001 เตรียมความพร้อมสหกิจศึกษา</Link> ก่อนออกปฏิบัติงาน
        </div>
        <p className="hint"><Link to="/graph">ดูลำดับก่อน–หลังของรายวิชาเป็นกราฟ →</Link></p>
      </div>
    </main>
  );
}
