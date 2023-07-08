// https://nuxt.com/docs/api/configuration/nuxt-config

import { resolve } from "path"
export default defineNuxtConfig({
    alias: {
        "@": resolve(__dirname, '/'),
    },

    css: [
        '~/assets/main.scss'
    ],

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    modules: [
        '@pinia/nuxt',
        '@vite-pwa/nuxt'
    ],

    pwa: {
        manifest:{
            name: "electric_scooter",
            short_name: "electric_scooter",
            description: "you can buy any electric scooter"
        }
    }
})
