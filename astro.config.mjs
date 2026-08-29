import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://travellingplaces.com.au',
  trailingSlash: 'always',
  integrations: [sitemap()],
  build: { format: 'directory' },
  image: { responsiveStyles: true },
});
