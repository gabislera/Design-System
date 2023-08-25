import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@khari-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  tags: ['autodocs'],

  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error facilis sapiente, ipsa dolorem pariatur expedita dolores eius iste quasi non! Accusantium nulla rem blanditiis eveniet cupiditate beatae id impedit quisquam',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
