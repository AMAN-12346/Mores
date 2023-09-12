import React from 'react';
import Styles from "./index.module.css"

export default function HighlightAmenities({ property }) {
    return (
        <div className='flex max-sm:flex-wrap md:justify-center lg:justify-end lg:gap-6 gap-4 lg:text-lg md:text-lg text-sm'>
            <butoon className="bg-[#01819138] text-[#018191] text-center px-7 py-2 rounded-full shadow-md`">Affordable</butoon>
            <butoon className="bg-[#01819138] text-[#018191] text-center px-7 py-2 rounded-full shadow-md`">{property?.propertySubType}</butoon>
            <butoon className="bg-[#01819138] text-[#018191] text-center px-7 py-2 rounded-full shadow-md`">{property?.action}</butoon>
            <butoon className="bg-[#01819138] text-[#018191] text-center px-7 py-2 rounded-full shadow-md`">{property?.allowance}</butoon>
            <butoon className="bg-[#01819138] text-[#018191] text-center px-7 py-2 rounded-full shadow-md`">{property?.allowance}</butoon>
            <butoon className="bg-[#01819138] text-[#018191] text-center px-7 py-2 rounded-full shadow-md`">{property?.furniture}</butoon>
        </div>
    );
}
