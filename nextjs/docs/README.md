
# Next.js Podmind Widget

To integrate the Podmind widget into your Next.js application, you can:
- Install the `@voxgig/podw-next` npm package
- Or add the widget code manually

## Use NPM lib
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

## Manual Integration
- Import the [Next.js Script](https://nextjs.org/docs/app/api-reference/components/script) component into the Next.js page component:
```javascript
import Script from "next/script"
```
- Pass the widget javascript code to the Script component:
```javascript
<Script src="https://podmind.voxgig.com/widget/voxgig-podmind-ask.js" />
```
- Add the `voxgig-podmind-ask` element into the Next.js page component:
```javasctipt
<voxgig-podmind-ask
  apikey="<your-api-key>"
>
</voxgig-podmind-ask>
```
- For example:
```javascript
import styles from "./page.module.css"
import Script from "next/script"

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Podmind Test</h1>

      <Script src="https://podmind.voxgig.com/widget/voxgig-podmind-ask.js" />

      <voxgig-podmind-ask apikey="your-api-key"></voxgig-podmind-ask>
    </main>
  );
}
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
