module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    'jest',
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  env: {
    node: true,
    es6: true,
    'jest/globals': true,
  }
}
