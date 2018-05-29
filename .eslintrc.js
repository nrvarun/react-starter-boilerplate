module.exports = {
  "extends": "webpack",
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  plugins: ['react'],
  extends: [
    'standard',
    'airbnb'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaVestion: 8,
    ecmaFeatures: {
      sourceType: 'module',
      jsx: true
    },
    allowImportExportEverywhere: true
  },
  rules: {
    "linebreak-style": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "arrow-body-style": 0,
    "jsx-a11y/anchor-is-valid": [ "error", { "components": [ "Link" ], "specialLink": [ "to" ] } ]
  }
}
