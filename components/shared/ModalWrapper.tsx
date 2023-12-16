import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from '@/components/ui/dialog'
import type * as React from 'react'

type ModalWrapperProps = {
  isOpen: boolean
  onClose: () => void
  header?: React.ReactNode
  withCloseButton?: boolean
  body?: React.ReactNode
  footer?: React.ReactNode
}

const ModalWrapper = ({
  isOpen,
  header,
  withCloseButton = true,
  body,
  footer,
  onClose,
}: ModalWrapperProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        {header && (
          <DialogHeader className='font-heading font-bold text-2xl lg:text-3xl'>
            {header}
          </DialogHeader>
        )}
        {withCloseButton && <DialogClose />}

        {body && <>{body}</>}

        {footer && <DialogFooter className='grid gap-2'>{footer}</DialogFooter>}
      </DialogContent>
    </Dialog>
  )
}

export default ModalWrapper
