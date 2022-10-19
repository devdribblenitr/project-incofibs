import '../styles/globals.css'
import '../styles/gallery.css'
import '../styles/style_registration.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { SessionProvider } from "next-auth/react"

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
