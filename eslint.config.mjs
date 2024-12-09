import globals from 'globals';
import pluginJs from '@eslint/js';
import babelParser from '@babel/eslint-parser';
import pluginReact from '@eslint-react/eslint-plugin';

const ignores = ['**/node_modules/', '**/lib/', '**/dist/'];
/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ignores,
  },
  {
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
    files: ['**/*.{js, json}'],
    ...pluginJs.configs.recommended,
    // pluginJs.configs.all,
  },
  {
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
];
