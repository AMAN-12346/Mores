import React from "react";

const StepThreeCard = ({ imageSrc, definition, buttonLabel }) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="border rounded-lg p-4">
        {/* Image */}
        <img src={imageSrc} alt="Main Image" />

        {/* Definition */}
        <p className="text-base">{definition}</p>

        {/* Button */}
        <button className="mt-2 py-1 px-3 rounded bg-blue-500 text-white text-sm">
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default StepThreeCard;
