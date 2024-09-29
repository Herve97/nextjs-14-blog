// Statiquement, récupérer tous les posts dans le dossier content
import path from 'path'
import fs from 'fs/promises'
import { z } from 'zod'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content')
const postSchema = z.object({
  title: z.string().min(45).max(65),
  description: z.string(),
  publishedAt: z.coerce.string(),
  published: z.boolean().optional().default(false)
})

type Post = z.infer<typeof postSchema> & {
  slug: string
  content: string
}
export const getPosts = async () => {
  const files = await fs.readdir(postsDirectory)
  const fileNames = files.filter(f => f.endsWith('.mdx'))

  const posts: Post[] = []
  for await (const fileName of fileNames) {
    const fullPath = path.join(postsDirectory, fileName)
    const fileContent = await fs.readFile(fullPath, 'utf-8')
    // console.log("The file content: ", fileContent);
    const frontMatter = matter(fileContent)
    // console.log("Front Matter: ", frontMatter);

    const safeData = postSchema.safeParse(frontMatter.data)

    // console.log("Safe Data: ", safeData.data);

    if (!safeData.success) {
      console.log(`Error parsing file: ${fileName}`)
      safeData.error.issues.forEach(issue => {
        console.error(` - ${issue.path.join('  -> ')}: ${issue.message}`)
      })
      continue
    }

    // .replace(/^\d+-/, "")

    posts.push({
      ...safeData.data,
      slug: fileName.replace('.mdx', ''),
      content: frontMatter.content
    })
  }

  return posts
}

export const getPost = async (slug: string) => {
  const posts = await getPosts()
  return posts.find(post => post.slug === slug)
}
