<script setup>
import PodW from '@voxgig/podw-vue'
</script>

<template>
  <div class="main">
    <h1>Podmind Test</h1>

    <PodW apikey="your-api-key" />
  </div>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
