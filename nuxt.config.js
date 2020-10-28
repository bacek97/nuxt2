const fetch = require('node-fetch')
const serverlessEnvironment = !!process.env.NOW_BUILD

export default {
  /*
   ** Rendering mode
   ** Doc: https://nuxtjs.org/api/configuration-mode
   */
   components: true,
  mode: "universal",

  /*
   ** Headers of the page
   ** Doc: https://vue-meta.nuxtjs.org/api/#metainfo-properties
   */
  head: {
    title: "Nuxt.js Vuetify starter for CSB",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Nuxt.js Vuetify starter for CodeSandBox"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  /*
   ** Global CSS
   ** Doc: https://nuxtjs.org/api/configuration-css
   */
  // css: [],

  /*
   ** Plugins to load before mounting the App
   ** Doc: https://nuxtjs.org/guide/plugins
   */
  // plugins: [],

  /*
   ** Nuxt.js modules
   ** Doc: https://nuxtjs.org/guide/modules
   */
  buildModules: [
    '@nuxtjs/vuetify',
    'nuxt-composition-api'
  ],


  // Doc: https://github.com/nuxt-community/vuetify-module
  vuetify: {
    // customVariables: ["~/assets/variables.scss"],
    optionsPath: "./vuetify.options.js"
  }

  server: {
    port: process.env.PORT || 8000,
  },
  target: 'static',
  modules: ['@nuxt/http'],
  ...(serverlessEnvironment ? {
    router: {
      base: '/example/',
    },
    build: {
      publicPath: 'example',
    },
  } : {}),
  
  router: {
    middleware: 'i18n'
  },
  plugins: ['~/plugins/i18n.js'],
  generate: {
    interval: 2000,
    async routes() {
      const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(d => d.slice(0, 20))
      const routes = posts.map(post => `/posts/${post.id}`)

      return ['/'].concat(routes)
    },
  }
};