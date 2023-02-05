import ViteYaml from '@modyfi/vite-plugin-yaml';
import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import dynamicImport from 'vite-plugin-dynamic-import';

const config: UserConfig = {
  plugins: [dynamicImport(), sveltekit(), ViteYaml()],
};

export default config;
