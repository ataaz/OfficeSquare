import styles from '../../styles/Service/Features2.module.css';
import text4 from '../../styles/About/Text4.module.css';
import Link from 'next/link';

export default function Features2(props) {
    const features2List= props.features2?.map((el,i)=> <div className={styles.procCol + ' position-relative' + ' col-md-3 Step0' + i} key={i}>
        <div className={styles.stepBox}>
            <div className={styles.stepBoxChild}>
                <label>{el.label}</label>
                <span>{el.content}</span>
            </div>
        </div>
    </div>
    );
  return (
    <>
    <section className={styles.features2 + ' default-pb default-pt2 position-relative'} style={{background:`url(${props.bg}) no-repeat`,backgroundSize:`cover`}}>
        <div className="container">
            <div className='row justify-content-center'>
                <div className='col-md-8 col-lg-6 col-xl-5'>
                    <div className={text4.text4 + ' ' + text4.text4Label + ' ' + text4.text4_fszP16  + ' ' + text4.Hidetext4Label + ' ' +text4.bgTransparentLabel + ' text-center'}>
                        <span className='ps-0'><em className='ps-0'>{props.label}</em></span>
                        <h2 className='mb-5 mb-md-0'>{props.heading}</h2>
                    </div>
                </div>
            </div>
            <div className={styles.proc}>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className={styles.procRow + ' row'}>
                            {features2List}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}