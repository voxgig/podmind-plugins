import styles from "./page.module.css"
import Script from "next/script"

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Test Podmind</h1>

      <Script src="https://podmind.voxgig.com/widget/voxgig-podmind-ask.js" />
      <div className={styles.widget}>
        <voxgig-podmind-ask
          apikey="your-api-key"
          debug="true">
        </voxgig-podmind-ask>
      </div>
    </main>
  );
}
