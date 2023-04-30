import { Section } from '@/components/ui/Section'
import { BarImage } from '@/components/ui/BarImage'
import * as S from './styles'

import IconPlayersOnline from '@/assets/images/icons/players-online.png'
import IconDiscord from '@/assets/images/icons/discord.png'
import IconDownload from '@/assets/images/icons/download.png'

import Image from 'next/image'
import { StreamersInfo } from '@/components/StreamersInfo'

export const InformationBar = () => {
  return (
    <Section>
      <BarImage background="red">
        <S.InformationBarWrapper>
          <S.InformationSocial>
            <StreamersInfo
              href="https://www.twitch.tv/directory/game/Tibia"
              platform="twitch"
              viewers={8367}
              streamers={99}
            />
            <StreamersInfo
              href="https://www.youtube.com/channel/UCg5vFOB3tN8KGcJDyk6QQzQ/home"
              platform="youtube"
              viewers={12332}
              streamers={123}
            />
            <S.InformationSocialContainer
              href="https://discord.com/"
              target="_blank"
            >
              <Image
                src={IconDiscord.src}
                alt="discord"
                height={IconDiscord.height}
                width={IconDiscord.width}
                priority
              />
            </S.InformationSocialContainer>
            <S.InformationSocialContainer href="/download">
              <Image
                src={IconDownload.src}
                alt="download"
                height={IconDownload.height}
                width={IconDownload.width}
                priority
              />
            </S.InformationSocialContainer>
          </S.InformationSocial>
          <S.InformationPlayersOnline>
            <Image
              src={IconPlayersOnline.src}
              alt="players online"
              height={IconPlayersOnline.height}
              width={IconPlayersOnline.width}
              priority
            />
            <S.InformationPlayersOnlineText href="/online">
              13,444 Players Online
            </S.InformationPlayersOnlineText>
          </S.InformationPlayersOnline>
        </S.InformationBarWrapper>
      </BarImage>
    </Section>
  )
}

export default InformationBar
