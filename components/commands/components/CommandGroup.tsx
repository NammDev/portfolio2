import { Command } from 'cmdk'
import { CommandCollection } from '../types'

type CommandGroupProps = {
  children: React.ReactNode
  data: CommandCollection
}

const CommandGroup = ({ children, data }: CommandGroupProps) => {
  return (
    <Command.Group
      className='mb-4'
      heading={
        <h3 className='text-xs px-2 letter tracking-wide uppercase user-select-none'>
          {data.heading}
        </h3>
      }
    >
      {children}
    </Command.Group>
  )
}

export default CommandGroup
