// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
import property from '@/DummyData/data';
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
import FeaturesSectionCard from '@/components/HomePage/FeaturedPropertiesSection/FeaturedSection';
import RecommenedCard from '../RecommenedCard';
import LikeShareButtons from '@/components/LikeShear/Component';
import Footer from '@/components/Common/Footer/Footer';
import Mscore_Mverifid from '@/components/property/Mscore_Mverifid';
import HighlightAmenities from '@/components/property/HighlightAmenities';
// import SimpleMap from '@/components/GoogleMapo/Using_Lat_Log'; 

const SinglePropertyCard = () => {
    const _id = "64e87f603838555b05ec5cb9"
    const [property, setProperty] = useState();
    const ShowCard = async () => {
        try {
            const { data } = await axios.get(`http://localhost:1950/api/v1/property/viewproperty/${_id}`);
            if (data) {
                const info = data?.result;
                setProperty(info);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        ShowCard()
    }, []);
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

            <div className="m-2">
                <div className="w-12/12 flex justify-between gap-2 m-3">
                    {/* lelt grid */}
                    <div className="w-8/12">
                        <div className="relative rounded-md h-full" style={{ backgroundImage: `url(${property?.images[0]?.original})`, backgroundSize: 'cover'}}>
                            <div className="absolute flex m-4 px-3 justify-center text-white" style={{ borderRadius: "43px", background: "rgba(1, 129, 145, 0.20)", flexShrink: 0 }}>
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
                            <div className="absolute flex justify-center top-7 right-5 w-[150px] lg:w-[200px] text-white rounded-tl-md">
                                <LikeShareButtons />
                            </div>
                            <div className="absolute flex justify-center bottom-7 right-5 w-[150px] lg:w-[200px] text-white rounded-tl-md" style={{ borderRadius: "43px", background: "rgba(147, 22, 2, 0.20)", flexShrink: 0 }}>
                                <span className="text-sm py-2 md:py-5 lg:text-xl font-semibold" style={{ color: "#FFF", fontWeight: 600 }}>Already Seen</span>
                            </div>
                        </div>
                    </div>

                    {/* Right grid  */}
                    <div className="w-4/12">
                        <div className="grid grid-cols-2 gap-1">
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
                {/* Render areaDetails and Properties */}
                <div>
                    <div className='lg:flex w-12/12 lg:-mr-20'>
                        <div className='lg:w-4/12 md:12/12 sm:12/12 md:mr-5 md:ml-5 mr-5 ml-5 lg:ml-5 lg:mr-0'>
                            <Mscore_Mverifid Data={property} />
                        </div>
                        <div className='lg:w-8/12 md:w-12/12 sm:12/12 lg:mt-0 lg:mr-0 md:ml-0 md:mr-0 ml-8 md:mt-2 mt-5'>
                            <HighlightAmenities property={property} />
                        </div>
                    </div>
                </div>

                <div className="flex justify-between mt-4 lg:mr-11 md:mr-10 sm:mr-10"> {/* Name and price */}
                    <p className="lg:text-3xl md:3xl text-base font-bold px-8">{property?.propertyName}</p>
                    <p className="lg:text-3xl md:3xl text-base font-bold">₹ {property?.price}</p>
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

                <div className="lg:flex md:flex w-12/12 lg:ml-8 md:ml-8 md:mr-10"> {/* amenities and two button */}
                    <div className="flex lg:w-5/12 md:w-6/12 lg:justify-start md:justify-start justify-between lg:ml-0 lg:mr-0 md:ml-0 md:mr-0 ml-8 mt-3">
                        <div className="flex items-center">
                            <Image
                                className="bg-contain"
                                src={bedRoom}
                                alt="Bedroom Icon"
                                height={22}
                                width={23}
                            />
                            <p className='p-2 items-center md:mr-4'>{property?.bedrooms} Bed's</p>
                        </div>
                        <div className="flex items-center">
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
                    <div className="flex lg:w-7/12 md:w-6/12 flex-col md:flex-row justify-end md:gap-2 gap-6 lg:ml-0 lg:mr-10 md:ml-0 md:mr-10 ml-8 mt-3">
                        <button
                            className="bg-primary text-white py-2 px-8 rounded-md flex items-center justify-center"
                            disabled={!isLoggedIn}
                            style={{
                                borderRadius: '7px',
                                border: '1px solid rgba(0, 0, 0, 0.23)',
                                background: 'rgba(245, 198, 198)',
                                width: '100%',
                                maxWidth: '300px',
                                height: '70px',
                                fontSize: '16px',
                                fontWeight: '400',
                            }}
                        >
                            <Image
                                src={InstantLoan}
                                alt="InstantLoan"
                                height={30}
                                width={30}
                            />
                            <span className="ml-2">Apply for Loan</span>
                        </button>

                        <button
                            className="bg-primary py-2 px-8 rounded-md text-white flex items-center justify-center mt-4 md:mt-0"
                            disabled={!isLoggedIn}
                            style={{
                                borderRadius: '7px',
                                border: '1px solid rgba(0, 0, 0, 0.23)',
                                background: '#931602',
                                width: '100%',
                                maxWidth: '300px',
                                height: '70px',
                                fontSize: '16px',
                                fontWeight: '400',
                            }}
                        >
                            <Image
                                src={iconCall}
                                alt="iconCall"
                                height={30}
                                width={30}
                            />
                            <span className="ml-2">Request for Call</span>
                        </button>
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
                <RecommenedCard data={property} />
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
};

export default SinglePropertyCard;

