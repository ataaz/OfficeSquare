import Layout from '../components/Layout/layout';
import HomeLogos from '../components/Home/HomeLogos';
import HomeCTA from '../components/Home/HomeCTA';
import Head from 'next/head';
import styles from '../styles/About/Text4.module.css';
// import { useDispatch, useSelector } from "react-redux";
// import { getPrivacypage } from "../redux/PrivacyPolicyRedux";
// import { useEffect } from 'react';
// import AOS from  'aos';
// import 'aos/dist/aos.css';

export const getServerSideProps = async () => {
  const res = await fetch('https://api.officesquare.com/wp-json/wp/v2/pages/3')
  const page = await res.json()
  return { props: { page } }
}

export default function Privacy({ page }) {
  return (
    <>
    <Layout>
      <Head>
        <title>{page.yoast_head_json.title}</title>
        <meta name='description' content={page.yoast_head_json.og_description}></meta>
      </Head>
      <div className='aboutPage topPadding'>
      <section className="centerText default-pt2 default-pb1 position-relative">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <div className={styles.text4 + ' '}>
                        <h2>{page.title.rendered}</h2>
                        <div dangerouslySetInnerHTML={{__html: page.content.rendered}}></div>
                    </div>
                </div>
            </div>
        </div>
      </section>
        <HomeLogos customClass="default-ptt"></HomeLogos>
        <HomeCTA></HomeCTA>
      </div>
    </Layout>
    </>
    )
}