module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true, // Enable JSX
    },
  },
  plugins: ['react-refresh', 'react'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-empty-function': 'warn',
    'react/prop-types': 'off', // Disable prop-types as we're using TypeScript
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the React version
    },
  },
  overrides: [
    {
      files: ['.js', '.jsx'],
      parser: 'babel-eslint', // Use babel-eslint for JS/JSX files
      rules: {
        '@typescript-eslint/no-unused-vars': 'off', // Turn off TS-specific rules for JS/JSX
        '@typescript-eslint/no-empty-function': 'off',
      },
    },
  ],
};