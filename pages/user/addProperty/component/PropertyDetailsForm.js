import React, { useState } from "react";
import { apiGooglePlace } from "@/config.js";
import GooglePlaceDropdown from "../../../register/registerAs/components/GooglePlaceDropdown";
import styles from "./PropertyDetails.module.css"; // Import the CSS module
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
        className={`px-4 mt-2 py-2 h-9 w-30 rounded-full ${
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
    <div className={styles.property_form}>
      <div>
        <label className={styles.property_label}>Property Listing</label>
        <div className={`flex flex-wrap ${styles.property_button}`}>
          {renderButtons(
            propertyListingOptions,
            data.propertyListing,
            (value) => onChange("propertyListing", value)
          )}
        </div>
      </div>
      <div className="mt-4">
        <label className={styles.property_label}>Property Category</label>
        <div className={`flex flex-wrap ${styles.property_button}`}>
          {renderButtons(
            propertyCategoryOptions,
            data.propertyCategory,
            (value) => onChange("propertyCategory", value)
          )}
        </div>
      </div>

      <div className="sm:grid grid-col-2">
        <label className={styles.property_label}>Property Type</label>
        <div className={`flex flex-wrap ${styles.property_button}`}>
          {renderButtons(propertyTypeOptions, data.propertyType, (value) =>
            onChange("propertyType", value)
          )}
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 sm:gap-2 md:gap-5 ">
        <div className="mt-4">
          <label className={styles.property_label}>City</label>
          <GooglePlaceDropdown
            updateParentLocation={updateCityLocation}
            type="text"
            name="city"
            className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-primary"
            value={data.city}
            onSelect={(e) => onChange("city", e.target.value)}
            placeholder="Select City"
          />
        </div>
        <div className="mt-4">
          <label className={styles.property_label}>Price</label>
          <input
            type="number"
            name="price"
            className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-primary"
            value={data.price}
            onChange={(e) => onChange("price", e.target.value)}
          />
        </div>
        <div className="mt-4">
          <label className={styles.property_label}>Project/Building Name</label>
          <GooglePlaceDropdown
            updateParentLocation={updateBuildingLocation}
            type="text"
            name="projectName"
            className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-primary"
            value={data.projectName}
            onChange={(e) => onChange("projectName", buildingLocation)}
            placeholder="Enter Project/Building Name"
          />
        </div>
        <div className="mt-4">
          <label className={styles.property_label}>Locality</label>
          <GooglePlaceDropdown
            updateParentLocation={updateLocalityLocation}
            type="text"
            name="locality"
            className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-primary"
            value={data.locality}
            onChange={(e) => onChange("locality", e.target.value)}
            placeholder="Enter Locality"
          />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsForm;
