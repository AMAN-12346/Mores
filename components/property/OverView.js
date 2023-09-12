import useWindowWidth from '@/context/useWindowWidth';
import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

export default function OverView({ props }) {
    const [expanded, setExpanded] = useState(false);
    const [view, setView] = useState(true);
    const [Up, setUp] = useState(true);

    const windowWidth = useWindowWidth();

    const handleMobileView = () => {
        setView(!view);
    }

    const togglePoints = () => {
        setExpanded(!expanded);
    };

    return (
        <div>
            <div className="bg-[#931602] flex justify-between rounded-t-lg shadow-md lg:p-4 md:p-3 p-2" onClick={handleMobileView}>
                <div>
                    <h1 className="text-white text-[14px] font-semibold">Overview</h1>
                </div>
                {(windowWidth < 768 ? <div className='bg-white rounded-full w-[30px] h-[30px] pl-[2px] pt-1' onClick={() => setUp(!Up)}>
                    <h1 className="text-black text-lg font-semibold">{Up ? <FaAngleUp size={25} /> : <FaAngleDown size={25} />}</h1>
                </div> : "")}
            </div>
            {
                view &&
                <div className="bg-white px-6 py-2 shadow-md">
                    <div className="p-5 text-[12px]">
                        <p>{props?.heading}</p>
                    </div>
                    <div>
                        <ul className="list-disc list-inside space-y-3 px-10 text-[10px]">
                            {props?.points?.map((point, index) => (
                                <li key={index} style={{ display: expanded || index < 3 ? 'block' : 'none' }}>
                                    • {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex items-center justify-center mt-4" onClick={togglePoints}>
                        <p className="cursor-pointer text-[12px]">Read More</p>
                        <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center mr-2 order-first border border-[#e8dfd6]">
                            {expanded ? <FaAngleUp size={20} /> : <FaAngleDown size={20} />}
                        </div>
                    </div>


                </div>
            }
        </div>
    );
}
