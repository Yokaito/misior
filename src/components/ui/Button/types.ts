export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  extend?: boolean
  text: string
  hasAdornment?: boolean
}

export type ButtonStyleProps = {
  extend?: boolean
}
