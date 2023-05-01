export type Padding = 'small' | 'medium' | 'large'
import { BarImageProps } from '../BarImage/types'

export interface BoxProps {
  padding?: Padding
  title: string
  children?: React.ReactNode
  background?: BarImageProps['background']
}
