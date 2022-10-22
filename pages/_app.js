import '../styles/globals.css'


import "react-responsive-carousel/lib/styles/carousel.min.css";
import Navbar from '../components/Navbar'; // requires a loader
import Footer from '../components/Footer'; // requires a loader
import { SessionProvider } from "next-auth/react"

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      {/* <Navbar /> */}
      <Component {...pageProps} />
      {/* <Footer />S */}
    </SessionProvider>
  )
}
