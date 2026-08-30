/**
 * Findings sink.
 *
 * Playwright runs specs across parallel workers, so a single shared results file would race.
 * Each test writes its own uniquely named file into qa/reports/raw/findings/ and the aggregator
 * merges them afterwards. That also means a crashed worker loses only its own findings rather
 * than truncating everyone's.
 */

import { mkdirSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { randomUUID } from 'node:crypto';

const ROOT = resolve(fileURLToPath(new URL('.', import.meta.url)), '..', '..');
export const FINDINGS_DIR = join(ROOT, 'qa', 'reports', 'raw', 'findings');

/**
 * @param {object} ctx  route, viewport, browser, suite
 * @param {Array<{id:string,severity:'fail'|'warn'|'info',detail:string}>} findings
 */
export function record(ctx, findings) {
  if (!findings || findings.length === 0) return;
  mkdirSync(FINDINGS_DIR, { recursive: true });
  const rows = findings.map((f) => ({
    suite: ctx.suite,
    route: ctx.route ?? null,
    viewport: ctx.viewport ?? null,
    browser: ctx.browser ?? null,
    id: f.id,
    severity: f.severity,
    detail: f.detail,
    expected: f.expected ?? null,
    actual: f.actual ?? null,
    source: f.source ?? null,
  }));
  writeFileSync(join(FINDINGS_DIR, `${ctx.suite}-${randomUUID()}.json`), JSON.stringify(rows, null, 2));
}

/** Only `fail` should turn a suite red. Warnings are reported, never enforced. */
export const failuresOf = (findings) => findings.filter((f) => f.severity === 'fail');

export const summarise = (findings) =>
  findings.map((f) => `${f.severity.toUpperCase()} ${f.id}: ${f.detail}`).join('\n');
