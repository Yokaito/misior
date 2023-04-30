import { useState } from 'react'
import * as S from './styles'
import type * as T from './types'
import MenuIconDefault from '@/assets/images/menu/news-menu.gif'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  MenuSubItensMotionConfigs,
  SubItemListMotionConfigs,
} from './motion.config'
import MenuSubItem from '../SubItem'

export const MenuItem = ({
  icon = MenuIconDefault,
  initiallyOpen = false,
  text = 'Menu Item',
  subItems,
}: T.MenuItemProps) => {
  const [open, setOpen] = useState(initiallyOpen)

  return (
    <>
      <S.MenuItemWrapper onClick={() => setOpen(!open)}>
        <S.MenuItemFeedback active={open} />
        <S.MenuItemContent>
          <Image
            src={icon.src}
            alt="icon menu"
            width={icon.width}
            height={icon.height}
            priority
          />
          <S.MenuItemText>{text}</S.MenuItemText>
        </S.MenuItemContent>
      </S.MenuItemWrapper>
      <S.MenuItemSubItemsWrapper
        initial={initiallyOpen}
        animate={open ? 'open' : 'closed'}
        variants={MenuSubItensMotionConfigs}
      >
        <motion.ul variants={SubItemListMotionConfigs}>
          {subItems.map((subItem, index) => (
            <MenuSubItem
              key={index}
              text={subItem.text}
              href={subItem.href}
              parentName="text"
            />
          ))}
        </motion.ul>
      </S.MenuItemSubItemsWrapper>
    </>
  )
}

export default MenuItem
