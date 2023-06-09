import '@/styles/fonts.css'
import type { AppProps, AppType } from 'next/app'
import { Analytics } from '@vercel/analytics/react'
import { trpc } from '@/sdk/lib/trpc'
import { ThemeProvider } from 'styled-components'
import theme from '@/styles/theme'
import GlobalStyle from '@/styles/global/createGlobalStyle'
import Layout from '@/layout'

export const MyApp: AppType<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <GlobalStyle />
      </ThemeProvider>
      <Analytics />
    </>
  )
}

export default trpc.withTRPC(MyApp)
