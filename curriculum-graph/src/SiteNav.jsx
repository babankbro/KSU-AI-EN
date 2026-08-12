import { useEffect, useRef, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { NAV_GROUPS, findNav } from "./navConfig.js";

/* เมนูหลักแบบกลุ่ม + submenu — เปิดด้วยคลิกหรือโฟกัสคีย์บอร์ด ปิดเมื่อกดนอกพื้นที่ Escape หรือเปลี่ยนหน้า */
export default function SiteNav() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(null);
  const [pinned, setPinned] = useState(false);   // เปิดค้างเพราะคลิก ไม่ใช่แค่ hover
  const [drawer, setDrawer] = useState(false);
  const navRef = useRef(null);
  const active = findNav(pathname);

  useEffect(() => { setOpen(null); setPinned(false); setDrawer(false); }, [pathname]);

  useEffect(() => {
    if (open === null && !drawer) return;
    const onDown = e => {
      if (navRef.current && !navRef.current.contains(e.target)) { setOpen(null); setPinned(false); setDrawer(false); }
    };
    const onKey = e => { if (e.key === "Escape") { setOpen(null); setPinned(false); setDrawer(false); } };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("mousedown", onDown); document.removeEventListener("keydown", onKey); };
  }, [open, drawer]);

  return (
    <nav className="site-nav" ref={navRef} aria-label="เมนูหลัก">
      <div className="wrap nav-in">
        <button className="nav-burger" aria-expanded={drawer} aria-label="เปิดเมนู"
          onClick={() => setDrawer(v => !v)}>☰</button>

        <div className={`nav-groups${drawer ? " open" : ""}`}>
          {NAV_GROUPS.map(g => {
            if (g.solo) {
              return (
                <NavLink key={g.id} to={g.to} end={g.end}
                  className={({ isActive }) => "nav-top" + (isActive ? " active" : "")}>{g.label}</NavLink>
              );
            }
            const isOpen = open === g.id;
            const isActive = active.group?.id === g.id;
            return (
              <div key={g.id} className={`nav-group${isOpen ? " open" : ""}`}
                onMouseEnter={() => { if (!pinned) setOpen(g.id); }}
                onMouseLeave={() => { if (!pinned) setOpen(null); }}>
                <button className={`nav-top${isActive ? " active" : ""}`}
                  aria-expanded={isOpen} aria-haspopup="true"
                  onClick={() => {
                    const same = open === g.id && pinned;
                    setOpen(same ? null : g.id);
                    setPinned(!same);
                  }}>
                  {g.label}<i className="caret" aria-hidden="true">▾</i>
                </button>
                <div className="nav-menu" role="menu">
                  {g.hint && <div className="nav-menu-hint">{g.hint}</div>}
                  {g.items.map(it => (
                    <Link key={it.to} to={it.to} role="menuitem"
                      className={"nav-menu-item" + (active.item?.to === it.to ? " on" : "")}>
                      <b>{it.label}</b>
                      {it.desc && <span>{it.desc}</span>}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
