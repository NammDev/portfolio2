import ProjectList from '@/components/pages/project/ProjectList'
import { Metadata } from 'next'

export const dynamic = 'force-static'

const metadata: Metadata = {
  title: 'Projects',
  alternates: {
    canonical: '/projects',
  },
  openGraph: {
    title: 'Projects | sozonome',
  },
}

export default ProjectList
