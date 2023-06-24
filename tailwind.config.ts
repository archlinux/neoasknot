import type { Config } from 'tailwindcss';
import { loadEnv } from 'vite';

const env = loadEnv(process.env.NODE_ENV, process.cwd(), 'PUBLIC_');

export default {
  content: ['./src/**/*.{html,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...require(`./src/content/${env.PUBLIC_ORG}/themes`)[ // eslint-disable-line @typescript-eslint/no-var-requires
            '[data-theme=light]'
          ],
        },
        dark: {
          ...require(`./src/content/${env.PUBLIC_ORG}/themes`)[ // eslint-disable-line @typescript-eslint/no-var-requires
            '[data-theme=dark]'
          ],
        },
      },
    ],
  },
} satisfies Config;
