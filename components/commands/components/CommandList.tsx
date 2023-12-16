import { Command } from 'cmdk'

type CommandListProps = {
  children: React.ReactNode
}

const CommandList = ({ children }: CommandListProps) => {
  return <Command.List className='commandList'>{children}</Command.List>
}

export default CommandList
