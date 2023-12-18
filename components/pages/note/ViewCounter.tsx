'use client'

import { incrementViews } from '@/app/actions'
import React from 'react'

// import { incrementViews } from '~/app/actions'

export type ViewCounterProps = {
  count: number | null
  slug: string
  trackView?: boolean
  As?: React.ElementType
} & React.HTMLAttributes<HTMLElement>

const ViewCounter = ({ count, slug, trackView, As, ...props }: ViewCounterProps) => {
  React.useEffect(() => {
    if (trackView) {
      incrementViews(slug)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const Text = As ? As : 'p'

  return <Text {...props}>{`${(count ?? 0).toLocaleString()} views`}</Text>
}

export default ViewCounter
