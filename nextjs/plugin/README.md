# Next.js Podmind Widget

## Install

- In your app root directory, run:

```bash
npm i @voxgig/podw-next 
```

- After the package is installed, import and add the lib component similar to the following:

```javascript
'use client'
import PodW from '@voxgig/podw-next'

export default function YourComponent() {
  return (
      <PodW apikey="your-api-key" />
  );
}
```

- You must pass the following prop:
    - `apikey` - The API key provided by Voxgig.
- Highliting the use of the `'use client'` [directive from React](https://nextjs.org/docs/app/building-your-application/rendering/client-components#using-client-components-in-nextjs).

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
