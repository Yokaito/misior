import { Icons } from './styles'

export interface NewstickerItemProps {
  icon: keyof typeof Icons
  date: Date
  text: string
}

export type NewstickerItemStyleProps = {
  isActive: boolean
}
