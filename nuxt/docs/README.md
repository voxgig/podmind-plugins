# Nuxt Podmind Widget

To integrate the Podmind widget into your Nuxt application, you can:
- Install the [@voxgig/podw-vue](https://www.npmjs.com/package/@voxgig/podw-vue) npm package
- Or add the widget code manually

## Install

### NPM Package

- In your app root directory, run:

```bash
npm i @voxgig/podw-vue 
```
- After the package is installed, import and add the lib component similar to the following:
```javascript
<template>
    <PodW apikey="your-api-key" />
</template>

<script setup>
import PodW from '@voxgig/podw-vue'
</script>
```
- You must pass the following prop:
    - `apikey` - The API key provided by Voxgig.

### Manual Integration

- Install the  [vueuse/core](https://www.npmjs.com/package/@vueuse/core) npm package:

```bash
npm i @vueuse/core
```
- Pass the widget url to the [useScriptTag](https://vueuse.org/core/useScriptTag/#usescripttag):

```javascript
useScriptTag('https://podmind.voxgig.com/widget/voxgig-podmind-ask.js')
```
- Add the `voxgig-podmind-ask` element into your component along with the API key:

```javasctipt
<voxgig-podmind-ask apikey="<your-api-key>">
</voxgig-podmind-ask>
```
- For example:

```javascript
<script setup>
import { useScriptTag } from '@vueuse/core'

useScriptTag('https://podmind.voxgig.com/widget/voxgig-podmind-ask.js')
</script>

<template>
    <voxgig-podmind-ask apikey="your-api-key">
    </voxgig-podmind-ask>
</template>
```
- You also need to include the custom element in the `nuxt.config.ts` file:  

```javascript
 export default defineNuxtConfig({
  vue: {
    compilerOptions: {
      isCustomElement: tag => ['voxgig-podmind-ask'].includes(tag)
    }
  }
})
```

## Debugging
- You can pass the prop `debug` to the lib component or directly into the widget element. To log widget properties:
```javascript
<PodW
 apikey="your-api-key"
 debug="true"
/>

//or 

<voxgig-podmind-ask 
apikey="your-api-key"
debug="true"
>
</voxgig-podmind-ask>
```

- Resulting in a log similar to the:
```bash
apikey: "your-api-key"
debug: true
mark: "20i1a7d5"
```
