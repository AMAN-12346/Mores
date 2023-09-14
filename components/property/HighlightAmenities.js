import React from 'react';
import Styles from "./index.module.css"

export default function HighlightAmenities({ property }) {
    return (
        <div className='flex my-2 max-sm:flex-wrap gap-3 max-lg:justify-evenly lg:justify-end lg:text-[12px] md:text-[10px] text-[8px]'>
            <butoon className="bg-[#01819138] text-[#018191] text-center px-7 py-2 rounded-full font-bold hadow-md`">AFFORDABLE</butoon>
            <butoon className="bg-[#01819138] text-[#018191] text-center px-7 py-2 rounded-full  font-bold shadow-md`">{property?.propertySubType}</butoon>
            <butoon className="bg-[#01819138] text-[#018191] text-center px-7 py-2 rounded-full  font-bold shadow-md`">{property?.action}</butoon>
            <butoon className="bg-[#01819138] text-[#018191] text-center px-7 py-2 rounded-full  font-bold shadow-md`">{property?.allowance}</butoon>
            <butoon className="bg-[#01819138] text-[#018191] text-center px-7 py-2 rounded-full  font-bold shadow-md`">{property?.allowance}</butoon>
            <butoon className="bg-[#01819138] text-[#018191] text-center px-7 py-2 rounded-full  font-bold shadow-md`">{property?.furniture}</butoon>
        </div>
    );
}
