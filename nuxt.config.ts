// import { apiEndpoint, repositoryName } from "./slicemachine.config.json";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  devtools: { enabled: true },

  plugins: [
    '~/plugins/locomotive-scroll.client.js'
  ],

  css: [
    '@/assets/styles/global.scss'
  ],

  modules: [ "@nuxt/icon", "@nuxtjs/prismic"],
  prismic: {
    endpoint: 'https://samved-group.cdn.prismic.io/api/v2',
    lang: 'en',
    apiOptions: {
      fetchLinks: true 
    }
  },



  icon: {
    serverBundle: {
      collections: ['uil', 'mdi', 'fa']// <!--- this
    }
  },

  locomotiveScroll: {
    // module options
    pluginOptions: {
      smooth: true
    }
  },

  compatibilityDate: '2024-08-09',
};