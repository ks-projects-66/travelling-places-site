#!/usr/bin/env node
/**
 * Fails if an image marked `unlicensed` in src/assets/images/MANIFEST.md is still
 * referenced anywhere in src/. This is the gate that stops the nine Virtuoso-sourced
 * photographs reaching production through inattention.
 *
 *   pnpm check:licensing
 *
 * Exits 1 on a violation, 0 when clean. Wire it into the Cloudflare Pages build command
 * once replacement imagery exists: `pnpm check:licensing && pnpm build`.
 */

import { readFile, readdir } from 'node:fs/promises';
import { join, relative } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
const MANIFEST = join(ROOT, 'src/assets/images/MANIFEST.md');
// The kit publishes with the site, so it is gated too.
const SEARCH_ROOTS = [join(ROOT, 'src'), join(ROOT, 'brand-kit')];

const SKIP_DIRS = new Set(['node_modules', 'dist', '.astro', '.git']);
const TEXT_EXT = /\.(astro|ts|tsx|js|mjs|json|md|css|html)$/;

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(entry.name)) continue;
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else if (TEXT_EXT.test(entry.name)) out.push(full);
  }
  return out;
}

function parseManifest(markdown) {
  const rows = [];
  for (const line of markdown.split('\n')) {
    if (!line.trimStart().startsWith('|')) continue;
    const cells = line.split('|').map((c) => c.trim());
    // | file | subject | source | status | approved by | used on |
    const file = cells[1]?.replace(/^`|`$/g, '');
    const status = cells[4]?.toLowerCase();
    if (!file || !status) continue;
    if (file.startsWith('_') || file === 'File') continue;
    rows.push({ file, status });
  }
  return rows;
}

const manifest = parseManifest(await readFile(MANIFEST, 'utf8'));
const unlicensed = manifest.filter((row) => row.status === 'unlicensed');

if (manifest.length === 0) {
  console.error('check:licensing — no rows parsed from MANIFEST.md. Has its table format changed?');
  process.exit(1);
}

const files = (await Promise.all(SEARCH_ROOTS.map(walk))).flat();
const contents = new Map();
for (const file of files) contents.set(file, await readFile(file, 'utf8'));

const violations = [];
for (const { file } of unlicensed) {
  // Match on path, never on bare filename. The kit vendors copies of three
  // destination photographs under the same basenames, and a loose match reports
  // every reference twice, against the wrong row.
  const candidates = [file];
  if (file.startsWith('brand-kit/')) candidates.push(file.slice('brand-kit/'.length));
  for (const [path, text] of contents) {
    if (path.endsWith('MANIFEST.md') || path.endsWith('SOURCES.md')) continue;
    if (candidates.some((candidate) => text.includes(candidate))) {
      violations.push({ image: file, referencedBy: relative(ROOT, path).replace(/\\/g, '/') });
    }
  }
}

console.log(`check:licensing — ${manifest.length} images in manifest, ${unlicensed.length} unlicensed.`);

if (violations.length === 0) {
  console.log('PASS — no unlicensed image is referenced from src/.');
  process.exit(0);
}

console.error('');
console.error(`FAIL — ${violations.length} reference(s) to unlicensed imagery:`);
for (const v of violations) console.error(`  ${v.image}  <-  ${v.referencedBy}`);
console.error('');
console.error('These images were saved from virtuoso.com for a private draft and hold no licence.');
console.error('Replace them, or update MANIFEST.md once a licence is actually held.');
console.error('See src/assets/images/MANIFEST.md, "Replacing the unlicensed set".');
process.exit(1);
