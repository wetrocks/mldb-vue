// Import the Auth0 configuration
import { domain, clientId, audience } from "./auth_config.json";

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  vue: {
    config: {
      productionTip: true,
      devtools: true
    }
  },

  publicRuntimeConfig: {
    mldbApiBase: process.env.MLDB_API_URL_BASE || 'http://localhost:5000'
  },
  
  privateRuntimeConfig: {
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'mldb',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',

      // Simple usage
      '@nuxtjs/vuetify'
  
      // With options
//      ['@nuxtjs/vuetify', { /* module options */ }]
  //  ]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  auth: {
    redirect: {
      login: '/', // redirect user when not connected
      callback: '/auth/signed-in',
      logoutRedirectUri: 'http://localhost:3000',
      home: '/'
    },
    "rewriteRedirects": true,
    strategies: {
      local: false,
      auth0: {
        "domain": domain,
        "clientId": clientId,
        "audience": audience
      }
    }
  }
}
