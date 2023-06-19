import Image from 'next/image';
import text4 from '../../styles/About/Text4.module.css';
import styles from '../../styles/About/Locations.module.css';
import DubaiImg from "../../public/dubai.jpg";
import AbuDhabiImg from "../../public/abu-dhabi.jpg";
import QatarImg from "../../public/qatar.jpg";
import Link from 'next/link';

export default function Locations() {
  return (
    <>
    <section className={styles.LocationSec + ' default-pt1 position-relative'}>
        <div className="container">
            <div className='row align-items-center mb-5 pb-5'>
                <div className='col-md-3 col-lg-3 mb-4 mb-md-0 pb-1 pb-md-0'>
                    <div className={text4.text4 + ' ' + text4.text4Label + ' ' + text4.text4_h2fw700}>
                        <span className='mb-0'><em>Locations</em></span>
                    </div>
                </div>
                <div className='col-md-5'>
                    <div className={text4.text4 + ' ' + text4.text4Label + ' ' + text4.text4_h2fw700}>
                        <h2 className='mb-0'>Providing services in <br className='d-none d-sm-block'></br>different cities</h2>
                    </div>
                </div>
          </div>

          <div className='row'>
            <div className='col-md-4'>
                <div className={styles.locBox} style={{backgroundImage: `url('abu-dhabi.jpg')`,backgroundSize:`cover`}}>
                    <div className='fullImg imgMagnify'>
                        <Image src={AbuDhabiImg}/>
                    </div>
                    <Link href="#" className={styles.locBoxText}>
                        <span>Abu Dhabi</span>
                        <div className='textBelow'>
                            <p>Private-Space Providing</p>
                            <h4>Space provided in Abu Dhabi for business promotion</h4>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='col-md-4'>
                <div className={styles.locBox} style={{backgroundImage: `url('dubai.jpg')`,backgroundSize:`cover`}}>
                    <div className='fullImg imgMagnify'>
                        <Image src={DubaiImg}/>
                    </div>
                    <Link href="#" className={styles.locBoxText}>
                        <span>Dubai</span>
                        <div className='textBelow'>
                            <p>Private-Space Providing</p>
                            <h4>Space provided in Dubai for business promotion</h4>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='col-md-4'>
                <div className={styles.locBox} style={{backgroundImage: `url('qatar.jpg')`,backgroundSize:`cover`}}>
                    <div className='fullImg imgMagnify'>
                        <Image src={QatarImg}/>
                    </div>
                    <Link href="#" className={styles.locBoxText}>
                        <span>Qatar</span>
                        <div className='textBelow'>
                            <p>Private-Space Providing</p>
                            <h4>Space provided in Qatar for business promotion</h4>
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