import Heading from '@theme/Heading';
import styles from './index.module.css';


export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Heading as="h1">
          Podmind Test
        </Heading>

        <voxgig-podmind-ask
          apikey="your-api-key"
          debug="true"
        >
        </voxgig-podmind-ask>
      </div>
    </>
  );
}
