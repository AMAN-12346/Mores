import FilterInput from "./FilterInput";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MainAccordionMview = ({ hname, htype, filters }) => {
  const [show, setShow] = useState(true);
  function handleClick() {
    setShow(!show);
  }
  return (
    <div className=" flex flex-col  w-5/5 mt-4 ">
      <div
        onClick={handleClick}
        className="flex justify-between items-center cursor-pointer"
      >
        <h1 className="font-bold text-base">{hname}</h1>
        <div
          className={`ms-6 transition-all duration-500 ${
            show ? "rotate-180" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="10"
            viewBox="0 0 20 13"
            fill="none"
          >
            <path
              d="M18.021 2.02101L10 10.042L1.97899 2.02101"
              stroke="#018191"
              stroke-width="4"
            />
          </svg>
        </div>
      </div>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transiton={{ duration: 0.3 }}
            className="overflow-clip"
          >
            {htype === "budget" && (
              <div className="flex justify-evenly mt-4 text-xs">
                <div className="flex items-start border border-solid border-searchPageText rounded-md pl-3 pr-5 py-2 ">
                  <h1 className="text-searchPageText font-medium">Min</h1>
                </div>
                <div className="flex items-start border border-solid border-gray-400 rounded-md pl-2 pr-5 py-2">
                  <h1>Max</h1>
                </div>
              </div>
            )}
            {filters.map((filter, index) => (
              <FilterInput name={filter} key={index} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default MainAccordionMview;
