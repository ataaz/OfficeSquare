import styles from '../../styles/About/Keypoints.module.css';

export default function KeypointsAbout() {
  return (
    <>
    <section className={'default-pb1 pt-5 keySec'}>
        <div className={styles.kpRow + " container kpRow2"}>
            <div className={" row"}>
                <div className="col-sm-6 col-md-3 col-6">
                    <div className={styles.kpBox}>
                        <div className="kpBoxInner">
                            <span>9+</span>
                            <strong>Years of Operations</strong>
                            <p>We have had a successful <br className='d-none d-sm-block'></br>journey in this industry</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3 col-6">
                    <div className={styles.kpBox}>
                        <div className="kpBoxInner">
                            <span>2+</span>
                            <strong>Prime Locations</strong>
                            <p>Our offices are nestled in <br className='d-none d-sm-block'></br>the heart of major cities</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3 col-6">
                    <div className={styles.kpBox}>
                        <div className="kpBoxInner">
                            <span>3+</span>
                            <strong>Main Cities</strong>
                            <p>We cater to teams in select <br className='d-none d-sm-block'></br>prestigous locations</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3 col-6">
                    <div className={styles.kpBox}>
                        <div className="kpBoxInner">
                            <span>1788+</span>
                            <strong>Seating Capacity</strong>
                            <p>We are home to numerous <br className='d-none d-sm-block'></br>businesses from all industries</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}