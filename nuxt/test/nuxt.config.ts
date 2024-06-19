// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vue: {
    compilerOptions: {
      isCustomElement: tag => ['voxgig-podmind-ask'].includes(tag)
    }
  }
})
