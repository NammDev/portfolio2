import { notFound } from 'next/navigation'

// import GiscusWrapper from '~/lib/components/shared/GiscusWrapper'

import type { NoteDetailProps } from './types'

import { sortedNotes } from '@/lib/constants/note'
import NoteDetailHead from './NoteDetailHead'
import DetailViewCounts from '@/components/shared/DetailViewCounts'
import ShareButtons from '@/components/shared/ShareButtons'
import MarkdownContent from '@/components/shared/MarkdownContent'

const NoteDetail = ({ params }: NoteDetailProps) => {
  const data = sortedNotes.find(({ id }) => id === params?.id)

  if (!data) {
    notFound()
  }

  return (
    <article>
      <div className='grid gap-8'>
        <NoteDetailHead data={data} />
        <DetailViewCounts slug={`/notes/${params.id}`} />
        <ShareButtons title={`Check out this note: ${data.title}`} />
      </div>
      <div className='h-8' />
      <MarkdownContent rawContent={data.body.raw} />
      <div className='h-8' />

      <ShareButtons title={`Check out this note: ${data.title}`} />

      <div className='my-12'>
        {/* <GiscusWrapper category='Notes' categoryId='DIC_kwDOD-UOjM4CQX_7' /> */}
      </div>
    </article>
  )
}

export default NoteDetail
