import React from "react";

const StepThreeCard = ({
  icon,
  definition,
  buttonLabel,
  onSelect,
  onPhotoUpload,
  onVideoUpload,
}) => {
  return (
    <div className="flex items-center justify-center h-30 bg-secondary rounded lg:w-80 sm:w-fit mb-3">
      <div className="rounded-lg p-4 text-center">
        {/* Icon */}
        <div className="text-5xl mb-4 ">{icon}</div>

        {/* Definition */}
        <p className="text-black text-center font-poppins text-sm font-normal leading-[128%] tracking-[0.14px]">
          {definition}
        </p>

        {/* Button */}
        <button
          className="mt-2 py-1 px-3 rounded bg-primary text-white text-sm w-30 h-10 flex-shrink-0 border-none border-radius-9"
          onClick={onSelect}
          disabled={onPhotoUpload || onVideoUpload}
        >
          {onPhotoUpload || onVideoUpload ? "Uploading..." : buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default StepThreeCard;
