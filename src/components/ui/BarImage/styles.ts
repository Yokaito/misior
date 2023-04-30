import BackgroundGreen from '@/assets/images/section/title-background-green.gif'
import BackgroundBlue from '@/assets/images/section/title-background-blue.png'
import BackgroundCyan from '@/assets/images/section/title-background-cyan.gif'
import BackgroundDark from '@/assets/images/section/title-background-dark.gif'
import BackgroundBrown from '@/assets/images/section/title-background-brown.gif'
import BackgroundRed from '@/assets/images/section/title-background-red.gif'
import styled, { css } from 'styled-components'
import type * as T from './types'

const Backgrounds: T.BackgroundProps = {
  green: {
    img: BackgroundGreen.src,
    height: `24px`,
  },
  blue: {
    img: BackgroundBlue.src,
    height: `28px`,
  },
  dark: {
    img: BackgroundDark.src,
    height: `24px`,
  },
  brown: {
    img: BackgroundBrown.src,
    height: `24px`,
  },
  red: {
    img: BackgroundRed.src,
    height: `28px`,
  },
  cyan: {
    img: BackgroundCyan.src,
    height: `28px`,
  },
}

export const BarImageWrapper = styled.div<Pick<T.BarImageProps, 'background'>>`
  display: flex;
  align-items: center;
  background-repeat: repeat-x;
  background-size: contain;
  background-position: center;
  height: 24px;
  padding: ${({ theme }) => `0 ${theme.spacings[1]}`};

  ${({ background = 'green' }) => css`
    background-image: url(${Backgrounds[background].img});
    height: ${Backgrounds[background].height};
  `}
`

export const BarImageTitle = styled.h2`
  font-weight: ${({ theme }) => theme.text.weight.regular};
  font-size: ${({ theme }) => theme.text.size[3]};
  text-transform: capitalize;
  color: ${({ theme }) => theme.color.primary.default};
  font-family: ${({ theme }) => theme.text.family.fondamento};
  text-shadow: -1px -1px 0 ${({ theme }) => theme.color.default.black},
    1px -1px 0 ${({ theme }) => theme.color.shadows.primary.default},
    -1px 1px 0 ${({ theme }) => theme.color.default.black},
    1px 1px 0 ${({ theme }) => theme.color.default.black};
`
