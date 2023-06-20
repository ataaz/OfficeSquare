import Image from 'next/image';
import text4 from '../../styles/About/Text4.module.css';
import styles from '../../styles/Service/SliderHeader.module.css';
import Link from 'next/link';
import SliderImage1 from '../../images/gallery-1.jpg';

export default function SliderHeader() {
  return (
    <>
    <section className={styles.FAQSec + ' default-pb1 position-relative'}>
        <div className="container">
            Slider Header
        </div>
    </section>
    </>
  );
}