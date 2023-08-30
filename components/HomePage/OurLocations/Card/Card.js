import Image from "next/image";
import Styles from "./Card.module.css";
import amoebaButton from '../../../../assets/ButtonIcons/amoebaButton.svg'
import { useEffect } from "react";

const Card = ({name,imageSrc}) => {

    useEffect(()=>{
        window.scrollTo(0,0)
    }, [])

    return ( 
        <div className={`cursor-default w-[100%] md:w-[60%] lg:w-[36%] ${Styles.card} mr-5`}>
            <Image src={imageSrc} 
                alt="icon" 
                width={1200} height={1200}
                className={Styles.image}
            />
            <div className="text-lg md:text-xl md:font-semibold absolute bottom-9 left-7">
                <Image src={amoebaButton} 
                    alt="icon" 
                    width={200} height={72}
                    className="w-[160px] md:w-[200px]"
                />
                <p className={Styles.name}>{name}</p>
            </div>
        </div>
     );
}
 
export default Card;