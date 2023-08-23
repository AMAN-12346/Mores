import React from "react";
import { TiImage } from "react-icons/ti"; // React Icon for photos
import { RiVideoLine } from "react-icons/ri"; // React Icon for videos
import StepThreeCard from "./cards/StepOneCard"; // Import your pre-built card component
import AdditionalDetailsForm from "./AdditionalDetailsForm";

export default function AdditionalDetail() {
  return (
    <div>

    
    <div className="flex justify-between gap-8">
      <StepThreeCard
        definition="Add your favorite photos"
        buttonLabel="Add your favorite photos"
        imageSrc={TiImage}
      ></StepThreeCard>

      <StepThreeCard
        definition="Add an exciting video"
        buttonLabel="Add an exciting video"
        imageSrc={RiVideoLine}
      ></StepThreeCard>
      
    </div>

    <AdditionalDetailsForm/>

    </div>
  );
}
