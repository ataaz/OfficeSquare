import styles from '../../styles/Home.module.css';
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import Link from 'next/link';
import Image from 'next/image';
import Slider from 'react-slick';

export default function HomeBanner(props) {
    const { scroll } = useLocomotiveScroll()
    return <section className={styles.homeBanner + ' homeBannerGlobal'} style={{position:`relative`}}>
    <div className='container position-relative containerH100'>
      <div className='row justify-content-end d-none d-md-flex'>
        <div className='col-md-6'>
          <Image src={props.img.url} alt={props.img.alt} width={626} height={645} data-aos="fade" data-aos-delay="800" data-aos-duration="500" style={{width:`100%`,height:`100%`}}/>
        </div>
      </div>
      <div className={styles.vdoTextParent} style={{position:`absolute`}}>
      <div className={styles.vdoText}>
          {/* <video controls muted autoPlay loop data-aos="fade" data-aos-delay="1200">
            <source src="https://officesquare.com/home-video.mp4" type="video/mp4"></source>
            <source src="https://officesquare.com/home-video.ogg" type="video/ogg"></source>
            Your browser does not support HTML video.
          </video> */}
          <div className={styles.vdoTextBox}>
            <h1 className="text-center text-md-start" data-aos="fade" data-aos-delay="200">{props.heading}</h1>
          </div>
        </div>
        {/* <h2 dangerouslySetInnerHTML={{__html: props.content}}></h2> */}
        {/* <Link className='mobileHeaderBtn d-inline-block' href={props.link?.url}>{props.link?.title}</Link> */}
        <h2 className="text-center text-md-start" dangerouslySetInnerHTML={{__html: props.content}} data-aos="fade-up" data-aos-delay="200" data-aos-duration="500"></h2>
        <Link className='mobileHeaderBtn d-inline-block' href={props.link?.url} data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">{props.link?.title}</Link>
        <div className='d-block text-center d-md-none mt-3'>
          <Link href="/contact-us" className='underlineBtn d-inline' data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">Learn more about us</Link>
        </div>
      </div>
      <Slider
      className='homeBannerSlider mt-5 pt-4 customDots d-block d-md-none'
      arrows={false}
      dots={true}
      swipeToSlide={true}
      focusOnSelect={true}
      autoplay={true}
      >
        <div><Image src={props.img.url} alt={props.img.alt} width={260} height={265} style={{width:`100%`,height:`100%`}}/></div>
        <div><Image src={props.img.url} alt={props.img.alt} width={260} height={265} style={{width:`100%`,height:`100%`}}/></div>
        <div><Image src={props.img.url} alt={props.img.alt} width={260} height={265} style={{width:`100%`,height:`100%`}}/></div>
      </Slider>
    </div>
    <a className={styles.svgHome + ' d-none'} href="#Intro">
      <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"> <g filter="url(#filter0_d_1314_52)"> <rect x="4" width="54" height="54" fill="#E35B5B"/> </g> <path d="M31.5 15V38.5M31.5 38.5L24 31M31.5 38.5L38.5 31" stroke="white" strokeWidth="2" strokeLinecap="round"/> <defs> <filter id="filter0_d_1314_52" x="0" y="0" width="62" height="62" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"> <feFlood floodOpacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset dy="4"/> <feGaussianBlur stdDeviation="2"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1314_52"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1314_52" result="shape"/> </filter> </defs> </svg>
    </a>
  </section>
};