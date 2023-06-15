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


export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home | Office Square</title>
      </Head>
      <HomeBanner></HomeBanner>
      <HomeText1></HomeText1>
      <HomeText2></HomeText2>
      <HomeSolutions></HomeSolutions>
      <HomeExp></HomeExp>
      <HomeLogos></HomeLogos>
      <HomeBlog></HomeBlog>
      <CTAText></CTAText>
    </Layout>
  )
}
