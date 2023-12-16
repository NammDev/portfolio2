import { Command } from 'cmdk'
import { CommandEntry } from '../types'

type CommandItemProps = {
  data: CommandEntry
  onSelect: () => void
}

const CommandItem = ({ data, onSelect }: CommandItemProps) => {
  return (
    <Command.Item
      className='commandItem'
      onSelect={onSelect}
      // sx={{
      //   contentVisibility: 'auto',
      //   '&[aria-selected="true"]': {
      //     color: 'white',
      //     backgroundColor: 'selectedCommandItemBackground',
      //   },
      //   '&[aria-disabled="true"]': {
      //     color: 'gray',
      //     cursor: 'not-allowed',
      //   },
      //   '&:first-of-type': {
      //     marginTop: 2,
      //   },
      // }}
    >
      <p className='text-sm font-sans'>{data.name}</p>
    </Command.Item>
  )
}

export default CommandItem
