import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { loadEnv } from 'vite';

const env = loadEnv(process.env.NODE_ENV, process.cwd(), 'PUBLIC_');
const content = `src/content/${env.PUBLIC_ORG}`;

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      precompress: true,
    }),
    alias: {
      $content: content,
    },
    files: {
      assets: `${content}/static`,
    },
    paths: {
      relative: true,
    },
  },
  preprocess: vitePreprocess(),
};

export default config;
