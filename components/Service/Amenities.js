import styles from '../../styles/Service/Amenities.module.css';
import text4 from '../../styles/About/Text4.module.css';

export default function Amenities(props) {
    const AmenitiesList= props.amenities?.map((el,i)=> <div className='col-md-4 col-6' key={i}>
        <div className={styles.whiteBox}>
            <div className='col2TextChild'>
                <div dangerouslySetInnerHTML={{__html: el.icon}}></div>
                <div dangerouslySetInnerHTML={{__html: el.content}}></div>
            </div>
        </div>
    </div>
    );
  return (
    <>
    <section className={styles.Text2Cols + ' default-pt1 default-pb1 position-relative bgf6f6f6'}>
        <div className="container mb-4 pb-2 mb-xl-5 pb-xl-5">
            <div className='row'>
                <div className='col-sm-10 col-lg-7 col-xl-6'>
                    <div className={text4.text4 + ' ' + text4.text4Label + ' ' + text4.bgf6f6f6Label}>
                        <span><em>{props.label}</em></span>
                        <h2 className='mb-0'>{props.heading}</h2>
                    </div>
                </div>
            </div>
        </div>

        <div className='container'>
            <div className='AmenitiesRow row'>
                {AmenitiesList}
            </div>
        </div>
    </section>
    </>
  );
}