import { Link } from "react-router-dom";
import { PageHead } from "./ui.jsx";

export default function NotFound() {
  return (
    <main>
      <PageHead eyebrow="404" title="ไม่พบหน้าที่ต้องการ"
        lead="ลิงก์อาจถูกเปลี่ยนแปลงหรือพิมพ์ที่อยู่ไม่ถูกต้อง" crumbs={[{ label: "ไม่พบหน้า" }]} />
      <div className="wrap">
        <p className="hint"><Link className="btn primary" to="/">กลับหน้าแรก</Link></p>
      </div>
    </main>
  );
}
