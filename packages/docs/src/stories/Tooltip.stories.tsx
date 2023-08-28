import type { Meta, StoryObj } from '@storybook/react'
import { Box, Button, Tooltip, TooltipProps } from '@khari-ui/react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],

  args: {
    trigger: <Button variant="primary">Hover here</Button>,
    content: 'Text Example',
  },
  argTypes: {
    trigger: {
      control: {
        type: null,
      },
    },
    content: {
      description: "Text that will be displayed inside the tooltip",
      control: {
        type: "text",
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
