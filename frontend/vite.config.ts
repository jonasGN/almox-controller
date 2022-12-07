import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: "@",
        replacement: "/src",
      },
    ],
  },
  plugins: [react(), svgr()],
  server: {
    host: true, // needed for the Docker Container port mapping to work
    port: 5173, // default port
    strictPort: true,
  },
});
