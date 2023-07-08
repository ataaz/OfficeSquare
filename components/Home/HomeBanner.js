import styles from '../../styles/Home.module.css';
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import { useEffect } from 'react';
import Link from 'next/link';

export default function HomeBanner(props) {
    const { scroll } = useLocomotiveScroll()
    return <section className={styles.homeBanner + ' homeBannerGlobal'}>
    <div className='container' data-scroll data-scroll-speed="1" >
      <div className={styles.vdoText}>
        <video controls muted autoPlay loop data-aos="fade" data-aos-delay="1200">
          <source src="https://officesquare.com/home-video.mp4" type="video/mp4"></source>
          <source src="https://officesquare.com/home-video.ogg" type="video/ogg"></source>
          Your browser does not support HTML video.
        </video>
        <div className={styles.vdoTextBox}>
          <h1 data-aos="fade" data-aos-delay="1000">{props.heading}</h1>
        </div>
      </div>
      <h2 dangerouslySetInnerHTML={{__html: props.content}} data-aos="fade-up" data-aos-delay="1600" data-aos-duration="1000"></h2>
      <Link className='mobileHeaderBtn d-inline-block' href={props.link?.url} data-aos="fade-up" data-aos-delay="1600" data-aos-duration="1000">{props.link?.title}</Link>
    </div>
    <a className={styles.svgHome + ' d-none'} href="#Intro">
      <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"> <g filter="url(#filter0_d_1314_52)"> <rect x="4" width="54" height="54" fill="#E35B5B"/> </g> <path d="M31.5 15V38.5M31.5 38.5L24 31M31.5 38.5L38.5 31" stroke="white" strokeWidth="2" strokeLinecap="round"/> <defs> <filter id="filter0_d_1314_52" x="0" y="0" width="62" height="62" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"> <feFlood floodOpacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset dy="4"/> <feGaussianBlur stdDeviation="2"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1314_52"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1314_52" result="shape"/> </filter> </defs> </svg>
    </a>
  </section>
};