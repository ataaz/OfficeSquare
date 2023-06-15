import styles from '../../styles/Home.module.css';
import Image from 'next/image'
import Discover1 from "../../public/disocver-workspace-1.jpg";
import Discover2 from "../../public/disocver-workspace-2.jpg";

export default function HomeText1() {
    return <section className='default-pb posRev'>
        <div className='d-none d-lg-block'>
        <div className='container'>
            <div className='row'>
            <div className='col-md-2'>
                <div className={styles.imgFull + ' imgMagnify'}>
                <Image
                priority
                src={Discover1}
                alt="discover image 1"
                />
                </div>
            </div>
            <div className='col-md-8'>
                <div className='text1 text1_h2Mb'>
                <h2>Discover premium workspaces for your business to grow.</h2>
                <h3>For teams of 1-20, we have designed our space to motivate, inspire and boost creativity.</h3>
                </div>
            </div>
            </div>
        </div>
        <Image
        className='imgAbs1'
        priority
        src={Discover2}
        alt="discover image 2"
        />
        </div>

        <div className='d-block d-lg-none'>
            <div className='row g-0 align-items-center'>
            <div className='col-4 col-sm-3'>
                <div className={' imgMagnify'}>
                <Image
                className='dImg1'
                priority
                src={Discover1}
                alt="discover image 1"
                />
                </div>
            </div>
            <div className='col-8 col-sm-7'>
                <div className='text1 remove_h2Margin'>
                <h2>Discover premium workspaces for your business to grow.</h2>
                </div>
            </div>
            </div>

            <div className='row g-0 align-items-center justify-content-end mt-4'>
            <div className='col-7'>
                <div className='text1 remove_h3Margin'>
                <h3>For teams of 1-20, we have designed our space to motivate, inspire and boost creativity.</h3>
                </div>
            </div>
            <div className='col-4 col-sm-3'>
                <div className={' imgMagnify text-end'}>
                <Image
                className='dImg2'
                priority
                src={Discover2}
                alt="discover image 2"
                />
                </div>
            </div>
            </div>
        </div>
    </section>
};