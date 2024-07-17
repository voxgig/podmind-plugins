# Gatsby Podmind Widget

## Install

- In your app root directory, run:

```bash
npm i @voxgig/podw-gatsby
```

- After the package is installed, import and add the lib component similar to the following:

```javascript
import * as React from "react"
import PodW from '@voxgig/podw-gatsby'

const YourComponent = () => {
  return (
      <PodW apikey="your-api-key" />
  )
}

export default YourComponent 
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
mark: "20i1a7d5"
```
