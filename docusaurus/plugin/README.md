
# Docusaurus Podmind Widget


## Install 
- In your app root directory, run:
```bash
npm i @voxgig/podw-next
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

## Debugging
- You can pass the prop `debug` to the lib component or directly into the widget element. To log widget properties:
```javascript
<PodW
 Head={Head}
 apikey="your-api-key"
 debug='true'
/>
```

- Resulting in a log similar to the:
```bash
apikey: "your-api-key"
debug: true
mark: "20e1a7d5"
```
