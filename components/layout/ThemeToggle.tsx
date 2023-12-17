'use client'

import { useTheme } from 'next-themes'
import * as React from 'react'
import { RiMoonFill, RiSunFill } from 'react-icons/ri'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

// import { EVENT_TYPE_CTA } from '~/lib/constants/tracking'
// import { trackEvent } from '~/lib/utils/trackEvent'

const ThemeToggle = () => {
  const [mounted, setMounted] = React.useState(false)
  const { theme, setTheme } = useTheme()

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const handleClickToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  if (!mounted) {
    return null
  }

  //   const handleClickToggle = React.useCallback(() => {
  //     // trackEvent({
  //     //   eventName: `toggle theme to ${colorMode === 'light' ? 'dark' : 'light'}`,
  //     //   eventData: { type: EVENT_TYPE_CTA },
  //     // })
  //     // toggleColorMode()
  //   }, [])
  return (
    <Tooltip>
      <TooltipTrigger>
        <button
          aria-label='toggle theme mode'
          onClick={handleClickToggle}
          className='bg-transparent text-[unset] iconButton'
        >
          {theme === 'light' ? <RiMoonFill /> : <RiSunFill />}
        </button>
      </TooltipTrigger>
      <TooltipContent>
        <p>theme toggle</p>
      </TooltipContent>
    </Tooltip>
  )
}

export default ThemeToggle
