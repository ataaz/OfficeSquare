import Image from 'next/image';
import styles from '../../styles/Service/Amenities.module.css';
import text4 from '../../styles/About/Text4.module.css';
import Link from 'next/link';
import LocationImage from '../../images/location-cta-image.jpg'

export default function LocationCTA() {
  return (
    <>
    <section className={styles.Text2Cols + ' default-pt2 default-pb2 position-relative'}>
        <div className="container">
            <div className='row align-items-center default-pb2 justify-content-between'>
                <div className='col-md-6'>
                    <div className='fullImg'>
                        <Image src={LocationImage} alt='Flexible Lease for Business'/>
                    </div>
                </div>
                <div className='col-md-5'>
                    <div className={text4.text4 + ' ' + text4.text4Label + ' ' + text4.posTop110px  + ' ' + text4.text4_fszP16}>
                        <span><em>What makes us different</em></span>
                        <h2 className='mb-4'>The ultimate <br className='d-none d-sm-block'></br>flexible lease for businesses</h2>
                        <p>Enjoy unparalleled flexibility in our serviced offices, where you can choose from short-term or long-term leases, scalable space options, and the freedom to customize your workspace to suit your unique business requirements.</p>
                        <Link href='#' className='underlineBtn'>View all locations</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}