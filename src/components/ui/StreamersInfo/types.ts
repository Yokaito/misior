type Platform = 'twitch' | 'youtube'

export type StreamersInfoProps = {
  platform: Platform
  viewers: number
  streamers: number
  href: string
}
