import Head from 'next/head';
import Layout from '../components/Layout/layout';
import Locations from '../components/About/Locations';
import GoogleMap from '../components/ContactUs/GoogleMap';
import ImageHeader from '../components/ContactUs/ImageHeader';
import TextForm from '../components/ContactUs/TextForm';
import { useDispatch, useSelector } from "react-redux";
import { getContactPage } from "../redux/ContactRedux";
import { useEffect } from 'react';
import AOS from  'aos';
import 'aos/dist/aos.css';

export default function ContactUs() {
  // Fetching State
  const dispatch = useDispatch();
  const { page } = useSelector((state) => state.ContactPage);
  const { status } = useSelector((state) => state.ContactPage);
  // const params = useParams();

  useEffect(() => {
    ////Passing page ID reference
    if (status !== "success") {
      dispatch(getContactPage());
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
  // console.log(page);
  if (status === "success") {
  return (
    <>
    <Layout>
        <Head>
          <title>{page.meta_title}</title>
          <meta name='description' content={page.meta_description}></meta>
        </Head>
        <div className='topPadding contactPage'>
            <ImageHeader label={page.acf?.header_label} heading={page.acf?.contact_heading} img={page.acf?.contact_header_image}></ImageHeader>
            <TextForm content={page.acf?.form_content}></TextForm>
            <Locations></Locations>
            <GoogleMap mapCode={page.acf?.map_code}></GoogleMap>
        </div>
    </Layout>
    </>
    )
  };
}