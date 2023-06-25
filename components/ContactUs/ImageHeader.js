import Image from 'next/image';
import text4 from '../../styles/About/Text4.module.css';
import styles from '../../styles/Service/SliderHeader.module.css';
import HeaderImage from '../../images/contact-header.jpg';

export default function ImageHeader() {
  return (
    <>
    <div>
        <div className='container d-inline-block d-sm-none mb-2'>
            <div className={styles.SliderHeaderText + ' ' + text4.text4 + ' ' + text4.text4Label + ' ' + styles.SliderHeaderBox + ' ' + text4.text4_fszP16}>
                <span><em>Contact Us</em></span>
            </div>
        </div>
        <section className={styles.ImageHeader + ' ' + ' '}>
            <div className={styles.ContainerAbsolute + ' ' + "container position-absolute"}>
                <div className='row align-items-center h-100'>
                    <div className='col-md-7 col-8'>
                        <div className={styles.SliderHeaderText + ' ' + text4.text4 + ' ' + text4.text4Label + ' ' + styles.SliderHeaderBox + ' ' + text4.text4_fszP16}>
                            <span className='d-sm-inline-block d-none'><em>Contact Us</em></span>
                            <h1 className='mb-0'>Get In touch <br className='d-none d-sm-block'></br>With Us</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className='row justify-content-end'>
                    <div className='col-md-8 col-8 col-sm-9'>
                        <div className={styles.SliderHeaderImagesParent2}>
                        <div className='fullImg'><Image priority src={HeaderImage} alt="Slider Image 1"/></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    </>
  );
}