import HeroSection from '@/components/pages/home/HeroSection'
import PostsSection from '@/components/pages/home/PostsSection'
import ProjectsSection from '@/components/pages/home/ProjectsSection'
import { sortedBlogPosts } from '@/lib/constants/blog'
import { highlightedProjects } from '@/lib/constants/project'

export const dynamic = 'force-static'

const recentPosts = sortedBlogPosts.slice(0, 2)

export default function Home() {
  return (
    <div className='mt-[-6rem]'>
      <HeroSection />
      <ProjectsSection data={highlightedProjects} />
      <PostsSection data={recentPosts} />
    </div>
  )
}
