"use client";
import Image from 'next/image';
import Styles from "./index.module.css";

const BlogCard = ({description}) => {
    return ( 
        <div className={Styles.parentDiv}>
            <div className={Styles.imageDiv}>              
               <img src={description.imageFile} width={60} height={60} className={Styles.imageBlog} alt="blog-image"/>
            </div>
            <div className={Styles.childDiv}>
                <div className={Styles.title}>
                    {description.title}
                </div>
                <div className={Styles.storyContainer}>
                    <div className={Styles.story}>
                        {description.story}
                    </div>
                </div>
                <div>
                    <button className={Styles.button}>Read More</button>
                </div>
            </div>
        </div>
     );
}
 
export default BlogCard;