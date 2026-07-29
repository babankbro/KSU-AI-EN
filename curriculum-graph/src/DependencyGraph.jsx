import { useMemo, useState } from "react";
import dagre from "dagre";
import { CORE, COURSES, GROUP_COLOR, GROUP_NAME, PLO_COLOR, PLO_NAME, YEAR_COLOR } from "./data.js";

/**
 * วาดกราฟด้วย SVG + dagre โดยตรง (ไม่ใช้ React Flow)
 * - dagre จัด "เลเยอร์" ให้กล่องไม่ทับกันและเส้นไขว้น้อยที่สุด
 * - dagre คืน bend points ของแต่ละเส้น → เส้นเดินอ้อมกล่อง ไม่ทับกล่อง/ป้าย
 */
const NODE_W = 208, NODE_H = 74, PLO_W = 158, PLO_H = 66;

const EDGE_STYLE = {
  hard: { stroke: "#16335c", w: 2.2, dash: "0", label: "บังคับก่อน (Hard)" },
  weak: { stroke: "#94a1b2", w: 1.7, dash: "7 5", label: "แนะนำก่อน (Weak)" },
  co:   { stroke: "#c9971b", w: 2.1, dash: "2 4", label: "เรียนคู่ (Co-req)" },
};
const GROUPS = ["eng", "ai", "track", "proj", "field"];
const MODES = [
  { id: "dep", label: "① Dependencies (วิชาก่อน–หลัง)" },
  { id: "group", label: "② แยกตามกลุ่ม (หมวด)" },
  { id: "plo", label: "③ แยกตาม PLO" },
];

/** สร้างเส้นโค้งนุ่มจากจุดหักของ dagre */
function pathFrom(pts) {
  if (!pts || pts.length < 2) return "";
  if (pts.length === 2) return `M ${pts[0].x} ${pts[0].y} L ${pts[1].x} ${pts[1].y}`;
  let d = `M ${pts[0].x} ${pts[0].y}`;
  for (let i = 1; i < pts.length - 1; i++) {
    const p = pts[i], n = pts[i + 1];
    d += ` Q ${p.x} ${p.y} ${(p.x + n.x) / 2} ${(p.y + n.y) / 2}`;
  }
  const l = pts[pts.length - 1];
  d += ` L ${l.x} ${l.y}`;
  return d;
}

function runDagre(nodeDefs, edgeDefs, opt = {}) {
  const { ranksep = 130, nodesep = 34, edgesep = 24, rankdir = "LR" } = opt;
  const g = new dagre.graphlib.Graph({ multigraph: true });
  g.setGraph({ rankdir, ranksep, nodesep, edgesep, marginx: 44, marginy: 44, ranker: "network-simplex" });
  g.setDefaultEdgeLabel(() => ({}));
  nodeDefs.forEach(n => g.setNode(n.id, { width: n.w, height: n.h }));
  edgeDefs.forEach(e => g.setEdge(e.source, e.target, {}, e.id));
  dagre.layout(g);
  const nodes = nodeDefs.map(n => {
    const p = g.node(n.id);
    return { ...n, x: p.x - n.w / 2, y: p.y - n.h / 2, cx: p.x, cy: p.y };
  });
  const edges = edgeDefs.map(e => {
    const ge = g.edge({ v: e.source, w: e.target, name: e.id });
    return { ...e, points: ge ? ge.points : [] };
  });
  const { width, height } = g.graph();
  return { nodes, edges, width: width + 40, height: height + 40 };
}

