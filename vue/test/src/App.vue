<script setup>
import { useScriptTag } from '@vueuse/core'

useScriptTag('https://podmind.voxgig.com/widget/voxgig-podmind-ask.js')
</script>

<template>
  <div class="main">
    <h1>Podmind Test</h1>

    <voxgig-podmind-ask apikey="your-api-key" debug="true">
    </voxgig-podmind-ask>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
