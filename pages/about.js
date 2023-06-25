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

export default function About() {
  return (
    <>
    <Layout>
      <Head>
        <title>About | Office Square</title>
      </Head>
      <div className='aboutPage'>
        <AboutHeader></AboutHeader>
        <CenterText></CenterText>
        <KeypointsAbout></KeypointsAbout>
        <OfferAbout></OfferAbout>
        <SolutionsAbout></SolutionsAbout>
        <Locations></Locations>
        <HomeLogos></HomeLogos>
        <HomeCTA></HomeCTA>
      </div>
    </Layout>
    </>
  );
}