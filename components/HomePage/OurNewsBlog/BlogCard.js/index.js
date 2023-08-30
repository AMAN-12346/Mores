"use client";
import Image from "next/image";
import Styles from "./index.module.css";

const BlogCard = ({description}) => {
    return ( 
        <div className={Styles.parentDiv}>
            <div className={Styles.imageDiv}>              
               <Image src={description.imageFile} alt="blog-image" width={60} height={60} className={Styles.imageBlog}/>
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