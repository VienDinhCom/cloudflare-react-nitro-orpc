// @ts-check
import { defineConfig } from "@esmate/prettier";

export default defineConfig({
  tailwind: {
    tailwindFunctions: ["cn"],
    tailwindStylesheet: "src/frontend/assets/styles/global.css",
  },
  ignores: [
    "./src/backend/database/migrations/**/*",
    "./src/frontend/lib/tanstack/router.ts",
    "./src/backend/lib/types/cloudflare.d.ts",
  ],
});
