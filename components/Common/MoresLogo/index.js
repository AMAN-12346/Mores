"use client";
import Link from 'next/link';
import Styles from './index.module.css';
import moresImage from '../../../assets/moreIcon/MoresLogo.svg';
import Image from 'next/image';


const MoresLogo = () => {
    return ( 
        <div className={Styles.navLogo}>
            <Link href='/'>
                <Image src={moresImage} alt='Mores-Logo' width={143} />
            </Link>
        </div>
     );
}
 
export default MoresLogo;