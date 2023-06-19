module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true
  },
  parser: 'vue-eslint-parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-essential',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    jsxPragma: 'React',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['@typescript-eslint', 'vue'],
  rules: {
    // eslint
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unexpected-multiline': 'error',
    'generator-star-spacing': 'off',
    'no-useless-escape': 'off',
    'comma-dangle': [2, 'never'],
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used' }],
    quotes: [1, 'single'],
    'no-var': 2, //禁用var，用let和const代替
    'no-multiple-empty-lines': [2, { max: 1 }], // 不能有多的空行
    'space-before-blocks': 2,
    semi: [2, 'never'],
    'no-empty': ['error', { allowEmptyCatch: true }],
    // vue
    'vue/script-setup-uses-vars': 2,
    'vue/no-v-html': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/require-default-prop': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/html-self-closing': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/no-mutating-props': 'off',
    'vue/valid-attribute-name': 'off',
    // typescript
    '@typescript-eslint/no-unused-vars': 'error',
    // '@typescript-eslint/perfer-ts-expect-error': 'error',
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/ban-ts-comment': 0
  }
}
