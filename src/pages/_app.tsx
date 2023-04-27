import '@/styles/globals.css'
import type { AppProps, AppType } from 'next/app'
import { Analytics } from '@vercel/analytics/react'
import { trpc } from '@/sdk/lib/trpc'

export const MyApp: AppType<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}

export default trpc.withTRPC(MyApp)
