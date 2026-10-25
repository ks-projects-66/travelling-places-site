/**
 * Unlighthouse: Lighthouse across every route in one report. Run with `pnpm qa:lighthouse`.
 *
 * Report-only. No budget is set, because the first run is a baseline rather than a standard. When
 * a budget is introduced it should be set from measured scores after fixes, never lowered to make
 * a red run pass (see qa/README.md on thresholds).
 */

import { existsSync } from 'node:fs';
import { chromium } from 'playwright';

// Puppeteer would otherwise download its own Chrome. The Chromium Playwright already manages is
// the same engine the rest of the suite measures, so reuse it. CHROME_PATH overrides, for machines
// whose Playwright browser build differs from the one the pinned Playwright expects.
const executablePath = [process.env.CHROME_PATH, chromium.executablePath()].find((p) => p && existsSync(p));
if (!executablePath) {
  throw new Error(
    'qa/lighthouse: no Chromium found. Run `pnpm exec playwright install chromium`, or set CHROME_PATH.',
  );
}

export default {
  puppeteerOptions: { executablePath },
  chrome: { useSystem: false, useDownloadFallback: false },
  scanner: {
    // Routes are passed explicitly by run.mjs from qa/routes.js, so the crawler and sitemap stay
    // off and the brand-kit reference page and CMS shell are never scored as site pages.
    crawler: false,
    sitemap: false,
    robotsTxt: false,
    dynamicSampling: false,
    samples: 3,
  },
};
