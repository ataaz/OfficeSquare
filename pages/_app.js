import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.js'
import '../styles/globals.css';
import { Plus_Jakarta_Sans } from 'next/font/google';
import dynamic from "next/dynamic";
const jk = Plus_Jakarta_Sans({ 
    subsets: ['latin'],
    weight: ['400', '500', '700', '800'],
})
const Scroll = dynamic(
  () => {
    return import("locomotive-scroll");
  },
  { ssr: false }
);

export default function App({ Component, pageProps }) {
  return (
    <>
    <style jsx global>{`
        html *{
          font-family: ${jk.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />;
    </>
);
}