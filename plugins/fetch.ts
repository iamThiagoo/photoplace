import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(nuxtApp => {
  const config = useRuntimeConfig();
  const baseURL = config.public.apiBaseUrl;

  // Define a custom fetch function with the base URL
  const customFetch = (url: string, options: any = {}) => {
    return $fetch(url, {
      ...options,
      baseURL,
    });
  };

  // Provide custom fetch globally
  nuxtApp.provide('fetch', customFetch);
});