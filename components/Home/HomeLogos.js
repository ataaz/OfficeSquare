import logo1 from "../../public/logo1.svg";
import logo2 from "../../public/logo2.svg";
import logo3 from "../../public/logo3.svg";
import logo4 from "../../public/logo4.svg";
import logo5 from "../../public/logo5.svg";
import logo6 from "../../public/logo6.svg";
import logo7 from "../../public/logo7.svg";
import React from "react";
import Slider from "react-slick";
import Image from 'next/image'

export default function HomeLogos() {
    var homeLogoz = {
      centerMode:true,
      centerPadding:'140px',
      infinite: true,
      arrows: false,
      dots:false,
      speed: 500,
      autoplaySpeed: 4000,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      touchMove: false,
      pauseOnFocus: false,
      pauseOnHover: false,
      pauseOnDotsHover: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            centerPadding:'40px',
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            centerPadding:'40px',
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerPadding:'60px',
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    };
    return (
        <section className='comLogos default-pt'>
        <div className='container'>
          <div className='row justify-content-between align-items-end mb-5'>
            <div className='col-md-6 col-lg-5 mb-4 mb-md-0 pb-1 pb-md-0'>
              <div className='text2'>
                <h1 className='mb-0'>Companies Who <br className="d-none d-xl-block"></br>Have Chosen Us</h1>
              </div>
            </div>
            <div className='col-md-5'>
              <div className="text1">
                <h5>We are leaders of the future of flexible work. From freelancers to multinational companies, financial institutions, and government offices.</h5>
              </div>
            </div>
          </div>
        </div>

        <div className='HomeLogozSec overflow-hidden'>
          <div className='HomeLogoz' data-scroll data-scroll-direction="horizontal" data-scroll-speed="-6">
            <Slider {...homeLogoz}>
              <Image priority src={logo1} alt="Logo 1"/>
              <Image priority src={logo2} alt="Logo 2"/>
              <Image priority src={logo3} alt="Logo 3"/>
              <Image priority src={logo4} alt="Logo 4"/>
              <Image priority src={logo5} alt="Logo 5"/>
              <Image priority src={logo6} alt="Logo 6"/>
              <Image priority src={logo7} alt="Logo 7"/>
              <Image priority src={logo1} alt="Logo 1"/>
            </Slider>
          </div>
        </div>
      </section>
    );
}