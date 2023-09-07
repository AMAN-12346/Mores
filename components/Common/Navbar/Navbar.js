"use client";
import Styles from './Navbar.module.css';
import Link from 'next/link';
import Image from 'next/image';
import fillHeart from '../../../assets/ButtonIcons/ph_heart-fill.svg';
import notificationBell from '../../../assets/ButtonIcons/NotificationBell.svg';
import { useAuth } from '@/context/auth';
import MoresLogo from '../MoresLogo';
import { useRouter } from 'next/router';
import ProfileDropdownButton from '@/utils/ProfileDropdownButton/ProfileDropdownButton';
import DropdownButton from '@/utils/DropdownButton/DropdownButton';
import useWindowWidth from '@/context/useWindowWidth';
import BurgerMenu from './BurgerMenu';
import MobileMenu from './MobileMenu';
import { useEffect, useState } from 'react';
import navbarContent from '@/content/Navbar';

 
const Navbar = () => {
    const [auth, setAuth] = useAuth();
    const [navbarContentData, setNavbarContentData] = useState(navbarContent);
    const [lastScrollY, setLastScrollY] = useState(0);

    const router = useRouter();
    const windowWidth = useWindowWidth();

    // List of paths where Navbar should be hidden
    const pathsWithoutNavbar = ['/login', '/register','/otpVerify'];

    if (pathsWithoutNavbar.includes(router.pathname)) {
        return null; // Do not render the Navbar
    }

    // for mobile view
    if(windowWidth < 768){
        return (
            <>
               <MobileMenu />
            </>
        )
    }



    return ( 
        <div className={Styles.navbar}>
           <div className={`flex pl-4 md:justify-between lg:justify-normal ${Styles.outerDiv}`}>
                {(windowWidth >1024) ?
                    <div className='w-[64vw] flex items-center'>
                        <div className='w-[150px]'>
                            <MoresLogo />
                        </div>

                        <div className={`flex justify-evenly ml-9`}> 
                        {Object.keys(navbarContentData).map((content)=> 
                            <div className={Styles.optionName}>
                               <DropdownButton optionName={content} menuItem={navbarContentData[content]} />  
                            </div>
                        )}
                        </div> 
                    </div>
                : 
                <div className='flex w-[180px] justify-between mt-[10px]'>
                    <BurgerMenu />
                    <div className='w-[130px]'>
                            <MoresLogo />
                    </div>
                </div>
                }               
           
            <div className='md:w-[420px] lg:w-[420px]'>
                {!auth.userResult ? 
                    <div className='text-center flex hover:opacity-95 absolute right-9 lg:mt-[9px]'>
                        <button className={`mr-3 ${Styles.sellRentButton}`}>Sell & Rent Property</button>
                        <Link href='/login'>
                            <button className={Styles.button}>Login Now</button> 
                        </Link>
                    </div>
                :
                    <div className='flex flex-start md:mt-[1px] lg:mt-[7px]'>
                        <button className={`mr-4 mt-[2px] ${Styles.sellRentButton}`}>Sell & Rent Property</button>
                        <Image src={fillHeart} width={24} height={28} className='mr-4'/>

                        <Image src={notificationBell} width={17} height={21}/>
                        <div className='relative pt-3 mr-4'>
                            <p className={Styles.counter}>{auth.userResult?.notification?.length ? auth.userResult?.notification?.length : 0}</p>
                        </div>
            
                        <div className={Styles.optionName}>
                            <div className={Styles.name}>
                                <ProfileDropdownButton />
                            </div>                         
                        </div>
                    </div>
                }
            </div>
            </div>
        </div>
     );
}
 
export default Navbar;