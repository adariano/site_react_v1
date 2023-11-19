import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import styles from '@/styles/Home.module.css'
import Head from 'next/head'
import Link from 'next/link'

type Categoria = {
    id: number
    name: string
}

export const getServerSideProps = (async (context) => {
    const res = await fetch('https://github.com/EdPPF/dados-listaNext/blob/main/categorias.json')
    const Item = await res.json()
    return { props: { Item } }
}) satisfies GetServerSideProps <{ Item : Categoria}>

export default function CardapioHome({Item}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <div>
            <Head>
                <title>Cardápio</title>
            </Head>
            <h1>{Item.id}.{Item.name}</h1>
            <main className={styles.main}>
                <Link href={`/cardapio/${Item.id}`}></Link>
                <h3>{Item.id}.{Item.name}</h3>
            </main>
        </div>
    )
}