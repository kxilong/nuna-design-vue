module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jasmine: true,
    jest: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['@vue/typescript/recommended', '@vue/prettier'],
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: {
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/ban-types': 0,
        '@typescript-eslint/consistent-type-imports': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/no-empty-function': 0,
        '@typescript-eslint/no-non-null-assertion': 0,
        '@typescript-eslint/no-unused-vars': [
          'error',
          { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
        ],
        '@typescript-eslint/ban-ts-comment': 0,
      },
    },
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      rules: {
        'no-console': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
        ],
      },
    },
  ],
  rules: {
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'comma-dangle': [2, 'always-multiline'],
    'no-var': 'error',
    // 'no-console': [2, { allow: ['warn', 'error'] }],
    'object-shorthand': 2,
    'no-unused-vars': [2, { ignoreRestSiblings: true, argsIgnorePattern: '^_' }],
    'no-undef': 2,
    camelcase: 'off',
    'no-extra-boolean-cast': 'off',
    semi: ['error', 'always'],
    'vue/no-v-html': 'off',
    'vue/require-explicit-emits': 'off',
    'vue/require-prop-types': 'off',
    'vue/require-default-prop': 'off',
    'vue/no-reserved-keys': 'off',
    'vue/comment-directive': 'off',
    'vue/prop-name-casing': 'off',
    'vue/one-component-per-file': 'off',
    'vue/custom-event-name-casing': 'off',
    'vue/v-on-event-hyphenation': 'off',
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 20,
        multiline: 1,
      },
    ],
    'vue/multi-word-component-names': 'off',
  },
};
