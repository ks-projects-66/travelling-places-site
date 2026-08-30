/**
 * Routes, discovered from the build rather than hand-listed, so a new page is tested the moment
 * it exists. Discovery failure is loud: if the nine known routes are not all present, this throws
 * rather than quietly running a shorter suite.
 *
 * The site sets trailingSlash: 'always', so every path here ends in a slash except 404.html.
 */

import { readdirSync, existsSync } from 'node:fs';
import { join, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(fileURLToPath(new URL('.', import.meta.url)), '..');
const DIST = join(ROOT, 'dist');

/** Published but not part of the site: the kit reference page and the CMS shell. */
const EXCLUDED = ['brand-kit', 'admin'];

const REQUIRED = [
  '/',
  '/expertise/',
  '/virtuoso/',
  '/contact/',
  '/who-we-are/',
  '/journal/',
  '/journal/looking-south-to-antarctica/',
  '/privacy/',
  '/404.html',
];

function walk(dir, found = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (EXCLUDED.includes(entry.name) || entry.name.startsWith('_')) continue;
      walk(full, found);
    } else if (entry.name === 'index.html' || entry.name === '404.html') {
      found.push(full);
    }
  }
  return found;
}

export function discoverRoutes() {
  if (!existsSync(DIST)) {
    throw new Error('qa/routes.js: no dist/ found. Run `pnpm build` before any test suite.');
  }

  const routes = walk(DIST)
    .map((file) => {
      const rel = file.slice(DIST.length).split(sep).join('/');
      return rel.endsWith('/index.html') ? rel.slice(0, -'index.html'.length) || '/' : rel;
    })
    .sort();

  const missing = REQUIRED.filter((r) => !routes.includes(r));
  if (missing.length) {
    throw new Error(
      `qa/routes.js: discovery found ${routes.length} routes but is missing ${missing.join(', ')}. ` +
        'Either the build is stale or a page was removed. Not running a shorter suite silently.',
    );
  }
  return routes;
}

export const ROUTES = discoverRoutes();

/** A short, stable id for report keys and screenshot filenames. */
export const routeId = (route) =>
  route === '/' ? 'home' : route.replace(/^\/|\/$/g, '').replace(/\//g, '-').replace(/\.html$/, '');

/**
 * Only one journal entry has a route of its own. The other four carry an externalUrl in their
 * frontmatter and render as outbound links, so there is no second article page to test.
 */
export const ARTICLE_ROUTE = '/journal/looking-south-to-antarctica/';
