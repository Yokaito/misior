import styled from 'styled-components'
import type * as T from './types'

export const BoxFrameWrapper = styled.div`
  height: max-content;
  position: relative;
`

export const BoxFrameContent = styled.div<
  Pick<T.BoxFrameProps, 'backgroundColor'>
>`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.default};
  height: max-content;
  margin: 0 2px;
  padding: ${({ theme }) => `${theme.spacings[1]} ${theme.spacings[2]}`};
  background-color: ${({ theme, backgroundColor = 4 }) =>
    backgroundColor ? theme.color.background[backgroundColor] : 'transparent'};
`
