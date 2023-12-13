'use client'

// import { Button, Grid, Tooltip } from '@chakra-ui/react'
import Link from 'next/link'
import * as React from 'react'

// import { EVENT_TYPE_LINK, EVENT_TYPE_NAVIGATE } from '~/lib/constants/tracking'
// import { trackEvent } from '~/lib/utils/trackEvent'

const ProjectListBottomNav = () => {
  //   const handleClickOtherProjects = React.useCallback(() => {
  //     trackEvent({
  //       eventName: 'Featured Projects: Click Other Projects',
  //       eventData: { type: EVENT_TYPE_NAVIGATE },
  //     })
  //   }, [])

  //   const handleClickPortfolioPage = React.useCallback(() => {
  //     trackEvent({
  //       eventName: 'Featured Projects: Click See More detailed Porfolio',
  //       eventData: { type: EVENT_TYPE_LINK },
  //     })
  //   }, [])

  return (
    <div className='grid font-heading gap-4 md:gap-6 md:grid-cols-2 grid-cols-1'>
      <Link
        href='/projects/other'
        className='w-full font-heading transition-all items-center inline-flex appearance-none justify-center select-none border-2 relative whitespace-nowrap outline-none outline-offset-2 leading-[1.2] font-semibold h-12 min-w-[3rem] text-lg text-foreground rounded-2xl  ps-6 pe-6 hover:border-buttonHoverBorder1 hover:shadow-sm hover:bg-buttonBackground1'
        // onClick={handleClickOtherProjects}
      >
        Other Projects
      </Link>

      {/* <Tooltip
        label='to view the detailed portfolio page, you must ask for the password through contacting me first, as I build the portfolio page for the one who really have interest to work with me'
        aria-label='portfolio view tooltip'
      > */}
      <Link
        href='/portfolio'
        className='w-full font-heading transition-all border-0 items-center inline-flex appearance-none justify-center select-none relative whitespace-nowrap outline-none outline-offset-2 leading-[1.2] font-semibold h-12 min-w-[3rem] text-lg text-buttonForeground1 bg-buttonBackground1 rounded-2xl hover:border-2
        hover:bg-buttonHover1 hover:shadow-sm hover:border-buttonHoverBorder1 ps-6 pe-6'
        //   onClick={handleClickPortfolioPage}
      >
        see more detailed portfolio
      </Link>
      {/* </Tooltip> */}
    </div>
  )
}

export default ProjectListBottomNav
