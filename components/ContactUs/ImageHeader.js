import Image from 'next/image';
import text4 from '../../styles/About/Text4.module.css';
import styles from '../../styles/Service/SliderHeader.module.css';

export default function ImageHeader(props) {
  return (
    <>
    <div>
        <div className='container d-inline-block d-sm-none mb-2'>
            <div className={styles.SliderHeaderText + ' ' + text4.text4 + ' ' + text4.text4Label + ' ' + styles.SliderHeaderBox + ' ' + text4.text4_fszP16}>
                <span data-aos="fade-up" data-aos-delay="200" data-aos-duration="800"><em>
                    </em></span>
            </div>
        </div>
        <section className={styles.ImageHeader + ' ' + ' '}>
            <div className={styles.ContainerAbsolute + ' ' + "container position-absolute"}>
                <div className='row align-items-center h-100'>
                    <div className='col-md-7 col-8'>
                        <div className={styles.SliderHeaderText + ' ' + text4.text4 + ' ' + text4.text4Label + ' ' + styles.SliderHeaderBox + ' ' + text4.text4_fszP16}>
                            <span className='d-sm-inline-block d-none' data-aos="fade-up" data-aos-delay="200" data-aos-duration="800"><em>{props.label}</em></span>
                            <h1 className='mb-0' dangerouslySetInnerHTML={{ __html: props.heading }} data-aos="fade-up" data-aos-delay="700" data-aos-duration="800"></h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className='row justify-content-end'>
                    <div className='col-md-8 col-8 col-sm-9'>
                        <div className={styles.SliderHeaderImagesParent2} data-aos="fade-up" data-aos-delay="1000" data-aos-duration="800">
                            <div className='fullImg'><Image priority src={props.img?.url} alt={props.img?.alt} width={856} height={481}/></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    </>
  );
}