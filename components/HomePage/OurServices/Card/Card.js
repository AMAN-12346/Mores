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
                setPropertyList(data);     
                console.log("it is ", propertyList)            
            } 
            setLoading(false); 
            return;         
        }catch(err){
            console.log("Error ->", err);
            setLoading(false);
        }
    }

    return ( 
        <div className={`cursor-default ${Styles.card}`}>
            <Image src={imageSrc} 
                alt="icon" 
                width={2000} height={1200}
                className={Styles.image}
            />
            <div className="text-xl absolute bottom-9 left-7" onClick={handleClick}>
                <Image src={amoebaButton} 
                    alt="icon" 
                    width={200} height={72}
                />
                <p className={Styles.name}>{loading ? "Wait..." : name}</p>
            </div>
        </div>
     );
}
 
export default Card;