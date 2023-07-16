import React, { useEffect, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css';
import '../styles/locomotive-scroll.min.css';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { Provider } from "react-redux";
import store from "../store.js";
import Header from "../components/Layout/Header";
const jk = Plus_Jakarta_Sans({ 
    subsets: ['latin'],
    weight: ['400', '500', '700', '800'],
})

export default function App({ Component, pageProps }) {
  // const [clientWindowHeight, setClientWindowHeight] = useState(0);
  // useEffect(() => {
  //     const handleScroll = () => {
  //         setClientWindowHeight(window.scrollY);
  //         console.log(clientWindowHeight)
  //       };
        
  //   window.addEventListener("scroll", handleScroll); 
  //   return () => window.removeEventListener("scroll", handleScroll);
  // });
  // console.log(clientWindowHeight)
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
          smooth: false,
          smartphone: {
            smooth: false
          },
          // reloadOnContextChange:true,
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
      // location={asPath}
      // onLocationChange={scroll => scroll.scrollTo(0, { duration: 0, disableLerp: true })} // If you want to reset the scroll position to 0 for example
      // onUpdate={() => console.log('Updated, but not on location change!')} // Will trigger on 
      containerRef={containerRef}
    >
    <Header/>
    <main ref={containerRef} data-scroll-container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
    </main>
    </LocomotiveScrollProvider>
    </>
);
}