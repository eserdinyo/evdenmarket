const pkg = require('./package')

module.exports = {
  generate: {
    fallback: true
  },
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Evdenmarket - Market Sana Gelsin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,600,700'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: 'red' },

  /*
   ** Global CSS
   */
  css: ['~/assets/style/main.scss'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/vee-validate',
    { src: '~/plugins/swiper.js', ssr: false }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/axios', 'vue-wait/nuxt'],
  /*
   ** Axios module configuration
   */
  axios: {
    baseURL: 'http://localhost:8081'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend (config, ctx) { }
  },
  buildModules: [
    '@nuxtjs/router'
  ],
  extendRoutes (routes, resolve) {
    routes.push({
      name: 'custom',
      path: '*',
      component: resolve(__dirname, 'pages/404.vue')
    })
  }
}
