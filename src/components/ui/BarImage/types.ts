export type BackgroundProps = {
  [key: string]: {
    img: string
    height: string
  }
}

export type BarImageProps = {
  background?: 'green' | 'blue' | 'dark' | 'brown' | 'red' | 'cyan'
  title?: string
  children?: React.ReactNode
}
