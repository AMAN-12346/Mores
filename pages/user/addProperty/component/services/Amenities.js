import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import bathtub from '../../../../../assets/AmenitiesIcons/bathtub.svg';
import doubleBed from '../../../../../assets/AmenitiesIcons/doubleBed.svg';
import school from '../../../../../assets/AmenitiesIcons/school.svg';
import testing from '../../../../../assets/AmenitiesIcons/testing.svg';
import Gymnasium from '../../../../../assets/AmenitiesIcons/Gymnasium.png';
import Lift from '../../../../../assets/AmenitiesIcons/Lift.png';
import CCTV from '../../../../../assets/AmenitiesIcons/CCTV.png';
import FireFightingSystems from '../../../../../assets/AmenitiesIcons/FireFightingSystems.png';
import Security from '../../../../../assets/AmenitiesIcons/Security.png';
import wifi from '../../../../../assets/AmenitiesIcons/wifi.png';
import BadmintonCourt from '../../../../../assets/AmenitiesIcons/BadmintonCourt.png';
import TennisCourt from '../../../../../assets/AmenitiesIcons/TennisCourt.png';
import SquashCourt from '../../../../../assets/AmenitiesIcons/SquashCourt.png';
import Football from '../../../../../assets/AmenitiesIcons/Football.png';
import tv from '../../../../../assets/AmenitiesIcons/tv.png';
import Cricket from '../../../../../assets/AmenitiesIcons/Cricket.png';
import Basketball from '../../../../../assets/AmenitiesIcons/Basketball.png';
import Volleyball from '../../../../../assets/AmenitiesIcons/Volleyball.png';
import Yoga from '../../../../../assets/AmenitiesIcons/Yoga.png';
import PowerBackup from '../../../../../assets/AmenitiesIcons/PowerBackup.png';
import table from '../../../../../assets/AmenitiesIcons/table.png';
import sofa from '../../../../../assets/AmenitiesIcons/sofa.png';
import Jogging from '../../../../../assets/AmenitiesIcons/Jogging.png';

// Example of amenityIcons object
const amenityIcons = {
    Gymnasium: Gymnasium,
    school: school,
    // SwimmingPool:testing,
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
export default function Amenities({ selected, onUpdateAmenities }) {
  const [selectedAmenities, setSelectedAmenities] = useState(selected);
  const [showAll, setShowAll] = useState(false);
  const numAmenitiesToShow = showAll ? Object.keys(amenityIcons).length : 6;

  const amenityIco ={
    TennisCourt: {
        image: TennisCourt,
        name: 'Tennis Court'
    },
    table:{
      image:table,
      name:'Table'
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
    school: {
        image: school,
        name: "School"
    },
    sofa: {
        image: sofa,
        name: "Sofa"
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
    tv: {
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
    bed: {
        image: doubleBed,
        name: "Bed"
    },
    TableTennis: {
        image: TennisCourt,
        name: "Table Tennis"
    },
    park: {
        image: school,
        name: "Park"
    },
};

  useEffect(() => {
    onUpdateAmenities(selectedAmenities);
  }, [selectedAmenities, onUpdateAmenities]);

  const toggleAmenity = (amenity) => {
    if (selectedAmenities.includes(amenity)) {
      setSelectedAmenities(selectedAmenities.filter((item) => item !== amenity));
    } else {
      setSelectedAmenities([...selectedAmenities, amenity]);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 mb-2">
      {Object.keys(amenityIcons).map((amenity, index) => (
        // Check if the index is less than the number to show or show all if "View More" is clicked
        (showAll || index < numAmenitiesToShow) && (
          <div
            key={amenity}
            className={`flex items-center space-x-2 cursor-pointer ${
              selectedAmenities.includes(amenity) ? 'text-primary text-xs' : 'text-gray-800 text-xs'
            }`}
            onClick={() => toggleAmenity(amenity)}
            >
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full text-xs ${
                selectedAmenities.includes(amenity) ? 'bg-secondary text-xs' : ''
              }`}
            >
              <Image
                src={amenityIcons[amenity]}
                alt={amenity}
                width={24}
                height={25}
                className={`${
                  selectedAmenities.includes(amenity) ? '' : 'bg-[#ccd6d7] text-white rounded-full w-[22px] p-[2px]'
                }`}
              />
              
            </div>
            <span>{amenityIco[amenity].name}</span>
            
          </div>
        )
      ))}
      {/* Render the "View More" button if there are more than 6 amenities */}
      {Object.keys(amenityIcons).length > 6 && (
        <div
        className="flex items-center justify-center w-50 h-10 rounded-full bg-white cursor-pointer"
        onClick={() => setShowAll(!showAll)}
      >
        <span className="text-primary -ml-24 text-xs">
          {showAll ? 'view less ▲' : 'view all ▼'} {/* Up and down arrow icons */}
        </span>
      </div>
      )}
    </div>
  );
};

Amenities.propTypes = {
  selected: PropTypes.arrayOf(PropTypes.string).isRequired,
  onUpdateAmenities: PropTypes.func.isRequired,
};


  