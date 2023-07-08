import text4 from '../../styles/About/Text4.module.css';
import styles from '../../styles/Service/FAQs.module.css';

export default function FAQs(props) {
    const FAQList= props.faqs?.map((el,i)=> <div className={styles.faqItem + " accordion-item"} key={i}>
        <h2 className="accordion-header" id={"panelsStayOpen-heading" + i}>
            <button className={"accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target={"#panelsStayOpen-collapse" + i} aria-expanded="false" aria-controls={"panelsStayOpen-collapse" + i} data-bs-parent="accordionPanelsStayOpenExample">{el.question}</button>
        </h2>
        <div id={"panelsStayOpen-collapse" + i} className="accordion-collapse collapse" aria-labelledby={"panelsStayOpen-heading" + i}>
            <div className={text4.text4 + ' ' + text4.text4_fszP16 + " accordion-body"} dangerouslySetInnerHTML={{__html: el.answer}}>
            </div>
        </div>
    </div>
    );
  return (
    <>
    <section className={' position-relative'}>
        <div className="container">
            <div className='row justify-content-center align-items-end mb-4 mb-lg-5 pb-2'>
                <div className='col-md-6 col-lg-6 text-center'>
                    <div className={text4.text4 + ' ' + text4.text4Label + ' ' + text4.text4_h2fw700}>
                        <h2 className='mb-0 mb-lg-4'>{props.heading ? props.heading : 'FAQs'}</h2>
                    </div>
                </div>
            </div>


            <div className='row justify-content-center'>
                <div className='col-md-9'>
                    <div className="accordion" id="accordionPanelsStayOpenExample">
                        {FAQList}
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}