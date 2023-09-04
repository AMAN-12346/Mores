"use client";
import LeftRightSlideButtons from '@/utils/leftRightSlideButtons';
import Card from './Card/Card';
import Styles from './index.module.css';
import { useRef, useState } from 'react';
import OurServiceContent from '@/content/OurServices';

const OurServices = () => {

    const [services, setServices] = useState(OurServiceContent)
    const scrollContainerRef = useRef(null);

    //scroll function
    const scroll = (scrollOffset) => {
        // console.log("-->",scrollContainerRef.current)
        scrollContainerRef.current.scrollLeft += scrollOffset;
    };


    return ( 
        <div className={Styles.servicesComponent}>     
            <h1 className={Styles.heading}>
                Our Services
                <hr className={Styles.underline} />
            </h1>       
            <div className='my-7 flex justify-between ml-24'>
                <p className={Styles.shortPara}>
                    Empowering You with Our Diverse Services
                    Your Solutions, Our Expertise
                    Unveiling a Spectrum of Offerings
                    Customized to Meet Your Unique Demands
                </p>
                <LeftRightSlideButtons leftFunction={() => scroll(-400)} rightFunction={() => scroll(+400)} />
            </div>
            <div className={Styles.wrapper} ref={scrollContainerRef}>
                {Object.keys(services).map((service)=>
                    <Card name={service} imageSrc={services[service]} />
                )}
            </div>
        </div>
     );
}
 
export default OurServices;