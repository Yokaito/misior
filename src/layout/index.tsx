import InformationBar from '@/components/InformationBar'
import * as S from './styles'
import Box from '@/components/ui/Box'
import Copyright from '@/components/Copyright'

type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <S.LayoutWrapper id="layout-wrapper">
        <S.MenuLeftWrapper>MenuLeft</S.MenuLeftWrapper>
        <S.MainContentWrapper>
          <InformationBar />
          <Box title="news ticker" />
          <main id="main-content">{children}</main>
          <Copyright />
        </S.MainContentWrapper>
        <S.MenuRightWrapper>MenuRight</S.MenuRightWrapper>
      </S.LayoutWrapper>
    </>
  )
}

export default Layout
