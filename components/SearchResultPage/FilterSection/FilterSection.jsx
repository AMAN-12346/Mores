import React, { useState } from "react";
import SearchResultCard from "../Card/SearchResultCard";
import properties from "../../../content/PropertyListingData/PropertyListing.json";
import filterOptions from "../AccordionFilters/const.json";
import MainAccordion from "./MainAccordion";
import MinimumDistanceSlider from "./SliderComponent";
import shield from '../../../assets/moreIcon/Shield.svg'
import Image from "next/image";
import SortByDropdown from "./SortByDropdown";
const FilterSection = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const itemPerPage = 4;
  const [currentPage, setCurrentPage] = useState(0);
  const rows = properties.slice(
    currentPage * itemPerPage,
    (currentPage + 1) * itemPerPage
  );
  const handlePerPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const numberOfPages = Math.ceil(properties.length / itemPerPage);
  const pageIndex = Array.from({ length: numberOfPages }, (_, idx) => idx + 1);
  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div>
      <div className="flex">
        <div className="h-fit w-1/4 ml-8 mt-6 bg-white overflow-hidden rounded-md pb-20 pr-4">
          <div className="bg-white overflow-hidden">
            <div className="ml-8 mt-6">
              <h1 className="text-4xl font-bold">Filter</h1>
              <div className="flex items-center mt-3 text-sm gap-1">
                <Image src={shield} alt='icon'/>
                <p >Show M-Verified Properties</p>
                <input className="h-6 w-6 ml-2" type="checkbox" />
              </div>
              
               <MinimumDistanceSlider/>
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
                Refine Search
              </button>
            </div>
            <div className="flex justify-center text-center mt-6">
              <button className="bg-white px-24 py-5 rounded-md text-gray-400 text-base font-semibold border border-solid-gray-500">
                Remove Filter
              </button>
            </div>
          </div>
        </div>
        <div className="w-5/6 ml-8 h-fit">
          <div className="flex justify-between ml-10 mt-5 ">
              <h1 className="font-semibold text-lg"> 456 Properties </h1>
              <SortByDropdown/>
          </div>
          {rows.map((row, index) => (
            <SearchResultCard key={index} property={row} />
          ))}
        </div>
      </div>
      <div className="flex justify-center my-20 gap-14 text-xl">
        {/* this is commented and should be uncommented in case we need a left arrow to move 
        to the previous page 
         <button
          disabled={currentPage < 1}
          onClick={() => handlePerPageChange(currentPage - 1)}
        >
          &lt;
        </button>  */}
        {pageIndex
          .slice(
            Math.max(0, currentPage - 2),
            Math.min(numberOfPages, currentPage + 3)
          )
          .map((page) => (
            <button
              key={page}
              onClick={() => handlePerPageChange(page - 1)}
              className={
                page === currentPage + 1
                  ? "active rounded-full w-12 h-12 text-white font-bold bg-paginationButton"
                  : ""
              }
            >
              {page}
            </button>
          ))}
        <button
          disabled={currentPage >= numberOfPages - 1}
          onClick={() => handlePerPageChange(currentPage + 1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="16"
            viewBox="0 0 48 16"
            fill="none"
          >
            <path
              d="M47.7071 8.70711C48.0976 8.31658 48.0976 7.68342 47.7071 7.29289L41.3431 0.928932C40.9526 0.538408 40.3195 0.538408 39.9289 0.928932C39.5384 1.31946 39.5384 1.95262 39.9289 2.34315L45.5858 8L39.9289 13.6569C39.5384 14.0474 39.5384 14.6805 39.9289 15.0711C40.3195 15.4616 40.9526 15.4616 41.3431 15.0711L47.7071 8.70711ZM0 9H47V7H0V9Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FilterSection;
