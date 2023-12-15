'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

import { FaLinkedin } from 'react-icons/fa'

// import MotionBox from '~/lib/components/motion/MotionBox'
// import MotionGrid from '~/lib/components/motion/MotionGrid'
// import { staggerAnimationProps, wrapperAnimationProps } from '~/lib/constants/animation'
// import { sortedTestimonies } from '~/lib/constants/testimony'

const Testimony = () => {
  // const textColor = useColorModeValue('gray.600', 'gray.300')

  return (
    // <MotionBox {...wrapperAnimationProps}>
    <Accordion type='single' collapsible>
      <AccordionItem value='item-1'>
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
      </AccordionItem>
    </Accordion>
    // </MotionBox>
  )
}

export default Testimony
