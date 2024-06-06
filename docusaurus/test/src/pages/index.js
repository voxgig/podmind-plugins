import Head from '@docusaurus/Head';
import Heading from '@theme/Heading';

import styles from './index.module.css';


export default function Home() {
  return (
    <>
      <Head>
        <script async src="https://podmind.voxgig.com/widget/voxgig-podmind-ask.js"></script>
      </Head>

      <div className={styles.container}>
        <Heading as="h1">
          Podmind Test
        </Heading>

        <div className={styles.widget}>
          <voxgig-podmind-ask
            apikey="your-api-key"
            debug="true"
          >
          </voxgig-podmind-ask>
        </div>
      </div>
    </>
  );
}
