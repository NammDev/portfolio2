import { MotionDiv } from '@/components/motion/MotionDiv'
import MarkdownContent from '@/components/shared/MarkdownContent'
import { childAnimationProps, staggerAnimationProps } from '@/constants/animation'
import { sortedTodayILearns } from '@/constants/til'
import { dateFormatLong } from '@/lib/dateFormat'
import Link from 'next/link'
import Balancer from 'react-wrap-balancer'

const TodayILearnPage = () => {
  return (
    <div className='grid gap-8 scroll-smooth'>
      <h2 className='font-heading font-bold text-3xl leading-[1.3] lg:text-4xl lg:leading-[1.2]'>
        Today I Learned
      </h2>
      <MotionDiv className='grid gap-12' {...staggerAnimationProps}>
        {sortedTodayILearns.map((til, index) => (
          <MotionDiv className='grid gap-12' {...childAnimationProps} key={til.id}>
            <div className='grid gap-8 items-start grid-cols-1 2xl:grid-cols-[1fr_2fr]'>
              <div className='grid lg:sticky top-24 mt-2 gap-1 md:gap-2'>
                <Link href={`#${til.id}`}>
                  <h2
                    className='text-[1.25rem] leading-[1.2] scroll-mt-24 font-bold font-heading'
                    id={til.id}
                  >
                    <Balancer>{til.title}</Balancer>
                  </h2>
                </Link>
                {til.description ? (
                  <p className='text-[0.875rem] text-[gray]'>
                    <Balancer>{til.description}</Balancer>
                  </p>
                ) : null}
                <p className='text-[0.75rem] text-[gray]'>{dateFormatLong(til.date)}</p>
              </div>

              <div className='2xl:max-w-[512px]'>
                <MarkdownContent rawContent={til.body.raw} />
              </div>
            </div>
            {index !== sortedTodayILearns.length - 1 ? (
              <hr className='opacity-60 w-full border-0 border-[#ffffff29] border-solid border-b' />
            ) : null}
          </MotionDiv>
        ))}
      </MotionDiv>
    </div>
  )
}

export default TodayILearnPage
