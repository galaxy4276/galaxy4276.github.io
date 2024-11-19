import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "node:path";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), svgr({ include:"**/*.svg" }) ],
  base: '/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
