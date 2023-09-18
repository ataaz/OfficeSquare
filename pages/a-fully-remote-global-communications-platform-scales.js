import Layout from '../components/Layout/layout';
import Head from 'next/head';
import HomeLogos from '../components/Home/HomeLogos';
import HomeCTA from '../components/Home/HomeCTA';
import BlogMain from '../images/blog-single.jpg';
import Image from 'next/image';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Link from 'next/link';
import { useRouter } from 'next/router';
// import { FacebookShareButton, FacebookIcon,} from 'next-share';
// import { TwitterShareButton, TwitterIcon,} from 'next-share';
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
    const { asPath, pathname } = useRouter();
  console.log(asPath);
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
        <div className='blogSingleParent mt-4 mt-xl-4 pt-4'>
            <div className='container borderBottom'>
                <div className='blogMainImg' style={{backgroundImage:`url(${BlogMain.src})`,backgroundRepeat:`no-repeat`,backgroundSize:`cover`,backgroundAttachment:`fixed`}}>
                    <Image src={BlogMain} style={{width:`100%`,height:`100%`,backgroundAttachment:`fixed`,opacity:`0`}}/>
                </div>
                <div className='row justify-content-end'>
                    <div className='col-md-10'>
                        <div className='singlePostBox'>
                            <div className='mr150'>
                                <div className='text1'>
                                    <h2 className='singleTitle'>A fully remote, global communications platform scales</h2>
                                </div>
                                <div className='singleText'>
                                    <p className='dateBox mt-3 mb-3'>August 25, 2022   |  By admin</p>
                                    <p>The definition of an office is forever exploring with the pandemic changing the idea of a traditional workspace. Organizations andd employees alike hard to adapt quickly and with vaccinations sollouts and graduaal easing of restrictions.</p>
                                    <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
                                    <h2>Key Highlights</h2>
                                    <ul>
                                        <li>The definition of an office is forever exploring with the pandemic changing the idea of a traditional workspace. Organizations andd employees alike hard to adapt quickly and with vaccinations sollouts and graduaal easing of restrictions.</li>
                                        <li>The definition of an office is forever exploring with the pandemic changing the idea of a traditional workspace. Organizations andd employees alike hard to adapt quickly and with vaccinations sollouts and graduaal easing of restrictions.</li>
                                        <li>The definition of an office is forever exploring with the pandemic changing the idea of a traditional workspace. Organizations andd employees alike hard to adapt quickly and with vaccinations sollouts and graduaal easing of restrictions.</li>
                                    </ul>
                                    <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
                                </div>
                            </div>

                            <div className='socialIcons socialIconsBig d-flex flex-wrap mt-5'>
                                {/* <FacebookShareButton
                                url={'https://officesquare.com' + asPath}
                                >
                                <FacebookIcon size={32} round className='me-2'/>
                                </FacebookShareButton>
                                <TwitterShareButton
                                url={'https://officesquare.com' + asPath}
                                >
                                <TwitterIcon size={32} round />
                                </TwitterShareButton> */}
                            </div>

                            <div className='tagLinks d-flex flex-wrap mt-4 pt-2'>
                                <Link href="#!" className='btn4'>Work</Link>
                                <Link href="#!" className='btn4'>Office</Link>
                                <Link href="#!" className='btn4'>Shared</Link>
                                <Link href="#!" className='btn4'>News</Link>
                                <Link href="#!" className='btn4'>Project</Link>
                            </div>
                            
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