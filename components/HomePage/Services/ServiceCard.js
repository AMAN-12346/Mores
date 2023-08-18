"use client";
import Link from "next/link";
import Styles from "./ServiceCard.module.css";
import ServiceCardButton from "./ServiceCardButton";


const ServiceCard = ({name, description}) => {
    return ( 
        <div className={Styles.card}>     
            <h1 className={Styles.heading}>
                {name}
            </h1>     
            <ul className={Styles.unorderedList}>
                {description.points.map((point)=> <li className={Styles.listItem}>{point}</li> )}
            </ul>  
            <Link href={description.path}>
                <div className="flex justify-between">
                    <ServiceCardButton buttonName={description.buttonName}/>                
                    <div className={Styles.iconDiv} style={{background:description.iconBackgroundColor}}>
                    <div className={Styles.imgIconDiv}>
                        <img
                            src={description.iconFile}
                            alt="Picture of the author"
                            width={57}
                            height={58}
                            className="serviceIcon"
                        />
                    </div>
                    </div>
                </div>    
            </Link>        
        </div>
     );
}

export default ServiceCard;