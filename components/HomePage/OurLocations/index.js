"use client";
import LeftRightSlideButtons from '@/utils/leftRightSlideButtons';
import Card from './Card/Card';
import Styles from './index.module.css';
import { useRef, useState } from 'react';
import OurLocationContent from '@/content/OurLocation';


const OurLocation = () => {

    const [services, setServices] = useState(OurLocationContent)
    const scrollContainerRef = useRef(null);

    //scroll function
    const scroll = (scrollOffset) => {
        console.log("-->",scrollContainerRef.current)
        scrollContainerRef.current.scrollLeft += scrollOffset;
    };


    return ( 
        <div className={Styles.servicesComponent}>     
            <h1 className={Styles.heading}>
                Our Locations
                <hr className={Styles.underline} />
            </h1>       
            <div className='my-7 flex justify-between ml-24'>
                <p className={Styles.shortPara}>
                    Extending Our Reach: Availability in Various Locations
                    Accessible Solutions Wherever You Are
                    Bringing Our Expertise to Different Geographies
                    Empowering Multiple Locations with Our Services
                    Serving You Across Diverse Areas with Dedication
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
 
export default OurLocation;