import React from 'react'
import mVerified from '../../assets/moreIcon/mVerified.svg'
import Image from 'next/image';
import Styles from "./index.module.css"

export default function Mscore_Mverifid({ Data }) {
    return (
        <div className='flex lg:justify-start md:justify-between justify-between lg:gap-20'>
            <div className={`${Styles.Mscore_Mverifid}`}>
                <div className='flex gap-1'>
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
                <div className='flex gap-1'>
                    <Image
                        className="bg-contain"
                        src={mVerified}
                        alt="M-verified"
                        height={22}
                        width={23}
                    />
                    <div>
                        M-Score: 100
                    </div>
                </div>
            </div>
        </div>
    )
}
