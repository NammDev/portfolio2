'use client'

import { dateFormatLong } from '@/lib/dateFormat'
import Link from 'next/link'
import * as React from 'react'

// import type { Blog } from 'contentlayer/generated'
// import type { MotionBoxProps } from '~/lib/components/motion/MotionBox'
// import MotionBox from '~/lib/components/motion/MotionBox'
// import { EVENT_TYPE_NAVIGATE } from '~/lib/constants/tracking'
// import { trackEvent } from '~/lib/utils/trackEvent'

// type BlogPostPreviewProps = {
//   postData: Blog
//   wrapperProps?: MotionBoxProps
// }

const BlogPostPreview = ({ title, date, read }: { title: string; date: string; read: string }) => {
  // const hoverColor = useColorModeValue('gray.300', 'gray.50')
  // const handleClickBlogPost = React.useCallback(() => {
  //   trackEvent({
  //     eventName: `Blog Post: ${postData.title}`,
  //     eventData: { type: EVENT_TYPE_NAVIGATE },
  //   })
  // }, [postData.title])

  return (
    <div>
      <div className='w-full duration-400 ease-out hover:text-[#ececec] text-[#ebebeb] hover:underline'>
        <Link href={`/blog`} className='flex-wrap items-center w-full'>
          <h2 className='mb-2 leading-[1.2] text-[1.25rem] font-bold font-heading'>{title}</h2>
          <p className='text-xs'>
            {dateFormatLong(date)} - {read}
          </p>
        </Link>
      </div>
    </div>
  )
}

export default BlogPostPreview
