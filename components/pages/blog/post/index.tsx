import { notFound } from 'next/navigation'

// import BlogPostHead from '~/lib/components/blog/post/Head'
// import BlogPostMeta from '~/lib/components/blog/post/Meta'
// import GiscusWrapper from '~/lib/components/shared/GiscusWrapper'
// import MarkdownContent from '~/lib/components/shared/MarkdownContent'
// import ShareButtons from '~/lib/components/shared/ShareButtons'

import type { BlogPostProps } from './types'
import { sortedBlogPosts } from '@/lib/constants/blog'
import { unsplashImg } from '@/lib/utils/unsplashImg'
import BlogPostHead from './BlogPostHead'
import Image from 'next/image'
import MarkdownContent from '@/components/shared/MarkdownContent'

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
      {/* <Grid marginY={12} gap={8}>
        <ShareButtons title={`Check out this blog post: ${postData.title}`} />
        <GiscusWrapper category='Blog Post' categoryId='DIC_kwDOD-UOjM4B_fhR' />
      </Grid> */}
    </article>
  )
}

export default BlogPost
