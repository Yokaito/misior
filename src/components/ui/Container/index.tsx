import type * as T from './types'
import * as S from './styles'
import BoxFrame from '../Box/Frame'

export const Container = ({ title, children }: T.ContainerProps) => {
  return (
    <>
      <BoxFrame backgroundColor={8}>
        <S.ContainerTitle>{title}</S.ContainerTitle>
      </BoxFrame>
      <S.ContainerWrapper>{children}</S.ContainerWrapper>
    </>
  )
}

export default Container
