import * as RadixToast from '@radix-ui/react-toast'
import { ComponentProps } from 'react'
import { ToastClose, ToastContainer, ToastDescription, ToastProvider, ToastTitle, ToastViewPort } from './styles'
import { X } from '@phosphor-icons/react'

export interface ToastProps extends ComponentProps<typeof RadixToast.Root> {
  title: string
  content: string
}

export function Toast({ open, onOpenChange, title, content, ...props }: ToastProps) {
  return (
    <ToastProvider>
      <ToastContainer
        open={open}
        onOpenChange={onOpenChange}
        defaultOpen={true}
        duration={2000}
        {...props}
      >
        <div>
          <ToastTitle asChild>
            <h2>{title}</h2>
          </ToastTitle>
          <ToastClose asChild>
            <X weight='bold' size={20} />
          </ToastClose>
        </div>
        <ToastDescription asChild>
          <span>{content}</span>
        </ToastDescription>
      </ToastContainer>

      <ToastViewPort />
    </ToastProvider>
  )
}

Toast.displayName = 'Toast'
