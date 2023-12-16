import Content from '@/components/pages/about/Content'
import Links from '@/components/pages/about/Links'
import HeadSection from '@/components/pages/about/HeadSection'
import type { Metadata } from 'next'
import Testimony from '@/components/pages/about/Testimony'

export const metadata: Metadata = {
  title: 'About',
  openGraph: {
    title: 'About | sozonome',
    description: 'About sznm.dev page',
  },
}

export const dynamic = 'force-static'

const About = () => {
  return (
    <>
      <HeadSection />
      <Content />
      <Links />
      <Testimony />
    </>
  )
}

export default About
