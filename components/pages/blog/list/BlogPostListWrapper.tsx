'use client'

import { staggerAnimationProps } from '@/constants/animation'
import { sortedBlogPosts } from '@/lib/constants/blog'
import debounce from 'lodash-es/debounce'
import * as React from 'react'
import BlogPostCard from './BlogPostCard'
import { MotionDiv } from '@/components/motion/MotionDiv'
import PostSearch from '@/components/shared/PostSearch'

// import type { ViewCounts } from '~/lib/services/db/views'

type BlogPostListWrapperProps = {
  blogViewCounts: number
}

const BlogPostListWrapper = ({ blogViewCounts }: BlogPostListWrapperProps) => {
  const [keyword, setKeyword] = React.useState<string>('')

  const filteredPosts = sortedBlogPosts.filter((post) =>
    post.title.toLowerCase().includes(keyword.toLowerCase())
  )

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleChangeKeyword = React.useCallback(
    debounce((event: React.ChangeEvent<HTMLInputElement>) => {
      setKeyword(event.target.value)
    }, 150),
    []
  )

  return (
    <>
      <PostSearch keyword={keyword} onChange={handleChangeKeyword} placeholder='Search Post' />

      <MotionDiv className='grid gap-16 md:grid-cols-2 my-12' {...staggerAnimationProps}>
        {!filteredPosts.length && <p className='font-sans'>No posts found.</p>}
        {filteredPosts.map((postData) => (
          <BlogPostCard postData={postData} key={postData.title} blogViewCounts={blogViewCounts} />
        ))}
      </MotionDiv>
    </>
  )
}

export default BlogPostListWrapper
