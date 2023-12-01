import Link from 'next/link'

const HeroSection = () => {
  return (
    <div className='items-center grid h-[90vh]'>
      <div className='flex flex-col gap-2 w-full sm:w-4/5 md:w-3/5 mt-8 sm:mt-0 self-auto sm:self-center'>
        <h1 className='lg:text-[2.25rem] lg:leading-[1.2] font-heading font-bold leading-[1.33] text-[1.875rem]'>
          Hello! I&apos;m Nam Nguyen.
        </h1>
        <p className='text-base leading-[30px] md:text-[1.25rem] font-sans'>
          Digital Crafter passionate in building user-centric solutions.
        </p>
        <div className='flex items-center gap-2'>
          <Link
            className='bg-[rgba(255,255,255,0.08)] h-10 min-w-[2.5rem] font-sans transition-all items-center inline-flex appearance-none justify-center select-none relative whitespace-nowrap outline-none outline-offset-2 leading-[1.2] font-semibold text-[rgba(255,255,255,0.92)] rounded-2xl border-[rgba(255,255,255,0.16)] ps-4 pe-4 border-0 hover:border-2 hover:border-gray-500 hover:shadow-sm hover:bg-[rgba(255,255,255,0.16)]'
            href='/projects'
          >
            Projects
          </Link>
          <Link
            className='bg-[rgba(255,255,255,0.08)] h-10 min-w-[2.5rem] font-sans transition-all items-center inline-flex appearance-none justify-center select-none relative whitespace-nowrap outline-none outline-offset-2 leading-[1.2] font-semibold text-[rgba(255,255,255,0.92)] rounded-2xl border-[rgba(255,255,255,0.16)] ps-4 pe-4 border-0 hover:border-2 hover:border-gray-500 hover:shadow-sm hover:bg-[rgba(255,255,255,0.16)]'
            href='/about'
          >
            About Me
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
