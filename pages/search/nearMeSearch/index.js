import { useState } from "react";

import queryString from "query-string";

import postcss from "postcss";

import axios from "axios";

const NearMeSearch = () => {
  const [locationAccess, setLocationAccess] = useState(false);

  const handleNearMeClick = async () => {
    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      const { latitude, longitude } = position.coords;

      setLocationAccess(true);

      console.log(locationAccess);

      // Use reverse geocoding to fetch detailed address from Google Places API

      const googleApiKey = "AIzaSyAeaI1gkovXnm4yY1AzN97XOmcf1db5aAo";

      const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${googleApiKey}`;

      const response = await fetch(apiUrl);

      const data = await response.json();

      const cityComponent = data.results[0]?.address_components.find(
        (component) => component.types.includes("locality")
      )?.long_name;

      const cityName = cityComponent || "City Name";

      // Log the values to the console

      console.log("Latitude:", latitude);

      console.log("Longitude:", longitude);

      console.log("City Name:", cityName);

      const payload = {
        latitude: latitude,

        longitude: longitude,

        cityName: cityName,
      };

      const query = queryString.stringify(payload);

      console.log("query", query);

      // Send the search query to the backend using Axios

      const backendResponse = await axios.post("/api/search", payload);

      console.log("Backend Response:", backendResponse.data);
    } catch (error) {
      alert("you have to allow location for search near me");

      console.log(error);
    }
  };

  return (
    <div>
      <button
        onClick={handleNearMeClick}
        className="bg-blue-500 text-white py-2 px-4 rounded-lg flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10 1.5a4.5 4.5 0 0 1 4.5 4.5c0 5.333-4.333 9.5-6.384 11.302a1.55 1.55 0 0 1-1.232 0C5.833 15.5 1.5 11.333 1.5 6A4.5 4.5 0 0 1 6 1.5zm0 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"
          />
        </svg>

        <span>Near Me</span>
      </button>
    </div>
  );
};

export default NearMeSearch;
