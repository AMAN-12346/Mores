import React, { useState, useEffect } from "react";

import { GoogleApiWrapper } from "google-maps-react";

import { apiGooglePlace } from "../../../../config.js";



const GoogleMap = ({ google, updateParentLocation }) => {

  const [searchValue, setSearchValue] = useState("");

  const [autocompleteResults, setAutocompleteResults] = useState([]);

  const [selectedLocation, setSelectedLocation] = useState({});

  const [showDropdown, setShowDropdown] = useState(false); // Control dropdown visibility



  useEffect(() => {

    updateParentLocation(

      selectedLocation.city,

      selectedLocation.longitude,

      selectedLocation.latitude

    );

  }, [selectedLocation, updateParentLocation]);

  const onSearchInputChange = (event) => {


    const value = event.target.value;

    setSearchValue(value);



    if (value.trim() !== "") {

      const autocompleteService = new google.maps.places.AutocompleteService();

      const request = {

        input: value,

        componentRestrictions: { country: "in" },

      };



      autocompleteService.getPlacePredictions(

        request,

        (predictions, status) => {

          if (status === google.maps.places.PlacesServiceStatus.OK) {

            setAutocompleteResults(predictions);

            setShowDropdown(true);

          } else {

            setAutocompleteResults([]);

            setShowDropdown(false);

          }

        }

      );

    } else {

      setAutocompleteResults([]);

    }

  };



  const onLocationSelect = (place) => {

    setSearchValue(place.description);

    setAutocompleteResults([]);

    setShowDropdown(false);

    fetchPlaceDetails(place.place_id)

      .then((placeResult) => {

        const location = placeResult.geometry.location;

        setSelectedLocation({

          city: placeResult.name,

          latitude: location.lat(),

          longitude: location.lng(),

        });

        console.log(selectedLocation);

      })

      .catch((error) => {

        console.error(error);

        // setSelectedLocation(null);

      });

  };



  const fetchPlaceDetails = (placeId) => {

    const service = new google.maps.places.PlacesService(

      document.createElement("div")

    );

    const request = { placeId: placeId };



    return new Promise((resolve, reject) => {

      service.getDetails(request, (placeResult, status) => {

        if (status === google.maps.places.PlacesServiceStatus.OK) {

          resolve(placeResult);

        } else {

          reject(new Error("Error fetching place details"));

        }

      });

    });

  };



  return (

    <div className="relative lg:w-80 ">

      <input

        type="text"

        value={searchValue}

        onChange={onSearchInputChange}

        placeholder="Search for a location"

        className="pl-4 lg:border rounded-lg md:border border-lg sm:border border-none h-[30px] w-full "

      />

      <div className="absolute z-30 bg-white"> {autocompleteResults.length > 0 && (

        <ul>

          {autocompleteResults.map((result) => (

            <li

              key={result.place_id}

              onClick={() => onLocationSelect(result)}

              className="border border-primary p-2 cursor-pointer"

            >

              {result.description}

            </li>

          ))}

        </ul>

      )}</div>



      {selectedLocation && (

        <div>

          {/* <p>Selected City: {selectedLocation.city}</p>

          <p>Latitude: {selectedLocation.latitude}</p>

          <p>Longitude: {selectedLocation.longitude}</p> */}

        </div>

      )}

    </div>

  );

};



export default GoogleApiWrapper({

  apiKey: apiGooglePlace,

})(GoogleMap);
