"use client";
import whyChooseUsContent from '@/content/WhyChooseUse/whyChooseUs';
import Card from './Card/card';
import Styles from './index.module.css';
import { useState } from 'react';

const WhyChooseUs = () => {
    const [list, setList] = useState(whyChooseUsContent);
    return ( 
        <div className={`${Styles.container}`}>
            <div>
                <h1 className='text-white normal font-semibold text-center text-xl md:text-3xl lg:text-[30px] pt-[20px] lg:pt-[50px]'>
                  Why Choose Us
                  <hr className={Styles.underline}/>
                </h1>
                <p className='w-[300px] md:w-[490px] lg:w-[600px] text-center m-auto text-white text-[11px] md:text-[12px] lg:text-[14px] mt-5'> 
                Taking the time to truly understand our customer’s needs and then make sure they consistently get that is what makes us different
                </p>
            </div>
            <div className={`flex mt-12 pb-16 w-[100%] justify-evenly text-center px-12 ${Styles.cardsDiv}`}>
                {Object.keys(list).map((item) =>
                   <Card name={item} description={list[item]}/>
                )}
            </div>
        </div>
     );
}
 
export default WhyChooseUs;