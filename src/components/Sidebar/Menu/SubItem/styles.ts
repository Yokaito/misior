import { motion } from 'framer-motion'
import styled from 'styled-components'
import Chain from '@/assets/images/borders/chain.gif'

export const MenuSubItemWrapper = styled(motion.li)`
  display: flex;
  background: ${({ theme }) => theme.color.background[7]};
  height: max-content;
  min-height: 21px;
  border-bottom: 1px solid ${({ theme }) => theme.color.borders.quinary.default};
  width: 100%;

  a {
    text-decoration: none;
    width: 100%;
  }

  :hover {
    background: ${({ theme }) => theme.color.background[6]};
  }
`

export const MenuSubItemContent = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacings[2]};
  position: relative;
  width: 100%;
  height: 100%;
`

type MenuSubItemBorderProps = {
  right?: boolean
}

export const MenuSubItemBorder = styled.div<MenuSubItemBorderProps>`
  left: ${({ right }) => (right ? `unset` : `0`)};
  right: ${({ right }) => (right ? `0` : `unset`)};
  position: absolute;
  background: ${`url(${Chain.src})`};
  background-repeat: repeat-y;

  height: 21px;
  width: 7px;
`

export const MenuSubItemIcon = styled.div`
  color: ${({ theme }) => theme.color.default.white};
  font-size: ${({ theme }) => theme.text.size[1]};
  font-weight: ${({ theme }) => theme.text.weight.regular};
  margin-right: ${({ theme }) => theme.spacings[1]};
`

export const MenuSubItemText = styled.span`
  color: ${({ theme }) => theme.color.default.white};
  font-size: ${({ theme }) => theme.text.size[1]};
  font-weight: ${({ theme }) => theme.text.weight.regular};
`
