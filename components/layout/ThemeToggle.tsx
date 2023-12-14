'use client'

import { useTheme } from 'next-themes'
import * as React from 'react'
import { RiMoonFill, RiSunFill } from 'react-icons/ri'

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
    <div className='relative'>
      <button
        aria-label='toggle theme mode'
        onClick={handleClickToggle}
        className='bg-transparent text-[unset] iconButton'
      >
        {theme === 'light' ? <RiMoonFill /> : <RiSunFill />}
      </button>
      <div className='absolute top-0 left-0'>{/* <Tooltip label='theme toggle' /> */}</div>
    </div>
  )
}

export default ThemeToggle
