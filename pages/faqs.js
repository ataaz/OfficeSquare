import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout/layout';

export default function FAQs() {
  return (
    <>
    <Layout>
        <div className={styles.container}>
        <h1>FAQs page</h1>
        <h2>
            <Link href="/">Back to home</Link>
        </h2>
        </div>
    </Layout>
    </>
  );
}