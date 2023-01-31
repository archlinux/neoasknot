import { sveltekit } from '@sveltejs/kit/vite';
import ViteYaml from '@modyfi/vite-plugin-yaml';
import dynamicImport from 'vite-plugin-dynamic-import'
import type { UserConfig } from 'vite';

const config: UserConfig = {
  plugins: [sveltekit(), ViteYaml(), dynamicImport()]
};

export default config;
