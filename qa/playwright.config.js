import { defineConfig, devices } from '@playwright/test';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';

const ROOT = resolve(fileURLToPath(new URL('.', import.meta.url)), '..');

/**
 * Port 4322, not Astro's default 4321. On this machine 4321 is regularly held by an orphaned
 * `astro preview` serving a stale dist/, and a 200 from that process is indistinguishable from a
 * 200 from ours. reuseExistingServer stays false for the same reason: Playwright owns the server
 * lifecycle, so a suite can never silently measure someone else's build.
 */
const PORT = 4322;
const BASE_URL = `http://127.0.0.1:${PORT}`;

export default defineConfig({
  testDir: './specs',
  outputDir: '../test-results',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 2 : 4,
  reporter: [
    ['list'],
    // Each suite is a separate `playwright test` invocation, so a fixed filename means every run
    // overwrites the last and the aggregate reports only the final suite. run-all.mjs sets
    // PLAYWRIGHT_JSON_OUTPUT_NAME per suite; the fallback covers a direct single-suite run.
    ['json', { outputFile: process.env.PLAYWRIGHT_JSON_OUTPUT_NAME ?? './reports/raw/playwright-adhoc.json' }],
    ['html', { outputFolder: '../playwright-report', open: 'never' }],
  ],
  use: {
    baseURL: BASE_URL,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'off',
  },
  projects: [
    { name: 'functional', testDir: './specs/functional', use: { ...devices['Desktop Chrome'] } },
    { name: 'responsive', testDir: './specs/responsive', use: { ...devices['Desktop Chrome'] } },
    { name: 'a11y', testDir: './specs/a11y', use: { ...devices['Desktop Chrome'] } },
    { name: 'brand', testDir: './specs/brand', use: { ...devices['Desktop Chrome'] } },
    {
      name: 'crossbrowser-firefox',
      testDir: './specs/crossbrowser',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'crossbrowser-webkit',
      testDir: './specs/crossbrowser',
      use: { ...devices['Desktop Safari'] },
    },
  ],
  webServer: {
    command: `node node_modules/astro/astro.js preview --host 127.0.0.1 --port ${PORT}`,
    cwd: ROOT,
    url: BASE_URL,
    reuseExistingServer: false,
    timeout: 60_000,
    stdout: 'ignore',
    stderr: 'pipe',
  },
});
