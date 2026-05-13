import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";
import { cloudflare } from "@cloudflare/vite-plugin";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

export default defineConfig({
  plugins: [
    cloudflare(),
    tanstackStart(),
    tsConfigPaths(),
    react(),
  ],
  resolve: {
    alias: {
      "tanstack-start-server-fn-manifest:v":
        "./node_modules/@tanstack/start-server-core/dist/esm/virtual/server-fn-manifest.js",
      "tanstack-start-client-manifest:v":
        "./node_modules/@tanstack/start-server-core/dist/esm/virtual/client-manifest.js",
      "tanstack-start-injected-head-scripts:v":
        "./node_modules/@tanstack/start-server-core/dist/esm/virtual/injected-head-scripts.js",
    },
  },
});