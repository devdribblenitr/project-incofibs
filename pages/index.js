import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css' 



// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>InCoFIBS | NIT Rourkela</title>
        <meta name="description" content="InCoFIBS 2k23 International Conference" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" 
    integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" 
    crossorigin="anonymous" referrerpolicy="no-referrer" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <h1 className='display-1'>Home Page</h1>
      </main>
   {/* <Footer/> */}
   <Footer/>
    </div>
  )
}