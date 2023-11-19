import { GetServerSideProps, InferGetServerSidePropsType } from "next"
import Head from "next/head"

type ProdutoInfo = {
    name: string
    descricao: string
    ingredientes: []
    preco: number
}

export const getServerSideProps: GetServerSideProps<{
    produto: ProdutoInfo
}> = (async (context) => {
    const {id} = context.query
    const res = await fetch(`https://github.com/EdPPF/dados-listaNext/blob/main/produtos/${id}.json`)
    const produto = await res.json()
    return { props: {produto} }
})

export default function Produto({produto}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return(
        <div>
            <Head><title>{produto.name}</title></Head>
            <h1>{produto.descricao}</h1>
            <h2>{produto.ingredientes.join(, )}</h2>
        </div>
    )
}