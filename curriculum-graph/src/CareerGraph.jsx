import { useEffect, useMemo, useRef, useState } from "react";
import dagre from "dagre";
import "./careers.css";
import {
  COURSES, CAREERS, CAREER_STATUS, TRACK_NAME,
  GROUP_COLOR, GROUP_NAME, PLO_COLOR, PLO_NAME, YEAR_COLOR,
} from "./data.js";

/**
 * แท็บ "Track → อาชีพ"
 * แสดง dependencies ของกลุ่มวิชาสำหรับแต่ละ Track โดยไล่จากวิชาพื้นฐาน → วิชาแกน →
 * วิชาแขนง/เลือกชีพ แล้วจบที่ "อาชีพเป้าหมาย" (ปลายทาง)
 * ใช้ dagre จัดเลเยอร์ → กล่องไม่ทับกัน + เส้นเดินตามจุดหักที่คำนวณให้
 */
const NODE_W = 208, NODE_H = 74, JOB_W = 290, JOB_H = 124;
const byCode = Object.fromEntries(COURSES.map(c => [c.c, c]));
const courseOrder = Object.fromEntries(COURSES.map((c, index) => [c.c, index]));

const CAREER_PATH_STAGES = [
  { id: "foundation", label: "1 · พื้นฐานวิศวกรรม", groups: ["eng"] },
  { id: "ai", label: "2 · แกนปัญญาประดิษฐ์", groups: ["ai"] },
  { id: "track", label: "3 · แกนบูรณาการและเฉพาะบริบท", groups: ["track"] },
  { id: "depth", label: "4 · วิชาเลือกสร้างความเชี่ยวชาญ", groups: ["elec"] },
  { id: "experience", label: "5 · โครงงานและประสบการณ์วิชาชีพ", groups: ["proj", "field"] },
];

const careerEndpoints = career => [...new Set([...career.courses, "EN-135-402"])];

function careerPath(career) {
  const need = new Set();
  const walk = code => {
    if (!code || need.has(code) || !byCode[code]) return;
    need.add(code);
    const course = byCode[code];
    [...(course.h || []), ...(course.w || []), ...(course.co || [])].forEach(walk);
  };
  const endpoints = new Set(careerEndpoints(career));
  endpoints.forEach(walk);
  return CAREER_PATH_STAGES.map(stage => ({
    ...stage,
    courses: [...need]
      .filter(code => stage.groups.includes(byCode[code]?.g))
      .sort((a, b) => courseOrder[a] - courseOrder[b])
      .map(code => ({ ...byCode[code], endpoint: endpoints.has(code) }))
  })).filter(stage => stage.courses.length);
}

const EDGE_STYLE = {
  hard: { stroke: "#16335c", w: 2.1, dash: "0", label: "บังคับก่อน (Hard)" },
  weak: { stroke: "#94a1b2", w: 1.6, dash: "7 5", label: "แนะนำก่อน (Weak)" },
  co:   { stroke: "#c9971b", w: 2, dash: "2 4", label: "เรียนคู่ (Co-req)" },
  job:  { stroke: "#c1466b", w: 2.4, dash: "0", label: "นำไปสู่อาชีพ" },
};

function pathFrom(pts) {
  if (!pts || pts.length < 2) return "";
  if (pts.length === 2) return `M ${pts[0].x} ${pts[0].y} L ${pts[1].x} ${pts[1].y}`;
  let d = `M ${pts[0].x} ${pts[0].y}`;
  for (let i = 1; i < pts.length - 1; i++) {
    const p = pts[i], n = pts[i + 1];
    d += ` Q ${p.x} ${p.y} ${(p.x + n.x) / 2} ${(p.y + n.y) / 2}`;
  }
  const l = pts[pts.length - 1];
  return d + ` L ${l.x} ${l.y}`;
}

