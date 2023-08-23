import React from 'react';
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
import table from '../../../assets/moreIcon/table.png';
import sofa from '../../../assets/moreIcon/sofa.png';
import Jogging from '../../../assets/moreIcon/Jogging.png';
import { tabClasses } from '@mui/material';

// Example of amenityIcons object
const amenityIcons = {
    Gymnasium: Gymnasium,
    school: school,
    SwimmingPool:testing,
    Lift : Lift,
    FireFightingSystems : FireFightingSystems,
    wifi : wifi,
    Security : Security,
    CCTV : CCTV,
    tv : tv,
    KidsPool: school,
    BadmintonCourt : BadmintonCourt,
    TennisCourt :  TennisCourt,
    Football :Football,
    SquashCourt : SquashCourt,
    Basketball : Basketball,
    Cricket : Cricket,
    Volleyball : Volleyball,
    Yoga : Yoga,
    bathtub : bathtub,
    doubleBed : doubleBed,
    TableTennis : BadmintonCourt,
    park : school,
    PowerBackup : PowerBackup,
    bed : doubleBed,
    table : table,
    sofa : sofa,
    Jogging : Jogging,
};

export default function Amenities({ props }) {
    const [selected, setSelected] = useState(selectedAmenities);

    const toggleAmenity = (amenity) => {
        if (selected.includes(amenity)) {
            setSelected(selected.filter(item => item !== amenity));
        } else {
            setSelected([...selected, amenity]);
        }
    };
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
            <div className="flex flex-wrap m-5 p-8">
                {rows.map((row, rowIndex) => (
                    <div key={rowIndex} className="w-full md:w-1/2 lg:w-1/3 px-3">
                        <div className="flex flex-col gap-4">
                            {row.map((amenity) => (
                                <div key={amenity} className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={selected.includes(amenity)}
                                        onChange={() => toggleAmenity(amenity)}
                                    />
                                    <Image
                                        src={amenityIcons[amenity]}
                                        alt={`${amenity} Icon`}
                                        height={24}
                                        width={24}
                                    />
                                    <p className="font-semibold">{amenity}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={() => onSelect(selected)}>Save</button>
        </div>

 );
}
