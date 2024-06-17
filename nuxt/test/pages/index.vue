<template>
  <div>
    <h1>
      Podmind Test
    </h1>

    <voxgig-podmind-ask apikey="your-api-key" debug="true">
    </voxgig-podmind-ask>
  </div>
</template>



<script>
export default {
  name: 'IndexPage',
  head() {
    return {
      title: 'test',
      script: [
        {
          hid: 'podmind',
          async: true,
          src: 'https://podmind.voxgig.com/widget/voxgig-podmind-ask.js'
        }
      ]
    }
  },
}
</script>
