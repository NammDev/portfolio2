import HeroSection from '@/components/pages/home/HeroSection'
import ProjectsSection from '@/components/pages/home/ProjectsSection'

export const dynamic = 'force-static'

export default function Home() {
  return (
    <div className='mt-[-6rem]'>
      <HeroSection />
      <ProjectsSection />
      {/* <PostsSection data={recentPosts} /> */}
    </div>
  )
}
