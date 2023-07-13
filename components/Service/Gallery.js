import Image from 'next/image';
import text4 from '../../styles/About/Text4.module.css';
import styles from '../../styles/Service/Gallery.module.css';
import Link from 'next/link';
import React, { Component } from "react";
import Slider from "react-slick";


export default class Gallery extends Component {
    constructor(props) {
      super(props);
      this.state = {
        nav1: null,
        nav2: null
      };
      this.GalleryList= props.gallery?.map((el,i)=> <div className='' key={i}><Image priority src={el.url} alt={el.alt} width={1} height={1}/></div>);
      this.GalleryListDiv= this.props.galleryDiv?.map((el,i)=> <div key={i}></div>);
    }

    componentDidMount() {
      this.setState({
        nav1: this.slider1,
        nav2: this.slider2
      });
    }
  
    render() {
        const settingsForResponsive = {
            responsive: [
            {
                breakpoint: 768,
                settings: {
                slidesToShow: 1,
                centerPadding:'80px',
                },
            },
            {
                breakpoint: 576,
                settings: {
                slidesToShow: 1,
                centerPadding:'40px'
                },
            },
            ]
        };
      return (
        <div>
            <section className={styles.gallerySec + ' default-pb1 position-relative overflow-hidden gallerySecGlobal LargeScreenWidth'}>
                <div className="container">
                    <div className='row justify-content-between align-items-start align-items-sm-end mb-5 pb-2 mb-xl-5 pb-xl-2'>
                        <div className='col-md-6 col-lg-6 mb-4 mb-md-0 pb-1 pb-md-0'>
                            <div className={text4.text4 + ' ' + text4.text4Label + ' ' + text4.text4_h2fw700}>
                            <span><em>{this.props.label}</em></span>
                            <h2 className='mb-4'>{this.props.heading}</h2>
                            <p className='mb-0'>{this.props.content}</p>
                            </div>
                        </div>
                        <div className='col-md-3 text-md-end'>
                            <Link className="btn1" href={this.props.link.url}>{this.props.link.title}</Link>
                        </div>
                    </div>
                </div>

                <div className='galleryContainer'>
                    <div className='sliderGalleryArrowzz customArrows'>
                        <Slider
                        asNavFor={this.state.nav1}
                        ref={slider => (this.slider2 = slider)}
                        arrows={true}
                        swipeToSlide={true}
                        focusOnSelect={false}
                        >
                            {this.GalleryListDiv}
                        </Slider>
                    </div>
                    <div className='sliderGallery'>
                        <Slider
                        asNavFor={this.state.nav2}
                        ref={slider => (this.slider1 = slider)}
                        arrows={this.false}
                        slidesToShow={1}
                        centerMode={true}
                        centerPadding={'200px'}
                        {...settingsForResponsive}
                        >
                            {this.GalleryList}
                        </Slider>
                    </div>
                </div>
            </section>
        </div>
      );
    }
  }