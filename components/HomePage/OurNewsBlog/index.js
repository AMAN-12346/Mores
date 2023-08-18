"use client";
import { useState } from 'react';
import Styles from './index.module.css';
import OurBlogContent from '@/content/OurNewsBlog/OurNewsBlog';
import BlogCard from './BlogCard.js';

const OurNewsBlog = () => {

    const [blogContent, setBlogContent] = useState(OurBlogContent);
    return ( 
        <div>
            <div className='flex mb-12 mt-16 justify-between w-[78%] m-auto'>
                <h1 className={Styles.heading}>Our News Blog</h1>
                <button className={Styles.button}>View More</button>
            </div>
            <div className='flex mb-20 justify-between w-[78%] m-auto'>
                {
                    Object.keys(blogContent).map((news)=>
                    <BlogCard description={blogContent[news]}/>
                )}
            </div>
        </div>
     );
}
 
export default OurNewsBlog;