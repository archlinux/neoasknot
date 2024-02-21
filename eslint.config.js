import js from '@eslint/js';
import prettier from 'eslint-plugin-prettier/recommended';
import svelte from 'eslint-plugin-svelte';
import yml from 'eslint-plugin-yml';
import globals from 'globals';
import svelteParser from 'svelte-eslint-parser';
import tseslint from 'typescript-eslint';
import yamlParser from 'yaml-eslint-parser';

/** @type { import('eslint').Linter.FlatConfig[] } */
const config = [
  {
    ignores: ['.svelte-kit/**', 'build/**', 'package-lock.json'],
  },
  {
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.es2017,
        ...globals.node,
      },
    },
  },
  {
    files: ['**/*.js', '**/*.ts'],
    ...js.configs.recommended,
  },
  {
    files: ['**/*.svelte'],
    plugins: {
      svelte,
    },
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        parser: tseslint.parser,
      },
    },
    rules: {
      ...svelte.configs.recommended.rules,
    },
  },
  ...[...tseslint.configs.strict, ...tseslint.configs.stylistic].map(
    (conf) => ({
      ...conf,
      files: ['**/*.svelte'],
      languageOptions: {
        parserOptions: {
          extraFileExtensions: ['.svelte'],
        },
      },
    }),
  ),
  ...[...tseslint.configs.strict, ...tseslint.configs.stylistic].map(
    (conf) => ({
      ...conf,
      files: ['**/*.ts'],
    }),
  ),
  {
    files: ['**/*.yaml', '**/*.yml'],
    plugins: {
      yml,
    },
    languageOptions: {
      parser: yamlParser,
    },
    rules: {
      ...yml.configs.standard.rules,
      'yml/quotes': ['error', { prefer: 'single' }],
    },
  },
  prettier,
];

export default config;
