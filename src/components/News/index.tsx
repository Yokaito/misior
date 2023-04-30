import * as S from './styles'
import type * as T from './types'
import { NewsItem } from './Item'

export const News = ({ news = [] }: T.News) => {
  return (
    <S.NewsWrapper>
      {news.map((news, index) => (
        <NewsItem
          key={index}
          icon={news.icon}
          title={news.title}
          date={news.date}
          author={news.author}
          content={news.content}
        />
      ))}
    </S.NewsWrapper>
  )
}

export default News
