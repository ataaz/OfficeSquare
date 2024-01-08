import Image from 'next/image';
import text4 from '../../styles/About/Text4.module.css';
import styles from '../../styles/About/Locations.module.css';
import DubaiImg from "../../images/dubai-new.webp";
import AbuDhabiImg from "../../images/abudhabi-loc.jpg";
import RiyadhImg from "../../images/riyadh-new.png";
import ADGM from "../../images/adgm.webp";
import Aldar from "../../images/aldar-hq.webp";
import Landmark from "../../images/landmark.webp";
import Link from 'next/link';
import { useState } from 'react';
import Slider from 'react-slick';

export default function Locations() {
    var locSlider = {
        centerMode:true,
        centerPadding:'140px',
        infinite: true,
        arrows: false,
        dots:false,
        speed: 4000,
        autoplaySpeed: 0,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        touchMove: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        initialSlide:1,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              centerPadding:'40px',
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              centerPadding:'40px',
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerPadding:'60px',
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      };
    const [Gototop, setScrollTop] = useState(false);
    const doScrollTop = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    };
  return (
    <>
    <section className={styles.LocationSec + ' default-pt1 default-pb position-relative LocationSecGlobal'}>
        <div className="container">
            <div className='row align-items-center mb-5 pb-lg-5'>
                <div className='col-md-3 col-lg-3 mb-4 mb-md-0 pb-1 pb-md-0'>
                    <div className={text4.text4 + ' ' + text4.text4Label + ' ' + text4.text4_h2fw700}>
                        <span className='mb-0'><em>Locations</em></span>
                    </div>
                </div>
                <div className='col-md-7 col-lg-5'>
                    <div className={text4.text4 + ' ' + text4.text4Label + ' ' + text4.text4_h2fw700 + ' text4_h2Mobile'}>
                        <h2 className='mb-0'>Providing services in <br className='d-none d-sm-block'></br>different cities</h2>
                    </div>
                </div>
          </div>
        </div>

        <div className='containerBox overflow-hidden slideColz'>
          <div className='row justify-content-end g-0'>
            <div className='col-11'>
                <div className='row g-0 locColz'>
                <Slider {...locSlider}>
                    <div className='col-md-4 col-sm-6 mb-5 mb-sm-4 mb-md-0'>
                        <div className={styles.locBox2 + ' imgMagnify'}>
                            <h3>Aldar HQ</h3>
                            <div className='fullImg overflow-hidden'>
                                <Image src={Aldar} alt="Abu Dhabi Image" data-scroll-speed="-1.5" data-scroll/>
                            </div>
                            <div onClick={doScrollTop} className={styles.locBoxText2}>
                                <div className='textBelow2'>
                                    <h4>Al Raha Beach - Abu Dhabi</h4>
                                    <p>Level 3/301 - HQ <br></br>Al Shahama, Abu Dhabi Rd <br></br>Al Raha - Abu Dhabi</p>
                                    <a href='#'>View Location Map</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 col-sm-6 mb-5 mb-sm-4 mb-md-0'>
                        <div className={styles.locBox2 + ' imgMagnify'}>
                            <h3>Landmark Tower</h3>
                            <div className='fullImg overflow-hidden'>
                                <Image src={Landmark} alt="Abu Dhabi Image" data-scroll-speed="-1.5" data-scroll/>
                            </div>
                            <div onClick={doScrollTop} className={styles.locBoxText2}>
                                <div className='textBelow2'>
                                    <h4>Abu Dhabi Corniche - Abu Dhabi</h4>
                                    <p>Level 31 - Lanadmark Towers <br></br>Al HisnAl 116 Khalid Bin Waleed St <br></br>Al Hisn - Al Markaziyah West, Abu Dhabi</p>
                                    <a href='#'>View Location Map</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 col-sm-6 mb-5 mb-sm-4 mb-md-0'>
                        <div className={styles.locBox2 + ' imgMagnify'}>
                            <h3>Abu Dhabi Global Markets</h3>
                            <div className='fullImg overflow-hidden'>
                                <Image src={ADGM} alt="Abu Dhabi Image" data-scroll-speed="-1.5" data-scroll/>
                            </div>
                            <div onClick={doScrollTop} className={styles.locBoxText2}>
                                <div className='textBelow2'>
                                    <h4>Al  Maryah Island - Abu Dhabi</h4>
                                    <p>ADGM Square <br></br>Al Maryah Island, PO Box 111999<br></br> Abu Dhabi</p>
                                    <a href='#'>View Location Map</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 col-sm-6 mb-5 mb-sm-4 mb-md-0'>
                        <div className={styles.locBox2 + ' imgMagnify'}>
                            <h3>Dubai</h3>
                            <div className='fullImg overflow-hidden'>
                                <Image src={DubaiImg} alt="Abu Dhabi Image" data-scroll-speed="-1.5" data-scroll/>
                            </div>
                            <div onClick={doScrollTop} className={styles.locBoxText2}>
                                <div className='textBelow2'>
                                    <h4>Coming Soon</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 col-sm-6 mb-5 mb-sm-4 mb-md-0'>
                        <div className={styles.locBox2 + ' imgMagnify'}>
                            <h3>Riyadh</h3>
                            <div className='fullImg overflow-hidden'>
                                <Image src={RiyadhImg} alt="Abu Dhabi Image" data-scroll-speed="-1.5" data-scroll/>
                            </div>
                            <div onClick={doScrollTop} className={styles.locBoxText2}>
                                <div className='textBelow2'>
                                    <h4>Coming Soon</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
                </div>
            </div>
          </div>
        </div>
    </section>
    </>
  );
}