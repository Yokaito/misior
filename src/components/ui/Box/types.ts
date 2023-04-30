export type Padding = 'small' | 'medium' | 'large'

export interface BoxProps {
  padding?: Padding
  title: string
  children?: React.ReactNode
}
