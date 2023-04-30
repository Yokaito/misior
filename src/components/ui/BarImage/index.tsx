import * as S from './styles'
import type * as T from './types'

export const BarImage = ({
  background = 'green',
  title,
  children,
}: T.BarImageProps) => {
  return (
    <S.BarImageWrapper background={background}>
      {title && <S.BarImageTitle>{title}</S.BarImageTitle>}
      {children}
    </S.BarImageWrapper>
  )
}
