import Head from 'next/head';
import Layout from '../components/Layout/layout';
import HomeBlog from '../components/Home/HomeBlog';
import HomeLogos from '../components/Home/HomeLogos';
import CTAText from '../components/Home/HomeCTA';
import HomeExp from '../components/Home/HomeExp';
import HomeSolutions from '../components/Home/HomeSolutions';
import HomeBanner from '../components/Home/HomeBanner';
import HomeText1 from '../components/Home/HomeText1';
import HomeText2 from '../components/Home/HomeText2';
import { useDispatch, useSelector } from "react-redux";
import { getHomepage } from "../redux/HomepageRedux";
import AOS from  'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Home() {
  // Fetching State
  const dispatch = useDispatch();
  const { page } = useSelector((state) => state.Homepage);
  const { status } = useSelector((state) => state.Homepage);
  // const params = useParams();

  useEffect(() => {
    ////Passing page ID reference
    if (status !== "success") {
      dispatch(getHomepage());
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
  // console.log(status);
  if (status === "success") {
    return (
      <Layout>
        <Head>
          <title>{page.meta_title}</title>
          <meta name='description' content={page.meta_description}></meta>
        </Head>
        <div className="topPadding">
          <div>
            <HomeBanner img={page.acf?.home_banner_img} heading={page.acf?.hero_heading} content={page.acf?.hero_content} link={page.acf?.hero_button}/>
          </div>
          <div>
            <HomeText1 image1={page.acf?.intro_image_1} image2={page.acf?.intro_image_2} text1={page.acf?.intro_content_1} text2={page.acf?.intro_content_2} link={page.acf?.intro_content_link}/>
            <HomeText2 image1={page.acf?.after_intro_image1} image2={page.acf?.after_intro_image2} content={page.acf?.after_intro}/>
            <HomeSolutions heading={page.acf?.our_solution_heading}/>
            <HomeLogos customClass="default-pb"/>
            <HomeExp heading={page.acf?.experience_heading} content={page.acf?.experience_content} image1={page.acf?.experience_image1} image2={page.acf?.experience_image2} exp={page.acf?.experiences}/>
            <HomeBlog/>
            <CTAText/>
          </div>
        </div>
      </Layout>
    )
  };
}
