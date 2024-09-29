import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { getPosts } from '@/lib/posts'
import Link from 'next/link'

export default async function Home () {
  const fileNames = await getPosts()
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {fileNames.map(post => (
        <Card key={post.slug} className='flex flex-col'>
          <CardHeader>
            <CardTitle>{post.title}</CardTitle>
            <CardDescription>{post.description}</CardDescription>
          </CardHeader>
          <CardContent className='flex-grow'>
            <p className='text-sm text-muted-foreground'>
              Publié le{' '}
              {new Date(post.publishedAt).toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href={`/posts/${post.slug}`}
              className='text-primary hover:underline'
            >
              Lire l'article
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
