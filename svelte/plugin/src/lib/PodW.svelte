<script>
  export let apikey;
  export let debug = "false";
</script>

<svelte:head>
  <script async src="https://podmind.voxgig.com/widget/voxgig-podmind-ask.js">
  </script>
</svelte:head>

<voxgig-podmind-ask {apikey} {debug}> </voxgig-podmind-ask>
