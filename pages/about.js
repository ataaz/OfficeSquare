import Layout from '../components/Layout/layout';
import AboutHeader from '../components/About/AboutHeader';
import CenterText from '../components/About/CenterText';
import KeypointsAbout from '../components/About/Keypoints';
import OfferAbout from '../components/About/Offer';
import SolutionsAbout from '../components/About/Solutions';
import Locations from '../components/About/Locations';
import HomeLogos from '../components/Home/HomeLogos';
import HomeCTA from '../components/Home/HomeCTA';
import Head from 'next/head';
import { useDispatch, useSelector } from "react-redux";
import { getAboutpage } from "../redux/AboutpageRedux";
import { useEffect } from 'react';
import AOS from  'aos';
import 'aos/dist/aos.css';

export default function About() {
  // Fetching State
  const dispatch = useDispatch();
  const { page } = useSelector((state) => state.Aboutpage);
  const { status } = useSelector((state) => state.Aboutpage);
  // const params = useParams();

  useEffect(() => {
    ////Passing page ID reference
    if (status !== "success") {
      dispatch(getAboutpage());
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
  console.log(page);
  // if (status === "success") {
  return (
    <>
    <Layout>
      <Head>
        <title>{page.meta_title}</title>
        <meta name='description' content={page.meta_description}></meta>
      </Head>
      <div className='aboutPage'>
        <AboutHeader heading={page.acf?.sub_header_heading} content={page.acf?.sub_header_content}></AboutHeader>
        <CenterText content={page.acf?.intro_content} img1={page.acf?.intro_content_img1} img2={page.acf?.intro_content_img2}/>
        <KeypointsAbout keypoints={page.acf?.keypoints}/>
        <OfferAbout label={page.acf?.offer_label} content={page.acf?.offer_heading} offers={page.acf?.offer_list} mainImg={page.acf?.offer_image} img1={page.acf?.offer_top_image}/>
        <SolutionsAbout label={page.acf?.solutions_label} heading={page.acf?.solutions_heading} content={page.acf?.solutions_content} solutions={page.acf?.solutions}/>
        <Locations></Locations>
        <HomeLogos customClass="default-pt"></HomeLogos>
        <HomeCTA></HomeCTA>
      </div>
    </Layout>
    </>
    )
  // };
}