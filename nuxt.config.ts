import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  publicRuntimeConfig: {
    BACKEND_BASE_URL: process.env.BACKEND_BASE_URL,
  },
  css: ['@/assets/css/main.pcss'],
})
