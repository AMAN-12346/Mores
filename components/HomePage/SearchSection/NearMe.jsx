import { useState } from "react"
import queryString from "query-string"
import nearme from "../../../assets/SearchBoxIcon/nearme.svg"
import Image from "next/image"
import axios from "axios"
import  {googleApiKey} from '../../../config.js'
const NearMeSearch = ({isMobileView}) => {
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
    <div className="flex gap-1">
          <Image src={nearme} width={15} alt="icon" />
        
      <button
        onClick={handleNearMeClick}
        className={`text-primary text-xs ${isMobileView ? "mt-2" : ""}`}
      >
        Near Me
      </button>
    </div>
  );
};

export default NearMeSearch;
