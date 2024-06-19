# Vue Podmind Widget


## Install 
- In your app root directory, run:
```bash
npm i @voxgig/podw-vue
```
- After the package is installed, import and add the lib component similar to the following:

```javascript
<script setup>
import PodW from '@voxgig/podw-vue'
</script>

<template>
    <PodW apikey="your-api-key" />
</template>
```
1. You must pass the following prop:
- `apikey` - The API key provided by Voxgig.

## Debugging
- You can pass the prop `debug` to the lib component or directly into the widget element. To log widget properties:
```javascript
<PodW
 apikey="your-api-key"
 debug="true"
/>
```

- Resulting in a log similar to the:
```bash
apikey: "your-api-key"
debug: true
mark: "20e1a7d5"
```
