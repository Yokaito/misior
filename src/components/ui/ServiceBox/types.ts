import { BoxImages, HeadIcons, HeadImages } from './images'

export type ServiceBoxProps = {
  showPedestal?: boolean
  showIcon?: boolean
  customTitle?: string
  boxImage?: keyof typeof BoxImages
  headImage?: keyof typeof HeadImages
  headIcon?: keyof typeof HeadIcons
  children?: React.ReactNode
  href?: string
  buttonOptions?: {
    hasButton?: boolean
    buttonLabel?: string
    buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>
  }
}

export type ServiceBoxStyleProps = {
  boxImage: keyof typeof BoxImages
}
