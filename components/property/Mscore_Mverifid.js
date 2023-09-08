import React from 'react'
import mVerified from '../../assets/moreIcon/mVerified.png'
import MScore from '../../assets/moreIcon/MScore.png'
import Image from 'next/image';
import Styles from "./index.module.css"

export default function Mscore_Mverifid({ Data }) {
    return (
        <div className='flex lg:justify-start md:justify-between justify-between lg:gap-24 m-4'>
            <div className={`${Styles.Mscore_Mverifid}`}>
                <div className='flex gap-1 px-3 py-2'>
                    <Image
                        className="bg-contain md:mr-2"
                        src={mVerified}
                        alt="M-verified"
                        height={22}
                        width={23}
                    />
                    <div>
                        {Data?.propertyType}
                    </div>
                </div>
            </div>
            <div>
                <div className='flex gap-1 bg-[#a7d6dd] rounded-full px-5 py-2'>
                    <Image
                        className="bg-contain"
                        src={MScore}
                        alt="M-verified"
                        height={22}
                        width={23}
                    />
                    <p className='text-[#358a97] font-bold'>100</p>
                </div>
            </div>
        </div>
    )
}
