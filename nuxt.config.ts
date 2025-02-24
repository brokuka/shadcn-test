// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxtjs/tailwindcss', 'template-copyright', '@nuxt/icon'],

  eslint: {
    config: {
      standalone: false,
    },
  },

  css: ['~/assets/styles/tailwind.css'],
  compatibilityDate: '2025-01-19',
})
