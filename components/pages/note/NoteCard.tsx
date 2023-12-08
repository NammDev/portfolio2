'use client'

import Link from 'next/link'
import * as React from 'react'
import Balancer from 'react-wrap-balancer'

import type { Note } from 'contentlayer/generated'
import ViewCounter from './ViewCounter'
// import ViewCounter from '~/lib/components/shared/ViewCounter'
// import { EVENT_TYPE_NAVIGATE } from '~/lib/constants/tracking'
// import type { ViewCounts } from '~/lib/services/db/views'
// import { trackEvent } from '~/lib/utils/trackEvent'

type NoteCardProps = {
  data: Note
  noteViewCounts: number
}

const NoteCard = ({ data, noteViewCounts }: NoteCardProps) => {
  //   const backgroundColor = useColorModeValue('', 'gray.700')

  //   const viewCount = noteViewCounts.find((item) => item.slug?.includes(data.id))?.count ?? 0

  //   const handleClickNote = React.useCallback(() => {
  //     trackEvent({
  //       eventName: `Note: ${data.title}`,
  //       eventData: { type: EVENT_TYPE_NAVIGATE },
  //     })
  //   }, [data.title])

  const viewCount = noteViewCounts

  return (
    <Link
      className='flex flex-col justify-between bg-transparent cursor-pointer gap-4 p-8 h-full border-2  rounded-3xl border-[#414042] hover:shadow-lg hover:border-[#676668] hover:bg-[#272628] transition-all ease-out'
      href={`/notes/${data.id}`}
      aria-label={`Open ${data.title} note`}
    >
      <div className='grid gap-2'>
        <h2 className='font-heading font-bold text-[1.25rem] leading-[1.2]'>
          <Balancer>{data.title}</Balancer>
        </h2>
        <p className='text-[0.875rem]'>
          <Balancer>{data.description}</Balancer>
        </p>
      </div>

      <div className='grid gap-2 font-sans'>
        <div className='flex gap-2 flex-wrap font-sans leading-[1]'>
          {data.tags?.map((tag) => (
            <p
              className='border text-[#38B2AC] py-0.5 px-2 rounded-xl transition-all ease-out text-xs !leading-[18px]'
              key={tag}
            >
              {tag}
            </p>
          ))}
        </div>

        <ViewCounter
          className='text-xs !leading-[18px]'
          slug={`/notes/${data.id}`}
          count={viewCount}
        />
      </div>
    </Link>
  )
}

export default NoteCard
