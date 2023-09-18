import Layout from '../components/Layout/layout';
import Head from 'next/head';
import HomeLogos from '../components/Home/HomeLogos';
import HomeCTA from '../components/Home/HomeCTA';
import ImageHeader from '../components/ContactUs/ImageHeader';
import BlogImg from '../images/blog-large-1.jpg';
import Image from 'next/image';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Link from 'next/link';
const jk = Plus_Jakarta_Sans({ 
    subsets: ['latin'],
    weight: ['400', '500', '700', '800'],
})

export const getServerSideProps = async () => {
  const res = await fetch('https://api.officesquare.com/wp-json/wp/v2/pages/390')
  const page = await res.json()
  return { props: { page } }
}

export default function BusinessSetup({ page }) {
  console.log(page[0]?.yoast_head_json.og_image[0].url);
  return (
    <>
    <style jsx global>{`
        html *{
            font-family: ${jk.style.fontFamily};
        }
    `}
    </style>
    <Layout>
      <Head>
        <title>{page?.yoast_head_json.title}</title>
        <meta name='description' content={page?.yoast_head_json.description}/>
        <meta property="og:image" content={page?.yoast_head_json.og_image[0].url} />
      </Head>
      <div className='topPadding'>
        <ImageHeader label={page.acf?.image_header_label} heading={page.acf?.image_header_title} img={page.acf?.image_header}/>
        <div className='blogListingParent mt-5 pt-5'>
            <div className='container'>
                <div className='row justify-content-between'>
                    <div className='col-md-7'>
                        <div className='blogListing'>
                            <div className='blogBoxLarge'>
                                <div className='blogBoxImg blogBoxDate mb-4 pb-3'>
                                    <span>09<em>Jun</em></span>
                                    <Link href="/training-young-women-on-the-playing-field-of-life"><Image alt="" src={BlogImg} style={{width:`100%`,height:`100%`}}/></Link>
                                </div>
                                <div className='mr20'>
                                    <Link href="/training-young-women-on-the-playing-field-of-life" className="btn3 catLink">Tips & Tricks</Link>
                                    <Link href="/training-young-women-on-the-playing-field-of-life" className="blogTitle">Training young women  on the playing field of life</Link>
                                    <p>The definition of an office is forever exploring with the pandemic changing the idea of a traditional workspace. Organizations andd employees alike hard to adapt quickly and with vaccinations sollouts and graduaal easing of restrictions.</p>
                                </div>
                            </div>

                            <div className='blogBoxLarge'>
                                <div className='blogBoxImg blogBoxDate mb-4 pb-3'>
                                    <span>09<em>Jun</em></span>
                                    <Link href="/flexible-office-is-a-powerful-part-of-workplace-strategy"><Image alt="" src={BlogImg} style={{width:`100%`,height:`100%`}}/></Link>
                                </div>
                                <div className='mr20'>
                                    <Link href="/flexible-office-is-a-powerful-part-of-workplace-strategy" className="btn3 catLink">Tips & Tricks</Link>
                                    <Link href="/flexible-office-is-a-powerful-part-of-workplace-strategy" className="blogTitle">Flexible office is a powerful part of workplace strategy</Link>
                                    <p>The definition of an office is forever exploring with the pandemic changing the idea of a traditional workspace. Organizations andd employees alike hard to adapt quickly and with vaccinations sollouts and graduaal easing of restrictions.</p>
                                </div>
                            </div>

                            <div className='blogBoxLarge'>
                                <div className='blogBoxImg blogBoxDate mb-4 pb-3'>
                                    <span>09<em>Jun</em></span>
                                    <Link href="/a-fully-remote-global-communications-platform-scales"><Image alt="" src={BlogImg} style={{width:`100%`,height:`100%`}}/></Link>
                                </div>
                                <div className='mr20'>
                                    <Link href="/a-fully-remote-global-communications-platform-scales" className="btn3 catLink">Tips & Tricks</Link>
                                    <Link href="/a-fully-remote-global-communications-platform-scales" className="blogTitle">A fully remote, global communications platform scales</Link>
                                    <p>The definition of an ofsfice is forever exploring with the pandemic changing the idea of a traditional workspace. Organizations andd employees alike hard to adapt quickly and with vaccinations sollouts and graduaal easing of restrictions.</p>
                                </div>
                            </div>

                            <div className='blogBoxLarge'>
                                <div className='blogBoxImg blogBoxDate mb-4 pb-3'>
                                    <span>09<em>Jun</em></span>
                                    <Link href="/how-to-build-a-customer-centric-culture-in-your-business"><Image alt="" src={BlogImg} style={{width:`100%`,height:`100%`}}/></Link>
                                </div>
                                <div className='mr20'>
                                    <Link href="/how-to-build-a-customer-centric-culture-in-your-business" className="btn3 catLink">Tips & Tricks</Link>
                                    <Link href="/how-to-build-a-customer-centric-culture-in-your-business" className="blogTitle">How to build a customer-centric culture in your business</Link>
                                    <p>The definition of an ofsfice is forever exploring with the pandemic changing the idea of a traditional workspace. Organizations andd employees alike hard to adapt quickly and with vaccinations sollouts and graduaal easing of restrictions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='blogSidebar'>
                            <form className='searchBox'>
                                <input type='search' placeholder='Search...'/>
                            </form>

                            <div className='widgetSidebar mt-4'>
                                <h4>Blog Categories</h4>
                                <div className='widgetBox'>
                                    <ul className='catLinks'>
                                        <li><Link href="#">Community</Link></li>
                                        <li><Link href="#">Company news</Link></li>
                                        <li><Link href="#">Highlights</Link></li>
                                        <li><Link href="#">Lifestyle</Link></li>
                                        <li><Link href="#">News</Link></li>
                                        <li><Link href="#">Tips & Tricks</Link></li>
                                    </ul>
                                </div>
                            </div>

                            {/* <div className='widgetSidebar mt-4'>
                                <h4>Popular Posts</h4>
                                <div className='widgetBox'>
                                    <ul className='catLinks'>
                                        <li><Link href="#">Community</Link></li>
                                        <li><Link href="#">Company news</Link></li>
                                        <li><Link href="#">Highlights</Link></li>
                                        <li><Link href="#">Lifestyle</Link></li>
                                        <li><Link href="#">News</Link></li>
                                        <li><Link href="#">Tips & Tricks</Link></li>
                                    </ul>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <HomeLogos customClass="default-pt"></HomeLogos>
        <HomeCTA></HomeCTA>
      </div>
    </Layout>
    </>
    )
}