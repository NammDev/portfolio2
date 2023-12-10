'use client'

import React from 'react'

// import { incrementViews } from '~/app/actions'

export type ViewCounterProps = {
  count: number | null
  slug: string
  trackView?: boolean
  As: React.ElementType
} & React.HTMLAttributes<HTMLElement>

const ViewCounter = ({ count, slug, trackView, As, ...props }: ViewCounterProps) => {
  //   React.useEffect(() => {
  //     if (trackView) {
  //       incrementViews(slug)
  //     }
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [])

  return <As {...props}>{`${(count ?? 0).toLocaleString()} views`}</As>
}

export default ViewCounter
