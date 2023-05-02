import * as S from './styles'
import { InformationBar } from '@/components/InformationBar'
import { Copyright } from '@/components/Copyright'
import { NewstickerList } from '@/components/Newsticker'
import { LoginBox } from '@/components/Sidebar/LoginBox'
import { DownloadBox } from '@/components/Sidebar/DownloadBox'
import { Menu } from '@/components/Sidebar/Menu'
import ServiceBox from '@/components/ui/ServiceBox'

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
          <Menu />
        </S.MenuLeftWrapper>
        <S.MainContentWrapper>
          <InformationBar />
          <NewstickerList />
          <main id="main-content">{children}</main>
          <Copyright />
        </S.MainContentWrapper>
        <S.MenuRightWrapper>
          <ServiceBox
            showPedestal
            showIcon={true}
            headImage="Head9"
            boxImage="Box8"
            href="/premium"
            buttonOptions={{
              hasButton: true,
              buttonLabel: 'Buy Now',
            }}
          />
          <ServiceBox headImage="Head8" boxImage="Box6" href="/server-info" />
          <ServiceBox
            headImage="Head7"
            boxImage="Box7"
            href="https://google.com.br"
          />
        </S.MenuRightWrapper>
      </S.LayoutWrapper>
    </>
  )
}

export default Layout
