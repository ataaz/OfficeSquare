import Image from 'next/image';
import text4 from '../../styles/About/Text4.module.css';
import styles from '../../styles/Service/SliderHeader.module.css';
import Link from 'next/link';
import SliderImage1 from '../../images/gallery-1.jpg';
import React, { Component } from "react";
import Slider from "react-slick";

export default class SliderHeader extends Component {
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
                <div className={styles.ContainerAbsolute + ' ' + styles.SliderHeaderText + ' ' + "container position-absolute"}>
                    <div className='row align-items-center justify-content-center justify-content-md-start h-100'>
                        <div className='col-md-7 col-lg-6 col-xl-5 col-11 col-sm-10'>
                            <div className={styles.SliderHeaderText + ' ' + text4.text4Label + ' ' + styles.SliderHeaderBox}>
                                <span><em>Private Workspaces</em></span>
                                <h2 className='mb-2 mb-md-4'>Private Serviced Offices</h2>
                                <p>Providing a space separate and out of ear shot from other companies</p>
                                <div className='d-flex flex-wrap align-items-center'>
                                  <Link href="/contact-us" className='btn2'>Book A Tour</Link>
                                  <div className='SliderHeaderImagesArrowz customArrows d-flex d-md-none'>
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
                    </div>
                </div>
                <div className={styles.SliderHeaderImg + ' ' + " container"}>
                    <div className='row justify-content-end'>
                        <div className='col-lg-10 col-xl-8 position-relative'>
                            <div className={styles.SliderHeaderImagesParent}>
                              <Slider
                              asNavFor={this.state.nav2}
                              ref={slider => (this.slider1 = slider)}
                              arrows={this.false}
                              >
                                  <div className='fullImg'><Image priority src={SliderImage1} alt="Slider Image 1"/></div>
                                  <div className='fullImg'><Image priority src={SliderImage1} alt="Slider Image 1"/></div>
                                  <div className='fullImg'><Image priority src={SliderImage1} alt="Slider Image 1"/></div>
                              </Slider>
                            </div>
                            <div className='SliderHeaderImagesArrowz customArrows d-none d-md-flex'>
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