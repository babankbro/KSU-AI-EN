import { Link } from "react-router-dom";
import { COURSES, SEM_TOTALS, SEM_TITLE, SEM_EXTRA, YEAR_CREDITS, YEAR_COLOR, YLO_DETAIL, TOTAL_CREDITS } from "../data.js";
import { PageHead, Section, PloChip } from "./ui.jsx";
import PlanBoard from "../PlanBoard.jsx";

export default function Plan() {
  return (
    <main>
      <PageHead
        eyebrow="แผนการศึกษา · Study Plan"
        title="แผนการเรียนตลอดหลักสูตร 8 ภาคการศึกษา"
        lead="จัดรายวิชา 130 หน่วยกิตลง 8 ภาคการศึกษา โดยรักษาภาระการเรียนภาคปกติไว้ที่ 16–19 หน่วยกิต และกันภาคเรียนสุดท้ายไว้สำหรับสหกิจศึกษาเต็มเวลา"
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
            <div className="yb total"><b>{TOTAL_CREDITS}</b><span>รวมตลอดหลักสูตร</span><small>ตามโครงสร้าง 3 หมวดวิชา</small></div>
          </div>
        </Section>

        <Section title="ภาพรวมแผนการเรียนทั้งหลักสูตรในภาพเดียว"
          sub="เรียงชั้นปีที่ 1 → 4 · แต่ละปีแยกเป็น 2 ภาคการศึกษาตามลำดับ">
          <PlanBoard />
        </Section>

        {[1, 2, 3, 4].map(y => (
          <Section key={y} title={`ชั้นปีที่ ${y}`} sub={`${YEAR_CREDITS[y]} หน่วยกิต · YLO${y} ${YLO_DETAIL[y].title}`}>
            <div className="semgrid2">
              {[y * 2 - 1, y * 2].map(s => {
                const list = COURSES.filter(c => c.sem === s);
                const extra = SEM_EXTRA[s] || [];
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
          โครงงาน <Link className="lnk" to="/courses/EN-134-104">EN-134-104</Link> รวมทั้ง
          <Link className="lnk" to="/courses/EN-135-401"> EN-135-401 เตรียมความพร้อมสหกิจศึกษา</Link> ก่อนออกปฏิบัติงาน
        </div>
        <p className="hint"><Link to="/graph">ดูลำดับก่อน–หลังของรายวิชาเป็นกราฟ →</Link></p>
      </div>
    </main>
  );
}