export default function DependencyGraph() {
  const [scope, setScope] = useState("core");
  const [mode, setMode] = useState("dep");
  const [gFilter, setGFilter] = useState(null);
  const [sel, setSel] = useState(null);
  const [zoom, setZoom] = useState(0.8);
  const [focusPath, setFocusPath] = useState(false);
  const [graphOpen, setGraphOpen] = useState(true);
  const [graphExpanded, setGraphExpanded] = useState(false);

  const graphCourses = useMemo(() => scope === "t3"
    ? [...CORE, ...COURSES.filter(c => c.g === "elec" && c.tr === 3)]
    : CORE, [scope]);
  const courseByCode = useMemo(
    () => Object.fromEntries(graphCourses.map(c => [c.c, c])),
    [graphCourses],
  );
  const dependencyEdges = useMemo(() => graphCourses.flatMap(c => [
    ...(c.h || []).map(source => ({ id: `${source}|${c.c}|hard`, source, target: c.c, kind: "hard" })),
    ...(c.w || []).map(source => ({ id: `${source}|${c.c}|weak`, source, target: c.c, kind: "weak" })),
    ...(c.co || []).map(source => ({ id: `${source}|${c.c}|co`, source, target: c.c, kind: "co", both: true })),
  ]).filter(edge => courseByCode[edge.source] && courseByCode[edge.target]), [graphCourses, courseByCode]);
  const activeGroups = scope === "t3" ? [...GROUPS, "elec"] : GROUPS;

  const chain = useMemo(() => {
    if (!sel) return { before: new Set(), after: new Set(), all: new Set() };
    const walk = (start, direction) => {
      const found = new Set();
      const queue = [start];
      while (queue.length) {
        const current = queue.shift();
        dependencyEdges.forEach(edge => {
          const next = direction === "before"
            ? (edge.target === current ? edge.source : null)
            : (edge.source === current ? edge.target : null);
          if (next && next !== sel && !found.has(next)) {
            found.add(next);
            queue.push(next);
          }
        });
      }
      return found;
    };
    const before = walk(sel, "before");
    const after = walk(sel, "after");
    return { before, after, all: new Set([sel, ...before, ...after]) };
  }, [sel, dependencyEdges]);

  const layout = useMemo(() => {
    // ---------- ① dependencies ----------
    if (mode === "dep") {
      const visible = focusPath && sel ? graphCourses.filter(c => chain.all.has(c.c)) : graphCourses;
      const visibleCodes = new Set(visible.map(c => c.c));
      const nodeDefs = visible.map(c => ({ id: c.c, w: NODE_W, h: NODE_H, kind: "course", c }));
      const edgeDefs = dependencyEdges.filter(edge =>
        visibleCodes.has(edge.source) && visibleCodes.has(edge.target));
      return runDagre(nodeDefs, edgeDefs, { ranksep: 140, nodesep: 30 });
    }

    // ---------- ② by group (คอลัมน์ตามหมวด — ไม่มีเส้น เพื่อความชัด) ----------
    if (mode === "group") {
      const nodes = [];
      let maxRows = 0;
      activeGroups.forEach((g, gi) => {
        const list = graphCourses.filter(c => c.g === g).sort((a, b) =>
          (a.sem || 99) - (b.sem || 99) || a.c.localeCompare(b.c));
        maxRows = Math.max(maxRows, list.length);
        nodes.push({ id: `hdr-${g}`, kind: "header", g, count: list.length, w: NODE_W, h: 42, x: 40 + gi * (NODE_W + 46), y: 30 });
        list.forEach((c, i) => nodes.push({
          id: c.c, kind: "course", c, w: NODE_W, h: NODE_H,
          x: 40 + gi * (NODE_W + 46), y: 96 + i * (NODE_H + 14),
        }));
      });
      return { nodes, edges: [], width: 40 + activeGroups.length * (NODE_W + 46) + 40, height: 96 + maxRows * (NODE_H + 14) + 60 };
    }

    // ---------- ③ by PLO (bipartite: วิชา → PLO) ----------
    const counts = {};
    graphCourses.forEach(c => c.p.forEach(p => { counts[p] = (counts[p] || 0) + 1; }));
    const nodeDefs = graphCourses.map(c => ({ id: c.c, w: NODE_W, h: NODE_H, kind: "course", c }));
    [1, 2, 3, 4, 5, 6, 7].forEach(n => nodeDefs.push({ id: `PLO${n}`, w: PLO_W, h: PLO_H, kind: "plo", n, count: counts[n] || 0 }));
    const edgeDefs = [];
    graphCourses.forEach(c => c.p.forEach(p => edgeDefs.push({ id: `${c.c}|PLO${p}`, source: c.c, target: `PLO${p}`, kind: "plo", plo: p })));
    return runDagre(nodeDefs, edgeDefs, { ranksep: 300, nodesep: 20 });
  }, [mode, focusPath, sel, chain, graphCourses, dependencyEdges, activeGroups]);

  // ---------- highlight sets ----------
  const { dimSet, litEdges } = useMemo(() => {
    const dim = new Set();
    layout.nodes.forEach(n => {
      if (n.kind !== "course") return;
      if (gFilter && n.c.g !== gFilter) dim.add(n.id);
    });
    if (sel) {
      const near = mode === "dep" ? chain.all : new Set([sel]);
      if (mode !== "dep") {
        layout.edges.forEach(e => { if (e.source === sel || e.target === sel) { near.add(e.source); near.add(e.target); } });
      }
      layout.nodes.forEach(n => { if (!near.has(n.id) && n.kind !== "header") dim.add(n.id); });
    }
    const lit = new Set(sel ? layout.edges.filter(e =>
      mode === "dep"
        ? chain.all.has(e.source) && chain.all.has(e.target)
        : e.source === sel || e.target === sel).map(e => e.id) : []);
    return { dimSet: dim, litEdges: lit };
  }, [layout, gFilter, sel, mode, chain]);

  const selectedCourse = sel ? courseByCode[sel] : null;

  const markerKinds = mode === "plo"
    ? [1, 2, 3, 4, 5, 6, 7].map(p => ({ id: `m-plo${p}`, color: PLO_COLOR[p] }))
    : Object.entries(EDGE_STYLE).map(([k, v]) => ({ id: `m-${k}`, color: v.stroke }));

  return (
    <div className="graphwrap">
      <div className="note">
        {scope === "core"
          ? "กราฟแสดงลำดับรายวิชาแกนในแผนข้อเสนอ 133 หน่วยกิต และตรวจให้วิชา Hard prerequisite อยู่ในภาคก่อนหน้าแล้ว"
          : "กราฟแสดงวิชาแกนร่วมกับวิชาเลือก Track 3 เพื่อทวนสอบเส้นทาง Advanced LLM, AI Reliability, Enterprise Architecture, AI Venture, Product Management และ AI Governance"}
      </div>
      <div className="graphbar">
        <button className={`gmode ${scope === "core" ? "on" : ""}`}
          onClick={() => { setScope("core"); setSel(null); setFocusPath(false); setGFilter(null); }}>
          วิชาแกน
        </button>
        <button className={`gmode ${scope === "t3" ? "on" : ""}`}
          onClick={() => { setScope("t3"); setSel(null); setFocusPath(false); setGFilter(null); }}>
          วิชาแกน + เลือก Track 3
        </button>
        <span className="gsep" />
        {MODES.map(m => (
          <button key={m.id} className={`gmode ${mode === m.id ? "on" : ""}`}
            onClick={() => { setMode(m.id); setSel(null); setFocusPath(false); }}>{m.label}</button>
        ))}
        <span className="gsep" />
        <span className="glabel">สีตามหมวด:</span>
        {activeGroups.map(g => (
          <button key={g} className={`gchip ${gFilter === g ? "on" : ""}`}
            style={{
              borderColor: GROUP_COLOR[g].fg,
              background: gFilter === g ? GROUP_COLOR[g].fg : GROUP_COLOR[g].bg,
              color: gFilter === g ? "#fff" : GROUP_COLOR[g].fg,
            }}
            onClick={() => setGFilter(f => (f === g ? null : g))}>{GROUP_NAME[g]}</button>
        ))}
        {gFilter && <button className="gclear" onClick={() => setGFilter(null)}>✕ ล้าง</button>}
        <span className="gsep" />
        <span className="glabel">ซูม</span>
        <button className="gtool" aria-label="ย่อกราฟ" onClick={() => setZoom(value => Math.max(0.35, value - 0.1))}>−</button>
        <input type="range" min="0.35" max="1.5" step="0.05" value={zoom}
          onChange={e => setZoom(+e.target.value)} style={{ width: 110 }} />
        <button className="gtool" aria-label="ขยายกราฟ" onClick={() => setZoom(value => Math.min(1.5, value + 0.1))}>+</button>
        <button className="gtool wide" onClick={() => setZoom(0.8)}>{Math.round(zoom * 100)}% · รีเซ็ต</button>
        <span className="gsep" />
        <button className={`gtool wide${graphExpanded ? " on" : ""}`} onClick={() => setGraphExpanded(value => !value)}>
          {graphExpanded ? "ย่อพื้นที่กราฟ" : "ขยายพื้นที่กราฟ"}
        </button>
        <button className="gtool wide" onClick={() => setGraphOpen(value => !value)}>
          {graphOpen ? "ซ่อนกราฟ" : "แสดงกราฟ"}
        </button>
      </div>

      {mode === "dep" && selectedCourse && (
        <div className="graph-selection">
          <div>
            <b>{selectedCourse.c} · {selectedCourse.s}</b>
            <span>วิชาก่อนหน้าทั้งสาย {chain.before.size} วิชา · วิชาที่ต่อยอด {chain.after.size} วิชา</span>
          </div>
          <div className="graph-selection-actions">
            <button className={`gtool wide${focusPath ? " on" : ""}`} onClick={() => setFocusPath(value => !value)}>
              {focusPath ? "แสดงทุกวิชา" : "แสดงเฉพาะสายนี้"}
            </button>
            <button className="gclear" onClick={() => { setSel(null); setFocusPath(false); }}>✕ ยกเลิกการเลือก</button>
          </div>
        </div>
      )}

      {graphOpen && <div className={`graphcanvas${graphExpanded ? " expanded" : ""}`}>
        <div className="graphscroll">
          <svg width={layout.width * zoom} height={layout.height * zoom}
            viewBox={`0 0 ${layout.width} ${layout.height}`} className="gsvg">
            <defs>
              {markerKinds.map(m => (
                <marker key={m.id} id={m.id} viewBox="0 0 10 10" refX="9" refY="5"
                  markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill={m.color} />
                </marker>
              ))}
            </defs>

            {/* edges */}
            <g>
              {layout.edges.map(e => {
                const st = mode === "plo"
                  ? { stroke: PLO_COLOR[e.plo], w: 1.4, dash: "0", marker: `m-plo${e.plo}` }
                  : { ...EDGE_STYLE[e.kind], marker: `m-${e.kind}` };
                const off = dimSet.has(e.source) || dimSet.has(e.target);
                const lit = litEdges.has(e.id);
                return (
                  <path key={e.id} d={pathFrom(e.points)} fill="none"
                    stroke={st.stroke} strokeWidth={lit ? st.w + 1 : st.w}
                    strokeDasharray={st.dash} strokeLinecap="round"
                    markerEnd={`url(#${st.marker})`}
                    markerStart={e.both ? `url(#${st.marker})` : undefined}
                    opacity={off ? 0.06 : sel ? (lit ? 1 : 0.12) : mode === "plo" ? 0.5 : 0.9} />
                );
              })}
            </g>

            {/* nodes */}
            <g>
              {layout.nodes.map(n => {
                const dim = dimSet.has(n.id);
                if (n.kind === "header") {
                  const col = GROUP_COLOR[n.g];
                  return (
                    <foreignObject key={n.id} x={n.x} y={n.y} width={n.w} height={n.h}>
                      <div className="ghdr" style={{ background: col.fg }}>{GROUP_NAME[n.g]} ({n.count})</div>
                    </foreignObject>
                  );
                }
                if (n.kind === "plo") {
                  return (
                    <foreignObject key={n.id} x={n.x} y={n.y} width={n.w} height={n.h} style={{ opacity: dim ? 0.25 : 1 }}>
                      <div className="gplo" style={{ background: PLO_COLOR[n.n] }}>
                        <div className="gplo-t">PLO{n.n}</div>
                        <div className="gplo-s">{PLO_NAME[n.n]}</div>
                        <div className="gplo-c">{n.count} วิชา</div>
                      </div>
                    </foreignObject>
                  );
                }
                const c = n.c, col = GROUP_COLOR[c.g], hl = sel === n.id;
                const relation = chain.before.has(n.id) ? "before" : chain.after.has(n.id) ? "after" : "";
                return (
                  <foreignObject key={n.id} x={n.x} y={n.y} width={n.w} height={n.h}
                    style={{ opacity: dim ? 0.18 : 1, cursor: "pointer" }}
                    onClick={() => mode !== "group" && setSel(s => {
                      if (s === n.id) {
                        setFocusPath(false);
                        return null;
                      }
                      return n.id;
                    })}>
                    <div className="gnode" style={{
                      background: col.bg, borderColor: hl ? "#c9971b" : col.fg,
                      boxShadow: hl
                        ? "0 0 0 3px rgba(201,151,27,.35)"
                        : relation === "before"
                          ? "0 0 0 2px rgba(22,51,92,.18)"
                          : relation === "after"
                            ? "0 0 0 2px rgba(31,125,82,.2)"
                            : "none",
                    }}>
                      <div className="gnode-top">
                        <span className="gnode-code" data-tip={c.c} style={{ color: col.fg }}>{c.c.replace("EN-", "")}</span>
                        <span className="gnode-yr" style={{ background: c.y ? YEAR_COLOR[c.y]?.fg : GROUP_COLOR.elec.fg }}>
                          {c.y ? `ปี ${c.y}` : "เลือก"}
                        </span>
                      </div>
                      <div className="gnode-name">{c.s}</div>
                      <div className="gnode-plos">
                        {c.p.map(p => (
                          <span key={p} className="gnode-plo" data-tip={`PLO${p}`} title={`PLO${p} ${PLO_NAME[p]}`}
                            style={{ background: PLO_COLOR[p] }}>{p}</span>
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
          {mode === "plo" ? (
            <>
              <div className="row"><b>PLO ที่รับผิดชอบ</b></div>
              {[1, 2, 3, 4, 5, 6, 7].map(p => (
                <div className="row" key={p}><span className="sw" style={{ background: PLO_COLOR[p] }} />PLO{p} {PLO_NAME[p]}</div>
              ))}
            </>
          ) : mode === "group" ? (
            <>
              <div className="row"><b>หมวดวิชา</b></div>
              {activeGroups.map(g => (
                <div className="row" key={g}><span className="sw" style={{ background: GROUP_COLOR[g].fg }} />{GROUP_NAME[g]}</div>
              ))}
            </>
          ) : (
            <>
              <div className="row"><b>เส้นลูกศร</b></div>
              {Object.entries(EDGE_STYLE).map(([k, e]) => (
                <div className="row" key={k}>
                  <svg width="36" height="10">
                    <line x1="1" y1="5" x2="27" y2="5" stroke={e.stroke} strokeWidth={e.w} strokeDasharray={e.dash} />
                    <polygon points="27,1 35,5 27,9" fill={e.stroke} />
                  </svg>{e.label}
                </div>
              ))}
              <div className="row" style={{ marginTop: 6 }}><b>สีกล่อง = หมวด</b></div>
              {GROUPS.map(g => (
                <div className="row" key={g}><span className="sw" style={{ background: GROUP_COLOR[g].fg }} />{GROUP_NAME[g]}</div>
              ))}
            </>
          )}
          <div className="hint">
            {mode === "dep" && "คลิกวิชาเพื่อดูสายทั้งหมดตั้งแต่วิชาพื้นฐานที่ต้องเรียนก่อนจนถึงวิชาที่ต่อยอด แล้วเลือก “แสดงเฉพาะสายนี้” เพื่อย่อกราฟ"}
            {mode === "group" && "จัดคอลัมน์ตามหมวด (ไม่แสดงเส้น เพื่อให้อ่านองค์ประกอบแต่ละหมวดได้ชัด)"}
            {mode === "plo" && "วิชา → PLO ที่รับผิดชอบ · สีกล่อง = หมวด, สีเส้น/ฮับ = PLO · คลิกวิชาเพื่อดูเฉพาะ PLO ของวิชานั้น"}
          </div>
        </div>
      </div>}
    </div>
  );
}
