'use client'

import { Blog } from '@/.contentlayer/generated'
import { dateFormatLong } from '@/lib/dateFormat'
import Link from 'next/link'
import * as React from 'react'

// import type { Blog } from 'contentlayer/generated'
// import type { MotionBoxProps } from '~/lib/components/motion/MotionBox'
// import MotionBox from '~/lib/components/motion/MotionBox'
// import { EVENT_TYPE_NAVIGATE } from '~/lib/constants/tracking'
// import { trackEvent } from '~/lib/utils/trackEvent'

type BlogPostPreviewProps = {
  postData: Blog
}

const BlogPostPreview = ({ postData }: BlogPostPreviewProps) => {
  // const hoverColor = useColorModeValue('gray.300', 'gray.50')
  // const handleClickBlogPost = React.useCallback(() => {
  //   trackEvent({
  //     eventName: `Blog Post: ${postData.title}`,
  //     eventData: { type: EVENT_TYPE_NAVIGATE },
  //   })
  // }, [postData.title])

  return (
    <div>
      <div className='w-full duration-400 ease-out hover:text-[#8d8c8e] dark:hover:text-[#ececec] hover:underline'>
        <Link href={`/blog`} className='flex-wrap items-center w-full'>
          <h2 className='mb-2 leading-[1.2] text-[1.25rem] font-bold font-heading'>
            {postData.title}
          </h2>
          <p className='text-xs'>
            {dateFormatLong(postData.date)} - {postData.readTime?.text}
          </p>
        </Link>
      </div>
    </div>
  )
}

export default BlogPostPreview
