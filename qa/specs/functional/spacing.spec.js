import { test, expect } from '@playwright/test';
import { FUNCTIONAL } from '../../viewports.js';
import { ROUTES } from '../../routes.js';

const viewport = FUNCTIONAL[0];

/**
 * No inline element glued to the word beside it.
 *
 * Astro's HTML compression drops a literal space that sits between an `{expression}` and a tag, so
 * "consultants on <a>07 5545 1600</a> to discuss" shipped as "on07 5545 1600to" on every page until
 * the owner spotted it (25 October 2026). The fix is an explicit {' '}; this test finds the next one
 * wherever it appears, rather than checking the one sentence that broke.
 *
 * A neighbour that is a letter or digit with no space between it and the inline element is a
 * failure. Punctuation (a full stop after a link, an opening bracket before one) is fine.
 */
for (const route of ROUTES) {
  test(`inline elements keep their spaces on ${route}`, async ({ page }) => {
    await page.setViewportSize(viewport);
    await page.goto(route);
    const glued = await page.evaluate(() => {
      const found = [];
      const inline = document.querySelectorAll('main a, main strong, main em, main time, footer a');
      for (const el of inline) {
        if (getComputedStyle(el).display !== 'inline') continue;
        const before = el.previousSibling;
        const after = el.nextSibling;
        const prev = before?.nodeType === Node.TEXT_NODE ? before.textContent : '';
        const next = after?.nodeType === Node.TEXT_NODE ? after.textContent : '';
        const own = el.textContent.trim();
        if (!own) continue;
        if (/[\p{L}\p{N}]$/u.test(prev) || /^[\p{L}\p{N}]/u.test(next)) {
          found.push(`${prev.slice(-20)}[${own.slice(0, 30)}]${next.slice(0, 20)}`);
        }
      }
      return found;
    });
    expect(glued, `glued inline text on ${route}`).toEqual([]);
  });
}
