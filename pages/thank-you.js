import Image from 'next/image';
import text4 from '../styles/About/Text4.module.css';
import styles from '../styles/Service/SliderHeader.module.css';
import HeaderImg from '../images/contact-header.jpg';
import Layout from '../components/Layout/layout';
import Head from 'next/head';

export default function ThankYou(props) {
  return (
    <>
    <Layout>
      <Head>
        <title>Thank You | Office Square</title>
      </Head>
    <div className='default-pb topPadding'>
        <div className='container d-inline-block d-sm-none mb-2'>
            <div className={styles.SliderHeaderText + ' ' + text4.text4 + ' ' + text4.text4Label + ' ' + styles.SliderHeaderBox + ' ' + text4.text4_fszP16}>
                <span><em>We have recieved your inquiry</em></span>
            </div>
        </div>
        <section className={styles.ImageHeader + ' ' + ' '}>
            <div className={styles.ContainerAbsolute + ' ' + "container position-absolute"}>
                <div className='row align-items-center h-100'>
                    <div className='col-md-7 col-8'>
                        <div className={styles.SliderHeaderText + ' ' + text4.text4 + ' ' + text4.text4Label + ' ' + styles.SliderHeaderBox + ' ' + text4.text4_fszP16}>
                            <span className='d-sm-inline-block d-none'><em>We have recieved your inquiry</em></span>
                            <h1 className='mb-0'>Thank You</h1>
                            <p className='mt-1 mt-sm-3'>One of our represntatives will contact you soon</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className='row justify-content-end'>
                    <div className='col-md-8 col-8 col-sm-9'>
                        <div className={styles.SliderHeaderImagesParent2}>
                        <div className='fullImg'><Image priority src={HeaderImg}/></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    </Layout>
    </>
  );
}