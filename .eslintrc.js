module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    "no-undef": "off",
    "no-unused-vars": "off",
  },
};
