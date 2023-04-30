import { useState } from 'react'
import * as S from './styles'
import type * as T from './types'
import { useFormattedDate } from '@/sdk/hooks/useTimezone'

export const NewstickerItem = ({ icon, date, text }: T.NewstickerItemProps) => {
  const [active, setActive] = useState(false)
  const formattedDate = useFormattedDate({ date })

  return (
    <S.NewstickerItemWrapper
      isActive={active}
      onClick={() => setActive(!active)}
    >
      <S.NewstickerItemIcon icon={icon} />
      <S.NewstickerItemDate>{formattedDate}</S.NewstickerItemDate>
      <S.NewstickerItemText
        isActive={active}
        dangerouslySetInnerHTML={{
          __html: text,
        }}
      />
      <S.NewstickerItemShow isActive={active} />
    </S.NewstickerItemWrapper>
  )
}

export default NewstickerItem
