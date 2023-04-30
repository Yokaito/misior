import styled from 'styled-components'

export const NewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings[3]};
`
