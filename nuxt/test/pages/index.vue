<template>
  <div class='main'>
    <h1>
      Podmind Test
    </h1>

    <voxgig-podmind-ask apikey="your-api-key" debug="true">
    </voxgig-podmind-ask>
  </div>
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

<style>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
