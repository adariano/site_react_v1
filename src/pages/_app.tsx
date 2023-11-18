import Navbar from '@/components/navbar'
import Card from '@/components/Card'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Navbar/> */}
      <Component {...pageProps} />
      {/* <Card/> */}
    </>
  );
}
