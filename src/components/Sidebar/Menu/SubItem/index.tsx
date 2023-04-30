import Link from 'next/link'
import * as S from './styles'
import type * as T from './types'
import { useRouter } from 'next/router'
import { SubItemMotionConfigs } from './motion.config'
import { useEffect } from 'react'

export const MenuSubItem = ({
  text = 'Default Item',
  href = '/',
}: T.MenuSubItemProps) => {
  const router = useRouter()

  const isActive = router.pathname === href

  useEffect(() => {
    if (router.pathname !== href) return

    // TODO - Make open menu item and close others when one of subItem is in the same page
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <S.MenuSubItemWrapper variants={SubItemMotionConfigs}>
      <Link href={href}>
        <S.MenuSubItemContent>
          <S.MenuSubItemBorder />
          <S.MenuSubItemIcon>{isActive && `>`}</S.MenuSubItemIcon>
          <S.MenuSubItemText>{text}</S.MenuSubItemText>
          <S.MenuSubItemBorder right />
        </S.MenuSubItemContent>
      </Link>
    </S.MenuSubItemWrapper>
  )
}

export default MenuSubItem
