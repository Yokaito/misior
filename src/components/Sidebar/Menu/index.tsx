import * as S from './styles'
import { MenuItem } from './Item'

export const Menu = () => {
  return (
    <S.MenuWrapper>
      <S.MenuBorder />
      <S.MenuContent>
        <MenuItem
          text="News"
          subItems={[
            {
              text: 'Primeiro',
              href: '/',
            },
            {
              text: 'Segundo',
              href: '/online',
            },
          ]}
        />
      </S.MenuContent>
      <S.MenuBorder bottom />
    </S.MenuWrapper>
  )
}

export default Menu
