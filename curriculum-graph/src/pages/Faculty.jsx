import { PageHead, Section } from "./ui.jsx";
import { FACULTY, FACULTY_STATS, FACULTY_SOURCE } from "../facultyData.js";

const LEVEL_LABEL = { "เอก": "ปริญญาเอก", "โท": "ปริญญาโท", "ตรี": "ปริญญาตรี" };

export default function Faculty() {
  const s = FACULTY_STATS;
  return (
    <main>
      <PageHead
        eyebrow="อาจารย์ประจำหลักสูตร · Programme Faculty"
        title="อาจารย์ผู้รับผิดชอบหลักสูตรและอาจารย์ประจำหลักสูตร"
        lead="คณาจารย์ 5 ท่านที่รับผิดชอบหลักสูตรวิศวกรรมปัญญาประดิษฐ์และระบบอัจฉริยะ พร้อมคุณวุฒิครบทุกระดับตามที่ระบุในเล่มหลักสูตร"
        crumbs={[{ label: "อาจารย์ประจำหลักสูตร" }]} />

      <div className="wrap">
        <Section title="ภาพรวมคณาจารย์">
          <div className="statgrid">
            <div className="statbox"><b>{s.total}</b><span>อาจารย์ประจำหลักสูตร</span></div>
            <div className="statbox"><b>{s.doctorate}</b><span>สำเร็จปริญญาเอก</span></div>
            <div className="statbox"><b>{s.assocProf}</b><span>ผู้ช่วยศาสตราจารย์</span></div>
            <div className="statbox"><b>{s.lecturer}</b><span>อาจารย์</span></div>
          </div>

          <div className="note">
            <b>หมายเหตุจากเล่มหลักสูตร:</b> {FACULTY_SOURCE.note} — คุณสมบัติของทุกท่านระบุว่า <b>“ตรง”</b> ตามสาขาวิชาของหลักสูตร
          </div>

          <h3 className="skill-h">สาขาความเชี่ยวชาญ</h3>
          <div className="fieldbar">
            {Object.entries(s.byField).map(([f, n], i) => (
              <div key={f} className={`fseg f${i}`} style={{ flexGrow: n }}>
                <b>{n}</b><span>{f}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section title="รายชื่อและคุณวุฒิ" sub="เรียงตามลำดับในเล่มหลักสูตร">
          <div className="facgrid">
            {FACULTY.map(f => (
              <article key={f.id} className={"faccard" + (f.role ? " is-chair" : "")}>
                <div className="facid">
                  <div className="facavatar" aria-hidden="true">{f.rankShort}</div>
                  <div className="facname">
                    <b>{f.name}</b>
                    <span>{f.rank}</span>
                    {f.role && <em className="facrole">{f.role}</em>}
                    <div className="facfield">{f.field}</div>
                  </div>
                  <div className="facno" aria-hidden="true">{f.id}</div>
                </div>

                <ol className="facdeg">
                  {f.degrees.map(d => (
                    <li key={d.level}>
                      <div className="deghead">
                        <span className="degtag">{d.abbr}</span>
                        <small>{LEVEL_LABEL[d.level]}</small>
                      </div>
                      <b>{d.major}</b>
                      <small className="deginst">{d.inst}</small>
                      <small className="degyear">พ.ศ. {d.year}</small>
                    </li>
                  ))}
                </ol>

                <div className="facqual">
                  <span>คุณสมบัติ</span>
                  <b>{f.qualified}</b>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section title="ตารางสรุปคุณวุฒิ">
          <div className="obe-tablewrap">
            <table className="tbl">
              <thead>
                <tr>
                  <th>ลำดับ</th><th>ตำแหน่งวิชาการ</th><th>ชื่อ–สกุล</th>
                  <th>ปริญญาเอก</th><th>ปริญญาโท</th><th>ปริญญาตรี</th><th>คุณสมบัติ</th>
                </tr>
              </thead>
              <tbody>
                {FACULTY.map(f => {
                  const by = l => f.degrees.find(d => d.level === l);
                  const cell = d => d
                    ? <><b>{d.abbr}</b> {d.major}<br /><small className="mut">{d.inst} · {d.year}</small></>
                    : <span className="mut">—</span>;
                  return (
                    <tr key={f.id}>
                      <td className="r">{f.id}</td>
                      <td>{f.rank}{f.role && <><br /><small className="facrole">{f.role}</small></>}</td>
                      <td><b>{f.name}</b></td>
                      <td className="small">{cell(by("เอก"))}</td>
                      <td className="small">{cell(by("โท"))}</td>
                      <td className="small">{cell(by("ตรี"))}</td>
                      <td>{f.qualified}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="obe-note">
            ที่มา: {FACULTY_SOURCE.book} · บันทึกในวอลต์ที่ <code>{FACULTY_SOURCE.vault}</code>
          </p>
        </Section>
      </div>
    </main>
  );
}
