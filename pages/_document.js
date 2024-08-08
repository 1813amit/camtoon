import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="description" content="Turn your profile picture into a comic book style portrait! Cartoonify yourself for free." />

        {/* Google Analytics */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_GID}`} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}