import HeroSection from '@/components/pages/home/HeroSection'
import PostsSection from '@/components/pages/home/PostsSection'
import ProjectsSection from '@/components/pages/home/ProjectsSection'
import { highlightedProjects } from '@/lib/constants/project'

export const dynamic = 'force-static'

export default function Home() {
  return (
    <div className='mt-[-6rem]'>
      <HeroSection />
      <ProjectsSection data={highlightedProjects} />
      <PostsSection />
    </div>
  )
}
