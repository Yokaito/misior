import styled, { css } from 'styled-components'

export const SectionWrapper = styled.section`
  height: max-content;
  ${({ theme }) => css`
    background-color: ${theme.color.background[2]};
    border-left: 2px solid ${theme.color.borders.primary.default};
    border-right: 2px solid ${theme.color.borders.primary.default};
  `}
  position: relative;
`

export const SectionContent = styled.div``
