import styled, { css } from 'styled-components'
import type * as T from './types'

import ButtonImage from '@/assets/images/buttons/button.png'
import ButtonImageExtend from '@/assets/images/buttons/button-extend.png'

export const ButtonWrapper = styled.button<T.ButtonStyleProps>`
  background-repeat: no-repeat;
  height: 34px;
  cursor: pointer;
  position: relative;
  display: grid;
  place-content: center;
  transition: all 100ms ease-in-out;

  ${({ extend }) => css`
    background-image: ${extend
      ? `url(${ButtonImageExtend.src})`
      : `url(${ButtonImage.src})`};
    width: ${extend ? `150px` : `142px`};
  `}

  :hover {
    filter: brightness(1.1) contrast(1.1) saturate(1.1);
  }
`

export const ButtonText = styled.span`
  user-select: none;
  white-space: nowrap;
  word-wrap: break-word;
  overflow: hidden;
  margin: 0 0.7rem;
  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 0.02rem;
  color: ${({ theme }) => theme.color.primary.default};
  font-family: ${({ theme }) => theme.text.family.fondamento};
  text-shadow: -1px -1px 0 ${({ theme }) => theme.color.default.black},
    1px -1px 0 ${({ theme }) => theme.color.shadows.primary.default},
    -1px 1px 0 ${({ theme }) => theme.color.default.black},
    1px 1px 0 ${({ theme }) => theme.color.default.black};
`
