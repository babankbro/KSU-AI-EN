import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./styles.css";

// หมายเหตุ: ไม่ใช้ <React.StrictMode> เพราะกราฟวัด layout จาก dagre ครั้งเดียวตอน mount
// การ mount/unmount ซ้ำของ StrictMode ทำให้ค่าตำแหน่งถูกคำนวณซ้ำโดยไม่จำเป็น
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
