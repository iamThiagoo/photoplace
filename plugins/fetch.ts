export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig();
    const apiBaseUrl = config.public.apiBaseUrl;
  
    nuxtApp.provide('fetch', (url: string, options: any = {}) => {
      return $fetch(url, {
        ...options,
        baseURL: apiBaseUrl,
      });
    });
});