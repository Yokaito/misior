import styled from 'styled-components'
import type * as T from './types'
import MenuBoxTop from '@/assets/images/general/box-top.gif'
import MenuBoxBottom from '@/assets/images/general/box-bottom.gif'

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const MenuBorder = styled.div<Pick<T.MenuStyleProps, 'bottom'>>`
  background-image: ${({ bottom }) =>
    `url(${bottom ? MenuBoxBottom.src : MenuBoxTop.src})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 12px;
`

export const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  height: max-content;
`
