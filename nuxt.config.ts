// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxtjs/tailwindcss', 'template-copyright'],

  eslint: {
    config: {
      standalone: false,
    },
  },

  tailwindcss: {
    cssPath: '~/assets/styles/tailwind.css',
  },

  compatibilityDate: '2025-01-19',
})