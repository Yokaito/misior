import * as S from './styles'
import type * as T from './types'

export const Corner = ({ ...props }: T.CornerProps) => {
  return <S.CornerWrapper {...props}></S.CornerWrapper>
}

export default Corner
