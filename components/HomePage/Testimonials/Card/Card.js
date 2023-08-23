import Image from "next/image";
import Styles from "./Card.module.css";

const Card = ({description}) => {
    return ( 
        <div className={Styles.card}>
            <div className={Styles.imageNameDiv}>
                <Image src={description.imageFile} 
                    alt="icon" 
                    width={60} height={60}
                    className={Styles.image}
                />
                <p className={Styles.name}>{description.name}</p>
            </div>
            <div className={Styles.storyContainer}>
                <p className={`mb-10 text-sm w-[80%] m-auto mt-5 ${Styles.story}`}>
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