import { notFound } from 'next/navigation'

// import BlogPostMeta from '~/lib/components/blog/post/Meta'
// import GiscusWrapper from '~/lib/components/shared/GiscusWrapper'

import type { BlogPostProps } from './types'
import { sortedBlogPosts } from '@/lib/constants/blog'
import { unsplashImg } from '@/lib/utils/unsplashImg'
import BlogPostHead from './BlogPostHead'
import Image from 'next/image'
import MarkdownContent from '@/components/shared/MarkdownContent'
import ShareButtons from '@/components/shared/ShareButtons'

const BlogPost = ({ params }: BlogPostProps) => {
  const postData = sortedBlogPosts.find(({ id }) => id === params.id)

  if (!postData) {
    notFound()
  }

  return (
    <article>
      {/* <BlogPostMeta postData={postData} /> */}
      <div className='w-full aspect-[3/1] relative mb-8 shadow-lg rounded-[12px] md:rounded-[24px]'>
        <Image
          className='rounded-[12px] md:rounded-[24px] object-cover'
          src={unsplashImg(postData.cover, 2160)}
          fill
          alt='Cover Image'
        />
      </div>
      <BlogPostHead postData={postData} />
      <MarkdownContent rawContent={postData.body.raw} />
      <div className='grid gap-8 my-12'>
        <ShareButtons title={`Check out this blog post: ${postData.title}`} />
        {/* <GiscusWrapper category='Blog Post' categoryId='DIC_kwDOD-UOjM4B_fhR' /> */}
      </div>
    </article>
  )
}

export default BlogPost
