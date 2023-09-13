import Image from "next/image";
import Styles from "./Card.module.css";

const Card = ({description}) => {
    return ( 
        <div className={`w-[75%] mx-5 md:w-[45%] md:mx-5 lg:w-[30%] ${Styles.card}`}>
            <div className={Styles.imageNameDiv}>
                <Image src={description.imageFile} 
                    alt="icon" 
                    width={60} height={60}
                    className={Styles.image}
                />
                <p className={Styles.name}>{description.name}</p>
            </div>
            <div className={Styles.storyContainer}>
                <p className={`mb-16 text-xs md:text-[13px] w-[80%] h-[24vh] m-auto mt-5 ${Styles.story}`}>
                    {description.story}
                </p>
                <div className={Styles.cityTag}>
                    From {description.city}
                    <hr className={Styles.cityUnderline} />
                </div>
            </div>
        </div>
     );
}
 
export default Card;