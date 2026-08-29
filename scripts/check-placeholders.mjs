#!/usr/bin/env node
/**
 * Lists every placeholder still present in the built site.
 *
 *   pnpm build && pnpm check:placeholders
 *
 * Reports rather than fails, because during development placeholders are the correct
 * state. Pass --strict to exit 1 when any remain, which is what a production deploy
 * should use once content is complete.
 */

import { readFile, readdir } from 'node:fs/promises';
import { join, relative } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
const DIST = join(ROOT, 'dist');
const strict = process.argv.includes('--strict');

async function walk(dir) {
  const out = [];
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    console.error('check:placeholders — no dist/ found. Run `pnpm build` first.');
    process.exit(1);
  }
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else if (entry.name.endsWith('.html')) out.push(full);
  }
  return out;
}

const pages = await walk(DIST);
const findings = [];

for (const page of pages) {
  const html = await readFile(page, 'utf8');
  const route = '/' + relative(DIST, page).replace(/\\/g, '/').replace(/index\.html$/, '');

  // Marked placeholder elements.
  const marked = (html.match(/data-placeholder/g) || []).length;

  // Any TODO string that reached the rendered output.
  const todos = [...html.matchAll(/TODO:?\s*([^<"&]{0,80})/g)].map((m) => m[1].trim());

  if (marked || todos.length) findings.push({ route, marked, todos: [...new Set(todos)] });
}

const totalMarked = findings.reduce((n, f) => n + f.marked, 0);
const totalTodos = findings.reduce((n, f) => n + f.todos.length, 0);

console.log(`check:placeholders — ${pages.length} pages, ${totalMarked} marked placeholders, ${totalTodos} distinct TODO strings.\n`);

for (const f of findings) {
  console.log(`${f.route}  (${f.marked} marked)`);
  for (const todo of f.todos) console.log(`    TODO: ${todo}`);
}

console.log('\nEvery item above should have a row in docs/CONTENT-REGISTER.md and in the go-live workbook.');

if (strict && findings.length) {
  console.error('\nFAIL — placeholders remain and --strict was passed.');
  process.exit(1);
}
process.exit(0);
