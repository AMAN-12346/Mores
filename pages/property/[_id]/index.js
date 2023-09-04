import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import property from '@/DummyData/data';
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
import { useEffect } from 'react';

const SinglePropertyCard = () => {

    // const [card, setCard] = useState({});
    // const params = useParams();

    // useEffect(() => {
    //     if (params?._id) {
    //         ShowCared();
    //     }
    // }, [params?._id]);

    // const ShowCared = async () => {
    //     try {
    //         const { data } = await axios.get(
    //             `${Property_API}/viewproperty/${params._id}`
    //         );
    //         const info = data.result;
    //         setCard(info);
    //         console.log("card----------------", info);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };
    const { propertyName, price, bedrooms, bathrooms, balconies, additionalRoom, description, images, areaDetails } = property;

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
            <div className="relative bg-cover bg-center text-white text-center h-32" style={{ backgroundImage: `url(${images[0].original})` }} >
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center">
                    <h1 className="text-3xl font-semibold">Property Details</h1>
                </div>
            </div>

            {/* miltipull image  */}
            <div className="rounded-lg shadow-md m-5">
                <div className="grid grid-cols-2 gap-4">

                    <div className="col-span-1">
                        <div className="relative">
                            <img src={images[0].original} alt={propertyName} className="w-full rounded-md" />
                            <div className="absolute flex justify-center top-7 left-5 w-[150px] lg:w-[200px] text-white rounded-tl-md" style={{ borderRadius: "43px", background: "rgba(1, 129, 145, 0.20)", flexShrink: 0 }}>
                                <Image
                                    className="bg-contain py-2 mr-2 md:py-5"
                                    src={EYE}
                                    alt="eye SVG"
                                    height={23}
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

                    <div className="col-span-1">
                        <div className="grid grid-cols-2 gap-4">
                            {/* Render first image */}
                            <img
                                src={images[1].original}
                                alt="First Image"
                                className="w-full h-45 rounded-md"
                            />

                            {/* Render second image */}
                            <img
                                src={images[2].original}
                                alt="Second Image"
                                className="w-full h-45 rounded-md"
                            />

                            {/* Display Google Map */}
                            <div className="w-full h-45 rounded-md">
                                <img
                                    src={images[3].original}
                                    alt="Second Image"
                                    className="w-full h-45 rounded-md"
                                />
                                {/* Add your Google Map component here */}
                                {/* Example: <GoogleMapComponent /> */}
                            </div>

                            {/* Display the image count */}
                            <div className="w-full h-45 rounded-md relative">
                                <img
                                    src={images[3].original}
                                    alt="Second Image"
                                    className="w-full h-45 rounded-md"
                                />
                                <div className="absolute inset-0 flex justify-center items-center text-white bg-gray-800 bg-opacity-75">
                                    <p className="text-2xl font-semibold">{images.length - 2} +</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Render areaDetails properties */}
            <div className='mr-6'>
                <div className='flex gap-4 w-12/12'>
                    <div className='w-4/12 py-3'>
                        <div className="mr-4 flex justify-start">
                            <div className='flex text-xl font-bold px-8' style={{ color: '#018191' }}>
                                <Image
                                    className="bg-contain mr-2 "
                                    src={mVerified}
                                    alt="M-verified"
                                    height={22}
                                    width={23}
                                />{property.propertyType}</div>
                            <div className='flex text-xl font-bold px-8' style={{ color: '#018191', }}>M Score <div className='px-7'> 100</div></div>
                        </div>
                    </div>
                    <div className='w-8/12'>
                        <div>
                            <div className="flex flex-wrap gap-1 justify-between">
                                <p className="py-3 px-7 text-center" style={topLinestyle}>
                                    Affordable
                                </p>
                                <p className="py-3 px-7 text-center" style={topLinestyle}>
                                    Newly build
                                </p>
                                <p className="py-3 px-7 text-center" style={topLinestyle}>
                                    {property.propertySubType}
                                </p>
                                <p className="py-3 px-7 text-center" style={topLinestyle}>
                                    {property.action}
                                </p>
                                <p className="py-3 px-7 text-center" style={topLinestyle}>
                                    {property.allowance}
                                </p>
                                <p className="py-3 px-7 text-center" style={topLinestyle}>
                                    {property.furniture}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div> {/* Name and price */}
                    <div className="flex justify-between mt-4">
                        <p className="text-3xl font-bold px-8">{property.propertyName}</p>
                        <p className="text-3xl font-bold mr-24">₹ {property.price}</p>
                    </div>
                </div>

                <div className="flex px-8 mt-3"> {/* Location */}
                    <Image
                        className="bg-contain"
                        src={IconLocation}
                        alt="IconLocation"
                        height={22}
                        width={23}
                    /><a href="#" className="underline color:var(--neutral-grayscale-70, #78828A) hover:underline text-lg font-medium px-2">
                        {property.locality}
                    </a>
                </div>

                <div className='flex justify-between -mt-4'>   {/* amenities and two  button  */}
                    <div className="flex px-8 mt-4">
                        <div className="flex items-center mr-4">
                            <Image
                                className="bg-contain"
                                src={bedRoom}
                                alt="Bedroom Icon"
                                height={22}
                                width={23}
                            />
                            <p className='p-2 items-center mr-4'>{property.bedrooms} Bed's</p>
                        </div>
                        <div className="flex items-center mr-4">
                            <Image
                                className="bg-contain"
                                src={bathtub}
                                alt="Bathtub Icon"
                                height={22}
                                width={23}
                            />
                            <p className='p-2 items-center mr-4'>{property.bathrooms} Bath's</p>
                        </div>
                        <div className="flex items-center mr-4">
                            <Image
                                className="bg-contain"
                                src={measured}
                                alt="Measured Icon"
                                height={22}
                                width={23}
                            />
                            <p className='p-2 items-center mr-4'>{property.areaDetails.bedrooms} SqFt</p>
                        </div>
                    </div>
                    <div className="flex mt-8 mr-20 gap-14">
                        <div>
                            <button
                                className="bg-primary text-white py-2 px-8 rounded-md mr-4 text-center"
                                disabled={!isLoggedIn}
                                style={{
                                    borderRadius: '7px',
                                    border: '1px solid rgba(0, 0, 0, 0.23)',
                                    background: 'rgba(245, 198, 198)',
                                    width: '229px', // Adding width
                                    height: '70px', // Adding height
                                    flexShrink: 0, // Prevent shrinking
                                    color: '#931602',
                                    fontSize: '20px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineHeight: 'normal'
                                }}
                            >
                                <div className="flex justify-between">
                                    <Image
                                        src={InstantLoan} // Replace with the path to your InstantLoan SVG
                                        alt="InstantLoan"
                                        height={30} // Set the height of the image
                                        width={30} // Set the width of the image
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
                                    width: '265px', // Adding width
                                    height: '70px', // Adding height
                                    flexShrink: 0, // Prevent shrinking
                                    fontSize: '20px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineHeight: 'normal'
                                }}
                            >
                                <div className="flex justify-between">
                                    <Image
                                        src={iconCall} // Replace with the path to your InstantLoan SVG
                                        alt="iconCall"
                                        height={30} // Set the height of the image
                                        width={30} // Set the width of the image
                                    />
                                    Request for Call
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                <div className='px-8 mt-8'>  {/* Additional Component */}
                    <div className='mb-8 shadow-md'>
                        <OverView props={property.Overview} />
                    </div>
                    <div className='mb-8 shadow-md'>
                        <Amenities props={property} />
                    </div>
                    <div className='mb-8 shadow-md'>
                        <PropertyInformation property={property} />
                    </div>
                    <div className='mb-8 shadow-md'>
                        <AgentFrom />
                    </div>
                    <div className='mb-8 shadow-md'>
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

