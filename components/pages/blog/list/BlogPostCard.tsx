import Link from 'next/link'
import * as React from 'react'
import Balancer from 'react-wrap-balancer'

import type { Blog } from 'contentlayer/generated'
import ViewCounter from '../../note/ViewCounter'
import { dateFormatLong } from '@/lib/dateFormat'
import { MotionDiv } from '@/components/motion/MotionDiv'
import Image from 'next/image'
import { unsplashImg } from '@/lib/utils/unsplashImg'
import { childAnimationProps, staggerAnimationProps } from '@/constants/animation'
// import { EVENT_TYPE_NAVIGATE } from '~/lib/constants/tracking'
// import { trackEvent } from '~/lib/utils/trackEvent'
// import type { ViewCounts } from '~/lib/services/db/views'
// import { dateFormatLong } from '~/lib/utils/dateFormat'
// import { unsplashImg } from '~/lib/utils/unsplashImg'

type BlogPostCardProps = {
  postData: Blog
  blogViewCounts: number
}

const BlogPostCard = ({ postData, blogViewCounts }: BlogPostCardProps) => {
  // const handleClickBlogPost = React.useCallback(() => {
  //   trackEvent({
  //     eventName: `Blog Post: ${postData.title}`,
  //     eventData: { type: EVENT_TYPE_NAVIGATE },
  //   })
  // }, [postData.title])

  // const viewCount = blogViewCounts.find((item) => item.slug?.includes(postData.id))?.count ?? 0

  const viewCount = blogViewCounts

  return (
    <MotionDiv {...childAnimationProps}>
      <Link
        className='grid gap-4 h-full rounded-3xl hover:scale-[1.03] transition-all ease-out'
        href={`/blog/${postData.id}`}
        aria-label={`Open ${postData.title} ${dateFormatLong(postData.date)} - ${
          postData.readTime?.text
        }`}
        // onClick={handleClickBlogPost}
        // width='100%'
        // gap={4}
        // transition='0.2s ease-out'
        // _hover={{
        //   transform: 'scale(1.03, 1.03)',
        // }}
      >
        <div className='relative w-full aspect-[3/1] bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 overflow-hidden shadow-lg rounded-md md:rounded-xl'>
          <Image
            src={unsplashImg(postData.cover)}
            alt='Cover Image'
            fill
            className='object-cover w-full h-full rounded-md md:rounded-xl'
          />
        </div>
        {/* 
        <AspectRatio width='full' ratio={3 / 1} boxShadow='lg' borderRadius={{ base: 12, md: 24 }}>
          <Image src={unsplashImg(postData.cover)} fit='cover' borderRadius={12} />
        </AspectRatio> */}

        <div>
          <h2 className='font-heading mb-2 font-bold text-lg'>
            <Balancer>{postData.title}</Balancer>
          </h2>
          <p className='font-sans text-xs text-[#808080]'>
            {dateFormatLong(postData.date)} - {postData.readTime?.text}
            {' | '}
            <ViewCounter slug={`/blog/${postData.id}`} count={viewCount} As='span' />
          </p>
        </div>
      </Link>
    </MotionDiv>
  )
}

export default BlogPostCard
