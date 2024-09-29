import Link from 'next/link'

export const Header = () => {
  return (
    <header className='my-4 border px-3 py-2 flex items-center gap-2 rounded-lg bg-card shadow-xl'>
      <p>
        Codelynx <span className='text-primary'>.dev</span>
      </p>
      <div className="ml-auto"></div>
      <Link href={'/'} className='text-primary'>
        Posts
      </Link>
    </header>
  )
}
