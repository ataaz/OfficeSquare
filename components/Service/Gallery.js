import Image from 'next/image';
import text4 from '../../styles/About/Text4.module.css';
import styles from '../../styles/Service/Gallery.module.css';
import Link from 'next/link';
import React from "react";
import Slider from "react-slick";
import SliderImage1 from '../../images/gallery-1.jpg';
import SliderImage2 from '../../images/gallery-2.jpg';

export default function Gallery() {
    var sliderGallery = {
        centerMode:true,
        centerPadding:'340px',
        infinite: true,
        arrows: true,
        dots:false,
        speed: 500,
        autoplaySpeed: 40000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        touchMove: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        appendArrows:'.sliderGalleryArrows',
        responsive: [
            {
            breakpoint: 1200,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding:'40px',
            }
            },
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding:'40px',
            }
            },
            {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
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
    <>
    <section className={styles.gallerySec + ' default-pb1 position-relative overflow-hidden'}>
        <div className="container">
            <div className='row justify-content-between align-items-end mb-5 pb-5'>
                <div className='col-md-6 col-lg-6 mb-4 mb-md-0 pb-1 pb-md-0'>
                    <div className={text4.text4 + ' ' + text4.text4Label + ' ' + text4.text4_h2fw700}>
                    <span><em>Gallery</em></span>
                    <h2 className='mb-4'>Unleashing Productivity</h2>
                    <p className='mb-0'>Experience the freedom of tailoring your ideal workspace with our serviced offices, where customization meets convenience.</p>
                    </div>
                </div>
                <div className='col-md-3 text-end'>
                    <Link className="btn1" href="/">Book Now</Link>
                </div>
            </div>
        </div>

        <div className='galleryContainer'>
            <div className='sliderGallery customArrows'>
                <Slider {...sliderGallery}>
                    <Image priority src={SliderImage1} alt="Slider Image 1"/>
                    <Image priority src={SliderImage2} alt="Slider Image 2"/>
                    <Image priority src={SliderImage1} alt="Slider Image 1"/>
                    <Image priority src={SliderImage2} alt="Slider Image 2"/>
                </Slider>
            </div>
            <div className='sliderGalleryArrows'></div>
        </div>
    </section>
    </>
  );
}