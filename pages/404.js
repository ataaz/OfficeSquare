import Link from 'next/link';
import Layout from '../components/Layout/layout';

export default function NotFound() {
  return (
    <>
    <Layout>
        Go back! <Link href="/">Home</Link>
    </Layout>
    </>
  );
}