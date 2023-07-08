import Image from 'next/image';
import text4 from '../../styles/About/Text4.module.css';
import styles from '../../styles/Service/SliderHeader.module.css';
import Link from 'next/link';
import React, { Component } from "react";
import Slider from "react-slick";

export default class SliderHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
    this.SliderList= props.slider?.map((el,i)=> <div className='fullImg' key={i}><Image width={1} height={1} priority src={el.image.url} alt={el.image.alt}/></div>);
    this.SliderListDiv= props.sliderDiv?.map((el,i)=> <div key={i}></div>);
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }
  render() {
    return (
            <section className={styles.SliderHeader + ' position-relative'}>
                <div className={styles.ContainerAbsolute + ' ' + styles.SliderHeaderText + ' ' + "container position-absolute"}>
                    <div className='row align-items-center justify-content-center justify-content-md-start h-100'>
                        <div className='col-md-7 col-lg-6 col-xl-5 col-11 col-sm-10'>
                            <div className={styles.SliderHeaderText + ' ' + text4.text4Label + ' ' + styles.SliderHeaderBox} data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
                                <span><em>{this.props.label}</em></span>
                                <h2 className='mb-2 mb-md-4'>{this.props.title}</h2>
                                <div dangerouslySetInnerHTML={{__html: this.props.content}}></div>
                                <div className='d-flex flex-wrap align-items-center'>
                                  <Link href={this.props.link.url} className='btn2'>{this.props.link.title}</Link>
                                  <div className='SliderHeaderImagesArrowz customArrows d-flex d-md-none'>
                                      <Slider
                                      asNavFor={this.state.nav1}
                                      ref={slider => (this.slider2 = slider)}
                                      arrows={true}
                                      swipeToSlide={true}
                                      focusOnSelect={true}
                                      >
                                        {this.SliderListDiv}
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
                            <div className={styles.SliderHeaderImagesParent} data-aos="fade-up" data-aos-delay="700" data-aos-duration="800">
                              <Slider
                              asNavFor={this.state.nav2}
                              ref={slider => (this.slider1 = slider)}
                              arrows={this.false}
                              >
                                {this.SliderList}
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
                                  {this.SliderListDiv}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
  }
}
