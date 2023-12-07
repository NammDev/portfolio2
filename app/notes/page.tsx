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
      {/* <Grid gap={2}>
        <Heading>Notes</Heading>
        <Text>
          A collection of my personal brief notes, tips, short form posts, or snippets I use
          throughout my projects.
        </Text>
        <Flex>
          <Button as={Link} href='/til' size='sm' variant='outline'>
            T.I.L.
          </Button>
        </Flex>
      </Grid> */}

      <NoteListWrapper noteViewCounts={noteViewCounts} />
    </div>
  )
}

export default NoteList
