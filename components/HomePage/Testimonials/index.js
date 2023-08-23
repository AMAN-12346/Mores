"use client";
import Card from './Card/Card';
import Styles from './index.module.css';
import { useState } from 'react';
import testimonialsContent from '@/content/Testimonials/testimonials';

const Testimonials = () => {
    const [list, setList] = useState(testimonialsContent);
    return ( 
        <div className={Styles.servicesComponent}>     
            <h1 className={Styles.heading}>
                Testimonials
                <hr className={Styles.underline} />
            </h1>       
            <div className={Styles.wrapper}>
                {Object.keys(list).map((listItem) =>
                    <Card description={list[listItem]}/>
                )}
            </div>
        </div>
     );
}
 
export default Testimonials;