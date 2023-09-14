import { useState } from "react"
import nearme from "../../../assets/SearchBoxIcon/nearme.svg"
import Image from "next/image"
import axios from "axios"
import {apiGooglePlace} from '../../../config.js'
import {useRouter} from "next/router"
const NearMeSearch = ({isMobileView}) => {
  const [locationAccess, setLocationAccess] = useState(false);
  const router=useRouter()
  const handleNearMeClick = async () => {
    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      const { latitude, longitude } = position.coords;
      setLocationAccess(true);

      // console.log(locationAccess);

      // Use reverse geocoding to fetch detailed address from Google Places API
      const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiGooglePlace}`;

      const response = await fetch(apiUrl);
      const data = await response.json();
      const cityComponent = data.results[0]?.address_components.find(
        (component) => component.types.includes("locality")
      )?.long_name;
      const cityName = cityComponent || "City Name";

      // Log the values to the console
      console.log("Latitude:", latitude);
      console.log("Longitude:", longitude);
      console.log("CityName:", cityName);

      const payload = {
        latitude: latitude,
        longitude: longitude,
        cityName: cityName,
      };
      
      // Send the search query to the backend using Axios
      const backendResponse = await axios.get("http://localhost:1950/api/v1/property/searchProperty",{params:payload});
      // console.log("Backend Response:", backendResponse.data);
      const properties=backendResponse.data.result
      router.push({
        pathname: "/SearchResultPage",
        query: { data: JSON.stringify(properties) },
      })
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
