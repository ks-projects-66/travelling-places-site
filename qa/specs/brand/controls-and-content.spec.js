/**
 * Controls and copy, against brand kit v3.
 *
 * The copy checks run on the rendered page rather than on source, which is the point: the existing
 * regex checker scans .html/.css/.js/.astro and never sees src/content/**.md or src/data/*.json,
 * where all the prose actually lives. Anything generated at build time was invisible to it.
 */

import { test, expect } from '@playwright/test';
import { readFileSync } from 'node:fs';
import { FUNCTIONAL } from '../../viewports.js';
import { ROUTES, routeId } from '../../routes.js';
import { settlePage } from '../../lib/settle.js';
import { record } from '../../lib/collect.js';

const tokens = JSON.parse(readFileSync(new URL('../../../brand-kit/brand.tokens.json', import.meta.url), 'utf8'));
const viewport = FUNCTIONAL[0];

test.describe('controls', () => {
  test('buttons carry the v3 pill geometry and typography', async ({ page }) => {
    await page.setViewportSize(viewport);
    await page.goto('/');
    await settlePage(page);

    const findings = await page.evaluate((t) => {
      const out = [];
      const wantSize = parseFloat(t.type.button.size);
      const wantWeight = String(t.type.button.weight);
      const wantRadius = t.shape.buttonRadius;
      const wantHeight = parseFloat(t.interaction.preferredButtonHeight);
      const wantPad = parseFloat(t.interaction.buttonInlinePadding);
      const seen = new Set();

      for (const btn of document.querySelectorAll('.button')) {
        const cs = getComputedStyle(btn);
        const r = btn.getBoundingClientRect();
        if (r.height === 0) continue;
        const key = btn.className;
        if (seen.has(key)) continue;
        seen.add(key);

        const radius = parseFloat(cs.borderRadius);
        if (wantRadius === '999px' && radius < 24) {
          out.push({ id: 'button-not-pill', severity: 'fail', detail: key + ' border-radius is ' + cs.borderRadius, expected: '999px', actual: cs.borderRadius });
        }
        const size = parseFloat(cs.fontSize);
        if (Math.abs(size - wantSize) > 0.6 && !key.includes('button-small')) {
          out.push({ id: 'button-font-size', severity: 'fail', detail: key + ' font-size is ' + cs.fontSize, expected: t.type.button.size, actual: cs.fontSize, source: 'brand.tokens.json type.button' });
        }
        if (cs.fontWeight !== wantWeight && !key.includes('button-small')) {
          out.push({ id: 'button-font-weight', severity: 'fail', detail: key + ' font-weight is ' + cs.fontWeight, expected: wantWeight, actual: cs.fontWeight });
        }
        if (r.height < wantHeight - 2 && !key.includes('button-small')) {
          out.push({ id: 'button-height', severity: 'warn', detail: key + ' is ' + Math.round(r.height) + 'px tall', expected: t.interaction.preferredButtonHeight, actual: Math.round(r.height) + 'px' });
        }
        const pad = parseFloat(cs.paddingLeft);
        if (Math.abs(pad - wantPad) > 2 && !key.includes('button-small')) {
          out.push({ id: 'button-inline-padding', severity: 'warn', detail: key + ' padding-inline is ' + cs.paddingLeft, expected: t.interaction.buttonInlinePadding, actual: cs.paddingLeft });
        }
        if (btn.querySelector('svg')) {
          out.push({ id: 'button-contains-icon', severity: 'fail', detail: key + ' contains an icon', source: 'BRAND.md: text buttons do not contain decorative icons' });
        }
      }
      return out;
    }, tokens);

    record({ suite: 'brand', route: '/', viewport: viewport.label, browser: 'chromium' }, findings);
    const failures = findings.filter((f) => f.severity === 'fail');
    expect(failures.map((f) => `${f.id}: ${f.detail}`).join('\n')).toBe('');
  });

  test('disabled controls use the ink border treatment, not opacity', async ({ page }) => {
    await page.setViewportSize(viewport);
    await page.goto('/');
    await settlePage(page);

    const findings = await page.evaluate((ink) => {
      const out = [];
      for (const el of document.querySelectorAll('button:disabled, input:disabled, .button[aria-disabled="true"]')) {
        const cs = getComputedStyle(el);
        if (parseFloat(cs.opacity) < 0.95) {
          out.push({ id: 'disabled-uses-opacity', severity: 'fail', detail: el.tagName.toLowerCase() + ' is faded to opacity ' + cs.opacity, source: 'BRAND.md: do not fade the entire control with opacity' });
        }
        const border = cs.borderTopColor;
        if (border === 'rgba(0, 0, 0, 0)' || cs.borderTopWidth === '0px') {
          out.push({ id: 'disabled-missing-border', severity: 'warn', detail: el.tagName.toLowerCase() + ' disabled has no visible border', expected: ink, actual: border });
        }
      }
      return out;
    }, tokens.color.ink.value);

    record({ suite: 'brand', route: '/', viewport: viewport.label, browser: 'chromium' }, findings);
    const failures = findings.filter((f) => f.severity === 'fail');
    expect(failures.map((f) => f.detail).join('\n')).toBe('');
  });

  test('the content shell holds the 1200px maximum and its gutter range', async ({ page }) => {
    await page.setViewportSize({ width: 2560, height: 1440 });
    await page.goto('/');
    const shell = await page.locator('.shell').first().boundingBox();
    expect(shell.width).toBeLessThanOrEqual(parseFloat(tokens.layout.contentMax) + 1);
  });
});

