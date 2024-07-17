# React Podmind Widget

## Install 

- In your app root directory, run:

```bash
npm i @voxgig/podw-react
```

- After the package is installed, import and add the lib component similar to the following:

```javascript
import PodW from '@voxgig/podw-react'

function YourComponent() {
  return (
    <PodW
      apikey="your-api-key"
    />
  )
}
```

- You must pass the following prop:
    - `apikey` - The API key provided by Voxgig.

## Debugging

- To log widget properties, you can pass the prop `debug` to the lib component:

```javascript
<PodW
 apikey="your-api-key"
 debug="true"
/>
```

- Resulting in a log similar to the following:

```bash
apikey: "your-api-key"
debug: true
mark: "20e1a7d5"
```
