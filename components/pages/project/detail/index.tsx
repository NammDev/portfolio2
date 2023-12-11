import Link from 'next/link'
import { notFound } from 'next/navigation'
import { AiOutlineArrowLeft } from 'react-icons/ai'

import type { ProjectDetailProps } from './types'
import ProjectDetailWrapper from '@/components/projects/detail'
import { sortedProjects } from '@/lib/constants/project'

const ProjectDetail = ({ params }: ProjectDetailProps) => {
  const projectData = sortedProjects.find(({ id }) => id === params.id)

  if (!projectData) {
    return notFound()
  }

  return (
    <div>
      <article>
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

        <ProjectDetailWrapper source='Project Detail' projectData={projectData} />
      </article>
    </div>
  )
}

export default ProjectDetail
