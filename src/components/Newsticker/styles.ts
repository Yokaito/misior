import styled from 'styled-components'
import { NewstickerItemWrapper } from './Item/styles'

export const NewstickerListWrapper = styled.div`
  display: grid;
  grid-auto-flow: row;
  font-size: ${({ theme }) => theme.text.size[1]};

  ${NewstickerItemWrapper}:first-child {
    background-color: ${({ theme }) => theme.color.background[6]} !important;
  }

  ${NewstickerItemWrapper}:nth-child(odd) {
    background-color: ${({ theme }) => theme.color.background[4]};
  }

  ${NewstickerItemWrapper}:nth-child(even) {
    background-color: ${({ theme }) => theme.color.background[5]};
  }
`
