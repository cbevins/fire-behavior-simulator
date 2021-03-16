module.exports = {
  env: {
    browser: true,
    es2021: true,
    // es6: true,
    node: true
  },
  extends: [
    // 'google',
    'standard',
    // 'airbnb-base',
    'plugin:jest/recommended',
    'plugin:jest/style'
  ],
  // globals: {
  //   Atomics: 'readonly',
  //   SharedArrayBuffer: 'readonly',
  // },
  parserOptions: {
    ecmaVersion: 12,
    // ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['jest'],
  rules: {
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error'
  }
}
