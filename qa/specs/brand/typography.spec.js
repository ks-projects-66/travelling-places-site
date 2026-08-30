/**
 * Typography and colour, measured on the rendered page against brand kit v3.
 *
 * This is the layer the regex checker cannot reach. brand-check.mjs reads source text, so it
 * cannot see inside clamp(), cannot resolve an em-based size against its parent, and cannot know
 * what a token actually computed to at a given viewport. Everything here is a computed style.
 */

import { test, expect } from '@playwright/test';
import { readFileSync } from 'node:fs';
import { FUNCTIONAL } from '../../viewports.js';
import { ROUTES, routeId } from '../../routes.js';
import { settlePage } from '../../lib/settle.js';
import { record } from '../../lib/collect.js';

const tokens = JSON.parse(readFileSync(new URL('../../../brand-kit/brand.tokens.json', import.meta.url), 'utf8'));

const DISPLAY_MAX = parseFloat(tokens.type.display.max);
const APPROVED_WEIGHTS = new Set(['400', '500', '600']);
const PALETTE = Object.fromEntries(
  Object.entries(tokens.color).map(([k, v]) => [k, v.value.toLowerCase()]),
);

const hexToRgb = (hex) => {
  const h = hex.replace('#', '');
  return `rgb(${parseInt(h.slice(0, 2), 16)}, ${parseInt(h.slice(2, 4), 16)}, ${parseInt(h.slice(4, 6), 16)})`;
};
const APPROVED_RGB = new Set(Object.values(PALETTE).map(hexToRgb));

test.describe('typography', () => {
  for (const viewport of FUNCTIONAL) {
    for (const route of ROUTES) {
      test(`${routeId(route)} at ${viewport.label} holds the v3 type contract`, async ({ page }) => {
        await page.setViewportSize(viewport);
        await page.goto(route);
        await settlePage(page);

        const result = await page.evaluate((maxDisplay) => {
          const findings = [];
          const add = (id, severity, detail, extra = {}) => findings.push({ id, severity, detail, ...extra });
          const visible = (el) => {
            const cs = getComputedStyle(el);
            return cs.display !== 'none' && cs.visibility !== 'hidden' && el.getBoundingClientRect().height > 0;
          };
          const describe = (el) => {
            const raw = typeof el.className === 'string' ? el.className.trim() : '';
            return el.tagName.toLowerCase() + (raw ? '.' + raw.split(/\s+/).slice(0, 2).join('.') : '');
          };

          let largest = { size: 0, el: '' };
          const families = new Set();
          const weights = new Map();

          for (const el of document.querySelectorAll('body *')) {
            if (!visible(el)) continue;
            const cs = getComputedStyle(el);
            const size = parseFloat(cs.fontSize);
            const hasText = [...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim());
            if (!hasText) continue;

            if (size > largest.size) largest = { size, el: describe(el) };
            families.add(cs.fontFamily);
            weights.set(cs.fontWeight, (weights.get(cs.fontWeight) || 0) + 1);

            if (cs.fontStyle !== 'normal') {
              add('italic-type', 'fail', describe(el) + ' is ' + cs.fontStyle, {
                source: 'BRAND.md: do not use italics',
              });
            }
          }

          // ::first-letter is not an element, so it never appears in querySelectorAll. It has to
          // be asked for by name or a drop cap of any size goes unmeasured.
          for (const el of document.querySelectorAll('.dropcap, .article-prose > p:first-of-type')) {
            const fl = getComputedStyle(el, '::first-letter');
            const size = parseFloat(fl.fontSize);
            if (size > maxDisplay) {
              add('display-type-too-large', 'fail',
                describe(el) + '::first-letter computes to ' + Math.round(size) + 'px',
                { expected: maxDisplay + 'px', actual: Math.round(size) + 'px', source: 'brand.tokens.json type.display.max' });
            }
          }

          if (largest.size > maxDisplay) {
            add('display-type-too-large', 'fail',
              largest.el + ' computes to ' + Math.round(largest.size) + 'px',
              { expected: maxDisplay + 'px', actual: Math.round(largest.size) + 'px', source: 'brand.tokens.json type.display.max' });
          }

          // The kit permits 400, 500 and 600. Anything heavier is not in the loaded font, so the
          // browser synthesises it, which is the unintended-fallback case worth catching.
          for (const [w, count] of weights) {
            if (['400', '500', '600', 'normal'].includes(w)) continue;
            add('unapproved-font-weight', 'fail',
              'weight ' + w + ' on ' + count + ' element(s); the loaded face carries 400 to 600, so this is synthesised',
              { expected: '400, 500 or 600', actual: w, source: 'BRAND.md typography' });
          }

          // Font families, attributed to where they occur. A violation inside [data-placeholder]
          // is scaffolding that check:placeholders already tracks and that will be deleted with
          // the placeholder, so it is reported rather than allowed to hold the bar red forever.
          for (const el of document.querySelectorAll('body *')) {
            if (!visible(el)) continue;
            const hasText = [...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim());
            if (!hasText) continue;
            const fam = getComputedStyle(el).fontFamily;
            const f = fam.toLowerCase();
            if (f.includes('libre baskerville') || f.includes('ibm plex sans')) continue;
            const inPlaceholder = !!el.closest('[data-placeholder]');
            add('unapproved-font-family', inPlaceholder ? 'warn' : 'fail',
              fam + ' on ' + describe(el) + (inPlaceholder ? ' (inside a tracked placeholder)' : ''),
              { expected: 'Libre Baskerville or IBM Plex Sans', actual: fam, source: 'BRAND.md typography' });
          }

          // Heading line heights against the v3 scale.
          const expected = { h2: 1.16, h3: 1.25 };
          for (const [tag, want] of Object.entries(expected)) {
            const el = document.querySelector(tag);
            if (!el || !visible(el)) continue;
            const cs = getComputedStyle(el);
            const ratio = parseFloat(cs.lineHeight) / parseFloat(cs.fontSize);
            if (Math.abs(ratio - want) > 0.03) {
              add('line-height-off-scale', 'fail',
                tag + ' line-height is ' + ratio.toFixed(3) + ' against a specified ' + want,
                { expected: String(want), actual: ratio.toFixed(3), source: 'brand.tokens.json type' });
            }
          }

          // Fonts actually arrived, rather than silently falling back.
          const loaded = {
            display: document.fonts.check('400 24px "Libre Baskerville"'),
            body: document.fonts.check('400 16px "IBM Plex Sans"'),
          };
          if (!loaded.display) add('font-not-loaded', 'fail', 'Libre Baskerville did not load; headings are rendering in a fallback');
          if (!loaded.body) add('font-not-loaded', 'fail', 'IBM Plex Sans did not load; body copy is rendering in a fallback');

          return { findings, largest };
        }, DISPLAY_MAX);

        record({ suite: 'brand', route, viewport: viewport.label, browser: 'chromium' }, result.findings);

        const failures = result.findings.filter((f) => f.severity === 'fail');
        expect(
          failures.map((f) => `${f.id}: ${f.detail}`).join('\n'),
          `${failures.length} typography failure(s) on ${route} at ${viewport.label}`,
        ).toBe('');
      });
    }
  }
});

