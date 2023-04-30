import Link from 'next/link'
import styled from 'styled-components'

export const LoginBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings[1]};
`

export const LoginBoxTitle = styled(Link)`
  text-decoration: none;
  text-align: center;
  font-size: ${({ theme }) => theme.text.size[1]};
  color: ${({ theme }) => theme.color.primary.default};
  font-family: ${({ theme }) => theme.text.family.fondamento};
  text-shadow: -1px -1px 0 ${({ theme }) => theme.color.default.black},
    1px -1px 0 ${({ theme }) => theme.color.shadows.primary.default},
    -1px 1px 0 ${({ theme }) => theme.color.default.black},
    1px 1px 0 ${({ theme }) => theme.color.default.black};
  letter-spacing: 0.05rem;
  user-select: none;
  white-space: nowrap;
  word-wrap: break-word;
  overflow: hidden;
  cursor: pointer;

  transition: all 30ms ease-in-out;

  :hover {
    transform: scale(1.05);
  }
`
