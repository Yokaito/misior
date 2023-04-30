import styled from 'styled-components'
import BorderImage from '@/assets/images/borders/border-1.gif'

export const BorderWrapper = styled.div`
  height: 6px;
  background-image: ${`url(${BorderImage.src})`};
  display: flex;
  justify-content: space-between;
  position: relative;
`
