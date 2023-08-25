import React, { useState } from "react";
import Image from "next/image";
import photo from "../component/services/assets/photo.png";
import video from "../component/services/assets/vedio.png";
import StepThreeCard from "./cards/StepThreeCard";
import AdditionalDetailsForm from "./AdditionalDetailsForm";

export default function AdditionalDetail() {
  const [selectedPhotos, setSelectedPhotos] = useState([]);
  const [selectedVideos, setSelectedVideos] = useState([]);

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

  return (
    <div className="p-8 h">
     <label className="block font-semibold mb-2">Upload Photo/Video</label>

      <div className="flex justify-center gap-8">
        <StepThreeCard
          icon={
            <div className="rounded-full bg-iconBackground p-4 w-20 m-auto">
              <Image
                src={video}
                alt="Video"
                width={80}
                height={80}
              />
            </div>
          }
          definition="Property Listing with more than 5 photos gets more views"
          buttonLabel="Attach Photos"
          onSelect={handlePhotoSelect}
        />
        <StepThreeCard
          icon={
            <div className="flex items-center justify-center rounded-full bg-iconBackground p-4 w-20 h-20 m-auto">
              <Image
                src={photo}
                alt="Photo"
                width={80}
                height={50}
              />
            </div>
          }
          definition="Property Listing with video gets 3X more views"
          buttonLabel="Attach Videos"
          onSelect={handleVideoSelect}
        />
      </div>

      <AdditionalDetailsForm />

      {/* Display selected photos */}
      {/* <div>
        {selectedPhotos.map((file, index) => (
          <div key={index}>{file.name}</div>
        ))}
      </div> */}

      {/* Display selected videos */}
      {/* <div>
        {selectedVideos.map((file, index) => (
          <div key={index}>{file.name}</div>
        ))}
      </div> */}
    </div>
  );
}
