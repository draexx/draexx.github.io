import { createRequire } from 'node:module';
import path from 'node:path';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const require = createRequire(import.meta.url);
const astroServerAppEntry = path.join(
  path.dirname(require.resolve('astro/package.json')),
  'dist',
  'vite-plugin-app',
  'createAstroServerApp.js'
);

/** Vite's module runner sometimes requests `astro:server-app.js`; Astro only resolves `astro:server-app`. */
function vitePluginAstroServerAppJsFallback() {
  return {
    name: 'astro-server-app-js-fallback',
    enforce: 'pre',
    resolveId(id) {
      if (id === 'astro:server-app.js' || id.endsWith('/astro:server-app.js')) {
        return astroServerAppEntry;
      }
    },
  };
}

export default defineConfig({
  site: 'https://pedrocarranza.com',
  base: '/',
  integrations: [sitemap({
    filter: (page) => page !== 'https://pedrocarranza.com/gracias',
  })],
  output: 'static',
  vite: {
    plugins: [vitePluginAstroServerAppJsFallback()],
  },
});