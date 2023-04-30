import styled, { css } from 'styled-components'
import type * as T from './types'

const paddingVariants = (padding: T.Padding) => {
  return {
    small: css`
      padding: ${({ theme }) => theme.spacings[1]};
    `,
    medium: css`
      padding: ${({ theme }) => theme.spacings[2]};
    `,
    large: css`
      padding: ${({ theme }) => theme.spacings[3]};
    `,
  }[padding]
}

export const BoxWrapper = styled.div<Pick<T.BoxProps, 'padding'>>`
  ${({ theme, padding = 'small' }) => css`
    margin: ${theme.spacings[1]};
    background-color: ${theme.color.background[3]};
    border: 1px solid ${theme.color.borders.secondary.default};

    ${paddingVariants(padding)}
  `}
`
