import React, { useState } from 'react';
export default function PropertyInformation({ property }) {

    const [view, setView] = useState(true);

    const handleMobileView = () => {
        setView(!view);
    }

    // const currentStatusString = property.current_status.ReadyToMove ? "Ready to Move" : `Under Construction: ${property.current_status.UnderConstruction}`;
    return (
        <div>
            <div className="bg-[#9DACA1] rounded-t-lg shadow-lg p-4" onClick={handleMobileView}>
                <div>
                    <h1 className="text-white text-2xl font-semibold">Property Information</h1>
                </div>
            </div>
            {
                view &&
                <div className="bg-white p-8 shadow-md">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-sm">
                        {/* Left Column */}
                        <div className="grid-rows-1 space-y-4">
                            <div>
                                <label className="text-lg font-semibold">Property For</label>
                                <p className="mt-1">{property?.action}</p>
                            </div>
                            <hr className="my-4  bg-gray-300" />

                            <div>
                                <label className="text-lg font-semibold">City</label>
                                {/* <p className="mt-1">{property.cityName}</p>  */}
                            </div>
                            <hr className="my-4  bg-gray-300" />

                            <div>
                                <label className="text-lg font-semibold">price</label>
                                <p className="mt-1">{property?.price} Lac</p>
                            </div>
                            <hr className="my-4  bg-gray-300" />

                            <div>
                                <label className="text-lg font-semibold">Age of Property (Years)</label>
                                <p className="mt-1">0-1 Year</p>
                            </div>
                            <hr className="my-4  bg-gray-300" />

                            <div>
                                <label className="text-lg font-semibold">Lift Availability</label>
                                <p className="mt-1">{property?.perks?.safety?.Lift ? "Yes" : "No"}</p>
                            </div>
                            <hr className="my-4 bg-gray-300" />

                            <div>
                                <label className="text-lg font-semibold">Covered Parking</label>
                                <p className="mt-1">{property?.coverCarPark ? "YES" : "NO"}</p>
                            </div>
                            <hr className="my-4 bg-gray-300" />

                            <div>
                                <label className="text-lg font-semibold">Flooring</label>
                                <p className="mt-1">{property?.flooring}</p>
                            </div>
                            <hr className="my-4 bg-gray-300" />

                            {/* Add more sections as needed */}
                        </div>

                        {/* Middle Column */}
                        <div className="grid-rows-5 space-y-4">
                            <div>
                                <label className="text-lg font-semibold">Property Type</label>
                                <p className="mt-1">{property?.propertyType}</p>
                            </div>
                            <hr className="my-4  bg-gray-300" />

                            <div>
                                <label className="text-lg font-semibold">Locality</label>
                                <p className="mt-1">{property?.locality}</p>
                            </div>
                            <hr className="my-4  bg-gray-300" />

                            <div>
                                <label className="text-lg font-semibold">Possession Status</label>
                                {/* <p className="mt-1">{currentStatusString}</p>  */}
                            </div>
                            <hr className="my-4  bg-gray-300" />

                            <div>
                                <label className="text-lg font-semibold">Number of Rooms</label>
                                <p className="mt-1">{property?.bedrooms}</p>
                            </div>
                            <hr className="my-4  bg-gray-300" />

                            <div>
                                <label className="text-lg font-semibold">Balcony</label>
                                <p className="mt-1">{property?.balconies}</p>
                            </div>
                            <hr className="my-4  bg-gray-300" />

                            <div>
                                <label className="text-lg font-semibold">Facing</label>
                                <p className="mt-1">{property?.facing}</p>
                            </div>
                            <hr className="my-4  bg-gray-300" />

                            <div>
                                <label className="text-lg font-semibold">Floor Number</label>
                                <p className="mt-1">{property?.floorNumber}</p>
                            </div>
                            <hr className="my-4  bg-gray-300" />

                            {/* Add more sections as needed */}
                        </div>

                        {/* Right Column */}
                        <div className="grid-rows-9 space-y-4">
                            <div>
                                <label className="text-lg font-semibold">Building Type</label>
                                <p className="mt-1">{property?.propertySubType}</p>
                            </div>
                            <hr className="my-4  bg-gray-300" />

                            <div>
                                <label className="text-lg font-semibold">Area</label>
                                <p className="mt-1">{property?.areaDetails?.bedrooms} SqFt</p>
                            </div>
                            <hr className="my-4  bg-gray-300" />

                            <div>
                                <label className="text-lg font-semibold">Furnishing Status</label>
                                <p className="mt-1">{property?.furniture}</p>
                            </div>
                            <hr className="my-4  bg-gray-300" />

                            <div>
                                <label className="text-lg font-semibold">Number of Bathroom</label>
                                <p className="mt-1">{property?.bathrooms}</p>
                            </div>
                            <hr className="my-4  bg-gray-300" />

                            <div>
                                <label className="text-lg font-semibold">Water Source</label>
                                <p className="mt-1">YES</p>
                            </div>
                            <hr className="my-4  bg-gray-300" />

                            <div>
                                <label className="text-lg font-semibold">View</label>
                                <p className="mt-1">{property?.View}</p>
                            </div>
                            <hr className="my-4  bg-gray-300" />
                            <div>
                                <label className="text-lg font-semibold">Total Floor Count</label>
                                <p className="mt-1">{property?.totalfloor}</p>
                            </div>
                            <hr className="my-4  bg-gray-300" />

                            {/* Add more sections as needed */}
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
