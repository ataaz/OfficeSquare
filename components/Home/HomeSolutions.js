import Link from 'next/link';
import Image from 'next/image'
import serviceImg1 from "../../public/co-working.jpg";
import serviceImg2 from "../../public/offices.jpg";
import serviceImg3 from "../../public/virtual-address.jpg";
import serviceImg4 from "../../public/licensing.jpg";
import circleIcon from "../../public/circle-more.svg";

export default function HomeSolutions() {
    return <section className='HomeSol default-pt default-pb'>
    <div className='container'>
      <div className='row justify-content-between align-items-center mb-5'>
        <div className='col-md-4 col-lg-4 col-xl-3 col-7'>
          <div className='text2 text2_h2mb'>
            <h2>Our Solution</h2>
          </div>
        </div>
        <div className='col-md-4 col-lg-3 col-5 text-end'>
          <Link href='' className='btn1'>All Solutions</Link>
        </div>
      </div>

      <div className='row g-0 rowMbMobile'>
      <div className='col-sm-6 col-md-6 col-lg-3'>
          <div className='serBox'>
            <div className='serBoxImg'>
              <Image
              priority
              src={serviceImg1}
              alt="Co-working"
              />
            </div>
            <Link href="#" className='serBoxText'>
              <span>Seat in open landscape</span>
              <div className='d-flex flex-wrap justify-content-between align-items-center'>
                <h3>Co-working</h3>
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
              src={serviceImg2}
              alt="Offices"
              />
            </div>
            <Link href="#" className='serBoxText'>
              <span>Teams of 1-20</span>
              <div className='d-flex flex-wrap justify-content-between align-items-center'>
                <h3>Offices</h3>
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
              src={serviceImg3}
              alt="Virtual Address"
              />
            </div>
            <Link href="#" className='serBoxText'>
              <span>Prestigious Location</span>
              <div className='d-flex flex-wrap justify-content-between align-items-center'>
                <h3>Virtual Address</h3>
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
            <Link href="#" className='serBoxText'>
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