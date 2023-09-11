// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
import property from '@/DummyData/data';
import React, { useEffect, useState } from 'react';
import Styles from "./index.module.css";
import { useRouter } from 'next/router';
import axios from 'axios';
// import property from '@/DummyData/data';
import Image from 'next/image';
// import mVerified from '../../../assets/AmenitiesIcons/mVerified.svg' 
import EYE from '../../../assets/AmenitiesIcons/mdiEye.svg'
import IconLocation from '../../../assets/AmenitiesIcons/location.svg'
import bathtub from '../../../assets/AmenitiesIcons/bathtub.svg'
import bedRoom from '../../../assets/AmenitiesIcons/doubleBed.svg'
import measured from '../../../assets/AmenitiesIcons/measured.svg'
import OverView from '../../../components/property/OverView';
import Amenities from '../../../components/property/Amenities';
import PropertyInformation from '../../../components/property/PropertyInformation';
import InstantLoan from "../../../assets/AmenitiesIcons/InstantLoan.svg"
import iconCall from "../../../assets/AmenitiesIcons/iconCall.svg"
import AgentFrom from '../../../components/property/AgentFrom';
import Review from '../../../components/property/Review';
import RecommenedCard from '../RecommenedCard';
import LikeShareButtons from '@/components/LikeShear/Component';
import Mscore_Mverifid from '@/components/property/Mscore_Mverifid';
import HighlightAmenities from '@/components/property/HighlightAmenities';
import SimpleMap from '@/components/GoogleMapo/Using_Lat_Log';
import data from '../../../content/FeaturedProperties/featuredProperties.json'
import FeaturedSection from '@/components/HomePage/FeaturedPropertiesSection/FeaturedSection';
// import SimpleMap from '@/components/GoogleMapo/Using_Lat_Log'; 

const SinglePropertyCard = () => {
    // const _id = "64e2f50633e52febc315572c"
    const _id = "64fac05b304ac2351c113157"
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

            <div>
                <div className="w-12/12 flex justify-between lg:gap-2 gap-1 m-3">
                    {/* lelt grid */}
                    <div className="w-8/12">
                        <div className="relative rounded-md h-full" style={{ backgroundImage: `url(${property?.images[0]?.original})`, backgroundSize: 'cover' }}>
                            <div className="absolute flex m-4 px-6 justify-center text-white" style={{ borderRadius: "43px", background: "rgba(1, 129, 145, 0.20)", flexShrink: 0 }}>
                                <Image
                                    className="bg-contain md:py-5"
                                    src={EYE}
                                    alt="eye SVG"
                                    height={20}
                                    width={20}
                                />
                                <span className="text-sm md:py-5 lg:text-base font-semibold" style={{ color: "#FFF", }}>25 Views</span>
                            </div>
                            <div className="absolute flex justify-center top-7 right-5 w-[150px] lg:w-[200px] text-white rounded-tl-md">
                                <LikeShareButtons />
                            </div>
                            <div className="absolute px-6 flex justify-center bottom-7 right-5 text-white rounded-tl-md" style={{ borderRadius: "43px", background: "rgba(147, 22, 2, 0.20)", flexShrink: 0 }}>
                                <span className="text-sm md:py-5 lg:text-base font-semibold" style={{ color: "#FFF" }}>Already Seen</span>
                            </div>
                        </div>
                    </div>

                    {/* Right grid  */}
                    <div className="w-4/12">
                        <div className="grid grid-cols-2 lg:gap-3 gap-1">
                            {/* Render first image */}
                            <div className="w-full rounded-md  overflow-hidden">
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

                            {/* Render 3rd image */}
                            <div className="w-full rounded-md overflow-hidden">
                                <img
                                    src={property?.images[3]?.original}
                                    alt="Second Image"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Render 4th image */}
                            <div className="w-full rounded-md overflow-hidden">
                                <img
                                    src={property?.images[4]?.original}
                                    alt="Second Image"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Display Google Map */}
                            <div className="w-full rounded-md overflow-hidden">
                                <SimpleMap />
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
                    <div className='lg:flex w-12/12 justify-between'>
                        <div className='lg:w-4/12 w-12/12'>
                            <Mscore_Mverifid Data={property} />
                        </div>
                        <div className='lg:w-8/12 w-[100%] flex-wrap p-4 md:flex-wrap-reverse'>
                            <HighlightAmenities property={property} />
                        </div>
                    </div>
                </div>

                <div className="flex justify-between mt-4 lg:mr-11 md:mr-10 mr-8 ml-8 lg:text-lg md:text-lg text-sm"> {/* Name and price */}
                    <p className="font-bold">{property?.propertyName}</p>
                    <p className="font-bold">₹ 12,00000</p>
                </div>

                <div className="flex px-8 mt-5"> {/* Location */}
                    <Image
                        className="bg-contain"
                        src={IconLocation}
                        alt="IconLocation"
                        height={23}
                        width={23}
                    /><a href="#" className="underline color:var(--neutral-grayscale-70, #78828A) hover:underline lg:text-lg md:text-lg text-sm px-2">
                        {property?.locality}
                    </a>
                </div>

                <div className="lg:flex w-12/12 lg:ml-8 md:ml-3 justify-between"> {/* amenities and two button */}
                    <div className="flex lg:w-6/12 w-12/12 lg:justify-start justify-start lg:ml-0 lg:mr-0 mr-6 ml-8 lg:mt-3 mt-2 lg:text-lg md:text-lg text-sm">
                        <div className="flex items-center">
                            <Image
                                className="bg-contain"
                                src={bedRoom}
                                alt="Bedroom Icon"
                                height={23}
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
                            <p className='p-2 items-center md:mr-4'>{property?.areaDetails.bedrooms ? property?.areaDetails.bedrooms : 1000} SqFt</p>
                        </div>
                        {/* <div className="flex items-center">
                            <Image
                                className="bg-contain"
                                src={measured}
                                alt="Measured Icon"
                                height={22}
                                width={23}
                            />
                            <p className='p-2 items-center'>Unfurnished</p>
                        </div> */}
                    </div>
                    <div className="flex lg:w-4/12 w-12/12 lg:justify-end justify-between lg:gap-6 lg:ml-0 lg:mr-10 ml-7 mr-10 mt-3 gap-4">
                        <button
                            className="bg-primary text-white py-2 px-2 lg:text-lg md:text-lg text-sm rounded-md flex items-center justify-center"
                            disabled={!isLoggedIn}
                            style={{
                                borderRadius: '7px',
                                border: '1px solid rgba(0, 0, 0, 0.23)',
                                background: 'rgba(245, 198, 198)',
                                height: '60px',
                                width: '200px'
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
                            className="bg-primary py-2 px-4 rounded-md text-white flex items-center justify-center  md:mt-0"
                            disabled={!isLoggedIn}
                            style={{
                                borderRadius: '7px',
                                border: '1px solid rgba(0, 0, 0, 0.23)',
                                background: '#931602',
                                height: '60px',
                                width: '200px'
                              
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
                    <div className='lg:-mt-40 mt-7 lg:p-24 lg:mb-8 mb-5'>
                        <Review />
                    </div>
                    <div className='lg:-mt-40 md:mt-36 mt-7 lg:p-24 text-center'>
                        <h3 className='justify-center lg:text-[36px] md:text-[36px] text-2xl font-extrabold text-[#283646]'>Recommened For You</h3>
                        <hr className="my-2 w-[260px] h-[5px] rounded-full m-auto bg-[#C88E20]" />
                        <FeaturedSection data={data} />
                    </div>
                </div>
            </div >

        </>
    );
};

export default SinglePropertyCard;

