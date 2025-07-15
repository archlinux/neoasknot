import adapter from '@sveltejs/adapter-static';
import type { Config } from '@sveltejs/kit';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { loadEnv } from 'vite';

const runtimeEnv = process.env.NODE_ENV as string;
const env = loadEnv(runtimeEnv, process.cwd(), 'PUBLIC_');

export default {
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
} satisfies Config;
