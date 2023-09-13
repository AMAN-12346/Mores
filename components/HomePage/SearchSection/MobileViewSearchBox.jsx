import Image from "next/image";
import magnify from '../../../assets/SearchBoxIcon/magnifyglass.svg';
import GooglePlaceDropdown from "@/pages/register/registerAs/components/GooglePlaceDropdown";
import { useState } from "react";

const MobileViewSearchBox = ({onSearchButtonClick}) => {
  const[locationLatitude ,setLocationLatitude] = useState("")
  const[locationLongitude ,setLocationLongitude] = useState("")
  const[locationName ,setLocationName] = useState("")

  const updateSearchLocation = (city, longitude, latitude) => {
    setLocationName(city);

    setLocationLongitude(longitude);

    setLocationLatitude(latitude);
    console.log("location details: " , locationName, locationLatitude, locationLongitude)
  };
  return (
    <div className="flex text-xs gap-10 items-center p-1 bg-white rounded-full">
      {/* <input
        className="w-[240px] rounded-l-md outline-none placeholder-gray-500"
        placeholder="Search by location, Project Name"
      /> */}
      <GooglePlaceDropdown updateParentLocation={updateSearchLocation}/>
      <div className="bg-primary px-2 py-1 items-center rounded-full  ">
        <button onClick={onSearchButtonClick} className="rounded-md border border-solid border-searchFilterButtonBorder text-white focus:outline-none items-center">
          <Image src={magnify} width={9} height={9} alt='icon' />
        </button>
      </div>
    </div>
  );
}

export default MobileViewSearchBox;
