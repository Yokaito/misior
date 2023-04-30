import { createGlobalStyle } from 'styled-components'

import { ModernNormalize } from './modern-normalize'
import { Resets } from './resets'
import { Typography } from './typography'
import { Scrollbar } from './scrollbar'
import { Background } from './background'

const GlobalStyle = createGlobalStyle`
  ${Typography}
  ${ModernNormalize}
  ${Resets}
  ${Scrollbar}
  ${Background}
`

export default GlobalStyle
