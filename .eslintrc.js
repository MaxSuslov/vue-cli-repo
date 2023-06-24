module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  extends: ['eslint-config-airbnb-base', 'plugin:vue/recommended'],
  parserOptions: {
    parser: '@babel/eslint-parser',
    sourceType: 'module',
    ecmaVersion: 'latest',
    requireConfigFile: false,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-shadow': ['error', { allow: ['state'] }],
    'arrow-parens': ['error', 'as-needed'],
    'max-len': ['error', { code: 150 }],
    'no-self-import': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        vue: 'never',
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['./node_modules', './'],
      },
    },
  },
};
