'use client'

import Card from '@/components/projects/Card'
// import { Box, Button, Grid, Heading, Stack } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import * as React from 'react'
import { FaArrowRight } from 'react-icons/fa'

// import type { Project } from 'contentlayer/generated'
// import Card from '~/lib/components/projects/Card'
// import { EVENT_TYPE_NAVIGATE } from '~/lib/constants/tracking'
// import { trackEvent } from '~/lib/utils/trackEvent'

export type Project = {
  /** File path relative to `contentDirPath` */
  _id: string
  type: 'Project'
  title: string
  description: string
  published?: boolean | undefined
  highlight?: boolean | undefined
  featured?: boolean | undefined
  sznmApps?: boolean | undefined
  stacks?: string[] | undefined
  date?: string | undefined
  projectLink?: string | undefined
  repoLink?: string | undefined
  appStoreLink?: string | undefined
  playStoreLink?: string | undefined
  icon?: string | undefined
  thumbnail?: string | undefined
  thumbnailDark?: string | undefined
  projectType?: string | undefined
  /** Markdown file body */
  id: string
}

type ProjectsSectionProps = { data: Array<Project> }

const ProjectsSection = () => {
  const router = useRouter()

  // React.useEffect(() => {
  //   data
  //     .filter((project) => project.highlight && project)
  //     .forEach(({ id }) => {
  //       router.prefetch(`/projects/${id}`)
  //     })
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [data])

  //   const handleClickViewAllProjects = React.useCallback(() => {
  //     trackEvent({
  //       eventName: 'Home: View All Projects',
  //       eventData: { type: EVENT_TYPE_NAVIGATE },
  //     })
  //   }, [])

  return (
    <section className='flex-col flex mb-16 gap-4'>
      <Link href='/projects'>
        <h2 className='font-bold !leading-[1.2] lg:text-[1.875rem] font-heading cursor-pointer mb-2'>
          Projects
        </h2>
      </Link>

      <div className='grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 my-8'>
        {/* {data.map((project) => (
          <Card project={project} key={project.id} />
        ))} */}
        <Card />
        <Card />
      </div>

      <div>
        <Link
          href='/projects'
          className='font-heading transition-all items-center inline-flex appearance-none justify-center select-none border-2 relative whitespace-nowrap outline-none outline-offset-2 leading-[1.2] font-semibold h-12 min-w-[3rem] text-lg text-[rgba(255,255,255,0.92)] rounded-2xl border-[rgba(255,255,255,0.16)] ps-6 pe-6 hover:border-gray-500 hover:shadow-sm hover:bg-[#ffffff14]'
        >
          view all projects{' '}
          <span className='inline-flex self-center shrink-0 ms-2'>
            <FaArrowRight />
          </span>
        </Link>
      </div>
    </section>
  )
}

export default ProjectsSection
