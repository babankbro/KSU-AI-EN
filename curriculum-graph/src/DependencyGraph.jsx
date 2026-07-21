import { useMemo, useState, useCallback } from "react";
import ReactFlow, {
  Background, Controls, MiniMap, MarkerType, Panel, Handle, Position,
} from "reactflow";
import "reactflow/dist/style.css";
import { CORE, YEAR_COLOR, PLO_NAME } from "./data.js";

const COLX = sem => (sem - 1) * 250 + 40;     // x ต่อภาคเรียน
const ROWY = idx => 90 + idx * 78;            // y ภายในภาคเรียน
const EDGE = {
  hard: { stroke: "#16335c", w: 2.2, dash: "0", label: "บังคับก่อน" },
  weak: { stroke: "#9aa6b6", w: 1.6, dash: "5 4", label: "แนะนำก่อน" },
  co:   { stroke: "#c9971b", w: 2, dash: "2 3", label: "เรียนคู่ (co-req)" },
};

// custom node ---------------------------------------------------------------
function CourseNode({ data }) {
  const col = YEAR_COLOR[data.y];
  return (
    <div style={{
      width: 190, padding: "7px 10px", borderRadius: 10,
      background: data.dim ? "var(--card)" : col.bg,
      border: `2px solid ${data.hl ? "#c9971b" : col.fg}`,
      opacity: data.dim ? 0.35 : 1, boxShadow: data.hl ? "0 0 0 3px rgba(201,151,27,.3)" : "none",
      transition: "opacity .15s",
    }}>
      <Handle type="target" position={Position.Left} style={{ opacity: 0 }} />
      <div style={{ fontFamily: "monospace", fontSize: 10, color: col.fg, fontWeight: 700 }}>{data.code}</div>
      <div style={{ fontSize: 12.5, fontWeight: 700, lineHeight: 1.25, color: "var(--ink)" }}>{data.label}</div>
      <div style={{ display: "flex", gap: 3, flexWrap: "wrap", marginTop: 3 }}>
        {data.p.map(p => (
          <span key={p} title={PLO_NAME[p]} style={{
            fontSize: 9, fontWeight: 700, padding: "0 4px", borderRadius: 4,
            background: "rgba(0,0,0,.06)", color: col.fg,
          }}>P{p}</span>
        ))}
      </div>
      <Handle type="source" position={Position.Right} style={{ opacity: 0 }} />
    </div>
  );
}
const nodeTypes = { course: CourseNode };

