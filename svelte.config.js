import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { loadEnv } from 'vite';

const env = loadEnv(process.env.NODE_ENV, process.cwd(), 'PUBLIC_');

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      precompress: true,
    }),
    alias: {
      $content: 'src/content',
      $orgLib: `src/content/${env.PUBLIC_ORG}/lib`,
    },
    files: {
      assets: `src/content/${env.PUBLIC_ORG}/static`,
    },
  },
  preprocess: vitePreprocess(),
};

export default config;
