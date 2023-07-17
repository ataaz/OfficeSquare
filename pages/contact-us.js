import Head from 'next/head';
import Layout from '../components/Layout/layout';
import Locations from '../components/About/Locations';
import GoogleMap from '../components/ContactUs/GoogleMap';
import ImageHeader from '../components/ContactUs/ImageHeader';
import TextForm from '../components/ContactUs/TextForm';
// import { useDispatch, useSelector } from "react-redux";
// import { getContactPage } from "../redux/ContactRedux";
// import { useEffect } from 'react';
// import AOS from  'aos';
// import 'aos/dist/aos.css';

export const getServerSideProps = async () => {
  const res = await fetch('https://api.officesquare.com/wp-json/api/v4/getcontact')
  const page = await res.json()
  return { props: { page } }
}

export default function ContactUs({ page }) {
  return (
    <>
    <Layout>
        <Head>
          <title>{page.meta_title}</title>
          <meta name='description' content={page.meta_description}></meta>
          <meta property='og:image' content={page.acf?.contact_header_image} />
        </Head>
        <div className='topPadding contactPage'>
            <ImageHeader label={page.acf?.header_label} heading={page.acf?.contact_heading} img={page.acf?.contact_header_image}/>
            <TextForm content={page.acf?.form_content}/>
            <Locations/>
            <GoogleMap mapCode={page.acf?.map_code}/>
        </div>
    </Layout>
    </>
    )
}