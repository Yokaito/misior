import Box from '@/components/ui/Box'
import * as S from './styles'
import { NewstickerItem } from './Item'
import { trpc } from '@/sdk/lib/trpc'

export const NewstickerList = () => {
  const { data } = trpc.information.newstickers.useQuery()

  return (
    <>
      <Box title="news ticker">
        <S.NewstickerListWrapper>
          {data?.newstickers?.slice(0, 5).map((newsticker, index) => (
            <NewstickerItem key={index} {...newsticker} />
          ))}
        </S.NewstickerListWrapper>
      </Box>
    </>
  )
}

export default NewstickerList
