import rightArrow from "../../images/right-arrow.svg";
import React from "react";
import Image from 'next/image'
import Link from 'next/link';
import { useLocomotiveScroll } from 'react-locomotive-scroll'

export default function CTAText() {
    const { scroll } = useLocomotiveScroll()
    return (
    <section className='ctaText default-pt default-pb' data-scroll-container>
        <div className="scrollingRow">
            <div className="scrollingBg">
                <h3>Office Square</h3>
            </div>
            <Link href="/contact-us" className="scrollingContent">
                <h2 className="text-center">Book A Tour</h2>
                <Image className="ms-2 ms-md-4" priority src={rightArrow} alt="Right Arrow"/>
            </Link>
        </div>
    </section>
    );
}