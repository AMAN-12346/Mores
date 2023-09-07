import React from "react";
import LeftSectionCarouselMview from "@/components/SearchResultPage/FilterSection/LeftSectionCarouselMview";
import PropertyListingData from "../../content/PropertyListingData/PropertyListing.json";
import RightSectionMview from "@/components/SearchResultPage/FilterSection/RightSectionMview";
import Tags from "./Tags";
import MainAccordionMview from "@/components/SearchResultPage/FilterSection/MainAccordionMview.jsx";
import Image from "next/image";
import FilterSection from "@/components/SearchResultPage/FilterSection/FilterSection";
import filterOptions from "@/components/SearchResultPage/AccordionFilters/const.json";
import { useState } from "react";

const hello = () => {
  const arr = [
    "https://images.pexels.com/photos/2980955/pexels-photo-2980955.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2980955/pexels-photo-2980955.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://www.pexels.com/photo/brown-and-white-concrete-2-storey-house-1694360/",
  ];
  const [show, setShow] = useState(true);
  function handleClick() {
    setShow(!show);
  }
  return (
    <div className="m-5">
      <div className="relative bg-cover bg-center text-white text-center h-32" style={{ backgroundImage: `url(https://s3-alpha-sig.figma.com/img/04a3/a78b/521630aaef5248838da3451f8492e3be?Expires=1694995200&Signature=mtMMPMmVpL2pOLB3Jg1VEbTYOXtTFIfYCGasZtAOSOLjBHY7OBBqe5f9cwnZw~Vc03STF8FbO4fouvKcAmilkshKXIWBF7nF8wNZOk9U0Y3RZIanvF4mzyPnhZjkFy6iEOXiSmo718regHQTY1rCu9WG0sHfQRdSTRR83tvHyEjP5ablULMIU1Nhe-qgIxT498lNYeY4y~SMFVOaFdWVkhEgE0y5r8DBCB340qq8ZnoOhpXTnUha6PKO5HsU7ZCN0YMKOyHX7OsgxbxMmjb30W08TeCZdRJzwd12Sy0S85AGfd9VwTqU1LM0yMToPknSEEwu~XmlzCpvKGwhLGYGQg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)` }} >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <h1 className="text-3xl font-semibold">Buy</h1>
        </div>
      </div>
      <div className="flex">
         <Tags name = "Residential"/>
        <Tags name = "₹ 5 lac"/>
         </div>
      <div className="flex">
        <div className="flex flex-col ps-10">
          {filterOptions.map((option, index) => (
            <MainAccordionMview
              key={index}
              hname={option.heading}
              htype={option.key}
              filters={option.filters}
            />
          ))}
        </div>
         
        
      </div>
      <div className="flex flex-col w-full my-5 bg-white rounded-xl">
        <div className="p-3">
          <LeftSectionCarouselMview images={arr} />
        </div>
        <div className=" px-5">
          <RightSectionMview details={PropertyListingData} />
        </div>
      </div>
      <div className="flex flex-col w-full my-5 bg-white rounded-xl">
        <div className="p-3">
          <LeftSectionCarouselMview images={arr} />
        </div>
        <div className=" px-5">
          <RightSectionMview details={PropertyListingData} />
        </div>
      </div>
    </div>
  );
};

export default hello;
