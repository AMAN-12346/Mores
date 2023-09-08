import React from 'react';
import Styles from "./index.module.css"

export default function HighlightAmenities({ property }) {
    return (
        <div>
            <div className="flex justify-between m-4">
                <p className={`bg-[#a7d6dd] px-3 py-2 rounded-full shadow-md`}>Affordable</p>
                <p className={`bg-[#a7d6dd] px-3 py-2 rounded-full shadow-md`}>Newly build</p>
                <p className={`bg-[#a7d6dd] px-3 py-2 rounded-full shadow-md`}>{property?.propertySubType}</p>
                <p className={`bg-[#a7d6dd] px-3 py-2 rounded-full shadow-md`}>{property?.action}</p>
                <p className={`bg-[#a7d6dd] px-3 py-2 rounded-full shadow-md`}>{property?.allowance}</p>
                <p className={`bg-[#a7d6dd] px-3 py-2 rounded-full shadow-md`}>{property?.furniture}</p>
            </div>
        </div>
    );
}
