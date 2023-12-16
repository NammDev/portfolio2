'use client'

import type { GiscusProps } from '@giscus/react'
import Giscus from '@giscus/react'
import { useTheme } from 'next-themes'

type GiscusWrapperProps = Pick<GiscusProps, 'category' | 'categoryId'>

const GiscusWrapper = ({ category, categoryId }: GiscusWrapperProps) => {
  const { theme } = useTheme()
  const giscusTheme: GiscusProps['theme'] = theme === 'dark' ? 'dark' : 'light'

  return (
    <Giscus
      repo='NammDev/portfolio2'
      repoId='R_kgDOKyHnWA'
      mapping='pathname'
      category={category}
      categoryId={categoryId}
      reactionsEnabled='1'
      theme={giscusTheme}
      emitMetadata='0'
    />
  )
}

export default GiscusWrapper
