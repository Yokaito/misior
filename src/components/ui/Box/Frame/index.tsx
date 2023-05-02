import * as S from './styles'
import type * as T from './types'
import BorderFrame from '@/components/ui/Border/Frame'

export const BoxFrame = ({
  children,
  backgroundColor = 4,
}: T.BoxFrameProps) => {
  return (
    <S.BoxFrameWrapper>
      <BorderFrame />
      <BorderFrame orientation="vertical" />
      <S.BoxFrameContent backgroundColor={backgroundColor}>
        {children}
      </S.BoxFrameContent>
      <BorderFrame orientation="vertical" right />
      <BorderFrame bottom />
    </S.BoxFrameWrapper>
  )
}

export default BoxFrame
