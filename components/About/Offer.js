import Image from 'next/image';
import styles from '../../styles/About/Offer.module.css';
import text4 from '../../styles/About/Text4.module.css';
import Offer from "../../public/offer.jpg";
import OfferSmall from "../../public/offer-small.jpg";

export default function OfferAbout() {
  return (
    <>
    <section className={styles.offerSec + ' default-pb1 default-pt position-relative'}>
        <Image className={styles.imgAbs6} priority src={OfferSmall} alt="Offer"/>
        <div className="container">
            <div className={text4.text4 + ' ' + text4.text4Label + ' ' + text4.text4_h2fw700 + ' ' + text4.posTop110px}>
                <span><em>What We Offer</em></span>
                <h2 className='mb-0'>Your professional address <br className='d-none d-sm-block'></br>in the digital world</h2>
            </div>

            <div className='row justify-content-between align-items-end'>
                <div className='col-md-2'>
                    <div className={styles.OfferSpans}>
                        <span>Prestigious <br></br>locations</span>
                        <span>Personalized <br></br>support</span>
                        <span>Convenient <br></br>payments</span>
                    </div>
                </div>
                <div className='col-md-9'>
                    <div className='fullImg'>
                        <Image priority src={Offer} alt="Offer"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}