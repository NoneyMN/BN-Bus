import vuetify from "vite-plugin-vuetify";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  pages: true,
  vite: {
    ssr: {
      noExternal: ["vuetify"],
    },
  },
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    (_, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        if (config.plugins) {
          config.plugins.push(vuetify());
        } else {
          config.plugins = [vuetify()];
        }
      });
    },
  ],
});
