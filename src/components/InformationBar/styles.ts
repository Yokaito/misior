import Link from 'next/link'
import styled, { css } from 'styled-components'

export const InformationBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const InformationSocial = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacings[4]};
`

export const InformationPlayersOnline = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`

export const InformationPlayersOnlineText = styled(Link)`
  text-decoration: none;
  ${({ theme }) => css`
    color: ${theme.color.default.white};
    font-size: ${theme.text.size[0]};
    font-weight: ${theme.text.weight.regular};
  `};

  &:hover {
    text-decoration: underline;
  }
`

export const InformationSocialContainer = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  ${({ theme }) => css`
    color: ${theme.color.default.white};
    font-size: ${theme.text.size[0]};
    font-weight: ${theme.text.weight.regular};
    gap: ${theme.spacings[1]};
  `};
`
