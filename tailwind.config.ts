import daisyui, { Config as DaisyUIConfig } from 'daisyui';
import type { Config } from 'tailwindcss';
import { loadEnv } from 'vite';

const runtimeEnv = process.env.NODE_ENV as string;
const env = loadEnv(runtimeEnv, process.cwd(), 'PUBLIC_');

export default {
  content: ['./src/**/*.{html,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          ...require(`./src/content/${env.PUBLIC_ORG}/themes`)['light'], // eslint-disable-line @typescript-eslint/no-require-imports
        },
        dark: {
          ...require(`./src/content/${env.PUBLIC_ORG}/themes`)['dark'], // eslint-disable-line @typescript-eslint/no-require-imports
        },
      },
    ],
    logs: false,
  } satisfies DaisyUIConfig,
} satisfies Config;
