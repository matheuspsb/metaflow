'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { type ReactNode } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  return (
    <Dialog.Root
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) onClose()
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="bg-bg-base/80 fixed inset-0 z-100 backdrop-blur-sm" />
        <Dialog.Content aria-describedby={undefined} className="fixed top-1/2 left-1/2 z-101 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 p-4 outline-none">
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export {
  Title as ModalTitle,
  Description as ModalDescription,
  Close as ModalClose,
} from '@radix-ui/react-dialog'
