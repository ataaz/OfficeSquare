import styles from '../../styles/Home.module.css';
import { useLocomotiveScroll } from 'react-locomotive-scroll'

export default function HomeBanner() {
    const { scroll } = useLocomotiveScroll()
    return <section className={styles.homeBanner}>
    <div className='container' data-scroll data-scroll-speed="1" data-scroll-container>
      <div className={styles.vdoText}>
        <video controls muted autoPlay loop>
          <source src="https://demo.officesquare.com/home-video.mp4" type="video/mp4"></source>
          <source src="https://demo.officesquare.com/home-video.mp4" type="video/ogg"></source>
          Your browser does not support HTML video.
        </video>
        <div className={styles.vdoTextBox}>
          <h1>Flexible</h1>
        </div>
      </div>
      <h2>Offices, Meeting Rooms & <br></br>Virtual Solutions</h2>
    </div>
  </section>
};