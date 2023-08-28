import React, { useState } from "react";
import SearchResultCard from "../Card/SearchResultCard";
import properties from "../../../content/PropertyListingData/PropertyListing.json";
import filterOptions from "../AccordionFilters/const.json";
import MainAccordion from "./MainAccordion";
const FilterSection = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div className="flex">
      <div className="h-fit w-1/4 ml-8 mt-6 bg-white overflow-scroll rounded-md pb-20">
        <div className="bg-white overflow-scroll">
          <div className="ml-8 mt-6">
            <h1 className="text-4xl font-bold">Filter</h1>
            <div className="flex items-center mt-3 font-semibold gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="32"
                viewBox="0 0 26 32"
                fill="none"
              >
                <path
                  d="M12.8711 0.416687L0.121094 6.08335V14.5834C0.121094 22.4459 5.56109 29.7984 12.8711 31.5834C20.1811 29.7984 25.6211 22.4459 25.6211 14.5834V6.08335L12.8711 0.416687ZM10.0378 23.0834L4.37109 17.4167L6.36859 15.4192L10.0378 19.0742L19.3736 9.73835L21.3711 11.75L10.0378 23.0834Z"
                  fill="#931602"
                />
              </svg>
              <p className="text-base">Show M-Verified Properties</p>
              <input className="h-6 w-6 ml-2" type="checkbox" />
            </div>
          </div>
          {filterOptions.map((option, index) => (
            <MainAccordion
              key={index}
              hname={option.heading}
              htype={option.key}
              filters={option.filters}
            />
          ))}
          <div className="flex justify-center text-center mt-6">
            <button className="bg-featuredBackground px-24 py-5 rounded-md text-white text-base font-semibold">
              {" "}
              Refine Search
            </button>
          </div>
          <div className="flex justify-center text-center mt-6">
            <button className="bg-white px-24 py-5 rounded-md text-gray-400 text-base font-semibold border border-solid-gray-500">
              {" "}
              Remove Filter
            </button>
          </div>
        </div>
      </div>
      <div className="w-2/3 ml-8">
        {properties.map((property, index) => (
          <SearchResultCard key={index} property={property} />
        ))}
      </div>
    </div>
  );
};

export default FilterSection;
