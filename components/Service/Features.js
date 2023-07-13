import Image from 'next/image';
import styles from '../../styles/Service/Features1.module.css';
import text4 from '../../styles/About/Text4.module.css';

export default function Features(props) {
    const FeaturesList1= props.features1?.map((el,i)=> i == '0' ?
    <div className='col-md-3 col-6 order-2 order-md-1 mb-4 mb-md-0' key={i}>
        <div className='fullImg imgMagnify featureImgBox'>
            <Image src={el.image?.url} alt={el.image?.alt} width={306} height={210}/>
            <span>{el.image_label}</span>
        </div>
    </div> : null + 
    i == '1' ?
    <div className='col-md-5 order-1 order-md-2' key={i}>
        <div className={text4.text4 + ' ' + text4.text4Label + ' ' + text4.text4_fszP16  + ' ' + text4.Hidetext4Label + ' text-center'}>
            <span className='ps-0'><em className='ps-0'>{el.content_label}</em></span>
            <h2 className='mb-5 mb-md-0'>{el.content_heading}</h2>
        </div>
    </div> : null + 
    i == '2' ?
    <div className='col-md-3 col-6 order-3 order-md-3 mb-4 mb-md-0' key={i}>
        <div className='fullImg imgMagnify featureImgBox featureImgBoxLeft'>
            <Image src={el.image?.url} alt={el.image?.alt} width={306} height={210}/>
            <span>{el.image_label}</span>
        </div>
    </div> : null
    );
    const FeaturesList2= props.features2?.map((el,i)=> i == '3' ?
    <div key={i} className='col-md-3 col-6 col-lg-4 col-xl-3 align-self-start mb-4 mb-md-0'>
        <div className='fullImg imgMagnify featureImgBox'>
            <Image src={el.image?.url} alt={el.image?.alt} width={306} height={210}/>
            <span>{el.image_label}</span>
        </div>
    </div> : null + 
    i == '4' ?
    <div key={i} className='col-md-6 col-6 col-lg-4 col-xl-6 mb-4 mb-md-0'>
        <div className='fullImg imgMagnify featureImgBox'>
            <Image src={el.image?.url} alt={el.image?.alt} width={636} height={398}/>
            <span>{el.image_label}</span>
        </div>
    </div> : null + 
    i == '5' ?
    <div key={i} className='col-md-2 col-6 col-lg-4 col-xl-2 align-self-center'>
        <div className='fullImg imgMagnify featureImgBox'>
            <Image src={el.image?.url} alt={el.image?.alt} width={196} height={135}/>
            <span>{el.image_label}</span>
        </div>
    </div> : null
    );
  return (
    <>
    <section className={styles.FeaturesOne + ' default-pt0 default-pb2 position-relative'}>
        <div className="container">
            <div className='row align-items-center default-pb2 removeMobile-default-pb2 Add-default-pb2-in768px justify-content-between'>
                {FeaturesList1}
            </div>

            <div className='row default-pb2 justify-content-between removeMobile-default-pb2'>
                {FeaturesList2}
            </div>
        </div>
    </section>
    </>
  );
}