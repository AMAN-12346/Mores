import React from 'react'

export default function OverView({ props }) {
    return (
        <div>
            <div className="bg-[#931602] rounded-t-lg shadow-md p-4">
                <div>
                    <h1 className="text-white text-2xl font-semibold">Overview</h1>
                </div>
            </div>
            <div className="bg-white px-10 py-5 shadow-md">
                <div className="p-5">
                    <p>{props?.heading}</p>
                </div>
                <div>
                    <ul className="list-disc list-inside space-y-3 px-10">
                        {props?.points?.map((point, index) => (
                            <li key={index}>
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

    )
}
