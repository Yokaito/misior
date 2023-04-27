import Head from 'next/head'
import { trpc } from '@/sdk/lib/trpc'

export default function Home() {
  const { data } = trpc.hello.greetings.useQuery()

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{data?.message}</main>
    </>
  )
}
