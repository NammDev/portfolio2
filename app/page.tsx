import HeroSection from '@/components/pages/home/HeroSection'

export const dynamic = 'force-static'

export default function Home() {
  return (
    <div className='mt-[-6rem]'>
      <HeroSection />
      {/* <ProjectsSection data={highlightedProjects} />
      <PostsSection data={recentPosts} /> */}
    </div>
  )
}
