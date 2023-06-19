import Image from 'next/image';
import text4 from '../../styles/About/Text4.module.css';
import styles from '../../styles/Service/Gallery.module.css';
import Link from 'next/link';

export default function Gallery() {
  return (
    <>
    <section className={styles.gallerySec + ' default-pb1 position-relative'}>
        <div className="container">
            <div className='row justify-content-between align-items-end mb-5 pb-5'>
                <div className='col-md-6 col-lg-6 mb-4 mb-md-0 pb-1 pb-md-0'>
                    <div className={text4.text4 + ' ' + text4.text4Label + ' ' + text4.text4_h2fw700}>
                    <span><em>Gallery</em></span>
                    <h2 className='mb-4'>Unleashing Productivity</h2>
                    <p className='mb-0'>Experience the freedom of tailoring your ideal workspace with our serviced offices, where customization meets convenience.</p>
                    </div>
                </div>
                <div className='col-md-3 text-end'>
                    <a class="btn1" href="/">Book Now</a>
                </div>
            </div>
        </div>

        <div className='galleryContainer'>
            <div className=''>
                <Image src='' alt='' />
            </div>
        </div>
    </section>
    </>
  );
}