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
import { useState } from 'react';
import navbarContent from '@/content/Navbar';

 
const Navbar = () => {
    const [auth, setAuth] = useAuth();
    const [navbarContentData, setNavbarContentData] = useState(navbarContent);

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
           <div className={`flex w-[100vw] ml-5 md:justify-between lg:justify-normal`}>
                {(windowWidth >1024) ?
                    <div className='w-[65vw] flex items-center'>
                        <div className='w-[13vw]'>
                            <MoresLogo />
                        </div>

                        <div className={`flex justify-evenly mr-4 ml-7`}> 
                        {Object.keys(navbarContentData).map((content)=> 
                            <div className={Styles.optionName}>
                               <DropdownButton optionName={content} menuItem={navbarContentData[content]} />  
                            </div>
                        )}
                        </div> 
                                    
                        {/* <div className={`flex justify-evenly mr-4 ml-7`}> 
                            <div className={Styles.optionName}>
                                <DropdownButton optionName="City" menuItem={['random', 'data']} />  
                            </div>
                            <div className={Styles.optionName}>
                                <DropdownButton optionName="Sell" menuItem={['random', 'data']} />  
                            </div>
                            <div className={Styles.optionName}>
                                <DropdownButton optionName="Rent" menuItem={['random', 'data']} />  
                            </div>
                            <div className={Styles.optionName}>
                                <DropdownButton optionName="Projects" menuItem={['random', 'data']} />  
                            </div>
                            <div className={Styles.optionName}>
                                <DropdownButton optionName="Agents" menuItem={['random', 'data']} />  
                            </div>
                            <div className={Styles.optionName}>
                                <DropdownButton optionName="services" menuItem={['random', 'data']} />  
                            </div>
                            <div className={Styles.optionName}>
                                <DropdownButton optionName="Resources" menuItem={['random', 'data']} />  
                            </div>
                        </div>  */}
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
                    <div className='text-center hover:opacity-95 -mr-16'>
                        <Link href='/login'>
                            <button className={Styles.button}>Login Now</button> 
                        </Link>
                    </div>
                :
                    <div className='flex flex-start'>
                        <button className={`mr-3 ${Styles.sellRentButton}`}>Sell & Rent Property</button>
                        <Image src={fillHeart} width={24} height={28} className='mr-2'/>

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