// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      script: [
        {
          async: true,
          hid: 'podw-script',
          src: 'https://podmind.voxgig.com/widget/voxgig-podmind-ask.js'
        }
      ],
    }
  }
})
