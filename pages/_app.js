import '../styles/globals.css'
//import '../styles/gallery.css'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
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