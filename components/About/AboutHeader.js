import styles from '../../styles/About/SubHeader.module.css';
import Image from 'next/image';
import CurveArrowDown from "../../images/curve-arrow-down.svg";

export default function AboutHeader(props) {
  return (
    <>
    <section className={styles.Header2}>
        <div className="container">
            <div className="row">
                <div className="col-sm-3 col-xl-1 col-lg-2 col-4 mt-3 position-relative">
                    <p data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">{props.content}</p>
                    <Image src={CurveArrowDown} alt="" className='CurveArrowDown'/>
                </div>
                <div className="col-8 col-lg-5 col-md-6 col-sm-8 offset-md-1">
                    <h1 data-aos="fade-up" data-aos-delay="700" data-aos-duration="800">{props.heading}</h1>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}