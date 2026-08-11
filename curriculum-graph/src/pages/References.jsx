import { Link } from "react-router-dom";
import "../obe.css";                       // ใช้สไตล์ .reflist ร่วมกับหน้า OBE
import { PageHead, Section, PloChip } from "./ui.jsx";
import { PLO_DETAIL } from "../data.js";
import {
  REF_KINDS, ABET_SO, ABET_NOTE, STANDARDS, EVIDENCE, JOBSDB,
  NATIONAL, BIB, SOURCE_FILES, REF_UPDATED
} from "../refData.js";

const Ext = ({ url, children }) => (
  <a className="lnk" href={url} target="_blank" rel="noreferrer">{children} ↗</a>
);

export default function References() {
  return (
    <main>
      <PageHead
        eyebrow="เอกสารอ้างอิง · References"
        title="ข้อมูลอ้างอิงของหลักสูตร"
        lead="แหล่งอ้างอิงที่ใช้สังเคราะห์ OBE ตั้งแต่ความต้องการผู้มีส่วนได้ส่วนเสีย ทักษะเป้าหมาย จนถึง PLO และรายวิชา แบ่งเป็นเกณฑ์รับรอง มาตรฐานธรรมาภิบาล AI กรอบสมรรถนะวิชาชีพ และข้อมูลตลาดแรงงานเชิงประจักษ์"
        crumbs={[{ label: "ข้อมูลอ้างอิง" }]} />

      <div className="wrap">
        <div className="note">
          เอกสารที่ศึกษาแบ่งเป็น 4 ประเภทตามบทบาท ไม่เรียกรวมทั้งหมดว่า “มาตรฐาน” · {REF_UPDATED}
        </div>

        <Section title="ประเภทและบทบาทของเอกสารที่ศึกษา">
          <div className="scroll-x">
            <table className="tbl">
              <thead><tr><th>ประเภท</th><th>เอกสารหลัก</th><th>ใช้ในหลักสูตร</th></tr></thead>
              <tbody>
                {REF_KINDS.map(k => (
                  <tr key={k.kind}>
                    <td><b>{k.kind}</b></td>
                    <td>{k.docs}</td>
                    <td className="mut">{k.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section title="ABET Student Outcomes (SO1–SO7) ที่ใช้เป็นฐาน PLO"
          sub="Criteria for Accrediting Engineering Programs · Criterion 3: Student Outcomes">
          <div className="scroll-x">
            <table className="tbl">
              <thead><tr><th>ABET SO</th><th>สาระสำคัญตามเกณฑ์</th><th>การใช้ในหลักสูตร</th><th>PLO</th></tr></thead>
              <tbody>
                {ABET_SO.map(s => (
                  <tr key={s.so}>
                    <td><b>{s.so}</b><div className="mut">{s.en}</div></td>
                    <td>{s.core}</td>
                    <td className="mut">{s.use}</td>
                    <td>
                      <PloChip n={s.plo} />
                      <div className="mut">{PLO_DETAIL[s.plo].title}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="hint">{ABET_NOTE}</p>
        </Section>

        <Section title="มาตรฐานและกรอบที่ศึกษา">
          <div className="scroll-x">
            <table className="tbl">
              <thead><tr><th>ลำดับ</th><th>มาตรฐาน/กรอบ</th><th>ประเด็นที่นำมาใช้</th></tr></thead>
              <tbody>
                {STANDARDS.map(s => (
                  <tr key={s.n}>
                    <td className="c">{s.n}</td>
                    <td><b>{s.name}</b></td>
                    <td className="mut">{s.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section title="รายงานและข้อมูลเชิงประจักษ์" sub="ใช้กำหนด HS1–HS20, SS1–SS10, อาชีพ C01–C26 และน้ำหนักความสำคัญของทักษะ">
          <div className="scroll-x">
            <table className="tbl">
              <thead><tr><th>กลุ่มหลักฐาน</th><th>รายงาน/ชุดข้อมูล</th><th>การนำมาใช้</th></tr></thead>
              <tbody>
                {EVIDENCE.map(e => (
                  <tr key={e.src}>
                    <td>{e.group}</td>
                    <td>
                      <b>{e.src}</b>
                      {e.to && <div><Link className="lnk" to={e.to}>ดูข้อมูลในระบบ →</Link></div>}
                    </td>
                    <td className="mut">{e.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section title="JobsDB — ชุดข้อมูลตลาดงานปฐมภูมิ"
          sub="หลักฐานระดับรายประกาศงานที่ใช้กำหนดอาชีพ C01–C17 กลุ่มอาชีพย่อย และ Top Skills">
          <div className="scroll-x">
            <table className="tbl">
              <thead><tr><th>รายการ</th><th>รายละเอียด</th></tr></thead>
              <tbody>
                <tr><td>แหล่งข้อมูล</td><td><Ext url={JOBSDB.url}>{JOBSDB.source}</Ext></td></tr>
                <tr><td>วันที่ Snapshot</td><td>{JOBSDB.snapshot}</td></tr>
                <tr><td>วันที่วิเคราะห์</td><td>{JOBSDB.analyzed}</td></tr>
                <tr><td>หน่วยวิเคราะห์</td><td>{JOBSDB.unit}</td></tr>
                <tr><td>ขอบเขตอาชีพ</td><td>{JOBSDB.scope}</td></tr>
                <tr><td>โมเดลช่วยจำแนก</td><td>{JOBSDB.model}</td></tr>
                <tr><td>เวอร์ชันกฎ</td><td><code>{JOBSDB.ruleVersion}</code></td></tr>
              </tbody>
            </table>
          </div>

          <div className="scroll-x" style={{ marginTop: 14 }}>
            <table className="tbl">
              <thead><tr><th>ภาพรวมข้อมูล</th><th className="r">จำนวน</th></tr></thead>
              <tbody>
                {JOBSDB.stats.map(([k, v]) => (
                  <tr key={k}><td>{k}</td><td className="r"><b>{v}</b></td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="note" style={{ marginTop: 14 }}>
            <b>เกณฑ์การนับที่ใช้ทั้งระบบ</b>
            <ol className="numlist" style={{ marginTop: 8 }}>
              {JOBSDB.policy.map((p, i) => <li key={i}>{p}</li>)}
            </ol>
          </div>

          <div className="scroll-x" style={{ marginTop: 14 }}>
            <table className="tbl">
              <thead><tr><th>ไฟล์ข้อมูลในโครงการ</th><th>คำอธิบาย</th></tr></thead>
              <tbody>
                {JOBSDB.files.map(([f, d]) => (
                  <tr key={f}><td><code>{f}</code></td><td className="mut">{d}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="scroll-x" style={{ marginTop: 14 }}>
            <table className="tbl">
              <thead><tr><th>เอกสารวิเคราะห์ใน Vault</th><th>เนื้อหา</th></tr></thead>
              <tbody>
                {JOBSDB.vault.map(([f, d]) => (
                  <tr key={f}><td><code>{f}</code></td><td className="mut">{d}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="hint">
            <Link to="/jobs">ดูหน้า Jobs &amp; Skills จากข้อมูลชุดนี้ →</Link> ·{" "}
            <Link to="/careers">ดูเส้นทางอาชีพ C01–C17 →</Link>
          </p>
        </Section>

        <Section title="นโยบายและแผนระดับชาติที่ใช้กำหนดบริบท">
          <ol className="numlist">
            {NATIONAL.map((t, i) => <li key={i}>{t}</li>)}
          </ol>
        </Section>

        {BIB.map(sec => (
          <Section key={sec.g} title={`บรรณานุกรม — ${sec.g}`}>
            <div className="scroll-x">
              <table className="tbl">
                <thead><tr><th>เลขอ้างอิง</th><th>รายการ</th></tr></thead>
                <tbody>
                  {sec.items.map(it => (
                    <tr key={it.n}>
                      <td className="c"><b>[{it.n}]</b></td>
                      <td>
                        {it.text}
                        {it.url && <div><Ext url={it.url}>{it.url}</Ext></div>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>
        ))}

        <Section title="ไฟล์ต้นทางใน Vault" sub="ทุกตารางในหน้านี้สอบย้อนกลับไปยังไฟล์ต้นทางได้">
          <ol className="reflist">
            {SOURCE_FILES.map(([f, d]) => (
              <li key={f}>
                <b>{d}</b>
                <code>Labor_Growth_Report_Vault/{f}</code>
              </li>
            ))}
          </ol>
        </Section>

        <p className="hint"><Link to="/obe">ดูขั้นตอนการสังเคราะห์ OBE ที่ใช้เอกสารเหล่านี้ →</Link></p>
      </div>
    </main>
  );
}
