'use client'
import Styles from "./FeaturedProperties.module.css";
import { useState, useEffect } from "react";
import FeaturedSectionCard from "./FeaturedSectionCard";
import SlideSwiper from "./SlideSwiper";
const FeaturedSection=({data})=>{
  const [isLargeScreen, setIsLargeScreen] = useState(false)
  useEffect(() => {
    const handleResize = () => {
        setIsLargeScreen(window.innerWidth > 1008);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
        window.removeEventListener('resize', handleResize);
    };
}, []);
    return(
      <>
      {
        !isLargeScreen? (
          <div>
            <SlideSwiper properties={data}/>
          </div>
        ):(
          <div
          className={`grid grid-cols-4 md:grid-cols-5 lg-grid-cols-4 ${Styles.gridDivs}`}
        >
          {
              data.length >0 && 
              data.map((singlePropertyData,index)=>
              (
                <FeaturedSectionCard key={index} singlePropertyData={singlePropertyData}/>
          ))}
        </div>
        )
      }
        
      </>
    )
}
export default FeaturedSection 