<script setup>
import { useScriptTag } from '@vueuse/core'

useScriptTag('https://podmind.voxgig.com/widget/voxgig-podmind-ask.js')

defineProps(['apikey', 'debug'])
</script>

<template>
  <voxgig-podmind-ask :apikey :debug>
  </voxgig-podmind-ask>
</template>
