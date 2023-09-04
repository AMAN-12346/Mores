import React, { useState } from "react";
import AddProperty from "..";
import AdditionalDetail from "./AdditionalDetails";

const AdditionalDetailsForm = ({ data, onChange }) => {
  const [additionalRooms, setAdditionalRooms] = useState([]);

  const [possessionStatus, setPossessionStatus] = useState("");
  const [furnishStatus, setFurnishStatus] = useState("");
  const [propertyAge, setPropertyAge] = useState("");
  const [additionalBalconies, setAdditionalBalconies] = useState([]);
  const [balconyView, setBalconyView] = useState(""); // State for Balcony View
  const [viewOption, setViewOption] = useState("");
  const [flooringOption, setFlooringOption] = useState("");
  const [floorNumber, setFloorNumber] = useState("");
  const [towerBlock, setTowerBlock] = useState("");
  const [totalFloors, setTotalFloors] = useState("");
  const [unitNumber, setUnitNumber] = useState("");
  const [privateBalcony, setPrivateBalcony] = useState(false);
  const [numBedrooms, setNumBedrooms] = useState("");
  const [numBathrooms, setNumBathrooms] = useState("");
  const [powerBackupOption, setPowerBackupOption] = useState("");

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

  const allBalconyOptions = [
    { value: "connected", label: "Connected" },
    { value: "individual", label: "Individual" },
    { value: "roomAttached", label: "Room Attached" },
    // Add more balcony options here...
  ];

  const allAdditionalRooms = [
    { value: "poojaRoom", label: "Pooja Room" },
    { value: "servantRoom", label: "Servant Room" },
    { value: "studyRoom", label: "Study Room" },
    { value: "extraRoom", label: "Extra Room" },
    // Add more room options here...
  ];

  const possessionStatusOptions = [
    { value: "readyToMove", label: "Ready to Move" },
    { value: "underConstruction", label: "Under Construction" },
    // Add more possession options here...
  ];

  const furnishStatusOptions = [
    { value: "furnished", label: "Furnished" },
    { value: "semiFurnished", label: "Semi-Furnished" },
    { value: "unfurnished", label: "Unfurnished" },
    // Add more furnish options here...
  ];

  const propertyAgeOptions = [
    { value: "0-1", label: "0-1 Years" },
    { value: "2-4", label: "2-4 Years" },
    { value: "5-7", label: "5-7 Years" },
    { value: "8-10", label: "8-10 Years" },
    { value: "10+", label: "10+ Years" },
  ];

  const allPowerBackupOptions = [
    { value: "noBackup", label: "No Backup" },
    { value: "available", label: "Available" },
    // Add more power backup options here...
  ];

  const bedroomOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "5+", label: "5+" },
  ];

  const bathroomOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "4+", label: "4+" },
  ];
  return (
    <div className="p-8">
    {/* <AdditionalDetail/> */}
      {/* Additional Rooms */}
      <div className="mb-4">
        <label className="block font-semibold mb-2">Additional Rooms</label>
        <div className="flex space-x-4">
          {renderButtons(allAdditionalRooms, data.additionalRooms, (value) =>
            onChange("additionalRooms", value)
          )}
        </div>
      </div>

      {/* Possession Status */}
      <div className="mb-4">
        <label className="block font-semibold mb-2">Possession Status</label>
        <div className="flex space-x-4">
          {renderButtons(
            possessionStatusOptions,
            data.possessionStatus,
            (value) => onChange("possessionStatus", value)
          )}
        </div>
      </div>

      {/* Furnish Status */}
      <div className="mb-4">
        <label className="block font-semibold mb-2">Furnish Status</label>
        <div className="flex space-x-4">
          {renderButtons(furnishStatusOptions, data.furnishStatus, (value) =>
            onChange("furnishStatus", value)
          )}
        </div>
      </div>

      {/* Number of Bedrooms */}
      <div className="mb-4">
        <label className="block font-semibold mb-2">Number of Bedrooms</label>
        <div className="flex space-x-4">
          {renderButtons(bedroomOptions, data.numBedrooms, (value) =>
            onChange("numBedrooms", value)
          )}
        </div>
      </div>

      {/* Number of Bathrooms */}
      <div className="mb-4">
        <label className="block font-semibold mb-2">Number of Bathrooms</label>
        <div className="flex space-x-4">
          {renderButtons(bathroomOptions, data.numBathrooms, (value) =>
            onChange("numBathrooms", value)
          )}
        </div>
      </div>

      {/* Age of Property */}
      <div className="mb-4">
        <label className="block font-semibold mb-2">Age of Property</label>
        <div className="flex space-x-4">
          {renderButtons(propertyAgeOptions, data.propertyAge, (value) =>
            onChange("propertyAge", value)
          )}
        </div>
      </div>

      {/* Additional Balconies */}
      <div className="mb-4">
        <label className="block font-semibold mb-2">Additional Balconies</label>
        <div className="flex space-x-4">
          {renderButtons(allBalconyOptions, data.additionalBalconies, (value) =>
            onChange("additionalBalconies", value)
          )}
        </div>
      </div>

      {/* Power Backup */}
      <div className="mb-4">
        <label className="block font-semibold mb-2">Power Backup</label>
        <div className="flex space-x-4">
          {renderButtons(
            allPowerBackupOptions,
            data.powerBackupOption,
            (value) => onChange("powerBackupOption", value)
          )}
        </div>
      </div>

      <div className="flex -mb-16">
        {/* First Column */}
        <div className="mb-4 flex-1 pr-4">
          <label className="block font-semibold mb-2">View</label>
          <select
            className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-primary"
            value={data.balconyView}
            onChange={(e) => onChange("balconyView", e.target.value)}
          >
            <option value="">Select Balcony View</option>
            <option value="city">City View</option>
            <option value="garden">Garden View</option>
          </select>

          {/* Floor Number */}
          <div className="mb-4 mt-4">
            <label className="block font-semibold mb-2">Floor Number</label>
            <input
              type="text"
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-primary"
              value={data.floorNumber}
              onChange={(e) => onChange("floorNumber", e.target.value)}
            />
          </div>

          {/* Tower/Block */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">Tower/Block</label>
            <input
              type="text"
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-primary"
              value={data.towerBlock}
              onChange={(e) => onChange("towerBlock", e.target.value)}
            />
          </div>
        </div>

        {/* Second Column */}
        <div className="mb-4 flex-1 pl-4">
          <label className="block font-semibold mb-2">Flooring Option</label>
          <input
            type="text"
            className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-primary"
            value={data.flooringOption}
            onChange={(e) => onChange("flooringOption", e.target.value)}
          />

          {/* Total Floors */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">Total Floors</label>
            <input
              type="text"
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-primary"
              value={data.totalFloors}
              onChange={(e) => onChange("totalFloors", e.target.value)}
            />
          </div>

          {/* Unit Number */}
          <div className="-mb-10">
            <label className="block font-semibold mb-2">Unit Number</label>
            <input
              type="text"
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-primary"
              value={data.unitNumber}
              onChange={(e) => onChange("unitNumber", e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalDetailsForm;
