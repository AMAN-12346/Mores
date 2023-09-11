import React, { useState } from 'react';
import Image from 'next/image';
import bathtub from '../../assets/AmenitiesIcons/bathtub.svg';
import doubleBed from '../../assets/AmenitiesIcons/doubleBed.svg';
import school from '../../assets/AmenitiesIcons/school.svg';
import testing from '../../assets/AmenitiesIcons/testing.svg';
import Gymnasium from '../../assets/AmenitiesIcons/Gymnasium.png';
import Lift from '../../assets/AmenitiesIcons/Lift.png';
import CCTV from '../../assets/AmenitiesIcons/CCTV.png';
import FireFightingSystems from '../../assets/AmenitiesIcons/FireFightingSystems.png';
import Security from '../../assets/AmenitiesIcons/Security.png';
import wifi from '../../assets/AmenitiesIcons/wifi.png';
import BadmintonCourt from '../../assets/AmenitiesIcons/BadmintonCourt.png';
import TennisCourt from '../../assets/AmenitiesIcons/TennisCourt.png';
import SquashCourt from '../../assets/AmenitiesIcons/SquashCourt.png';
import Football from '../../assets/AmenitiesIcons/Football.png';
import tv from '../../assets/AmenitiesIcons/tv.png';
import Cricket from '../../assets/AmenitiesIcons/Cricket.png';
import Basketball from '../../assets/AmenitiesIcons/Basketball.png';
import Volleyball from '../../assets/AmenitiesIcons/Volleyball.png';
import Yoga from '../../assets/AmenitiesIcons/Yoga.png';
import PowerBackup from '../../assets/AmenitiesIcons/PowerBackup.png';
import Jogging from '../../assets/AmenitiesIcons/Jogging.png';

import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import useWindowWidth from '@/context/useWindowWidth';


// Example of amenityIcons object
const amenityIconsess = {
    SwimmingPool: testing,
    Lift: Lift,
    FireFightingSystems: FireFightingSystems,
    wifi: wifi,
    Security: Security,
    CCTV: CCTV,
    TV: tv,
    KidsPool: school,
    BadmintonCourt: BadmintonCourt,
    TennisCourt: TennisCourt,
    Football: Football,
    SquashCourt: SquashCourt,
    Basketball: Basketball,
    Cricket: Cricket,
    Volleyball: Volleyball,
    Yoga: Yoga,
    bathtub: bathtub,
    doubleBed: doubleBed,
    TableTennis: BadmintonCourt,
    Park: school,
};

export default function Amenities({ props }) {
    const allAmenities = Object.assign({}, props?.perks?.Sports, props?.perks?.safety);

    const [openview, setOpenview] = useState(true);
    const [Up, setUp] = useState(true);

    const windowWidth = useWindowWidth()

    const handleMobileView = () => {
        setOpenview(!openview);
    }

    // Create a function to map amenity values to their respective image info
    const mapAmenityToImage = (amenity) => {
        const amenityIconsess = {
            // ... your other icons
            TennisCourt: {
                image: TennisCourt,
                name: 'Tennis Court'
            },
            Jogging: {
                image: Jogging,
                name: "Jogging"
            },
            PowerBackup: {
                image: PowerBackup,
                name: "Power Backup"
            },
            Gymnasium: {
                image: Gymnasium,
                name: "Gymnasium"
            },
            School: {
                image: school,
                name: "School"
            },
            SwimmingPool: {
                image: Jogging,
                name: "Swimming Pool"
            },
            Lift: {
                image: Lift,
                name: "Lift"
            },
            FireFightingSystems: {
                image: FireFightingSystems,
                name: "Fire Fighting Systems"
            },
            wifi: {
                image: wifi,
                name: "WIFI"
            },
            PowerBackup: {
                image: PowerBackup,
                name: "Power Backup"
            },
            Security: {
                image: Security,
                name: "Security"
            },
            CCTV: {
                image: CCTV,
                name: "CCTV"
            },
            TV: {
                image: tv,
                name: "TV"
            },
            KidsPool: {
                image: school,
                name: "Kids Pool"
            },
            BadmintonCourt: {
                image: BadmintonCourt,
                name: "Badminton Court"
            },
            TennisCourt: {
                image: TennisCourt,
                name: "Tennis Court"
            },
            Football: {
                image: Football,
                name: "Football"
            },
            SquashCourt: {
                image: SquashCourt,
                name: "Squash Court"
            },
            Basketball: {
                image: Basketball,
                name: "Basketball"
            },
            Cricket: {
                image: Cricket,
                name: "Cricket"
            },
            Volleyball: {
                image: Volleyball,
                name: "Volleyball"
            },
            Yoga: {
                image: Yoga,
                name: "Yoga"
            },
            SquashCourt: {
                image: SquashCourt,
                name: "Squash Court"
            },
            Basketball: {
                image: Basketball,
                name: "Basket ball"
            },
            Cricket: {
                image: Cricket,
                name: "Cricket"
            },
            bathtub: {
                image: bathtub,
                name: "bathtub"
            },
            doubleBed: {
                image: doubleBed,
                name: "doubleBed"
            },
            TableTennis: {
                image: TennisCourt,
                name: "Table Tennis"
            },
            Park: {
                image: school,
                name: "Park"
            },
        };

        return amenityIconsess[amenity] || null;
    };

    const amenitiesWithImages = Object.entries(allAmenities)
        .filter(([amenity, value]) => value)
        .map(([amenity, value]) => ({
            amenity,
            imageInfo: mapAmenityToImage(amenity)
        }));

    const rows = [];
    const chunkSize = Math.ceil(amenitiesWithImages.length / 3);
    for (let i = 0; i < amenitiesWithImages.length; i += chunkSize) {
        rows.push(amenitiesWithImages.slice(i, i + chunkSize));
    }

    return (
        <div className="bg-white shadow-md">
            <div className="bg-[#018191] flex justify-between rounded-t-lg shadow-md p-4" onClick={handleMobileView}>
                <div>
                    <h1 className="text-white text-lg font-semibold">Amenities</h1>
                </div>
                {(windowWidth < 768 ) ? <div className='bg-white rounded-full w-[40px] h-[40px] pl-1 pt-1' onClick={() => setUp(!Up)}>
                    <h1 className="text-black text-lg font-semibold">{Up ? <FaAngleUp size={30} /> : <FaAngleDown size={30} />}</h1>
                </div> : ""}
            </div>
            {
                openview &&
                <div className="flex flex-wrap p-9 text-sm">
                    {rows.map((row, rowIndex) => (
                        <div key={rowIndex} className="md:w-1/2 lg:w-1/3 px-3 p-5">
                            <div className="flex flex-col gap-2 justify-center"> {/* Added justify-center */}
                                {row.map(({ amenity, imageInfo }) => (
                                    <div key={amenity} className="flex items-center gap-4">
                                        {imageInfo && (
                                            <Image
                                                src={imageInfo.image}
                                                alt={`${amenity} Icon`}
                                                height={24}
                                                width={24}
                                            />
                                        )}
                                        <p className="font-semibold">{imageInfo ? imageInfo.name : amenity}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            }

        </div>
    );
}


