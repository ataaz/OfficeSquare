import headerLogo from "../../public/logo-office-square.svg";
import headerMobileLogo from "../../public/header-mobile-logo.svg";
import Image from 'next/image'
import Link from 'next/link';
import Head from "next/head";

export default function Header() {
    return <header className='siteHeader'>
        <Head>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
            {/* <nav
            className="navbar navbar-dark"
            aria-label="First navbar example"
            > */}
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-4 col-md-3 col-xl-2">
                        <Link className="navbar-brand" href="/">
                            <Image
                            className="d-none d-md-block DesktopLogo"
                            priority
                            src={headerLogo}
                            alt="Header Logo Logo - Office Square"
                            />
                            <Image
                            className="d-block d-md-none MobileLogo"
                            priority
                            src={headerMobileLogo}
                            alt="Header Mobile Logo - Office Square"
                            />
                        </Link>
                    </div> 
                    <div className="col-8 col-md-9 col-lg-7 col-xl-6 d-none d-md-flex flex-wrap justify-content-end">
                        <ul className="navbar-nav list-inline">
                            <li className="nav-item list-inline-item"><Link className="nav-link active" aria-current="page" href="/about">About</Link></li>
                            <li className="nav-item list-inline-item"><Link className="nav-link" href="/solutions">Solutions</Link></li>
                            <li className="nav-item list-inline-item"><Link className="nav-link" href="/faqs">FAQs</Link></li>
                            <li className="nav-item list-inline-item"><Link className="nav-link" href="/book-space">Book Your Space</Link></li>
                        </ul>
                    </div>
                    <div className="col-8 d-block d-md-none">
                        <div className="row align-items-center justify-content-end">
                            <div className='col-8 col-sm-6'>
                                <Link href="/books-space/" className="mobileHeaderBtn">Book Your Space</Link>
                            </div>
                            <div className='col-3 text-end'>
                                <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarsExample01"
                                aria-controls="navbarsExample01"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="collapse navbar-collapse" id="navbarsExample01">
                    <ul className="navbar-nav me-auto mb-2">
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="/about">About</a></li>
                        <li className="nav-item"><a className="nav-link" href="/solutions">Solutions</a></li>
                        <li className="nav-item"><a className="nav-link" href="/faqs">FAQs</a></li>
                        <li className="nav-item"><a className="nav-link" href="/book-space">Book Your Space</a></li>
                    </ul>
                </div>
            </div>
            {/* </nav> */}
        </main>
    </header>
};