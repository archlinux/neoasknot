export default {
  '[data-theme=dark]': {
    ...require('daisyui/src/theming/themes')['[data-theme=dark]'], // eslint-disable-line @typescript-eslint/no-var-requires
  },
  '[data-theme=light]': {
    ...require('daisyui/src/theming/themes')['[data-theme=light]'], // eslint-disable-line @typescript-eslint/no-var-requires
  },
};
