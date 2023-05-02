import styled, { css } from 'styled-components'

export const ContainerWrapper = styled.div`
  height: max-content;
  border: 2px solid #55636c;
  border-top: none;
  margin: 0 1px;
  padding: ${({ theme }) => `${theme.spacings[1]} ${theme.spacings[2]}`};
  background-color: #f1e0c5;
`

export const ContainerTitle = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.text.size[2]};
    font-weight: ${theme.text.weight.semibold};
    color: ${theme.color.default.white};
    font-family: ${theme.text.family.primary};
  `}
`
