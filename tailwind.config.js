module.exports = {
  content: [
    './templates/index.html',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'body-background': "url('static/themes/archlinux/img/background.jpg')",
        'navbar-logo': "url('static/themes/archlinux/img/archlinux.png')",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      'light',
      'dark',
    ],
  },
}
