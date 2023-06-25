import Image from 'next/image';
import styles from '../../styles/Service/Amenities.module.css';
import text4 from '../../styles/About/Text4.module.css';
import Link from 'next/link';
import Benefit1 from '../../images/benefit-1.jpg'

export default function Amenities() {
  return (
    <>
    <section className={styles.Text2Cols + ' default-pt1 default-pb1 position-relative bgf6f6f6'}>
        <div className="container mb-4 pb-2 mb-xl-5 pb-xl-5">
            <div className='row'>
                <div className='col-sm-10 col-lg-7 col-xl-6'>
                    <div className={text4.text4 + ' ' + text4.text4Label + ' ' + text4.bgf6f6f6Label}>
                        <span><em>Included Amenities</em></span>
                        <h2 className='mb-0'>We provide more than just a space</h2>
                    </div>
                </div>
            </div>
        </div>

        <div className='container'>
            <div className='AmenitiesRow row'>
                <div className='col-md-4 col-6'>
                    <div className={styles.whiteBox}>
                    <div className='col2TextChild'>
                    <svg width="52" height="54" viewBox="0 0 52 54" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M26 43.897L26.0191 43.875" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/> <path d="M4.33594 18C17.3359 7.875 34.6693 7.875 47.6693 18" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/> <path d="M10.8359 27C19.5026 20.25 32.5026 20.25 41.1693 27" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/> <path d="M18.4141 34.8707C23.2899 31.7207 28.7053 31.7197 33.5809 34.8707" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/> </svg>
                        <h3>Free Internet</h3>
                        <p>Providing free and fast internet for unlimited devices present in your office for the grind.</p>
                    </div>
                    </div>
                </div>

                <div className='col-md-4 col-6'>
                    <div className={styles.whiteBox}>
                    <div className='col2TextChild'>
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M4.16406 33.3307V16.6641C4.16406 9.7605 9.7605 4.16406 16.6641 4.16406H33.3307C40.2343 4.16406 45.8307 9.7605 45.8307 16.6641V33.3307C45.8307 40.2343 40.2343 45.8307 33.3307 45.8307H16.6641C9.7605 45.8307 4.16406 40.2343 4.16406 33.3307Z" stroke="black" stroke-width="2"/> <path d="M12.5 27.0833V22.9167C12.5 20.6155 14.3655 18.75 16.6667 18.75H22.9167C25.2179 18.75 27.0833 20.6155 27.0833 22.9167V27.0833C27.0833 29.3846 25.2179 31.25 22.9167 31.25H16.6667C14.3655 31.25 12.5 29.3846 12.5 27.0833Z" stroke="black" stroke-width="2"/> <path d="M35.4981 19.2054L29.1094 23.9971C28.4427 24.4971 28.4427 25.4971 29.1094 25.9971L35.4981 30.7887C36.3223 31.4069 37.4981 30.8187 37.4981 29.7887V20.2054C37.4981 19.1753 36.3223 18.5874 35.4981 19.2054Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </svg>
                        <h3>Security</h3>
                        <p>Surveillance cameras installed all around our offices and even outside to guarantee safety and security</p>
                    </div>
                    </div>
                </div>

                <div className='col-md-4 col-6'>
                    <div className={styles.whiteBox}>
                    <div className='col2TextChild'>
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M20.8359 32.2943V26.4609M20.8359 26.4609C21.828 26.4609 24.4074 26.4609 26.7882 26.4609C28.2764 26.4609 31.2526 26.4609 31.2526 22.0859C31.2526 17.7109 28.2764 17.7109 26.7882 17.7109H20.8359V26.4609Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M24.9974 45.8307C36.5033 45.8307 45.8307 36.5033 45.8307 24.9974C45.8307 13.4915 36.5033 4.16406 24.9974 4.16406C13.4915 4.16406 4.16406 13.4915 4.16406 24.9974C4.16406 36.5033 13.4915 45.8307 24.9974 45.8307Z" stroke="black" stroke-width="2"/> </svg>
                        <h3>Car Parking</h3>
                        <p>We provide convenient on-site parking facilities to ensure hassle-free access for you and your team.</p>
                    </div>
                    </div>
                </div>

                <div className='col-md-4 col-6'>
                    <div className={styles.whiteBox}>
                    <div className='col2TextChild'>
                    <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M27.5026 50.4193C40.159 50.4193 50.4193 40.159 50.4193 27.5026C50.4193 14.8461 40.159 4.58594 27.5026 4.58594C14.8461 4.58594 4.58594 14.8461 4.58594 27.5026C4.58594 40.159 14.8461 50.4193 27.5026 50.4193Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M34.375 19.4766C32.8052 17.9068 30.0408 16.8149 27.5 16.7465M27.5 16.7465C24.4771 16.6652 21.7708 18.0328 21.7708 21.7683C21.7708 28.6432 34.375 25.2057 34.375 32.0807C34.375 36.0018 31.0205 37.6866 27.5 37.5601M27.5 16.7465V12.6016M20.625 34.3724C22.1019 36.3416 24.8481 37.4648 27.5 37.5601M27.5 37.5601V42.3932" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </svg>
                        <h3>Convenient Payments</h3>
                        <p>Bringing the most convenient payment plans and methods for your ease and comfort.</p>
                    </div>
                    </div>
                </div>

                <div className='col-md-4 col-6'>
                    <div className={styles.whiteBox}>
                    <div className='col2TextChild'>
                    <svg width="60" height="54" viewBox="0 0 60 54" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M50 24.75C50 14.8089 41.0458 6.75 30 6.75C18.9543 6.75 10 14.8089 10 24.75" stroke="black" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/> <path d="M5 34.733V30.5102C5 28.4451 6.56148 26.6454 8.78733 26.1445L13.1362 25.166C14.0829 24.9529 15 25.5973 15 26.4757V38.7675C15 39.6459 14.0829 40.2903 13.1362 40.0772L8.78733 39.0987C6.56148 38.5978 5 36.798 5 34.733Z" stroke="black" stroke-width="2.3"/> <path d="M55 34.733V30.5102C55 28.4451 53.4385 26.6454 51.2127 26.1445L46.8638 25.166C45.917 24.9529 45 25.5973 45 26.4757V38.7675C45 39.6459 45.917 40.2903 46.8638 40.0772L51.2127 39.0987C53.4385 38.5978 55 36.798 55 34.733Z" stroke="black" stroke-width="2.3"/> <path d="M50 40.5V41.625C50 44.1103 47.7615 46.125 45 46.125H36.25" stroke="black" stroke-width="2.3"/> <path d="M33.75 49.5H26.25C24.1789 49.5 22.5 47.9889 22.5 46.125C22.5 44.2611 24.1789 42.75 26.25 42.75H33.75C35.821 42.75 37.5 44.2611 37.5 46.125C37.5 47.9889 35.821 49.5 33.75 49.5Z" stroke="black" stroke-width="2.3"/> </svg>
                        <h3>Personalized Support</h3>
                        <p>Our team is available 24/7 to provide you with the support you need.</p>
                    </div>
                    </div>
                </div>

                <div className='col-md-4 col-6'>
                    <div className={styles.whiteBox}>
                    <div className='col2TextChild'>
                        <svg width="47" height="60" viewBox="0 0 47 60" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M20.4791 33.7864L24.6114 34.9276C25.176 35.0835 25.7591 34.7525 25.9149 34.1882L32.769 9.36894C33.2356 7.67923 32.2408 5.92512 30.551 5.45846C28.8145 4.97892 27.0605 5.9738 26.5938 7.6636L19.7397 32.4829C19.584 33.0467 19.9146 33.6301 20.4792 33.786L20.4791 33.7864ZM24.1542 32.6027L22.0647 32.0257L28.6367 8.22787C28.7922 7.66474 29.3767 7.33287 29.9402 7.4885C30.5508 7.65711 30.8818 8.24175 30.7263 8.80492L24.1542 32.6027Z" fill="black"/> <path d="M16.1812 38.1623L26.0486 40.8873C26.4068 40.9862 26.7894 40.8901 27.0597 40.635C27.3289 40.3792 27.4451 40.0018 27.3658 39.639C26.7639 36.8937 27.7193 34.9387 27.729 34.9194C27.8759 34.6358 27.887 34.3011 27.7586 34.0081C27.6312 33.7157 27.3783 33.4964 27.0701 33.4113L19.1415 31.2217C18.8332 31.1366 18.5036 31.1955 18.2443 31.3806C17.9852 31.5651 17.8233 31.8553 17.8024 32.1721C17.7981 32.2267 17.6034 34.3816 15.6913 36.4149C15.4371 36.6856 15.3432 37.0692 15.443 37.4269C15.5425 37.7841 15.823 38.0633 16.1809 38.1622L16.1812 38.1623ZM25.0641 38.4168L18.2943 36.5473C19.0581 35.4216 19.465 34.3526 19.6795 33.5685L25.4037 35.1493C25.1855 35.9323 24.9861 37.0587 25.0641 38.4168Z" fill="black"/> <path d="M16.9548 54.4709C27.0102 56.8957 34.7905 52.1754 35.1168 51.9733C35.4315 51.7779 35.6214 51.4324 35.6176 51.0622C35.6147 50.6913 35.4172 50.3497 35.0989 50.1609C30.8175 47.6233 28.0907 42.9276 27.3694 39.639C27.2846 39.2547 26.9952 38.9496 26.6162 38.8449L16.7489 36.1199C16.3699 36.0153 15.9649 36.1287 15.6949 36.415C13.388 38.8673 8.63786 41.4982 3.66115 41.4791C3.29109 41.4777 2.94623 41.6696 2.75349 41.9864C2.55983 42.3021 2.54543 42.6965 2.7165 43.0256C2.89269 43.3665 7.14788 51.4106 16.9555 54.4711L16.9548 54.4709ZM32.4682 50.9447C29.8524 52.1131 24.1638 54.0302 17.5186 52.4292C11.0197 50.3992 7.14525 45.8443 5.51081 43.5017C10.1278 43.0119 14.3051 40.7185 16.7828 38.3277L25.4534 40.7222C26.3526 44.0443 28.7592 48.1539 32.4683 50.9446L32.4682 50.9447Z" fill="black"/> <path d="M16.9829 54.4868C17.5476 54.6427 18.1306 54.3117 18.2865 53.7474L19.9972 47.5527C20.153 46.9885 19.8225 46.4051 19.2578 46.2492C18.6932 46.0932 18.1101 46.4242 17.9543 46.9885L16.2436 53.1832C16.0878 53.7475 16.4183 54.3308 16.9829 54.4868Z" fill="black"/> <path d="M10.2798 50.6962C10.6888 50.8092 11.1433 50.6679 11.4125 50.3068L15.0132 45.4666C15.3619 44.9967 15.2652 44.3332 14.7947 43.9839C14.3289 43.6332 13.6627 43.7323 13.3123 44.2014L9.7116 49.0416C9.36293 49.5115 9.45961 50.175 9.93014 50.5243C10.0374 50.6049 10.1572 50.6623 10.2798 50.6962Z" fill="black"/> <path d="M24.7036 54.8403C24.8262 54.8742 24.9581 54.8863 25.0929 54.8729C25.675 54.8139 26.0989 54.2942 26.0403 53.7122L25.417 47.5527C25.3577 46.9706 24.8397 46.5448 24.2553 46.6051C23.6732 46.6641 23.2494 47.1838 23.3079 47.7658L23.9312 53.9253C23.977 54.3729 24.2946 54.7274 24.7036 54.8403Z" fill="black"/> </svg>
                        <h3>Cleaning</h3>
                        <p>We ensure the offices are pristine and professional for your business.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}