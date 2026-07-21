import { useMemo, useState } from "react";
import dagre from "dagre";
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
const NODE_W = 208, NODE_H = 74, JOB_W = 250, JOB_H = 96;
const byCode = Object.fromEntries(COURSES.map(c => [c.c, c]));

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
  { id: 1, label: "Track 1 · เกษตรอัจฉริยะ" },
  { id: 2, label: "Track 2 · AI อุตสาหกรรม" },
  { id: 3, label: "Track 3 · นวัตกรรม/ซอฟต์แวร์ AI" },
  { id: 0, label: "ภาพรวมทุก Track" },
];

export default function CareerGraph() {
  const [track, setTrack] = useState(1);
  const [withCommon, setWithCommon] = useState(true);
  const [zoom, setZoom] = useState(0.75);
  const [selJob, setSelJob] = useState(null);

  const careers = useMemo(() => {
    if (track === 0) return CAREERS.filter(c => c.track === 0);
    const own = CAREERS.filter(c => c.track === track);
    return withCommon ? [...own, ...CAREERS.filter(c => c.track === 0)] : own;
  }, [track, withCommon]);

  const layout = useMemo(() => {
    // 1) วิชาปลายทางที่แต่ละอาชีพระบุ + ไล่ย้อน prerequisite chain ทั้งหมด
    const need = new Set();
    const walk = code => {
      if (!code || need.has(code) || !byCode[code]) return;
      need.add(code);
      const c = byCode[code];
      [...(c.h || []), ...(c.w || []), ...(c.co || [])].forEach(walk);
    };
    careers.forEach(j => j.courses.forEach(walk));

    // 2) nodes: วิชา + อาชีพ
    const nodeDefs = [...need].map(code => ({ id: code, w: NODE_W, h: NODE_H, kind: "course", c: byCode[code] }));
    careers.forEach(j => nodeDefs.push({ id: j.id, w: JOB_W, h: JOB_H, kind: "job", j }));

    // 3) edges: prereq ระหว่างวิชา + วิชา → อาชีพ
    const edgeDefs = [];
    need.forEach(code => {
      const c = byCode[code];
      (c.h || []).forEach(s => need.has(s) && edgeDefs.push({ id: `${s}|${code}|hard`, source: s, target: code, kind: "hard" }));
      (c.w || []).forEach(s => need.has(s) && edgeDefs.push({ id: `${s}|${code}|weak`, source: s, target: code, kind: "weak" }));
      (c.co || []).forEach(s => need.has(s) && edgeDefs.push({ id: `${s}|${code}|co`, source: s, target: code, kind: "co" }));
    });
    careers.forEach(j => j.courses.forEach(code => {
      if (byCode[code]) edgeDefs.push({ id: `${code}|${j.id}|job`, source: code, target: j.id, kind: "job" });
    }));

    return runDagre(nodeDefs, edgeDefs, { ranksep: 165, nodesep: 26 });
  }, [careers]);

  // ไฮไลต์: คลิกอาชีพ → โชว์เฉพาะสายวิชาที่นำไปสู่อาชีพนั้น
  const { dimSet, litEdges } = useMemo(() => {
    if (!selJob) return { dimSet: new Set(), litEdges: new Set() };
    const job = careers.find(j => j.id === selJob);
    const keep = new Set([selJob]);
    const walk = code => {
      if (!code || keep.has(code) || !byCode[code]) return;
      keep.add(code);
      const c = byCode[code];
      [...(c.h || []), ...(c.w || []), ...(c.co || [])].forEach(walk);
    };
    job.courses.forEach(walk);
    const dim = new Set(layout.nodes.filter(n => !keep.has(n.id)).map(n => n.id));
    const lit = new Set(layout.edges.filter(e => keep.has(e.source) && keep.has(e.target)).map(e => e.id));
    return { dimSet: dim, litEdges: lit };
  }, [selJob, careers, layout]);

  const stats = useMemo(() => {
    const courseCount = layout.nodes.filter(n => n.kind === "course").length;
    const byGroup = {};
    layout.nodes.filter(n => n.kind === "course").forEach(n => { byGroup[n.c.g] = (byGroup[n.c.g] || 0) + 1; });
    return { courseCount, byGroup, jobCount: careers.length };
  }, [layout, careers]);

  return (
    <div className="graphwrap">
      <div className="graphbar">
        {TRACK_TABS.map(t => (
          <button key={t.id} className={`gmode ${track === t.id ? "on" : ""}`}
            onClick={() => { setTrack(t.id); setSelJob(null); }}>{t.label}</button>
        ))}
        {track !== 0 && (
          <label className="gtoggle">
            <input type="checkbox" checked={withCommon} onChange={e => { setWithCommon(e.target.checked); setSelJob(null); }} />
            รวมอาชีพภาพรวม 3 ตำแหน่ง
          </label>
        )}
        <span className="gsep" />
        <span className="glabel">ซูม</span>
        <input type="range" min="0.35" max="1.4" step="0.05" value={zoom} onChange={e => setZoom(+e.target.value)} style={{ width: 100 }} />
        <span className="glabel">{Math.round(zoom * 100)}%</span>
        {selJob && <button className="gclear" onClick={() => setSelJob(null)}>✕ แสดงทุกสาย</button>}
      </div>

      <div className="graphcanvas">
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
                      onClick={() => setSelJob(s => (s === j.id ? null : j.id))}>
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
                        <span className="gnode-code" style={{ color: col.fg }}>{c.c.replace("EN-", "")}</span>
                        {c.y && <span className="gnode-yr" style={{ background: YEAR_COLOR[c.y]?.fg }}>ปี {c.y}</span>}
                        {!c.y && <span className="gnode-yr" style={{ background: GROUP_COLOR.elec.fg }}>เลือก</span>}
                      </div>
                      <div className="gnode-name">{c.s}</div>
                      <div className="gnode-plos">
                        {c.p.map(p => (
                          <span key={p} className="gnode-plo" title={`PLO${p} ${PLO_NAME[p]}`} style={{ background: PLO_COLOR[p] }}>{p}</span>
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
          <div className="hint">คลิก <b>กล่องอาชีพ</b> เพื่อดูเฉพาะสายวิชาที่นำไปสู่อาชีพนั้น</div>
        </div>
      </div>

      {/* รายละเอียดอาชีพ */}
      <div className="joblist">
        {careers.map(j => {
          const sc = CAREER_STATUS[j.st[0]].color;
          return (
            <details key={j.id} className="jobcard" open={selJob === j.id}>
              <summary>
                <span className="gjob-id" style={{ background: sc }}>{j.id}</span>
                <span className="jc-th">{j.th}</span>
                <span className="jc-en">{j.en}</span>
                <span className="gjob-st" style={{ color: sc, borderColor: sc }}>{j.st}</span>
              </summary>
              <div className="jc-body">
                <p className="jc-why"><b>เหตุผลที่เลือก:</b> {j.why}</p>
                <p className="jc-courses"><b>รายวิชาหลัก:</b> {j.courses.map(c => byCode[c] ? `${c} ${byCode[c].s}` : c).join(" · ")}</p>
                <p className="jc-kw"><b>คำค้นงาน:</b> {j.kw}</p>
              </div>
            </details>
          );
        })}
      </div>
    </div>
  );
}
