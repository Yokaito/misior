import Image from 'next/image'
import { Pedestal } from '../Pedestal'
import * as S from './styles'
import type * as T from './types'
import { HeadIcons, HeadImages } from './images'
import Button from '../Button'
import Link from 'next/link'

export const ServiceBox = ({
  showPedestal = false,
  showIcon = false,
  customTitle,
  headImage = 'Head1',
  headIcon = 'CoinAnimation',
  boxImage = 'Box1',
  buttonOptions,
  children,
  href,
}: T.ServiceBoxProps) => {
  const hasCustomTitle = customTitle !== undefined

  const ImageToUse = hasCustomTitle
    ? HeadImages.HeadCustom
    : HeadImages[headImage]

  return (
    <S.ServiceBoxWrapper
      style={{
        marginBottom: buttonOptions?.hasButton ? '18px' : '0',
      }}
    >
      {showPedestal && <Pedestal />}
      <S.ServiceBoxHeader>
        {showIcon && (
          <S.ServiceBoxIconHeader>
            <Image src={HeadIcons[headIcon]} alt="coin animation" />
          </S.ServiceBoxIconHeader>
        )}

        {hasCustomTitle && <S.ServiceBoxTitle>{customTitle}</S.ServiceBoxTitle>}

        <Image src={ImageToUse} alt="head service box" />
      </S.ServiceBoxHeader>

      {href ? (
        <Link href={href} target="_blank">
          <S.ServiceBoxContent boxImage={boxImage}>
            {children}
          </S.ServiceBoxContent>
        </Link>
      ) : (
        <S.ServiceBoxContent boxImage={boxImage}>
          {children}
        </S.ServiceBoxContent>
      )}

      {buttonOptions?.hasButton && (
        <S.ServiceBoxContentButtonWrapper>
          <S.ServiceBoxContentButtonContainer>
            <Button
              text={buttonOptions?.buttonLabel || 'Default'}
              extend
              hasAdornment
              {...buttonOptions?.buttonProps}
            />
          </S.ServiceBoxContentButtonContainer>
        </S.ServiceBoxContentButtonWrapper>
      )}
    </S.ServiceBoxWrapper>
  )
}

export default ServiceBox
