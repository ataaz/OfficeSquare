import Link from 'next/link';
import Layout from '../components/Layout/layout';
import Head from 'next/head';
import styles from '../styles/About/Text4.module.css';
import HomeLogos from '../components/Home/HomeLogos';
import HomeCTA from '../components/Home/HomeCTA';

export default function NotFound() {
  return (
    <>
    <Layout>
      <Head>
        <title>404 - Page Not Found | Office Square</title>
      </Head>
      <div className='aboutPage topPadding'>
      <section className="centerText default-pt2 default-pb1 position-relative">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <div className={'text2 text-center'}>
                        <h1>404 - Page Not Found</h1>
                        <div>This page doesn't exist, please try navigation on header</div>
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
  );
}