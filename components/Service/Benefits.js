import Image from 'next/image';
import styles from '../../styles/Service/Text2Cols.module.css';
import text4 from '../../styles/About/Text4.module.css';
import Link from 'next/link';

export default function Benefits(props) {
    const BenefitsList= props.benefits?.map((el,i)=> <div className={i == '0' ? 'row align-items-center default-pb2 justify-content-between mobilePad1' : '' + i == '1' ? 'row align-items-center default-pb2 default-pt2 justify-content-between mobilePad2' : '' + i == '2' ? 'row align-items-center default-pt2 justify-content-between mobilePad3' : ''} key={i}>
        <div className='col-md-6'>
            <div className='imgMagnify fullImg'>
                <Image src={el.image.url} alt={el.image.alt} width={1} height={1} data-scroll-speed="-1.5" data-scroll/>
            </div>
        </div>
        <div className='col-md-5'>
            <div className={text4.text4 + ' ' + text4.text4Label + ' '  + text4.text4_fszP16 + ' ' + text4.text4HideLabel}>
                <span><em>{el.content_label}</em></span>
                <h2 className='mt-3 mt-md-0 mb-2 mb-xl-4 text4MobileBenefits'>{el.heading}</h2>
                <p>{el.content}</p>
                {el.link ? 
                <Link href={el.url}>{el.title}</Link>
                : null}
            </div>
        </div>
    </div>
    );
  return (
    <>
    <section className={styles.Text2Cols + ' default-pt2 default-pb1 position-relative'}>
        <div className="container EvenOrderRow">
            {BenefitsList}
        </div>
    </section>
    </>
  );
}