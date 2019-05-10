const pkg = require("./package");

module.exports = {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Open+Sans:400,600,700"
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "red" },

  /*
   ** Global CSS
   */
  css: ["~/assets/style/main.scss"],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "~/plugins/vee-validate",
    "~/plugins/vue-swal",
    "~/plugins/vue-cleave",
    { src: "~/plugins/flickity", ssr: false }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/axios", "@nuxtjs/auth","vue-wait/nuxt"],
  /*
   ** Axios module configuration
   */
  axios: {
    baseURL: "http://localhost:8081"
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: "login", method: "post", propertyName: "token" },
          user: false,
          logout: false
        },
        tokenRequired: true,
        tokenType: "Bearer"
      },
      facebook: {
        client_id: "603974156699711",
        userinfo_endpoint:
          "https://graph.facebook.com/v2.12/me?fields=about,name,picture{url},email",
        scope: ["public_profile", "email"]
      },
      google: {
        client_id:
          "975561318251-bqgrbpnav8gq21arlhvb40u3s2p1egi1.apps.googleusercontent.com",
      }
    },
    redirect: {
      login: "/?login=1",
      logout: "/",
      user: "/profile",
      callback: "/",
      home: "/?login=true"
    }
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) { },
    vendor: ["vue-swal"]
  },
  extendRoutes(routes, resolve) {
    routes.push({
      name: "custom",
      path: "*",
      component: resolve(__dirname, "pages/404.vue")
    });
  }
};
