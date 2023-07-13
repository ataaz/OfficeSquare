import Image from 'next/image';
import styles from '../../styles/About/Offer.module.css';
import text4 from '../../styles/About/Text4.module.css';
import Offer from "../../images/offer.jpg";
import OfferSmall from "../../images/offer-small.jpg";
import { useLocomotiveScroll } from 'react-locomotive-scroll';

export default function OfferAbout(props) {
    const { scroll } = useLocomotiveScroll();
  return (
    <>
    <section className={styles.offerSec + ' default-pb1 default-pt position-relative LargeScreenWidth'}>
        <Image className={styles.imgAbs6} priority src={props.img1?.url} alt={props.img1?.alt} width="278" height="183" data-scroll data-scroll-speed="4"/>
        <div className="container">
            <div className={text4.text4 + ' ' + text4.text4Label + ' ' + text4.text4_h2fw700 + ' ' + text4.posTop110px}>
                <span><em>{props.label}</em></span>
                <h2 className='mb-0' dangerouslySetInnerHTML={{__html: props.content}}></h2>
            </div>

            <div className='row justify-content-between align-items-end'>
                <div className='col-md-2 order-2 order-md-1 mt-5 mt-md-0'>
                    <div className={styles.OfferSpans} dangerouslySetInnerHTML={{__html: props.offers}}>
                    </div>
                </div>
                <div className='col-md-9 col-md-9 order-1 order-md-2'>
                    <div className='fullImg imgMagnify'>
                        <Image priority src={props.mainImg?.url} alt={props.mainImg?.alt} width="960" height="604"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}