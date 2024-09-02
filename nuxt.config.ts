// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  devServer: {
    port: Number(process.env.APP_PORT)
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.APP_API_BASE_URL,
    },
},
  modules: [
    "@nuxtjs/tailwindcss",
    '@pinia/nuxt',
    "@pinia-plugin-persistedstate/nuxt",
    '@nuxtjs/color-mode',
    "@nuxt/image",
    ['@nuxtjs/google-fonts', {
      families: {
        Poppins: true,
        'Playwrite+DK+Uloopet': true
      }
    }],
    ['@vee-validate/nuxt', {
        autoImports: true,
    }],
  ],
  plugins: [
    'plugins/yup-translations',
    'plugins/fetch'
  ],
  css: ['~/assets/css/main.css'],
  colorMode: {
    preference: 'system', 
    fallback: 'light',
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'nuxt-color-mode'
  },
  app: {
    head: {
      titleTemplate: "%s - " + process.env.APP_NAME
    }
  }
})