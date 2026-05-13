import pkg from "@lovable.dev/vite-tanstack-config";
const { lovable } = pkg;
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [lovable()],
});
