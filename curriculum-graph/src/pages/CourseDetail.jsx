import { useParams, Link, Navigate } from "react-router-dom";
import { COURSES, GROUP_NAME, PLO_DETAIL, SEM_TITLE, TRACK_NAME, YLO_DETAIL } from "../data.js";
import { PageHead, Section, PloChip, CourseRow } from "./ui.jsx";
import { cloOf } from "../cloData.js";

const REL = [
  ["h", "🔒 รายวิชาบังคับก่อน", "ต้องผ่านก่อนลงทะเบียนเรียนวิชานี้"],
  ["w", "💡 รายวิชาแนะนำก่อน", "ไม่บังคับ แต่ช่วยให้เรียนวิชานี้ได้ราบรื่น"],
  ["co", "🔁 รายวิชาเรียนคู่", "ลงทะเบียนพร้อมกันหรือผ่านมาก่อนก็ได้"]
];

export default function CourseDetail() {
  const code = useParams().code;
  const c = COURSES.find(x => x.c === code);
  if (!c) return <Navigate to="/courses" replace />;
  const clo = cloOf(c.c);

  const opens = COURSES.filter(x =>
    (x.h || []).includes(c.c) || (x.w || []).includes(c.c) || (x.co || []).includes(c.c));

  return (
    <main>
      <PageHead
        eyebrow={`${c.c} · ${GROUP_NAME[c.g]}${c.tr ? ` · ${TRACK_NAME[c.tr]}` : ""}`}
        title={c.t}
        lead={c.e}
        crumbs={[{ label: "รายวิชา", to: "/courses" }, { label: c.c }]} />

      <div className="wrap">
        <div className="deflist">
          <div><span>รหัสวิชา</span><b className="mono">{c.c}</b></div>
          <div><span>หน่วยกิต</span><b>{c.cr}</b></div>
          <div><span>กลุ่มวิชา</span><b>{GROUP_NAME[c.g]}</b></div>
          <div>
            <span>ภาคการศึกษาที่แนะนำ</span>
            <b>{c.sem
              ? <Link className="lnk" to={`/ylo/${c.y}`}>ชั้นปีที่ {c.y} ภาค {c.sem} — {SEM_TITLE[c.sem]}</Link>
              : c.pendingSemester ? "Core Track ใหม่ — รอยืนยันภาคการศึกษา"
              : "วิชาเลือกชีพ (เลือกได้ตามแผนของนักศึกษา)"}</b>
          </div>
        </div>

        <Section title="คำอธิบายรายวิชา (ภาษาไทย)">
          <p className="bigtext">{c.d}</p>
        </Section>

        <Section title="Course Description (English)">
          <p className="bigtext en">{c.dEn}</p>
        </Section>

        {clo && (
          <Section title="ผลลัพธ์การเรียนรู้รายวิชา (CLO)" sub={`${clo.clos.length} ผลลัพธ์ · เชื่อม YLO–PLO และหลักฐานประเมิน`}>
            <div className="scroll-x">
              <table className="tbl">
                <thead>
                  <tr><th>CLO</th><th>ผลลัพธ์ที่วัดได้</th><th>YLO</th><th>PLO/ระดับ</th><th>หลักฐานประเมิน</th></tr>
                </thead>
                <tbody>
                  {clo.clos.map(item => (
                    <tr key={item.n}>
                      <td><b>CLO{item.n}</b></td>
                      <td>{item.t}</td>
                      <td>{item.ylo.join(", ")}</td>
                      <td>{item.plo.map(([p, level]) => `PLO${p} (${level})`).join(", ")}</td>
                      <td>{item.evidence || "กำหนดใน มคอ.3/แผนประเมินรายวิชา"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>
        )}

        {c.p && c.p.length > 0 && (
          <Section title="ผลลัพธ์การเรียนรู้ที่รายวิชานี้รับผิดชอบ" sub={`PLO ${c.p.join(", ")}`}>
            <div className="plominis">
              {c.p.map(n => (
                <Link to={`/plo/${n}`} className="plomini" key={n} style={{ "--pc": `var(--plo${n})` }}>
                  <b>PLO{n}</b>
                  <span>{PLO_DETAIL[n].title}</span>
                  <small>ABET {PLO_DETAIL[n].so} · {PLO_DETAIL[n].level}</small>
                </Link>
              ))}
            </div>
          </Section>
        )}

        {REL.some(([k]) => c[k]) && (
          <Section title="เงื่อนไขรายวิชา">
            {REL.map(([k, label, note]) => c[k] && (
              <div className="trackblock" key={k}>
                <h3 className="trk-h">{label}<span>{note}</span></h3>
                <div className="rowlist">{c[k].map(x => <CourseRow key={x} code={x} />)}</div>
              </div>
            ))}
          </Section>
        )}

        {opens.length > 0 && (
          <Section title="รายวิชาที่ต่อยอดจากวิชานี้" sub={`${opens.length} รายวิชา`}>
            <div className="rowlist">{opens.map(x => <CourseRow key={x.c} code={x.c} />)}</div>
          </Section>
        )}

        {c.sem && (
          <div className="note">
            รายวิชานี้อยู่ในชั้นปีที่ {c.y} ซึ่งมุ่งผลลัพธ์ <Link className="lnk" to={`/ylo/${c.y}`}>YLO{c.y} — {YLO_DETAIL[c.y].title}</Link>
          </div>
        )}
        <p className="hint"><Link to="/courses">← กลับไปรายวิชาทั้งหมด</Link></p>
      </div>
    </main>
  );
}
