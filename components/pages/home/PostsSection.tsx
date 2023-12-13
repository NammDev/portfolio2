'use client'

import { Blog } from '@/.contentlayer/generated'
import BlogPostPreview from '@/components/blog/posts/BlogPostPreview'
import Link from 'next/link'
import * as React from 'react'
import { FaArrowRight } from 'react-icons/fa'

// import { EVENT_TYPE_NAVIGATE } from '~/lib/constants/tracking'
// import { trackEvent } from '~/lib/utils/trackEvent'

type PostsSectionProps = {
  data: Array<Blog>
}

const PostsSection = ({ data }: PostsSectionProps) => {
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
        {data.map((postData) => (
          <BlogPostPreview postData={postData} key={postData.id} />
        ))}
      </div>

      <div>
        <Link
          href='/blog'
          className='font-heading transition-all items-center inline-flex appearance-none justify-center select-none border-2 relative whitespace-nowrap outline-none outline-offset-2 leading-[1.2] font-semibold h-12 min-w-[3rem] text-lg text-foreground rounded-2xl ps-6 pe-6 hover:border-buttonHoverBorder1 hover:shadow-sm hover:bg-buttonBackground1'
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
