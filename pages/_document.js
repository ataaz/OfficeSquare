import { Html, Head, Main, NextScript } from 'next/document'
import Footer from '../components/Layout/Footer';
import Header from '../components/Layout/Header';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
      </Head>
      <body className='bodyRoot'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}