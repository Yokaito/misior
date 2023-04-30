import * as S from './styles'
import type * as T from './types'

import { Corner } from '@/components/ui/Corner'

export const Border = ({ bottom }: T.BorderProps) => {
  return (
    <S.BorderWrapper>
      <Corner bottom={bottom} />
      <Corner right bottom={bottom} />
    </S.BorderWrapper>
  )
}

export default Border