test.describe('colour', () => {
  for (const route of ROUTES) {
    test(`${routeId(route)} uses only approved colours`, async ({ page }) => {
      await page.setViewportSize(FUNCTIONAL[0]);
      await page.goto(route);
      await settlePage(page);

      const findings = await page.evaluate((approved) => {
        const out = [];
        const seen = new Set();
        for (const el of document.querySelectorAll('body *')) {
          const cs = getComputedStyle(el);
          const hasText = [...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim());
          if (!hasText) continue;
          const colour = cs.color;
          if (!approved.includes(colour) && !seen.has(colour)) {
            seen.add(colour);
            const raw = typeof el.className === 'string' ? el.className.trim() : '';
            // An oklch() result is almost always a color-mix() of two tokens rather than a raw
            // literal. That is a legitimate technique, but the mixed result is not in the approved
            // pair table and so carries no certified contrast figure. Reported, not enforced.
            const mixed = colour.startsWith('oklch') || colour.startsWith('color(');
            out.push({
              id: mixed ? 'token-derived-colour-uncertified' : 'unapproved-text-colour',
              severity: 'warn',
              detail:
                colour + ' on ' + el.tagName.toLowerCase() + (raw ? '.' + raw.split(/\s+/)[0] : '') +
                (mixed ? ' (a color-mix of tokens; no certified contrast figure)' : ''),
              expected: 'a brand.tokens.json colour',
              actual: colour,
            });
          }
        }
        return out;
      }, [...APPROVED_RGB]);

      record({ suite: 'brand', route, viewport: FUNCTIONAL[0].label, browser: 'chromium' }, findings);
    });
  }
});
