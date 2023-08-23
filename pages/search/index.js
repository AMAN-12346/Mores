"use client";

import { useState } from "react";

import axios from "axios";

import queryString from "query-string";

import NearMeSearch from "./nearMeSearch";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");

  const [autocompleteResults, setAutocompleteResults] = useState([]);

  const [selectLocation, setLocation] = useState("");

  const [price, setPrice] = useState("");

  const [propertyType, setPropertyType] = useState("");

  const [cityName, setCityName] = useState("");

  const [showSubtypeDropdown, setShowSubtypeDropdown] = useState(false);

  const [selectedSubtype, setSelectedSubtype] = useState("");

  const priceOptions = [
    { value: "", label: "Select price" },

    { value: "1000000-2000000", label: "10 - 20 lakh" },

    { value: "2000000-3000000", label: "20 - 30 lakh" },

    { value: "3000000-4000000", label: "30 - 40 lakh" },
  ];

  const propertyTypeOptions = [
    { value: "", label: "Select property type" },

    { value: "RESEDENTIAL", label: "Resedential" },

    { value: "COMMERCIAL", label: "Commercial" },
  ];

  const residentialSubtypes = [
    {
      value: "",

      label: "Select residential subtype",

      key: "residential-subtype-option-0",
    },

    {
      value: "APARTMENT",

      label: "Apartment",

      key: "residential-subtype-option-1",
    },

    { value: "PLOT", label: "Plot", key: "residential-subtype-option-2" },

    {
      value: "BUILDER FLOOR",

      label: "Builder Floor",

      key: "residential-subtype-option-3",
    },

    {
      value: "INDEPENDENT HOUSE",

      label: "Independent House",

      key: "residential-subtype-option-4",
    },

    { value: "VILLA", label: "Villa", key: "residential-subtype-option-5" },

    {
      value: "PENT HOUSE",

      label: "Pent House",

      key: "residential-subtype-option-6",
    },
  ];

  const commercialSubtypes = [
    {
      value: "",

      label: "Select commercial subtype",

      key: "commercial-subtype-option-0",
    },

    { value: "OFFICE", label: "Office", key: "commercial-subtype-option-1" },

    { value: "SHOP", label: "Shop", key: "commercial-subtype-option-2" },

    { value: "LAND", label: "Land", key: "commercial-subtype-option-3" },

    {
      value: "INDUSTRIAL_PLOT",

      label: "Industrial Plot",

      key: "commercial-subtype-option-4",
    },

    {
      value: "SHOWROOM",

      label: "Showroom",

      key: "commercial-subtype-option-5",
    },

    {
      value: "WAREHOUSE",

      label: "Warehouse",

      key: "commercial-subtype-option-6",
    },

    {
      value: "CO_WORKING_SPACE",

      label: "Co-working Space",

      key: "commercial-subtype-option-7",
    },
  ];

  // Function to handle changes in the search input

  const onSearchInputChange = (event) => {
    const value = event.target.value;

    setSearchValue(value);

    if (value.trim() !== "") {
      // Use Google Places Autocomplete API to fetch suggestions

      const autocompleteService =
        new window.google.maps.places.AutocompleteService();

      const request = {
        input: value,

        componentRestrictions: { country: "in" },
      };

      autocompleteService.getPlacePredictions(
        request,

        (predictions, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            setAutocompleteResults(predictions);
          } else {
            setAutocompleteResults([]);
          }
        }
      );
    } else {
      setAutocompleteResults([]);
    }
  };

  // Function to handle selection from the autocomplete dropdown

  const onLocationSelect = (selectedLocation) => {
    setSearchValue(selectedLocation.description);

    setAutocompleteResults([]); // Clear the dropdown after selection

    // Use the place_id to get the latitude and longitude

    const geocoder = new window.google.maps.Geocoder();

    geocoder.geocode(
      { placeId: selectedLocation.place_id },

      (results, status) => {
        if (status === window.google.maps.GeocoderStatus.OK && results[0]) {
          const locationData = results[0].geometry.location;

          setLocation(locationData);

          let cityName = "";

          const addressComponents = results[0].address_components;

          for (const component of addressComponents) {
            if (
              component.types.includes("locality") ||
              component.types.includes("administrative_area_level_2")
            ) {
              cityName = component.long_name;

              setCityName(cityName);

              break;
            }
          }

          // console.log("cityname", cityName);

          // console.log("Latitude:", locationData.lat());

          // console.log("Longitude:", locationData.lng());
        } else {
          console.error("Error getting location details:", status);
        }
      }
    );
  };

  // Function to handle search button click

  const onSearchButtonClick = () => {
    if (selectLocation && price && propertyType) {
      // Prepare the payload with latitude, longitude, price, and property type

      const payload = {
        latitude: selectLocation.lat(),

        longitude: selectLocation.lng(),

        cityName: cityName,

        price,

        propertyType,

        propertySubType: selectedSubtype,
      };

      const query = queryString.stringify(payload);

      // console.log(query);

      // console.log(payload)

      // console.log(searchValue)

      // Send the payload to the backend API endpoint

      // Replace 'YOUR_BACKEND_API_ENDPOINT' with your actual backend API endpoint

      axios
        .get("http://localhost:1950/api/v1/property/searchProperty", {
          params: payload,
        })

        .catch((error) => {
          // console.error("Error fetching property data:", error);

          console.log("Error ---->", error);
        });
    } else {
      console.error("Please fill in all search criteria");
    }
  };

  const handlePropertyTypeChange = (e) => {
    const selectedType = e.target.value;

    setPropertyType(selectedType);

    setSelectedSubtype("");

    if (selectedType === "RESEDENTIAL" || selectedType === "COMMERCIAL") {
      setShowSubtypeDropdown(true);
    } else {
      setShowSubtypeDropdown(false);
    }
  };

  const handleSubtypeChange = (e) => {
    setSelectedSubtype(e.target.value);
  };

  return (
    <div className="flex flex-col items-center py-8">
      <input
        type="text"
        value={searchValue}
        onChange={onSearchInputChange}
        placeholder="Search for a location in India..."
        className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
      />

      {autocompleteResults.length > 0 && (
        <ul className="w-full mt-2 overflow-hidden border rounded-lg shadow-sm max-h-36">
          {autocompleteResults.map((result) => (
            <li
              key={result.place_id}
              onClick={() => onLocationSelect(result)}
              className="px-4 py-2 cursor-pointer hover:bg-blue-100"
            >
              {result.description}
            </li>
          ))}
        </ul>
      )}

      <select
        onChange={(e) => setPrice(e.target.value)}
        className="mt-4 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
      >
        {priceOptions.map((option) => (
          <option key={option.key} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <select
        value={propertyType}
        onChange={handlePropertyTypeChange}
        className="mt-4 mb-4 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
      >
        {propertyTypeOptions.map((option) => (
          <option key={option.key} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {showSubtypeDropdown && (
        <div className="w-full mt-4">
          <select
            value={selectedSubtype}
            onChange={handleSubtypeChange}
            className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          >
            {propertyType === "RESEDENTIAL"
              ? residentialSubtypes.map((option) => (
                  <option
                    key={option.key}
                    value={option.value}
                    className="ml-200"
                  >
                    {option.label}
                  </option>
                ))
              : commercialSubtypes.map((option) => (
                  <option
                    key={option.key}
                    value={option.value}
                    className="ml-200"
                  >
                    {option.label}
                  </option>
                ))}
          </select>
        </div>
      )}

      <NearMeSearch className="mt-4" />

      <button
        onClick={onSearchButtonClick}
        className="mt-6 px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
