"use client";
import { useState } from "react";
import Styles from "./ServiceCardButton.module.css";


const ServiceCardButton = ({buttonName}) => {

    const [loading, setLoading] = useState(false)

    return (        
        <div className={Styles.serviceButton}>  
            <button onClick={()=> setLoading(true)}>
                {loading ? "Loading..." : buttonName}
            </button> 
        </div>                        
     );
}

export default ServiceCardButton