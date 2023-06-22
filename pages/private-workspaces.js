import Link from 'next/link';
import Layout from '../components/Layout/layout';
import AboutHeader from '../components/About/AboutHeader';
import CenterText from '../components/About/CenterText';
import KeypointsAbout from '../components/About/Keypoints';
import OfferAbout from '../components/About/Offer';
import Head from 'next/head';
import SolutionsAbout from '../components/About/Solutions';
import Locations from '../components/About/Locations';
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

export default function About() {
  return (
    <>
    <Layout>
      <Head>
        <title>Private Workspaces | Office Square</title>
      </Head>
      <div className='topPadding'>
        <SliderHeader></SliderHeader>
        <Text2Cols></Text2Cols>
        <Benefits></Benefits>
        <Amenities></Amenities>
        <LocationCTA></LocationCTA>
        <Features></Features>
        <Gallery></Gallery>
        <FAQs></FAQs>
        <HomeLogos></HomeLogos>
        <HomeCTA></HomeCTA>
      </div>
    </Layout>
    </>
  );
}