// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: ['@nuxtjs/supabase'],
  css: ['~/assets/styles/main.css'],
  fontLoader: {
    url: 'https://fonts.googleapis.com/css2?family=Dongle:wght@300&family=Inter:wght@600&display=swap" rel="stylesheet',
    prefetch: true,
    preconnect: true,
  },
  ssr: false,
});
