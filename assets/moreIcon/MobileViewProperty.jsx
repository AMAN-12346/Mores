import React from "react";
import Image from "next/image";
import Like from "./likeHeart.svg";
import Share from "./share.svg";
// import { useWindowDimensions } from 'next/head';

const MyComponent = () => {
  return (
    
      <div className="flex gap-2 justify-end mt-3">
        <div className="flex gap-2  text-SearchResultText text-sm items-center">
          <div className="me-3">
            <h1>1.5 BHK</h1>
          </div>
          <div className=" bg-slate-100 rounded-full p-1 h-[27px] w-[27px]">
            <Image height={40} width={40} src={Like} alt="heartIcon" />
          </div>
          <div className=" bg-slate-100 rounded-full p-1 h-[27px] w-[27px]">
            <Image height={50} width={50} src={Share} alt="share" />
          </div>
        </div>
      </div>
  );
};

export default MyComponent;
