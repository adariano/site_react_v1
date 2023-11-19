import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Card from '@/components/Card'
import Link from 'next/link'


export default function Home() {
  return (
    <>
      <Head>
        <title>site_react_v1</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <section className={styles.Cardcontainer}>
          <Card/>
          <Card/>
          <Card/>
        </section>
      </main>
      <Link href='/cardapio'>Cárdapio</Link>
    </>
  );
}
