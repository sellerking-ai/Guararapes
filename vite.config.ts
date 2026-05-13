import { defineConfig } from "vite";
import { lovable } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  plugins: [lovable()],
});
