"use client";
import LeftRightSlideButtons from '@/utils/leftRightSlideButtons';
import Card from './Card/Card';
import Styles from './index.module.css';
import { useRef, useState } from 'react';
import OurServiceContent from '@/content/OurServices';
import useWindowWidth from '@/context/useWindowWidth';

const OurServices = () => {

    const [services, setServices] = useState(OurServiceContent)
    const scrollContainerRef = useRef(null);
    const windowWidth = useWindowWidth()

    //scroll function
    const scroll = (scrollOffset) => {
        console.log("-->",scrollContainerRef.current)
        scrollContainerRef.current.scrollLeft += scrollOffset;
    };


    return ( 
        <div className={`text-center md:text-left ${Styles.servicesComponent}`}>     
            <h1 className={Styles.heading}>
                Our Services
                <hr className={`m-auto md:m-0 ${Styles.underline}`} />
            </h1>       
            <div className='my-2 md:my-7 flex justify-center md:justify-between ml-[8%]'>
                <p className={`w-[100%] md:w-[60%] lg:w-[55%] ${Styles.shortPara}`}>
                    Empowering You with Our Diverse Services
                    Your Solutions, Our Expertise
                    Unveiling a Spectrum of Offerings
                    Customized to Meet Your Unique Demands
                </p>
                {(windowWidth > 768) && <LeftRightSlideButtons leftFunction={() => scroll(-400)} rightFunction={() => scroll(+400)} />}
            </div>
            <div className={Styles.wrapper} ref={scrollContainerRef}>
                {Object.keys(services).map((service)=>
                    <Card name={service} imageSrc={services[service]} />
                )}
            </div>
            <div className='w-[100vw]'>
                <button className={Styles.exploreAll}>Explore All</button>
            </div>
        </div>
     );
}
 
export default OurServices;