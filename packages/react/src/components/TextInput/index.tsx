import { ComponentProps, forwardRef, ElementRef } from 'react'
import { Input, Prefix, TextInputContainer } from './styles'
import { VariantProps } from '@stitches/react'

export interface TextInputProps
  extends Omit<ComponentProps<typeof Input>, 'size'> {
  prefix?: string
  size?: VariantProps<typeof TextInputContainer>['size']
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(({ prefix, size, ...rest }: TextInputProps, ref) => {
  return (
    <TextInputContainer size={size}>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input ref={ref} {...rest} />
    </TextInputContainer>
  )
})

TextInput.displayName = 'TextInput'