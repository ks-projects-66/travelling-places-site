import { resolve } from 'node:path';
import { cpSync } from 'node:fs';
import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  plugins: [
    {
      name: 'copy-site-assets',
      closeBundle() {
        cpSync(resolve(import.meta.dirname, 'assets'), resolve(import.meta.dirname, 'dist/assets'), { recursive: true });
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
      },
    },
  },
});
