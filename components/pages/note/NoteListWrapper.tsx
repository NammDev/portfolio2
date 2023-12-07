'use client'

import { MotionDiv } from '@/components/motion/MotionDiv'
import { childAnimationProps, staggerAnimationProps } from '@/constants/animation'
import { sortedNotes } from '@/lib/constants/note'
// import debounce from 'lodash-es/debounce'
import React from 'react'
import NoteCard from './NoteCard'

// import NoteCard from '~/lib/components/notes/NoteCard'
// import PostSearch from '~/lib/components/shared/PostSearch'
// import type { ViewCounts } from '~/lib/services/db/views'

const notes = sortedNotes

type NoteListWrapperProps = {
  noteViewCounts: number
}

const NoteListWrapper = ({ noteViewCounts }: NoteListWrapperProps) => {
  const [keyword, setKeyword] = React.useState<string>('')

  const filteredNotes = notes.filter((note) => {
    const title = note.title.toLowerCase()
    const desc = note.description.toLowerCase()
    const tags = note.tags?.map((tag) => tag.toLowerCase())
    const comparator = [title, desc, ...(tags ?? [])]
    const query = keyword.toLowerCase()

    let found = false
    comparator.forEach((key) => {
      if (key.includes(query)) {
        found = true
      }
    })
    return found
  })

  // eslint-disable-next-line react-hooks/exhaustive-deps
  // const handleChangeKeyword = React.useCallback(
  //   debounce((event: React.ChangeEvent<HTMLInputElement>) => {
  //     setKeyword(event.target.value)
  //   }, 150),
  //   []
  // )
  return (
    <>
      {/* <PostSearch keyword={keyword} onChange={handleChangeKeyword} placeholder='Search Note' /> */}

      <MotionDiv className='grid gap-6 grid-cols-1 md:grid-cols-2' {...staggerAnimationProps}>
        {filteredNotes.map((item) => (
          <MotionDiv {...childAnimationProps} key={item.id}>
            <NoteCard data={item} noteViewCounts={noteViewCounts} />
          </MotionDiv>
        ))}
      </MotionDiv>
    </>
  )
}

export default NoteListWrapper
