import Image from "next/image";
import Styles from "./Card.module.css";
import amoebaButton from '../../../../assets/ButtonIcons/amoebaButton.svg'

const Card = ({name,imageSrc}) => {
    return ( 
        <div className={Styles.card}>
            <Image src={imageSrc} 
                alt="icon" 
                width={1200} height={1200}
                className={Styles.image}
            />
            <div className="text-xl absolute bottom-9 left-7">
                <Image src={amoebaButton} 
                    alt="icon" 
                    width={200} height={72}
                />
                <p className={Styles.name}>{name}</p>
            </div>
        </div>
     );
}
 
export default Card;