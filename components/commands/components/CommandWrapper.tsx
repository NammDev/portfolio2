import ModalWrapper from '@/components/shared/ModalWrapper'
import { Command } from 'cmdk'

type CommandWrapperProps = {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

const CommandWrapper = ({ isOpen, onClose, children }: CommandWrapperProps) => {
  return (
    <ModalWrapper
      isOpen={isOpen}
      onClose={onClose}
      withCloseButton={false}
      body={<Command className='py-5'>{children}</Command>}
    />
  )
}

export default CommandWrapper
