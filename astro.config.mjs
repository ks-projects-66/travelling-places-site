import { resolve } from 'node:path';
import { cpSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const root = fileURLToPath(new URL('.', import.meta.url));

/**
 * Publishes brand-kit alongside the site at /brand-kit/.
 *
 * This carries forward what the old vite.config.js plugin did before the site moved to
 * Astro. The kit is a standalone page with its own CSS, fonts and JavaScript, so it is
 * copied verbatim rather than bundled. It is excluded from the sitemap: it is an internal
 * reference for people building the site, not a page for visitors.
 */
const publishBrandKit = () => ({
  name: 'publish-brand-kit',
  hooks: {
    'astro:build:done': ({ dir }) => {
      const source = resolve(root, 'brand-kit');
      const output = fileURLToPath(new URL('brand-kit/', dir));
      mkdirSync(output, { recursive: true });
      cpSync(source, output, {
        recursive: true,
        filter: (src) => !src.includes('node_modules') && !src.includes('__pycache__'),
      });
    },
  },
});

export default defineConfig({
  site: 'https://travellingplaces.com.au',
  trailingSlash: 'always',
  integrations: [
    sitemap({ filter: (page) => !page.includes('/brand-kit/') }),
    publishBrandKit(),
  ],
  build: { format: 'directory' },
  image: { responsiveStyles: true },
});
