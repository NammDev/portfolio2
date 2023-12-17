'use client'

import { MotionDiv } from '@/components/motion/MotionDiv'

const Content = () => {
  return (
    <MotionDiv
      variants={{
        before: { opacity: 0, y: 20, transition: { type: 'spring' } },
        after: { opacity: 1, y: 0, transition: { type: 'spring' } },
      }}
      initial='before'
      animate='after'
    >
      <h2 className='font-heading font-bold text-[1.875rem] !leading-[1.2]'>👋 Hi, how are you?</h2>

      <div className='flex items-center flex-col gap-4 mt-4 font-sans'>
        <p>
          I&apos;m Nam Nguyen, an experienced Digital Crafter with a strong passion for crafting
          customer-centric tech solutions.
        </p>

        <p>
          My expertise lies in working with various technologies, including React (TypeScript,
          Next.js) and Flutter (Dart). Throughout my career, I have honed skills in developing tech
          products that delight users and drive business success.
        </p>

        <p>
          Sometimes I share fun and exciting projects through this site. I&apos;m passionate about
          design and leading high-performing teams to success.
        </p>
      </div>
    </MotionDiv>
  )
}

export default Content
