import Navigation from './Navigation'

const TabBar = () => {
  return (
    <div className='fixed layoutBlock py-4 left-0 right-0 z-10 bottom-[22px] bg-none'>
      <div className='items-center text-[35px] text-center flex h-[4.5rem] backdrop-blur-[6px] bg-[rgba(39,38,40,0.8)] p-[22px] rounded-[20px] md:hidden md:h-32 md:text-[50px] '>
        <Navigation />
      </div>
    </div>
  )
}

export default TabBar
