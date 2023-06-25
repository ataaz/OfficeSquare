import styles from '../../styles/Home.module.css';
import Image from 'next/image'
import premierchoice1 from "../../images/premier-choice-1.jpg";
import premierchoice2 from "../../images/premier-choice-2.jpg";
import Link from 'next/link';

export default function HomeText2() {
    return <section className='textCenterSec position-relative' data-scroll-container>
        <Image
        className='imgAbs2'
        priority
        src={premierchoice1}
        alt="premier image 1"
        data-scroll data-scroll-speed="-3"
        />
        <div className='container'>
        <div className='row justify-content-center'>
            <div className='col-md-9 col-lg-7 col-9'>
            <div className={styles.lighterText}>
                <h2>We are the premier choice for individuals and businesses seeking <Link href="/private-workspaces">serviced office</Link> solutions. Within our prestigious locations, we also offer both exclusive and shared <Link href="/private-workspaces">co-working</Link> spaces, designed with you in mind. We create an environment where <strong>productivity</strong> thrives and <strong>success</strong> becomes inevitable.</h2>
            </div>
            </div>
        </div>
        </div>
        <Image
        className='imgAbs3'
        priority
        src={premierchoice2}
        alt="premier image 2"
        data-scroll data-scroll-speed="3"
        />
    </section>
};