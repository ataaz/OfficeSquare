import styles from '../../styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function HomeText2(props) {
    const TextLoop= props.content?.map((el,i)=> <span key={i}>{el.acf_fc_layout == 'text' ? ' ' + el.text_a : null }{el.acf_fc_layout == 'link' ? <Link href={el.link_a.url}>{el.link_a.title}</Link> : null}</span>
    );
    return <section className='textCenterSec position-relative LargeScreenWidth'>
        {/* only desktop visible */}
        <Image
        className='imgAbs2 d-sm-block d-none'
        priority
        src={props.image1?.url}
        alt={props.image1?.alt}
        width={250}
        height={250}
        data-scroll data-scroll-speed="-3"
        />
        {/* only mobile visible */}
        <Image
        className='imgAbs2 d-none d-sm-none'
        priority
        src={props.image1?.url}
        alt={props.image1?.alt}
        width={250}
        height={250}
        data-scroll data-scroll-speed="-10"
        />
        <div className='container'>
        <div className='row justify-content-center'>
            <div className='col-md-11 col-lg-9 col-xl-8 col-12'>
            <div className={styles.lighterText}>
                <h2>{TextLoop}</h2>
            </div>
            </div>
        </div>
        </div>
        <Image
        className='imgAbs3 d-none d-sm-block'
        priority
        src={props.image2?.url}
        alt={props.image2?.url}
        width={250}
        height={250}
        data-scroll data-scroll-speed="3"
        />
    </section>
};