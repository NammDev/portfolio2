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
        {/* <Flex>
          <Button as={Link} href='/til' size='sm' variant='outline'>
            T.I.L.
          </Button>
        </Flex> */}
      </div>

      <NoteListWrapper noteViewCounts={noteViewCounts} />
    </div>
  )
}

export default NoteList
