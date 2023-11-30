// import { Box, Grid, Heading } from '@chakra-ui/react'

// import MotionBox from '~/lib/components/motion/MotionBox'
// import MotionGrid from '~/lib/components/motion/MotionGrid'
// import ProjectDetailWrapper from '~/lib/components/projects/detail'
// import { childAnimationProps, staggerAnimationProps } from '~/lib/constants/animation'
// import { featuredProjects } from '~/lib/constants/project'
import ProjectListBottomNav from './BottomNav'

const ProjectList = () => {
  //   const highlightedProjects = featuredProjects.filter((project) => project.highlight)
  //   const nonHighlightedFeaturedProjects = featuredProjects.filter((project) => !project.highlight)

  //   const highlightedProjectCards = highlightedProjects.map((projectData) => {
  //     return (
  //       <MotionBox {...childAnimationProps} key={projectData.id}>
  //         <ProjectDetailWrapper
  //           projectData={projectData}
  //           source='Featured Projects'
  //           key={projectData.id}
  //         />
  //       </MotionBox>
  //     )
  //   })

  //   const nonHighlightedProjectCards = nonHighlightedFeaturedProjects.map((projectData) => {
  //     return (
  //       <MotionBox {...childAnimationProps} key={projectData.id}>
  //         <ProjectDetailWrapper
  //           projectData={projectData}
  //           source='Featured Projects'
  //           key={projectData.id}
  //         />
  //       </MotionBox>
  //     )
  //   })

  return (
    <>
      <div className='mb-8'>
        <h1 className='lg:text-[2.25rem] lg:leading-[1.2] mb-2 font-heading font-bold leading-[1.33] text-[1.875rem]'>
          Projects
        </h1>
      </div>

      {/* <Grid gap={6} marginBottom={8}>
        <MotionGrid {...staggerAnimationProps} gap={6}>
          {highlightedProjectCards}
        </MotionGrid>

        <MotionGrid
          {...staggerAnimationProps}
          gap={6}
          gridTemplateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
        >
          {nonHighlightedProjectCards}
        </MotionGrid>
      </Grid> */}

      <ProjectListBottomNav />
    </>
  )
}

export default ProjectList
