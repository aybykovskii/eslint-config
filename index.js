const path = require('path')

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.d.ts'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: path.resolve(__dirname, 'tsconfig.json'),
        extensions: ['.ts', '.json', '.d.ts'],
      },
    },
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:import/typescript',
    'prettier',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'prettier'],
  rules: {
    'prettier/prettier': ['warn', { endOfLine: 'auto' }],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-console': 'warn',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
    'import/extensions': ['error', 'ignorePackages', { ts: 'never', tsx: 'never' }],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'max-len': ['warn', { code: 120, ignoreComments: true, ignoreUrls: true }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'error',
    'import/no-extraneous-dependencies': 'off',
    '@typescript-eslint/naming-convention': 'off',
    'class-methods-use-this': 'off',
    'no-underscore-dangle': 'off',
    'import/order': [
      'warn',
      {
        'newlines-between': 'always',
        groups: [['builtin', 'external'], 'internal', 'parent', 'sibling'],
      },
    ],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
      {
        blankLine: 'always',
        prev: '*',
        next: ['if', 'for', 'switch', 'while', 'do', 'case', 'default'],
      },
      { blankLine: 'always', prev: 'block-like', next: 'block-like' },
      { blankLine: 'always', prev: 'multiline-const', next: 'multiline-const' },
    ],
  },
}
