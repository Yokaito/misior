import * as S from './styles'
import type * as T from './types'

export const BorderFrame = ({
  bottom,
  orientation = 'horizontal',
  right,
}: T.BorderFrameProps) => {
  if (orientation === 'vertical') {
    return <S.BorderFrameVerticalWrapper right={right} />
  }

  return (
    <S.BorderFrameHorizontalWrapper bottom={bottom}>
      <S.BorderFrameHorizontalCorner />
      <S.BorderFrameHorizontalCorner right />
    </S.BorderFrameHorizontalWrapper>
  )
}

export default BorderFrame
