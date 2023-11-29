// import { Box, Text, Stack, useColorModeValue } from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'
import * as React from 'react'

// import type { Project } from 'contentlayer/generated'
// import { EVENT_TYPE_LINK } from '~/lib/constants/tracking'
// import { trackEvent } from '~/lib/utils/trackEvent'

type CardProps = {
  project: Project
}

export type Project = {
  /** File path relative to `contentDirPath` */
  _id: string
  type: 'Project'
  title: string
  description: string
  published?: boolean | undefined
  highlight?: boolean | undefined
  featured?: boolean | undefined
  sznmApps?: boolean | undefined
  stacks?: string[] | undefined
  date?: string | undefined
  projectLink?: string | undefined
  repoLink?: string | undefined
  appStoreLink?: string | undefined
  playStoreLink?: string | undefined
  icon?: string | undefined
  thumbnail?: string | undefined
  thumbnailDark?: string | undefined
  projectType?: string | undefined
  /** Markdown file body */
  id: string
}

const Card = () => {
  //   const dynamicThumbnail = useColorModeValue(thumbnail, thumbnailDark || thumbnail)
  //   const borderHighlight = useColorModeValue('gray', 'white')
  //   const thumbnailUrl = thumbnail ? dynamicThumbnail : null

  //   const overlayBgGradient = useColorModeValue(
  //     'linear(to-t, rgba(45, 55, 72, 0.6) 0%, rgba(203, 213, 224, 0.4) 80%, rgba(237, 242, 247, 0))',
  //     'linear(to-t, rgba(0, 0, 0, 0.5) 0%, rgba(237, 242, 247, 0))'
  //   )

  //   const link = playStoreLink ?? projectLink ?? repoLink

  //   const handleClickProject = React.useCallback(() => {
  //     trackEvent({
  //       eventName: `Project Card: open ${title} | ${link}`,
  //       eventData: { type: EVENT_TYPE_LINK },
  //     })
  //   }, [link, title])

  return (
    <Link
      target='_blank'
      rel='noopener'
      className='group transition-all cursor-pointer no-underline outline-none outline-offset-2 text-inherit'
      href='https://wussh.sznm.dev'
      aria-label='Link to wussh'
    >
      <div className='hover:border-white hover:shadow-md shadow-sm rounded-[20px] border-gray-800 border-2 cursor-pointer relative block items-center justify-center overflow-hidden transition duration-500 ease-out'>
        <div className='h-[200px] sm:h-[250px] md:h-[200px]'>
          <Image
            alt='wussh-thumbnail'
            loading='lazy'
            width={1000}
            className='text-transparent object-cover object-[50%_0px] group-hover:blur-0 group-hover:scale-105 blur-sm transition-transform duration-200'
            height={200}
            decoding='async'
            data-nimg={1}
            src='/_next/image?url=%2Fapp_preview%2Fwussh.png&w=2048&q=75'
          />
        </div>
        <div className='flex justify-end flex-col gap-4 absolute h-full z-20 w-full bg-[linear-gradient(to_top,rgba(0,0,0,0.5)_0%,rgba(237,242,247,0))] p-6 bottom-0'>
          <div className='flex items-center flex-row gap-2'>
            <Image
              alt='wussh'
              loading='lazy'
              width={32}
              height={32}
              decoding='async'
              data-nimg={1}
              src='/app_icons/link.svg'
              style={{ color: 'transparent' }}
            />
            <p className='font-heading text-shadow font-bold text-white text-lg'>wussh</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Card
