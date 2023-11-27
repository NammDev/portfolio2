'use client'

import dynamic from 'next/dynamic'
import type { ReactNode } from 'react'

// import { useCommandCenter } from '~/lib/components/commands/hook'

const Header = dynamic(() => import('./Header'))
// const Footer = dynamic(() => import('./Footer'))

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  //   useCommandCenter()

  return (
    <div className='bg-background text-foreground min-h-screen pb-16 md:pb-160 pt-24 transition duration-400 ease-out'>
      <Header />
      <div className='flex flex-col items-center relative z-10 space-y-8'>
        <div className='layoutBlock'>{children}</div>
        {/* <Footer /> */}
      </div>
      {/* <TabBar /> */}
    </div>
  )
}

export default Layout
