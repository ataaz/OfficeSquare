import Image from 'next/image';
import styles from '../../styles/Service/Amenities.module.css';
import text4 from '../../styles/About/Text4.module.css';
import Link from 'next/link';
import LocationImage from '../../images/location-cta-image.jpg'

export default function LocationCTA() {
  return (
    <>
    <section className={styles.Text2Cols + ' default-pt default-pb position-relative'}>
        <div className="container">
            <div className='d-block d-md-none mb-4 pb-2'>
                <div className={text4.text4 + ' ' + text4.text4Label + ' ' + text4.text4_fszP16}>
                    <span><em>What makes us different</em></span>
                    <h2 className='mb-4'>The ultimate <br className='d-none d-sm-block'></br>flexible lease for businesses</h2>
                </div>
            </div>
            <div className='row align-items-center justify-content-between'>
                <div className='col-md-6'>
                    <div className='fullImg'>
                        <Image src={LocationImage} alt='Flexible Lease for Business'/>
                    </div>
                </div>
                <div className='col-md-5 mt-4 mt-md-0'>
                    <div className={text4.text4 + ' ' + text4.text4Label + ' ' + text4.text4_fszP16}>
                        <span className='d-none d-md-inline-block'><em>What makes us different</em></span>
                        <h2 className='mb-4 d-none d-md-block'>The ultimate <br className='d-none d-sm-block'></br>flexible lease for businesses</h2>
                        <p>Enjoy unparalleled flexibility in our serviced offices, where you can choose from short-term or long-term leases, scalable space options, and the freedom to customize your workspace to suit your unique business requirements.</p>
                        <Link href='#' className='underlineBtn d-inline-block'>View all locations</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}