module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: "eslint:recommended",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    et: "writable",
    __dirname: "writable",
    describe: "writable",
    it: "writable"
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {}
};
