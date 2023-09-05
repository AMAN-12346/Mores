import React, { useState, useEffect } from "react";
import { GoogleApiWrapper } from "google-maps-react";
import { apiGooglePlace } from "../../../../config.js";

const GoogleMap = ({ google, updateParentLocation }) => {
  const [searchValue, setSearchValue] = useState("");
  const [autocompleteResults, setAutocompleteResults] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState({});

  useEffect(() => {
    updateParentLocation(
      selectedLocation.city,
      selectedLocation.longitude,
      selectedLocation.latitude
    );
  }, [selectedLocation, updateParentLocation]);
  const onSearchInputChange = (event) => {
    console.log("changeddddd")
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
          } else {
            setAutocompleteResults([]);
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
    <div className="border rounded-lg w-full">
      <input
        type="text"
        value={searchValue}
        onChange={onSearchInputChange}
        placeholder="Search for a location"
        className="border rounded-lg pl-12 pr-8 py-2 w-full"
      />
      {autocompleteResults.length > 0 && (
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
      )}
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
