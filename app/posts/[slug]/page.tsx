import { Mdx } from '@/components/features/mdx/Mdx'
import { getPost } from '@/lib/posts'
import { notFound } from 'next/navigation'
import {ViewCount}  from './viewCount'

export default async function RoutePage (props: { params: { slug: string } }) {
  const post = await getPost(props.params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className='prose prose-sm lg:prose-lg'>
      <div className='flex items-center gap-2'>
        <p className='text-xs text-muted muted-foreground'>
          {post.publishedAt}
        </p>
        <ViewCount slug={props.params.slug} />
      </div>

      <h1>{post.title}</h1>
      <Mdx>{post.content}</Mdx>
    </div>
  )
}
