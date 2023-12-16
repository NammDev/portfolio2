import { Command } from 'cmdk'

const CommandInput = () => {
  return (
    <Command.Input
      className='px-4 w-full bg-transparent outline-none'
      placeholder='Type a command or search...'
    />
  )
}

export default CommandInput
