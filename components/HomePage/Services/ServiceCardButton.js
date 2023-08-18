"use client";
import Styles from "./ServiceCardButton.module.css";


const ServiceCardButton = ({path, buttonName}) => {
    return (        
        <div className={Styles.serviceButton}>  
                <button>{buttonName}</button> 
        </div>                        
     );
}

export default ServiceCardButton