export default function DependencyGraph() {
  const [sel, setSel] = useState(null); // selected course code

  // base nodes (positions) ---------------------------------------------------
  const base = useMemo(() => {
    const bySem = {};
    CORE.forEach(c => { (bySem[c.sem] ||= []).push(c); });
    const nodes = [];
    // year band headers
    [1, 2, 3, 4].forEach(y => {
      const startSem = 2 * y - 1;
      nodes.push({
        id: `yr-${y}`, position: { x: COLX(startSem) - 12, y: 8 },
        data: { label: `ชั้นปีที่ ${y}` }, draggable: false, selectable: false,
        style: {
          width: 490, height: 34, background: YEAR_COLOR[y].fg, color: "#fff",
          borderRadius: 8, fontWeight: 700, display: "flex", alignItems: "center",
          justifyContent: "center", fontSize: 13, border: "none",
        },
      });
    });
    // semester sublabels + course nodes
    Object.entries(bySem).forEach(([sem, list]) => {
      nodes.push({
        id: `sem-${sem}`, position: { x: COLX(+sem) + 15, y: 50 },
        data: { label: `ภาคเรียน ${sem}` }, draggable: false, selectable: false,
        style: { width: 160, background: "transparent", border: "none", color: "var(--muted)", fontSize: 11, fontWeight: 700 },
      });
      list.forEach((c, i) => nodes.push({
        id: c.c, type: "course", position: { x: COLX(c.sem), y: ROWY(i) },
        data: { code: c.c.replace("EN-", ""), label: c.s, y: c.y, p: c.p },
        draggable: true,
      }));
    });
    return nodes;
  }, []);

  const edges = useMemo(() => {
    const es = [];
    CORE.forEach(c => {
      (c.h || []).forEach(src => es.push(mk(src, c.c, "hard")));
      (c.w || []).forEach(src => es.push(mk(src, c.c, "weak")));
      (c.co || []).forEach(src => es.push(mk(src, c.c, "co", true)));
    });
    return es;
    function mk(src, tgt, kind, both) {
      const e = EDGE[kind];
      return {
        id: `${src}->${tgt}-${kind}`, source: src, target: tgt, type: "smoothstep",
        markerEnd: { type: MarkerType.ArrowClosed, color: e.stroke, width: 16, height: 16 },
        ...(both ? { markerStart: { type: MarkerType.ArrowClosed, color: e.stroke, width: 16, height: 16 } } : {}),
        style: { stroke: e.stroke, strokeWidth: e.w, strokeDasharray: e.dash },
        data: { kind },
      };
    }
  }, []);

  // apply highlight ----------------------------------------------------------
  const { nodes, styledEdges } = useMemo(() => {
    if (!sel) return { nodes: base, styledEdges: edges };
    const connected = new Set([sel]);
    edges.forEach(e => { if (e.source === sel || e.target === sel) { connected.add(e.source); connected.add(e.target); } });
    const nodes = base.map(n => n.type === "course"
      ? { ...n, data: { ...n.data, dim: !connected.has(n.id), hl: n.id === sel } } : n);
    const styledEdges = edges.map(e => {
      const on = e.source === sel || e.target === sel;
      return { ...e, animated: on, style: { ...e.style, opacity: on ? 1 : 0.12, strokeWidth: on ? e.style.strokeWidth + 0.6 : e.style.strokeWidth } };
    });
    return { nodes, styledEdges };
  }, [base, edges, sel]);

  const onNodeClick = useCallback((_, n) => { if (n.type === "course") setSel(s => (s === n.id ? null : n.id)); }, []);

  return (
    <div style={{ height: "calc(100vh - 118px)", background: "var(--bg)" }}>
      <ReactFlow
        nodes={nodes} edges={styledEdges} nodeTypes={nodeTypes}
        onNodeClick={onNodeClick} onPaneClick={() => setSel(null)}
        fitView minZoom={0.25} maxZoom={1.6} proOptions={{ hideAttribution: true }}
      >
        <Background gap={22} color="rgba(120,130,150,.15)" />
        <Controls showInteractive={false} />
        <MiniMap pannable zoomable nodeColor={n => (n.type === "course" ? YEAR_COLOR[n.data.y].fg : "transparent")} nodeStrokeWidth={0} maskColor="rgba(0,0,0,.06)" />
        <Panel position="top-left">
          <div className="graph-legend">
            <div className="row"><b>เส้นลูกศร:</b></div>
            {Object.entries(EDGE).map(([k, e]) => (
              <div className="row" key={k}>
                <svg width="34" height="10"><line x1="1" y1="5" x2="26" y2="5" stroke={e.stroke} strokeWidth={e.w} strokeDasharray={e.dash} /><polygon points="26,1 33,5 26,9" fill={e.stroke} /></svg>
                {e.label}
              </div>
            ))}
            <div className="row" style={{ marginTop: 6 }}><b>สีกล่อง = ชั้นปี</b></div>
            {[1, 2, 3, 4].map(y => (<div className="row" key={y}><span className="sw" style={{ background: YEAR_COLOR[y].fg }} />ปี {y}</div>))}
            <div className="hint">คลิกวิชาเพื่อไฮไลต์สายวิชาก่อน–หลัง · ลากเลื่อน/ซูมได้</div>
          </div>
        </Panel>
      </ReactFlow>
    </div>
  );
}
