import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import pluginRewriteAll from "vite-plugin-rewrite-all";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), pluginRewriteAll()],
  resolve: {
    alias: {
      "@constants": path.resolve(__dirname, "./src/constants"),
      "@remote": path.resolve(__dirname, "./src/remote"),
      "@hooks": path.resolve(__dirname, "./src/shared/hooks"),
      "@icons": path.resolve(__dirname, "./src/assets/icons.manifest"),
      "@imgs": path.resolve(__dirname, "./src/assets/imgs.manifest"),
      "@components": path.resolve(__dirname, "./src/shared/components"),
      "@types": path.resolve(__dirname, "./src/types"),
      "@store": path.resolve(__dirname, "./src/store"),
      "@utils": path.resolve(__dirname, "./src/shared/utils"),
    },
  },
});
