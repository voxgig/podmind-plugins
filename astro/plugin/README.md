# Astro Podmind Widget

## Install 

- In your app root directory, run:

```bash
npm i @voxgig/podw-astro
```
- After the package is installed, import and add the lib component similar to the following:

```javascript
---
import PodW from "@voxgig/podw-astro"
---

<PodW apikey="your-api-key" />
```

- You must pass the following prop:
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
