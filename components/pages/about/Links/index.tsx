'use client'

import { MotionDiv } from '@/components/motion/MotionDiv'

import { socialLinks } from './constants'
import MotionLink from './MotionLink'
import { staggerAnimationProps, wrapperAnimationProps } from '@/constants/animation'

const Links = () => {
  return (
    <MotionDiv className='my-4' {...wrapperAnimationProps}>
      <p className='italic'>1.01 ^365 = 37.7</p>

      <MotionDiv className='flex flex-wrap font-sans gap-4 mt-4' {...staggerAnimationProps}>
        {socialLinks.map((link) => (
          <MotionLink {...link} key={link.url} />
        ))}
      </MotionDiv>
    </MotionDiv>
  )
}

export default Links
