import Image from 'next/image'
import experience1 from "../../images/experience-1.jpg";
import experience2 from "../../images/experience-2.png";
import exIcon1 from "../../images/wifi.svg";
import exIcon2 from "../../images/bin-minus.svg";
import exIcon3 from "../../images/modern-tv.svg";
import exIcon4 from "../../images/fridge.svg";
import exIcon5 from "../../images/headset-help.svg";
import exIcon6 from "../../images/calendar.svg";
import { useLocomotiveScroll } from 'react-locomotive-scroll'

export default function HomeExp(props) {
    const { scroll } = useLocomotiveScroll()
    const expList= props.exp?.map((el,i)=> <div className='col-6 col-sm-4 col-md-4 col-lg-2' key={i}>
        <div className='iconBox text-center'>
        <Image src={el.icon?.url} alt={el.icon?.alt} width={1} height={1}/>
        <span>{el.name}</span>
        </div>
    </div>
    )
    return <section className='ofcExp'>
    <div className='container'>
        <div className='row justify-content-between align-items-center mb-5'>
        <div className='col-md-6 col-lg-6 col-xl-4'>
            <div className='text2 text2_h2mb text2_h2mbMobile'>
            <h2 dangerouslySetInnerHTML={{__html: props.heading}}></h2>
            </div>
        </div>
        <div className='col-md-5 text-justify'>
            <div className='text1'>
            <h4 dangerouslySetInnerHTML={{__html: props.content}}></h4>
            </div>
        </div>
        </div>

        <div className='row rowz1'>
        <div className='col-md-8'>
            <div className='imgMagnify fullImg expImg'>
            <Image priority src={props.image1?.url} alt={props.image1?.alt} width={841} height={570}/>
            </div>
        </div>
        <div className='col-md-4 d-none d-md-block'>
            <div className='imgMagnify fullImg expImg'>
            <Image priority src={props.image2?.url} alt={props.image2?.alt} width={385} height={570}/>
            </div>
        </div>
        </div>
    </div>

    <div className='container KillcontainerMobile'>
        <div className='row removeLastBorder mt-5 CustomG-0'>
            {expList}
        </div>
    </div>
    </section>
};