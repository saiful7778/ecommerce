import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      page: path.resolve(__dirname, "./src/pages"),
      com: path.resolve(__dirname, "./src/components"),
    },
  },
});
