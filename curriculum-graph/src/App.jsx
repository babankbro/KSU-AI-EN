import { Routes, Route, NavLink, Link, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import Home from "./pages/Home.jsx";
import Obe from "./pages/Obe.jsx";
import Structure from "./pages/Structure.jsx";
import StructureGroup from "./pages/StructureGroup.jsx";
import Plos from "./pages/Plos.jsx";
import PloDetail from "./pages/PloDetail.jsx";
import Ylos from "./pages/Ylos.jsx";
import YloDetail from "./pages/YloDetail.jsx";
import Clo from "./pages/Clo.jsx";
import Plan from "./pages/Plan.jsx";
import Courses from "./pages/Courses.jsx";
import References from "./pages/References.jsx";
import Faculty from "./pages/Faculty.jsx";
import Teaching from "./pages/Teaching.jsx";
import Assessment from "./pages/Assessment.jsx";
import KsecPedagogy from "./pages/KsecPedagogy.jsx";
import CourseDetail from "./pages/CourseDetail.jsx";
import NotFound from "./pages/NotFound.jsx";
import CodeTip from "./CodeTip.jsx";
import SiteNav from "./SiteNav.jsx";
import Sidebar from "./Sidebar.jsx";
import DependencyGraph from "./DependencyGraph.jsx";
import CareerGraph from "./CareerGraph.jsx";
const AiEngineerJobs = lazy(() => import("./pages/AiEngineerJobs.jsx"));

/* เลื่อนขึ้นบนสุดทุกครั้งที่เปลี่ยนหน้า — ยกเว้นเมื่อลิงก์ระบุ hash ไว้ (ให้หน้านั้นเลื่อนไปยังหัวข้อเอง) */
function ScrollTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => { if (!hash) window.scrollTo(0, 0); }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <div className="site">
      <ScrollTop />
      <CodeTip />
      <header className="site-head">
        <div className="wrap head-in">
          <Link to="/" className="brand">
            <span className="brand-mark">AI</span>
            <span className="brand-txt">
              <b>วิศวกรรมปัญญาประดิษฐ์และระบบอัจฉริยะ</b>
              <small>มหาวิทยาลัยกาฬสินธุ์ · หลักสูตรใหม่ พ.ศ. 2570</small>
            </span>
          </Link>
          <div className="head-chips">
            <span className="chip">125 หน่วยกิต</span>
            <span className="chip">PLO 7 ข้อ</span>
            <span className="chip">4 ชั้นปี</span>
          </div>
        </div>
      </header>

      <SiteNav />

      <div className="shell">
        <Sidebar />
        <div className="shell-main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/obe" element={<Obe />} />
        <Route path="/structure" element={<Structure />} />
        <Route path="/structure/:id" element={<StructureGroup />} />
        <Route path="/plo" element={<Plos />} />
        <Route path="/plo/:id" element={<PloDetail />} />
        <Route path="/ylo" element={<Ylos />} />
        <Route path="/ylo/:id" element={<YloDetail />} />
        <Route path="/clo" element={<Clo />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/graph" element={<DependencyGraph />} />
        <Route path="/careers" element={<CareerGraph />} />
        <Route path="/jobs" element={
          <Suspense fallback={<main><div className="wrap"><div className="note">กำลังโหลดข้อมูลตลาดงาน…</div></div></main>}>
            <AiEngineerJobs />
          </Suspense>
        } />
        <Route path="/jobs/ai-engineer" element={
          <Suspense fallback={<main><div className="wrap"><div className="note">กำลังโหลดข้อมูลตลาดงาน…</div></div></main>}>
            <AiEngineerJobs />
          </Suspense>
        } />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:code" element={<CourseDetail />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/teaching" element={<Teaching />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/ksec-pedagogy" element={<KsecPedagogy />} />
        <Route path="/refs" element={<References />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
        </div>
      </div>

      <footer className="site-foot">
        <div className="wrap">
          <div>
            <b>หลักสูตรวิศวกรรมศาสตรบัณฑิต สาขาวิชาวิศวกรรมปัญญาประดิษฐ์และระบบอัจฉริยะ</b><br />
            คณะวิศวกรรมศาสตร์และเทคโนโลยีอุตสาหกรรม มหาวิทยาลัยกาฬสินธุ์
          </div>
          <div className="foot-note">
            ข้อมูลอ้างอิงจากเอกสาร OBE และคำอธิบายรายวิชาฉบับ พ.ศ. 2570 —
            เป็นร่างเพื่อพิจารณา ยังไม่ใช่ฉบับที่ผ่านการอนุมัติจากสภามหาวิทยาลัย
          </div>
        </div>
      </footer>
    </div>
  );
}
