
# Docusaurus Podmind Widget

To integrate the Podmind widget into your Docusaurus application, you can:
- Install the `@voxgig/podw-docusaurus` npm package
- Or add the widget code manually

## Use NPM lib
- In your app root directory, run:
```bash
npm i @voxgig/podw-docusaurus 
```
- After the package is installed, import and add the lib component similar to the following:
```javascript
import PodW from '@voxgig/podw-docusaurus'
import Head from '@docusaurus/Head';

import styles from './index.module.css';

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <h1>
          Podmind Test
        </h1>

        <PodW
          Head={Head}
          apikey="your-api-key"
         />
      </div>
    </>
  );
}

```
1. You must pass the following props:
- `Head` - Docusaurus Head built-in component.
- `apikey` - The API key provided by Voxgig.

## Manual Integration
- Import the Docusaurus `Head` component into the Docusaurus page component:
```javascript
import Head from '@docusaurus/Head';
```
- Embed the `script` element into the `Head` component:
```javascript
  <Head>
    <script
      async
      src="https://podmind.voxgig.com/widget/voxgig-podmind-ask.js">
    </script>
  </Head>

```
- Add the `voxgig-podmind-ask` element into the Docusaurus page component:
```javasctipt
<voxgig-podmind-ask
  apikey="<your-api-key>"
>
</voxgig-podmind-ask>
```
- For example:
```javascript
import Heading from '@theme/Heading';
import styles from './index.module.css';
import Head from '@docusaurus/Head';


export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Heading as="h1">
          Podmind Test
        </Heading>

        <Head>
          <script
            async
            src="https://podmind.voxgig.com/widget/voxgig-podmind-ask.js">
          </script>
        </Head>

        <voxgig-podmind-ask
          apikey="<your-api-key>"
        >
        </voxgig-podmind-ask>
      </div>
    </>
  );
}
```

## Debugging
- You can pass the prop `debug` to the lib component or directly into the widget element. To log widget properties:
```javascript
<PodW
 Head={Head}
 apikey="your-api-key"
 debug='true'
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
mark: "20e1a7d5"
```
