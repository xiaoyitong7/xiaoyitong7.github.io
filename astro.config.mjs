// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// Public portfolio URL. It powers the sitemap and canonical / Open Graph URLs.
const SITE_URL = 'https://xiaoyitong7.github.io';

export default defineConfig({
  site: SITE_URL,

  integrations: [sitemap(), react()],

  // Prefetches internal links on hover/viewport entry for near-instant navigation.
  prefetch: true,

  vite: {
    plugins: [tailwindcss()],
  },

});
