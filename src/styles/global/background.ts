import { css } from 'styled-components'

import image from '@/assets/images/background/background-4.webp'

export const Background = css`
  body {
    height: 100vh;

    ::before {
      content: '';
      position: fixed;
      left: 0;
      right: 0;
      z-index: ${({ theme }) => theme.zIndex.below};
      display: block;
      background-color: ${({ theme }) => theme.color.background[1]};
      background-image: ${`url(${image.src})`};
      background-size: auto;
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-position: center top;
    }
  }
`
