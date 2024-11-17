// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },
  modules: ["@nuxt/ui", "@nuxt/content"],
  content: {
    highlight: {
      theme: {
        default: "solarized-light",
        dark: "andromeeda",
      },
    },
  },
  nitro: {
    prerender: {
      routes: ["/sitemap.xml"],
    },
  },
});
