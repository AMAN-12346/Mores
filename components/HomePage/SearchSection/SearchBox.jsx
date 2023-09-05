import Image from "next/image";
import nearme from "../../../assets/SearchBoxIcon/nearme.svg";
import magnifyingGlass from "../../../assets/SearchBoxIcon/magnifyglass.svg"
import { useState } from "react";
const SearchBox = () => {
  const [budget, setBudget] = useState("");
  const [propertyType, setPropertyType] = useState("");

  const handleBudgetChange = (event) => {
    setBudget(event.target.value);
  };
  const handlePropertyChange = (event) => {
    setPropertyType(event.target.value);
  };
  return (
    <div className="flex bg-white rounded-xl p-4 mt-4 justify-evenly">
      <div className="flex bg-nearme rounded-md p-2 gap-2 items-center">
        <Image src={nearme} alt="icon" />
        <button className="text-primary sm:w-24"> Near Me </button>
      </div>
      <div className="flex items-center">
        <div className="flex items-center">
          <select
            value={budget}
            onChange={handleBudgetChange}
            className="appearance-none w-full px-4 py-2 rounded-lg leading-tight focus:outline-none focus:shadow-outline font-bold"
          >
            <option value="">Budget</option>
            <option value="0-100000">₹0 - ₹100,000</option>
            <option value="100000-200000">₹100,000 - ₹200,000</option>
            <option value="200000-300000">₹200,000 - ₹300,000</option>
          </select>
          <svg className="hidden md:block"
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="9"
            viewBox="0 0 17 9"
            fill="none"
          >
            <path
              d="M15.0811 0.74463C15.1567 0.672745 15.2456 0.616548 15.3428 0.579246C15.4399 0.541945 15.5435 0.524268 15.6474 0.527228C15.7513 0.530187 15.8537 0.553724 15.9486 0.596495C16.0435 0.639265 16.1291 0.700431 16.2005 0.776501C16.272 0.852571 16.3278 0.942055 16.3649 1.03984C16.4019 1.13763 16.4195 1.24181 16.4166 1.34643C16.4136 1.45105 16.3902 1.55406 16.3477 1.64958C16.3052 1.74511 16.2445 1.83127 16.1689 1.90315L9.04388 8.67582C8.89689 8.81568 8.70229 8.89361 8.50001 8.89361C8.29773 8.89361 8.10312 8.81568 7.95613 8.67582L0.830341 1.90315C0.753105 1.83174 0.690736 1.7456 0.646858 1.64972C0.602981 1.55385 0.578468 1.45016 0.574744 1.34467C0.571021 1.23918 0.58816 1.13399 0.625168 1.03523C0.662174 0.93646 0.71831 0.846078 0.790316 0.769332C0.862322 0.692585 0.948761 0.631003 1.04461 0.588163C1.14047 0.545323 1.24382 0.522079 1.34867 0.519781C1.45353 0.517482 1.55779 0.536175 1.65541 0.574775C1.75302 0.613374 1.84204 0.67111 1.9173 0.744629L8.50001 7.00098L15.0811 0.74463Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="flex items-center">
          <select
            value={propertyType}
            onChange={handlePropertyChange}
            className="md:hidden appearance-none w-full px-4 py-2 rounded-lg leading-tight focus:outline-none focus:shadow-outline font-bold"
          >
            <option value="">Property Type</option>
            <option value="option1">Resendential</option>
            <option value="option2">Commercial</option>
          </select>
          <svg className="md:hidden sm:hidden"
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="9"
            viewBox="0 0 17 9"
            fill="none"
          >
            <path
              d="M15.0811 0.74463C15.1567 0.672745 15.2456 0.616548 15.3428 0.579246C15.4399 0.541945 15.5435 0.524268 15.6474 0.527228C15.7513 0.530187 15.8537 0.553724 15.9486 0.596495C16.0435 0.639265 16.1291 0.700431 16.2005 0.776501C16.272 0.852571 16.3278 0.942055 16.3649 1.03984C16.4019 1.13763 16.4195 1.24181 16.4166 1.34643C16.4136 1.45105 16.3902 1.55406 16.3477 1.64958C16.3052 1.74511 16.2445 1.83127 16.1689 1.90315L9.04388 8.67582C8.89689 8.81568 8.70229 8.89361 8.50001 8.89361C8.29773 8.89361 8.10312 8.81568 7.95613 8.67582L0.830341 1.90315C0.753105 1.83174 0.690736 1.7456 0.646858 1.64972C0.602981 1.55385 0.578468 1.45016 0.574744 1.34467C0.571021 1.23918 0.58816 1.13399 0.625168 1.03523C0.662174 0.93646 0.71831 0.846078 0.790316 0.769332C0.862322 0.692585 0.948761 0.631003 1.04461 0.588163C1.14047 0.545323 1.24382 0.522079 1.34867 0.519781C1.45353 0.517482 1.55779 0.536175 1.65541 0.574775C1.75302 0.613374 1.84204 0.67111 1.9173 0.744629L8.50001 7.00098L15.0811 0.74463Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="ml-10"> 
            <input type="text" placeholder="Enter the location" className="px-4 py-2 focus:border-gray-200"/>
        </div>
        <div className="bg-primary px-4 py-2 ml-36 rounded-md flex text-white">
            <Image src={magnifyingGlass} alt="icon" height={30} width={30}/>
            <button className="md:hidden">Search</button>
        </div>
      </div>
    </div>
  );
};
export default SearchBox;
