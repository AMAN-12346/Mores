// import { display } from 'html2canvas/dist/types/css/property-descriptors/display';
import Image from 'next/image';
import React, { useState } from 'react';
import Styles from './style.module.css';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import useWindowWidth from '@/context/useWindowWidth';

const userId = {
    name: "Aman Singh",
    MobileNumber: "+91994272723",
    Images: "https://images.pexels.com/photos/17901599/pexels-photo-17901599/free-photo-of-woman-in-traditional-peasant-clothing-picking-apples-from-grass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
        <div>
            <div className="bg-[#A37F4F] flex justify-between rounded-t-lg shadow-md p-4" onClick={handleMobileView}>
                <div>
                    <h1 className="text-white text-lg font-semibold">Agent Overview</h1>
                </div>
                {(windowWidth < 768) ?
                    <div className='bg-white rounded-full w-[40px] h-[40px] pl-1 pt-1' onClick={() => setUp(!Up)}>
                        <h1 className="text-black text-lg font-semibold">{Up ? <FaAngleUp size={30} /> : <FaAngleDown size={30} />}</h1>
                    </div> : ""}
            </div>
            {view &&
                <div className="bg-white relative h-[450px]">
                    {/* name with exprience  */}
                    <div className="flex w-12/12">
                        {/* Left Section */}
                        <div className="w-2/12 m-10">
                            <div style={{ display: 'flex' }}>
                                <Image
                                    src={userId.Images}
                                    alt="User Profile"
                                    width={100}
                                    height={100}
                                    className="border-2 border-primary rounded-full h-[70px]"
                                />
                                <div>
                                    <p className="text-base font-semibold m-3">{userId.name}</p>
                                    <p className="text-base pr-2 m-2 -mt-3">{userId.MobileNumber}</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-7/10 h-[80px] m-10 bg-[#ddeae8] flex justify-start items-center rounded-lg">
                            <div className="flex items-center pl-1">
                                <span className="p-1 px-3 text-center text-base md:text-lg font-semibold text-white border-1 border-primary rounded-full bg-[#018191] ml-2">
                                    {userId.YearOfExprience}
                                </span>
                                <p className="text-sm sm:text-lg font-semibold ml-2">Year Of Experience</p>
                            </div>
                            <div className="flex items-center">
                                <span className="p-1 px-3 text-center text-base md:text-lg font-semibold text-white border-1 border-primary rounded-full bg-[#018191] ml-5">
                                    {userId.totallistings}
                                </span>
                                <p className="text-sm sm:text-lg font-semibold ml-2">Total Listings</p>
                            </div>
                        </div>
                    </div>

                    {/* bottom */}
                    <div className='relative'>
                        <div className="w-[30%] ml-10">
                            <div className="w-full justify-center">
                                <div className="border border-blue-500 h-16 flex justify-center items-center rounded-lg">
                                    <p className="text-lg text-[#018191] font-semibold ml-2">Property for Sale</p>
                                    <span className="w-[40px] h-[40px] border-spacing-0 text-center px-1 py-1 text-lg font-bold text-[#018191] border border-primary rounded-full ml-4">
                                        {userId.Propertforsale}
                                    </span>
                                </div>
                                <div className="border border-blue-500 h-16 flex justify-center items-center rounded-lg mt-7">
                                    <p className="text-lg text-[#018191] font-semibold ml-2">Property for Rent</p>
                                    <span className="w-[40px] h-[40px] border-spacing-0 text-center px-1 py-1 text-lg font-bold text-[#018191] border border-primary rounded-full ml-4">
                                        {userId.propertforrent}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='w-[30%] absolute top-0 right-0 '>
                            <form className="p-10 m-5 rounded-lg md:order-1 shadow-lg" style={{ borderRadius: '17px', border: '1px solid rgba(0, 0, 0, 0.14)', background: '#FFF' }}>
                                <div className="mb-4">
                                    <label className="block font-semibold mb-1">Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-2 py-2 rounded-md border border-gray-300 focus:border-primary focus:ring focus:ring-primary"
                                        placeholder="Full Name"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block font-semibold mb-1">Email</label>
                                    <input
                                        type="email"
                                        className="w-full px-2 py-2 rounded-md border focus:border-primary focus:ring focus:ring-primary"
                                        placeholder="Email Id"
                                    />
                                </div>
                                <div className="mb-4 relative">
                                    <label className="block font-semibold mb-1">Mobile Number</label>
                                    <div className="relative">
                                        <select
                                            className="absolute left-0 px-2 border rounded-l-m appearance-none h-full w-20 focus:outline-none focus:ring-primary"
                                        >
                                            {countryCodes.map((code) => (
                                                <option key={code} value={code}>
                                                    {code}
                                                </option>
                                            ))}
                                        </select>
                                        <input
                                            type="tel"
                                            className="pl-24 w-full px-2 py-2 rounded-r-md border border-l-0 focus:border-primary focus:ring focus:ring-primary"
                                            placeholder="Mobile Number"
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <button
                                        type="submit"
                                        className="bg-primary text-white py-4 px-8 w-full rounded-md"
                                        style={{ backgroundColor: '#931602' }}
                                    >
                                        Contact Now
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            }
        </div>
    )
}
