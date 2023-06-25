import text4 from '../../styles/About/Text4.module.css';
import styles from '../../styles/Service/FAQs.module.css';

export default function FAQs() {
  return (
    <>
    <section className={' position-relative'}>
        <div className="container">
            <div className='row justify-content-center align-items-end mb-4 mb-lg-5 pb-2'>
                <div className='col-md-6 col-lg-6 text-center'>
                    <div className={text4.text4 + ' ' + text4.text4Label + ' ' + text4.text4_h2fw700}>
                        <h2 className='mb-0 mb-lg-4'>FAQs</h2>
                    </div>
                </div>
            </div>


            <div className='row justify-content-center'>
                <div className='col-md-9'>
                    <div className="accordion" id="accordionPanelsStayOpenExample">
                        <div className={styles.faqItem + " accordion-item"}>
                            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                <button className={"accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                                    What are the different sizes of private workspaces?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
                                <div className={text4.text4 + ' ' + text4.text4_fszP16 + " accordion-body"}>
                                    <p><strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.faqItem + " accordion-item"}>
                            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                <button className={"accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                    How many seats do your private offices accommodate?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                <div className={text4.text4 + ' ' + text4.text4_fszP16 + " accordion-body"}>
                                    <p><strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.faqItem + " accordion-item"}>
                            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                <button className={"accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                    How many members included in my membership?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                <div className={text4.text4 + ' ' + text4.text4_fszP16 + " accordion-body"}>
                                    <p><strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.faqItem + " accordion-item"}>
                            <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                                <button className={"accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                                    How much is the deposit?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
                                <div className={text4.text4 + ' ' + text4.text4_fszP16 + " accordion-body"}>
                                    <p><strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.faqItem + " accordion-item"}>
                            <h2 className="accordion-header" id="panelsStayOpen-headingFive">
                                <button className={"accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                                    Can we bring our own furniture in our office?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFive">
                                <div className={text4.text4 + ' ' + text4.text4_fszP16 + " accordion-body"}>
                                    <p><strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.</p>
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