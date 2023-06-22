import Image from 'next/image'
import styles from '../../styles/About/Text4.module.css';
import intro1 from "../../images/intro-text-1.jpg";
import intro2 from "../../images/intro-text-2.jpg";

export default function CenterText() {
    return (
      <>
      <section className="centerText default-pt1 default-pb1 position-relative" data-scroll-section>
        <Image priority src={intro1} alt="" className={styles.imgAbs4}/>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-9 col-lg-7">
                    <div className={styles.text4 + ' text-center'}>
                        <h2>Spaces that empower your <br></br>business to thrive</h2>
                        <p>We provide premium serviced office solutions designed to meet the diverse needs of modern businesses. Our goal is to offer you a fully functional workspace that fosters productivity, professionalism, and flexibility. Immerse yourself in our world of exclusive and premium business centers, accompanied by a comprehensive array of services.</p>
                    </div>
                </div>
            </div>
        </div>
        <Image priority src={intro2} alt="" className={styles.imgAbs5}/>
      </section>
      </>
    );
  }