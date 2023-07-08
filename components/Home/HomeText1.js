import Image from 'next/image'
import { useLocomotiveScroll } from 'react-locomotive-scroll'

export default function HomeText1(props) {
    const { scroll } = useLocomotiveScroll()
    return <section className='posRev text1Sec default-pb' id="Intro">
        <div className='d-block d-lg-block'>
            <div className='container'>
                <div className='row'>
                <div className='col-md-2 posRelv'>
                    <div className={'imgAbsHome d-none d-sm-block'} data-scroll data-scroll-speed="4">
                        <Image
                        priority
                        src={props.image1?.url}
                        alt={props.image1?.alt}
                        width="250"
                        height="250"
                        />
                    </div>
                </div>
                <div className='col-md-8'>
                    <div className='text1 text1_h2Mb'>
                        <h2 className='ms-3 ms-sm-0'>{props.text1}</h2>
                        <h3>{props.text2}</h3>
                    </div>
                    <div className={'imgAbsHome d-none d-sm-none'} data-scroll data-scroll-speed="4">
                        <Image
                        priority
                        src={props.image1?.url}
                        alt={props.image1?.alt}
                        width="250"
                        height="250"
                        />
                    </div>
                </div>
                </div>
            </div>
            <Image
            className='imgAbs1'
            priority
            src={props.image2?.url}
            alt="discover image 2"
            data-scroll data-scroll-speed="5"
            width="250"
            height="250"
            />
        </div>

        <div className='d-none d-lg-none'>
            <div className='row g-0 align-items-center'>
                <div className='col-4 col-sm-3'>
                    <div className={' imgMagnify'} data-scroll data-scroll-speed="4">
                        <Image
                        className='dImg1'
                        priority
                        src={props.image1?.url}
                        alt={props.image1?.url}
                        width="250"
                        height="250"
                        />
                    </div>
                </div>
                <div className='col-8 col-sm-7'>
                    <div className='text1 remove_h2Margin'>
                        <h2>{props.text1}</h2>
                    </div>
                </div>
            </div>

            <div className='row g-0 align-items-center justify-content-end mt-4'>
                <div className='col-7'>
                    <div className='text1 remove_h3Margin'>
                        <h3>{props.text1}</h3>
                    </div>
                </div>
                <div className='col-4 col-sm-3'>
                    <div className={' imgMagnify text-end'} data-scroll data-scroll-speed="5">
                        <Image
                        className='dImg2'
                        priority
                        src={props.image2?.url}
                        alt={props.image2?.alt}
                        width="250"
                        height="250"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
};