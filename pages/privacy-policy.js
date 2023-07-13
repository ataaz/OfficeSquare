import Layout from '../components/Layout/layout';
import HomeLogos from '../components/Home/HomeLogos';
import HomeCTA from '../components/Home/HomeCTA';
import Head from 'next/head';
import { useDispatch, useSelector } from "react-redux";
import { getPrivacypage } from "../redux/PrivacyPolicyRedux";
import { useEffect } from 'react';
import styles from '../styles/About/Text4.module.css';
import AOS from  'aos';
import 'aos/dist/aos.css';

export default function Privacy() {
  // Fetching State
  const dispatch = useDispatch();
  const { page } = useSelector((state) => state.Privacypage);
  const { status } = useSelector((state) => state.Privacypage);
  // const params = useParams();

  useEffect(() => {
    ////Passing page ID reference
    if (status !== "success") {
      dispatch(getPrivacypage());
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
  if (status === "success") {
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
  };
}