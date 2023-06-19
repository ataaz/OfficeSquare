import styles from '../../styles/Service/Text2Cols.module.css';
import text4 from '../../styles/About/Text4.module.css';
import Link from 'next/link';

export default function Text2Cols() {
  return (
    <>
    <section className={styles.Text2Cols + ' default-pb1 default-pt1 position-relative'}>
        <div className="container">
            <div className='row'>
                <div className='col-md-5'>
                    <div className={text4.text4 + ' ' + text4.text4Label + ' ' + text4.text4_h2fw700 + ' ' + text4.posTop110px}>
                        <span><em>Why Serviced Offices</em></span>
                        <h2 className='mb-5'>A smart workspace for your company</h2>
                        <p>We are providing a space that is lockable and located within a shared office facility. Our private workspaces provide a greater control over space.</p>
                        <Link href="#" className='underlineBtn mt-3'>Find a private working space</Link>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='row'>
                        <div className='col-sm-6 mt80px'>
                            <div className={styles.col2Text + ' ' + styles.invertedCol2}>
                                <div className='col2TextChild'>
                                <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M27.5026 50.4193C40.159 50.4193 50.4193 40.159 50.4193 27.5026C50.4193 14.8461 40.159 4.58594 27.5026 4.58594C14.8461 4.58594 4.58594 14.8461 4.58594 27.5026C4.58594 40.159 14.8461 50.4193 27.5026 50.4193Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M34.375 19.4766C32.8052 17.9068 30.0408 16.8149 27.5 16.7465M27.5 16.7465C24.4771 16.6652 21.7708 18.0328 21.7708 21.7683C21.7708 28.6432 34.375 25.2057 34.375 32.0807C34.375 36.0018 31.0205 37.6866 27.5 37.5601M27.5 16.7465V12.6016M20.625 34.3724C22.1019 36.3416 24.8481 37.4648 27.5 37.5601M27.5 37.5601V42.3932" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </svg>
                                    <h3>Reduced Costs</h3>
                                    <p>Eliminate overhead costs including purchasing and moving furniture and other office accessories into your office space.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-6'>
                            <div className={styles.col2Text}>
                                <div className='col2TextChild'>
                                <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M44 23.3101C44 32.6416 27.5 48.6541 27.5 48.6541C27.5 48.6541 11 32.6416 11 23.3101C11 13.9787 18.3873 6.41406 27.5 6.41406C36.6127 6.41406 44 13.9787 44 23.3101Z" stroke="black" stroke-width="2"/> <path d="M27.4997 29.3333C31.0435 29.3333 33.9163 26.4605 33.9163 22.9167C33.9163 19.3729 31.0435 16.5 27.4997 16.5C23.9559 16.5 21.083 19.3729 21.083 22.9167C21.083 26.4605 23.9559 29.3333 27.4997 29.3333Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </svg>
                                    <h3>Prestigious Location</h3>
                                    <p>Set up in our prime business locations without having to worry about an expensive contract.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}