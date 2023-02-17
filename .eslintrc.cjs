module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'react/jsx-no-bind': 0,
    'react/prop-types': 0,
    'import/no-extraneous-dependencies': 0,
    'no-restricted-syntax': 0,
    'react/jsx-props-no-spreading': 0,
  },
};
