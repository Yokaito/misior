import styled, { css } from 'styled-components'

export const NewsItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings[2]};
`

export const NewsItemContentContainer = styled.div`
  padding: 0 ${({ theme }) => theme.spacings[1]};
`

export const NewsItemContent = styled.div`
  all: revert !important;

  * {
    all: revert !important;
  }
`

export const NewsItemContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: ${({ theme }) => theme.spacings[1]};
  align-items: center;
`

export const NewsItemDate = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.text.size[0]};
    font-weight: ${theme.text.weight.regular};
    color: ${theme.color.default.white};
    font-family: ${theme.text.family.primary};
  `};
`

export const NewsItemTitle = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.text.size[2]};
    font-weight: ${theme.text.weight.semibold};
    color: ${theme.color.default.white};
    font-family: ${theme.text.family.primary};
  `};
`

export const NewsItemAuthor = styled.span`
  margin-left: auto;
  ${({ theme }) => css`
    font-size: ${theme.text.size[0]};
    font-weight: ${theme.text.weight.regular};
    color: ${theme.color.default.white};
    font-family: ${theme.text.family.primary};
  `};

  b {
    font-size: inherit;
  }
`