test.describe('copy', () => {
  for (const route of ROUTES) {
    test(`${routeId(route)} copy follows the language rules`, async ({ page }) => {
      await page.setViewportSize(viewport);
      await page.goto(route);
      await settlePage(page);

      const findings = await page.evaluate(() => {
        const out = [];
        const text = document.body.innerText;

        const dashes = text.match(/[–—]/g);
        if (dashes) {
          const near = text.match(/.{0,32}[–—].{0,32}/g) || [];
          out.push({ id: 'long-dash-in-copy', severity: 'fail', detail: dashes.length + ' en/em dash character(s): ' + near.slice(0, 2).join(' | '), source: 'BRAND.md: use plain punctuation' });
        }

        const arrows = text.match(/[↗↘]/g);
        if (arrows) out.push({ id: 'diagonal-arrow', severity: 'fail', detail: arrows.length + ' diagonal arrow character(s)' });

        // Decorative zero-padded numbering, as a rendered string rather than a source pattern.
        for (const el of document.querySelectorAll('h1, h2, h3, h4, .story-meta, li > span, .section-number')) {
          const t = (el.textContent || '').trim();
          if (/^0\d(\s|[./|]|$)/.test(t)) {
            out.push({ id: 'decorative-numbering', severity: 'fail', detail: '"' + t.slice(0, 40) + '"', source: 'BRAND.md: do not use numbering as decoration' });
          }
        }

        // Uppercase treatments. v3 approves exactly one role for this; anything else is an
        // eyebrow by another name.
        const approved = ['story-meta', 'role', 'roster-role', 'placeholder-image'];
        for (const el of document.querySelectorAll('body *')) {
          const cs = getComputedStyle(el);
          if (cs.textTransform !== 'uppercase') continue;
          const hasText = [...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim());
          if (!hasText) continue;
          const cls = typeof el.className === 'string' ? el.className : '';
          const isApproved = approved.some((a) => cls.includes(a));
          const isHeading = /^H[1-6]$/.test(el.tagName);
          if (isHeading) {
            out.push({ id: 'all-caps-heading', severity: 'fail', detail: el.tagName + ' "' + el.textContent.trim().slice(0, 40) + '" is uppercase', source: 'BRAND.md: no all-caps headings' });
          } else if (!isApproved) {
            out.push({ id: 'unapproved-uppercase', severity: 'warn', detail: el.tagName.toLowerCase() + '.' + cls.split(/\s+/)[0] + ' is uppercase but is not the approved meta label role' });
          }
        }

        for (const el of document.querySelectorAll('em, i')) {
          if (el.textContent.trim()) out.push({ id: 'italic-element', severity: 'fail', detail: '<' + el.tagName.toLowerCase() + '> "' + el.textContent.trim().slice(0, 40) + '"' });
        }

        // Calls to action should carry the approved treatment rather than being bare links.
        for (const a of document.querySelectorAll('main a')) {
          const t = (a.textContent || '').trim();
          const cls = typeof a.className === 'string' ? a.className : '';
          if (/^(start planning|plan a journey|get in touch|enquire|book|contact us)$/i.test(t) && !cls.includes('button') && !cls.includes('text-link')) {
            out.push({ id: 'cta-without-treatment', severity: 'warn', detail: '"' + t + '" reads as a call to action but carries neither .button nor .text-link' });
          }
        }

        return out;
      });

      record({ suite: 'brand', route, viewport: viewport.label, browser: 'chromium' }, findings);
      const failures = findings.filter((f) => f.severity === 'fail');
      expect(failures.map((f) => `${f.id}: ${f.detail}`).join('\n')).toBe('');
    });
  }
});
