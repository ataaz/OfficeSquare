import styles from '../../styles/About/SubHeader.module.css';
import Image from 'next/image';
import CurveArrowDown from "../../images/curve-arrow-down.svg";
import { useLocomotiveScroll } from 'react-locomotive-scroll'

export default function AboutHeader() {
    const { scroll } = useLocomotiveScroll()
  return (
    <>
    <section className={styles.Header2}>
        <div className="container">
            <div className="row">
                <div className="col-sm-3 col-xl-1 col-lg-2 col-4 mt-3 position-relative">
                    <p>We aim to meet the diverse needs of modern businesses</p>
                    <Image src={CurveArrowDown} alt="" className='CurveArrowDown'/>
                </div>
                <div className="col-8 col-lg-5 col-md-6 col-sm-8 offset-md-1">
                    <h1 data-scroll data-scroll-direction="horizontal" data-scroll-speed="-6">Redefining Workspace Solutions</h1>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}