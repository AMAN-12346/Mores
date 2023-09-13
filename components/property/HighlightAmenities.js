import React from 'react';
import Styles from "./index.module.css"

export default function HighlightAmenities({ property }) {
    return (
        <div className='flex my-2 max-sm:flex-wrap gap-3 max-lg:justify-around lg:justify-end lg:text-[12px] md:text-[10px] text-[8px]'>
            <butoon className="bg-[#01819138] text-[#018191] text-center px-7 py-2 rounded-full shadow-md`">Affordable</butoon>
            <butoon className="bg-[#01819138] text-[#018191] text-center px-7 py-2 rounded-full shadow-md`">{property?.propertySubType}</butoon>
            <butoon className="bg-[#01819138] text-[#018191] text-center px-7 py-2 rounded-full shadow-md`">{property?.action}</butoon>
            <butoon className="bg-[#01819138] text-[#018191] text-center px-7 py-2 rounded-full shadow-md`">{property?.allowance}</butoon>
            <butoon className="bg-[#01819138] text-[#018191] text-center px-7 py-2 rounded-full shadow-md`">{property?.allowance}</butoon>
            <butoon className="bg-[#01819138] text-[#018191] text-center px-7 py-2 rounded-full shadow-md`">{property?.furniture}</butoon>
        </div>
    );
}
