import React from 'react';
import Image from 'next/image';
import bathtub from '../../../assets/moreIcon/bathtub.svg';
import school from '../../../assets/moreIcon/school.svg';
import testing from '../../../assets/moreIcon/testing.svg';
import Gymnasium from '../../../assets/moreIcon/Gymnasium.png';
import Lift from '../../../assets/moreIcon/Lift.png';
// import Gymnasium from '../../../assets/moreIcon/Gymnasium.png';
// import Gymnasium from '../../../assets/moreIcon/Gymnasium.png';
// import Gymnasium from '../../../assets/moreIcon/Gymnasium.png';
// import Gymnasium from '../../../assets/moreIcon/Gymnasium.png';
// import Gymnasium from '../../../assets/moreIcon/Gymnasium.png';
// import Gymnasium from '../../../assets/moreIcon/Gymnasium.png';

// Example of amenityIcons object
const amenityIcons = {
    Gymnasium: Gymnasium,
    school: school,
    SwimmingPool:testing,
    Lift : Lift
    // ... and so on for other amenities
};

export default function Amenities({ props }) {
    const allAmenities = Object.assign({}, props.perks.Sports, props.perks.safety, props.perks.furniture);

    const amenities = Object.entries(allAmenities)
        .filter(([amenity, value]) => value)
        .map(([amenity]) => amenity);

    const rows = [];
    const chunkSize = Math.ceil(amenities.length / 3); // Adjusted to 3 chunks
    for (let i = 0; i < amenities.length; i += chunkSize) {
        rows.push(amenities.slice(i, i + chunkSize));
    }

    return (
        <div className="bg-white">
            <div className="bg-[#018191] rounded-t-lg shadow-lg p-2">
                <div>
                    <h1 className="text-white text-2xl font-semibold">Amenities</h1>
                </div>
            </div>
            <div className="flex flex-wrap m-5">
                {rows.map((row, rowIndex) => (
                    <div key={rowIndex} className="w-full md:w-1/2 lg:w-1/3 px-3">
                        <div className="flex flex-col gap-4">
                            {row.map((amenity) => (
                                <div key={amenity} className="flex items-center gap-2">
                                    <Image
                                        src={amenityIcons[amenity]} // Use the SVG path from amenityIcons
                                        alt={`${amenity} Icon`}
                                        height={24} // Set the height of the image
                                        width={24} // Set the width of the image
                                    />
                                    <p className="font-semibold">{amenity}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
