import { resolve } from 'node:path';
import { cpSync, mkdirSync } from 'node:fs';
import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  plugins: [
    {
      name: 'copy-site-assets',
      closeBundle() {
        cpSync(resolve(import.meta.dirname, 'assets'), resolve(import.meta.dirname, 'dist/assets'), { recursive: true });
        const brandSource = resolve(import.meta.dirname, 'brand-kit-v2');
        const brandOutput = resolve(import.meta.dirname, 'dist/brand-kit-v2');
        mkdirSync(brandOutput, { recursive: true });
        for (const file of ['AGENT-BRIEF.md', 'BRAND.md', 'COMPONENTS.md', 'QA.md', 'README.md', 'SOURCES.md', 'brand.tokens.json']) {
          cpSync(resolve(brandSource, file), resolve(brandOutput, file));
        }
        for (const directory of ['assets', 'components', 'fonts', 'licenses', 'scripts', 'styles']) {
          cpSync(resolve(brandSource, directory), resolve(brandOutput, directory), { recursive: true });
        }
      },
    },
  ],
  build: {
    rollupOptions: {
      input: {
        home: resolve(import.meta.dirname, 'index.html'),
        expertise: resolve(import.meta.dirname, 'expertise.html'),
        virtuoso: resolve(import.meta.dirname, 'virtuoso.html'),
        team: resolve(import.meta.dirname, 'who-we-are.html'),
        journal: resolve(import.meta.dirname, 'journal.html'),
        article: resolve(import.meta.dirname, 'article-antarctica.html'),
        contact: resolve(import.meta.dirname, 'contact.html'),
        brandKit: resolve(import.meta.dirname, 'brand-kit-v2/index.html'),
      },
    },
  },
});
