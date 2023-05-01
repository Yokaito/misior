import { Section } from '@/components/ui/Section'
import * as S from './styles'
import type * as T from './types'
import { BarImage } from '../BarImage'

export const Box = ({ padding, title, children, background }: T.BoxProps) => {
  return (
    <Section>
      <BarImage title={title} background={background} />
      <S.BoxWrapper padding={padding}>{children}</S.BoxWrapper>
    </Section>
  )
}

export default Box
