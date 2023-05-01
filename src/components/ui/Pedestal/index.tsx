import Image from 'next/image'
import * as S from './styles'

import DefaultOutfit from '@/assets/images/general/outfit.png'

export const Pedestal = () => {
  return (
    <S.PedestalWrapper>
      <S.PedestalContainer>
        <S.PedestalMonsterBoost>
          <Image src={DefaultOutfit} alt="outfit" />
        </S.PedestalMonsterBoost>
        <S.PedestalBossBoost>
          <Image src={DefaultOutfit} alt="outfit" />
        </S.PedestalBossBoost>
      </S.PedestalContainer>
    </S.PedestalWrapper>
  )
}
