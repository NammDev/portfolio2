'use client'

import * as React from 'react'

// import { EVENT_TYPE_LINK } from '~/lib/constants/tracking'
// import { trackEvent } from '~/lib/utils/trackEvent'

import type { MotionLinkProps } from './types'
import { MotionDiv } from '@/components/motion/MotionDiv'
import { childAnimationProps } from '@/constants/animation'
import Link from 'next/link'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

const MotionLink = ({ platformName, url, icon: Icon }: MotionLinkProps) => {
  // const { platformName, url, icon } = props

  // const handleClickLink = React.useCallback(() => {
  //   trackEvent({
  //     eventName: `About: Click Social Link - ${platformName} | ${url}`,
  //     eventData: { type: EVENT_TYPE_LINK },
  //   })
  // }, [platformName, url])

  return (
    <MotionDiv className='h-[30.5px] text-foreground' {...childAnimationProps}>
      <TooltipProvider delayDuration={100} skipDelayDuration={200}>
        <Tooltip>
          <TooltipTrigger>
            <Link
              className='transition-all cursor-pointer no-underline outline-none outline-offset-2 text-inherit font-sans'
              href={url}
            >
              <Icon className='w-6 h-6 inline-block leading-[1rem] shrink-0 text-[1.5rem]' />
            </Link>
            <TooltipContent side='bottom'>
              <p>{platformName}</p>
            </TooltipContent>
          </TooltipTrigger>
        </Tooltip>
      </TooltipProvider>
    </MotionDiv>
  )
}

export default MotionLink
