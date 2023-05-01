import styled from 'styled-components'

import PedestalImage from '@/assets/images/general/pedestal-2.gif'

export const PedestalWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: ${() => `${PedestalImage.height}px`};
  background-image: url(${PedestalImage.src});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-color: transparent;
  overflow: hidden;
  top: -80px;
`

export const PedestalContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

export const PedestalMonsterBoost = styled.div`
  position: absolute;
  right: 57.5%;
  bottom: 25%;
`

export const PedestalBossBoost = styled.div`
  position: absolute;
  right: 22.5%;
  bottom: 25%;
`
