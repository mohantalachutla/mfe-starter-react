import globals from 'globals';
import pluginJs from '@eslint/js';
import babelParser from '@babel/eslint-parser';
import pluginReact from '@eslint-react/eslint-plugin';
import pluginJest from 'eslint-plugin-jest';

const ignores = ['**/node_modules/', '**/lib/', '**/dist/'];
/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ignores,
  },
  {
    name: 'all',
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
      parser: babelParser,
      ecmaVersion: 2020,
      sourceType: 'module',
      parserOptions: {
        requireConfigFile: false,
        allowImportExportEverywhere: false,
      },
    },
    rules: {},
  },
  {
    name: 'js_json',
    files: ['**/*.{js, json}'],
    ...pluginJs.configs.recommended,
    // pluginJs.configs.all,
  },
  {
    name: 'react',
    files: ['**/*.{js,jsx}'],
    ...pluginReact.configs.recommended,
    languageOptions: {
      parser: babelParser,
      ecmaVersion: 2020,
      sourceType: 'module',
      parserOptions: {
        requireConfigFile: false,
        allowImportExportEverywhere: false,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      ...pluginReact.configs.recommended.rules,
      '@eslint-react/no-prop-types': 'off',
    },
  },
  // jest
  {
    // update this to match your test files
    name: 'jest',
    files: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
    plugins: { jest: pluginJest },
    languageOptions: {
      globals: globals.jest,
    },
    ...pluginJest.configs['flat/recommended'],
    rules: {
      ...pluginJest.configs['flat/recommended'].rules,
    },
  },
];
