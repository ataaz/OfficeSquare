import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
      </Head>
      <body className='bodyRoot' id='bodyRoot'>
        <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MFJ537D"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}