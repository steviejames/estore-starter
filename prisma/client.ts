import { PrismaClient } from '@prisma/client'

// Evita múltiplas instâncias do Prisma Client em ambiente de desenvolvimento
const globalForPrisma = global as unknown as { db: PrismaClient }


export const db =
  globalForPrisma.db ||
  new PrismaClient({
    log: ['info', 'warn', 'error'],
  })
if (process.env.NODE_ENV !== 'production') globalForPrisma.db = db
