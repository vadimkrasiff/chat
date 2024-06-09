import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "ui-kit": new URL("./src/ui-kit", import.meta.url).pathname,
      api: new URL("./src/api", import.meta.url).pathname,
      actions: new URL("./src/actions", import.meta.url).pathname,
      core: new URL("./src/core", import.meta.url).pathname,
      Helpers: new URL("./src/Helpers", import.meta.url).pathname,
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        rewrite: (path) => {
          return path.replace(/^\/api/, "");
        },
      },
    },
  },
  plugins: [react()],
});
