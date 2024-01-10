import Image from 'next/image';
import text4 from '../../styles/About/Text4.module.css';
import styles from '../../styles/About/Locations.module.css';
import DubaiImg from "../../images/dubai-neww.webp";
import AbuDhabiImg from "../../images/abudhabi-loc.jpg";
import RiyadhImg from "../../images/riyadh-new.webp";
import ADGM from "../../images/adgm-new.webp";
import Aldar from "../../images/al-raha-new.webp";
import Landmark from "../../images/landmark-new.webp";
import Link from 'next/link';
import { useState } from 'react';
import Slider from 'react-slick';

export default function Locations() {
    const [Gototop, setScrollTop] = useState(false);
    const doScrollTop = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    };
  return (
    <>
    <section className={styles.LocationSec + ' default-pt1 position-relative LocationSecGlobal'}>
        <div className="container mb-5 pb-5">
            <div className={text4.text4 + ' ' + text4.text4Label + ' ' + text4.text4_h2fw700}>
                <span><em>Locations</em></span>
                <h2 className='mb-0'>Our Locations</h2>
            </div>
        </div>

        <div className='container'>
            <div className='row locColz'>
                <div className='col-md-4 col-sm-6 mb-5 mb-sm-4 mb-md-5 pb-xl-5'>
                    <div className={styles.locBox2 + ' imgMagnify'}>
                        <h3>Aldar HQ</h3>
                        <div className='fullImg overflow-hidden'>
                            <Image src={Aldar} alt="Abu Dhabi Image" data-scroll-speed="-1.5" data-scroll/>
                        </div>
                        <div onClick={doScrollTop} className={styles.locBoxText2}>
                            <div className='textBelow2'>
                                <h4>Al Raha Beach - Abu Dhabi</h4>
                                <p>Level 3/301 - HQ <br></br>Al Shahama, Abu Dhabi Rd <br></br>Al Raha - Abu Dhabi</p>
                                <a href='https://www.google.com/maps/place/Aldar+headquarters+building+-+Al+Rahah+-+Abu+Dhabi+-+United+Arab+Emirates/@24.4411514,54.572777,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5e45d017f01e73:0x94b41713098b13b!8m2!3d24.4411465!4d54.5753519!16s%2Fm%2F0dsdytw?entry=ttu'>View Location Map</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 col-sm-6 mb-5 mb-sm-4 mb-md-5 pb-xl-5'>
                    <div className={styles.locBox2 + ' imgMagnify'}>
                        <h3>Landmark Tower</h3>
                        <div className='fullImg overflow-hidden'>
                            <Image src={Landmark} alt="Abu Dhabi Image" data-scroll-speed="-1.5" data-scroll/>
                        </div>
                        <div onClick={doScrollTop} className={styles.locBoxText2}>
                            <div className='textBelow2'>
                                <h4>Abu Dhabi Corniche - Abu Dhabi</h4>
                                <p>Level 31 - Lanadmark Towers <br></br>Al HisnAl 116 Khalid Bin Waleed St <br></br>Al Hisn - Al Markaziyah West, Abu Dhabi</p>
                                <a href='https://www.google.com/maps/place/The+Landmark+-+Al+Hisn+-+Al+Markaziyah+West+-+Abu+Dhabi+-+United+Arab+Emirates/@24.4849599,54.3481851,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5e6679c296fc7d:0xa41f5d7c388f1606!8m2!3d24.484955!4d54.35076!16s%2Fm%2F051yhln?entry=ttu'>View Location Map</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 col-sm-6 mb-5 mb-sm-4 mb-md-5 pb-xl-5'>
                    <div className={styles.locBox2 + ' imgMagnify'}>
                        <h3>Abu Dhabi Global Markets</h3>
                        <div className='fullImg overflow-hidden'>
                            <Image src={ADGM} alt="Abu Dhabi Image" data-scroll-speed="-1.5" data-scroll/>
                        </div>
                        <div onClick={doScrollTop} className={styles.locBoxText2}>
                            <div className='textBelow2'>
                                <h4>Al  Maryah Island - Abu Dhabi</h4>
                                <p>ADGM Square <br></br>Al Maryah Island, PO Box 111999<br></br> Abu Dhabi</p>
                                <a href='https://www.google.com/maps/place/Abu+Dhabi+Global+Market/@24.5011366,54.3861382,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5e6654ed46c84f:0x2f5bcb81cc2ed32b!8m2!3d24.5011317!4d54.3887131!16s%2Fm%2F012z89xb?entry=ttu'>View Location Map</a>
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
            </div>
        </div>
    </section>
    </>
  );
}