import accordion from '../../styles/Service/FAQs.module.css';
import text4 from '../../styles/About/Text4.module.css';
import FAQs from '../../styles/FAQs/FAQs.module.css';

export default function FAQList() {
  return (
    <>
    <section className={FAQs.FAQsList + ' ' + ' position-relative default-pt1 default-pb'}>
        <div className={"container"}>
            <div className='row justify-content-between'>
                <div className='col-md-4 col-sm-4 col-lg-3'>
                    <div className='customTabs faqTabs'>
                        <ul className={FAQs.FAQTabs + " nav nav-tabs"} id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className={FAQs.FAQItem +  " nav-link active"} id="private-workspaces-tab" data-bs-toggle="tab" data-bs-target="#private-workspaces" type="button" role="tab" aria-controls="private-workspaces" aria-selected="true">
                                    Private Workspaces
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className={FAQs.FAQItem +  " nav-link"} id="coworking-spaces-tab" data-bs-toggle="tab" data-bs-target="#coworking-spaces" type="button" role="tab" aria-controls="coworking-spaces" aria-selected="false">
                                    Co-working Spaces
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className={FAQs.FAQItem +  " nav-link"} id="conference-tab" data-bs-toggle="tab" data-bs-target="#conference" type="button" role="tab" aria-controls="conference" aria-selected="false">
                                    Conference Rooms
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className={FAQs.FAQItem +  " nav-link"} id="event-tab" data-bs-toggle="tab" data-bs-target="#event" type="button" role="tab" aria-controls="event" aria-selected="false">
                                    Event Spaces
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className={FAQs.FAQItem +  " nav-link"} id="virtual-tab" data-bs-toggle="tab" data-bs-target="#virtual" type="button" role="tab" aria-controls="virtual" aria-selected="false">
                                    Virtual Offices
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className={FAQs.FAQItem +  " nav-link"} id="pro-tab" data-bs-toggle="tab" data-bs-target="#pro" type="button" role="tab" aria-controls="pro" aria-selected="false">
                                    PRO Management
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className={FAQs.FAQItem +  " nav-link"} id="business-tab" data-bs-toggle="tab" data-bs-target="#business" type="button" role="tab" aria-controls="business" aria-selected="false">
                                    Business Setup
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='col-md-8 col-sm-8 col-lg-8 mt-5 pt-4 mt-sm-0 pt-sm-0'>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="private-workspaces" role="tabpanel" aria-labelledby="private-workspaces-tab">
                            <div className="accordion" id="accordionPanelsStayOpenExample">
                                <div className={accordion.faqItem + " accordion-item"}>
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
                                <div className={accordion.faqItem + " accordion-item"}>
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
                                <div className={accordion.faqItem + " accordion-item"}>
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

                                <div className={accordion.faqItem + " accordion-item"}>
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

                                <div className={accordion.faqItem + " accordion-item"}>
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
                        <div className="tab-pane fade" id="coworking-spaces" role="tabpanel" aria-labelledby="coworking-spaces-tab">
                            Co-working Spaces
                        </div>
                        <div className="tab-pane fade" id="conference" role="tabpanel" aria-labelledby="conference-tab">
                            Conference Rooms
                        </div>
                        <div className="tab-pane fade" id="event" role="tabpanel" aria-labelledby="event-tab">
                            Event Spaces
                        </div>
                        <div className="tab-pane fade" id="virtual" role="tabpanel" aria-labelledby="virtual-tab">
                            Virtual Offices
                        </div>
                        <div className="tab-pane fade" id="pro" role="tabpanel" aria-labelledby="pro-tab">
                            PRO Management
                        </div>
                        <div className="tab-pane fade" id="business" role="tabpanel" aria-labelledby="business-tab">
                            Business Setup
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}