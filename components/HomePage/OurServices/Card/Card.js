import Image from "next/image";
import Styles from "./Card.module.css";
import amoebaButton from '../../../../assets/ButtonIcons/amoebaButton.svg'
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";


const Card = ({name,imageSrc}) => {

    const [loading, setLoading] = useState(false);
    const [propertyList, setPropertyList] = useState();
    const router = useRouter();

    const handleClick = async() => {
        try{
            setLoading(true);
            const {data} = await axios.get(`property/PropertyType_SubtypeList`);

            if(data){
                setPropertyList(data?.result);
                console.log("it is ", propertyList , "data ==>", data) 
                router.push({
                    pathname: "/SearchResultPage",
                    query: { data: JSON.stringify(data.result) },
                  });           
            } 
            setLoading(false); 
            return;         
        }catch(err){
            console.log("Error ->", err);
            setLoading(false);
        }
    }

    return ( 
        <div className={`cursor-default w-[85%] md:w-[50%] lg:w-[32%] h-[280px] md:h-[310px] lg:h-[330px] ${Styles.card} mr-5`}>
            <Image src={imageSrc} 
                alt="icon" 
                width={2000} height={1200}
                className={Styles.image}
            />
            <div className="text-[14px] md:text-[16px] font-semibold absolute bottom-5 left-5" onClick={handleClick}>
                <Image src={amoebaButton} 
                    alt="icon" 
                    width={200} height={72}
                    className="w-[160px] md:w-[160px]"
                />
                <p className={Styles.name}>{loading ? "Wait..." : name}</p>
                
            </div>
        </div>
     );
}
 
export default Card;