import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
// import property from '@/DummyData/data';
import Image from 'next/image';
import mVerified from '../../../assets/moreIcon/mVerified.svg'
import EYE from '../../../assets/moreIcon/mdiEye.svg'
import IconLocation from '../../../assets/moreIcon/location.svg'
import bathtub from '../../../assets/moreIcon/bathtub.svg'
import bedRoom from '../../../assets/moreIcon/doubleBed.svg'
import measured from '../../../assets/moreIcon/measured.svg'
import OverView from './OverView';
import Amenities from './Amenities';
import PropertyInformation from './PropertyInformation';
import { colors, textFieldClasses } from '@mui/material';
import InstantLoan from "../../../assets/moreIcon/InstantLoan.svg"
import iconCall from "../../../assets/moreIcon/iconCall.svg"
import AgentFrom from './AgentFrom';
import Review from './Review';
import FeaturesSectionCard from '@/components/HomePage/FeaturedPropertiesSection/FeaturesSectionCard';
import RecommenedCard from '../RecommenedCard';
import SimpleMap from '@/components/GoogleMap/Using_Lat_Log';

const SinglePropertyCard = () => {
    const _id = "64e87f603838555b05ec5cb9"
    const [property, setProperty] = useState();
    const ShowCard = async () => {
        try {
            const { data } = await axios.get(`http://localhost:1950/api/v1/property/viewproperty/${_id}`);
            if (data) {
                const info = data?.result;
                console.log("Testing useEffect run :::::: ------------->>", info);
                setProperty(info);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        ShowCard()
    }, []);
    console.log("Property--------------->>", property);

    const topLinestyle = { borderRadius: '35px', background: 'rgba(1, 129, 145, 0.22)', fontFamily: 'Poppins', fontSize: '16px', fontStyle: 'normal', fontWeight: 400, lineHeight: 'normal', }
    const MScore = {
        width: '100px',
        height: '50px',
        flexShrink: '0',
        borderRadius: '23px',
        background: 'rgba(1, 129, 145, 0.25)'
    }
    const isLoggedIn = true;
    return (
        <>
            <div className="relative bg-cover bg-center text-white text-center h-32" style={{ backgroundImage: `url(${property?.images[0]?.original})` }} >
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center">
                    <h1 className="text-3xl font-semibold">Property Details</h1>
                </div>
            </div>

            <div className="rounded-lg shadow-md m-3">
                <div className="grid grid-cols-2 gap-3">
                    {/* let grid */}
                    <div className="col-span-1">
                        <div className="relative">
                            <img src={property?.images[0]?.original} alt={property?.propertyName} className="w-full rounded-md" />
                            <div className="absolute flex justify-center top-7 left-5 w-[150px] lg:w-[200px] text-white rounded-tl-md" style={{ borderRadius: "43px", background: "rgba(1, 129, 145, 0.20)", flexShrink: 0 }}>
                                <Image
                                    className="bg-contain md:py-5"
                                    src={EYE}
                                    alt="eye SVG"
                                    height={25}
                                    width={24}
                                />
                                <span className="mr-1 py-2 text-sm md:py-5 lg:text-xl font-semibold" style={{ color: "#FFF", fontWeight: 600 }}>100+</span>
                                <span className="text-sm py-2 md:py-5 lg:text-xl font-semibold" style={{ color: "#FFF", fontWeight: 600 }}>Views</span>
                            </div>
                            <div className="absolute flex justify-center top-7 right-5 w-[150px] lg:w-[200px] text-white rounded-tl-md" style={{ borderRadius: "43px", background: "rgba(147, 22, 2, 0.20)", flexShrink: 0 }}>
                                <span className="text-sm py-2 md:py-5 lg:text-xl font-semibold" style={{ color: "#FFF", fontWeight: 600 }}>Already Seen</span>
                            </div>
                        </div>
                    </div>

                    {/* Right grid  */}
                    <div className="col-span-1">
                        <div className="grid grid-cols-2 gap-3">
                            {/* Render first image */}
                            <div className="w-full rounded-md overflow-hidden">
                                <img
                                    src={property?.images[1]?.original}
                                    alt="First Image"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Render second image */}
                            <div className="w-full rounded-md overflow-hidden">
                                <img
                                    src={property?.images[2]?.original}
                                    alt="Second Image"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Display Google Map */}
                            <div className="w-full rounded-md overflow-hidden">
                                <img
                                    src={property?.images[3]?.original}
                                    alt="Second Image"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Display the image count */}
                            <div className="w-full rounded-md overflow-hidden relative">
                                <img
                                    src={property?.images[4]?.original}
                                    alt="Second Image"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 flex justify-center items-center text-white bg-gray-800 bg-opacity-75">
                                    <p className="text-2xl font-semibold">{property?.images.length - 2} +</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="flex justify-between mt-4"> {/* Name and price */}
                    <p className="text-3xl font-bold px-8">{property?.propertyName}</p>
                    <p className="text-3xl font-bold mr-8">₹ {property?.price}</p>
                </div>

                {/* Render areaDetails properties */}
                <div className='mr-8 mt-5'>
                    <div className='flex flex-col md:flex-row gap-4 w-full'>
                        <div className='md:w-4/12 py-3'>
                            <div className="md:mr-4 flex justify-start items-center">
                                <div className='flex text-xl font-bold md:px-8' style={{ color: '#018191' }}>
                                    <Image
                                        className="bg-contain md:mr-2"
                                        src={mVerified}
                                        alt="M-verified"
                                        height={22}
                                        width={23}
                                    />
                                    {property?.propertyType}
                                </div>
                                <div className='flex text-xl font-bold md:px-8' style={{ color: '#018191' }}>M Score <div className='md:px-7'> 100</div></div>
                            </div>
                        </div>
                        <div className='md:w-8/12'>
                            <div>
                                <div className="flex flex-wrap gap-1 md:gap-4 justify-between">
                                    <p className="py-3 px-5 md:py-3 md:px-7 text-center" style={topLinestyle}>
                                        Affordable
                                    </p>
                                    <p className="py-3 px-5 md:py-3 md:px-7 text-center" style={topLinestyle}>
                                        Newly build
                                    </p>
                                    <p className="py-3 px-5 md:py-3 md:px-7 text-center" style={topLinestyle}>
                                        {property?.propertySubType}
                                    </p>
                                    <p className="py-3 px-5 md:py-3 md:px-7 text-center" style={topLinestyle}>
                                        {property?.action}
                                    </p>
                                    <p className="py-3 px-5 md:py-3 md:px-7 text-center" style={topLinestyle}>
                                        {property?.allowance}
                                    </p>
                                    <p className="py-3 px-5 md:py-3 md:px-7 text-center" style={topLinestyle}>
                                        {property?.furniture}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="flex px-8 mt-5"> {/* Location */}
                    <Image
                        className="bg-contain"
                        src={IconLocation}
                        alt="IconLocation"
                        height={22}
                        width={23}
                    /><a href="#" className="underline color:var(--neutral-grayscale-70, #78828A) hover:underline text-lg font-medium px-2">
                        {property?.locality}
                    </a>
                </div>

                <div className="flex flex-col md:flex-row justify-between md:items-center mr-8"> {/* amenities and two button */}
                    <div className="flex flex-col md:flex-row px-8 mt-4 md:mt-0">
                        <div className="flex items-center mb-4 md:mb-0 md:mr-4">
                            <Image
                                className="bg-contain"
                                src={bedRoom}
                                alt="Bedroom Icon"
                                height={22}
                                width={23}
                            />
                            <p className='p-2 items-center md:mr-4'>{property?.bedrooms} Bed's</p>
                        </div>
                        <div className="flex items-center mb-4 md:mb-0 md:mr-4">
                            <Image
                                className="bg-contain"
                                src={bathtub}
                                alt="Bathtub Icon"
                                height={22}
                                width={23}
                            />
                            <p className='p-2 items-center md:mr-4'>{property?.bathrooms} Bath's</p>
                        </div>
                        <div className="flex items-center">
                            <Image
                                className="bg-contain"
                                src={measured}
                                alt="Measured Icon"
                                height={22}
                                width={23}
                            />
                            <p className='p-2 items-center'>{property?.areaDetails.bedrooms} SqFt</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row mt-4 md:mt-8 gap-4 md:gap-14">
                        <div>
                            <button
                                className="bg-primary text-white py-2 px-8 rounded-md mr-4 mb-4 md:mb-0 text-center"
                                disabled={!isLoggedIn}
                                style={{
                                    borderRadius: '7px',
                                    border: '1px solid rgba(0, 0, 0, 0.23)',
                                    background: 'rgba(245, 198, 198)',
                                    width: '100%', // Full width on small screens
                                    height: '70px',
                                    fontSize: '16px',
                                    fontWeight: '400',
                                }}
                            >
                                <div className="flex items-center">
                                    <Image
                                        src={InstantLoan}
                                        alt="InstantLoan"
                                        height={30}
                                        width={30}
                                        className="mr-2"
                                    />
                                    Get Instant Home Loan
                                </div>
                            </button>
                        </div>
                        <div>
                            <button
                                className="bg-primary text-white py-2 px-8 rounded-md mr-4 text-center"
                                disabled={!isLoggedIn}
                                style={{
                                    borderRadius: '7px',
                                    border: '1px solid rgba(0, 0, 0, 0.23)',
                                    background: '#931602',
                                    width: '100%', // Full width on small screens
                                    height: '70px',
                                    fontSize: '16px',
                                    fontWeight: '400',
                                }}
                            >
                                <div className="flex items-center">
                                    <Image
                                        src={iconCall}
                                        alt="iconCall"
                                        height={30}
                                        width={30}
                                        className="mr-2"
                                    />
                                    Request for Call
                                </div>
                            </button>
                        </div>
                    </div>
                </div>



                <div className='px-8 mt-8'>  {/* Additional Component */}
                    <div className=''>
                        <OverView props={property?.Overview} />
                    </div>
                    <div className='lg:-mt-14 mt-5 lg:p-24'>
                        <Amenities props={property} />
                    </div>
                    <div className='lg:-mt-40 mt-5 lg:p-24'>
                        <PropertyInformation property={property} />
                    </div>
                    <div className='lg:-mt-40 mt-7 lg:p-24'>
                        <AgentFrom />
                    </div>
                    <div className='lg:-mt-40 mt-7 lg:p-24'>
                        <Review />
                    </div>
                </div>
            </div >
            <div className='mt-11'>
                <RecommenedCard />
            </div>
        </>
    );
};

export default SinglePropertyCard;

