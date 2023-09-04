import React, { useState } from "react";
import { apiGooglePlace } from "@/config.js";
import GooglePlaceDropdown from "../../../register/registerAs/components/GooglePlaceDropdown";

const PropertyDetailsForm = ({ data, onChange }) => {
  //state

  const [city, setCity] = useState("");
  const [cityLongitude, setCityLongitude] = useState("");
  const [cityLatitude, setCityLatitude] = useState("");

  const [locality, setLocality] = useState("");
  const [localityLongitude, setLocalityLongitude] = useState("");
  const [localityLatitude, setLocalityLatitude] = useState("");

  const [buildingLocation, setBuildingLocation] = useState("");
  const [buildingLongitude, setBuildingLongitude] = useState("");
  const [buildingLatitude, setBuildingLatitude] = useState("");
  const renderButtons = (options, selectedValue, onChangeHandler) => {
    return options.map((option) => (
      <button
        key={option.value}
        className={`px-4 py-2 h-9 w-30 rounded-full ${
          selectedValue === option.value
            ? "bg-primary text-white"
            : "bg-white text-gray-600"
        } border-2 border-primary`}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={() => onChangeHandler(option.value)}
      >
        {option.label}
      </button>
    ));
  };

  const propertyListingOptions = [
    { value: "sell", label: "Sell" },
    { value: "rent", label: "Rent" },
  ];

  const propertyCategoryOptions = [
    { value: "residential", label: "Residential" },
    { value: "commercial", label: "Commercial" },
  ];

  const propertyTypeOptions = [
    { value: "apartment", label: "Apartment" },
    { value: "villa", label: "Villa" },
    { value: "plot", label: "Plot" },
    { value: "builderFloor", label: "Builder Floor" },
    { value: "pentHouse", label: "PentHouse" },
  ];

  const updateCityLocation = (city, longitude, latitude) => {
    setCity(city);
    setCityLongitude(longitude);
    setCityLatitude(latitude);
    console.log(city, longitude, latitude, "from step 2 city details");
  };

  const updateLocalityLocation = (city, longitude, latitude) => {
    setLocality(city);
    setLocalityLongitude(longitude);
    setLocalityLatitude(latitude);
    console.log(city, longitude, latitude, "from step 2 locaity details");
  };

  const updateBuildingLocation = (city, longitude, latitude) => {
    setBuildingLocation(city);
    setBuildingLongitude(longitude);
    setBuildingLatitude(latitude);
    console.log(city, longitude, latitude, "from step 2 building location");
  };

  return (
    <div className="p-8 w-full">
      {/* <h2 className="text-2xl font-semibold mb-4 border-b-2 border-solid border-primary pb-2 inline-block">
        Provide details about your Property
      </h2> */}

      <div className="mb-4">
        <label className="block font-semibold mb-2">Property Listing</label>
        <div className="flex space-x-4">
          {renderButtons(
            propertyListingOptions,
            data.propertyListing, // Get the value from data
            (value) => onChange("propertyListing", value) // Call onChange with property name and value
          )}
        </div>
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-2">Property Category</label>
        <div className="flex space-x-4">
          {renderButtons(
            propertyCategoryOptions,
            data.propertyCategory, // Get the value from data
            (value) => onChange("propertyCatagory", value) // Call onChange with property name and value
          )}
        </div>
      </div>

      <div className="mb-6">
        <label className="block font-semibold mb-2">Property Type</label>
        <div className="flex space-x-4 h-14">
          {renderButtons(
            propertyTypeOptions,
            data.propertyType, // Get the value from data
            (value) => onChange("propertyType", value) // Call onChange with property name and value
          )}
        </div>
      </div>

      <div className="flex mt-4">
        <div className="flex-1 pr-4">
          {/* City */}
          {/* <div className="mb-4">
            <label className="block font-semibold mb-2">City</label>
            <input
              type="text"
              name="city"
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-primary"
              value={data.city}
              onChange={(e) => onChange("city", e.target.value)}
            />
          </div> */}

          <div className="mb-4">
            <label className="block font-semibold mb-2">City</label>
            <GooglePlaceDropdown
              updateParentLocation={updateCityLocation}
              type="text"
              name="city"
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-primary"
              value={data.city}
              onChange={(e) => onChange("city", e.target.value)}
            />
          </div>

          {/* Price */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">Price</label>
            <input
              type="number"
              name="price"
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-primary"
              value={data.price}
              onChange={(e) => onChange("price", e.target.value)}
            />
          </div>
        </div>

        <div className="flex-1 pl-4">
          {/* Project/Building Name */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">
              Project/Building Name
            </label>

            <GooglePlaceDropdown
              updateParentLocation={updateBuildingLocation}
              type="text"
              name="projectName" // Make sure this matches the property name
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-primary"
              value={data.projectName} // Get the value from data
              onChange={(e) => onChange("projectName", e.target.value)} // Call onChange with property name and value
              placeholder="Enter Project/Building Name"
            />
            {/* <input
              type="text"
              name="projectName" // Make sure this matches the property name
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-primary"
              value={data.projectName} // Get the value from data
              onChange={(e) => onChange("projectName", e.target.value)} // Call onChange with property name and value
              placeholder="Enter Project/Building Name"
            /> */}
          </div>

          {/* Locality */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">Locality</label>

            <GooglePlaceDropdown
              updateParentLocation={updateLocalityLocation}
              type="text"
              name="locality" //Make sure this matches the property name
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-primary"
              value={data.locality} // Get the value from data
              onChange={(e) => onChange("locality", e.target.value)} // Call onChange with property name and value
              placeholder="Enter Locality"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsForm;
