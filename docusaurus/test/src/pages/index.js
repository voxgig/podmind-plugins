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
            apikey="057c478f84c642caab3ff71c0f879cceeb8e362d41414bb9b09fc6389f2ebfff"
            debug="true"
          >
          </voxgig-podmind-ask>
        </div>
      </div>
    </>
  );
}
