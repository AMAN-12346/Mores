"use client";
import Styles from "./ServiceCard.module.css";
import ServiceCardButton from "./ServiceCardButton";


const ServiceCard = ({name, description}) => {
    return ( 
        <div className={Styles.card}>     
            <h1 className={Styles.heading}>
                {name}
<<<<<<< HEAD
            </h1>     
            <ul className={Styles.unorderedList}>
                {description.points.map((point)=> <li className={Styles.listItem}>{point}</li> )}
            </ul>  
            <div className="flex justify-between">
                <ServiceCardButton path={description.path}/>
                <div className={Styles.iconDiv} style={{background:description.iconBackgroundColor}}>
                   <div className={Styles.imgIconDiv}>
                       <img
                        src={description.iconFile}
                        alt="Picture of the author"
                        width={57}
                        height={58}
                        className="serviceIcon"
=======
            </h1>                 
            <ul className={Styles.unorderedList}>
                {description.points.map((point)=> <li className={Styles.listItem}>{point}</li> )}
            </ul>  
            <div>
                <Link href={description.path}>
                    <ServiceCardButton buttonName={description.buttonName}/>
                </Link>                
                <div className={Styles.iconDiv} style={{background:description.iconBackgroundColor}}>
                    <div className={Styles.imgIconDiv}>
                        <img
                            src={description.iconFile}
                            alt="Picture of the author"
                            width={57}
                            height={58}
                            className="serviceIcon"
>>>>>>> de8eb3581a443a255e4057d786cdf4310b358d5d
                        />
                   </div>
                </div>
<<<<<<< HEAD
            </div>            
=======
            </div>           
>>>>>>> de8eb3581a443a255e4057d786cdf4310b358d5d
        </div>
     );
}

export default ServiceCard;