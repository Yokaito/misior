import Head from 'next/head'
import { trpc } from '@/sdk/lib/trpc'
import Box from '@/components/ui/Box'
import News from '@/components/News'

export default function Home() {
  const { data } = trpc.information.news.useQuery()

  return (
    <>
      <Head>
        <title>Misior | Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box title="news" padding="medium">
        <News news={data?.news} />
      </Box>
    </>
  )
}
