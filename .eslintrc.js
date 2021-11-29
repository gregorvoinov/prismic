module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'prettier'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'vue/component-definition-name-casing': ["error", "kebab-case"], // "PascalCase"
    "vue/name-property-casing": ["error",  "kebab-case"], //"PascalCase"
    'camelcase': 'off',
    'no-unused-vars': 'off'
   }
}
