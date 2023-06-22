import Image from 'next/image';
import text4 from '../../styles/About/Text4.module.css';
import styles from '../../styles/Service/SliderHeader.module.css';
import Link from 'next/link';
import SliderImage1 from '../../images/gallery-1.jpg';
import React, { Component } from "react";
import Slider from "react-slick";

// export default function SliderHeader() {
//     var SliderHeaderImages = {
//         infinite: true,
//         arrows: true,
//         dots:false,
//         speed: 500,
//         autoplaySpeed: 1000,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         touchMove: false,
//         pauseOnFocus: false,
//         pauseOnHover: false,
//         pauseOnDotsHover: false,
//         asNavFor:'.SliderHeaderImagesArrows',
//     };
//   return (
//     <>
//     <section className={styles.SliderHeader + ' position-relative'}>
//         <div className={styles.ContainerAbsolute + ' ' + "container position-absolute"}>
//             <div className='row align-items-center h-100'>
//                 <div className='col-md-5'>
//                     <div className={styles.SliderHeaderText + ' ' + text4.text4 + ' ' + text4.text4Label + ' ' + styles.SliderHeaderBox + ' ' + text4.text4_fszP16}>
//                         <span><em>Private Workspaces</em></span>
//                         <h2 className='mb-4'>Private Serviced Offices</h2>
//                         <p>Providing a space separate and out of ear shot from other companies</p>
//                         <Link href="#" className='btn2'>Book A Tour</Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div className="container">
//             <div className='row justify-content-end'>
//                 <div className='col-md-8'>
//                     <div className={styles.SliderHeaderImagesParent}>
//                         <Slider {...SliderHeaderImages}>
//                             <div className='fullImg'><Image priority src={SliderImage1} alt="Slider Image 1"/></div>
//                             <div className='fullImg'><Image priority src={SliderImage1} alt="Slider Image 1"/></div>
//                             <div className='fullImg'><Image priority src={SliderImage1} alt="Slider Image 1"/></div>
//                         </Slider>
//                     </div>
//                     <div className='SliderHeaderImagesArrowz'>
//                         <Slider {...SliderHeaderImagesArrows}>
//                             <div></div>
//                             <div></div>
//                             <div></div>
//                         </Slider>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </section>
//     </>
//   );
// }
export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    return (
      <div>
            <section className={styles.SliderHeader + ' position-relative'}>
                <div className={styles.ContainerAbsolute + ' ' + "container position-absolute"}>
                    <div className='row align-items-center h-100'>
                        <div className='col-md-5'>
                            <div className={styles.SliderHeaderText + ' ' + text4.text4 + ' ' + text4.text4Label + ' ' + styles.SliderHeaderBox + ' ' + text4.text4_fszP16}>
                                <span><em>Private Workspaces</em></span>
                                <h2 className='mb-4'>Private Serviced Offices</h2>
                                <p>Providing a space separate and out of ear shot from other companies</p>
                                <Link href="#" className='btn2'>Book A Tour</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className='row justify-content-end'>
                        <div className='col-md-8 position-relative'>
                            <div className={styles.SliderHeaderImagesParent}>
                            <Slider
                            asNavFor={this.state.nav2}
                            ref={slider => (this.slider1 = slider)}
                            >
                                <div className='fullImg'><Image priority src={SliderImage1} alt="Slider Image 1"/></div>
                                <div className='fullImg'><Image priority src={SliderImage1} alt="Slider Image 1"/></div>
                                <div className='fullImg'><Image priority src={SliderImage1} alt="Slider Image 1"/></div>
                            </Slider>
                            </div>
                            <div className='SliderHeaderImagesArrowz customArrows'>
                                <Slider
                                asNavFor={this.state.nav1}
                                ref={slider => (this.slider2 = slider)}
                                arrows={true}
                                swipeToSlide={true}
                                focusOnSelect={true}
                                >
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
      </div>
    );
  }
}