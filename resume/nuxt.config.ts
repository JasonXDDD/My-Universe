// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          src: 'https://unpkg.com/github-calendar@latest/dist/github-calendar.min.js'
        },
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/three.js/86/three.min.js'
        }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css'
        }
      ]
    }
  },
  css: ['~/assets/style/main.sass'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
})
