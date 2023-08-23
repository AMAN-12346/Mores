import Image from "next/image";
import Styles from "./card.module.css";

const Card = ({name, description}) => {
    return ( 
        <div className={Styles.card}>
            <div className={Styles.imageDiv}>
                <Image src={description.icon} 
                    alt="icon" 
                    width={50} height={50}
                    className="absolute top-[22%] left-[22%]"
                />
            </div>
            <h1 className="font-semibold text-xl my-5">{name}</h1>
            <p className="mb-10 text-sm w-[80%] m-auto text-gray-500">{description.label}</p>
        </div>
     );
}
 
export default Card;