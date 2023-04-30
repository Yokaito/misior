import styled, { css } from 'styled-components'
import type * as T from './types'
import MenuItemBackground from '@/assets/images/menu/button-background.gif'
import PlusOld from '@/assets/images/helpers/plus.gif'
import MinusOld from '@/assets/images/helpers/minus.gif'
import { motion } from 'framer-motion'

export const MenuItemWrapper = styled.div`
  height: 32px;
  background: ${`url(${MenuItemBackground.src})`} no-repeat;
  background-size: contain;
  background-position: center;
  padding: 0 ${({ theme }) => theme.spacings[3]};
  cursor: pointer;
  position: relative;
  user-select: none;

  :hover {
    filter: brightness(1.1) contrast(1.1) saturate(1.1);
  }
`

export const MenuItemFeedback = styled.span<
  Pick<T.MenuItemStylesProps, 'active'>
>`
  position: absolute;
  bottom: 0;
  height: 12px;
  width: 12px;
  ${({ active, theme }) => css`
    right: ${theme.spacings[1]};
    background: ${!active ? `url(${PlusOld.src})` : `url(${MinusOld.src})`}
      no-repeat;
  `}

  transition: all 0.2s ease-in-out;
`

export const MenuItemContent = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  gap: ${({ theme }) => theme.spacings[1]};
`

export const MenuItemText = styled.span`
  color: ${({ theme }) => theme.color.primary.default};
  font-family: ${({ theme }) => theme.text.family.fondamento};
  text-shadow: -1px -1px 0 ${({ theme }) => theme.color.default.black},
    1px -1px 0 ${({ theme }) => theme.color.shadows.primary.default},
    -1px 1px 0 ${({ theme }) => theme.color.default.black},
    1px 1px 0 ${({ theme }) => theme.color.default.black};
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: ${({ theme }) => theme.text.size[3]};
  text-align: center;
  width: 100%;
`

export const MenuItemSubItemsWrapper = styled(motion.div)`
  background: ${({ theme }) => theme.color.background[7]};
  margin: 0 ${({ theme }) => theme.spacings[1]};
`
