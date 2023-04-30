import styled, { css } from 'styled-components'
import type * as T from './types'

import Plus from '@/assets/images/helpers/plus.gif'
import Minus from '@/assets/images/helpers/minus.gif'

import Community from '@/assets/images/icons/16/community.gif'
import Technical from '@/assets/images/icons/16/technical.gif'
import Development from '@/assets/images/icons/16/development.gif'

export const Icons = {
  community: Community.src,
  technical: Technical.src,
  development: Development.src,
}

export const NewstickerItemWrapper = styled.div<T.NewstickerItemStyleProps>`
  display: grid;
  background-color: transparent;
  grid-template-columns: 16px 6rem auto 24px;
  cursor: pointer;

  ${({ theme, isActive }) => css`
    height: ${isActive ? `max-content` : `19px`};
    overflow: ${isActive ? `visible` : `hidden`};
    color: ${theme.color.quaternary.default};
  `}
`

export const NewstickerItemDate = styled.div`
  height: 100%;
  display: grid;
  place-self: center;
  margin-left: 0.3rem;
  line-height: 1.5;
  text-transform: capitalize;
  ${({ theme }) => css`
    color: ${theme.color.quaternary.default};
    font-size: ${theme.text.size[1]};
  `}
`

export const NewstickerItemText = styled.div<T.NewstickerItemStyleProps>`
  height: 100%;
  text-align: justify;

  line-height: 1.5;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  ${({ theme, isActive }) => css`
    white-space: ${isActive ? `pre-wrap` : `nowrap`};
    color: ${theme.color.quaternary.default};
    font-size: ${theme.text.size[1]};

    * {
      font-size: ${theme.text.size[1]};
      line-height: 1.5;

      a {
        color: ${theme.color.borders.quinary.lighten};
      }
    }
  `}
`

export const NewstickerItemShow = styled.div<T.NewstickerItemStyleProps>`
  background-image: ${({ isActive }) =>
    isActive ? `url(${Minus.src})` : `url(${Plus.src})`};
  height: 12px;
  width: 12px;
  margin-top: 3px;
  display: grid;
  place-self: start center;
`

export const NewstickerItemIcon = styled.div<{
  icon: keyof typeof Icons
}>`
  height: 16px;
  width: 16px;
  background-image: url(${({ icon }) => Icons[icon]});
  display: grid;
  place-self: start;
`
