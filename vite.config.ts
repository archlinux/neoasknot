import ViteYaml from '@modyfi/vite-plugin-yaml';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import dynamicImport from 'vite-plugin-dynamic-import';

export default defineConfig({
  plugins: [dynamicImport(), sveltekit(), tailwindcss(), ViteYaml()],
  server: { fs: { allow: ['content'] } },
});
