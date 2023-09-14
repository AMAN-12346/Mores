"use client";
import { useState } from 'react';
import Styles from './index.module.css';
import OurBlogContent from '@/content/OurNewsBlog/OurNewsBlog';
import useWindowWidth from '@/context/useWindowWidth';
import NewsBlogCard from './NewsBlogCard';

const OurNewsBlog = () => {

    const [blogContent, setBlogContent] = useState(OurBlogContent);
    const windowWidth = useWindowWidth();

    return ( 
        <div>
            <div className='flex md:mb-12 my-7 lg:mt-16 justify-center md:justify-between w-[78%] m-auto'>
                <h1 className={`text-[24px] md:text-[28px] lg:text-[33px] ${Styles.heading}`}>Our News Blog</h1>
                {(windowWidth > 768) && <button className={Styles.button}>View More</button>}
            </div>
            <div className={`${Styles.cardsDiv}`}>
                {
                    Object.keys(blogContent).map((news, index)=>
                    <NewsBlogCard description={blogContent[news]} key={index}/>
                )}
            </div>
            <div className='flex lg:mb-12 my-9 lg:mt-16 justify-center md:justify-between w-[78%] m-auto'>
                {(windowWidth < 768) && <button className={Styles.button}>View More</button>}
            </div>
        </div>
     );
}
 
export default OurNewsBlog;