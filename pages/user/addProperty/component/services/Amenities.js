import React,{useState} from 'react';
import Image from 'next/image';
import bathtub from '../../../../../assets/moreIcon/bathtub.svg';
import doubleBed from '../../../../../assets/moreIcon/doubleBed.svg';
import school from '../../../../../assets/moreIcon/school.svg';
import testing from '../../../../../assets/moreIcon/testing.svg';
import Gymnasium from '../../../../../assets/moreIcon/Gymnasium.png';
import Lift from '../../../../../assets/moreIcon/Lift.png';
import CCTV from '../../../../../assets/moreIcon/CCTV.png';
import FireFightingSystems from '../../../../../assets/moreIcon/FireFightingSystems.png';
import Security from '../../../../../assets/moreIcon/Security.png';
import wifi from '../../../../../assets/moreIcon/wifi.png';
import BadmintonCourt from '../../../../../assets/moreIcon/BadmintonCourt.png';
import TennisCourt from '../../../../../assets/moreIcon/TennisCourt.png';
import SquashCourt from '../../../../../assets/moreIcon/SquashCourt.png';
import Football from '../../../../../assets/moreIcon/Football.png';
import tv from '../../../../../assets/moreIcon/tv.png';
import Cricket from '../../../../../assets/moreIcon/Cricket.png';
import Basketball from '../../../../../assets/moreIcon/Basketball.png';
import Volleyball from '../../../../../assets/moreIcon/Volleyball.png';
import Yoga from '../../../../../assets/moreIcon/Yoga.png';
import PowerBackup from '../../../../../assets/moreIcon/PowerBackup.png';
import table from '../../../../../assets/moreIcon/table.png';
import sofa from '../../../../../assets/moreIcon/sofa.png';
import Jogging from '../../../../../assets/moreIcon/Jogging.png';

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
export default function Amenities() {
    const [selectedAmenities, setSelectedAmenities] = useState([]);
  
    const toggleAmenity = (amenity) => {
      if (selectedAmenities.includes(amenity)) {
        setSelectedAmenities(selectedAmenities.filter(item => item !== amenity));
      } else {
        setSelectedAmenities([...selectedAmenities, amenity]);
      }
    };
  
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-2">
        {Object.keys(amenityIcons).map((amenity) => (
          <div
            key={amenity}
            className={`flex items-center space-x-2 cursor-pointer ${
              selectedAmenities.includes(amenity) ? 'text-primary' : 'text-gray-800'
            }`}
            onClick={() => toggleAmenity(amenity)}
          >
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full ${
                selectedAmenities.includes(amenity) ? 'bg-secondary' : ''
              }`}
            >
              <Image
                src={amenityIcons[amenity]}
                alt={amenity}
                width={20}
                height={20}
                className={`rounded-md ${selectedAmenities.includes(amenity) ? 'bg-white' : ''}`}
              />
            </div>
            <span>{amenity}</span>
          </div>
        ))}
      </div>
    );
  }
  