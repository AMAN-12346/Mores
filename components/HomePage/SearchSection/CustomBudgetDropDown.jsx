import React, { useState } from "react";
import Image from "next/image";
import downArrow from "../../../assets/SearchBoxIcon/downarrow.svg";

const CustomBudgetDropdown = ({ value, onChange, handleClick }) => {
  return (
    <div className="flex items-center">
      <div className="flex cursor-pointer items-center">
        <select
          value={value}
        //   onChange={onChange}
          className={`appearance-none lg:w-[70px] md:w-[70px]" : "lg:w-fit md:w-fit text-xs px-1 py-1 rounded-lg leading-tight focus:outline-none focus:shadow-outline font-bold max-lg:w-auto`}
        >
          <option value="">Budget</option>
          <option value="1000000-2000000">10lac-20lac</option>
          <option value="2000000-3000000">20lac-30lac</option>
          <option value="3000000-4000000">30lac-40lac</option>
        </select>
        <Image
          src={downArrow}
          height={15}
          width={15}
          alt="icon"
        //   onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default CustomBudgetDropdown;