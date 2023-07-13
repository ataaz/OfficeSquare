import Image from 'next/image'
import styles from '../../styles/About/Text4.module.css';
import intro1 from "../../images/intro-text-1.jpg";
import intro2 from "../../images/intro-text-2.jpg";
import { useLocomotiveScroll } from 'react-locomotive-scroll';

export default function CenterText(props) {
  const { scroll } = useLocomotiveScroll()
    return (
      <>
      <section className="centerText default-pt1 default-pb1 position-relative LargeScreenWidth">
        <Image priority src={props.img1?.url} alt={props.img2?.alt} className={styles.imgAbs4} data-scroll data-scroll-speed="4" width="259" height="266"/>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-9 col-lg-7">
                    <div className={styles.text4 + ' text-center'} dangerouslySetInnerHTML={{__html: props.content}}>
                    </div>
                </div>
            </div>
        </div>
        <Image priority src={props.img2?.url} alt={props.img2?.alt} className={styles.imgAbs5} data-scroll data-scroll-speed="4" width="215" height="207"/>
      </section>
      </>
    );
  }