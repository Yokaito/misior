import styled from 'styled-components'

export const CopyRightWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2px;
`

export const CopyRightTitle = styled.p`
  color: ${({ theme }) => theme.color.default.white};
  font-size: ${({ theme }) => theme.text.size[1]};
`

export const CopyRightCreator = styled.p`
  a {
    color: ${({ theme }) => theme.color.default.white};
    font-size: ${({ theme }) => theme.text.size[1]};
  }
`

export const CopyRightText = styled.p`
  color: ${({ theme }) => theme.color.default.white};
  font-size: ${({ theme }) => theme.text.size[1]};
`
