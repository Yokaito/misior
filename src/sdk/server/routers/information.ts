import { router, publicProcedure } from '../trpc'
import { MockNews, MockNewsticker } from './mocks'

export const informationRouter = router({
  news: publicProcedure.query(() => {
    return {
      news: MockNews,
    }
  }),
  newstickers: publicProcedure.query(() => {
    return {
      newstickers: MockNewsticker,
    }
  }),
})
