import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
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

const SinglePropertyCard = () => {

    const router = useRouter();
    // const { _id } = router?.query; 

    const [property, setProperty] = useState({});

    useEffect(() => {
        if (router?._id) {
            ShowCard();
        }
    }, [router?._id]);

    const ShowCard = async () => {
        try {
            const { data } = await axios.get(`http://localhost:1950/api/v1/property/viewproperty/${_id}`);
            const info = data?.result;
            setProperty(info);
        } catch (error) {
            console.log(error);
        }
    };
    console.log("Testing useState run :::::::----------->>", property);

    // const { propertyName, price, bedrooms, bathrooms, balconies, additionalRoom, description, images, areaDetails } = property;

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
            {/* <div className="relative bg-cover bg-center text-white text-center h-32" style={{ backgroundImage: `url(${property?.images[0]?.original})` }} >
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center">
                    <h1 className="text-3xl font-semibold">Property Details</h1>
                </div>
            </div> */}


        </>
    );
};

export default SinglePropertyCard;

