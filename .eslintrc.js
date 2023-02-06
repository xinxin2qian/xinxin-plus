module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['prettier', 'plugin:vue/vue3-essential', 'plugin:@typescript-eslint/recommended'],
  overrides: [],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser'
  },
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error', // 在eslint中运行prettier，并启用该插件提供的规则
    'arrow-body-style': 'off', // 关闭规则
    'prefer-arrow-callback': 'off', // 关闭规则
    'no-console': 2
  }
};
