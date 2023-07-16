import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '../components/Blog/container'
import MoreStories from '../components/Blog/more-stories'
import HeroPost from '../components/Blog/hero-post'
import Intro from '../components/Blog/intro'
import Layout from '../components/Layout/layout';
import { getAllPostsForHome } from '../lib/api'
import { CMS_NAME } from '../lib/constants'
import ImageHeader from '../components/ContactUs/ImageHeader';

export default function Index({ allPosts: { edges }, preview }) {
  const heroPost = edges[0]?.node
  const morePosts = edges.slice(1)
  const img = {
    "url": "https://api.officesquare.com/wp-content/uploads/2023/07/blog-header.png",
    "alt": ""
    }
  return (
    <Layout>
      <Head>
        <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
      </Head>
      <Container>
        <ImageHeader label="Our Blog" heading="Blogs" img={img}/>
        {/* <Intro /> */}
        {/* {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.featuredImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )} */}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview)

  return {
    props: { allPosts, preview },
    revalidate: 10,
  }
}
