"use client";

import React, { useState } from "react";

const PropertyDetailsForm = () => {
  const [propertyListing, setPropertyListing] = useState("sell");
  const [propertyCategory, setPropertyCategory] = useState("residential");
  const [propertyType, setPropertyType] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [projectName, setProjectName] = useState("");
  const [price, setPrice] = useState("");
  const [locality, setLocality] = useState("");

  const handlePropertyListingChange = (value) => {
    setPropertyListing(value);
  };

  const handlePropertyCategoryChange = (value) => {
    setPropertyCategory(value);
  };

  const handlePropertyTypeChange = (value) => {
    setPropertyType(value);
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-4 border-b-2 border-solid border-primary pb-2 inline-block">
        Provide details about your Property
      </h2>
      <div className="mb-4">
        <label className="block font-semibold mb-2">Property Listing</label>
        <div className="flex space-x-4">
          <button
            className={`px-4 py-2 rounded-full ${
              propertyListing === "sell"
                ? "bg-primary text-white"
                : "bg-white text-gray-600"
            } border-2 border-primary`}
            onClick={() => handlePropertyListingChange("sell")}
          >
            Sell
          </button>
          <button
            className={`px-4 py-2 rounded-full ${
              propertyListing === "rent"
                ? "bg-primary text-white"
                : "bg-white text-gray-600"
            } border-2 border-primary`}
            onClick={() => handlePropertyListingChange("rent")}
          >
            Rent
          </button>
        </div>
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-2">Property Category</label>
        <div className="flex space-x-4">
          <button
            className={`px-4 py-2 rounded-full ${
              propertyCategory === "residential"
                ? "bg-primary text-white"
                : "bg-white text-gray-600"
            } border-2 border-primary`}
            onClick={() => handlePropertyCategoryChange("residential")}
          >
            Residential
          </button>
          <button
            className={`px-4 py-2 rounded-full ${
              propertyCategory === "commercial"
                ? "bg-primary text-white"
                : "bg-white text-gray-600"
            } border-2 border-primary`}
            onClick={() => handlePropertyCategoryChange("commercial")}
          >
            Commercial
          </button>
        </div>
      </div>
      <div className="mb-6">
        <label className="block font-semibold mb-2">Property Type</label>
        <div className="flex space-x-4 h-14">
          <button
            className={`px-4 py-2 rounded-full ${
              propertyType === "apartment"
                ? "bg-primary text-white"
                : "bg-white text-gray-600"
            } border-2 border-primary`}
            onClick={() => handlePropertyTypeChange("apartment")}
          >
            Apartment
          </button>
          <button
            className={`px-4 py-2 rounded-full ${
              propertyType === "villa"
                ? "bg-primary text-white"
                : "bg-white text-gray-600"
            } border-2 border-primary`}
            onClick={() => handlePropertyTypeChange("villa")}
          >
            Villa
          </button>
          <button
            className={`px-4 py-2 rounded-full ${
              propertyType === "plot"
                ? "bg-primary text-white"
                : "bg-white text-gray-600"
            } border-2 border-primary`}
            onClick={() => handlePropertyTypeChange("plot")}
          >
            Plot
          </button>
          <button
            className={`px-4 py-2 rounded-full ${
              propertyType === "builderFloor"
                ? "bg-primary text-white"
                : "bg-white text-gray-600"
            } border-2 border-primary`}
            onClick={() => handlePropertyTypeChange("builderFloor")}
          >
            Builder Floor
          </button>
          <button
            className={`px-4 py-2 rounded-full ${
              propertyType === "pentHouse"
                ? "bg-primary text-white"
                : "bg-white text-gray-600"
            } border-2 border-primary`}
            onClick={() => handlePropertyTypeChange("pentHouse")}
          >
            PentHouse
          </button>
        </div>
      </div>
      <div className="flex mt-4">
  <div className="flex-1 pr-4">
    {/* City */}
    <div className="mb-4">
      <label className="block font-semibold mb-2">City</label>
      <input
        type="text"
        className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-primary"
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
      />
    </div>

    {/* Price */}
    <div className="mb-4">
      <label className="block font-semibold mb-2">Price</label>
      <input
        type="text"
        className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-primary"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
    </div>
  </div>

  <div className="flex-1 pl-4">
    {/* Project/Building Name */}
    <div className="mb-4">
      <label className="block font-semibold mb-2">Project/Building Name</label>
      <input
        type="text"
        className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-primary"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
      />
    </div>

    {/* Locality */}
    <div className="mb-4">
      <label className="block font-semibold mb-2">Locality</label>
      <input
        type="text"
        className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-primary"
        value={locality}
        onChange={(e) => setLocality(e.target.value)}
      />
    </div>
  </div>
</div>

    </div>
  );
};

export default PropertyDetailsForm;
