import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Base "./" ให้ build ออกมาเปิดจากไฟล์/โฮสต์ย่อยได้
export default defineConfig({
  plugins: [react()],
  base: "./",
});
