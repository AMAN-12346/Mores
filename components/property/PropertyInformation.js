import useWindowWidth from '@/context/useWindowWidth';
import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
export default function PropertyInformation({ property }) {

    const [view, setView] = useState(true);

    const [expanded, setExpanded] = useState(false); // Create a state variable
    const [Up, setUp] = useState(true);

    const windowWidth = useWindowWidth();


    // Function to toggle the 'expanded' state
    const togglePoints = () => {
        setExpanded(!expanded); {/* style={{ display: expanded ? 'block' : 'none' }} */ }
    };

    const handleMobileView = () => {
        setView(!view);
    }


    // const currentStatusString = property.current_status.ReadyToMove ? "Ready to Move" : `Under Construction: ${property.current_status.UnderConstruction}`;
    return (
        <>
            <div className="bg-[#9DACA1] flex justify-between rounded-t-lg lg:p-4 md:p-3 p-2" onClick={handleMobileView}>
                <div>
                    <h1 className="text-white text-[14px] font-semibold">Property Information</h1>
                </div>
                {(windowWidth < 768 ? <div className='bg-white rounded-full w-[30px] h-[30px] pl-[2px] pt-1' onClick={() => setUp(!Up)}>
                    <h1 className="text-black text-lg font-semibold">{Up ? <FaAngleUp size={25} /> : <FaAngleDown size={25} />}</h1>
                </div> : "")}
            </div>
            {
                view &&
                <div className="bg-white p-9 shadow-md">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                        {/* Left Column */}
                        <div className="grid-rows-1 space-y-1">
                            <div>
                                <label className="text-[12px] font-semibold">Property For</label>
                                <p className="text-[11px]">{property?.action}</p>
                            </div>
                            <hr className="my-3 bg-gray-300" />

                            <div>
                                <label className="text-[12px] font-semibold">City</label>
                                <p className="text-[11px] ">{property?.cityName ? property.cityName : "Noida"}</p>
                            </div>
                            <hr className="my-4 mb-3  bg-gray-300" />

                            <div>
                                <label className="text-[12px] font-semibold">Price</label>
                                <p className="text-[11px] ">{property?.price} Lac</p>
                            </div>
                            <hr className="my-4  bg-gray-300" />

                            <div>
                                <label className="text-[12px] font-semibold">Age of Property (Years)</label>
                                <p className="text-[11px] ">0-1 Year</p>
                            </div>
                            <hr className="my-4  bg-gray-300" />

                            <div>
                                <label className="text-[12px] font-semibold">Lift Availability</label>
                                <p className="text-[11px] ">{property?.perks?.safety?.Lift ? "Yes" : "No"}</p>
                            </div>
                            <hr className="my-4 bg-gray-300" />

                            <div>
                                <label className="text-[12px] font-semibold">Covered Parking</label>
                                <p className="text-[11px] ">{property?.coverCarPark ? "YES" : "NO"}</p>
                            </div>
                            <hr className="my-4 bg-gray-300" />

                            <div>
                                <label className="text-[12px] font-semibold">Flooring</label>
                                <p className="text-[11px] ">{property?.flooring}</p>
                            </div>
                            <hr className="my-4 bg-gray-300" />

                            {/* Add more sections as needed */}
                        </div>

                        {/* Middle Column */}
                        <div className="grid-rows-5 space-y-1">
                            <div>
                                <label className="text-[12px] font-semibold">Property Type</label>
                                <p className="text-[11px] ">{property?.propertyType}</p>
                            </div>
                            <hr className="my-4  bg-gray-300" />

                            <div>
                                <label className="text-[12px] font-semibold">Locality</label>
                                <p className="text-[11px] ">{property?.locality}</p>
                            </div>
                            <hr className="my-4  bg-gray-300" />

                            <div>
                                <label className="text-[12px] font-semibold">Possession Status</label>
                                <p className="text-[11px] ">ON</p>
                            </div>
                            <hr className="my-4  bg-gray-300" />

                            <div>
                                <label className="text-[12px] font-semibold">Number of Rooms</label>
                                <p className="text-[11px] ">{property?.bedrooms}</p>
                            </div>
                            <hr className="my-4  bg-gray-300" />

                            <div>
                                <label className="text-[12px] font-semibold">Balcony</label>
                                <p className="text-[11px] ">{property?.balconies}</p>
                            </div>
                            <hr className="my-4  bg-gray-300" />

                            <div>
                                <label className="text-[12px] font-semibold">Facing</label>
                                <p className="text-[11px] ">{property?.facing}</p>
                            </div>
                            <hr className="my-4  bg-gray-300" />

                            <div>
                                <label className="text-[12px] font-semibold">Floor Number</label>
                                <p className="text-[11px] ">{property?.floorNumber}</p>
                            </div>
                            <hr className="my-4  bg-gray-300" />

                            {/* Add more sections as needed */}
                        </div>

                        {/* Right Column */}
                        <div className="grid-rows-9 space-y-1">
                            <div>
                                <label className="text-[12px] font-semibold">Building Type</label>
                                <p className="text-[11px] ">{property?.propertySubType}</p>
                            </div>
                            <hr className="my-4  bg-gray-300" />

                            <div>
                                <label className="text-[12px] font-semibold">Area</label>
                                <p className="text-[11px] ">{property?.areaDetails?.bedrooms} SqFt</p>
                            </div>
                            <hr className="my-4  bg-gray-300" />

                            <div>
                                <label className="text-[12px] font-semibold">Furnishing Status</label>
                                <p className="text-[11px] ">{property?.furniture}</p>
                            </div>
                            <hr className="my-4  bg-gray-300" />

                            <div>
                                <label className="text-[12px] font-semibold">Number of Bathroom</label>
                                <p className="text-[11px] ">{property?.bathrooms}</p>
                            </div>
                            <hr className="my-4  bg-gray-300" />

                            <div>
                                <label className="text-[12px] font-semibold">Water Source</label>
                                <p className="text-[11px] ">YES</p>
                            </div>
                            <hr className="my-4  bg-gray-300" />

                            <div>
                                <label className="text-[12px] font-semibold">View</label>
                                <p className="text-[11px] ">{property?.View}</p>
                            </div>
                            <hr className="my-4  bg-gray-300" />
                            <div>
                                <label className="text-[12px] font-semibold">Total Floor Count</label>
                                <p className="text-[11px] ">{property?.totalfloor}</p>
                            </div>
                            <hr className="my-4  bg-gray-300" />

                            {/* Add more sections as needed */}
                        </div>
                    </div>
                    {/* <div className="flex items-center justify-center mt-4" onClick={togglePoints}>
                        <p className="cursor-pointer">Read More</p>
                        <div className="w-10 h-10 rounded-full flex items-center justify-center mr-2 order-first border border-[#e8dfd6]">
                            {expanded ? <FaAngleUp size={20} /> : <FaAngleDown size={20} />}
                        </div>
                    </div> */}
                </div>

            }
        </>
    )
}
