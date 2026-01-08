// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  // App configuration
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'en'
      }
    }
  },

  // CSS
  css: [
    '~/assets/css/main.css',
  ],

  // Modules
  modules: [],

  // Build configuration
  build: {},

  // Runtime config
  runtimeConfig: {
    public: {
      // Add any public runtime config here
    }
  },

  compatibilityDate: '2025-01-08'
})