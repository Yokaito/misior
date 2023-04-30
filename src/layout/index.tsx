import * as S from './styles'
import InformationBar from '@/components/InformationBar'
import Copyright from '@/components/Copyright'
import NewstickerList from '@/components/Newsticker'
import LoginBox from '@/components/LoginBox'
import { DownloadBox } from '@/components/DownloadBox'

type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <S.LayoutWrapper id="layout-wrapper">
        <S.MenuLeftWrapper>
          <LoginBox />
          <DownloadBox />
        </S.MenuLeftWrapper>
        <S.MainContentWrapper>
          <InformationBar />
          <NewstickerList />
          <main id="main-content">{children}</main>
          <Copyright />
        </S.MainContentWrapper>
        <S.MenuRightWrapper>MenuRight</S.MenuRightWrapper>
      </S.LayoutWrapper>
    </>
  )
}

export default Layout
