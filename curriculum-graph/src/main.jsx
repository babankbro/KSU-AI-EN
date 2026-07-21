import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";

// หมายเหตุ: ไม่ใช้ <React.StrictMode> เพราะ React Flow v11 + React 18 StrictMode
// จะ mount/unmount ซ้ำจน handleBounds ถูกล้าง ทำให้เส้นเชื่อม (edges) ไม่ถูกวาด
createRoot(document.getElementById("root")).render(<App />);
