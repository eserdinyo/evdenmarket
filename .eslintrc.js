module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@nuxtjs',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    singlequote: 'off',
    'comma-dangle': [2, 'never'],
    'import/extensions': 'off',
    semi: [2, 'never'],
    'max-len': [2, { code: 130 }],
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
    'vue/singleline-html-element-content-newline':'off',
    'vue/no-v-html':'off'
  }
}