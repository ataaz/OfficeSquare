import Image from 'next/image'
import Link from 'next/link';
import blog1 from "../../public/blog-1.jpg";
import blog2 from "../../public/blog-2.jpg";
import blog3 from "../../public/blog-3.jpg";

export default function HomeBlog() {
    return (
        <section className='HomeBlog default-pt'>
          <div className='container'>
            <div className='row justify-content-between align-items-center mb-5'>
              <div className='col-md-5 col-lg-4 col-7'>
                <div className='text2 text2_h2mb'>
                  <h2>Latest Blog Posts</h2>
                </div>
              </div>
              <div className='col-md-3 col-5 text-end'>
                <Link href='' className='btn1'>All posts</Link>
              </div>
            </div>
            
            <div className='row rowMbMobile'>
                <div className='col-md-4'>
                    <div className='blogBox'>
                        <Link href='#' className='fullImg d-block position-relative'>
                            <Image 
                            priority 
                            src={blog1} 
                            alt="blog 2"
                            style={{ objectFit: 'contain' }}
                            />
                        </Link>
                        <Link href='#' className='titleBlog'>From Freelancers to Remote <br></br>Workers</Link>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        <span>May 7, 2023 | <Link href='#'>Events</Link></span>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='blogBox'>
                        <Link href='#' className='fullImg d-block position-relative'>
                            <Image 
                            priority 
                            src={blog2} 
                            alt="blog 2"
                            style={{ objectFit: 'contain' }}
                            />
                        </Link>
                        <Link href='#' className='titleBlog'>The Importance of Ergonomics in the Co-Working Environment</Link>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        <span>May 7, 2023 | <Link href='#'>News</Link></span>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='blogBox'>
                        <Link href='#' className='fullImg d-block position-relative'>
                            <Image 
                            priority 
                            src={blog3} 
                            alt="blog 3"
                            style={{ objectFit: 'contain' }}
                            />
                        </Link>
                        <Link href='#' className='titleBlog'>5 Co-Working Spaces for Networking and Collaboration</Link>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        <span>May 7, 2023 | <Link href='#'>News</Link></span>
                    </div>
                </div>
            </div>
          </div>
        </section>
    );
}