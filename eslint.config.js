import js from '@eslint/js';
import json from '@eslint/json';
import { defineConfig } from 'eslint/config';
import prettier from 'eslint-plugin-prettier/recommended';
import svelte from 'eslint-plugin-svelte';
import yaml from 'eslint-plugin-yml';
import globals from 'globals';
import svelteParser from 'svelte-eslint-parser';
import tseslint from 'typescript-eslint';
import yamlParser from 'yaml-eslint-parser';
import svelteConfig from './svelte.config.js';

/** @type { import('eslint').Linter.Config[] } */
const config = defineConfig([
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
    plugins: {
      js,
    },
    extends: ['js/recommended'],
  },
  {
    files: ['**/*.json'],
    plugins: {
      json,
    },
    language: 'json/json',
    extends: ['json/recommended'],
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
        extraFileExtensions: ['.svelte'],
        svelteConfig,
      },
    },
    extends: [
      'svelte/recommended',
      tseslint.configs.strict,
      tseslint.configs.stylistic,
    ],
    rules: {
      'prefer-const': 'off',
      'svelte/require-each-key': 'off',
    },
  },
  {
    files: ['**/*.ts'],
    extends: [tseslint.configs.strict, tseslint.configs.stylistic],
  },
  {
    files: ['**/*.yaml', '**/*.yml'],
    plugins: {
      yaml,
    },
    languageOptions: {
      parser: yamlParser,
    },
    extends: ['yaml/standard'],
    rules: {
      'yml/quotes': ['error', { prefer: 'single' }],
    },
  },
  prettier,
]);

export default config;
