<template>
  <div class='main'>
    <h1>
      Podmind Test
    </h1>

    <PodW />
  </div>
</template>



<script>
import { addComponent, defineNuxtModule } from '@nuxt/kit'
import PodW from '@voxgig/podw-nuxt'

export default {
  setup() {
    addComponent({
      name: 'PodW',
      export: 'PodW',
      filePath: '@voxgig/podw-nuxt',
    })
  },
  name: 'Test',
}
</script>

<style>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
