import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css' 

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from '@fortawesome/free-brands-svg-icons'
import Profile from './Profile'
import HeroSection from '../components/Herosection'
import ImportantDate from '../components/ImportantDate'
import ConferenceTracks from '../components/ConferenceTracks'
import ConferenceProgram from '../components/ConferenceProgram'
import ContactInfo from '../components/ContactInfo'
import  ConferenceVenue from '../components/ConferenceVenue'

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

      </main>
      <ImportantDate/>
      <ConferenceTracks/>
      <ConferenceVenue/>
      <ContactInfo/>
      <ConferenceProgram/>
      <Footer/>
      {/* <HeroSection/> */}

    </div>
  )
}