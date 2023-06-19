import Image from 'next/image';
import styles from '../../styles/Service/Text2Cols.module.css';
import text4 from '../../styles/About/Text4.module.css';
import Link from 'next/link';
import Benefit1 from '../../images/benefit-1.jpg'
import Benefit2 from '../../images/benefit-2.jpg'
import Benefit3 from '../../images/benefit-3.jpg'

export default function Benefits() {
  return (
    <>
    <section className={styles.Text2Cols + ' default-pt2 position-relative'}>
        <div className="container">
            <div className='row align-items-center default-pb2 justify-content-between'>
                <div className='col-md-6'>
                    <div className='imgMagnify fullImg'>
                        <Image src={Benefit1} alt='Natural Sunlight'/>
                    </div>
                </div>
                <div className='col-md-5'>
                    <div className={text4.text4 + ' ' + text4.text4Label + ' ' + text4.posTop110px + ' ' + text4.text4_fszP16}>
                        <span><em>Benefit</em></span>
                        <h2 className='mb-5'>Natural Sunlight</h2>
                        <p>Expansive windows bathe our workspaces in energizing natural light, creating an invigorating and inspiring environment for productivity and well-being.</p>
                    </div>
                </div>
            </div>
            <div className='row align-items-center default-pb2 default-pt2 justify-content-between'>
                <div className='col-md-5'>
                    <div className={text4.text4 + ' ' + text4.text4Label + ' ' + text4.posTop110px  + ' ' + text4.text4_fszP16}>
                        <span><em>Benefit</em></span>
                        <h2 className='mb-5'>Strong Wifi</h2>
                        <p>Keep your coffee strong, and your wifi stronger. We live in a digital world - Office Square will keep your business powered and connected at all times.</p>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='imgMagnify fullImg'>
                        <Image src={Benefit2} alt='Strong Wifi'/>
                    </div>
                </div>
            </div>
            <div className='row align-items-center default-pt2 default-pb2 justify-content-between'>
                <div className='col-md-6'>
                    <div className='imgMagnify fullImg'>
                        <Image src={Benefit3} alt='Ergonomic Spaces'/>
                    </div>
                </div>
                <div className='col-md-5'>
                    <div className={text4.text4 + ' ' + text4.text4Label + ' ' + text4.posTop110px  + ' ' + text4.text4_fszP16}>
                        <span><em>Benefit</em></span>
                        <h2 className='mb-5'>Ergonomic Spaces</h2>
                        <p>From ergonomic furniture to noise reduction measures, we prioritize your comfort and concentration, helping you achieve peak performance and maximize your potential.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}