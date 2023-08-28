import { ComponentProps, ReactNode } from 'react';
import { TooltipArrow, TooltipContent, TooltipPortal, TooltipProvider, TooltipRoot, TooltipTrigger } from './styles'
import { Text } from '../Text';

export interface TooltipProps extends ComponentProps<typeof TooltipContent> {
  content: string
  trigger: ReactNode
}

export function Tooltip({ content, trigger, ...props }: TooltipProps) {
  return (
    <TooltipProvider>
      <TooltipRoot>
        <TooltipTrigger asChild>
          {trigger}
        </TooltipTrigger>

        <TooltipPortal>
          <TooltipContent {...props}>
            <Text size={'sm'}>{content}</Text>
            <TooltipArrow />
          </TooltipContent>
        </TooltipPortal>

      </TooltipRoot>
    </TooltipProvider>
  )
}

Tooltip.displayName = 'Tooltip'
