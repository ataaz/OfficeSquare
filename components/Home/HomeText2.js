import styles from '../../styles/Home.module.css';
import Image from 'next/image'
import premierchoice1 from "../../images/premier-choice-1.jpg";
import premierchoice2 from "../../images/premier-choice-2.jpg";
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import { useParallax } from 'react-scroll-parallax';

export default function HomeText2() {
    const { scroll } = useLocomotiveScroll()
    const { ref } = useParallax({ speed: 10 });
    return <section className='textCenterSec position-relative'>
        <Image
        className='imgAbs2'
        priority
        src={premierchoice1}
        alt="premier image 1"
        ref={ref}
        />
        <div className='container'>
        <div className='row justify-content-center'>
            <div className='col-md-9 col-lg-7 col-9'>
            <div className={styles.lighterText}>
                <h2>We are the premier choice for individuals and businesses seeking <strong>serviced office</strong> solutions. Within our prestigious locations, we also offer both exclusive and shared <strong>co-working</strong> spaces, designed with you in mind. We create an environment where <strong>productivity</strong> thrives and <strong>success</strong> becomes inevitable.</h2>
            </div>
            </div>
        </div>
        </div>
        <Image
        className='imgAbs3'
        priority
        src={premierchoice2}
        alt="premier image 2"
        />
    </section>
};