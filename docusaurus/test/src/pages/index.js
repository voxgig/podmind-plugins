import Heading from '@theme/Heading';
import styles from './index.module.css';
import PodW from '@voxgig/podw-docusaurus'
import Head from '@docusaurus/Head';


export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Heading as="h1">
          Podmind Test
        </Heading>

        <PodW
          Head={Head}
          apikey="your-api-key"
          debug="true" />
      </div>
    </>
  );
}
