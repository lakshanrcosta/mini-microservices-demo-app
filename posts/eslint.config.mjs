import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  {
    ignores: ['dist', 'node_modules']
  },
  {
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json' // Ensure tsconfig.json exists
      }
    },
    plugins: {
      '@typescript-eslint': ts,
      prettier: prettierPlugin
    },
    rules: {
      ...ts.configs.recommended.rules, // TypeScript rules
      'prettier/prettier': 'error' // Enforce Prettier formatting
    }
  }
];
