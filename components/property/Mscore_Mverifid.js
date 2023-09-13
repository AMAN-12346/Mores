import React from 'react'
import mVerified from '../../assets/moreIcon/mVerified.png'
import MScore from '../../assets/moreIcon/MScore.png'
import Image from 'next/image';
import Styles from "./index.module.css"

export default function Mscore_Mverifid({ Data }) {
    return (
        <div className='flex lg:justify-start lg:gap-[50px] justify-between gap-[150px]  lg:text-lg md:text-lg text-sm mr-3 my-2 ml-3'>
            <div className={`${Styles.Mscore_Mverifid}`}>
                <div className='flex gap-1 text-[13px]'>
                    <Image
                        className="bg-contain md:mr-2 h-[25px]"
                        src={mVerified}
                        alt="M-verified"
                        height={10}
                        width={20}
                    />
                    <div>
                        {Data?.propertyType}
                    </div>
                </div>
            </div>
            <div className='flex gap-1 bg-[#01819138] rounded-full px-7 py-1'>
                    <Image
                        className="bg-contain h-[25px]"
                        src={MScore}
                        alt="M-verified"
                        height={10}
                        width={20}
                    />
                    <p className='text-[#018191] text-[14px] font-bold'>100</p>
                </div>
        </div>
    )
}
