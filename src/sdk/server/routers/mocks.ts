export const MockNews: Array<{
  icon: 'community' | 'development' | 'support'
  title: string
  date: Date
  author: string
  content: string
}> = [
  {
    icon: 'community',
    title: 'Community News',
    date: new Date(),
    author: 'Kamity',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec',
  },
  {
    icon: 'support',
    title: 'Support News',
    date: new Date(),
    author: 'Kuriti',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec',
  },
  {
    icon: 'development',
    title: 'Development News',
    date: new Date(),
    author: 'Yokaito',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec',
  },
]

export const MockNewsticker: Array<{
  icon: 'community' | 'development' | 'technical'
  date: Date
  text: string
}> = [
  {
    icon: 'community',
    date: new Date(),
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec <a href="/online">Algum Link</a> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec',
  },
  {
    icon: 'technical',
    date: new Date(),
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec',
  },
  {
    icon: 'development',
    date: new Date(),
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec',
  },
  {
    icon: 'technical',
    date: new Date(),
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec',
  },
  {
    icon: 'development',
    date: new Date(),
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec',
  },
  {
    icon: 'community',
    date: new Date(),
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec',
  },
]
