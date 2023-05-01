import styled from 'styled-components'

export const PageNotFoundWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings[4]};
  margin: ${({ theme }) => theme.spacings[5]} 0;
`

export const PageNotFoundTitle = styled.h1`
  color: ${({ theme }) => theme.color.system.info};
  font-size: ${({ theme }) => theme.text.size[9]};
  color: ${({ theme }) => theme.color.primary.default};
  font-weight: ${({ theme }) => theme.text.weight.bold};
  font-family: ${({ theme }) => theme.text.family.fondamento};
  text-shadow: -1px -1px 0 ${({ theme }) => theme.color.default.black},
    1px -1px 0 ${({ theme }) => theme.color.shadows.primary.default},
    -1px 1px 0 ${({ theme }) => theme.color.default.black},
    1px 1px 0 ${({ theme }) => theme.color.default.black};
`

export const PageNotFoundSubtitle = styled.h2`
  font-family: ${({ theme }) => theme.text.family.roboto};
  color: ${({ theme }) => theme.color.quaternary.default};
  font-size: ${({ theme }) => theme.text.size[6]};
`

export const PageNotFoundText = styled.span`
  font-family: ${({ theme }) => theme.text.family.roboto};
  color: ${({ theme }) => theme.color.quaternary.default};
  font-size: ${({ theme }) => theme.text.size[4]};
  max-width: 50%;
  text-align: center;
`
