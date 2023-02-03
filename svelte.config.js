import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      precompress: true
    }),
    alias: {
      '$content': 'src/content'
    },
  },
  preprocess: [
    preprocess({
      postcss: true
    })
  ]
};

export default config;
