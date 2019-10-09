import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
      '~/assets/css/main.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  { src: '~/plugins/vue-carousel', ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-webfontloader',
  ],
  webfontloader: {
    google: {
      families: ['Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ ProN W3',"sans-serif"]
    }
  },

  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
        themes: {
        light:   {
        primary: '#f44336',
        secondary: '#4caf50',
        accent: '#ff5722',
        error: '#795548',
        warning: '#ff9800',
        info: '#00bcd4',
        success: '#e91e63'
        },
        dark: {
            primary: colors.blue.lighten3,
        },
        },
    },

  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },


}
const pkg = require('./package')
// 以下、追加
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')
// ここまで

module.exports = {
  // ...
  /*
  ** Build configuration
  */
 build: {
   /*
   ** you can extend webpack config here
   */
  extend(config, ctx) {
    // ...
    // 以下、追加
    config.plugins.push(new HardSourceWebpackPlugin())
    // ここまで
  }
 }
}