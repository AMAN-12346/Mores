"use client";
import Link from "next/link";
import Styles from "./ServiceCard.module.css";
import ServiceCardButton from "./ServiceCardButton";
import Image from "next/image";


const ServiceCard = ({name, description}) => {
    return ( 
        <div className={Styles.card}>     
            <h1 className={Styles.heading}>
                {name}
            </h1>                 
            <ul className={Styles.unorderedList}>
                {description.points.map((point, index)=> <li className={Styles.listItem} key={index}>{point}</li> )}
            </ul>  
            <div>
                <Link href={description.path}>
                    <ServiceCardButton buttonName={description.buttonName}/>
                </Link>                
                <div className={Styles.iconDiv} style={{background:description.iconBackgroundColor}}>
                    <div className={Styles.imgIconDiv}>
                        <Image
                            src={description.iconFile}
                            alt="Picture of the author"
                            width={57}
                            height={58}
                            className="serviceIcon"
                        />
                    </div>
                </div>
            </div>           
        </div>
     );
}

export default ServiceCard;