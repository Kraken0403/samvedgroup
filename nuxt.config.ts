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

  modules: ["nuxt-locomotive-scroll", "@nuxt/icon", "@nuxtjs/prismic"],
  prismic: {
    endpoint: 'https://samved-group.cdn.prismic.io/api/v2',
    lang: 'en',
    apiOptions: {
      fetchLinks: true 
    }
  },

  // pages: {
  //   index: {
  //     file: '~/pages/index.vue'
  //   },
  //   about: {
  //     file: '~/pages/about.vue'
  //   },
  //   projects: {
  //     file: '~/pages/projects.vue'
  //   },
  //   project: {
  //     [ projectname ]: 'pages/project/[projectname].vue'
  //   }
  // },

  icon: {
    serverBundle: {
      collections: ['uil', 'mdi'] // <!--- this
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