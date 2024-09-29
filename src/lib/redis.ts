import { Redis } from '@upstash/redis'

export const redis = new Redis({
  url: 'https://leading-bass-23929.upstash.io',
  token: process.env.REDIS_TOKEN,
})
