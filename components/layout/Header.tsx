import Link from 'next/link'
import * as React from 'react'
import { RiCommandFill } from 'react-icons/ri'
import Navigation from './Navigation'
import ThemeToggle from './ThemeToggle'
import CommandMenu from '../commands'
import { useCmdMenu } from '@/lib/cmd'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

// import { EVENT_TYPE_CTA } from '~/lib/constants/tracking'
// import { trackEvent } from '~/lib/utils/trackEvent'

const Header = () => {
  const { openCmdMenu } = useCmdMenu((state) => ({
    openCmdMenu: state.openCmdMenu,
  }))

  const handleOpenCommandCenter = React.useCallback(() => {
    // trackEvent({
    //   eventName: 'open cmd center',
    //   eventData: { type: EVENT_TYPE_CTA },
    // })
    openCmdMenu()
  }, [openCmdMenu])

  return (
    <>
      <header className='fixed top-0 z-30 bg-headerAlphaBackground backdrop-blur-[6px] w-full'>
        <div className='layoutBlock flex items-center'>
          <Link href='/'>
            <h1 className='text-md font-medium !leading-[1.2] md:text-xl font-heading'>namm.dev</h1>
          </Link>

          <div className='flex flex-1 self-stretch' />

          <div className='flex items-center ml-auto space-x-4'>
            <div className='hidden md:flex'>
              <Navigation />
            </div>

            <div className='flex gap-2'>
              <TooltipProvider delayDuration={100} skipDelayDuration={200}>
                <Tooltip>
                  <TooltipTrigger>
                    <button
                      aria-label='command-center'
                      className='iconButton bg-transparent text-[unset]'
                      onClick={handleOpenCommandCenter}
                    >
                      <RiCommandFill />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>command center</p>
                  </TooltipContent>
                </Tooltip>
                <ThemeToggle />
              </TooltipProvider>
            </div>
          </div>
        </div>
      </header>

      <CommandMenu />
    </>
  )
}

export default Header
