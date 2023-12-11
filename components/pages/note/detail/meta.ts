import { sortedNotes } from '@/lib/constants/note'
import type { Metadata } from 'next'

// import { sznmOgImage } from '~/lib/utils/sznmOgImage'
import { NoteDetailProps } from './types'

export const generateMetadata = ({ params }: NoteDetailProps): Metadata | undefined => {
  const data = sortedNotes.find(({ id }) => id === params?.id)

  if (!data) {
    return undefined
  }

  // const ogImage = sznmOgImage({
  //   heading: data.title,
  //   text: 'Notes | https://sznm.dev',
  // })

  return {
    title: data.title,
    alternates: {
      canonical: `/notes/${data.id}`,
    },
    // openGraph: {
    //   title: `sozonome | ${data.title}`,
    //   images: {
    //     url: ogImage,
    //     alt: `${data.title} og-image`,
    //   },
    // },
  }
}
