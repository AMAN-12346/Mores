import React, { useState } from "react";
import AddProperty from "..";
import AdditionalDetail from "./AdditionalDetails";
import StepThreeCard from "./cards/StepThreeCard";
import Image from "next/image";
import photo from "../component/services/assets/photo.png";
import video from "../component/services/assets/vedio.png";
import styles from "./AdditionalDetails.module.css";
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

  const handlePhotoSelect = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.multiple = true;

    input.addEventListener("change", (event) => {
      const files = Array.from(event.target.files);
      setSelectedPhotos(files);
    });

    input.click();
  };

  const handleVideoSelect = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "video/*";
    input.multiple = true;

    input.addEventListener("change", (event) => {
      const files = Array.from(event.target.files);
      setSelectedVideos(files);
    });

    input.click();
  };

  const renderButtons = (options, selectedValue, onChangeHandler) => {
    return options.map((option) => (
      <div className="">
        <button
          key={option.value}
          className={`${styles.button} ${
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
      </div>
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
      <label className="block font-semibold mb-2">Upload Photo/Video</label>

      <div className="block md:flex justify-center gap-8">
        <StepThreeCard
          icon={
            <div className="flex items-center justify-center rounded-full bg-iconBackground p-4 w-20 m-auto">
              <Image src={video} alt="Video" width={80} height={80} />
            </div>
          }
          definition="Property Listing with more than 5 photos gets more views"
          buttonLabel="Attach Photos"
          onSelect={handlePhotoSelect}
        />
        <StepThreeCard
          icon={
            <div className="flex items-center justify-center rounded-full bg-iconBackground p-4 w-20 h-20 m-auto">
              <Image src={photo} alt="Photo" width={80} height={50} />
            </div>
          }
          definition="Property Listing with video gets 3X more views"
          buttonLabel="Attach Videos"
          onSelect={handleVideoSelect}
        />
      </div>
      <div className="mb-4 mt-4">
        <label className="block font-semibold mb-2 w-fit">Additional Rooms</label>
        <div className="flex flex-wrap gap-2">

          {renderButtons(allAdditionalRooms, data.additionalRooms, (value) =>
            onChange("additionalRooms", value)
          )}
        </div>
      </div>

      {/* Possession Status */}
      <div className="mb-4">
        <label className="block font-semibold mb-2 w-fit">Possession Status</label>
        <div className="flex flex-wrap gap-2">

          {renderButtons(
            possessionStatusOptions,
            data.possessionStatus,
            (value) => onChange("possessionStatus", value)
          )}
        </div>
      </div>

      {/* Furnish Status */}
      <div className="mb-4">
        <label className="block font-semibold mb-2 w-fit">Furnish Status</label>
        <div className="flex flex-wrap gap-2">

          {renderButtons(furnishStatusOptions, data.furnishStatus, (value) =>
            onChange("furnishStatus", value)
          )}
        </div>
      </div>

      {/* Number of Bedrooms */}
      <div className="mb-4">
        <label className="block font-semibold mb-2 w-fit">Number of Bedrooms</label>
        <div className="flex flex-wrap gap-2">

          {renderButtons(bedroomOptions, data.numBedrooms, (value) =>
            onChange("numBedrooms", value)
          )}
        </div>
      </div>

      {/* Number of Bathrooms */}
      <div className="mb-4">
        <label className="block font-semibold mb-2 w-fit">Number of Bathrooms</label>
        <div className="flex flex-wrap gap-2">

          {renderButtons(bathroomOptions, data.numBathrooms, (value) =>
            onChange("numBathrooms", value)
          )}
        </div>
      </div>

      {/* Age of Property */}
      <div className="mb-4">
        <label className="block font-semibold mb-2 w-fit">Age of Property</label>
        <div className="flex flex-wrap gap-2">
          {renderButtons(propertyAgeOptions, data.propertyAge, (value) =>
            onChange("propertyAge", value)
          )}
        </div>
      </div>

      {/* Additional Balconies */}
      <div className="mb-4">
        <label className="block font-semibold mb-2 w-fit">Additional Balconies</label>
        <div className="flex flex-wrap gap-3">

          {renderButtons(allBalconyOptions, data.additionalBalconies, (value) =>
            onChange("additionalBalconies", value)
          )}
        </div>
      </div>

      {/* Power Backup */}
      <div className="mb-4">
        <label className="block font-semibold mb-2 w-fit">Power Backup</label>
        <div className="flex flex-wrap gap-3">
          {renderButtons(
            allPowerBackupOptions,
            data.powerBackupOption,
            (value) => onChange("powerBackupOption", value)
          )}
        </div>
      </div>

      <div className="grid sm:grid-cols-2">
        {/* First Column */}
        <div className="mb-4 flex-1 pr-4">
          <label className="block font-semibold mb-2 w-fit">View</label>
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
            <label className="block font-semibold mb-2 w-fit">Floor Number</label>
            <input
              type="text"
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-primary"
              value={data.floorNumber}
              onChange={(e) => onChange("floorNumber", e.target.value)}
            />
          </div>

          {/* Tower/Block */}
          <div className="mb-4">
            <label className="block font-semibold mb-2 w-fit">Tower/Block</label>
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
          <label className="block font-semibold mb-2 w-fit">Flooring Option</label>
          <input
            type="text"
            className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-primary"
            value={data.flooringOption}
            onChange={(e) => onChange("flooringOption", e.target.value)}
          />

          {/* Total Floors */}
          <div className="mb-4">
            <label className="block font-semibold mb-2 mt-4 w-fit">
              Total Floors
            </label>
            <input
              type="text"
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-primary"
              value={data.totalFloors}
              onChange={(e) => onChange("totalFloors", e.target.value)}
            />
          </div>

          {/* Unit Number */}
          <div className="">
            <label className="block font-semibold mb-2 w-fit">Unit Number</label>
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
