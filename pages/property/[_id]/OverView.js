import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

export default function OverView({ props }) {
    const [expanded, setExpanded] = useState(false);
    const [view, setView] = useState(true);

    const handleMobileView = () => {
        setView(!view);
    }

    const togglePoints = () => {
        setExpanded(!expanded);
    };

    return (
        <div>
            <div className="bg-[#931602] rounded-t-lg shadow-md p-4" onClick={handleMobileView}>
                <div>
                    <h1 className="text-white text-2xl font-semibold">Overview</h1>
                </div>
            </div>
            {
                view &&
                <div className="bg-white px-10 py-5 shadow-md">
                    <div className="p-5">
                        <p>{props?.heading}</p>
                    </div>
                    <div>
                        <ul className="list-disc list-inside space-y-3 px-10 text-sm">
                            {props?.points?.map((point, index) => (
                                <li key={index} style={{ display: expanded || index < 3 ? 'block' : 'none' }}>
                                    • {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex items-center justify-center mt-4" onClick={togglePoints}>
                        <p className="cursor-pointer">Read More</p>
                        <div className="w-10 h-10 rounded-full flex items-center justify-center mr-2 order-first border border-[#e8dfd6]">
                            {expanded ? <FaAngleUp size={20} /> : <FaAngleDown size={20} />}
                        </div>
                    </div>


                </div>
            }
        </div>
    );
}
