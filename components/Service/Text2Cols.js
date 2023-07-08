import styles from '../../styles/Service/Text2Cols.module.css';
import text4 from '../../styles/About/Text4.module.css';
import Link from 'next/link';

export default function Text2Cols(props) {
    const ColList= props.cols?.map((el,i)=> <div className={i == '0' ? 'mt80px col-6' : 'col-6'} key={i}>
        <div className={styles.col2Text}>
            <div className='col2TextChild'>
                <div dangerouslySetInnerHTML={{ __html: el.icon }}></div>
                <div dangerouslySetInnerHTML={{ __html: el.content }}></div>
            </div>
        </div>
    </div>
    );
  return (
    <>
    <section className={styles.Text2Cols + ' default-pb1 default-pt1 position-relative'}>
        <div className="container">
            <div className='row justify-content-between'>
                <div className='col-md-5'>
                    <div className={text4.text4 + ' ' + text4.text4Label + ' ' + text4.text4_h2fw700}>
                        <span><em>{props.label}</em></span>
                        <h2 className='mb-2 mb-sm-4 mb-md-5' dangerouslySetInnerHTML={{__html: props.title}}></h2>
                        <p>{props.content}</p>
                        <Link href={props.link?.url} className='underlineBtn mt-3 d-none d-md-inline-block'>{props.link?.title}</Link>
                    </div>
                </div>
                <div className='col-md-7 col-lg-6 mt-4 mt-md-0'>
                    <div className='row'>
                        {ColList}
                    </div>
                </div>
            </div>
            <Link href={props.link?.url} className='underlineBtn mt-4 pt-3 d-inline-block d-md-none'>{props.link?.title}</Link>
        </div>
    </section>
    </>
  );
}