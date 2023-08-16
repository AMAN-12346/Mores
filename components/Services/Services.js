"use client";
import { useState } from "react";
import ServiceCard from "./ServiceCard";
import Styles from "./Services.module.css";
import serviceContent from '../../content/serviceContent.jsx';


const Services = () => {
    const [serviceList, setServiceList] = useState(serviceContent)
    return ( 
        <div className={Styles.servicesComponent}>     
            <h1 className={Styles.heading}>
                Everything you Need at One Place
                <hr className={Styles.underline} />
            </h1>       
            <div className={Styles.wrapper}>
            {Object.keys(serviceList).map((service) =>
                <ServiceCard name={service} description={serviceList[service]}/>
            )}
            </div>
        </div>
     );
}

export default Services;