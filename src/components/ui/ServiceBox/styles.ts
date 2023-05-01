import styled, { css } from 'styled-components'
import { BoxImages } from './images'

import type * as T from './types'

export const ServiceBoxWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: max-content;
`

export const ServiceBoxHeader = styled.div`
  position: relative;
  height: 31px;
`

export const ServiceBoxIconHeader = styled.div`
  position: absolute;
  width: 64px;
  height: 64px;
  top: -28px;
  z-index: ${({ theme }) => theme.zIndex.top};
`

export const ServiceBoxTitle = styled.h3`
  position: absolute;
  width: 100%;
  text-align: center;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  line-height: 2;
  font-size: ${({ theme }) => theme.text.size[2]};
  color: ${({ theme }) => theme.color.primary.default};
  font-family: ${({ theme }) => theme.text.family.fondamento};
  text-shadow: -1px -1px 0 ${({ theme }) => theme.color.default.black},
    1px -1px 0 ${({ theme }) => theme.color.shadows.primary.default},
    -1px 1px 0 ${({ theme }) => theme.color.default.black},
    1px 1px 0 ${({ theme }) => theme.color.default.black};
`

export const ServiceBoxContent = styled.div<T.ServiceBoxStyleProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  ${({ boxImage }) => css`
    background: ${`url(${BoxImages[boxImage].src}) no-repeat center center`};
    height: ${BoxImages[boxImage].height}px;
  `}

  width: 100%;
  background-size: contain;
  padding: 2px 10px;
`

export const ServiceBoxContentButtonWrapper = styled.div`
  position: absolute;
  bottom: -18px;
  width: 100%;
`

export const ServiceBoxContentButtonContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`
