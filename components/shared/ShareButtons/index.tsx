'use client'

// import { HStack, IconButton, useToast } from '@chakra-ui/react'
import { usePathname } from 'next/navigation'
import * as React from 'react'

import { socialMap } from './constants'
import { baseUrl } from '@/constants/baseUrl'
import { extendUrl } from '@/constants/extendUrl'

type ShareButtonsProps = {
  title?: string
}

const toastId = 'copied-link'

const ShareButtons = ({ title }: ShareButtonsProps) => {
  const pathname = usePathname()
  // const toast = useToast()

  const link = React.useMemo(() => `${baseUrl}${pathname}`, [pathname])

  const handleClick = React.useCallback(
    (obj: { baseSocialUrl: string; params: Record<string, unknown>; isCopy?: boolean }) =>
      async () => {
        const shareLink = extendUrl(obj.baseSocialUrl, obj.params)
        if (obj.isCopy) {
          await navigator.clipboard.writeText(shareLink)
          // if (!toast.isActive(toastId)) {
          //   toast({
          //     id: toastId,
          //     title: 'Link Copied!',
          //     position: 'top-right',
          //     status: 'success',
          //     isClosable: true,
          //     description: shareLink,
          //   })
          // }
          return
        }
        window.open(shareLink)
      },
    []
  )

  return (
    <div className='flex items-center flex-row gap-2 my-2'>
      {socialMap({ title, url: link }).map(({ name, icon, baseSocialUrl, params, isCopy }) => (
        <button
          className='iconButton !basis-auto'
          aria-label={name}
          key={name}
          onClick={handleClick({ baseSocialUrl, params, isCopy })}
        >
          {icon}
        </button>
      ))}
    </div>
  )
}

export default ShareButtons
