// export { metadata } from '~/lib/pages/note/list/meta'

// import { Button, Flex, Grid, Heading, Text } from '@chakra-ui/react'
import NoteListWrapper from '@/components/pages/note/NoteListWrapper'
import Link from 'next/link'

// import { getAllViewCount } from '~/lib/services/db/views'

export const dynamic = 'force-dynamic'

const NoteList = async () => {
  //   const noteViewCounts = await getAllViewCount('/notes/')
  const noteViewCounts = Math.floor(Math.random() * 100)

  return (
    <div className='grid gap-12'>
      <div className='grid gap-2'>
        <h1 className='lg:text-[2.25rem] lg:leading-[1.2] font-heading font-bold leading-[1.33] text-[1.875rem]'>
          Notes
        </h1>
        <p className='font-sans'>
          A collection of my personal brief notes, tips, short form posts, or snippets I use
          throughout my projects.
        </p>
        <div className='flex'>
          <Link
            className='transition-all items-center inline-flex appearance-none justify-center select-none border-2 relative whitespace-nowrap outline-none outline-offset-2 leading-[1.2] font-semibold h-8 text-[rgba(255,255,255,0.92)] rounded-2xl border-[rgba(255,255,255,0.16)] ps-3 pe-3 hover:border-gray-500 hover:shadow-sm hover:bg-[#ffffff14] text-sm'
            href='/til'
          >
            T.I.L.
          </Link>
        </div>
      </div>

      <NoteListWrapper noteViewCounts={noteViewCounts} />
    </div>
  )
}

export default NoteList
