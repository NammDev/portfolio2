import Balancer from 'react-wrap-balancer'

import type { Blog } from 'contentlayer/generated'
import { dateFormatLong } from '@/lib/dateFormat'
import DetailViewCounts from '@/components/shared/DetailViewCounts'
// import DetailViewCounts from '~/lib/components/shared/DetailViewCounts'
// import ShareButtons from '~/lib/components/shared/ShareButtons'
// import { dateFormatLong } from '~/lib/utils/dateFormat'

type BlogPostHeadProps = {
  postData: Blog
}

const BlogPostHead = ({ postData }: BlogPostHeadProps) => {
  return (
    <div className='grid gap-12 mb-12'>
      <div className='grid gap-8'>
        <h1 className='font-heading lg:text-[3.75rem] text-[3rem] leading-[1] font-bold'>
          <Balancer>{postData.title}</Balancer>
        </h1>

        <div>
          <p className='font-sans text-sm text-[gray]'>
            {dateFormatLong(postData.date)} - {postData.readTime?.text}
            {' | '}
            <DetailViewCounts slug={`/blog/${postData.id}`} As='span' />
          </p>
        </div>
      </div>

      {/* <ShareButtons title={`Check out this blog post: ${postData.title}`} /> */}
    </div>
  )
}

export default BlogPostHead
