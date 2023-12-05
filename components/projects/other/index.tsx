import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'

// import { EVENT_TYPE_NAVIGATE } from '~/lib/constants/tracking'
// import { handleRouteBack } from '~/lib/utils/handleRouteBack'
// import { trackEvent } from '~/lib/utils/trackEvent'
import ProjectDetailWrapper from '../detail'
import { childAnimationProps, staggerAnimationProps } from '@/constants/animation'
import { splitProjectByTypes } from '@/lib/utils/project'
import Link from 'next/link'
import { Project } from '@/.contentlayer/generated'
import { sortedProjects } from '@/lib/constants/project'
import { MotionDiv } from '@/components/motion/MotionDiv'

const renderProjectList = ({
  projects,
  category,
}: {
  projects: Array<Project>
  category: string
}) => {
  return (
    <div className='grid gap-4'>
      <h3 className='font-bold text-[1.875rem] leading-[1.2] font-heading'>{category}</h3>
      <MotionDiv {...staggerAnimationProps} className='grid gap-8 grid-cols-1 lg:grid-cols-2'>
        {projects.map((projectData) => (
          <MotionDiv {...childAnimationProps} key={projectData.id}>
            <ProjectDetailWrapper projectData={projectData} source='Other Projects' />
          </MotionDiv>
        ))}
      </MotionDiv>
    </div>
  )
}

const otherProjects = sortedProjects.filter((project) => !project.featured && project)
const categorizedProjects = splitProjectByTypes(otherProjects)

const OtherProjects = () => {
  // const router = useRouter()
  // const handleBackToFeaturedProjects = React.useCallback(() => {
  //   trackEvent({
  //     eventName: 'Other Projects: Back to Featured Projects',
  //     eventData: { type: EVENT_TYPE_NAVIGATE },
  //   })
  //   handleRouteBack({ router, to: '/projects' })
  // }, [router])

  return (
    <>
      <Link
        href='/projects'
        className='mb-[22px] bg-[#414042] h-8 text-sm min-w-[2rem] font-sans transition-all items-center inline-flex appearance-none justify-center select-none relative whitespace-nowrap outline-none outline-offset-2 leading-[1.2] font-semibold text-[rgba(255,255,255,0.92)] rounded-2xl border-[rgba(255,255,255,0.16)] ps-3 pe-3 border-0 hover:border-2 hover:border-gray-500 hover:shadow-sm hover:bg-[rgba(255,255,255,0.16)]'
        // onClick={handleBackToFeaturedProjects}
      >
        <span className='inline-flex items-center shrink-0 me-2'>
          <AiOutlineArrowLeft />
        </span>
        {'  '}
        projects
      </Link>

      <div className='mb-[22px]'>
        <h1 className='font-bold text-[2.25rem] leading-[1.2] font-heading mb-2'>Other Projects</h1>
      </div>

      <div className='grid gap-8'>
        {renderProjectList({
          projects: categorizedProjects.libs,
          category: 'Libs',
        })}
        {renderProjectList({
          projects: categorizedProjects.apps,
          category: 'Apps',
        })}
        {renderProjectList({
          projects: categorizedProjects.sites,
          category: 'Sites',
        })}
        {renderProjectList({
          projects: categorizedProjects.templates,
          category: 'Templates',
        })}
        {renderProjectList({
          projects: categorizedProjects.docs,
          category: 'Docs',
        })}
      </div>
    </>
  )
}

export default OtherProjects
