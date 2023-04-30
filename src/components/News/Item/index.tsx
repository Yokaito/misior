import { BarImage } from '@/components/ui/BarImage'
import { useFormattedDate } from '@/sdk/hooks/useTimezone'
import Image from 'next/image'
import * as S from './styles'
import * as T from './types'

import IconCommunity from '@/assets/images/icons/32/newsicon_community.png'
import IconDevelopment from '@/assets/images/icons/32/newsicon_development.png'
import IconSupport from '@/assets/images/icons/32/newsicon_support.png'

export const Icons = {
  community: {
    image: IconCommunity,
    alt: 'Community',
  },
  development: {
    image: IconDevelopment,
    alt: 'Development',
  },
  support: {
    image: IconSupport,
    alt: 'Support',
  },
}

export const NewsItem = ({
  icon,
  title,
  date,
  author,
  content,
}: T.NewsItemProps) => {
  const formattedDate = useFormattedDate({ date })

  return (
    <>
      <S.NewsItemWrapper>
        <BarImage background="red">
          <S.NewsItemContainer>
            <Image
              src={Icons[icon].image}
              alt={Icons[icon].alt}
              height={Icons[icon].image.height}
              width={Icons[icon].image.width}
              priority
            />
            <S.NewsItemDate>{formattedDate} -</S.NewsItemDate>
            <S.NewsItemTitle>{title}</S.NewsItemTitle>
            {author && (
              <S.NewsItemAuthor>
                Author: <b>{author}</b>
              </S.NewsItemAuthor>
            )}
          </S.NewsItemContainer>
        </BarImage>
        <S.NewsItemContentContainer>
          <S.NewsItemContent dangerouslySetInnerHTML={{ __html: content }} />
        </S.NewsItemContentContainer>
      </S.NewsItemWrapper>
    </>
  )
}

export default NewsItem
