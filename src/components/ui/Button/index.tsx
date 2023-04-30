import type * as T from './types'
import * as S from './styles'

export const Button = ({ text, extend, ...props }: T.ButtonProps) => {
  return (
    <S.ButtonWrapper extend={extend} {...props}>
      <S.ButtonText>{text}</S.ButtonText>
    </S.ButtonWrapper>
  )
}

export default Button
