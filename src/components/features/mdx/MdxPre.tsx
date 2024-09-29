import { cn } from '@/lib/utils'
import { ComponentPropsWithoutRef, ReactNode } from 'react'

export type MdxPreProps = ComponentPropsWithoutRef<'pre'> & {
  children: ReactNode
}

export const MdxPre = ({ children, className, ...props }: MdxPreProps) => {
  return (
    <div className='bg-red-500 p-4 mb-4 bg-accent'>
      <div className='px-2 py-1'>
        <div className='flex items-center space-x-2 p-2'>
          <span className='block size-2 rounded-full bg-red-500'></span>
          <span className='block size-2 rounded-full bg-yellow-500'></span>
          <span className='block size-2 rounded-full bg-green-500'></span>
        </div>
      </div>
      <pre
        className={cn('relative overflow-auto lg:text-base', className)}
        style={{ marginTop: 0, marginBottom: 0 }}
        {...props}
      >
        {children}
      </pre>
    </div>
  )
}
