# React Podmind Widget

To integrate the Podmind widget into your React application, you can:
- Install the [@voxgig/podw-react](https://www.npmjs.com/package/@voxgig/podw-react) npm package
- Or add the widget code manually

## Install

### NPM Package

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

### Manual Integration

- Using the [useEffect](https://react.dev/reference/react/useEffect) hook, append the script element to the document head:

```javascript
import { useEffect } from "react";

function YourComponent() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = "https://podmind.voxgig.com/widget/voxgig-podmind-ask.js"
    return () => document.head.appendChild(script)
  }, [])
...
```
- Add the `voxgig-podmind-ask` element into your component along with the API key:

```javasctipt
<voxgig-podmind-ask
  apikey={apikey}
>
</voxgig-podmind-ask>
```
- For example:

```javascript
import { useEffect } from "react";

function YourComponent() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = "https://podmind.voxgig.com/widget/voxgig-podmind-ask.js"
    return () => document.head.appendChild(script)
  }, [])

  return (
    <voxgig-podmind-ask
      apikey="your-api-key"
    >
    </voxgig-podmind-ask>
  )
}

export default YourComponent;
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
