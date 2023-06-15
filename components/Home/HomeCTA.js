import rightArrow from "../../public/right-arrow.svg";
import React from "react";
import Image from 'next/image'
import Link from 'next/link';

export default function CTAText() {
    return (
    <section className='ctaText default-pt default-pb'>
        <div className="scrollingRow">
            <div className="scrollingBg">
                <h3>Office Square</h3>
            </div>
            <Link href="#" className="scrollingContent">
                <h2 className="text-center">Book A Tour</h2>
                <Image className="ms-2 ms-md-4" priority src={rightArrow} alt="Right Arrow"/>
            </Link>
        </div>
    </section>
    );
}