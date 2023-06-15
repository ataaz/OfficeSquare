import styles from '../../styles/Home.module.css';

export default function HomeBanner() {
    return <section className={styles.homeBanner}>
    <div className='container'>
      <div className={styles.vdoText}>
        <video controls muted autoPlay loop>
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"></source>
          <source src="https://www.w3schools.com/html/mov_bbb.ogg" type="video/ogg"></source>
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