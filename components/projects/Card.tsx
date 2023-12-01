import Image from 'next/image'
import * as React from 'react'
import { Project } from '@/types/project'
import Link from 'next/link'

// import type { Project } from 'contentlayer/generated'
// import { EVENT_TYPE_LINK } from '~/lib/constants/tracking'
// import { trackEvent } from '~/lib/utils/trackEvent'

type CardProps = {
  project: Project
}

const Card = ({
  project: { title, icon, thumbnail, thumbnailDark, projectLink, playStoreLink, repoLink },
}: CardProps) => {
  const link = playStoreLink ?? projectLink ?? repoLink ?? ''

  // const handleClickProject = React.useCallback(() => {
  //   trackEvent({
  //     eventName: `Project Card: open ${title} | ${link}`,
  //     eventData: { type: EVENT_TYPE_LINK },
  //   })
  // }, [link, title])

  return (
    <Link
      href={link}
      target='_blank'
      rel='noopener'
      className='group transition-all cursor-pointer no-underline outline-none outline-offset-2 text-inherit'
      aria-label={`Link to ${title}`}
    >
      <div className='hover:border-white hover:shadow-md shadow-sm rounded-[20px] border-gray-800 border-2 cursor-pointer relative block items-center justify-center overflow-hidden transition duration-500 ease-out'>
        {thumbnail && (
          <div className='h-[200px] sm:h-[250px] md:h-[200px]'>
            <Image
              loading='lazy'
              width={1000}
              className='text-transparent object-cover object-[50%_0px] group-hover:blur-0 group-hover:scale-105 blur-sm transition-transform duration-200'
              height={200}
              decoding='async'
              data-nimg={1}
              src={thumbnail}
              alt={`${title}-thumbnail`}
            />
          </div>
        )}
        <div className='flex justify-end flex-col gap-4 absolute h-full z-20 w-full bg-[linear-gradient(to_top,rgba(0,0,0,0.5)_0%,rgba(237,242,247,0))] p-6 bottom-0'>
          <div className='flex items-center flex-row gap-2'>
            {icon && (
              <Image
                loading='lazy'
                decoding='async'
                data-nimg={1}
                src={icon}
                width={32}
                height={32}
                alt={title}
                style={{ color: 'transparent' }}
              />
            )}
            <p className='font-heading text-shadow font-bold text-white text-lg'>{title}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Card
