import Image from 'next/image';
import text4 from '../../styles/About/Text4.module.css';
import styles from '../../styles/About/Locations.module.css';
import DubaiImg from "../../images/dubai-loc.jpg";
import AbuDhabiImg from "../../images/abudhabi-loc.jpg";
import QatarImg from "../../images/qatar.jpg";
import Link from 'next/link';
import { useState } from 'react';

export default function Locations() {
    const [Gototop, setScrollTop] = useState(false);
    const doScrollTop = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    };
  return (
    <>
    <section className={styles.LocationSec + ' default-pt1 position-relative LocationSecGlobal'}>
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

          <div className='row'>
            <div className='col-md-4 col-sm-6 mb-5 mb-sm-4 mb-md-0'>
                <div className={styles.locBox + ' imgMagnify'}>
                    <div className='fullImg'>
                        <Image src={AbuDhabiImg} alt="Abu Dhabi Image" data-scroll-speed="-1.5" data-scroll/>
                    </div>
                    <Link href="/contact-us" onClick={doScrollTop} className={styles.locBoxText}>
                        <span>Abu Dhabi</span>
                        <div className='textBelow'>
                            <p>Al Maryah Island</p>
                            <h4>Home to Abu Dhabi’s <br className='d-none d-sm-block'></br>business district</h4>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='col-md-4 col-sm-6 mb-5 mb-sm-4 mb-md-0'>
                <div className={styles.locBox + ' imgMagnify'}>
                    <div className='fullImg'>
                        <Image src={DubaiImg} alt="Dubai Image" data-scroll-speed="-1.5" data-scroll/>
                    </div>
                    <Link href="/contact-us" onClick={doScrollTop} className={styles.locBoxText}>
                        <span>Dubai</span>
                        <div className='textBelow'>
                            <p>Dubai Marina</p>
                            <h4>Nestled in the heart of <br className='d-none d-sm-block'></br>Dubai</h4>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='col-md-4 col-sm-6'>
                <div className={styles.locBox + ' imgMagnify'}>
                    <div className='fullImg'>
                        <Image src={QatarImg} alt="Qatar Image" data-scroll-speed="-1.5" data-scroll/>
                    </div>
                    <Link href="/contact-us" onClick={doScrollTop} className={styles.locBoxText}>
                        <span>Riyadh</span>
                        <div className='textBelow'>
                            <p>Saudi Arabia</p>
                            <h4>Surrounded by numerous multinational companies</h4>
                        </div>
                    </Link>
                </div>
            </div>
          </div>

        </div>
    </section>
    </>
  );
}