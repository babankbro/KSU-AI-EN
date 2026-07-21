import { useEffect } from "react";
import { useParams, useLocation, Link, Navigate } from "react-router-dom";
import { STRUCTURE, SUBGROUPS, subgroupsOf, TOTAL_CREDITS } from "../data.js";
import { PageHead, Section, PloTag, CourseRow } from "./ui.jsx";

export default function StructureGroup() {
  const id = useParams().id;
  const { hash } = useLocation();
  const g = STRUCTURE.find(s => s.id === id);

  // เลื่อนไปยังกลุ่มย่อยที่ระบุใน hash หลังเรนเดอร์เสร็จ
  // อ่าน hash จาก window โดยตรงเพื่อไม่ให้พลาดกรณี location ของ router ยังไม่อัปเดต
  useEffect(() => {
    const key = (hash || window.location.hash || "").slice(1);
    if (!key) return;
    const NAV = 60;
    const jump = () => {
      const el = document.getElementById(key);
      if (!el) return false;
      window.scrollTo(0, Math.max(0, el.getBoundingClientRect().top + window.scrollY - NAV));
      return true;
    };
    // ลองทันทีหลัง paint แล้วลองซ้ำอีกครั้งเผื่อความสูงยังเปลี่ยน (ฟอนต์/รูปโหลดเสร็จทีหลัง)
    const r = requestAnimationFrame(() => { jump(); });
    const t = setTimeout(jump, 160);
    return () => { cancelAnimationFrame(r); clearTimeout(t); };
  }, [hash, id]);

  if (!g) return <Navigate to="/structure" replace />;
  const subs = subgroupsOf(id);
  const spec = SUBGROUPS[id] || {};
  const nCourses = subs.reduce((a, x) => a + x.n, 0);
  const i = STRUCTURE.findIndex(s => s.id === id);
  const prev = i > 0 ? STRUCTURE[i - 1] : null, next = i < STRUCTURE.length - 1 ? STRUCTURE[i + 1] : null;

  return (
    <main>
      <PageHead
        eyebrow={`กลุ่มวิชา ${g.no} · ${g.code}`}
        title={g.name}
        lead={g.note}
        crumbs={[{ label: "โครงสร้างหลักสูตร", to: "/structure" }, { label: g.name }]} />

      <div className="wrap">
        <div className="deflist">
          <div><span>รหัสวิชาในกลุ่ม</span><b className="mono">{g.code}</b></div>
          <div><span>หน่วยกิตที่ต้องเรียน</span><b>{g.credits} หน่วยกิต</b></div>
          <div><span>จำนวนรายวิชา</span>
            <b>{id === "elec" ? `เลือก ${g.n} วิชา จาก pool ${nCourses} วิชา`
              : id === "free" ? `${g.n} วิชา` : `${nCourses} วิชา`}</b></div>
          <div><span>สัดส่วนของหลักสูตร</span><b>{Math.round(g.credits / TOTAL_CREDITS * 100)}% ของ {TOTAL_CREDITS} หน่วยกิต</b></div>
        </div>

        <Section title="กลุ่มย่อยในกลุ่มวิชานี้" sub={spec.note}>
          <table className="tbl">
            <thead><tr><th>กลุ่มย่อย</th><th className="c">จำนวนวิชา</th><th className="r">หน่วยกิต</th></tr></thead>
            <tbody>
              {subs.map(sg => (
                <tr key={sg.key}>
                  <td><a className="lnk" href={`#${sg.key}`}>{sg.name}</a>{sg.sub && <div className="mut sm">{sg.sub}</div>}</td>
                  <td className="c">{sg.n}</td>
                  <td className="r"><b>{sg.credits}</b>{sg.pool && <span className="mut"> (pool)</span>}</td>
                </tr>
              ))}
              <tr className="total">
                <td>รวม</td>
                <td className="c">{id === "elec" ? `เลือก ${g.n} จาก ${nCourses}` : nCourses}</td>
                <td className="r">{g.credits}</td>
              </tr>
            </tbody>
          </table>
        </Section>

        {subs.map(sg => (
          <Section key={sg.key} id={sg.key} title={sg.name}
            sub={`${sg.n} วิชา · ${sg.credits} หน่วยกิต${sg.pool ? " ใน pool" : ""}${sg.sub ? ` · ${sg.sub}` : ""}`}>
            {sg.courses.length ? (
              <div className="rowlist">
                {sg.courses.map(c => (
                  <CourseRow key={c.c} code={c.c}
                    extra={<>{c.sem ? <span className="semtag">ภาค {c.sem}</span> : null}
                      {c.p.map(p => <PloTag key={p} n={p} small />)}</>} />
                ))}
              </div>
            ) : (
              <div className="note">
                หมวดวิชาเลือกเสรีไม่ระบุรายวิชาไว้ในหลักสูตร นักศึกษาเลือกจากรายวิชาที่มหาวิทยาลัยเปิดสอน
                รวม <b>{sg.credits} หน่วยกิต</b> โดยไม่ซ้ำกับรายวิชาในหมวดวิชาเฉพาะ
              </div>
            )}
          </Section>
        ))}

        {id === "elec" && (
          <div className="note">
            นักศึกษาเลือกเรียน <b>5 วิชา 15 หน่วยกิต</b> จาก pool ข้างต้น โดยเสนอให้เรียน 2 วิชาในปี 3 ภาค 1 ·
            2 วิชาในปี 3 ภาค 2 · 1 วิชาในปี 4 ภาค 1 — ดูชุดวิชาที่แนะนำของแต่ละแขนงได้ที่ <Link className="lnk" to="/careers">หน้าเส้นทางอาชีพ</Link>
          </div>
        )}

        <div className="pagerow">
          {prev ? <Link className="btn" to={`/structure/${prev.id}`}>← {prev.no} {prev.name}</Link> : <span />}
          {next ? <Link className="btn" to={`/structure/${next.id}`}>{next.no} {next.name} →</Link> : <span />}
        </div>
        <p className="hint"><Link to="/structure">← กลับไปโครงสร้างหลักสูตร</Link></p>
      </div>
    </main>
  );
}
