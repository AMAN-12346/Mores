import React from 'react'

export default function PropertyInformation({ property }) {
    return (
        <div>
            <div className="bg-[#9DACA1] rounded-t-lg shadow-lg p-2">
                <div>
                    <h1 className="text-white text-2xl font-semibold">Property Information</h1>
                </div>
            </div>
            <div className="bg-white p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Left Column */}
                    <div className="grid-rows-1 space-y-4">
                        <div>
                            <label className="text-lg font-semibold">Property For</label>
                            <p className="mt-2"><strong>{property.action}</strong></p>
                        </div>
                        <hr className="my-4  bg-gray-300" />

                        <div>
                            <label className="text-lg font-semibold">City</label>
                            <p className="mt-2"><strong>{property.cityName}</strong></p>
                        </div>
                        <hr className="my-4  bg-gray-300" />

                        <div>
                            <label className="text-lg font-semibold">price</label>
                            <p className="mt-2"><strong>{property.price}Lac</strong></p>
                        </div>
                        <hr className="my-4  bg-gray-300" />

                        <div>
                            <label className="text-lg font-semibold">Age of Property (Years)</label>
                            <p className="mt-2"><strong>0-1 Year</strong></p>
                        </div>
                        <hr className="my-4  bg-gray-300" />

                        <div>
                            <label className="text-lg font-semibold">Lift Availability</label>
                            <p className="mt-2"><strong>{property.perks.safety.Lift ? "Yes" : "No"}</strong></p>
                        </div>
                        <hr className="my-4 bg-gray-300" />

                        <div>
                            <label className="text-lg font-semibold">Covered Parking</label>
                            <p className="mt-2"><strong>{property.coverCarPark}</strong></p>
                        </div>
                        <hr className="my-4 bg-gray-300" />

                        <div>
                            <label className="text-lg font-semibold">Flooring</label>
                            <p className="mt-2"><strong>{property.flooring}</strong></p>
                        </div>
                        <hr className="my-4 bg-gray-300" />

                        {/* Add more sections as needed */}
                    </div>

                    {/* Middle Column */}
                    <div className="grid-rows-5 space-y-4">
                        <div>
                            <label className="text-lg font-semibold">Property Type</label>
                            <p className="mt-2"><strong>{property.propertyType}</strong></p>
                        </div>
                        <hr className="my-4  bg-gray-300" />

                        <div>
                            <label className="text-lg font-semibold">Locality</label>
                            <p className="mt-2"><strong>{property.locality}</strong></p>
                        </div>
                        <hr className="my-4  bg-gray-300" />

                        <div>
                            <label className="text-lg font-semibold">Possession Status</label>
                            <p className="mt-2"><strong>{property.current_status}</strong></p>
                        </div>
                        <hr className="my-4  bg-gray-300" />

                        <div>
                            <label className="text-lg font-semibold">Number of Rooms</label>
                            <p className="mt-2"><strong>{property.bedrooms}</strong></p>
                        </div>
                        <hr className="my-4  bg-gray-300" />

                        <div>
                            <label className="text-lg font-semibold">Balcony</label>
                            <p className="mt-2"><strong>{property.balconies}</strong></p>
                        </div>
                        <hr className="my-4  bg-gray-300" />

                        <div>
                            <label className="text-lg font-semibold">Facing</label>
                            <p className="mt-2"><strong>{property.facing}</strong></p>
                        </div>
                        <hr className="my-4  bg-gray-300" />

                        <div>
                            <label className="text-lg font-semibold">Floor Number</label>
                            <p className="mt-2"><strong>{property.floorNumber}</strong></p>
                        </div>
                        <hr className="my-4  bg-gray-300" />

                        {/* Add more sections as needed */}
                    </div>

                    {/* Right Column */}
                    <div className="grid-rows-9 space-y-4">
                        <div>
                            <label className="text-lg font-semibold">Building Type</label>
                            <p className="mt-2"><strong>{property.propertySubType}</strong></p>
                        </div>
                        <hr className="my-4  bg-gray-300" />

                        <div>
                            <label className="text-lg font-semibold">Area</label>
                            <p className="mt-2"><strong>{property.areaDetails.bedrooms} SqFt</strong></p>
                        </div>
                        <hr className="my-4  bg-gray-300" />

                        <div>
                            <label className="text-lg font-semibold">Furnishing Status</label>
                            <p className="mt-2"><strong>{property.furniture}</strong></p>
                        </div>
                        <hr className="my-4  bg-gray-300" />

                        <div>
                            <label className="text-lg font-semibold">Number of Bathroom</label>
                            <p className="mt-2"><strong>{property.bathrooms}</strong></p>
                        </div>
                        <hr className="my-4  bg-gray-300" />

                        <div>
                            <label className="text-lg font-semibold">Water Source</label>
                            <p className="mt-2"><strong>YES</strong></p>
                        </div>
                        <hr className="my-4  bg-gray-300" />

                        <div>
                            <label className="text-lg font-semibold">View</label>
                            <p className="mt-2"><strong>{property.View}</strong></p>
                        </div>
                        <hr className="my-4  bg-gray-300" />
                        <div>
                            <label className="text-lg font-semibold">Total Floor Count</label>
                            <p className="mt-2"><strong>{property.totalFlore}</strong></p>
                        </div>
                        <hr className="my-4  bg-gray-300" />

                        {/* Add more sections as needed */}
                    </div>
                </div>
            </div>
        </div>
    )
}
