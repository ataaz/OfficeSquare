import Image from 'next/image';
import text4 from '../../styles/About/Text4.module.css';
import Link from 'next/link';
import styles from '../../styles/About/Solutions.module.css';
import PrivateWorkspaces from "../../images/private-workspaces.jpg";
import CoworkingWorkSpaces from "../../images/co-working-workspaces.jpg";
import ConferenceRoom from "../../images/conference-rooms.jpg";
import { useLocomotiveScroll } from 'react-locomotive-scroll'

export default function SolutionsAbout() {
    const { scroll } = useLocomotiveScroll()
  return (
    <>
    <section className={styles.solutionsAbout + ' default-pb1 default-pt position-relative solutionsAboutSec'} data-scroll-section>
        <div className="container">
            <div className='row justify-content-between align-items-end mb-5 pb-md-5'>
                <div className='col-md-6 col-lg-5 mb-4 mb-md-0 pb-1 pb-md-0'>
                    <div className={text4.text4 + ' ' + text4.text4Label + ' ' + text4.text4_h2fw700}>
                        <span><em>Our Solutions</em></span>
                        <h2 className='mb-0'>What we offer</h2>
                    </div>
                </div>
                <div className='col-md-5'>
                    <div className="text1">
                        <h5>We are committed to providing a seamless and tailored experience that empowers your success.</h5>
                    </div>
                </div>
          </div>

          <div className='row'>
            <div className='col-md-4 col-sm-6 mb-5'>
                <div className={styles.col3}>
                    <div className='fullImg imgMagnify'>
                        <Image src={PrivateWorkspaces} alt=''/>
                    </div>
                    <div className={styles.col3Text}>
                        <div className='textBelow'>
                            <h3>Private Workspaces</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
                            <Link href="#">View More</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-md-4 col-sm-6 mb-5'>
                <div className={styles.col3}>
                    <div className='fullImg imgMagnify'>
                        <Image src={CoworkingWorkSpaces} alt=''/>
                    </div>
                    <div className={styles.col3Text}>
                        <div className='textBelow'>
                            <h3>Co-Working Workspaces</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
                            <Link href="#">View More</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-md-4 col-sm-6'>
                <div className={styles.col3}>
                    <div className='fullImg imgMagnify'>
                        <Image src={ConferenceRoom} alt=''/>
                    </div>
                    <div className={styles.col3Text}>
                        <div className='textBelow'>
                            <h3>Conference Room</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
                            <Link href="#">View More</Link>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
    </section>
    </>
  );
}