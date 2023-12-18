import { getAllViewCount } from '@/lib/db/view'
import BlogPostListWrapper from './BlogPostListWrapper'

const BlogPostList = async () => {
  const blogPostViewCounts = await getAllViewCount('/blog/')

  return (
    <div>
      <div className='grid mb-[22px] gap-2'>
        <h1 className='lg:text-[2.25rem] lg:leading-[1.2] font-heading font-bold leading-[1.33] text-[1.875rem]'>
          Blog Posts
        </h1>
        <p className='font-sans'>Just some writings</p>
      </div>

      <BlogPostListWrapper blogViewCounts={blogPostViewCounts} />
    </div>
  )
}

export default BlogPostList
