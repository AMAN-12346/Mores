// import { display } from 'html2canvas/dist/types/css/property-descriptors/display';
import Image from 'next/image';
import React, { useState } from 'react';
import Styles from './style.module.css';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import useWindowWidth from '@/context/useWindowWidth';

const userId = {
    name: "Aman Singh",
    MobileNumber: "+91994272723",
    Images: "https://more-bucket-s3.s3.ap-south-1.amazonaws.com/image_1694496797416.png",
    YearOfExprience: 7,
    Propertforsale: 2,
    propertforrent: 1,
    totallistings: 3,
    onSellProperty: 8,
    onRentProperty: 12
}
export default function AgentFrom() {
    const [view, setView] = useState(true);
    const [Up, setUp] = useState(true);
    const windowWidth = useWindowWidth();

    const handleMobileView = () => {
        setView(!view);
    }
    const countryCodes = ['+91', '+1', '+44', '+86', '+81'];
    return (
        <div className={Styles.outerDiv}>
            <div className="bg-[#A37F4F] flex justify-between rounded-t-lg lg:p-4 md:p-3 p-2" onClick={handleMobileView}>
                <div>
                    <h1 className="text-white text-[14px] font-semibold">Agent Overview</h1>
                </div>
                {(windowWidth < 768 ? <div className='bg-white rounded-full w-[30px] h-[30px] pl-[2px] pt-1' onClick={() => setUp(!Up)}>
                    <h1 className="text-black text-lg font-semibold">{Up ? <FaAngleUp size={25} /> : <FaAngleDown size={25} />}</h1>
                </div> : "")}
            </div>
            {view &&
                <div className={`bg-white relative h-[530px] md:h-[400px] lg:h-[300px] ${Styles.innerDiv}`}>
                    {/* name with exprience  */}
                    <div className="md:flex w-12/12 md:justify-between lg:justify-normal">
                        {/* Left Section */}
                        <div className="w-2/12 md:m-10 ml-8">
                            <div style={{ display: 'flex' }}>
                                <Image
                                    src={userId.Images}
                                    alt="User Profile"
                                    width={500} 
                                    height={700}
                                    className={`border-[1px] border-primary rounded-full h-[70px] ${Styles.imageDiv}`}
                                />
                                <div>
                                    <p className="text-[12px] md:text-[14px] font-semibold mx-4 mb-1 md:mb-3 w-[150px] tracking-wide">{userId.name}</p>
                                    <p className="text-[10px] md:text-[12px] mx-3 tracking-wide" style={{color: "grey"}}>{userId.MobileNumber}</p>
                                </div>
                            </div>
                        </div>                        

                        <div className="lg:w-[300px] md:w-[400px] h-[45px] md:h-[65px] m-7 md:m-10 bg-[#ddeae8] flex justify-start items-center rounded-lg">
                            <div className="flex lg:ml-0 md:ml-8 items-center">
                                <span className="p-1 px-[9px] text-center text-[10px] md:text-[14px] font-semibold text-white border-1 border-primary rounded-full bg-[#018191] ml-2">
                                    {userId.YearOfExprience}
                                </span>
                                <p className="text-[10px] md:text-[12px] font-semibold ml-2">Year Of Experience</p>
                            </div>
                            <div className="flex items-center">
                                <span className="p-1 px-[9px] text-center text-[10px] md:text-[14px] font-semibold text-white border-1 border-primary rounded-full bg-[#018191] ml-5">
                                    {userId.totallistings}
                                </span>
                                <p className="text-[10px] md:text-[12px] font-semibold ml-2">Total Listings</p>
                            </div>
                        </div>
                    </div>

                    {/* bottom */}
                    <div className="w-[250px] ml-7 md:ml-10">
                        <div className="w-full justify-center">
                            <div className="border-[1.5px] border-grey flex justify-between items-center rounded-lg p-2 mb-5">
                                <p className="text-[12px] md:text-[14px] text-[#018191] ml-2">Property for Sale</p>
                                <span className="w-[30px] h-[30px] border-spacing-0 text-center mr-2 py-1 text-[13px] font-bold text-[#018191] border border-primary rounded-full ml-4">
                                    {userId.Propertforsale}
                                </span>
                            </div>
                            <div className="border-[1.5px] border-grey flex justify-between items-center rounded-lg p-2">
                                <p className="text-[12px] md:text-[14px] text-[#018191] ml-2">Property for Rent</p>
                                <span className="w-[30px] h-[30px] border-spacing-0 text-center mr-2 py-1 text-[13px] font-bold text-[#018191] border border-primary rounded-full ml-4">
                                    {userId.propertforrent}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className='md:w-[330px] lg:w-[250px] h-[260px] md:h-[280px] absolute max-sm:left-5 md:top-[100px] flex lg:top-0 right-0'>
                        <form className="p-3 m-5 md:order-1" style={{ borderRadius: '10px', border: '1px solid rgba(0, 0, 0, 0.14)', background: '#FFF' }}>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    className="w-full p-2 text-[12px] rounded-md border border-gray-300 focus:border-primary focus:ring focus:ring-primary"
                                    placeholder="Name"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="email"
                                    className="w-full p-2 text-[12px] rounded-md border focus:border-primary focus:ring focus:ring-primary"
                                    placeholder="Email Id"
                                />
                            </div>
                            <div className="mb-4 relative">
                                <div className="relative">
                                    <select
                                        className="absolute left-0 p-2 text-[12px] border rounded-md appearance-none h-full w-12 focus:outline-none focus:ring-primary"
                                    >
                                        {countryCodes.map((code) => (
                                            <option key={code} value={code}>
                                                {code}
                                            </option>
                                        ))}
                                    </select>
                                    <input
                                        type="tel"
                                        className="pl-14 w-full p-2 text-[12px] rounded-md border border-l-0 focus:border-primary focus:ring focus:ring-primary"
                                        placeholder="Mobile Number"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-center absolute bottom-[40px] w-[210px] lg:w-[185px]">
                                <button
                                    type="submit"
                                    className="bg-primary text-white text-[10px] font-semibold tracking-wide p-3 w-full rounded-md"
                                    style={{ backgroundColor: '#931602' }}
                                >
                                    Contact Now
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            }
        </div>
    )
}
