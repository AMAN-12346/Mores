import React, { useState } from "react";

const AdditionalDetailsForm = () => {
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

  const handleAdditionalRoomClick = (roomType) => {
    if (additionalRooms.includes(roomType)) {
      setAdditionalRooms(additionalRooms.filter(room => room !== roomType));
    } else {
      setAdditionalRooms([...additionalRooms, roomType]);
    }
  };

  const handleAdditionalBalconyClick = (balconyType) => {
    if (additionalBalconies.includes(balconyType)) {
      setAdditionalBalconies(additionalBalconies.filter(balcony => balcony !== balconyType));
    } else {
      setAdditionalBalconies([...additionalBalconies, balconyType]);
    }
  }
  const allBalconyOptions = [
    "Connected Balcony",
    "Individual Balcony",
    "Room Attached Balcony",
    // Add more balcony options here...
  ];
  const allAdditionalRooms = [
    "Pooja Room",
    "Servent Room",
    "Study Room",
    "Extra Room",
    // Add more room options here...
  ];
  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
        Additional Details
      </h2>

     {/* Additional Rooms */}
     <div className="mb-4">
        <label className="block font-semibold mb-2">Additional Rooms</label>
        <div className="flex space-x-4">
          {allAdditionalRooms.map(roomType => (
            <button
              key={roomType}
              className={`px-4 py-2 rounded-full ${
                additionalRooms.includes(roomType)
                  ? "bg-primary text-white"
                  : "bg-white text-gray-600"
              } border-2 border-primary`}
              onClick={() => handleAdditionalRoomClick(roomType)}
            >
              {roomType}
            </button>
          ))}
        </div>
      </div>

      {/* Possession Status */}
      <div className="mb-4">
        <label className="block font-semibold mb-2">Possession Status</label>
        <div className="flex space-x-4">
          <button
            className={`px-4 py-2 rounded-full ${
              possessionStatus === "readyToMove"
                ? "bg-primary text-white"
                : "bg-white text-gray-600"
            } border-2 border-primary`}
            onClick={() => setPossessionStatus("readyToMove")}
          >
            Ready to Move
          </button>
          <button
            className={`px-4 py-2 rounded-full ${
              possessionStatus === "underConstruction"
                ? "bg-primary text-white"
                : "bg-white text-gray-600"
            } border-2 border-primary`}
            onClick={() => setPossessionStatus("underConstruction")}
          >
            Under Construction
          </button>
          {/* Add more buttons for other possession options */}
        </div>
      </div>

      {/* Furnish Status */}
      <div className="mb-4">
        <label className="block font-semibold mb-2">Furnish Status</label>
        <div className="flex space-x-4">
          <button
            className={`px-4 py-2 rounded-full ${
              furnishStatus === "furnished"
                ? "bg-primary text-white"
                : "bg-white text-gray-600"
            } border-2 border-primary`}
            onClick={() => setFurnishStatus("furnished")}
          >
            Furnished
          </button>
          <button
            className={`px-4 py-2 rounded-full ${
              furnishStatus === "semiFurnished"
                ? "bg-primary text-white"
                : "bg-white text-gray-600"
            } border-2 border-primary`}
            onClick={() => setFurnishStatus("semiFurnished")}
          >
            Semi-Furnished
          </button>
          <button
            className={`px-4 py-2 rounded-full ${
              furnishStatus === "unfurnished"
                ? "bg-primary text-white"
                : "bg-white text-gray-600"
            } border-2 border-primary`}
            onClick={() => setFurnishStatus("unfurnished")}
          >
            Unfurnished
          </button>
          {/* Add more buttons for other furnish options */}
        </div>
      </div>

      {/* Age of Property */}

      <div className="mb-4">
        <label className="block font-semibold mb-2">Age of Property</label>
        <div className="flex space-x-4">
          <button
            className={`px-4 py-2 rounded-full ${
              propertyAge === "0-1"
                ? "bg-primary text-white"
                : "bg-white text-gray-600"
            } border-2 border-primary`}
            onClick={() => setPropertyAge("0-1")}
          >
            0-1 Years
          </button>
          <button
            className={`px-4 py-2 rounded-full ${
              propertyAge === "2-4"
                ? "bg-primary text-white"
                : "bg-white text-gray-600"
            } border-2 border-primary`}
            onClick={() => setPropertyAge("2-4")}
          >
            2-4 Years
          </button>
          <button
            className={`px-4 py-2 rounded-full ${
              propertyAge === "5-7"
                ? "bg-primary text-white"
                : "bg-white text-gray-600"
            } border-2 border-primary`}
            onClick={() => setPropertyAge("5-7")}
          >
            5-7 Years
          </button>
          <button
            className={`px-4 py-2 rounded-full ${
              propertyAge === "8-10"
                ? "bg-primary text-white"
                : "bg-white text-gray-600"
            } border-2 border-primary`}
            onClick={() => setPropertyAge("8-10")}
          >
            8-10 Years
          </button>
          <button
            className={`px-4 py-2 rounded-full ${
              propertyAge === "10+"
                ? "bg-primary text-white"
                : "bg-white text-gray-600"
            } border-2 border-primary`}
            onClick={() => setPropertyAge("10+")}
          >
            10+ Years
          </button>
        </div>
      </div>

      {/* Number of Bedrooms */}
      <div className="mb-4">
        <label className="block font-semibold mb-2">Number of Bedrooms</label>
        <div className="flex space-x-4">
          <button
            className={`px-4 py-2 rounded-full ${
              numBedrooms === "1"
                ? "bg-primary text-white"
                : "bg-white text-gray-600"
            } border-2 border-primary`}
            onClick={() => setNumBedrooms("1")}
          >
            1
          </button>
          <button
            className={`px-4 py-2 rounded-full ${
              numBedrooms === "2"
                ? "bg-primary text-white"
                : "bg-white text-gray-600"
            } border-2 border-primary`}
            onClick={() => setNumBedrooms("2")}
          >
            2
          </button>
          <button
            className={`px-4 py-2 rounded-full ${
              numBedrooms === "3"
                ? "bg-primary text-white"
                : "bg-white text-gray-600"
            } border-2 border-primary`}
            onClick={() => setNumBedrooms("3")}
          >
            3
          </button>
          <button
            className={`px-4 py-2 rounded-full ${
              numBedrooms === "4"
                ? "bg-primary text-white"
                : "bg-white text-gray-600"
            } border-2 border-primary`}
            onClick={() => setNumBedrooms("4")}
          >
            4
          </button>
          <button
            className={`px-4 py-2 rounded-full ${
              numBedrooms === "5"
                ? "bg-primary text-white"
                : "bg-white text-gray-600"
            } border-2 border-primary`}
            onClick={() => setNumBedrooms("5")}
          >
            5
          </button>
          <button
            className={`px-4 py-2 rounded-full ${
              numBedrooms === "5+"
                ? "bg-primary text-white"
                : "bg-white text-gray-600"
            } border-2 border-primary`}
            onClick={() => setNumBedrooms("5+")}
          >
            5+
          </button>
        </div>
      </div>

      {/* Number of Bathrooms */}
      <div className="mb-4">
        <label className="block font-semibold mb-2">Number of Bathrooms</label>
        <div className="flex space-x-4">
          <button
            className={`px-4 py-2 rounded-full ${
              numBathrooms === "1"
                ? "bg-primary text-white"
                : "bg-white text-gray-600"
            } border-2 border-primary`}
            onClick={() => setNumBathrooms("1")}
          >
            1
          </button>
          <button
            className={`px-4 py-2 rounded-full ${
              numBathrooms === "2"
                ? "bg-primary text-white"
                : "bg-white text-gray-600"
            } border-2 border-primary`}
            onClick={() => setNumBathrooms("2")}
          >
            2
          </button>
          <button
            className={`px-4 py-2 rounded-full ${
              numBathrooms === "3"
                ? "bg-primary text-white"
                : "bg-white text-gray-600"
            } border-2 border-primary`}
            onClick={() => setNumBathrooms("3")}
          >
            3
          </button>
          <button
            className={`px-4 py-2 rounded-full ${
              numBathrooms === "4"
                ? "bg-primary text-white"
                : "bg-white text-gray-600"
            } border-2 border-primary`}
            onClick={() => setNumBathrooms("4")}
          >
            4
          </button>
          <button
            className={`px-4 py-2 rounded-full ${
              numBathrooms === "4+"
                ? "bg-primary text-white"
                : "bg-white text-gray-600"
            } border-2 border-primary`}
            onClick={() => setNumBathrooms("4+")}
          >
            4+
          </button>
        </div>
      </div>

      {/* Balcony Option */}
        {/* Additional Balconies */}
        <div className="mb-4">
        <label className="block font-semibold mb-2">Additional Balconies</label>
        <div className="flex space-x-4">
          {allBalconyOptions.map(balconyType => (
            <button
              key={balconyType}
              className={`px-4 py-2 rounded-full ${
                additionalBalconies.includes(balconyType)
                  ? "bg-primary text-white"
                  : "bg-white text-gray-600"
              } border-2 border-primary`}
              onClick={() => handleAdditionalBalconyClick(balconyType)}
            >
              {balconyType}
            </button>
          ))}
        </div>
      </div>

      {/* Power Backup Option */}
      <div className="mb-4">
        <label className="block font-semibold mb-2">Power Backup</label>
        <div className="flex space-x-4">
          <button
            className={`px-4 py-2 rounded-full ${
              powerBackupOption === "noBackup"
                ? "bg-primary text-white"
                : "bg-white text-gray-600"
            } border-2 border-primary`}
            onClick={() => setPowerBackupOption("noBackup")}
          >
            No Backup
          </button>
          <button
            className={`px-4 py-2 rounded-full ${
              powerBackupOption === "available"
                ? "bg-primary text-white"
                : "bg-white text-gray-600"
            } border-2 border-primary`}
            onClick={() => setPowerBackupOption("available")}
          >
            Available
          </button>
          {/* Add more buttons for other power backup options */}
        </div>
      </div>
      <div className="flex -mb-16">
  {/* First Column */}
  <div className="mb-4 flex-1 pr-4">
    <label className="block font-semibold mb-2">View</label>
    <select
      className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-primary"
      value={balconyView}
      onChange={(e) => setBalconyView(e.target.value)}
    >
      <option value="">Select Balcony View</option>
      <option value="city">City View</option>
      <option value="garden">Garden View</option>
      {/* Add more balcony view options */}
    </select>

    {/* Floor Number */}
    <div className="mb-4 mt-4">
      <label className="block font-semibold mb-2">Floor Number</label>
      <input
        type="text"
        className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-primary"
        value={floorNumber}
        onChange={(e) => setFloorNumber(e.target.value)}
      />
    </div>

    {/* Tower/Block */}
    <div className="mb-4">
      <label className="block font-semibold mb-2">Tower/Block</label>
      <input
        type="text"
        className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-primary"
        value={towerBlock}
        onChange={(e) => setTowerBlock(e.target.value)}
      />
    </div>
  </div>

  {/* Second Column */}
  <div className="mb-4 flex-1 pl-4">
    <label className="block font-semibold mb-2">Flooring Option</label>
    <input
      type="text"
      className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-primary"
      value={flooringOption}
      onChange={(e) => setFlooringOption(e.target.value)}
    />

    {/* Total Floors */}
    <div className="mb-4">
      <label className="block font-semibold mb-2">Total Floors</label>
      <input
        type="text"
        className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-primary"
        value={totalFloors}
        onChange={(e) => setTotalFloors(e.target.value)}
      />
    </div>

    {/* Unit Number */}
    <div className="-mb-10">
      <label className="block font-semibold mb-2">Unit Number</label>
      <input
        type="text"
        className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-primary"
        value={unitNumber}
        onChange={(e) => setUnitNumber(e.target.value)}
      />
    </div>
  </div>
</div>

      {/* Private Balcony */}
      {/* <div className="mb-4">
        <label className="block font-semibold mb-2">Private Balcony</label>
        <input
          type="checkbox"
          checked={privateBalcony}
          onChange={(e) => setPrivateBalcony(e.target.checked)}
        />
      </div> */}
    </div>
  );
};

export default AdditionalDetailsForm;
