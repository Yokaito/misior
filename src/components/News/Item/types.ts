import { Icons } from '.'

export interface NewsItemProps {
  icon: keyof typeof Icons
  title: string
  date: Date
  author?: string
  content: string
}
