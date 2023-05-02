import theme from '@/styles/theme'

export type BoxFrameProps = {
  children: React.ReactNode
  backgroundColor?: keyof typeof theme.color.background
}
