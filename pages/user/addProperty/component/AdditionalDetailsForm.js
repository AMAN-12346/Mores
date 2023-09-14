import React, { useState } from "react";
import StepThreeCard from "./cards/StepThreeCard";
import Image from "next/image";
import video from "../component/services/assets/photo.png";
import photo from "../component/services/assets/vedio.png";
import styles from "./AdditionalDetails.module.css";
import axios from "axios";
import { API } from "@/config.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const AdditionalDetailsForm = ({
  data,
  onChange,
  onPhotoChange,
  onVideoChange,
}) => {
  const [videoURLs, setVideoURLs] = useState([]);
  const [photoURLs, setPhotoURLs] = useState([]);
  const [photoUploadLoading, setPhotoUploadLoading] = useState(false);
  const [videoUploadLoading, setVideoUploadLoading] = useState(false);

  const [uploadMessage, setUploadMessage] = useState(""); // State for upload message

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

    input.addEventListener("change", async (event) => {
      const files = Array.from(event.target.files);

      // Create a FormData object to send files
      const formData = new FormData();
      files.forEach((file, index) => {
        formData.append(`photo${index}`, file);
      });

      try {
        setPhotoUploadLoading(true);
        // Send a POST request to your API endpoint
        const response = await axios.post(`${API}user/awsImage`, formData, {
          headers: {
            "Content-Type": "multipart/form-data", // Set the content type for file upload
          },
        });
        // console.log(response);
        const photoUrls = response.data.result;
        const mappedPhotoUrls = photoUrls.map((url, index) => ({
          id: index, // You can assign a unique ID if needed
          url: url,
        }));

        setPhotoURLs(mappedPhotoUrls);
        // console.log(mappedPhotoUrls, "urls from add photo");

        // Call onVideoChange with the mapped URLs
        onPhotoChange({ photoURLs: mappedPhotoUrls });

        console.log(photoURLs, "photo upload response");

        setPhotoUploadLoading(false);
        setUploadMessage(
          `${mappedPhotoUrls.length} Photos uploaded successfully!`
        );

        // Clear success message after 3 seconds
        setTimeout(() => {
          setUploadMessage("");
        }, 3000);
      } catch (error) {
        console.error("Error uploading files:", error);
        setPhotoUploadLoading(false);
        // Show error message
        setUploadMessage("Error uploading photos. Please try again.");

        // Clear error message after 3 seconds
        setTimeout(() => {
          setUploadMessage("");
        }, 3000);
      }
    });

    input.click();
  };

  const handleVideoSelect = async () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "video/*";
    input.multiple = true;

    input.addEventListener("change", async (event) => {
      const files = Array.from(event.target.files);

      const formData = new FormData();
      files.forEach((file, index) => {
        formData.append(`video${index}`, file);
      });

      try {
        setVideoUploadLoading(true);
        const response = await axios.post(`${API}user/awsVideo`, formData, {
          headers: {
            "Content-Type": "multipart/form-data", // Set the content type for video upload
          },
        });
        console.log(response, "videos????????????????");

        if (response.data.responseCode === 200) {
          const videoUrls = response.data.result; // Assuming response.data.result is an array of URLs

          // Map the URLs and set them in the state
          const mappedVideoUrls = videoUrls.map((url, index) => ({
            id: index, // You can assign a unique ID if needed
            url: url,
          }));

          setVideoURLs(mappedVideoUrls);
          console.log(mappedVideoUrls, "urls from add video");

          // Call onVideoChange with the mapped URLs
          onVideoChange({ videoURLs: mappedVideoUrls });

          console.log(response.data.responseMessage);
          setVideoUploadLoading(false);
          // Show success message
          setUploadMessage(`${mappedVideoUrls.length} Videos uploaded successfully!`);

          // Clear success message after 3 seconds
          setTimeout(() => {
            setUploadMessage("");
          }, 3000);
        } else {
          console.error(
            "Error uploading videos:",
            response.data.responseMessage
          );
          setVideoUploadLoading(false);
          // Show error message
          setUploadMessage("Error uploading videos. Please try again.");

          // Clear error message after 3 seconds
          setTimeout(() => {
            setUploadMessage("");
          }, 3000);
        }
      } catch (error) {
        console.error("Error uploading videos:", error);
        setVideoUploadLoading(false);
        // Show error message
        setUploadMessage("Error uploading videos. Please try again.");

        // Clear error message after 3 seconds
        setTimeout(() => {
          setUploadMessage("");
        }, 3000);
      }
    });

    input.click();
  };

  const renderButtons = (options, selectedValue, onChangeHandler) => {
    return options.map((option,index) => (
      <div key={index}>
        <button
          key={option.value}
          className={`text-xs ${styles.button} ${
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

  // Define your bucket name as a constant

  const deletePhoto = async (index, url) => {
    // Extract the key from the URL (assuming the key comes after the last '/')
    const key = url.substring(url.lastIndexOf("/") + 1);
    console.log(key, ">>>>>>key");

    const BUCKET_NAME = "more-bucket-s3";

    try {
      // Send a POST request to the photo deletion API with bucketName and key as data
      const response = await axios.post("user/removeImage", {
        Bucket: BUCKET_NAME,
        Key: key,
      });

      if (response.status === 200) {
        // If the request is successful, update the state to remove the deleted photo
        setPhotoURLs((prevURLs) => prevURLs.filter((_, i) => i !== index));
        setUploadMessage("Photo deleted successfully!");

        // Clear error message after 3 seconds
        setTimeout(() => {
          setUploadMessage("");
        }, 3000);
      } else {
        setUploadMessage("Error deleting photo. Please try again.");

        // Clear error message after 3 seconds
        setTimeout(() => {
          setUploadMessage("");
        }, 3000);
      }
    } catch (error) {
      // Handle any network or other errors
      console.error("An error occurred while deleting photo:", error);
      setUploadMessage("Error deleting photo. Please try again.");

      // Clear error message after 3 seconds
      setTimeout(() => {
        setUploadMessage("");
      }, 3000);
    }
  };

  // Function to delete a video by its index
  const deleteVideo = async (index, url) => {
    const BUCKET_NAME = "more-bucket-s3";

    // Extract the key from the URL (assuming the key comes after the last '/')
    const key = url.substring(url.lastIndexOf("/") + 1);

    try {
      // Send a POST request to the video deletion API with key as data
      const response = await axios.post("user/removeVideo", {
        Bucket: BUCKET_NAME,
        Key: key,
      });

      if (response.status === 200) {
        setVideoURLs((prevURLs) => prevURLs.filter((_, i) => i !== index));
        setUploadMessage("Video Deleted Successfully!");

        // Clear error message after 3 seconds
        setTimeout(() => {
          setUploadMessage("");
        }, 3000);
      } else {
        console.error("Failed to delete video.");
        setUploadMessage("Error deleting video. Please try again.");

        // Clear error message after 3 seconds
        setTimeout(() => {
          setUploadMessage("");
        }, 3000);
      }
    } catch (error) {
      console.error("An error occurred while deleting video:", error);
      setUploadMessage("Error deleting video. Please try again.");

      // Clear error message after 3 seconds
      setTimeout(() => {
        setUploadMessage("");
      }, 3000);
    }
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
    <div className="p-8 -mb-10">
      {/* <AdditionalDetail/> */}
      {/* Additional Rooms */}
      <label className="block font-semibold mb-2 text-xs">
        Upload Photo/Video
      </label>
      {/* //!make two divs for showing photos */}
      <div className="block md:flex justify-center w-fit gap-8">
        <div className="flex flex-col">
          <div>
            <StepThreeCard
              icon={
                <div className="flex items-center justify-center rounded-full bg-iconBackground p-4 w-20 m-auto">
                  <Image src={photo} alt="Photo" width={80} height={80} />
                </div>
              }
              definition="Property Listing with more than 5 photos gets more views"
              buttonLabel="Attach Photos"
              onSelect={handlePhotoSelect}
              onPhotoUpload={photoUploadLoading}
            />
          </div>
          <div className="flex justify-end">
            <div className="grid grid-cols-3 gap-2">
              {photoURLs.slice(0, 5).map((photoURL, index) => (
                <div key={`photo_${index}`} className="mb-2">
                  <Image src={photoURL.url} alt={`Uploaded Photo ${index}`} />
                  <button onClick={() => deletePhoto(index, photoURL.url)}>
                    <FontAwesomeIcon icon={faTrash} /> {/* Trash icon */}
                  </button>
                </div>
              ))}
            </div>
          </div>
          {photoURLs.length > 5 && (
            <div className="flex justify-end  mt-2">
              <div className="grid grid-cols-3 gap-2 h-2">
                {photoURLs.slice(5).map((photoURL, index) => (
                  <div key={`photo_${index}`} className="mb-2 h-2">
                    <Image src={photoURL.url} alt={`Uploaded Photo ${index}`} />
                    <button onClick={() => deletePhoto(index,photoURL.url)}>
                      <FontAwesomeIcon icon={faTrash} /> {/* Trash icon */}
                    </button>
                  </div>
                ))}   
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col">
          <StepThreeCard
            icon={
              <div className="flex items-center justify-center rounded-full bg-iconBackground p-4 w-20 h-20 m-auto">
                <Image src={video} alt="Video" width={80} height={50} />
              </div>
            }
            definition="Property Listing with video gets 3X more views"
            buttonLabel="Attach Videos"
            onSelect={handleVideoSelect}
            onVideoUpload={videoUploadLoading}
          />
          <div className="flex justify-end ">
            {videoURLs.map((videoURL, index) => (
              <div key={`video_${index}`} className="mb-2 ml-3">
                <video controls width="180" height="120">
                  <source src={videoURL.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <button onClick={() => deleteVideo(index,videoURL.url)}>
                  <FontAwesomeIcon icon={faTrash} /> {/* Trash icon */}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      {uploadMessage && (
        <div
          className={`text-center mt-2 ${
            uploadMessage.includes("Error") ? "text-red-500" : "text-green-500"
          }`}
        >
          {uploadMessage}
        </div>
      )}

      <div className="mb-4 mt-4">
        <label className="block font-semibold mb-2 w-fit text-xs">
          Additional Rooms
        </label>
        <div className="flex flex-wrap gap-2">
          {renderButtons(allAdditionalRooms, data.additionalRooms, (value) =>
            onChange("additionalRooms", value)
          )}
        </div>
      </div>

      {/* Possession Status */}
      <div className="mb-4">
        <label className="block font-semibold mb-2 w-fit text-xs">
          Possession Status
        </label>
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
        <label className="block font-semibold mb-2 w-fit text-xs">
          Furnish Status
        </label>
        <div className="flex flex-wrap gap-2">
          {renderButtons(furnishStatusOptions, data.furnishStatus, (value) =>
            onChange("furnishStatus", value)
          )}
        </div>
      </div>

      {/* Number of Bedrooms */}
      <div className="mb-4">
        <label className="block font-semibold mb-2 w-fit text-xs">
          Number of Bedrooms
        </label>
        <div className="flex flex-wrap gap-2 text-sm">
          {renderButtons(bedroomOptions, data.numBedrooms, (value) =>
            onChange("numBedrooms", value)
          )}
        </div>
      </div>

      {/* Number of Bathrooms */}
      <div className="mb-4">
        <label className="block font-semibold mb-2 w-fit text-xs">
          Number of Bathrooms
        </label>
        <div className="flex flex-wrap gap-2">
          {renderButtons(bathroomOptions, data.numBathrooms, (value) =>
            onChange("numBathrooms", value)
          )}
        </div>
      </div>

      {/* Age of Property */}
      <div className="mb-4">
        <label className="block font-semibold mb-2 w-fit text-xs">
          Age of Property
        </label>
        <div className="flex flex-wrap gap-2">
          {renderButtons(propertyAgeOptions, data.propertyAge, (value) =>
            onChange("propertyAge", value)
          )}
        </div>
      </div>

      {/* Additional Balconies */}
      <div className="mb-4">
        <label className="block font-semibold mb-2 w-fit text-xs">
          Additional Balconies
        </label>
        <div className="flex flex-wrap gap-3">
          {renderButtons(allBalconyOptions, data.additionalBalconies, (value) =>
            onChange("additionalBalconies", value)
          )}
        </div>
      </div>

      {/* Power Backup */}
      <div className="mb-4">
        <label className="block font-semibold mb-2 w-fit text-xs">
          Power Backup
        </label>
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
          <label className="block font-semibold mb-2 w-fit text-xs">View</label>
          <select
            className="w-full h-[30px] border text-[10px] rounded-md px-4 py-2 focus:outline-none focus:border-primary"
            value={data.balconyView}
            onChange={(e) => onChange("balconyView", e.target.value)}
          >
            <option className="text-xs" value="">
              Select Balcony View
            </option>
            <option className="text-xs" value="city">
              City View
            </option>
            <option className="text-xs" value="garden">
              Garden View
            </option>
          </select>

          {/* Floor Number */}
          <div className="mb-4 mt-4">
            <label className="block font-semibold mb-2 w-fit text-xs">
              Floor Number
            </label>
            <input
              type="text"
              className="w-full h-[30px] border rounded-md px-4 py-2 focus:outline-none focus:border-primary"
              value={data.floorNumber}
              onChange={(e) => onChange("floorNumber", e.target.value)}
            />
          </div>

          {/* Tower/Block */}
          <div className="mb-4">
            <label className="block font-semibold mb-2 w-fit text-xs">
              Tower/Block
            </label>
            <input
              type="text"
              className="w-full h-[30px] border rounded-md px-4 py-2 focus:outline-none focus:border-primary"
              value={data.towerBlock}
              onChange={(e) => onChange("towerBlock", e.target.value)}
            />
          </div>
        </div>

        {/* Second Column */}
        <div className="mb-4 flex-1 pl-4 mt-0">
          <label className="block font-semibold mb-2 w-fit text-xs">
            Flooring Option
          </label>
          <input
            type="text"
            className="w-full border h-[30px] rounded-md px-4 py-2 focus:outline-none focus:border-primary"
            value={data.flooringOption}
            onChange={(e) => onChange("flooringOption", e.target.value)}
          />

          {/* Total Floors */}
          <div className="mb-4">
            <label className="block font-semibold mb-2 mt-4 w-fit text-xs">
              Total Floors
            </label>
            <input
              type="text"
              className="w-full h-[30px] border rounded-md px-4 py-2 focus:outline-none focus:border-primary"
              value={data.totalFloors}
              onChange={(e) => onChange("totalFloors", e.target.value)}
            />
          </div>

          {/* Unit Number */}
          <div className="">
            <label className="block font-semibold mb-2 w-fit text-xs">
              Unit Number
            </label>
            <input
              type="text"
              className="w-full border h-[30px] rounded-md px-4 py-2 focus:outline-none focus:border-primary"
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
