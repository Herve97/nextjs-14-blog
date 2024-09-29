'use server'
import { redis } from '@/lib/redis'
import { cookies } from 'next/headers'

export const incrementViews = async (
  slug: string
): Promise<{ views: number }> => {
  const cookieList = cookies()
  const currentPostCookieDate = cookieList.get(`postview:${slug}`)?.value

  if (currentPostCookieDate) {
    return {
      views: Number(await redis.get(`postview:${slug}`))
    }
    // return await redis.get(`postview:${slug}`)
    // return await redis.incrby(`postview:${slug}`, 1);
  }  

  const newViewCount = await redis.incr(`postview:${slug}`)
  cookieList.set(`postview:${slug}`, new Date().toISOString(), {
    path: '/',
    maxAge: 60 * 60 * 12, //24h
    httpOnly: true
  })

  return { views: Number(newViewCount) }
}