function runDagre(nodeDefs, edgeDefs, opt = {}) {
  const { ranksep = 150, nodesep = 30, edgesep = 22 } = opt;
  const g = new dagre.graphlib.Graph({ multigraph: true });
  g.setGraph({ rankdir: "LR", ranksep, nodesep, edgesep, marginx: 44, marginy: 44, ranker: "network-simplex" });
  g.setDefaultEdgeLabel(() => ({}));
  nodeDefs.forEach(n => g.setNode(n.id, { width: n.w, height: n.h }));
  edgeDefs.forEach(e => g.setEdge(e.source, e.target, {}, e.id));
  dagre.layout(g);
  const nodes = nodeDefs.map(n => { const p = g.node(n.id); return { ...n, x: p.x - n.w / 2, y: p.y - n.h / 2 }; });
  const edges = edgeDefs.map(e => {
    const ge = g.edge({ v: e.source, w: e.target, name: e.id });
    return { ...e, points: ge ? ge.points : [] };
  });
  const { width, height } = g.graph();
  return { nodes, edges, width: width + 40, height: height + 40 };
}

const TRACK_TABS = [
  { id: 1, label: "แขนง 1 · เกษตรอัจฉริยะ" },
  { id: 2, label: "แขนง 2 · ปัญญาประดิษฐ์ภาคอุตสาหกรรม" },
  { id: 3, label: "แขนง 3 · นวัตกรรมปัญญาประดิษฐ์ระดับองค์กร" },
  { id: 0, label: "อาชีพข้ามทุกแขนง" },
];

const COMMON_CAREER_COUNT = CAREERS.filter(c => c.track === 0).length;

