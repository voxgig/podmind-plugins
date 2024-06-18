<template>
  <voxgig-podmind-ask apikey="your-api-key" debug="true">
  </voxgig-podmind-ask>
</template>

<script lang="ts">
export default defineNuxtComponent({
  head: {
    script: [
      {
        async: true,
        hid: 'podw-script',
        src: 'https://podmind.voxgig.com/widget/voxgig-podmind-ask.js'
      }
    ],
  }
}) 
</script>
