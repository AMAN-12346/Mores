import React, { useState } from 'react';
import Image from 'next/image';
import bathtub from '../../../assets/moreIcon/bathtub.svg';
import doubleBed from '../../../assets/moreIcon/doubleBed.svg';
import school from '../../../assets/moreIcon/school.svg';
import testing from '../../../assets/moreIcon/testing.svg';
import Gymnasium from '../../../assets/moreIcon/Gymnasium.png';
import Lift from '../../../assets/moreIcon/Lift.png';
import CCTV from '../../../assets/moreIcon/CCTV.png';
import FireFightingSystems from '../../../assets/moreIcon/FireFightingSystems.png';
import Security from '../../../assets/moreIcon/Security.png';
import wifi from '../../../assets/moreIcon/wifi.png';
import BadmintonCourt from '../../../assets/moreIcon/BadmintonCourt.png';
import TennisCourt from '../../../assets/moreIcon/TennisCourt.png';
import SquashCourt from '../../../assets/moreIcon/SquashCourt.png';
import Football from '../../../assets/moreIcon/Football.png';
import tv from '../../../assets/moreIcon/tv.png';
import Cricket from '../../../assets/moreIcon/Cricket.png';
import Basketball from '../../../assets/moreIcon/Basketball.png';
import Volleyball from '../../../assets/moreIcon/Volleyball.png';
import Yoga from '../../../assets/moreIcon/Yoga.png';
import PowerBackup from '../../../assets/moreIcon/PowerBackup.png';
import Jogging from '../../../assets/moreIcon/Jogging.png';


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
                name: "PowerBackup"
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
                name: "wifi"
            },
            PowerBackup: {
                image: PowerBackup,
                name: "PowerBackup"
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
                name: "KidsPool"
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
                name: "Basketball"
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
            <div className="bg-[#018191] rounded-t-lg shadow-md p-4" onClick={handleMobileView}>
                <div>
                    <h1 className="text-white text-2xl font-semibold">Amenities</h1>
                </div>
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


