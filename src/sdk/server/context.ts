import * as trpc from '@trpc/server'
import * as trpcNext from '@trpc/server/adapters/next'
import prisma from '@/sdk/lib/prisma'

export const createContext = async (
  opts?: trpcNext.CreateNextContextOptions,
) => {
  return {
    req: opts?.req,
    clients: {
      prisma,
    },
  }
}

export type Context = trpc.inferAsyncReturnType<typeof createContext>
