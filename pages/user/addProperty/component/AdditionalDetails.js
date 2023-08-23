import React from "react";
import { TiImage } from "react-icons/ti"; // React Icon for photos
import { RiVideoLine } from "react-icons/ri"; // React Icon for videos
import StepThreeCard from "./cards/StepOneCard"; // Import your pre-built card component

export default function AdditionalDetail() {
  return (
    <div className="flex justify-between gap-8">
      <StepThreeCard
        mainHeading="Add Photos"
        definition="Add your favorite photos"
        buttonLabel="Add your favorite photos"
      >
        <div className="flex flex-col items-center">
          <TiImage className="text-4xl" /> {/* React Icon for photos */}
        </div>
      </StepThreeCard>

      <StepThreeCard
        mainHeading="Add Video"
        definition="Add an exciting video"
        buttonLabel="Add an exciting video"
      >
        <div className="flex flex-col items-center">
          <RiVideoLine className="text-4xl" /> {/* React Icon for videos */}
        </div>
      </StepThreeCard>
    </div>
  );
}
