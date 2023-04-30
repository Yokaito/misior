import Link from 'next/link'
import styled, { css } from 'styled-components'

export const StreamersInfoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  ${({ theme }) => css`
    color: ${theme.color.default.white};
    font-size: ${theme.text.size[0]};
    font-weight: ${theme.text.weight.regular};
    gap: ${theme.spacings[1]};
    text-decoration: none;
  `};

  &:hover {
    text-decoration: underline;
  }
`
