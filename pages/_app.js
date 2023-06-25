import React, { useEffect, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css';
import '../styles/locomotive-scroll.min.css';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { Plus_Jakarta_Sans } from 'next/font/google';
const jk = Plus_Jakarta_Sans({ 
    subsets: ['latin'],
    weight: ['400', '500', '700', '800'],
})

export default function App({ Component, pageProps }) {
  const containerRef = useRef(null)
  return (
    <>
    <style jsx global>{`
        html *{
          font-family: ${jk.style.fontFamily};
        }
      `}</style>
      <LocomotiveScrollProvider
      options={
        {
          smooth: true,
          // ... all available Locomotive Scroll instance options 
        }
      }
      watch={
        [
          //..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
        ]
      }
      containerRef={containerRef}
    >
    <main ref={containerRef}>
      <Component {...pageProps} />;
    </main>
    </LocomotiveScrollProvider>
    </>
);
}