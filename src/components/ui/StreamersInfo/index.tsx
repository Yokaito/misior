import Image from 'next/image'
import * as S from './styles'
import type * as T from './types'
import IconTwitch from '@/assets/images/icons/twitch.png'
import IconYoutube from '@/assets/images/icons/youtube.png'
import IconViewers from '@/assets/images/icons/viewers.png'
import IconStreamers from '@/assets/images/icons/streamers.png'

export const StreamersInfo = ({
  platform,
  href,
  streamers,
  viewers,
}: T.StreamersInfoProps) => {
  const image = platform === 'twitch' ? IconTwitch : IconYoutube

  return (
    <S.StreamersInfoWrapper href={href} target="_blank">
      <Image
        src={image.src}
        alt="twitch"
        height={image.height}
        width={image.width}
        priority
      />
      <Image
        src={IconStreamers.src}
        alt="streamers"
        height={IconStreamers.height}
        width={IconStreamers.width}
        priority
      />
      {streamers}
      <Image
        src={IconViewers.src}
        alt="viewers"
        height={IconViewers.height}
        width={IconViewers.width}
        priority
      />
      {viewers}
    </S.StreamersInfoWrapper>
  )
}

export default StreamersInfo
