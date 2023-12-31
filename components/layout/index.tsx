'use client'

import dynamic from 'next/dynamic'
import type { ReactNode } from 'react'
import { Next13ProgressBar } from 'next13-progressbar'
import { ThemeProvider } from 'next-themes'
import { Toaster } from '../ui/toaster'
import { useCommandCenter } from '../commands/hook'

const Header = dynamic(() => import('./Header'))
const Footer = dynamic(() => import('./Footer'))
const TabBar = dynamic(() => import('./TabBar'))

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  useCommandCenter()

  return (
    <ThemeProvider attribute='class' enableSystem={true}>
      <Toaster />
      <div className='bg-background font-sans text-foreground min-h-screen pb-16 md:pb-160 pt-24 transition duration-400 ease-out'>
        <Next13ProgressBar
          height='3px'
          color='#4A5568'
          options={{ showSpinner: false }}
          showOnShallow
        />
        <Header />
        <div className='flex flex-col items-center relative z-10 space-y-8'>
          <main className='layoutBlock'>{children}</main>
          <Footer />
        </div>
        <TabBar />
      </div>
    </ThemeProvider>
  )
}

export default Layout
