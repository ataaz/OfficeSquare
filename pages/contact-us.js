import Head from 'next/head';
import Layout from '../components/Layout/layout';
import Locations from '../components/About/Locations';
import GoogleMap from '../components/ContactUs/GoogleMap';
import ImageHeader from '../components/ContactUs/ImageHeader';
import TextForm from '../components/ContactUs/TextForm';

export default function ContactUs() {
  return (
    <>
    <Layout>
        <Head>
            <title>Contact Us | Office Square</title>
        </Head>
        <div className='topPadding'>
            <ImageHeader></ImageHeader>
            <TextForm></TextForm>
            <Locations></Locations>
            <GoogleMap></GoogleMap>
        </div>
    </Layout>
    </>
  );
}