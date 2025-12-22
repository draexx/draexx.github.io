import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://pedrocarranza.com',
  base: '/',
  // No necesitas 'base' si el blog estará en pedrocarranza.com/blog
  integrations: [tailwind(), sitemap({
    filter: (page) => page !== 'https://pedrocarranza.com/gracias',
  })],
  output: 'static'
});