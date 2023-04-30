import { router } from '../trpc'
import { informationRouter } from './information'

export const appRouter = router({
  information: informationRouter,
})

export type AppRouter = typeof appRouter
