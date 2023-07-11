import Link from 'next/link';
import Image from 'next/image'
import serviceImg1 from "../../images/co-working.jpg";
import serviceImg2 from "../../images/offices.jpg";
import serviceImg3 from "../../images/virtual-address.jpg";
import serviceImg4 from "../../images/licensing.jpg";
import circleIcon from "../../images/circle-more.svg";
import { useLocomotiveScroll } from 'react-locomotive-scroll';

export default function HomeSolutions(props) {

  const { scroll } = useLocomotiveScroll()
    return <section className='HomeSol default-pt default-pb'>
    <div className='container'>
      <div className='row justify-content-between align-items-center mb-5'>
        {/* <div className='col-md-4 col-lg-4 col-xl-3 col-7'> */}
        <div className='col-md-12'>
          <div className='text2 text2_h2mb'>
            <h2>{props.heading}</h2>
          </div>
        </div>
        <div className='col-md-4 col-lg-3 col-5 text-end'>
          {/* <Link href='#' className='btn1'>All Solutions</Link> */}
        </div>
      </div>

      <div className='row g-0 rowMbMobile'>
      <div className='col-sm-6 col-md-6 col-lg-3 mb-4 pb-2 mb-md-0 pb-md-0'>
          <div className='serBox'>
            <div className='serBoxImg'>
              <Image
              priority
              src={serviceImg1}
              alt="Co-working"
              />
            </div>
            <Link href="/co-working-spaces" className='serBoxText'>
              <span>Work in open landscape</span>
              <div className='d-flex flex-wrap justify-content-between align-items-center'>
                <h3>Co-working</h3>
                <Image priority src={circleIcon} alt="Circle Icon"/>
              </div>
            </Link>
          </div>
        </div>

        <div className='col-sm-6 col-md-6 col-lg-3 mb-4 pb-2 mb-md-0 pb-md-0'>
          <div className='serBox'>
            <div className='serBoxImg'>
              <Image
              priority
              src={serviceImg2}
              alt="Offices"
              />
            </div>
            <Link href="/virtual-offices" className='serBoxText'>
              <span>Teams of 1-20</span>
              <div className='d-flex flex-wrap justify-content-between align-items-center'>
                <h3>Offices</h3>
                <Image priority src={circleIcon} alt="Circle Icon"/>
              </div>
            </Link>
          </div>
        </div>

        <div className='col-sm-6 col-md-6 col-lg-3 mb-4 pb-2 mb-md-0 pb-md-0'>
          <div className='serBox'>
            <div className='serBoxImg'>
              <Image
              priority
              src={serviceImg3}
              alt="Conferences"
              />
            </div>
            <Link href="/conference-rooms" className='serBoxText'>
              <span>Meeting rooms</span>
              <div className='d-flex flex-wrap justify-content-between align-items-center'>
                <h3>Conferences</h3>
                <Image priority src={circleIcon} alt="Circle Icon"/>
              </div>
            </Link>
          </div>
        </div>

        <div className='col-sm-6 col-md-6 col-lg-3'>
          <div className='serBox'>
            <div className='serBoxImg'>
              <Image
              priority
              src={serviceImg4}
              alt="Licensing"
              />
            </div>
            <Link href="/pro-management" className='serBoxText'>
              <span>Start your business</span>
              <div className='d-flex flex-wrap justify-content-between align-items-center'>
                <h3>Licensing</h3>
                <Image priority src={circleIcon} alt="Circle Icon"/>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
};