require('dotenv').config()

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
      {
        hid: 'description',
        name: 'description',
        content: 'Çevrendeki bütün marketleri görüp istediğin marketten online alışveriş yapabilirsin'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,500,600,700'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Righteous&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
      }
    ]
  },

  loading: { color: 'red' },
  css: ['~/assets/style/main.scss'],
  styleResources: {
    scss: [
      './assets/style/config/_variables.scss',
      './assets/style/config/_mixins.scss'
    ]
  },
  plugins: [
    '~/plugins/vee-validate',
    '~/plugins/vmodal',
    { src: '~/plugins/swiper.js', ssr: false }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/axios', 'vue-wait/nuxt', '@nuxtjs/style-resources', '@nuxtjs/device'],
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
