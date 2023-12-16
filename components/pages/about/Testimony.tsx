'use client'

import { MotionDiv } from '@/components/motion/MotionDiv'
import { staggerAnimationProps, wrapperAnimationProps } from '@/constants/animation'
import { sortedTestimonies } from '@/constants/testimony'
import { FaLinkedin } from 'react-icons/fa'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const Testimony = () => {
  // const textColor = useColorModeValue('gray.600', 'gray.300')

  return (
    <MotionDiv {...wrapperAnimationProps}>
      <Accordion
        type='single'
        collapsible
        className='py-4 text-foreground2'
        //  paddingY={4} color={textColor}
      >
        <AccordionItem value='item-1' className='border-none'>
          <AccordionTrigger
            className='py-2 w-full text-[1rem] hover:no-underline outline-offset-2'
            //  paddingX={0}
          >
            <span className='block flex-1 text-left'>
              <h2 className='text-[1rem] leading-[1.2] font-heading font-bold'>Some Testimonies</h2>
              <p className='text-[0.75rem] leading-[18px] font-normal'>
                Wanna know what my peers said about me?
              </p>
            </span>
          </AccordionTrigger>

          <AccordionContent
            className='opacity-100 h-auto pt-2 pb-5'
            //  paddingX={0}
          >
            <MotionDiv className='grid gap-6 grid-cols-1 md:grid-cols-2' {...staggerAnimationProps}>
              {sortedTestimonies.map((testimony) => (
                <div
                  className='border-2 rounded-3xl hover:border-cardBorderHover1 border-cardBorder1 transition-all ease-out hover:shadow-lg hover:border-cardHoverBorder hover:border-2 flex flex-col justify-between p-6 gap-4'
                  key={testimony.id}
                >
                  <p className='text-[0.875rem] leading-[1.5]'>{testimony.body.raw}</p>

                  <div className='flex gap-2 items-center leading-[1.5]'>
                    <div>
                      <h2 className='font-heading text-[0.875rem] leading-[1.2] font-bold'>
                        {testimony.name}
                      </h2>
                      <p className='text-[0.75rem]'>{testimony.title}</p>
                    </div>
                    {testimony.linkedin ? (
                      <a
                        className='iconButton bg-transparent text-foreground2 h-8 min-w-[2rem] text-[0.875rem] p-0 !basis-0'
                        aria-label='linkedin'
                        href={testimony.linkedin}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <FaLinkedin />
                      </a>
                    ) : null}
                  </div>
                </div>
              ))}
            </MotionDiv>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </MotionDiv>
  )
}

export default Testimony
