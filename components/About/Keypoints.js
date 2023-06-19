import styles from '../../styles/About/Keypoints.module.css';

export default function KeypointsAbout() {
  return (
    <>
    <section className={'default-pb1 pt-5'}>
        <div className={styles.kpRow + " container"}>
            <div className={" row"}>
                <div className="col-sm-3 col-md-3">
                    <div className={styles.kpBox}>
                        <span>9+</span>
                        <strong>Years of Operations</strong>
                        <p>We have had a successful <br className='d-none d-sm-block'></br>journey in this industry</p>
                    </div>
                </div>
                <div className="col-sm-3 col-md-3">
                    <div className={styles.kpBox}>
                        <span>2+</span>
                        <strong>Prime Locations</strong>
                        <p>Our offices are nestled in <br className='d-none d-sm-block'></br>the heart of major cities</p>
                    </div>
                </div>
                <div className="col-sm-3 col-md-3">
                    <div className={styles.kpBox}>
                        <span>3+</span>
                        <strong>Main Cities</strong>
                        <p>We cater to teams in select <br className='d-none d-sm-block'></br>prestigous locations</p>
                    </div>
                </div>
                <div className="col-sm-3 col-md-3">
                    <div className={styles.kpBox}>
                        <span>1788+</span>
                        <strong>Seating Capacity</strong>
                        <p>We are home to numerous <br className='d-none d-sm-block'></br>businesses from all industries</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}