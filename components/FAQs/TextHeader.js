import Image from 'next/image';
import text4 from '../../styles/About/Text4.module.css';
import styles from '../../styles/Service/SliderHeader.module.css';
import FAQs from '../../styles/FAQs/FAQs.module.css';
import HeaderImage from '../../images/question.jpg';

export default function TextHeader() {
  return (
    <>
    <section className={styles.ImageHeader + ' ' + styles.SliderHeader + ' ' + ' position-relative'}>
        <div className={"container"}>
            <div className='row align-items-center justify-content-center h-100'>
                <div className='col-sm-7 col-md-6 col-lg-5'>
                    <div className={styles.SliderHeaderText + ' ' + text4.text4 + ' ' + text4.text4Label + ' ' + styles.SliderHeaderBox + ' ' + text4.text4_fszP16}>
                        <span><em>Frequently Asked Questions</em></span>
                        <h1 className='mb-4'>The Help <br className='d-none d-sm-block'></br>Center</h1>
                    </div>
                </div>
                <div className='col-sm-5 col-md-6 col-lg-7 col-6'>
                    <div className={FAQs.quesImg}><Image priority src={HeaderImage} alt="FAQ Image"/></div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}