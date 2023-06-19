import Image from 'next/image';
import styles from '../../styles/Service/Amenities.module.css';
import text4 from '../../styles/About/Text4.module.css';
import Link from 'next/link';
import LocationImage from '../../images/location-cta-image.jpg';
import Feature1 from '../../images/feature-1.jpg';
import Feature2 from '../../images/feature-2.jpg';
import Feature3 from '../../images/feature-3.jpg';
import Feature4 from '../../images/feature-4.jpg';
import Feature5 from '../../images/feature-5.jpg';

export default function Features() {
  return (
    <>
    <section className={styles.Text2Cols + ' default-pb2 position-relative'}>
        <div className="container">
            <div className='row align-items-center default-pb2 justify-content-between'>
                <div className='col-md-3'>
                    <div className='fullImg'>
                        <Image src={Feature1} alt='Feature 1'/>
                    </div>
                </div>
                <div className='col-md-5'>
                    <div className={text4.text4 + ' ' + text4.text4Label + ' ' + text4.text4_fszP16  + ' ' + text4.Hidetext4Label + ' text-center'}>
                        <span><em>Additional Features</em></span>
                        <h2 className='mb-4'>What Does Your Future Office Look?</h2>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='fullImg'>
                        <Image src={Feature2} alt='Feature 2'/>
                    </div>
                </div>
            </div>

            <div className='row default-pb2 justify-content-between'>
                <div className='col-md-3 align-self-start'>
                    <div className='fullImg'>
                        <Image src={Feature3} alt='Feature 3'/>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='fullImg'>
                        <Image src={Feature4} alt='Feature 4'/>
                    </div>
                </div>
                <div className='col-md-2 align-self-center'>
                    <div className='fullImg'>
                        <Image src={Feature5} alt='Feature 5'/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}