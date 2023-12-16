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
      <DialogContent className='rounded-3xl bg-transparent blur-md mx-6 md:mx-0'>
        {header && (
          <DialogHeader className='font-heading font-bold text-2xl lg:text-3xl'>
            {header}
          </DialogHeader>
        )}
        {withCloseButton && <DialogClose />}

        {body && (
          <div className='p-0 font-heading bg-headerAlphaBackground blur-sm rounded-3xl'>
            {body}
          </div>
        )}

        {footer && <DialogFooter className='grid gap-2'>{footer}</DialogFooter>}
      </DialogContent>
    </Dialog>
  )
}

export default ModalWrapper
