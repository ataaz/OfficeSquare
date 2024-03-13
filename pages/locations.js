import Layout from '../components/Layout/layout';
import HomeLogos from '../components/Home/HomeLogos';
import Location from '../components/Location/LocationPage';
import HomeCTA from '../components/Home/HomeCTA';
import Head from 'next/head';
import styles from '../styles/About/Text4.module.css';
// import { useDispatch, useSelector } from "react-redux";
// import { getPrivacypage } from "../redux/PrivacyPolicyRedux";
// import { useEffect } from 'react';
// import AOS from  'aos';
// import 'aos/dist/aos.css';

export const getServerSideProps = async () => {
  const res = await fetch('https://api.officesquare.com/wp-json/wp/v2/pages/403')
  const page = await res.json()
  return { props: { page } }
}

export default function LocationP({ page }) {
  return (
    <>
    <Layout>
      <Head>
        <title>{page.yoast_head_json.title}</title>
        <meta name='description' content={page.yoast_head_json.og_description}></meta>
      </Head>
      <div className='aboutPage topPadding'>
        <div className='default-pt2'><Location></Location></div>
        <HomeCTA></HomeCTA>
      </div>
    </Layout>
    </>
    )
}