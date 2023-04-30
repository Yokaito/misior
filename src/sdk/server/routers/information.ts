import { router, publicProcedure } from '../trpc'

const MockNews: Array<{
  icon: 'community' | 'development' | 'support'
  title: string
  date: Date
  author: string
  content: string
}> = [
  {
    icon: 'community',
    title: 'Community News',
    date: new Date(),
    author: 'Kamity',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec',
  },
  {
    icon: 'support',
    title: 'Support News',
    date: new Date(),
    author: 'Kuriti',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec',
  },
  {
    icon: 'development',
    title: 'Development News',
    date: new Date(),
    author: 'Yokaito',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec',
  },
]

export const informationRouter = router({
  news: publicProcedure.query(() => {
    return {
      news: MockNews,
    }
  }),
})
