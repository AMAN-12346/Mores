// import { display } from 'html2canvas/dist/types/css/property-descriptors/display';
import Image from 'next/image';
import React, { useState } from 'react';
import Styles from './style.module.css';

const userId = {
    name: "Aman singh",
    MobileNumber: "+91255644456",
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

    const handleMobileView = () => {
        setView(!view);
    }
    const countryCodes = ['+1', '+44', '+91', '+86', '+81'];
    return (
        <div>
            <div className="bg-[#A37F4F] rounded-t-lg shadow-md p-4" onClick={handleMobileView}>
                <div>
                    <h1 className="text-white text-2xl font-semibold">Agent Overview</h1>
                </div>
            </div>
            {view &&
                <div className="bg-white">
                    <div className='w-12/12 mb-4 md:flex'>
                        <div className='lg:w-8/12 sm:p-10 '>
                            <div className='w-12/12 lg:flex justify-between gap-3 '>
                                <div className={`w-4/12 p-7 ${Styles.container}`} >
                                    <div style={{ display: 'flex', height: '70px', width: '70px', }}>
                                        <Image
                                            src={userId.Images}
                                            alt="User Profile"
                                            width={80}
                                            height={20}
                                            className="  border-2 border-primary rounded-full ml-0 "
                                        />
                                    </div>
                                    <div >
                                        <p className="text-base font-semibold m-2">{userId.name}</p>
                                        <p className="text-base pr-2 ">{userId.MobileNumber}</p>
                                    </div>
                                </div>
                                <div className='w-8/12 bg-[#ddeae8] flex justify-start items-center rounded-lg relative'>
                                    <div className='flex items-center p-3 pl-1 sm:p-6'> <span className='p-1 px-3 text-center text-base md:text-lg font-semibold text-white border-1 border-primary rounded-full bg-[#018191] ml-2'>{userId.YearOfExprience}</span><p className='text-sm sm:text-lg font-semibold ml-2'>Year Of Exprience</p></div>
                                    <div className='flex w-[30vw] items-center p-4 pl-1sm:p-6'> <span className='p-1 px-3 text-center text-base md:text-lg font-semibold text-white border-1 border-primary rounded-full bg-[#018191] ml-5'>{userId.totallistings}</span><p className='text-sm sm:text-lg font-semibold ml-2'>Total listings</p></div>
                                </div>
                            </div>
                            <div className='pt-5'>
                                <div className='border-primary-3 border w-[270px] h-16 flex justify-center items-center rounded-lg mb-5'>
                                    <p className='text-lg font-semibold ml-2'>Property for Sale</p>
                                    <span className='w-[40px] h-[40px] text-center p-2 text-lg font-semibold text-white border-1 border-primary rounded-full bg-[#018191] ml-4'>
                                        {userId.Propertforsale}
                                    </span>
                                </div>
                                <div className='border-primary-3 border w-[270px] h-16 flex justify-center items-center rounded-lg'>
                                    <p className='text-lg font-semibold ml-2'>Property for Rent</p>
                                    <span className='w-[40px] h-[40px] text-center p-2 text-lg font-semibold text-white border-1 border-primary rounded-full bg-[#018191] ml-4'>
                                        {userId.propertforrent}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-4/12 md:w-6/12 sm:w-12/12 p-10">
                            <form className="p-10 rounded-lg shadow-lg " style={{ borderRadius: '17px', border: '1px solid rgba(0, 0, 0, 0.14)', background: '#FFF' }}>
                                <div className="mb-4">
                                    <label className="block font-semibold mb-1">Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-2 py-2 rounded-md border border-gray-300 focus:border-primary focus:ring focus:ring-primary" placeholder='Full Name'
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block font-semibold mb-1">Email</label>
                                    <input
                                        type="email"
                                        className="w-full px-2 py-2 rounded-md border focus:border-primary focus:ring focus:ring-primary" placeholder='Email Id'
                                    />
                                </div>
                                <div className="mb-4 relative">
                                    <label className="block font-semibold mb-1">Mobile Number</label>
                                    <div className="relative">
                                        <select
                                            className="absolute left-0 px-2 border rounded-l-m appearance-none h-full w-20 focus:outline-none focus:ring-primary"
                                        >
                                            {countryCodes.map((code) => (
                                                <option key={code} value={code}>{code}</option>
                                            ))}
                                        </select>
                                        <input
                                            type="tel"
                                            className="pl-24 w-full px-2 py-2 rounded-r-md border border-l-0 focus:border-primary focus:ring focus:ring-primary" placeholder='Mobile Number'
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
                </div>}
        </div>
    )
}
