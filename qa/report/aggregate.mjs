/**
 * Merge every runner's raw output into one machine-readable results file.
 *
 * Sources: the per-test finding files written by qa/lib/collect.js, the Playwright JSON reporter,
 * the Stylelint JSON report, and the css-analyzer report. Each keeps its own severity; nothing is
 * reclassified here.
 */

import { readFileSync, readdirSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(fileURLToPath(new URL('.', import.meta.url)), '..', '..');
const RAW = join(ROOT, 'qa', 'reports', 'raw');
const OUT = join(ROOT, 'qa', 'reports');

const readJson = (p, fallback = null) => {
  try {
    return JSON.parse(readFileSync(p, 'utf8'));
  } catch {
    return fallback;
  }
};

function collectFindings() {
  const dir = join(RAW, 'findings');
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((f) => f.endsWith('.json'))
    .flatMap((f) => readJson(join(dir, f), []));
}

function collectStylelint() {
  const report = readJson(join(RAW, 'stylelint.json'), []);
  const out = [];
  for (const file of report) {
    const rel = file.source.replace(ROOT, '').replace(/^[\\/]/, '').replace(/\\/g, '/');
    for (const w of file.warnings) {
      out.push({
        suite: 'brand',
        route: null,
        viewport: null,
        browser: null,
        id: `stylelint-${w.rule}`,
        severity: w.severity === 'error' ? 'warn' : 'info',
        detail: `${rel}:${w.line} ${w.text}`,
        expected: null,
        actual: null,
        source: `${rel}:${w.line}`,
      });
    }
  }
  return out;
}

function collectPlaywright() {
  // One file per suite: run-all.mjs writes playwright-<suite>.json so the suites do not overwrite
  // each other. A single stray playwright.json from an older run is ignored rather than merged.
  const files = existsSync(RAW)
    ? readdirSync(RAW).filter((f) => f.startsWith('playwright-') && f.endsWith('.json'))
    : [];
  const tests = [];
  if (files.length === 0) return { tests };
  const walk = (suite, trail = []) => {
    for (const spec of suite.specs || []) {
      for (const t of spec.tests || []) {
        const result = t.results?.[t.results.length - 1];
        tests.push({
          project: t.projectName,
          title: [...trail, spec.title].join(' › '),
          status: result?.status ?? 'unknown',
          expected: t.expectedStatus,
          durationMs: result?.duration ?? 0,
          error: result?.error?.message?.split('\n')[0] ?? null,
          file: spec.file,
          line: spec.line,
        });
      }
    }
    for (const child of suite.suites || []) walk(child, [...trail, child.title]);
  };
  for (const file of files) {
    const report = readJson(join(RAW, file));
    for (const suite of report?.suites || []) walk(suite, [suite.title]);
  }
  return { tests };
}

function main() {
  const findings = [
    ...collectFindings(),
    ...collectStylelint(),
    ...(readJson(join(RAW, 'css-analyzer.json'), {}).findings ?? []),
  ];
  const { tests } = collectPlaywright();

  // Deduplicate: the same defect found on nine routes at nineteen viewports is one defect with a
  // long occurrence list, not 171 findings. The report needs the count, not the repetition.
  const grouped = new Map();
  for (const f of findings) {
    const key = `${f.suite}|${f.id}|${f.detail}`;
    if (!grouped.has(key)) {
      grouped.set(key, { ...f, occurrences: [] });
    }
    grouped.get(key).occurrences.push({ route: f.route, viewport: f.viewport, browser: f.browser });
  }

  const unique = [...grouped.values()].map((f) => ({
    ...f,
    count: f.occurrences.length,
    routes: [...new Set(f.occurrences.map((o) => o.route).filter(Boolean))],
    viewports: [...new Set(f.occurrences.map((o) => o.viewport).filter(Boolean))],
    browsers: [...new Set(f.occurrences.map((o) => o.browser).filter(Boolean))],
  }));

  const severityRank = { fail: 0, warn: 1, info: 2 };
  unique.sort((a, b) => severityRank[a.severity] - severityRank[b.severity] || b.count - a.count);

  const results = {
    generatedAt: new Date().toISOString(),
    brandKitVersion: readJson(join(ROOT, 'brand-kit', 'brand.tokens.json'), {}).brand?.version ?? 'unknown',
    environment: {
      platform: process.platform,
      node: process.version,
    },
    tests: {
      total: tests.length,
      passed: tests.filter((t) => t.status === 'passed').length,
      failed: tests.filter((t) => t.status === 'failed' || t.status === 'timedOut').length,
      skipped: tests.filter((t) => t.status === 'skipped').length,
      byProject: Object.fromEntries(
        [...new Set(tests.map((t) => t.project))].map((p) => [
          p,
          {
            total: tests.filter((t) => t.project === p).length,
            failed: tests.filter((t) => t.project === p && (t.status === 'failed' || t.status === 'timedOut')).length,
          },
        ]),
      ),
      failures: tests.filter((t) => t.status === 'failed' || t.status === 'timedOut'),
    },
    findings: {
      total: unique.length,
      occurrences: findings.length,
      fail: unique.filter((f) => f.severity === 'fail').length,
      warn: unique.filter((f) => f.severity === 'warn').length,
      info: unique.filter((f) => f.severity === 'info').length,
      items: unique,
    },
  };

  mkdirSync(OUT, { recursive: true });
  writeFileSync(join(OUT, 'results.json'), JSON.stringify(results, null, 2));
  console.log(
    `aggregate — ${results.tests.total} tests (${results.tests.failed} failed), ` +
      `${results.findings.total} distinct findings from ${results.findings.occurrences} occurrences ` +
      `(${results.findings.fail} fail, ${results.findings.warn} warn, ${results.findings.info} info).`,
  );
}

main();
