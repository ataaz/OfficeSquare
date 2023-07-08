import Layout from '../components/Layout/layout';
import Head from 'next/head';
import HomeLogos from '../components/Home/HomeLogos';
import HomeCTA from '../components/Home/HomeCTA';
import Text2Cols from '../components/Service/Text2Cols';
import Benefits from '../components/Service/Benefits';
import Amenities from '../components/Service/Amenities';
import LocationCTA from '../components/Service/LocationCTA';
import Features from '../components/Service/Features';
import Gallery from '../components/Service/Gallery';
import FAQs from '../components/Service/FAQs';
import SliderHeader from '../components/Service/SliderHeader';
import Features2 from '../components/Service/Features2';
import { useDispatch, useSelector } from "react-redux";
import { getBusinessSetup } from "../redux/BusinessSetupRedux";
import { useEffect } from 'react';
import AOS from  'aos';
import 'aos/dist/aos.css';

export default function BusinessSetup() {
  // Fetching State
  const dispatch = useDispatch();
  const { page } = useSelector((state) => state.BusinessSetup);
  const { status } = useSelector((state) => state.BusinessSetup);
  // const params = useParams();

  useEffect(() => {
    ////Passing page ID reference
    if (status !== "success") {
      dispatch(getBusinessSetup());
      AOS.init({ mirror: true, once: false });
      // AOS TRIGGER FIX
      var init = [];
      var x = setInterval(function () {
        init.push(AOS.init({ mirror: true, once: false }));
        if (init.length >= 2) {
          clearInterval(x);
        }
      }, 1000);
    }
    }, [dispatch]);
  if (status === "success") {
    // console.log(page[0].acf.gallery);
  return (
    <>
    <Layout>
      <Head>
        <title>{page[0]?.yoast_head_json.title}</title>
        <meta name='description' content={page[0]?.meta_description}></meta>
      </Head>
      <div className='topPadding'>
        <SliderHeader label={page[0]?.acf.header_label} title={page[0]?.acf.header_title} content={page[0]?.acf.header_content} link={page[0]?.acf.header_link} slider={page[0]?.acf.header_images} sliderDiv={page[0]?.acf.header_images}></SliderHeader>
        <Text2Cols label={page[0]?.acf.two_cols_label} title={page[0]?.acf.two_cols_heading} content={page[0]?.acf.two_cols_content} link={page[0]?.acf.two_cols_link} cols={page[0]?.acf.two_cols}></Text2Cols>
        <Benefits benefits={page[0]?.acf.benefits}></Benefits>
        <Amenities label={page[0].acf.amenities_label} heading={page[0].acf.amenities_heading} amenities={page[0].acf.amenities}></Amenities>
        <LocationCTA label={page[0].acf.location_cta_label} heading={page[0].acf.location_cta_heading} content={page[0].acf.location_cta_content} link={page[0].acf.location_cta_link} image={page[0].acf.location_cta_image}></LocationCTA>
        {/* <Features features1={page[0].acf.features} features2={page[0].acf.features}></Features> */}
        {page[0].acf.features_2_label ? 
        <Features2 label={page[0].acf.features_2_label} heading={page[0].acf.features_2_heading} features2={page[0].acf.features_2} bg={page[0].acf.features_2_bg.url}></Features2>
        : null}
        <Gallery label={page[0].acf.gallery_label} heading={page[0].acf.gallery_heading} content={page[0].acf.gallery_content} link={page[0].acf.gallery_link} gallery={page[0].acf.gallery} galleryDiv={page[0].acf.gallery}></Gallery>
        <FAQs faqs={page[0].acf.faqs} heading={page[0].acf.faqs_heading}></FAQs>
        <HomeLogos customClass="default-pt"></HomeLogos>
        <HomeCTA></HomeCTA>
      </div>
    </Layout>
    </>
    )
  };
}