import Link from 'next/link'
import Svg404 from '@/constants/404svg'
import { MotionDiv } from '@/components/motion/MotionDiv'

const NotFound = () => {
  return (
    <div>
      <MotionDiv
        className='relative mx-auto w-full sm:w-[70%] md:w-[60%] lg:w-[60%]'
        animate={{ y: 20 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: 'reverse' }}
      >
        <Svg404 />
      </MotionDiv>
      <p className='text-center text-xs'>
        <Link href='https://stories.freepik.com/web' target='_blank'>
          Illustration by Freepik Stories
        </Link>
      </p>

      <div className='my-4'>
        <h2 className='mb-2 text-center font-heading font-bold text-3xl !leading-[1.2]'>
          Seems like you&apos;re lost.
        </h2>

        <div className='text-center'>
          <Link
            className='bg-[rgba(65,64,66)] h-10 min-w-[2.5rem] text-base !leading-[1.2] font-sans transition-all items-center inline-flex appearance-none justify-center select-none relative whitespace-nowrap outline-none outline-offset-2 font-semibold text-[rgba(255,255,255,0.92)] rounded-2xl border-[rgba(255,255,255,0.16)] ps-4 pe-4 border-0 hover:border-2 hover:border-gray-500 hover:shadow-sm hover:bg-[rgba(255,255,255,0.16)]'
            href='/'
          >
            Let&apos;s Head Back
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
