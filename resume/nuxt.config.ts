// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          src: 'https://unpkg.com/github-calendar@latest/dist/github-calendar.min.js'
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
