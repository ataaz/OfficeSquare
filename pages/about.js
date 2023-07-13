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
import { useEffect } from 'react';
import AOS from  'aos';
import 'aos/dist/aos.css';

export const getServerSideProps = async () => {
  const res = await fetch('https://api.officesquare.com/wp-json/api/v4/getabout')
  const repo = await res.json()
  return { props: { repo } }
}

export default function About({ repo }) {
  console.log(repo)
  return <>
    <Layout>
      <Head>
        <title>{repo.meta_title}</title>
        <meta name='description' content={repo.meta_description}></meta>
      </Head>
      <div className='aboutPage'>
        <AboutHeader heading={repo.acf?.sub_header_heading} content={repo.acf?.sub_header_content}></AboutHeader>
        <CenterText content={repo.acf?.intro_content} img1={repo.acf?.intro_content_img1} img2={repo.acf?.intro_content_img2}/>
        <KeypointsAbout keypoints={repo.acf?.keypoints}/>
        <OfferAbout label={repo.acf?.offer_label} content={repo.acf?.offer_heading} offers={repo.acf?.offer_list} mainImg={repo.acf?.offer_image} img1={repo.acf?.offer_top_image}/>
        <SolutionsAbout label={repo.acf?.solutions_label} heading={repo.acf?.solutions_heading} content={repo.acf?.solutions_content} solutions={repo.acf?.solutions}/>
        <Locations></Locations>
        <HomeLogos customClass="default-pt"></HomeLogos>
        <HomeCTA></HomeCTA>
      </div>
    </Layout>
    </>
}