import { StaticImageData } from 'next/image'

export type MenuItemProps = {
  icon?: StaticImageData
  text?: string
  initiallyOpen?: boolean
  subItems: Array<{
    text: string
    href?: string
  }>
}

export type MenuItemStylesProps = {
  active?: boolean
}
