import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>InCoFIBS | NIT Rourkela</title>
        <meta name="description" content="InCoFIBS 2k23 International Conference" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <h1 className='display-1'>Home Page</h1>
      </main>
    <footer></footer>
    </div>
  )
}
