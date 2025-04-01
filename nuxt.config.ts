// import { apiEndpoint, repositoryName } from "./slicemachine.config.json";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  devtools: { enabled: true },
  app
  : {
     
      head
        :{
        charset:'utf-8',
        viewport:'width=device-width, initial-scale=1',
      }
  },
  // plugins: ['~/plugins/locomotive.client.js'],

  build: {
    extractCSS: true,
    // Other configurations...
  },

  css: [
    '@/assets/styles/global.scss'
  ],

  modules: [ "@nuxt/icon", "@nuxtjs/prismic", 'nuxt-swiper', 'nuxt-easy-lightbox'],
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

  compatibilityDate: '2024-08-09',
};