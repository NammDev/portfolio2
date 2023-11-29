'use client'

import BlogPostPreview from '@/components/blog/posts/BlogPostPreview'
// import { Box, Button, Grid, Heading, Stack } from '@chakra-ui/react'
import Link from 'next/link'
import * as React from 'react'
import { FaArrowRight } from 'react-icons/fa'

// import type { Blog } from 'contentlayer/generated'
// import BlogPostPreview from '~/lib/components/blog/BlogPostPreview'
// import { EVENT_TYPE_NAVIGATE } from '~/lib/constants/tracking'
// import { trackEvent } from '~/lib/utils/trackEvent'

const PostsSection = () => {
  //   const handleClickViewAllPosts = React.useCallback(() => {
  //     trackEvent({
  //       eventName: 'Home: View All Posts',
  //       eventData: { type: EVENT_TYPE_NAVIGATE },
  //     })
  //   }, [])

  return (
    <section className='flex-col flex gap-4'>
      <h2 className='font-bold !leading-[1.2] lg:text-[1.875rem] font-heading mb-2'>
        Recent Posts
      </h2>

      <div className='grid gap-8'>
        {/* {data.map((postData) => (
          <BlogPostPreview postData={postData} key={postData.id} />
        ))} */}
        <BlogPostPreview
          title='How to Secure Your Firebase Project'
          date='May 13, 2021'
          read='3 min read'
        />
        <BlogPostPreview title='2020 Recap' date='Dec 31, 2020' read='6 min read' />
      </div>

      <div>
        <Link
          href='/projects'
          className='font-heading transition-all items-center inline-flex appearance-none justify-center select-none border-2 relative whitespace-nowrap outline-none outline-offset-2 leading-[1.2] font-semibold h-12 min-w-[3rem] text-lg text-[rgba(255,255,255,0.92)] rounded-2xl border-[rgba(255,255,255,0.16)] ps-6 pe-6 hover:border-gray-500 hover:shadow-sm hover:bg-[#ffffff14]'
        >
          view all posts{' '}
          <span className='inline-flex self-center shrink-0 ms-2'>
            <FaArrowRight />
          </span>
        </Link>
      </div>
    </section>
  )
}

export default PostsSection
