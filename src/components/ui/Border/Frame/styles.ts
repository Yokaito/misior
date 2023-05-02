import styled, { css } from 'styled-components'
import type * as T from './types'

import BorderFrameHorizontal from '@/assets/images/borders/box-frame-horizontal.gif'
import BorderFrameVertical from '@/assets/images/borders/box-frame-vertical.gif'
import CornerFrame from '@/assets/images/corners/box-frame-edge.gif'

export const BorderFrameVerticalWrapper = styled.div<T.FrameStylesProps>`
  position: absolute;
  background-image: ${`url(${BorderFrameVertical.src})`};
  background-repeat: repeat-y;
  width: ${BorderFrameVertical.width}px;
  height: 100%;
  top: 0;
  z-index: ${({ theme }) => theme.zIndex.top};

  ${({ right }) => css`
    ${right ? 'right' : 'left'}: 1px;
  `}
`

export const BorderFrameHorizontalWrapper = styled.div<T.FrameStylesProps>`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-between;
  background-image: ${`url(${BorderFrameHorizontal.src})`};
  background-repeat: repeat-x;
  height: ${BorderFrameHorizontal.height}px;
  z-index: ${({ theme }) => theme.zIndex.high};

  ${({ bottom }) => css`
    transform: ${bottom ? 'rotate(180deg)' : 'none'};
  `}
`

export const BorderFrameHorizontalCorner = styled.div<T.FrameStylesProps>`
  position: absolute;
  background-image: ${`url(${CornerFrame.src})`};
  background-repeat: no-repeat;
  background-position: center;
  width: ${CornerFrame.width}px;
  height: ${CornerFrame.height}px;
  top: -1px;

  ${({ right }) => css`
    ${right ? 'right' : 'left'}: 0;
  `}
`
