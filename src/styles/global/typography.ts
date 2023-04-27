import { css } from 'styled-components'

import theme from '@/styles/theme'

export const Typography = css`
  *,
  body,
  html {
    font-family: ${theme.text.family.primary}, ui-monospace, SFMono-Regular,
      Consolas, 'Liberation Mono', Menlo, monospace;
    font-size: 14.4px;

    letter-spacing: 0.01em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    @media ${theme.devices.notebook} {
      font-size: 16px;
    }
  }
`
