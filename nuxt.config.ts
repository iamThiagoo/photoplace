// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ["@nuxtjs/tailwindcss", '@nuxtjs/color-mode', "@nuxt/image"],
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
      titleTemplate: "%s - PhotoPlace"
    }
  }
})