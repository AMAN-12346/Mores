import React from 'react'

export default function AgentFrom() {
    const countryCodes = ['+1', '+44', '+91', '+86', '+81'];
    return (
        <div>
            <div className="bg-[#A37F4F] rounded-t-lg shadow-lg p-2">
                <div>
                    <h1 className="text-white text-2xl font-semibold">Agent Overview</h1>
                </div>
            </div>
            <div className="bg-white">
                <div className='w-12/12 flex mb-4'>
                    <div className='w-8/12'>
                        <p>dsadsa</p>
                    </div>
                    <div className="w-4/12 mt-7 mb-7">
                        <form className="w-full max-w-md p-11 rounded-lg shadow-lg" style={{ borderRadius: '17px', border: '1px solid rgba(0, 0, 0, 0.14)', background: '#FFF' }}>
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