export default function CareerGraph() {
  const [track, setTrack] = useState(1);
  const [withCommon, setWithCommon] = useState(true);
  const [zoom, setZoom] = useState(0.75);
  const [selJob, setSelJob] = useState(null);
  const [focus, setFocus] = useState(false);   // true = วาดกราฟเฉพาะอาชีพที่เลือก
  const [graphOpen, setGraphOpen] = useState(true);
  const [graphExpanded, setGraphExpanded] = useState(false);
  const [isFull, setIsFull] = useState(false);
  const [faux, setFaux] = useState(false);   // เต็มหน้าจอสำรองเมื่อ Fullscreen API ถูกปิด
  const shellRef = useRef(null);

  /* เต็มจอด้วย Fullscreen API — ซิงก์สถานะกับการกด Esc หรือออกจากเต็มจอด้วยวิธีอื่น */
  useEffect(() => {
    const sync = () => setIsFull(document.fullscreenElement === shellRef.current);
    document.addEventListener("fullscreenchange", sync);
    return () => document.removeEventListener("fullscreenchange", sync);
  }, []);

  /* บางบริบท (เว็บที่ถูกฝังใน iframe) ปิด Fullscreen API ไว้ — ถอยไปใช้เต็มหน้าจอด้วย CSS แทน
     เพื่อให้ปุ่มทำงานเสมอ ไม่ใช่กดแล้วเงียบ */
  const toggleFull = async () => {
    if (document.fullscreenElement) { await document.exitFullscreen().catch(() => {}); return; }
    if (faux) { setFaux(false); return; }
    setGraphOpen(true);                  // เต็มจอต้องเห็นกราฟเสมอ
    try {
      await shellRef.current.requestFullscreen();
    } catch {
      setFaux(true);                     // API ใช้ไม่ได้ → โหมดเต็มหน้าจอสำรอง
    }
  };

  /* ออกจากโหมดสำรองด้วย Esc */
  useEffect(() => {
    if (!faux) return;
    const onKey = e => { if (e.key === "Escape") setFaux(false); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [faux]);

  const careers = useMemo(() => {
    if (track === 0) return CAREERS.filter(c => c.track === 0);
    const own = CAREERS.filter(c => c.track === track);
    return withCommon ? [...own, ...CAREERS.filter(c => c.track === 0)] : own;
  }, [track, withCommon]);

  /* อาชีพที่นำไปวาดกราฟจริง — โหมดรายอาชีพจะเหลือใบเดียว ทำให้ผังเล็กและอ่านง่าย */
  const graphCareers = useMemo(
    () => (focus && selJob ? careers.filter(c => c.id === selJob) : careers),
    [focus, selJob, careers]
  );

  const pickJob = id => {
    if (selJob === id) { setSelJob(null); setFocus(false); }
    else { setSelJob(id); setFocus(true); }
  };

  const selectJob = id => {
    if (!id) {
      setSelJob(null);
      setFocus(false);
      return;
    }
    setSelJob(id);
    setFocus(true);
    setGraphOpen(true);
  };

  const layout = useMemo(() => {
    // 1) วิชาปลายทางที่แต่ละอาชีพระบุ + ไล่ย้อน prerequisite chain ทั้งหมด
    const need = new Set();
    const walk = code => {
      if (!code || need.has(code) || !byCode[code]) return;
      need.add(code);
      const c = byCode[code];
      [...(c.h || []), ...(c.w || []), ...(c.co || [])].forEach(walk);
    };
    graphCareers.forEach(j => careerEndpoints(j).forEach(walk));

    // 2) nodes: วิชา + อาชีพ
    const nodeDefs = [...need].map(code => ({ id: code, w: NODE_W, h: NODE_H, kind: "course", c: byCode[code] }));
    graphCareers.forEach(j => nodeDefs.push({ id: j.id, w: JOB_W, h: JOB_H, kind: "job", j }));

    // 3) edges: prereq ระหว่างวิชา + วิชา → อาชีพ
    const edgeDefs = [];
    need.forEach(code => {
      const c = byCode[code];
      (c.h || []).forEach(s => need.has(s) && edgeDefs.push({ id: `${s}|${code}|hard`, source: s, target: code, kind: "hard" }));
      (c.w || []).forEach(s => need.has(s) && edgeDefs.push({ id: `${s}|${code}|weak`, source: s, target: code, kind: "weak" }));
      (c.co || []).forEach(s => need.has(s) && edgeDefs.push({ id: `${s}|${code}|co`, source: s, target: code, kind: "co" }));
    });
    graphCareers.forEach(j => careerEndpoints(j).forEach(code => {
      if (byCode[code]) edgeDefs.push({ id: `${code}|${j.id}|job`, source: code, target: j.id, kind: "job" });
    }));

    return runDagre(nodeDefs, edgeDefs, { ranksep: 165, nodesep: 26 });
  }, [graphCareers]);

  // ไฮไลต์ (ใช้เฉพาะโหมดภาพรวม — โหมดรายอาชีพวาดเฉพาะสายนั้นอยู่แล้ว)
  const { dimSet, litEdges } = useMemo(() => {
    if (!selJob || focus) return { dimSet: new Set(), litEdges: new Set() };
    const job = careers.find(j => j.id === selJob);
    if (!job) return { dimSet: new Set(), litEdges: new Set() };
    const keep = new Set([selJob]);
    const walk = code => {
      if (!code || keep.has(code) || !byCode[code]) return;
      keep.add(code);
      const c = byCode[code];
      [...(c.h || []), ...(c.w || []), ...(c.co || [])].forEach(walk);
    };
    careerEndpoints(job).forEach(walk);
    const dim = new Set(layout.nodes.filter(n => !keep.has(n.id)).map(n => n.id));
    const lit = new Set(layout.edges.filter(e => keep.has(e.source) && keep.has(e.target)).map(e => e.id));
    return { dimSet: dim, litEdges: lit };
  }, [selJob, focus, careers, layout]);

  const stats = useMemo(() => {
    const courseCount = layout.nodes.filter(n => n.kind === "course").length;
    const byGroup = {};
    layout.nodes.filter(n => n.kind === "course").forEach(n => { byGroup[n.c.g] = (byGroup[n.c.g] || 0) + 1; });
    return { courseCount, byGroup, jobCount: graphCareers.length };
  }, [layout, graphCareers]);

  const selCareer = selJob ? careers.find(j => j.id === selJob) : null;

  return (
    <div className={"graphwrap" + (isFull || faux ? " isfull" : "") + (faux ? " faux" : "")} ref={shellRef}>
      <div className="graphbar">
        {TRACK_TABS.map(t => (
          <button key={t.id} className={`gmode ${track === t.id ? "on" : ""}`}
            onClick={() => { setTrack(t.id); setSelJob(null); setFocus(false); }}>{t.label}</button>
        ))}
        {track !== 0 && (
          <label className="gtoggle">
            <input type="checkbox" checked={withCommon} onChange={e => { setWithCommon(e.target.checked); setSelJob(null); setFocus(false); }} />
            รวมอาชีพข้ามแขนง {COMMON_CAREER_COUNT} ตำแหน่ง
          </label>
        )}
        <span className="gsep" />
        <span className="glabel">ซูม</span>
        <button className="gtool" aria-label="ย่อกราฟ" onClick={() => setZoom(value => Math.max(0.35, value - 0.1))}>−</button>
        <input type="range" min="0.35" max="1.4" step="0.05" value={zoom} onChange={e => setZoom(+e.target.value)} style={{ width: 100 }} />
        <button className="gtool" aria-label="ขยายกราฟ" onClick={() => setZoom(value => Math.min(1.4, value + 0.1))}>+</button>
        <button className="gtool wide" onClick={() => setZoom(0.75)}>{Math.round(zoom * 100)}% · รีเซ็ต</button>
        <span className="gsep" />
        <button className={`gtool wide${graphExpanded ? " on" : ""}`}
          aria-pressed={graphExpanded} disabled={!graphOpen || isFull || faux}
          onClick={() => setGraphExpanded(value => !value)}>
          {graphExpanded ? "▤ ย่อพื้นที่" : "▥ ขยายพื้นที่"}
        </button>
        <button className={`gtool wide${!graphOpen ? " on" : ""}`}
          aria-expanded={graphOpen} disabled={isFull || faux}
          onClick={() => setGraphOpen(value => !value)}>
          {graphOpen ? "▾ ย่อ/ซ่อนกราฟ" : "▸ แสดงกราฟ"}
        </button>
        <button className={`gtool wide${isFull || faux ? " on" : ""}`}
          aria-pressed={isFull || faux} onClick={toggleFull}
          title={faux ? "กด Esc เพื่อออก" : undefined}>
          {isFull || faux ? "⤡ ออกจากเต็มจอ" : "⤢ เต็มจอ"}
        </button>
        {selJob && <button className="gclear" onClick={() => { setSelJob(null); setFocus(false); }}>✕ กลับสู่ภาพรวม</button>}
      </div>

      {/* แถบเลือกอาชีพ — คลิกเพื่อแยกกราฟเฉพาะอาชีพนั้น */}
      <div className="jobpick">
        <div className="jp-head">
          <b>เลือกอาชีพเพื่อแยกดูทีละสาย</b>
          <div className="jp-controls">
            <select className="career-select" aria-label="เลือกอาชีพเพื่อแสดงกราฟ"
              value={selJob || ""} onChange={event => selectJob(event.target.value)}>
              <option value="">ภาพรวมอาชีพในแขนง</option>
              {careers.map(career => (
                <option key={career.id} value={career.id}>{career.id} · {career.th}</option>
              ))}
            </select>
            <span className="jp-mode">
              <button className={`jp-m${!focus ? " on" : ""}`}
                onClick={() => setFocus(false)}>ภาพรวมทั้งแขนง</button>
              <button className={`jp-m${focus ? " on" : ""}`} disabled={!selJob}
                onClick={() => selJob && setFocus(true)}>เฉพาะอาชีพที่เลือก</button>
            </span>
          </div>
        </div>
        <div className="jp-chips">
          {careers.map(j => {
            const sc = CAREER_STATUS[j.st[0]].color;
            const on = selJob === j.id;
            return (
              <button key={j.id} className={`jp-c${on ? " on" : ""}`} style={{ "--sc": sc }}
                onClick={() => pickJob(j.id)} title={`${j.en} · ${careerEndpoints(j).length} รายวิชาปลายทางรวมสหกิจศึกษา`}>
                <span className="jp-id">{j.id}</span>
                <span className="jp-th">{j.th}</span>
                <span className="jp-st">{j.st}</span>
              </button>
            );
          })}
        </div>
        {focus && selCareer && (
          <div className="jp-now">
            กำลังแสดงเฉพาะ <b>{selCareer.id} {selCareer.th}</b> ({selCareer.en}) —
            {" "}{stats.courseCount} รายวิชาในสาย · <span className="jp-why">{selCareer.why}</span>
          </div>
        )}
      </div>

      {!graphOpen && (
        <div className="graph-collapsed">
          ซ่อนกราฟอยู่ — กด <b>▸ แสดงกราฟ</b> ด้านบนเพื่อเปิดอีกครั้ง
        </div>
      )}
      {graphOpen && <div className={`graphcanvas${graphExpanded ? " expanded" : ""}`}>
        <div className="graphscroll">
          <svg width={layout.width * zoom} height={layout.height * zoom}
            viewBox={`0 0 ${layout.width} ${layout.height}`} className="gsvg">
            <defs>
              {Object.entries(EDGE_STYLE).map(([k, v]) => (
                <marker key={k} id={`cm-${k}`} viewBox="0 0 10 10" refX="9" refY="5"
                  markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill={v.stroke} />
                </marker>
              ))}
            </defs>

            <g>
              {layout.edges.map(e => {
                const st = EDGE_STYLE[e.kind];
                const off = dimSet.has(e.source) || dimSet.has(e.target);
                const lit = litEdges.has(e.id);
                return (
                  <path key={e.id} d={pathFrom(e.points)} fill="none"
                    stroke={st.stroke} strokeWidth={lit ? st.w + 0.8 : st.w}
                    strokeDasharray={st.dash} strokeLinecap="round"
                    markerEnd={`url(#cm-${e.kind})`}
                    opacity={off ? 0.05 : selJob ? 1 : e.kind === "job" ? 0.85 : 0.75} />
                );
              })}
            </g>

            <g>
              {layout.nodes.map(n => {
                const dim = dimSet.has(n.id);
                if (n.kind === "job") {
                  const j = n.j, sc = CAREER_STATUS[j.st[0]].color;
                  const on = selJob === j.id;
                  return (
                    <foreignObject key={n.id} x={n.x} y={n.y} width={n.w} height={n.h}
                      style={{ opacity: dim ? 0.18 : 1, cursor: "pointer" }}
                      onClick={() => pickJob(j.id)}>
                      <div className="gjob" style={{ borderColor: sc, boxShadow: on ? `0 0 0 3px ${sc}55` : "none" }}>
                        <div className="gjob-top">
                          <span className="gjob-id" style={{ background: sc }}>{j.id}</span>
                          <span className="gjob-st" style={{ color: sc, borderColor: sc }}>{j.st}</span>
                        </div>
                        <div className="gjob-th">{j.th}</div>
                        <div className="gjob-en">{j.en}</div>
                      </div>
                    </foreignObject>
                  );
                }
                const c = n.c, col = GROUP_COLOR[c.g];
                return (
                  <foreignObject key={n.id} x={n.x} y={n.y} width={n.w} height={n.h} style={{ opacity: dim ? 0.15 : 1 }}>
                    <div className="gnode" style={{ background: col.bg, borderColor: col.fg }}>
                      <div className="gnode-top">
                        <span className="gnode-code" data-tip={c.c} style={{ color: col.fg }}>{c.c.replace("EN-", "")}</span>
                        {c.y && <span className="gnode-yr" style={{ background: YEAR_COLOR[c.y]?.fg }}>ปี {c.y}</span>}
                        {!c.y && <span className="gnode-yr" style={{ background: GROUP_COLOR.elec.fg }}>เลือก</span>}
                      </div>
                      <div className="gnode-name">{c.s}</div>
                      <div className="gnode-plos">
                        {c.p.map(p => (
                          <span key={p} className="gnode-plo" data-tip={`PLO${p}`} title={`PLO${p} ${PLO_NAME[p]}`} style={{ background: PLO_COLOR[p] }}>{p}</span>
                        ))}
                      </div>
                    </div>
                  </foreignObject>
                );
              })}
            </g>
          </svg>
        </div>

        <div className="graph-legend floating">
          <div className="row"><b>{TRACK_NAME[track]}</b></div>
          <div className="row" style={{ color: "var(--muted)", fontSize: ".74rem" }}>
            {stats.courseCount} รายวิชา → {stats.jobCount} อาชีพ
          </div>
          <div className="row" style={{ marginTop: 6 }}><b>เส้น</b></div>
          {Object.entries(EDGE_STYLE).map(([k, e]) => (
            <div className="row" key={k}>
              <svg width="36" height="10">
                <line x1="1" y1="5" x2="27" y2="5" stroke={e.stroke} strokeWidth={e.w} strokeDasharray={e.dash} />
                <polygon points="27,1 35,5 27,9" fill={e.stroke} />
              </svg>{e.label}
            </div>
          ))}
          <div className="row" style={{ marginTop: 6 }}><b>สีกล่องวิชา = หมวด</b></div>
          {Object.keys(stats.byGroup).map(g => (
            <div className="row" key={g}>
              <span className="sw" style={{ background: GROUP_COLOR[g].fg }} />{GROUP_NAME[g]} ({stats.byGroup[g]})
            </div>
          ))}
          <div className="row" style={{ marginTop: 6 }}><b>สถานะอาชีพ</b></div>
          {Object.entries(CAREER_STATUS).map(([k, v]) => (
            <div className="row" key={k}><span className="sw" style={{ background: v.color }} />{k} — {v.label.split(" — ")[0]}</div>
          ))}
          <div className="hint">
            {focus
              ? <>กำลังแยกดูรายอาชีพ — กด <b>ภาพรวมทั้งแขนง</b> เพื่อกลับไปดูทั้งหมด</>
              : <>คลิก <b>กล่องอาชีพ</b> หรือเลือกจากแถบด้านบน เพื่อแยกกราฟเฉพาะสายนั้น</>}
          </div>
        </div>
      </div>}

      {/* รายละเอียดอาชีพ */}
      <div className="joblist">
        {careers.map(j => {
          const sc = CAREER_STATUS[j.st[0]].color;
          const path = careerPath(j);
          return (
            <details key={j.id} className="jobcard" open={selJob === j.id}>
              <summary onClick={event => {
                event.preventDefault();
                selectJob(selJob === j.id ? "" : j.id);
              }}>
                <span className="gjob-id" style={{ background: sc }}>{j.id}</span>
                <span className="jc-th">{j.th}</span>
                <span className="jc-en">{j.en}</span>
                <span className="gjob-st" style={{ color: sc, borderColor: sc }}>{j.st}</span>
                <span className="jc-toggle">{selJob === j.id ? "ย่อรายละเอียด ▲" : "ขยายและดูกราฟ ▼"}</span>
              </summary>
              <div className="jc-body">
                <p className="jc-why"><b>เหตุผลที่เลือก:</b> {j.why}</p>
                <div className="career-path">
                  <b>เส้นทางรายวิชา:</b>
                  <div className="career-path-stages">
                    {path.map((stage, index) => (
                      <div className="career-path-stage" key={stage.id}>
                        <div className="career-path-title">{stage.label}</div>
                        <div className="career-path-courses">
                          {stage.courses.map(course => (
                            <span className={course.endpoint ? "career-course endpoint" : "career-course"} key={course.c}>
                              <small>{course.c}</small>{course.s}
                            </span>
                          ))}
                        </div>
                        {index < path.length - 1 && <span className="career-path-arrow" aria-hidden="true">→</span>}
                      </div>
                    ))}
                  </div>
                  <div className="career-path-note">กรอบสีเข้มคือรายวิชาปลายทางที่ควรใช้สร้าง Portfolio ของอาชีพนี้ ส่วนรายวิชาอื่นเป็นพื้นฐานหรือวิชาที่ควรเรียนก่อน</div>
                </div>
                <p className="jc-kw"><b>คำค้นงาน:</b> {j.kw}</p>
              </div>
            </details>
          );
        })}
      </div>
    </div>
  );
}
