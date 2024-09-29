export const Footer = () =>{
  return (
    <footer className='my-4 border px-3 py-2 flex items-center gap-2 rounded-lg bg-card shadow-xl'>
      <p>
        © {new Date().getFullYear()} Codelynx <span className='text-primary'>.dev</span>
      </p>
      <div className="ml-auto"></div>
      <a href="https://github.com/codelynx" target="_blank" rel="noopener noreferrer" className='text-primary'>
        GitHub
      </a>
      <a href="https://twitter.com/codelynx" target="_blank" rel="noopener noreferrer" className='text-primary'>
        Twitter
      </a>
    </footer>
  )
}