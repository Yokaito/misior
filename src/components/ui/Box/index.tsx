import { Section } from '@/components/ui/Section'
import * as S from './styles'
import type * as T from './types'
import { BarImage } from '../BarImage'

export const Box = ({ padding, title, children }: T.BoxProps) => {
  return (
    <Section>
      <BarImage title={title} />
      <S.BoxWrapper padding={padding}>{children}</S.BoxWrapper>
    </Section>
  )
}

export default Box
