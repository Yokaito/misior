import Link from 'next/link'
import * as S from './styles'

export const Copyright = () => {
  return (
    <S.CopyRightWrapper>
      <S.CopyRightTitle>
        Copyright by Misior. Todos os direitos reservados.
      </S.CopyRightTitle>

      <S.CopyRightText>Layout por CipSoft GmbH</S.CopyRightText>
      <S.CopyRightCreator>
        <Link target="_blank" href="https://github.com/Yokaito">
          Criado por Kamity
        </Link>
      </S.CopyRightCreator>
    </S.CopyRightWrapper>
  )
}

export default Copyright
