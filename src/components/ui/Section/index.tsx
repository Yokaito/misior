import * as S from './styles'
import type * as T from './types'
import { Border } from '@/components/ui/Border'

export const Section = ({ children }: T.SectionProps) => {
  return (
    <>
      <S.SectionWrapper>
        <Border />
        <S.SectionContent>{children}</S.SectionContent>
        <Border bottom />
      </S.SectionWrapper>
    </>
  )
}

export default Section
