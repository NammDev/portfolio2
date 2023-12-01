export const dynamic = 'force-static'

import OtherProjects from '@/components/projects/other'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects - Other',
  alternates: {
    canonical: '/projects/other',
  },
  openGraph: {
    title: 'Other Projects | sozonome',
  },
}

export default OtherProjects
