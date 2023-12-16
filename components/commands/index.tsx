import * as React from 'react'

import {
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { commands } from './constants'
import { useCommandCenterAction } from './hook'
import type { CommandCollection, CommandEntry } from './types'
import { useCmdMenu } from '@/lib/cmd'
import CommandWrapper from './CommandWrapper'

const CommandMenu = () => {
  const { isOpen, closeCmdMenu } = useCmdMenu((state) => ({
    isOpen: state.isOpen,
    closeCmdMenu: state.closeCmdMenu,
  }))
  const { onSelectItem } = useCommandCenterAction()

  const handleSelect = React.useCallback(
    (commandGroup: CommandCollection, item: CommandEntry) => () => onSelectItem(commandGroup, item),
    [onSelectItem]
  )

  return (
    <CommandWrapper isOpen={isOpen} onClose={closeCmdMenu}>
      <CommandInput
        className='px-4 w-full bg-transparent outline-none text-buttonForeground1'
        placeholder='Type a command or search...'
      />

      <div className='flex items-center justify-center h-6'>
        <hr className='opacity-60 border-0 border-b w-full' />
      </div>

      <CommandList className='commandList'>
        <CommandEmpty className='items-center'>No results found.</CommandEmpty>

        {commands.map((commandGroup) => (
          <CommandGroup
            key={commandGroup.heading}
            className='mb-4'
            heading={
              <h2 className='lg:leading-[1.2] font-heading font-bold text-[0.75rem] border-spacing-2 tracking-[2px] uppercase select-none px-2 letter user-select-none'>
                {commandGroup.heading}
              </h2>
            }
          >
            {commandGroup.items.map((item) => (
              <CommandItem
                key={item.id}
                className='commandItem'
                onSelect={handleSelect(commandGroup, item)}
              >
                <p className='text-[0.875rem] font-sans leading-[1.5]'>{item.name}</p>
              </CommandItem>
            ))}
          </CommandGroup>
        ))}
      </CommandList>
    </CommandWrapper>
  )
}

export default CommandMenu
