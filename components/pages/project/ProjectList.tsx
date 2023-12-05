'use client'

import { motion } from 'framer-motion'

import { childAnimationProps, staggerAnimationProps } from '@/constants/animation'
import ProjectListBottomNav from './BottomNav'
import ProjectDetailWrapper from '@/components/projects/detail'
import { featuredProjects } from '@/lib/constants/project'

const ProjectList = () => {
  const highlightedProjects = featuredProjects.filter((project) => project.highlight)
  const nonHighlightedFeaturedProjects = featuredProjects.filter((project) => !project.highlight)

  const highlightedProjectCards = highlightedProjects.map((projectData) => {
    return (
      <motion.div {...childAnimationProps} key={projectData.id}>
        <ProjectDetailWrapper
          projectData={projectData}
          source='Featured Projects'
          key={projectData.id}
        />
      </motion.div>
    )
  })

  const nonHighlightedProjectCards = nonHighlightedFeaturedProjects.map((projectData) => {
    return (
      <motion.div {...childAnimationProps} key={projectData.id}>
        <ProjectDetailWrapper
          projectData={projectData}
          source='Featured Projects'
          key={projectData.id}
        />
      </motion.div>
    )
  })

  return (
    <>
      <div className='mb-8'>
        <h1 className='lg:text-[2.25rem] lg:leading-[1.2] mb-2 font-heading font-bold leading-[1.33] text-[1.875rem]'>
          Projects
        </h1>
      </div>

      <div className='grid gap-6 mb-8'>
        <motion.div className='grid gap-6' {...staggerAnimationProps}>
          {highlightedProjectCards}
        </motion.div>

        <motion.div className='grid gap-6 md:grid-cols-2 grid-cols-1' {...staggerAnimationProps}>
          {nonHighlightedProjectCards}
        </motion.div>
      </div>

      <ProjectListBottomNav />
    </>
  )
}

export default ProjectList
