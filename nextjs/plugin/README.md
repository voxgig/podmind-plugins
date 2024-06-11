
# Next.js Podmind Widget

## Install

- In your app root directory, run:
```bash
npm i @voxgig/podw-next 
```
- After the package is installed, import and add the lib component similar to the following:
```javascript
'use client'
import styles from "./page.module.css"
import PodW from '@voxgig/podw-next'

export default function Home() {
  return (
    <main className={styles.main}>
      <PodW apikey="your-api-key" />
    </main >
  );
}
```
- Highliting the use of the `'use client'` [directive from React](https://nextjs.org/docs/app/building-your-application/rendering/client-components#using-client-components-in-nextjs).


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
mark: "20i1a7d5"
```
