import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  vite: {
    server: {
      proxy: {
        "/api/v1/register": {
          target: "http://localhost:7000/",
          ws: true,
        },
        "/api/v1/login": {
          target: "http://localhost:7000/",
          ws: true,
        },
        "/api/v1/user": {
          target: "http://localhost:7000/",
          ws: true,
        },
        "/api/v1/logout": {
          target: "http://localhost:7000/",
          ws: true,
        },
      },
    },
  },
});
