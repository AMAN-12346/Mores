import data from "./SortingOptions/sortingOptions.json";
import { useState } from "react";
const SortByDropdown = () => {
  const [selectedOption, setSelectedOption] = useState("default");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="inline-flex font-semibold">
      <select
        value={selectedOption}
        onChange={handleOptionChange}
        className="appearance-none bg-sortbybg  py-2 px-4 leading-tight focus:outline-none focus:shadow-outline"
      >
        {data.map((option) => (
          <option className="text-sm" key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none bg-sortbybg flex items-center px-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="10"
          viewBox="0 0 16 10"
          fill="none"
        >
          <path
            d="M15.0315 1.0105L8.021 8.021L1.0105 1.0105"
            stroke="#018191"
            stroke-width="2"
          />
        </svg>
      </div>
    </div>
  );
};
export default SortByDropdown;
