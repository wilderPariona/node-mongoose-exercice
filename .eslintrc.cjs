module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
  },
  rules: {
    'semi': ['error', 'always'],
    'quotes': ['error', 'single'],
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error'
  },
  plugins: ['prettier', 'jest']
};
