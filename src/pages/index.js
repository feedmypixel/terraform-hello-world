import Head from 'next/head'
import styles from '../styles/Home.module.css'

function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bens App</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi!
        </h1>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home;
