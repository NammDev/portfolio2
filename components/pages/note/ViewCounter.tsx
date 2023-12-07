'use client'

import React from 'react'

// import { incrementViews } from '~/app/actions'

export type ViewCounterProps = {
  count: number | null
  slug: string
  trackView?: boolean
} & React.HTMLAttributes<HTMLParagraphElement>

const ViewCounter = ({ count, slug, trackView, ...props }: ViewCounterProps) => {
  //   React.useEffect(() => {
  //     if (trackView) {
  //       incrementViews(slug)
  //     }
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [])

  return <p {...props}>{`${(count ?? 0).toLocaleString()} views`}</p>
}

export default ViewCounter
