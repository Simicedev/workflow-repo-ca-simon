// @ts-check
import { defineConfig } from "@playwright/test";
import path from "path";

export default defineConfig({
  testDir: path.join(process.cwd(), "tests", "e2e"),
  timeout: 30 * 1000,
  use: {
    baseURL: "http://localhost:5173", // Adjust if using a different dev server port
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
  webServer: {
    command: "npm run dev",
    port: 5173,
    reuseExistingServer: !process.env.CI,
  },
});
