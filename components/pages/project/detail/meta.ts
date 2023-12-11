import type { Metadata } from 'next'

// import { sznmOgImage } from '~/lib/utils/sznmOgImage'
import { ProjectDetailProps } from './types'
import { sortedProjects } from '@/lib/constants/project'

export const generateMetadata = ({ params }: ProjectDetailProps): Metadata | undefined => {
  const projectData = sortedProjects.find(({ id }) => id === params.id)

  if (!projectData) {
    return undefined
  }

  return {
    title: projectData.title,
    alternates: {
      canonical: `/projects/${projectData.id}`,
    },
    // openGraph: {
    //   title: `${projectData.title} | sozonome`,
    //   images: {
    //     url: sznmOgImage({
    //       heading: projectData.title,
    //       text: 'https://sznm.dev',
    //     }),
    //     alt: `${projectData.title} | sozonome og-image`,
    //   },
    // },
  }
}
