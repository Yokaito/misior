import { FC } from 'react'
import * as S from './styles'

export const PageNotFound: FC = () => {
  return (
    <>
      <S.PageNotFoundWrapper>
        <S.PageNotFoundTitle>404</S.PageNotFoundTitle>
        <S.PageNotFoundSubtitle>
          Oops 404! A página não pode ser encontrada.
        </S.PageNotFoundSubtitle>
        <S.PageNotFoundText>
          Desculpe, mas a página que você está procurando não pode ser
          encontrada ou não existe.
        </S.PageNotFoundText>
      </S.PageNotFoundWrapper>
    </>
  )
}

export default PageNotFound
