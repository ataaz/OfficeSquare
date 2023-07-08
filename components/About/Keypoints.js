import styles from '../../styles/About/Keypoints.module.css';

export default function KeypointsAbout(props) {
    const keypointsList= props.keypoints?.map((el,i)=> <div className="col-sm-6 col-md-3 col-6" key={i}>
        <div className={styles.kpBox}>
            <div className="kpBoxInner">
                <span>{el.number}</span>
                <strong>{el.heading}</strong>
                <p dangerouslySetInnerHTML={{__html: el.content}}></p>
            </div>
        </div>
    </div>
    )
  return (
    <>
    <section className={'default-pb1 pt-5 keySec'}>
        <div className={styles.kpRow + " container kpRow2"}>
            <div className={" row"}>
                {keypointsList}
            </div>
        </div>
    </section>
    </>
  );
}