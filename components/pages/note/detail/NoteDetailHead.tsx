import Balancer from 'react-wrap-balancer'

import type { Note } from 'contentlayer/generated'

type NoteDetailHeadProps = {
  data: Note
}

const NoteDetailHead = ({ data }: NoteDetailHeadProps) => {
  return (
    <div className='grid gap-8'>
      <h1 className='font-heading lg:text-6xl text-5xl font-bold'>
        <Balancer>{data.title}</Balancer>
      </h1>
      <p className='text-[gray]'>{data.description}</p>
    </div>
  )
}

export default NoteDetailHead
