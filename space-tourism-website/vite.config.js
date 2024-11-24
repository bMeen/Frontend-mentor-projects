import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-eslint-plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
});
