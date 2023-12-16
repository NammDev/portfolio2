import * as React from 'react'

import {
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
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
        className='px-4 w-full bg-transparent outline-none'
        placeholder='Type a command or search...'
      />

      {/* <Center height={6}>
        <Divider />
      </Center> */}
      <CommandSeparator />

      <CommandList className='commandList'>
        <CommandEmpty className='items-center'>No results found.</CommandEmpty>

        {commands.map((commandGroup) => (
          <CommandGroup
            key={commandGroup.heading}
            className='mb-4'
            heading={
              <h3 className='text-xs px-2 letter tracking-wide uppercase user-select-none'>
                {commandGroup.heading}
              </h3>
            }
          >
            {commandGroup.items.map((item) => (
              <CommandItem
                key={item.id}
                className='commandItem'
                onSelect={handleSelect(commandGroup, item)}
              >
                <p className='text-sm font-sans'>{item.name}</p>
              </CommandItem>
            ))}
          </CommandGroup>
        ))}
      </CommandList>
    </CommandWrapper>
  )
}

export default CommandMenu
