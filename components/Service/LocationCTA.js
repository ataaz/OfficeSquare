import Image from 'next/image';
import styles from '../../styles/Service/Amenities.module.css';
import text4 from '../../styles/About/Text4.module.css';
import Link from 'next/link';

export default function LocationCTA(props) {
  return (
    <>
    <section className={styles.Text2Cols + ' default-pt default-pb position-relative'}>
        <div className="container">
            <div className='d-block d-md-none mb-4 pb-2'>
                <div className={text4.text4 + ' ' + text4.text4Label + ' ' + text4.text4_fszP16}>
                    <span><em>{props.label}</em></span>
                    <h2 className='mb-4' dangerouslySetInnerHTML={{__html: props.content}}></h2>
                </div>
            </div>
            <div className='row align-items-center justify-content-between'>
                <div className='col-md-6'>
                    <div className='fullImg'>
                        <Image src={props.image.url} alt={props.image.alt} width={636} height={636}/>
                    </div>
                </div>
                <div className='col-md-5 mt-4 mt-md-0'>
                    <div className={text4.text4 + ' ' + text4.text4Label + ' ' + text4.text4_fszP16}>
                        <span className='d-none d-md-inline-block'><em>{props.label}</em></span>
                        <h2 className='mb-4 d-none d-md-block' dangerouslySetInnerHTML={{__html: props.heading}}></h2>
                        <div dangerouslySetInnerHTML={{__html: props.content}}></div>
                        <Link href={props.link.url} className='underlineBtn d-inline-block'>{props.link.title}</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}