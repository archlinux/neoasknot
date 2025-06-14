import ViteYaml from '@modyfi/vite-plugin-yaml';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import type { UserConfig } from 'vite';
import dynamicImport from 'vite-plugin-dynamic-import';

export default {
  plugins: [dynamicImport(), sveltekit(), tailwindcss(), ViteYaml()],
} satisfies UserConfig;
