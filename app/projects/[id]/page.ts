import ProjectDetail from '@/components/pages/project/detail'
import { projectIdParams } from '@/lib/constants/project'

export const generateStaticParams = () => {
  return projectIdParams
}

export { generateMetadata } from '@/components/pages/project/detail/meta'

export default ProjectDetail
