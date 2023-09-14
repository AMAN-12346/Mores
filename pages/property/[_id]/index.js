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
import Unfurnished from '../../../assets/AmenitiesIcons/Unfurnished.svg'
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
import FeaturedSectionCard from '@/components/HomePage/FeaturedPropertiesSection/FeaturedSectionCard';
import SearchResultCard from '@/components/SearchResultPage/Card/SearchResultCard';
// import SimpleMap from '@/components/GoogleMapo/Using_Lat_Log'; 

const SinglePropertyCard = () => {


    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const itemPerPage = 3;
    const [currentPage, setCurrentPage] = useState(0);
    const rows = data.slice(
        currentPage * itemPerPage,
        (currentPage + 1) * itemPerPage
    );
    const handlePerPageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const numberOfPages = Math.ceil(data.length / itemPerPage);
    const pageIndex = Array.from({ length: numberOfPages }, (_, idx) => idx + 1);

    const toggleFilter = () => {
        setIsFilterOpen(!isFilterOpen);
    };

    const _id = "65019c69e5d031991a00fad9"

    const [property, setProperty] = useState();

    const [expanded, setExpanded] = useState(false);

    const togglePoints = () => {
        setExpanded(!expanded);
    };

    const ShowCard = async () => {
        try {
            const { data } = await axios.get(`http://localhost:1950/api/v1/property/viewproperty/${_id}`);
            if (data) {
                const info = data?.result;
                console.log("info-============>>", info);
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
            <div className="relative bg-cover bg-center text-white text-center h-20" style={{ backgroundImage: `url(${property?.images[0]?.original})` }} >
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center">
                    <h1 className="text-[25px] font-semibold">Property Details</h1>
                </div>
            </div>

            <div>
                <div className="w-12/12 flex justify-between lg:gap-2 gap-1 m-[5.5px]">
                    {/* lelt grid */}
                    <div className="w-8/12">
                        <div className="relative rounded-md h-full" style={{ backgroundImage: `url(${property?.images[0]?.original})`, backgroundSize: 'cover' }}>
                            <div className="absolute  w-[130px] h-[40px] flex m-4 px-6 justify-center text-white" style={{ borderRadius: "43px", background: "rgba(1, 129, 145, 0.20)", flexShrink: 0 }}>
                                <Image
                                    className="bg-contain py-3"
                                    src={EYE}
                                    alt="eye SVG"
                                    height={20}
                                    width={20}
                                />
                                <span className="py-3 text-[12px] font-semibold" style={{ color: "#FFF", }}>25 Views</span>
                            </div>
                            <div className="absolute flex justify-center top-7 right-5 w-[150px] lg:w-[200px] text-white rounded-tl-md">
                                <LikeShareButtons />
                            </div>
                            <div className="absolute w-[130px] h-[40px] flex justify-center bottom-7 right-5 text-white rounded-tl-md" style={{ borderRadius: "43px", background: "rgba(147, 22, 2, 0.20)", flexShrink: 0 }}>
                                <span className=" py-3 text-[12px] font-semibold" style={{ color: "#FFF" }}>Already Seen</span>
                            </div>
                        </div>
                    </div>

                    {/* Right grid  */}
                    <div className="w-4/12">
                        <div className="grid grid-cols-2 lg:gap-[5.5px] gap-[3px]">
                            {/* Render first image */}
                            <div className="w-full rounded-md overflow-hidden">
                                <Image
                                    className="w-full h-full"
                                    src={property?.images[1]?.original}
                                    alt="First Image"
                                    height={400}
                                    width={500}
                                />
                            </div>

                            {/* Render second image */}
                            <div className="w-full rounded-md overflow-hidden">
                                <Image
                                    className="w-full h-full"
                                    src={property?.images[2]?.original}
                                    alt="First Image"
                                    height={400}
                                    width={500}
                                />
                            </div>

                            {/* Render 3rd image */}
                            <div className="w-full rounded-md overflow-hidden">
                            <Image
                                    className="w-full h-full"
                                    src={property?.images[3]?.original}
                                    alt="First Image"
                                    height={400}
                                    width={500}
                                />
                            </div>
                            {/* Render 4th image */}
                            <div className="w-full rounded-md overflow-hidden">
                            <Image
                                    className="w-full h-full"
                                    src={property?.images[4]?.original}
                                    alt="First Image"
                                    height={400}
                                    width={500}
                                />
                            </div>

                            {/* Display Google Map */}
                            <div className="w-full rounded-md overflow-hidden">
                                <SimpleMap />
                            </div>

                            {/* Display the image count */}
                            <div className="w-full rounded-md overflow-hidden relative">
                            <Image
                                    className="w-full h-full"
                                    src={property?.images[0]?.original}
                                    alt="First Image"
                                    height={400}
                                    width={500}
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
                <div className='lg:flex justify-between gap-3'>
                    <div className='w-full'>
                        <Mscore_Mverifid Data={property} />
                    </div>
                    <div className='justify-between md:flex-wrap-reverse'>
                        <HighlightAmenities property={property} />
                    </div>
                </div>

                <div className="flex justify-between mt-3 lg:mr-11 md:mr-10 mr-8 ml-8 lg:text-[18px] text[14px]"> {/* Name and price */}
                    <p className="font-bold">{property?.propertyName}</p>
                    <p className="font-bold">₹ 12,00000</p>
                </div>

                <div className="flex px-8 mt-3"> {/* Location */}
                    <Image
                        className="bg-contain"
                        src={IconLocation}
                        alt="IconLocation"
                        height={23}
                        width={23}
                    /><a href="#" className="underline color:var(--neutral-grayscale-70, #78828A) hover:underline lg:text-[14px] text-[12px]">
                        {property?.locality}
                    </a>
                </div>

                <div className="lg:flex -mt-3 w-12/12 lg:ml-8 md:ml-3 justify-between"> {/* amenities and two button */}
                    <div className="flex lg:w-6/12 w-12/12 lg:justify-start justify-start lg:ml-0 lg:mr-0 mr-6 ml-8 lg:mt-3 mt-3 lg:text-[14px] md:text-[12px] text-[10px]">
                        <div className="flex items-center">
                            <Image
                                className="bg-contain"
                                src={bedRoom}
                                alt="Bedroom Icon"
                                height={23}
                                width={23}
                            />
                            <p className='p-2 items-center md:mr-4'>{property?.bedrooms} Beds</p>
                        </div>
                        <div className="flex items-center">
                            <Image
                                className="bg-contain"
                                src={bathtub}
                                alt="Bathtub Icon"
                                height={22}
                                width={23}
                            />
                            <p className='p-2 items-center md:mr-4'>{property?.bathrooms} Baths</p>
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

                        <div className="flex items-center">
                            <Image
                                className="bg-contain"
                                src={Unfurnished}
                                alt="Measured Icon"
                                height={22}
                                width={23}
                            />
                            <p className='p-2 items-center md:mr-4'>Unfurnished</p>
                        </div>
                    </div>
                    <div className="flex lg:w-4/12 md:w-5/12 w-12/12 lg:justify-end justify-between lg:gap-6 lg:ml-0 lg:mr-10 ml-7 mr-10 mt-3 gap-4">
                        <button
                            className="bg-primary text-white py-2 px-2 lg:text-[12px] md:text-[10] text-[10px] rounded-md flex items-center justify-center"
                            disabled={!isLoggedIn}
                            style={{
                                borderRadius: '7px',
                                border: '1px solid rgba(0, 0, 0, 0.23)',
                                background: 'rgba(245, 198, 198)',
                                height: '50px',
                                width: '300px'
                            }}
                        >
                            <Image
                                src={InstantLoan}
                                alt="InstantLoan"
                                height={22}
                                width={22}
                            />
                            <span className="ml-1">Apply for Loan</span>
                        </button>

                        <button
                            className="bg-primary py-2 px-4 rounded-md text-white flex items-center justify-center lg:text-[12px] md:text-[10] text-[10px] md:mt-0"
                            disabled={!isLoggedIn}
                            style={{
                                borderRadius: '7px',
                                border: '1px solid rgba(0, 0, 0, 0.23)',
                                background: '#931602',
                                height: '50px',
                                width: '300px'
                            }}
                        >
                            <Image
                                src={iconCall}
                                alt="iconCall"
                                height={22}
                                width={22}
                            />
                            <span className="ml-1">Request for Call</span>
                        </button>
                    </div>
                </div>

                <div className='px-8 mt-6 -mb-28'>
                    <div className=''>
                        <OverView props={property?.Overview} />
                    </div>
                    <div className='lg:-mt-14 mt-5 lg:p-24'>
                        <Amenities props={property} />
                    </div>
                    <div className='lg:-mt-40 mt-5 lg:p-24'>
                        <PropertyInformation property={property} />
                    </div>
                    <div className='lg:-mt-40 mt-5 lg:p-24'>
                        <AgentFrom />
                    </div>
                    <div className='lg:-mt-40 mt-7 lg:p-24 lg:mb-8 mb-5'>
                        <Review />
                    </div>
                    <div className='px-8 mt-10 mb-[150px]'>
                        <div className='lg:-mt-40 md:mt-36 mt-7 lg:p-24 text-center'>
                            <h3 className='justify-center lg:text-[36px] md:text-[36px] text-2xl font-extrabold text-[#283646]'>Recommened For You</h3>
                            <hr className="my-2 w-[360px] h-[5px] rounded-full m-auto bg-[#C88E20]" />
                            <div className='flex justify-center'>
                                {rows.map((row, index) => (
                                    <FeaturedSectionCard key={index} singlePropertyData={row} />
                                ))}
                            </div>
                        </div>

                        <div className="flex -mt-4 justify-center gap-10 text-xl">
                            {pageIndex
                                .slice(
                                    Math.max(0, currentPage - 2),
                                    Math.min(numberOfPages, currentPage + 3)
                                )
                                .map((page) => (
                                    <button
                                        key={page}
                                        onClick={() => handlePerPageChange(page - 1)}
                                        className={
                                            page === currentPage + 1
                                                ? "active rounded-full w-12 h-12 text-white font-bold bg-paginationButton"
                                                : ""
                                        }
                                    >
                                        {page}
                                    </button>
                                ))}
                            <button
                                disabled={currentPage >= numberOfPages - 1}
                                onClick={() => handlePerPageChange(currentPage + 1)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="48"
                                    height="16"
                                    viewBox="0 0 48 16"
                                    fill="none"
                                >
                                    <path
                                        d="M47.7071 8.70711C48.0976 8.31658 48.0976 7.68342 47.7071 7.29289L41.3431 0.928932C40.9526 0.538408 40.3195 0.538408 39.9289 0.928932C39.5384 1.31946 39.5384 1.95262 39.9289 2.34315L45.5858 8L39.9289 13.6569C39.5384 14.0474 39.5384 14.6805 39.9289 15.0711C40.3195 15.4616 40.9526 15.4616 41.3431 15.0711L47.7071 8.70711ZM0 9H47V7H0V9Z"
                                        fill="black"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default SinglePropertyCard;

