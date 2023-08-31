import React from 'react'

const userId = {
    name: "Johan Deep",
    MobileNumber: "+91 858395348",
    Images: "https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2017/11/17/639329-indian-men.jpg?im=Resize=(700,400)",
    YearOfExprience: 7,
    onSellProperty: 8,
    onRentProperty: 12
}
export default function AgentFrom() {
    const countryCodes = ['+1', '+44', '+91', '+86', '+81'];
    return (
        <div>
            <div className="bg-[#A37F4F] rounded-t-lg shadow-md p-4">
                <div>
                    <h1 className="text-white text-2xl font-semibold">Agent Overview</h1>
                </div>
            </div>
            <div className="bg-white shadow-md">
                <div className='w-12/12 mb-4 md:flex'>
                    <div className='w-8/12 p-10'>
                        <div className='lg:flex md:justify-start gap-10'>
                            <div className='flex items-center '>
                                <div>
                                    <img
                                        src={userId.Images}
                                        alt="User Profile"
                                        className="w-24 h-24 flex-shrink-0 border-2 border-primary rounded-full mr-4"
                                    />
                                </div>
                                <div>
                                    <p className="text-lg font-semibold">{userId.name}</p>
                                    <p className="text-lg">{userId.MobileNumber}</p>
                                </div>
                            </div>
                            <div className=' bg-[#ddeae8] w-[450px] lg:w-[500px] h-24 mt-6 flex justify-start items-center rounded-lg'>
                                <span className='w-[40px] h-[40px] text-center p-2 text-lg font-semibold text-white border-1 border-primary rounded-full bg-[#018191] ml-4'>{userId.YearOfExprience}</span><p className='text-lg font-semibold ml-2'>YearOfExprience</p>
                                <span className='w-[40px] h-[40px] text-center p-2 text-lg font-semibold text-white border-1 border-primary rounded-full bg-[#018191] ml-5'>{userId.YearOfExprience}</span><p className='text-lg font-semibold ml-2'>YearOfExprience</p>
                            </div>
                        </div>
                        <div className='p-8'>
                            <div className='border-primary-3 border w-[400px] h-16 flex justify-center items-center rounded-lg mb-5'>
                                <p className='text-lg font-semibold ml-2'>YearOfExprience</p>
                                <span className='w-[40px] h-[40px] text-center p-2 text-lg font-semibold text-white border-1 border-primary rounded-full bg-[#018191] ml-4'>
                                    {userId.YearOfExprience}
                                </span>
                            </div>
                            <div className='border-primary-3 border w-[400px] h-16 flex justify-center items-center rounded-lg'>
                                <p className='text-lg font-semibold ml-2'>YearOfExprience</p>
                                <span className='w-[40px] h-[40px] text-center p-2 text-lg font-semibold text-white border-1 border-primary rounded-full bg-[#018191] ml-4'>
                                    {userId.YearOfExprience}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-4/12 w-6/12 mt-7 mb-7 mr-6">
                        <form className="md:max-w-md p-11 rounded-lg shadow-lg" style={{ borderRadius: '17px', border: '1px solid rgba(0, 0, 0, 0.14)', background: '#FFF' }}>
                            <div className="mb-4">
                                <label className="block font-semibold mb-1">Name</label>
                                <input
                                    type="text"
                                    className="w-full px-7 py-5 rounded-md border border-gray-300 focus:border-primary focus:ring focus:ring-primary" placeholder='Full Name'
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block font-semibold mb-1">Email</label>
                                <input
                                    type="email"
                                    className="w-full  px-7 py-5 rounded-md border focus:border-primary focus:ring focus:ring-primary" placeholder='Email Id'
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
                                        className="pl-24 w-full py-2 rounded-r-md border border-l-0 focus:border-primary focus:ring focus:ring-primary" placeholder='Mobile Number'
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
        </div>
    )
}
