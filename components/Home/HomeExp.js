import Image from 'next/image'
import experience1 from "../../public/experience-1.jpg";
import experience2 from "../../public/experience-2.png";
import exIcon1 from "../../public/wifi.svg";
import exIcon2 from "../../public/bin-minus.svg";
import exIcon3 from "../../public/modern-tv.svg";
import exIcon4 from "../../public/fridge.svg";
import exIcon5 from "../../public/headset-help.svg";
import exIcon6 from "../../public/calendar.svg";

export default function HomeExp() {
    return <section className='ofcExp'>
    <div className='container'>
        <div className='row justify-content-between align-items-center mb-5'>
        <div className='col-md-6 col-lg-6 col-xl-4'>
            <div className='text2 text2_h2mb text2_h2mbMobile'>
            <h2>The Office Square <br className='d-block d-md-none'></br>Experience</h2>
            </div>
        </div>
        <div className='col-md-6 text-justify'>
            <div className='text1'>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis. </h4>
            </div>
        </div>
        </div>

        <div className='row rowz1'>
        <div className='col-md-8'>
            <div className='imgMagnify fullImg expImg'>
            <Image priority src={experience1} alt="Experience 1"/>
            </div>
        </div>
        <div className='col-md-4 d-none d-md-block'>
            <div className='imgMagnify fullImg expImg'>
            <Image priority src={experience2} alt="Experience 2"/>
            </div>
        </div>
        </div>
    </div>

    <div className='container KillcontainerMobile'>
        <div className='row removeLastBorder mt-5 CustomG-0'>
        <div className='col-6 col-sm-4 col-md-4 col-lg-2'>
            <div className='iconBox text-center'>
            <Image priority src={exIcon1} alt="Wifi"/>
            <span>Fast Internet</span>
            </div>
        </div>
        <div className='col-6 col-sm-4 col-md-4 col-lg-2'>
            <div className='iconBox text-center'>
            <Image priority src={exIcon2} alt="Free Coffee"/>
            <span>Free Coffee</span>
            </div>
        </div>
        <div className='col-6 col-sm-4 col-md-4 col-lg-2'>
            <div className='iconBox text-center'>
            <Image priority src={exIcon3} alt="Ergonomic Desks"/>
            <span>Ergonomic Desks</span>
            </div>
        </div>
        <div className='col-6 col-sm-4 col-md-4 col-lg-2'>
            <div className='iconBox text-center'>
            <Image priority src={exIcon4} alt="Kitchen"/>
            <span>Kitchen</span>
            </div>
        </div>
        <div className='col-6 col-sm-4 col-md-4 col-lg-2'>
            <div className='iconBox text-center'>
            <Image priority src={exIcon5} alt="Full 24/7 Access"/>
            <span>Full 24/7 Access</span>
            </div>
        </div>
        <div className='col-6 col-sm-4 col-md-4 col-lg-2'>
            <div className='iconBox text-center'>
            <Image priority src={exIcon6} alt="Events"/>
            <span>Events</span>
            </div>
        </div>
        </div>
    </div>
    </section>
};