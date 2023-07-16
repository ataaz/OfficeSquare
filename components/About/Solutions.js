import Image from 'next/image';
import text4 from '../../styles/About/Text4.module.css';
import Link from 'next/link';
import styles from '../../styles/About/Solutions.module.css';

export default function SolutionsAbout(props) {
    const solutionsList= props.solutions?.map((el,i)=> <div className='col-md-4 col-sm-6 mb-5' key={i}>
        <div className={styles.col3}>
            <div className='fullImg imgMagnify'>
                <Image src={el.image.url} alt={el.image.alt} width="416" height="520"/>
            </div>
            <div className={styles.col3Text}>
                <div className='textBelow'>
                    <div dangerouslySetInnerHTML={{__html: el.content}}></div>
                    <Link href={el.link.url}>{el.link.title}</Link>
                </div>
            </div>
        </div>
    </div>
    );
  return (
    <>
    <section className={styles.solutionsAbout + ' default-pb1 default-pt position-relative solutionsAboutSec'}>
        <div className="container">
            <div className='row justify-content-between align-items-end mb-2 mb-sm-4 pb-md-5'>
                <div className='col-md-6 col-lg-5 mb-4 mb-md-0 pb-1 pb-md-0'>
                    <div className={text4.text4 + ' ' + text4.text4Label + ' ' + text4.text4_h2fw700}>
                        <span><em>{props.label}</em></span>
                        <h2 className='mb-0'>{props.heading}</h2>
                    </div>
                </div>
                <div className='col-md-5'>
                    <div className="text1">
                        <h5>{props.solutions_content}</h5>
                    </div>
                </div>
          </div>

          <div className='row'>
                {solutionsList}
          </div>
        </div>
    </section>
    </>
  );
}