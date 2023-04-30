import Image from 'next/image'
import * as S from './styles'
import type * as T from './types'
import LogoArtwork from '@/assets/images/general/tibia-logo-artwork.gif'
import Link from 'next/link'

export const MenuBox = ({
  children,
  showArtworkInTop = true,
}: T.MenuBoxProps) => {
  return (
    <S.MenuBoxWrapper>
      {showArtworkInTop && (
        <Link href="/">
          <S.MenuBoxLogoArtwork>
            <Image
              src={LogoArtwork.src}
              priority
              alt="logo artwork"
              width={LogoArtwork.width}
              height={LogoArtwork.height}
            />
          </S.MenuBoxLogoArtwork>
        </Link>
      )}

      <S.MenuBoxBorder />
      <S.MenuBoxContent>
        <S.MenuBoxChain />
        {children}
        <S.MenuBoxChain right />
      </S.MenuBoxContent>
      <S.MenuBoxBorder bottom />
    </S.MenuBoxWrapper>
  )
}

export default MenuBox
