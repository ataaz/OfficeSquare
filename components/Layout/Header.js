import headerLogo from "../../images/logo-office-square.svg";
import headerMobileLogo from "../../images/header-mobile-logo.svg";
import Image from 'next/image'
import Link from 'next/link';
import Head from "next/head";
import { useState } from "react";

export default function Header() {
    const [isActive, setIsActive] = useState(false);
    const handleClick = event => {
        setIsActive(current => !current);
    };
    const [isSubmenuActive, setSubmenuIsActive] = useState(false);
    const handleClickSubMenu = event => {
        setSubmenuIsActive(current => !current);
    };
    return <header className={isActive ? 'siteHeader active' : 'siteHeader'}>
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
            <script id="bootstrap-cdn" src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" />
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
                            <li className="nav-item list-inline-item"><Link className="nav-link" href="#" onClick={handleClickSubMenu}>Solutions</Link></li>
                            <li className="nav-item list-inline-item"><Link className="nav-link" href="/faqs">FAQs</Link></li>
                            <li className="nav-item list-inline-item"><Link className="nav-link" href="/contact-us">Book Your Space</Link></li>
                        </ul>
                    </div>
                    <div className="col-8 d-block d-md-none">
                        <div className="row align-items-center justify-content-end">
                            <div className='col-8 col-sm-6'>
                                <Link href="/contact-us/" className="mobileHeaderBtn">Book Your Space</Link>
                            </div>
                            <div className='col-3 text-end'>
                                <button
                                className={isActive ? 'navbar-toggler active' : 'navbar-toggler'} onClick={handleClick}
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

                <div className="flex-column align-items-between h-80 d-md-none pt-5 mobileHeaderContent" style={{display:`none`}}>
                    <div className="collapse navbar-collapse" id="navbarsExample01">
                        <ul className="navbar-nav me-auto mb-2">
                            <li className="nav-item"><a className="nav-link active" aria-current="page" href="/about">About</a></li>
                            <li className="nav-item"><a className="nav-link" href="#" onClick={handleClickSubMenu}>Solutions</a></li>
                            <li className="nav-item"><a className="nav-link" href="/faqs">FAQs</a></li>
                            <li className="nav-item list-inline-item"><Link className="nav-link" href="/contact-us">Contact</Link></li>
                            <li className="nav-item list-inline-item d-none"><Link className="nav-link" href="/contact-us">Contact</Link></li>
                        </ul>
                    </div>

                    <div className='socialIcons d-flex flex-wrap'>
                        <Link href="#"><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M34.5 17.491C34.5 26.8746 26.8891 34.482 17.5 34.482C8.11092 34.482 0.5 26.8746 0.5 17.491C0.5 8.10737 8.11092 0.5 17.5 0.5C26.8891 0.5 34.5 8.10737 34.5 17.491Z" stroke="black"/> <path d="M17.4151 9.25781C19.6294 9.25781 19.9056 9.26596 20.7744 9.30668C21.6423 9.34741 22.2331 9.48344 22.7531 9.68544C23.2909 9.89233 23.744 10.1725 24.1972 10.6246C24.6116 11.0318 24.9322 11.5243 25.1368 12.0679C25.3381 12.5868 25.475 13.1782 25.5157 14.0456C25.5541 14.9139 25.5646 15.19 25.5646 17.4031C25.5646 19.6162 25.5565 19.8923 25.5157 20.7606C25.475 21.6281 25.3381 22.2186 25.1368 22.7383C24.9328 23.2822 24.6121 23.7749 24.1972 24.1817C23.7896 24.5957 23.2969 24.9162 22.7531 25.1208C22.2339 25.322 21.6423 25.4589 20.7744 25.4996C19.9056 25.5379 19.6294 25.5485 17.4151 25.5485C15.2009 25.5485 14.9246 25.5403 14.0559 25.4996C13.188 25.4589 12.5971 25.322 12.0772 25.1208C11.5331 24.9168 11.0402 24.5962 10.6331 24.1817C10.2186 23.7746 9.89797 23.282 9.69347 22.7383C9.49137 22.2195 9.35527 21.6281 9.31452 20.7606C9.27622 19.8923 9.26562 19.6162 9.26562 17.4031C9.26562 15.19 9.27377 14.9139 9.31452 14.0456C9.35527 13.1773 9.49137 12.5876 9.69347 12.0679C9.8974 11.524 10.2181 11.0313 10.6331 10.6246C11.0403 10.2102 11.5332 9.88967 12.0772 9.68544C12.5971 9.48344 13.1872 9.34741 14.0559 9.30668C14.9246 9.2684 15.2009 9.25781 17.4151 9.25781ZM17.4151 13.3305C16.3344 13.3305 15.298 13.7596 14.5338 14.5233C13.7697 15.2871 13.3404 16.323 13.3404 17.4031C13.3404 18.4833 13.7697 19.5192 14.5338 20.2829C15.298 21.0467 16.3344 21.4758 17.4151 21.4758C18.4958 21.4758 19.5323 21.0467 20.2964 20.2829C21.0606 19.5192 21.4899 18.4833 21.4899 17.4031C21.4899 16.323 21.0606 15.2871 20.2964 14.5233C19.5323 13.7596 18.4958 13.3305 17.4151 13.3305ZM22.7123 13.1268C22.7123 12.8568 22.605 12.5978 22.4139 12.4069C22.2229 12.2159 21.9638 12.1087 21.6936 12.1087C21.4235 12.1087 21.1643 12.2159 20.9733 12.4069C20.7823 12.5978 20.6749 12.8568 20.6749 13.1268C20.6749 13.3969 20.7823 13.6558 20.9733 13.8468C21.1643 14.0377 21.4235 14.145 21.6936 14.145C21.9638 14.145 22.2229 14.0377 22.4139 13.8468C22.605 13.6558 22.7123 13.3969 22.7123 13.1268ZM17.4151 14.9595C18.0635 14.9595 18.6854 15.217 19.1439 15.6752C19.6024 16.1335 19.86 16.7551 19.86 17.4031C19.86 18.0512 19.6024 18.6728 19.1439 19.131C18.6854 19.5893 18.0635 19.8467 17.4151 19.8467C16.7667 19.8467 16.1449 19.5893 15.6864 19.131C15.2279 18.6728 14.9703 18.0512 14.9703 17.4031C14.9703 16.7551 15.2279 16.1335 15.6864 15.6752C16.1449 15.217 16.7667 14.9595 17.4151 14.9595Z" fill="black"/></svg></Link>
                        <Link href="#"><svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M34.7969 17.491C34.7969 26.8746 27.186 34.482 17.7969 34.482C8.40779 34.482 0.796875 26.8746 0.796875 17.491C0.796875 8.10737 8.40779 0.5 17.7969 0.5C27.186 0.5 34.7969 8.10737 34.7969 17.491Z" stroke="black"/> <path d="M19.3765 18.6249H21.4139L22.2289 15.3668H19.3765V13.7377C19.3765 12.8988 19.3765 12.1087 21.0064 12.1087H22.2289V9.37185C21.9632 9.33682 20.96 9.25781 19.9005 9.25781C17.688 9.25781 16.1167 10.6075 16.1167 13.0861V15.3668H13.6719V18.6249H16.1167V25.5485H19.3765V18.6249Z" fill="black"/> </svg></Link>
                        <Link href="#"><svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M35.3828 17.491C35.3828 26.8746 27.7719 34.482 18.3828 34.482C8.99373 34.482 1.38281 26.8746 1.38281 17.491C1.38281 8.10737 8.99373 0.5 18.3828 0.5C27.7719 0.5 35.3828 8.10737 35.3828 17.491Z" stroke="black"/> <path d="M26.075 13.3511C26.4475 14.8026 26.4475 17.8327 26.4475 17.8327C26.4475 17.8327 26.4475 20.8627 26.075 22.3142C25.868 23.1165 25.2625 23.7478 24.4956 23.9612C23.1029 24.3489 18.2979 24.3489 18.2979 24.3489C18.2979 24.3489 13.4954 24.3489 12.1002 23.9612C11.3301 23.7445 10.7254 23.1141 10.5209 22.3142C10.1484 20.8627 10.1484 17.8327 10.1484 17.8327C10.1484 17.8327 10.1484 14.8026 10.5209 13.3511C10.7279 12.5488 11.3334 11.9175 12.1002 11.7041C13.4954 11.3164 18.2979 11.3164 18.2979 11.3164C18.2979 11.3164 23.1029 11.3164 24.4956 11.7041C25.2658 11.9208 25.8705 12.5512 26.075 13.3511ZM16.668 20.6835L21.5578 17.8327L16.668 14.9818V20.6835Z" fill="black"/> </svg></Link>
                        <Link href="#"><svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M35.0859 17.491C35.0859 26.8746 27.475 34.482 18.0859 34.482C8.69685 34.482 1.08594 26.8746 1.08594 17.491C1.08594 8.10737 8.69685 0.5 18.0859 0.5C27.475 0.5 35.0859 8.10737 35.0859 17.491Z" stroke="black"/> <path d="M26.4627 11.8936C25.8405 12.1686 25.1808 12.3493 24.5052 12.4295C25.2173 12.0039 25.7502 11.334 26.0047 10.5447C25.3364 10.9422 24.6038 11.2208 23.8402 11.3715C23.3273 10.8229 22.6474 10.4591 21.9063 10.3367C21.1652 10.2142 20.4043 10.3398 19.742 10.6941C19.0797 11.0484 18.5531 11.6115 18.244 12.2958C17.9349 12.9801 17.8607 13.7473 18.0329 14.4781C16.6777 14.4102 15.3519 14.0582 14.1417 13.445C12.9315 12.8317 11.8638 11.971 11.008 10.9186C10.7051 11.4386 10.5459 12.0298 10.5467 12.6315C10.5467 13.8126 11.1481 14.856 12.0625 15.4669C11.5214 15.4499 10.9922 15.3038 10.519 15.0409V15.0833C10.5192 15.8699 10.7915 16.6322 11.2898 17.241C11.7882 17.8498 12.4818 18.2677 13.2532 18.4237C12.7508 18.5597 12.2241 18.5798 11.7129 18.4823C11.9304 19.1594 12.3543 19.7515 12.9252 20.1758C13.4962 20.6001 14.1856 20.8353 14.8969 20.8485C14.1899 21.4035 13.3804 21.8137 12.5147 22.0558C11.649 22.2979 10.744 22.367 9.85156 22.2593C11.4095 23.2607 13.2231 23.7923 15.0754 23.7906C21.3448 23.7906 24.7733 18.5996 24.7733 14.0977C24.7733 13.9511 24.7692 13.8028 24.7627 13.6578C25.4301 13.1758 26.006 12.5786 26.4635 11.8944L26.4627 11.8936Z" fill="black"/> </svg></Link>
                    </div>
                </div>
            </div>
            {/* </nav> */}
        </main>

        <div className={isSubmenuActive ? 'subMenu active' : 'subMenu'} style={{display:`none`}}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-3 col-md-4">
                        <ul className="navbar-subnav me-auto mb-2">
                            <li className="nav-item"><a className="nav-link" aria-current="page" href="/private-workspaces">Private Workspaces</a></li>
                            <li className="nav-item"><a className="nav-link" aria-current="page" href="/private-workspaces">Co-working Spaces</a></li>
                            <li className="nav-item"><a className="nav-link" aria-current="page" href="/private-workspaces">Conference Rooms</a></li>
                            <li className="nav-item"><a className="nav-link" aria-current="page" href="/private-workspaces">Event Spaces</a></li>
                            <li className="nav-item"><a className="nav-link" aria-current="page" href="/private-workspaces">Virtual Offices</a></li>
                            <li className="nav-item"><a className="nav-link" aria-current="page" href="/private-workspaces">Additional Services</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-3 col-md-4">
                    </div>
                </div>
            </div>
        </div>
    </header>
};