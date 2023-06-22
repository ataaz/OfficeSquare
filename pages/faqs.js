import Head from 'next/head';
import FAQList from '../components/FAQs/FAQList';
import TextHeader from '../components/FAQs/TextHeader';
import Layout from '../components/Layout/layout';

export default function FAQs() {
  return (
    <>
    <Layout>
      <Head>
        <title>Frequently Asked Questions</title>
      </Head>
        <div className='topPadding'>
          <TextHeader></TextHeader>
          <FAQList></FAQList>
        </div>
    </Layout>
    </>
  );
}