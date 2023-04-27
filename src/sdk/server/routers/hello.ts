import { router, publicProcedure } from '../trpc'

export const helloRouter = router({
  greetings: publicProcedure.query(() => {
    return {
      message: 'Hello, world!',
    }
  }),
})
