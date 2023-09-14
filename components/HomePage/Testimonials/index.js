"use client";
import Card from './Card/Card';
import Styles from './index.module.css';
import { useState } from 'react';
import testimonialsContent from '@/content/Testimonials/testimonials';
import useWindowWidth from '@/context/useWindowWidth';

const Testimonials = () => {
    const [list, setList] = useState(testimonialsContent);
    const windowWidth = useWindowWidth();

    return ( 
        <div className={Styles.servicesComponent}>     
            <h1 className={`text-[22px] md:text-[36px] ${Styles.heading}`}>
                Testimonials
                <hr className={Styles.underline} />
            </h1>       
            <div className={`lg:justify-center ml-7 md:ml-7 lg:ml-0 ${Styles.wrapper}`}>
                {Object.keys(list).map((listItem, index) =>
                    <Card description={list[listItem]} key={index}/>
                )}
            </div>
            {/* conditional rendering of dots for tab view */}
            {(1024 > windowWidth > 768) && 
              <div>
                <button className={Styles.dot}>.</button>
              </div>
            }
        </div>
     );
}
 
export default Testimonials;