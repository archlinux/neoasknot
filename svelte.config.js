import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const basePath = process.env.VITE_BASE_PATH || '';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      precompress: true,
    }),
    alias: {
      $content: 'src/content',
    },
    paths: {
      base: basePath,
    },
  },
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
};

export default config;
