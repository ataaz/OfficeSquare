import Image from 'next/image';
import styles from '../../styles/Service/Amenities.module.css';
import text4 from '../../styles/About/Text4.module.css';
import Link from 'next/link';
import Feature1 from '../../images/features-1.jpg';
import Feature2 from '../../images/features-2.jpg';
import Feature3 from '../../images/features-3.jpg';
import Feature4 from '../../images/features-4.jpg';
import Feature5 from '../../images/features-5.jpg';

export default function Features() {
  return (
    <>
    <section className={styles.Text2Cols + ' default-pt0 default-pb2 position-relative'}>
        <div className="container">
            <div className='row align-items-center default-pb2 removeMobile-default-pb2 Add-default-pb2-in768px justify-content-between'>
                <div className='col-md-3 col-6 order-2 order-md-1 mb-4 mb-md-0'>
                    <div className='fullImg imgMagnify featureImgBox'>
                        <Image src={Feature1} alt='Feature 1'/>
                        <span>Personal</span>
                    </div>
                </div>
                <div className='col-md-5 order-1 order-md-2'>
                    <div className={text4.text4 + ' ' + text4.text4Label + ' ' + text4.text4_fszP16  + ' ' + text4.Hidetext4Label + ' text-center'}>
                        <span className='ps-0'><em className='ps-0'>Additional Features</em></span>
                        <h2 className='mb-5 mb-md-0'>What Does Your Future Office Look?</h2>
                    </div>
                </div>
                <div className='col-md-3 col-6 order-3 order-md-3 mb-4 mb-md-0'>
                    <div className='fullImg imgMagnify featureImgBox featureImgBoxLeft'>
                        <Image src={Feature2} alt='Feature 2'/>
                        <span>Exclusive</span>
                    </div>
                </div>
            </div>

            <div className='row default-pb2 justify-content-between removeMobile-default-pb2'>
                <div className='col-md-3 col-6 col-lg-4 col-xl-3 align-self-start mb-4 mb-md-0'>
                    <div className='fullImg imgMagnify featureImgBox'>
                        <Image src={Feature3} alt='Feature 3'/>
                        <span>Premium</span>
                    </div>
                </div>
                <div className='col-md-6 col-6 col-lg-4 col-xl-6'>
                    <div className='fullImg imgMagnify featureImgBox mb-4 mb-md-0'>
                        <Image src={Feature4} alt='Feature 4'/>
                        <span>Non-government Entity</span>
                    </div>
                </div>
                <div className='col-md-2 col-6 col-lg-4 col-xl-2 align-self-center'>
                    <div className='fullImg imgMagnify featureImgBox mb-4 mb-md-0'>
                        <Image src={Feature5} alt='Feature 5'/>
                        <span>Non-Public</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}