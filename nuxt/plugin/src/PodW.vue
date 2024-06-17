<template>
  <voxgig-podmind-ask apikey="your-api-key" debug="true">
  </voxgig-podmind-ask>
</template>



<script>
export default {
  name: 'PodW',
  head() {
    return {
      title: 'PodmindScript',
      script: [
        {
          hid: 'podw-script',
          async: true,
          src: 'https://podmind.voxgig.com/widget/voxgig-podmind-ask.js'
        }
      ]
    }
  },
}
</script>
