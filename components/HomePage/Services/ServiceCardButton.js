"use client";
import Link from "next/link";
import Styles from "./ServiceCardButton.module.css";


const ServiceCardButton = ({path}) => {
    return ( 
        <div className={Styles.serviceButton}>  
            <Link href={path}>
                <button>Create Now</button>  
            </Link>             
        </div>
     );
}

export default ServiceCardButton