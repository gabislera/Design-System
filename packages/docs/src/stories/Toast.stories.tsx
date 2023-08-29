import type { Meta, StoryObj } from '@storybook/react'
import { Box, Button, Toast, ToastProps } from '@khari-ui/react'
import { useState } from 'react'

export default {
  title: 'Data display/Toast',
  component: Toast,
  tags: ['autodocs'],

  args: {
    title: 'Agendamento realizado',
    content: 'Terça-feira, 29 de Agosto às 16h',
  },
  decorators: [
    (_, { allArgs }) => {
      const [open, setOpen] = useState(false)

      const ToggleToast = (state: boolean) => {
        setOpen(state)
      }

      return (
        <Box
          css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}>
          <Button variant="primary" size="sm" onClick={() => ToggleToast(true)}>
            Click here
          </Button>
          <Toast {...allArgs} open={open} onOpenChange={ToggleToast} />
        </Box>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}

