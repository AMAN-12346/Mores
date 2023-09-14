"use client";
import LeftRightSlideButtons from '@/utils/leftRightSlideButtons';
import Card from './Card/Card';
import Styles from './index.module.css';
import { useRef, useState } from 'react';
import OurLocationContent from '@/content/OurLocation';
import useWindowWidth from '@/context/useWindowWidth';


const OurLocation = () => {

    const [services, setServices] = useState(OurLocationContent)
    const scrollContainerRef = useRef(null);
    const windowWidth = useWindowWidth();

    //scroll function
    const scroll = (scrollOffset) => {
        scrollContainerRef.current.scrollLeft += scrollOffset;
        console.log("------", window)
    };

    return ( 
        <div className={`text-center md:text-left ${Styles.servicesComponent}`}>     
            <h1 className={Styles.heading}>
                Our Locations
                <hr className={`m-auto md:m-0 ${Styles.underline}`} />
            </h1>       
            <div className='my-7 flex justify-center md:justify-between ml-[8%]'>
                <p className={`w-[100%] md:w-[50%] lg:w-[55%] ${Styles.shortPara}`}>
                    Extending Our Reach: Availability in Various Locations
                    Accessible Solutions Wherever You Are
                    Bringing Our Expertise to Different Geographies
                    Empowering Multiple Locations with Our Services
                    Serving You Across Diverse Areas with Dedication
                </p>
                
                {(windowWidth > 768) && <LeftRightSlideButtons leftFunction={() => scroll(-400)} rightFunction={() => scroll(+400)} />}              
                
            </div>
            <div className='relative'>
                {(windowWidth < 768) && <LeftRightSlideButtons leftFunction={() => scroll(-400)} rightFunction={() => scroll(+400)} className={Styles.buttonArrangement} />}
                <div className={Styles.wrapper} ref={scrollContainerRef}> 
                    {Object.keys(services).map((service, index)=>
                        <Card name={service} imageSrc={services[service]} key={index}/>
                    )}
                </div>
            </div>
        </div>
     );
}
 
export default OurLocation;