import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="manifest" href="/manifest.json"></link>
          <link rel="icon" href="/logo/mitg-icon.svg" />
          <meta
            name="description"
            content={`Tibia is a free massively multiplayer online role-playing game (MMORPG). Join this fascinating game that has thousands of fans from all over the world! - misior.mitg.dev`}
          />
          <meta
            name="keywords"
            content="free online game, free multiplayer game, free online rpg, free mmorpg, mmorpg, mmog, online role playing game, online multiplayer game, internet game, online rpg, rpg"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="misior.mitg.dev" />
          <meta
            property="og:title"
            content="Tibia - Free Multiplayer Online Role Playing Game"
          />
          <meta
            property="og:description"
            content="Tibia is a free massively multiplayer online role-playing game (MMORPG). Join this fascinating game that has thousands of fans from all over the world!"
          />
          <meta
            property="og:image"
            content={`https://misior.mitg.dev/logo/icon-192.png`}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
