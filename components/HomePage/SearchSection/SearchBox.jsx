"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import magnifyingGlass from "../../../assets/SearchBoxIcon/magnifyglass.svg";
import downArrow from "../../../assets/SearchBoxIcon/downarrow.svg";
import MobileViewSearchBox from "./MobileViewSearchBox";
import GooglePlaceDropdown from "@/pages/register/registerAs/components/GooglePlaceDropdown";
import NearMeSearch from "./NearMe";
import axios from "axios";
const SearchBox = ({ isMobileView }) => {
  const [budget, setBudget] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [hidden, sethidden] = useState(true);
  const [locationLatitude, setLocationLatitude] = useState("");
  const [locationLongitude, setLocationLongitude] = useState("");
  const [locationName, setLocationName] = useState("");
  const router = useRouter();
  const handleBudgetChange = (event) => {
    setBudget(event.target.value);
  };
  const handlePropertyChange = (event) => {
    setPropertyType(event.target.value);
  };
  const handleClick = () => {
    sethidden(!hidden);
  };

  const updateSearchLocation = (city, longitude, latitude) => {
    setLocationName(city);

    setLocationLongitude(longitude);

    setLocationLatitude(latitude);
    console.log(
      "location details: ",
      locationName,
      locationLatitude,
      locationLongitude
    );
  };

  const onSearchButtonClick = () => {
    const payload = {};

    // Add properties to the payload object if they are filled
    if (locationLatitude && locationLongitude) {
      payload.latitude = locationLatitude;
      payload.longitude = locationLongitude;
    }

    if (locationName) {
      payload.cityName = locationName;
    }

    if (budget) {
      payload.price = budget;
    }

    if (propertyType) {
      payload.propertyType = propertyType;
    }


    try {
      axios
        .get("http://localhost:1950/api/v1/property/searchProperty", {
          params: payload,
        })
        .then((response) => {
          const responseData = response.data;
          const properties = responseData.result;
          // console.log(properties);
           router.push({
             pathname: "/SearchResultPage",
             query: { data: JSON.stringify(properties) },
           });
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className={`flex ${
        isMobileView
          ? "flex"
          : "bg-white rounded-xl p-3 mt-4 lg:justify-between lg:w-[1000px] lg:ml-10 md:w-[740px] md:justify-between md:ml-4 "
      }`}
    >
      {!isMobileView && (
        <div
          className={`flex ${
            isMobileView
              ? "w-full"
              : "bg-nearme rounded-md p-2 gap-2 items-center"
          }`}
        >
          <NearMeSearch isMobileView={isMobileView} />
        </div>
      )}
      {!isMobileView ? (
        <div className="flex items-center">
          <div className="flex items-center">
            <select
              value={budget}
              onClick={handleClick}
              onChange={handleBudgetChange}
              className={`${
                hidden ? "lg:w-[80px] md:w-[80px]" : "lg:w-fit md:w-fit"
              } text-xs px-1 py-1 rounded-lg leading-tight focus:outline-none focus:shadow-outline font-bold max-lg:w-auto`}
            >
              <option value="">Budget</option>
              <option value="1000000-2000000 ">₹10 lac-₹20 lac</option>
              <option value="2000000-3000000">₹20 lac-₹30 lac</option>
              <option value="3000000-4000000">₹30 lac-₹40 lac</option>
            </select>
          </div>
          <div className="flex items-center">
            <select
              value={propertyType}
              onChange={handlePropertyChange}
              className="max-lg:hidden text-xs w-full px-4 py-2 rounded-lg leading-tight  font-bold"
            >
              <option value="">Property Type</option>
              <option value="RESIDENTIAL">Residential</option>
              <option value="COMMERCIAL">Commercial</option>
            </select>
          </div>
          <div className={`ml-10 text-xs`}>
            <GooglePlaceDropdown updateParentLocation={updateSearchLocation} />
          </div>
          <div
            className={`bg-primary text-xs px-4 py-2 ml-36 rounded-md flex text-white`}
            onClick={onSearchButtonClick}
          >
            <Image src={magnifyingGlass} alt="icon" height={10} width={16} />
            <button
              className={`ml-2 lg:block md:hidden sm:hidden`}
              onClick={onSearchButtonClick}
            >
              Search
            </button>
          </div>
        </div>
      ) : (
        <MobileViewSearchBox />
      )}
    </div>
  );
};

export default SearchBox;
