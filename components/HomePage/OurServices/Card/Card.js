import Image from "next/image";
import Styles from "./Card.module.css";
import amoebaButton from '../../../../assets/ButtonIcons/amoebaButton.svg'
import axios from "axios";
import { useState } from "react";

const Card = ({name,imageSrc}) => {

    const [loading, setLoading] = useState(false);
    const [propertyList, setPropertyList] = useState();

    const handleClick = async() => {
        try{
            setLoading(true);
            const {data} = await axios.get(`property/PropertyType_SubtypeList`);

            if(data){
                setPropertyList(data?.result);
                console.log("it is ", propertyList , "data ==>", data)            
            } 
            setLoading(false); 
            return;         
        }catch(err){
            console.log("Error ->", err);
            setLoading(false);
        }
    }

    return ( 
        <div className={`cursor-default w-[85%] md:w-[60%] lg:w-[36%] h-[320px] md:h-[469px] ${Styles.card} mr-5`}>
            <Image src={imageSrc} 
                alt="icon" 
                width={2000} height={1200}
                className={Styles.image}
            />
            <div className="text-lg md:text-xl md:font-semibold absolute bottom-9 left-7" onClick={handleClick}>
                <Image src={amoebaButton} 
                    alt="icon" 
                    width={200} height={72}
                    className="w-[160px] md:w-[200px]"
                />
                <p className={Styles.name}>{loading ? "Wait..." : name}</p>
            </div>
        </div>
     );
}
 
export default Card;