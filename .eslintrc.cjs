module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:svelte/recommended',
    'plugin:yml/standard',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    extraFileExtensions: ['.svelte'],
  },
  plugins: ['@typescript-eslint'],
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
  rules: { 'yml/quotes': ['error', { prefer: 'single' }] },
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
    { files: ['*.yaml', '*.yml'], parser: 'yaml-eslint-parser' },
  ],
};
