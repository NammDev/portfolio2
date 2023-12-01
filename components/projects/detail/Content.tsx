// import { Box, Flex, Heading, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'
import Balancer from 'react-wrap-balancer'

import type { ProjectDetailWrapperProps } from './types'

type ProjectDetailContentProps = Pick<ProjectDetailWrapperProps, 'projectData'>

const ProjectDetailContent = ({
  projectData: { title, icon, description, stacks },
}: ProjectDetailContentProps) => {
  const colorMode = 'dark'
  //   const backgroundColor = useColorModeValue('', 'gray.700')

  return (
    <div className='w-full h-full p-8 rounded-3xl border-2 border-[#414042] transition duration-200 ease-out hover:shadow-lg hover:border-[#676668] hover:bg-[#272628]'>
      <div className='flex items-center w-full h-full gap-8'>
        <div className='flex flex-wrap gap-6 basis-[85%] h-full'>
          <div className='flexs items-start w-full'>
            <h2 className='mb-2 font-heading font-bold text-xl !leading-[1.2]'>
              <Balancer>{title}</Balancer>
            </h2>
            <p className='text-sm font-sans'>
              <Balancer>{description}</Balancer>
            </p>
          </div>

          {stacks && (
            <div className='flex items-center mt-[11px] opacity-60'>
              {stacks.map((stack) => (
                <div
                  className='mr-3'
                  key={stack}
                  style={{ filter: 'drop-shadow(0 0 12px rgb(98, 114, 164))' }}
                >
                  <Image
                    width={25}
                    height={25}
                    src={`/stacks_logo/${colorMode}/${stack}.svg`}
                    alt={stack}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {icon && (
          <div className='flex basis-[15%]'>
            <div className='flex max-w-[4rem] ms-auto me-auto'>
              <Image width={128} height={128} src={icon} alt={title} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectDetailContent
