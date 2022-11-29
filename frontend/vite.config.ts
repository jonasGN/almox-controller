import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

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
  plugins: [react()],
  server: {
    host: true, // needed for the Docker Container port mapping to work
    port: 5173, // default port
    strictPort: true,
  },
});
