import styled from 'styled-components'
import type * as T from './types'
import MenuBoxTop from '@/assets/images/general/box-top.gif'
import MenuBoxBottom from '@/assets/images/general/box-bottom.gif'
import LoginBoxBackground from '@/assets/images/general/loginbox-background.gif'
import Chain from '@/assets/images/borders/chain.gif'

export const MenuBoxWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`

export const MenuBoxBorder = styled.div<T.MenuBoxBorderProps>`
  background-image: ${({ bottom }) =>
    `url(${bottom ? MenuBoxBottom.src : MenuBoxTop.src})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 12px;
`

export const MenuBoxContent = styled.div`
  background-image: url(${LoginBoxBackground.src});
  background-repeat: repeat-y;
  background-position: center;
  height: max-content;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex;
`

export const MenuBoxChain = styled.div<T.MenuBoxChainProps>`
  background: ${`url(${Chain.src})`};
  width: 7px;
  position: absolute;
  height: 100%;
  right: ${({ right }) => (right ? '5px' : null)};
  left: ${({ right }) => (!right ? '5px' : null)};
  background-repeat: repeat-y;
`

export const MenuBoxLogoArtwork = styled.div`
  position: absolute;
  top: -153px;
  left: -10px;
`
