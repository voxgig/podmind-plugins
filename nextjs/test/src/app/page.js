'use client'
import styles from "./page.module.css"
import PodW from '@voxgig/podw-next'

export default function Home() {
  return (
    <main className={styles.main}>
      <PodW
        apikey="your-api-key"
        debug />
    </main >
  );
}
