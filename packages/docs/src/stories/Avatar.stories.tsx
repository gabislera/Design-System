import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@khari-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  tags: ['autodocs'],

  args: {
    src: 'https://github.com/gabislera.png',
    alt: 'Gabriela Carniel',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
