import Incofibs from '../components/Incofibs'
import Nitr from '../components/Nitr';
import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function about() {
  return (
    <div>
    <Head>
        <title>InCoFIBS | NIT Rourkela | About</title>

        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta httpEquiv="x-ua-compatible" content="ie=edge"/>

        {/* *********** Meta SEO***********  */}
        <meta property="og:title" content="InCoFIBS-2023 will be held from 2nd to 4th February 2023, providing a platform for global experts and researchers to exchange ideas and recent advances in the various fields of Biological Sciences" />
        <meta name="keywords"  content="incofibsnitr,incofibsnitrkl,incofibsnitrourkela, incofibs,incofibs nitr, fest nitr, fest, festnitr, festnitrkl, nitr,nitrkl,nitrourkela,nit,rourkela,nit rourkela,LS nitrkl, life science, bio,bioscience, science, science nitr" />
        <meta name="description" content="InCoFIBS 2023 International Conference" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" 
    integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" 
    crossorigin="anonymous" referrerpolicy="no-referrer" />
        
        {/* *********** Meta Facebook SEO***********  */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://incofibsnitr.com/" />
        <meta property="og:image" content="https://incofibsnitr.com/logoBranding.png" />
        <meta property="og:image:width" content="806" />
        <meta property="og:image:height" content="280" /> <meta name="description" content="InCoFIBS 2023" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
          <Navbar />
      <Nitr/>
      <Incofibs/>
      <Footer/>
    </div>
  )
}

export default about