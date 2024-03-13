import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/About/Text4.module.css';
import img1 from '../../images/premium-workspaces.webp';
import img2 from '../../images/prem-2.jpg';
import pvSvg from '../../images/private-text.svg';

export default function HomeText1(props) {
    return <section className='posRev text1Sec default-pb default-pt LargeScreenWidth  overflow-hidden' id="Intro">
        <div className='d-block d-lg-block'>
            <div className='container'>
                <Image src={pvSvg} alt="Private Workspaces svg" className='pvSvg' data-600="top:-100px" data-2200="top:-1200px"/>
                <div className='row align-items-center justify-content-between'>
                    <div className='col-md-6 col-xl-5 mt-5 mt-md-0 order-2 order-md-1'>
                        <div className={'twoImgs'}>
                            <Image
                            className='relImg'
                            priority
                            src={img1}
                            alt="Private Workspace Image 1"
                            width="543"
                            height="684"
                            style={{width:`100%`,height:`100%`}}
                            />
                            <div className='posImg' data-800="bottom:-100px" data-1800="bottom:200px" data-scroll data-scroll-speed="4">
                                <Image
                                priority
                                src={img2}
                                alt="Private Workspace Image 2"
                                width="273"
                                height="293"
                                />
                            </div>
                        </div>
                    </div>
                    <div className='col-md-5 order-1 order-md-2'>
                        <div className='text1 text1_h2Mb'>
                            <h2 className='ms-3 ms-sm-0'>{props.text1}</h2>
                            <div dangerouslySetInnerHTML={{__html: props.text2}} className={styles.text4}></div>
                            <Link className='underlineBtn mt-3 mt-md-4 mt-xl-5' href={props.link.url}>{props.link.title}</Link>
                        </div>
                        {/* <div className={'imgAbsHome d-none d-sm-none'} data-scroll data-scroll-speed="4">
                            <Image
                            priority
                            src={props.image1?.url}
                            alt={props.image1?.alt}
                            width="250"
                            height="250"
                            />
                        </div> */}
                    </div>
                </div>
            </div>
            {/* <Image
            className='imgAbs1'
            priority
            src={props.image2?.url}
            alt="discover image 2"
            data-scroll data-scroll-speed="5"
            width="250"
            height="250"
            /> */}

        </div>
    </section>
};