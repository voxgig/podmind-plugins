<script setup>
import { useScriptTag } from '@vueuse/core'

useScriptTag('https://podmind.voxgig.com/widget/voxgig-podmind-ask.js')
</script>

<template>
  <voxgig-podmind-ask apikey="your-api-key" debug="true">
  </voxgig-podmind-ask>
</template>
