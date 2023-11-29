'use client'

import { Box, Button, Grid, Heading, Stack } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import * as React from 'react'
import { FaArrowRight } from 'react-icons/fa'

import type { Project } from 'contentlayer/generated'
import Card from '~/lib/components/projects/Card'
// import { EVENT_TYPE_NAVIGATE } from '~/lib/constants/tracking'
// import { trackEvent } from '~/lib/utils/trackEvent'

type ProjectsSectionProps = { data: Array<Project> }

const ProjectsSection = ({ data }: ProjectsSectionProps) => {
  const router = useRouter()

  React.useEffect(() => {
    data
      .filter((project) => project.highlight && project)
      .forEach(({ id }) => {
        router.prefetch(`/projects/${id}`)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  //   const handleClickViewAllProjects = React.useCallback(() => {
  //     trackEvent({
  //       eventName: 'Home: View All Projects',
  //       eventData: { type: EVENT_TYPE_NAVIGATE },
  //     })
  //   }, [])

  return (
    <section className='flex-col flex mb-16 gap-4'>
      <Link href='/projects'>
        <Heading className='font-bold !leading-[1.2] lg:text-[1.875rem] font-heading cursor-pointer mb-2'>
          Projects
        </Heading>
      </Link>

      <div className='grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 my-8'>
        {data.map((project) => (
          <Card project={project} key={project.id} />
        ))}
      </div>

      <Box>
        <Button
          as={Link}
          href='/projects'
          rightIcon={<FaArrowRight />}
          size='lg'
          variant='outline'
          fontFamily='heading'
          //   onClick={handleClickViewAllProjects}
        >
          view all projects
        </Button>
      </Box>
    </section>
  )
}

export default ProjectsSection
